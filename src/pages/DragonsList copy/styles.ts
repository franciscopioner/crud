import styled from 'styled-components'

export const Card = styled.div`
  height: 60px;
  width: 25%;
  border: 2px solid ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  border-radius: 5px;
  font-size: 14px
`
