import { HistoryContainer, HistoryList, Status } from './style';
import { ptBR } from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns';
import { EmptyHistory } from '@components/EmptyHistory';
import { useHistory } from '@hooks/useHistory';
import { STATUS_CONFIG } from '@constants/generalConstants';

export function History() {
  const { getSessionStatus, isHistoryEmpty, sessions } = useHistory();
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
