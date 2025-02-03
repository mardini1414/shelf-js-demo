import { TShelfData, useShelf } from '@mardinidev/shelf-js';
import { useEffect, useState } from 'react';

import { taskAction } from '../action/task-action';
import { TASK_STATUS } from '../constants';
import { Status, Task } from '../data/tasks';
import Card from './Card';
import Modal from './Modal';
import TaskDetail from './TaskDetail';
import TaskList from './TaskList';

export default function TaskView() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [id, setId] = useState('');

  const { init, getTasks, updateStatusAndPosition, updateLock } = taskAction;

  useEffect(() => {
    init();
    const data = getTasks();
    setTasks(data);
  }, [init, getTasks]);

  const [shelfRef] = useShelf({
    onOverClass: 'over',
    onChange,
  });

  function onChange({ dataKey, dataItemKey, dataItemIndex }: TShelfData) {
    updateStatusAndPosition({
      id: dataItemKey as string,
      status: dataKey as Status,
      position: dataItemIndex as number,
    });
  }

  function openModal(id: string) {
    setIsOpen(true);
    setId(id);
  }

  return (
    <>
      <Modal title={id} open={isOpen} onClose={() => setIsOpen(false)}>
        <TaskDetail id={id} />
      </Modal>
      <div>
        <header className="mb-8">
          <h1 className="font-bold text-3xl text-center">Manage your task 🚀</h1>
        </header>
        <div ref={shelfRef} className="flex gap-3 mx-auto w-min">
          <TaskList shelfKey={TASK_STATUS.TODO} title="TO DO">
            {tasks !== null
              ? tasks
                  .filter((task) => task.status === TASK_STATUS.TODO)
                  .sort((a, b) => a.position - b.position)
                  .map((task) => (
                    <Card
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      isLocked={task.isLocked}
                      onLocked={() => updateLock(task.id)}
                      onClick={() => openModal(task.id)}
                    />
                  ))
              : null}
          </TaskList>
          <TaskList shelfKey={TASK_STATUS.IN_PROGRESS} title="IN PROGRESS">
            {tasks !== null
              ? tasks
                  .filter((task) => task.status === TASK_STATUS.IN_PROGRESS)
                  .sort((a, b) => a.position - b.position)
                  .map((task) => (
                    <Card
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      isLocked={task.isLocked}
                      onLocked={() => updateLock(task.id)}
                      onClick={() => openModal(task.id)}
                    />
                  ))
              : null}
          </TaskList>
          <TaskList shelfKey={TASK_STATUS.DONE} title="DONE">
            {tasks !== null
              ? tasks
                  .filter((task) => task.status === TASK_STATUS.DONE)
                  .sort((a, b) => a.position - b.position)
                  .map((task) => (
                    <Card
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      isLocked={task.isLocked}
                      onLocked={() => updateLock(task.id)}
                      onClick={() => openModal(task.id)}
                    />
                  ))
              : null}
          </TaskList>
        </div>
      </div>
    </>
  );
}
