import { useTasks } from './hooks/useTasks';
import { AddNewTaskForm, TaskBoard, TaskColumn } from './components';
import { TaskStatus, TaskType } from './types';

export function ChallengeComponent() {
  const { tasks, addTask, changeStatus } = useTasks();

  const taskFilter = (status: TaskStatus): TaskType[] => {
    return tasks.filter(task => task.status === status);
  }

  return (
    <TaskBoard>
      <>
        <TaskColumn status={TaskStatus.TODO} tasks={taskFilter(TaskStatus.TODO)} onStatusChange={changeStatus} />
        <TaskColumn status={TaskStatus.IN_PROGRESS} tasks={taskFilter(TaskStatus.IN_PROGRESS)} onStatusChange={changeStatus}/>
        <TaskColumn status={TaskStatus.DONE} tasks={taskFilter(TaskStatus.DONE)} onStatusChange={changeStatus} />
        <AddNewTaskForm onSubmit={addTask} />
      </>
    </TaskBoard>
  )
}
