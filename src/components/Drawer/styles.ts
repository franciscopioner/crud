import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
  width: 350px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: 40px;
`
export const Header = styled.header`
  height: 10%;
  padding-bottom: 50px;
`
export const Body = styled.section`
  height: 80%;
`
export const Footer = styled.footer`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
`
