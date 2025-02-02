import { TASK_LOCAL_STORAGE_KEY } from '../constants';
import { INITIAL_TASKS, Status, Task } from '../data/tasks';

type ChangeData = {
  id: string;
  status: Status;
  position: number;
};

export const taskAction = {
  updateStatusAndPosition: ({ id, status, position }: ChangeData) => {
    const tasksStorage = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    const tasks = JSON.parse(tasksStorage!) as Task[];
    const index = tasks.findIndex((task) => task.id === id);

    if (tasks[index].status !== status) {
      tasks.forEach((task) => {
        if (task.status === status && task.position >= position) {
          task.position += 1;
        }

        if (task.status === tasks[index].status && task.position > tasks[index].position) {
          task.position -= 1;
        }
      });
    }

    if (tasks[index].status === status) {
      tasks.forEach((task) => {
        if (
          task.status === status &&
          task.position >= position &&
          task.position < tasks[index].position
        ) {
          task.position += 1;
        }

        if (
          task.status === status &&
          task.position <= position &&
          task.position > tasks[index].position
        ) {
          task.position -= 1;
        }
      });
    }

    tasks[index].position = position;
    tasks[index].status = status;
    localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  },

  updateLock: (id: string) => {
    const tasksStorage = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    const tasks = JSON.parse(tasksStorage!) as Task[];
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].isLocked = !tasks[index].isLocked;
    localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  },

  getDetail: (id: string) => {
    const tasksStorage = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    const tasks = JSON.parse(tasksStorage!) as Task[];
    const index = tasks.findIndex((task) => task.id === id);
    return tasks[index];
  },

  getTasks: () => {
    const tasksStorage = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    const isTasksNull = tasksStorage === null;
    if (isTasksNull) {
      localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_TASKS));
    }
    const tasks = JSON.parse(tasksStorage!) as Task[];
    return tasks;
  },
};
