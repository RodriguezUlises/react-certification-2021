import styled from 'styled-components';

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - min(9vh, 55px));
  margin-top: min(9vh, 55px);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
  h1 {
    font-size: 38px;
    text-align: center;
    letter-spacing: -1px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
  button {
    width: 5rem;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    transition: all 0.5s ease;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
  strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }
  input {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 0.5s ease;
  }
`;
