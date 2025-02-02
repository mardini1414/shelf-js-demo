import { Droppable } from '@mardinidev/shelf-js';

import { Status } from '../data/tasks';

type TaskListProps = {
  children?: React.ReactNode;
  title: string;
  shelfKey: Status;
};

export default function TaskList({ children, title, shelfKey }: TaskListProps) {
  return (
    <div className="bg-blue-50 pt-2 rounded-sm transition-all duration-300 ease-in-out task-list">
      <header className="pb-2 border-b border-gray-500/50">
        <h2 className="text-center font-semibold">{title}</h2>
      </header>
      <Droppable shelfKey={shelfKey} className="w-60 h-114 overflow-y-scroll no-scrollbar px-2">
        {children}
      </Droppable>
    </div>
  );
}
