import { differenceInSeconds } from 'date-fns';
import { useEffect, useReducer, useState } from 'react';
import {
  addNewSessionAction,
  deleteSessionAction,
  interruptCurrentSessionAction,
  markCurrentSessionAsFinishedAction,
} from '@reducers/sessions/actions';
import { sessionsReducer } from '@reducers/sessions/reducer';
import {
  ICreateSessionData,
  ISessionContextProvider,
  Session,
} from '@interfaces/session-data';
import { SessionContext } from '@contexts/SessionContext';
import { TempodoroStorageKeysEnum } from '@constants/generalConstants';

export function SessionProvider({ children }: ISessionContextProvider) {
  const [sessionsState, dispatch] = useReducer(
    sessionsReducer,
    {
      sessions: [],
      activeSessionId: null,
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        TempodoroStorageKeysEnum.SESSION_STATE,
      );

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      }

      return {
        sessions: [],
        activeSessionId: null,
      };
    },
  );

  const { sessions, activeSessionId } = sessionsState;
  const activeSession = sessions.find(
    (Session: any) => Session.id === activeSessionId,
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeSession) {
      return differenceInSeconds(new Date(), new Date(activeSession.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(sessionsState);

    localStorage.setItem(TempodoroStorageKeysEnum.SESSION_STATE, stateJSON);
  }, [sessionsState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewSession(data: ICreateSessionData) {
    const id = String(new Date().getTime());

    const newSession: Session = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewSessionAction(newSession));

    setAmountSecondsPassed(0);
  }

  function interruptCurrentSession() {
    dispatch(interruptCurrentSessionAction());
  }

  function markCurrentSessionAsFinished() {
    dispatch(markCurrentSessionAsFinishedAction());
  }

  function deleteSession(SessionId: string) {
    dispatch(deleteSessionAction(SessionId));
  }

  return (
    <SessionContext.Provider
      value={{
        sessions,
        activeSession,
        activeSessionId,
        markCurrentSessionAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewSession,
        interruptCurrentSession,
        deleteSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
