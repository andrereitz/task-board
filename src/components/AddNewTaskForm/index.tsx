import { useRef } from 'react';
import styled from 'styled-components';

const StForm = styled.form`
  flex: 1 1 100%;
  padding: 30px;

  input {
    height: 40px;
    box-sizing: border-box;
  }

  button {
    background: blue;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-left: 15px;
    cursor: pointer;
  }
`

export const AddNewTaskForm = ({
  onSubmit
}: {
  onSubmit: (text: string) => void;
}) => {
  const textRef = useRef<HTMLInputElement | null>(null);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!textRef.current?.value) return;
  
    onSubmit(textRef.current.value as string);
    textRef.current.value = '';
  }

  return(
    <StForm onSubmit={(e) => formSubmit(e)}>
      <div>
        <input placeholder='Add Task' ref={textRef} type="text" name="task-text" />
        <button>
          +
        </button>
      </div>
    </StForm>
  )
}