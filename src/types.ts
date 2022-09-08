export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done'
}

export type TaskType = {
  id: string,
  text: string,
  status: TaskStatus
}