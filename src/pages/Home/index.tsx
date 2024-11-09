import { HomeContainer } from './style';
import { Countdown } from '@components/Countdown';
import { FormSession } from '@components/Form';
import { FormProvider } from 'react-hook-form';
import { useSessionForm } from '@hooks/useSessionForm';
import { SessionButtons } from '@components/Button';

export function Home() {
  const {
    newSessionForm,
    handleSubmit,
    handleCreateNewSession,
    isSubmitDisable,
  } = useSessionForm();
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewSession)} action="">
        <FormProvider {...newSessionForm}>
          <FormSession />
        </FormProvider>
        <Countdown />
        <SessionButtons isSubmitDisable={isSubmitDisable} />
      </form>
    </HomeContainer>
  );
}
