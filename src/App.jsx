import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1080px) {
    font-size: 14px;
  }

  @media (max-width: 568px) {
    font-size: 13px;
  }
}
 :root{

 }
`;

const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    & img {
      /* display: none; */
    }
  }

  @media (max-width: 568px) {
  }
`;

const Img = styled.img`
  @media (max-width: 1280px) {
    width: 400px;
    /* display: none; */
    position: absolute;
    filter: grayscale(100%) ;
    z-index: -1;
    opacity: 0.1;
  }
  @media (max-width: 568px) {
    width: 350px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 5rem;
  width: 48rem;
  gap: 1rem;
  font-size: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.6rem;
  background-color: transparent;
  /* box-sizing: border-box; */

  @media (max-width: 1080px) {
    padding: 6rem 3rem;
  }
  @media (max-width: 767px) {
    width: 100vw;
    padding: 6rem 2rem;
  }
`;
const FormHeading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
  width: 100%;
  & label {
    font-weight: 500;
  }

  & input {
    border: 1px solid rgb(205, 205, 213);
    outline: none;
    padding: 0.7rem 0.6rem;
    border-radius: 5px;
    background-color: transparent;
    flex: 1;

    &:focus {
      border: 1px solid rgb(21, 117, 167);
    }

    &::placeholder {
      color: #737b86;
    }
  }
`;

const PasswordDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  & button {
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #737b86;
    cursor: pointer;
  }
`;

const OptionsDiv = styled.div`
  margin-top: -0.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CheckBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & a {
    text-decoration: underline;
    font-size: 0.9rem;
  }
  & label {
    color: #737b86;
    font-size: 0.9rem;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const Link = styled.a`
  color: rgb(248, 150, 54);
  text-decoration: none;
`;

const LoginButton = styled.button`
  background-color: rgb(21, 117, 167);
  width: 60%;
  padding: 0.7rem 0;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Register = styled.p`
  font-weight: 500;

  & a {
    font-weight: 600;
    color: rgb(248, 150, 53);
  }
`;

const App = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTnC, setAgreeTnC] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();
    setShowPassword((e) => !e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginId, password, rememberMe, agreeTnC);
  }
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Img src="formImg.png" alt="" />
        <Form action="" onSubmit={handleSubmit}>
          <FormHeading>Login</FormHeading>
          <InputDiv>
            <label htmlFor="loginId">Login ID</label>
            <input
              type="text"
              id="loginId"
              placeholder="Enter Login Id"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <label htmlFor="password">Password</label>
            <PasswordDiv>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleShowPassword}>
                <i
                  className={
                    !showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                  }
                ></i>
              </button>
            </PasswordDiv>
          </InputDiv>

          <OptionsDiv>
            <CheckBoxDiv>
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe((e) => !e)}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="agreeTnC"
                  checked={agreeTnC}
                  onChange={() => setAgreeTnC((e) => !e)}
                />
                <label htmlFor="agreeTnC">
                  Agree to <Link href="#">Terms & Conditions</Link>
                </label>
              </div>
            </CheckBoxDiv>
            <Link href="$">Change Password</Link>
          </OptionsDiv>

          <LoginButton>Login</LoginButton>
          <Register>
            Don't have an account? <a href="#register">Register Here</a>
          </Register>
        </Form>
      </StyledApp>
    </>
  );
};

export default App;
