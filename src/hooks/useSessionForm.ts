import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSessionContext } from '@contexts/SessionContext';
import { 
  newSessionFormValidationSchema, 
  NewSessionFormData 
} from '@validations/sessionValidation';

export function useSessionForm() {
  const { createNewSession } = useSessionContext();

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

  return {
    newSessionForm,
    handleSubmit,
    handleCreateNewSession,
    isSubmitDisable,
  };
}