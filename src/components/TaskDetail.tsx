import { useEffect, useState } from 'react';

import { taskAction } from '../action/task-action';
import { Task } from '../data/tasks';

type TaskDetailProps = {
  id: string;
};

export default function TaskDetail({ id }: TaskDetailProps) {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const task = taskAction.getDetail(id);
    setTask(task);
  }, [id]);

  return (
    <div className="mt-3 p-3 w-160 overflow-y-scroll h-60">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-semibold">{task?.title}</h3>
      </header>
      <p className="text-base text-gray-400 leading-relaxed">{task?.description}</p>
    </div>
  );
}
