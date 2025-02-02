export type Task = {
  id: string;
  position: number;
  title: string;
  description: string;
  status: Status;
  isLocked: boolean;
};

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a nunc viverra, commodo urna nec, malesuada nisi. Curabitur in metus ut risus fringilla dignissim. Aliquam massa dui, rutrum id libero ac, cursus tempus diam. Nunc posuere turpis sodales dictum convallis. Sed vehicula accumsan ante, in volutpat nisl vestibulum ut. Suspendisse et ligula euismod tortor rhoncus aliquet feugiat quis elit. Pellentesque ut viverra ligula. Quisque auctor, velit et pulvinar venenatis, erat odio varius risus, eget tempor lacus turpis ac nisl. In hac habitasse platea dictumst. Nunc efficitur tincidunt ultricies. Mauris mattis ullamcorper mauris, at lacinia sem interdum sed. Morbi neque nulla, placerat eu neque et, cursus sagittis enim. Duis at laoreet eros, et scelerisque sapien. Fusce semper dui id lacinia faucibus.';

export const INITIAL_TASKS: Task[] = [
  {
    id: 'TASK-1',
    position: 0,
    title: 'Learn HTML',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
  {
    id: 'TASK-2',
    position: 1,
    title: 'Learn CSS',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
  {
    id: 'TASK-3',
    position: 2,
    title: 'Learn Javascript',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
  {
    id: 'TASK-4',
    position: 3,
    title: 'Learn React',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
  {
    id: 'TASK-5',
    position: 4,
    title: 'Learn Typescript',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
  {
    id: 'TASK-6',
    position: 5,
    title: 'Learn Next js',
    description: DESCRIPTION,
    status: 'TODO',
    isLocked: false,
  },
];
