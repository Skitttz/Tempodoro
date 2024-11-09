import { SessionState } from "@interfaces/session-data";
import { ActionTypes } from "./actions"
import { produce } from "immer"

export function sessionsReducer(state: SessionState, action :any ){
  switch(action.type){
    case ActionTypes.ADD_NEW_SESSION:
      return produce(state, (draft) =>{
        draft.sessions.push(action.payload.newSession)
        draft.activeSessionId = action.payload.newSession.id;
      })    
  
  case ActionTypes.INTERRUPT_CURRENT_SESSION: {
    const currencySessionIndex = state.sessions.findIndex((session) =>{
      return session.id === state.activeSessionId;
    })  

    if(currencySessionIndex < 0){
      return state;
    }

    return produce(state, (draft) => {
      draft.sessions[currencySessionIndex].interruptedDate = new Date();
      draft.activeSessionId = null;
    })
  }

  case ActionTypes.MARK_CURRENT_SESSION_FINISHED:{
    const currencySessionIndex = state.sessions.findIndex((session) => {
      return session.id === state.activeSessionId;
    })

    if(currencySessionIndex > 0){
      return state;
    }

    return produce(state,(draft) => {
      draft.sessions[currencySessionIndex].finishedDate = new Date();
      draft.activeSessionId = null;
    })
  }

  case ActionTypes.DELETE_SESSION: {
    const currencySessionIndex = state.sessions.findIndex((session) => {
      return session.id === state.activeSessionId;
    })

  if(currencySessionIndex > 0){
    return state;
  }

  return produce(state, (draft) => {
    draft.sessions.splice(currencySessionIndex,1);
  })
  }

  case ActionTypes.CLEAR_SESSIONS: { 
      return {
        sessions: [],
        activeSessionId: null,
      };
  }
  default:
    return state;
  }
}

