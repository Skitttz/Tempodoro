import { SessionsStatusEnum, TempodoroStorageKeysEnum } from "@constants/generalConstants";
import { Session } from "@interfaces/session-data";
import { useLocalStorageWatcher } from "./useLocalStorageWatcher";
import { useSessionContext } from "@contexts/SessionContext";

export function useHistory(){
  const { sessions } = useSessionContext();

  const localStorageHistoryData = useLocalStorageWatcher(
    TempodoroStorageKeysEnum.SESSION_STATE,
  );

  const statusChecker: [SessionsStatusEnum, (session: Session) => boolean][] = [
    [
      SessionsStatusEnum.FINISHED,
      (session: Session) => Boolean(session.finishedDate),
    ],
    [
      SessionsStatusEnum.INTERRUPTED,
      (session: Session) => Boolean(session.interruptedDate),
    ],
    [SessionsStatusEnum.IN_PROGRESS, () => true],
  ];

  const getSessionStatus = (session: Session): SessionsStatusEnum => {
    for (const [status, check] of statusChecker) {
      if (check(session)) {
        return status;
      }
    }
    return SessionsStatusEnum.IN_PROGRESS;
  };

  const isHistoryEmpty = !localStorageHistoryData || sessions.length === 0;

  return{ isHistoryEmpty, sessions ,getSessionStatus}
}