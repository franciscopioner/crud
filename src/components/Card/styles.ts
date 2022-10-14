import styled from 'styled-components'

export const Container = styled.div`
  min-height: 60px;

  min-width: 300px;
  border: 1px solid ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-radius: 5px;
  font-size: 14px;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`
