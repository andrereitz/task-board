import styled from 'styled-components';

const StTaskBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const TaskBoard = ({ 
  children 
}: {
  children: JSX.Element
}) => {
  return (
    <StTaskBoard>{children}</StTaskBoard>
  )
}