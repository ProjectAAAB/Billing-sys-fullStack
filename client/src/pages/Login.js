import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "../components/Button";

const LoginContainer = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormContainer = styled.div`
  padding: 3rem;
  flex: 1;
`;
const HeroDiv = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 3;
  height: 100vh;
  background: rgb(152, 191, 236);
  background: linear-gradient(
    185deg,
    rgba(152, 191, 236, 1) 0%,
    rgba(68, 106, 213, 1) 57%,
    rgba(29, 71, 190, 1) 75%,
    rgba(2, 42, 158, 1) 100%
  );
`;
const Header = styled.h1`
  color: white;
`;
const Desc = styled.h4`
  margin: 1rem 0rem;
  color: white;
  letter-spacing: 0.2rem;
`;

const Form = styled.form`
  min-height: 55vh;
  margin-right: 1rem;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormEl = styled.div`
  width: 100%;
  margin-top: 6vh;
  padding-left: 4rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
  display: flex;
  align-items: center;
  color: rgba(29, 71, 190, 0.9);
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 1rem;
  margin-bottom: 2vh;
  width: 100%;
  border: 0.2px solid rgb(152, 191, 236);
  border-radius: 15px;

  &:focus {
    outline: none !important;
    border-color: rgba(29, 71, 190, 0.8);
    box-shadow: 0 0 2px rgba(29, 71, 190, 1);
  }
`;

const BackHome = styled.div`
  color: white;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <HeroDiv>
        <Header>DBMS Project</Header>
      </HeroDiv>
      <FormContainer>
        <Form>
          <FormEl>
            <FormLabel>
              <FaEnvelope style={{ marginRight: "10px" }} /> Email
            </FormLabel>
            <FormInput
              type="email"
              placeholder="Enter email"
              name="uname"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormEl>
          <FormEl>
            <FormLabel>
              <FaLock style={{ marginRight: "10px" }} />
              Password
            </FormLabel>
            <FormInput
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormEl>
          <Button
            fontColor={"white"}
            padding={"1rem"}
            color={"#0575E6"}
            width={"60%"}
            hoverColor={"#0865c2"}
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
