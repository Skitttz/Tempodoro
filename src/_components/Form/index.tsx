import { useFormContext } from 'react-hook-form';
import { FormContainer, MinutesInput, TaskInput } from './style';
import { useSessionContext } from '@contexts/SessionContext';

export function FormSession() {
  const { activeSession } = useSessionContext();
  const { register } = useFormContext();
  return (
    <FormContainer aria-label="Formulario para Inserir nome e minutos da Respectiva Tarefa">
      <label htmlFor="task">Avançando em</label>
      <TaskInput
        list="task-suggestions"
        id="task"
        type="text"
        disabled={!!activeSession}
        placeholder="Digite o nome da sua tarefa"
        aria-label="Campo de Texto para Definir Nome da Tarefa"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Tarefa 1" />
        <option value="Tarefa 2" />
        <option value="Tarefa 3" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        aria-label="Campo para Definir Tempo da Tarefa"
        step={5}
        min={5}
        max={60}
        disabled={!!activeSession}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
