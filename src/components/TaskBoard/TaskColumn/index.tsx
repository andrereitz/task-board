import styled from 'styled-components';
import { TaskStatus, TaskType } from '../../../types';
import { Task } from '../Task';
import { mapNextPrevStatus } from '../../../utils/mapNextPrevStatus';

const StTaskBoard = styled.div`
  flex: 1 1 33%;
  display: flex;
  flex-flow: row wrap;
  padding: 30px;
  box-sizing: border-box;
  align-content: flex-start;

  h2 {
    flex: 1 1 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justy-content: space-around;

      p {
        flex: 1 1 100%;
        padding: 15px
      }
    }
  }
`

export const TaskColumn = ({ 
  status,
  tasks,
  onStatusChange
}: {
  status: TaskStatus,
  tasks: TaskType[],
  onStatusChange: (status: TaskStatus, id: string) => void
}) => {  
  const { prev, next } = mapNextPrevStatus(status);

  return (
    <StTaskBoard>
      <h2>{status}</h2>
      <ul>
        {tasks.map((task: TaskType) => (
          <Task 
            task={task} 
            onStatusChange={onStatusChange} 
            prevStatus={prev} 
            nextStatus={next}
            key={task.id}
          />
        ))}
      </ul>
    </StTaskBoard>
  )
}