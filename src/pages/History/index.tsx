import { useSessionContext } from '@contexts/SessionContext';
import { HistoryContainer, HistoryList, Status } from './style';
import { ptBR } from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns';
import { Session, StatusConfig } from '@interfaces/session-data';
import { EmptyHistory } from '@components/EmptyHistory';
import {
  SessionsStatusEnum,
  TempodoroStorageKeysEnum,
} from '@constants/generalConstants';
import { useLocalStorageWatcher } from '@hooks/useLocalStorageWatcher';

export function History() {
  const { sessions } = useSessionContext();
  const localStorageHistoryData = useLocalStorageWatcher(
    TempodoroStorageKeysEnum.SESSION_STATE,
  );

  const STATUS_CONFIG: Record<SessionsStatusEnum, StatusConfig> = {
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

  if (isHistoryEmpty) {
    return <EmptyHistory />;
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sessions?.map((session) => {
              const statusSession = getSessionStatus(session);
              return (
                <tr key={session.id}>
                  <td>{session.task}</td>
                  <td>{session.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(session.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {statusSession && (
                      <Status statusColor={STATUS_CONFIG[statusSession].color}>
                        {STATUS_CONFIG[statusSession].name}
                      </Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
