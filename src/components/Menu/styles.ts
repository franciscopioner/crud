import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;

  ul {
    li{
      padding-right: 30px;
      display: inline;
      a{
        color: #fff;
        text-decoration: none;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }
`
