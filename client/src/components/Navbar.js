import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
`;
const Title = styled.h1``;
const NavItemContainer = styled.div`
  display: flex;
`;
const NavItem = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: 3px;
`;

function Navbar() {
  return (
    <Container>
      <Title>bobaFett</Title>
      <NavItemContainer>
        <NavItem>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Menu
          </Link>
        </NavItem>
        <NavItem>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Login
          </Link>
        </NavItem>
      </NavItemContainer>
    </Container>
  );
}

export default Navbar;
