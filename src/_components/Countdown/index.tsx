import { useSessionContext } from '@contexts/SessionContext';
import { CountdownContainer, PointerContainer, Separator } from './style';
import { useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';
import { timeLengthEnum } from '@constants/generalConstants';

export function Countdown() {
  const {
    activeSession,
    activeSessionId,
    markCurrentSessionAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useSessionContext();

  const totalSeconds = activeSession
    ? activeSession.minutesAmount * timeLengthEnum.MAX
    : timeLengthEnum.MIN;
  const currentSeconds = activeSession
    ? totalSeconds - amountSecondsPassed
    : timeLengthEnum.MIN;
  const minutesAmount = Math.floor(currentSeconds / timeLengthEnum.MAX);
  const secondsAmount = currentSeconds % timeLengthEnum.MAX;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    let intervalSession: number;
    if (activeSession) {
      intervalSession = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeSession.startDate,
        );
        if (secondsDifference >= totalSeconds) {
          markCurrentSessionAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(intervalSession);
          return;
        }
        setSecondsPassed(secondsDifference);
      }, timeLengthEnum.INTERVAL_SESSION);
    }

    return () => {
      clearInterval(intervalSession);
    };
  }, [
    activeSession,
    totalSeconds,
    activeSessionId,
    markCurrentSessionAsFinished,
  ]);

  useEffect(() => {
    if (activeSession) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeSession]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>
        <PointerContainer>
          <span>.</span>
          <span>.</span>
        </PointerContainer>
      </Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
