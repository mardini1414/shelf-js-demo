import { Draggable } from '@mardinidev/shelf-js';
import { Lock, LockOpen } from 'lucide-react';
import { MouseEvent, useState } from 'react';

type CardProps = {
  id: string;
  title: string;
  description: string;
  isLocked: boolean;
  onLocked: () => void;
  onClick: () => void;
};

export default function Card({ id, title, description, isLocked, onLocked, onClick }: CardProps) {
  const [locked, setLocked] = useState(isLocked);

  function updateLock(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setLocked((value) => !value);
    onLocked();
  }

  return (
    <Draggable itemKey={id} disabled={locked}>
      <div
        onClick={onClick}
        className={`mt-3 p-3 h-34 rounded-sm ${locked ? 'bg-gray-50' : 'bg-white shadow cursor-move'}`}
      >
        <header className="flex justify-between items-center mb-1">
          <h3
            onMouseUp={(event) => event.stopPropagation()}
            className="line-clamp-1 font-semibold mr-2"
          >
            {title}
          </h3>
          {locked ? (
            <div
              className="cursor-pointer bg-red-300/20 backdrop-blur-md p-1 rounded-full"
              onClick={updateLock}
            >
              <Lock className="text-red-500" size={14} />
            </div>
          ) : (
            <div
              className="cursor-pointer bg-green-300/20 backdrop-blur-md p-1 rounded-full"
              onClick={updateLock}
            >
              <LockOpen className="text-green-500" size={14} />
            </div>
          )}
        </header>
        <p
          onMouseUp={(event) => event.stopPropagation()}
          className="line-clamp-3 text-sm text-gray-400"
        >
          {description}
        </p>
        <h6 onMouseUp={(event) => event.stopPropagation()} className="text-xs text-end mt-2">
          {id}
        </h6>
      </div>
    </Draggable>
  );
}
