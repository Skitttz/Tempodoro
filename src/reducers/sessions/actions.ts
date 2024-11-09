import { Session } from "@interfaces/session-data"

export enum ActionTypes{
  ADD_NEW_SESSION = 'ADD_NEW_SESSION',
  INTERRUPT_CURRENT_SESSION = 'INTERRUPT_CURRENT_SESSION',
  MARK_CURRENT_SESSION_FINISHED = 'MARK_CURRENT_SESSION_FINISHED',
  DELETE_SESSION = 'DELETE_SESSION',
}

export function addNewSessionAction(newSession : Session){
  return {
    type: ActionTypes.ADD_NEW_SESSION,
    payload:{
      newSession,
    }
  }
}

export function markCurrentSessionAsFinishedAction(){
  return{
    type: ActionTypes.MARK_CURRENT_SESSION_FINISHED
  }
}

export function interruptCurrentSessionAction(){
  return{
    type: ActionTypes.INTERRUPT_CURRENT_SESSION
  }
}

export function deleteSessionAction(sessionId: string){
  return{
    type: ActionTypes.DELETE_SESSION,
    payload:{
      sessionId,
    }
  }
}