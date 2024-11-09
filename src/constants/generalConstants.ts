import { StatusConfig } from "@interfaces/session-data";

export enum TempodoroStorageKeysEnum {
  SESSION_STATE = '@tempodoro:sessions-state'
}

export enum SessionsStatusEnum {
  FINISHED = 'FINISHED',
  INTERRUPTED = 'INTERRUPTED',
  IN_PROGRESS = 'IN_PROGRESS',
}

export const STATUS_CONFIG: Record<SessionsStatusEnum, StatusConfig> = {
  [SessionsStatusEnum.FINISHED]: {
    name: 'Concluido',
    color: 'green',
  },
  [SessionsStatusEnum.INTERRUPTED]: {
    name: 'Interrompido',
    color: 'red',
  },
  [SessionsStatusEnum.IN_PROGRESS]: {
    name: 'Em andamento',
    color: 'yellow',
  },
};

export enum MessagesEnum {
  EMPTY_HISTORY = 'Ops! Parece que você não tem nenhuma tarefa...',
  CONFIRM_DELETE_HISTORY = 'Tem certeza que deseja deletar todo o historico de tarefas?',
}


export enum timeLengthEnum {
  MIN = 0,
  MAX = 60,
  INTERVAL_SESSION = 1000,
}