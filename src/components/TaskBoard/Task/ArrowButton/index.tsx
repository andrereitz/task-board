import styled from 'styled-components';

const StButton = styled.button<{
  btnType: string,
  disabled: boolean
}>`
  border-radius: 4px;
  height: 40px;
  background: ${props => props.btnType === 'next' ? 'green' : 'red'};
  color: white;
  cursor: pointer;

  ${props => props.disabled && `
    opacity: .6
  `}
`

export const ArrowButton = ({ 
  onClick,
  disabled,
  type
}: {
  onClick: () => void;
  disabled: boolean;
  type: string;
}) => {
  return(
    <StButton disabled={disabled} onClick={onClick} btnType={type}>
      {type === 'prev' ? '<' : '>'}
    </StButton>
  )
}