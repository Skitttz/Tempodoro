import { IconPlayerPlay, IconHandStop } from '@tabler/icons-react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './style';
import { Countdown } from '@components/Countdown';
import { FormSession } from '@components/Form';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useSessionContext } from '@contexts/SessionContext';

export function Home() {
  const { createNewSession, activeSession, interruptCurrentSession } =
    useSessionContext();
  const newSessionFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'A tarefa precisa ser de no mínimo 5 minutos.')
      .max(60, 'A tarefa precisa ser de no máximo 60 minutos.'),
  });
  const titlePage = 'Tempodoro';

  type NewSessionFormData = zod.infer<typeof newSessionFormValidationSchema>;

  const newSessionForm = useForm<NewSessionFormData>({
    resolver: zodResolver(newSessionFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newSessionForm;
  const task = watch('task');
  const isSubmitDisable = !task;

  function handleCreateNewSession(data: NewSessionFormData) {
    createNewSession(data);
    reset();
  }

  function handleInterruptCurrentSession() {
    interruptCurrentSession();
    document.title = titlePage;
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewSession)} action="">
        <FormProvider {...newSessionForm}>
          <FormSession />
        </FormProvider>
        <Countdown />
        {activeSession ? (
          <StopCountdownButton
            onClick={handleInterruptCurrentSession}
            type="button"
          >
            <IconHandStop size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <IconPlayerPlay size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
