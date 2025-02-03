import MessageView from './components/MessageView';
import TaskView from './components/TaskView';
import useDevice from './hooks/use-device';

export default function App() {
  const { width, isTouch } = useDevice();

  return (
    <div
      className="w-full h-screen grid place-content-center"
      onResize={(event) => console.log(event)}
    >
      {isTouch || width < 1024 ? <MessageView /> : <TaskView />}
    </div>
  );
}
