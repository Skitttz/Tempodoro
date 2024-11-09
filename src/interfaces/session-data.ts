import { IStatus } from "@pages/History/style";
import { ReactNode } from "react";

export interface ISessionContextProvider{
  children: ReactNode
}

export interface ICreateSessionData {
  task: string;
  minutesAmount: number;
}

export interface ISessionContext {
  sessions: Session[];
  activeSession: Session | undefined;
  activeSessionId: string | null;
  amountSecondsPassed: number;
  markCurrentSessionAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewSession: (data: ICreateSessionData) => void;
  interruptCurrentSession: () => void;
  deleteSession: (SessionId: string) => void;
}

export interface Session{
  id:string
  task:string
  minutesAmount:number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface SessionState{
  sessions: Session[]
  activeSessionId: string | null
}

export type StatusConfig = {
  color: IStatus['statusColor'];
  name: string;
};