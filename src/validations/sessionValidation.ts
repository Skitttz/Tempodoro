import * as zod from "zod"

export const newSessionFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'A tarefa precisa ser de no mínimo 5 minutos.')
    .max(60, 'A tarefa precisa ser de no máximo 60 minutos.'),
});

export type NewSessionFormData = zod.infer<typeof newSessionFormValidationSchema>;
