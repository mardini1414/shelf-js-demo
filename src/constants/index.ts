import { Status } from '../data/tasks';

type TaskStatus = {
  TODO: Status;
  IN_PROGRESS: Status;
  DONE: Status;
};

export const TASK_LOCAL_STORAGE_KEY = 'TASK';
export const TASK_STATUS: TaskStatus = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};
