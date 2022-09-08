import { useState } from 'react';
import { generateId } from '../utils/generateId';
import { TaskType, TaskStatus } from '../types';

const initialState = [
  {
    id: generateId(),
    text: 'This is example task number 1',
    status: TaskStatus.TODO
  },
  {
    id: generateId(),
    text: 'This is example task number 2',
    status: TaskStatus.IN_PROGRESS
  },
  {
    id: generateId(),
    text: 'This is example task number 3',
    status: TaskStatus.DONE
  }
]

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>(initialState);

  const addTask = (text: string) => {
    setTasks(prev => ([
      ...prev, 
      { 
        id: generateId(), 
        text: text, 
        status: TaskStatus.TODO
      }
    ]));
  }

  const changeStatus = (status: TaskStatus, id: string) => {
    setTasks(prev => prev.filter(task => {
      if(task.id === id) {
        task.status = status;
      }

      return task;
    }))
  }

  return {
    tasks,
    addTask,
    changeStatus
  }
}