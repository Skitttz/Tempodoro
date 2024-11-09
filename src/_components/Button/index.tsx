import { IconPlayerPlay, IconHandStop } from '@tabler/icons-react';
import { StartCountdownButton, StopCountdownButton } from './style';
import { useSessionContext } from '@contexts/SessionContext';

interface SessionButtonsProps {
  isSubmitDisable: boolean;
}

export function SessionButtons({ isSubmitDisable }: SessionButtonsProps) {
  const { activeSession, interruptCurrentSession } = useSessionContext();
  const titlePage = 'Tempodoro';

  function handleInterruptCurrentSession() {
    interruptCurrentSession();
    document.title = titlePage;
  }

  return activeSession ? (
    <StopCountdownButton onClick={handleInterruptCurrentSession} type="button">
      <IconHandStop size={24} /> Interromper
    </StopCountdownButton>
  ) : (
    <StartCountdownButton disabled={isSubmitDisable} type="submit">
      <IconPlayerPlay size={24} />
      Começar
    </StartCountdownButton>
  );
}
