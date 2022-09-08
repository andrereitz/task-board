import { TaskStatus } from "../types";

export const mapNextPrevStatus = (currentStatus: TaskStatus) => {
  switch(currentStatus) {
    case TaskStatus.TODO:
      return { prev: undefined, next: TaskStatus.IN_PROGRESS };
    case TaskStatus.IN_PROGRESS:
      return { prev: TaskStatus.TODO, next: TaskStatus.DONE };
    case TaskStatus.DONE:
      return { prev: TaskStatus.IN_PROGRESS, next: undefined }
  }
}