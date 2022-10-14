import {createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.text};
    }

    button {
      height: 30px;
      width: 50%;
      max-width: 200px;
      border: 1px solid ${props => props.theme.colors.primary};
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    button:hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textButton};

    }

    input {
      height: 30px;
      width: 100%;
      border: 1px solid ${props => props.theme.colors.primary};
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    form {
      button {
        margin-top: 20px;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      gap: 20px;
    }

    header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
    }

    ul {
      list-style: none;


      li {
        font-size: 20px;
        width: 100%;
        line-height: 40px;
      }
    }
`
