import { TaskStatus, TaskType } from "../../../types"
import { ArrowButton } from "./ArrowButton"

export const Task = ({ 
  task,
  prevStatus,
  nextStatus,
  onStatusChange
}: {
  task: TaskType,
  prevStatus?: TaskStatus,
  nextStatus?: TaskStatus,
  onStatusChange: (status: TaskStatus, id: string) => void
}) => {
  return(
    <li>
      <ArrowButton 
        disabled={!prevStatus} 
        onClick={() =>  prevStatus && onStatusChange(prevStatus, task.id)}
        type="prev"  
      />
      <p>{task.text}</p>
      <ArrowButton 
        disabled={!nextStatus} 
        onClick={() => nextStatus && onStatusChange(nextStatus, task.id)}
        type="next"
      />
    </li>
  )
}