import styled from "styled-components";

export const Button = styled.button`
  margin: 2rem 1rem 1.5rem;
  font-size: ${(props) => (props.size ? `${props.size};` : "0.8rem")};
  background: ${(props) => (props.color ? `${props.color};` : "transparent;")};
  border: ${(props) => (props.border ? `1px solid ${props.border};` : "none;")};
  cursor: pointer;
  padding: ${(props) => (props.padding ? `${props.padding};` : "0.5rem;")};
  border: 2px solid
    ${(props) => (props.borderColor ? `${props.borderColor};` : "none;")};
  transition: all 0.3s ease;
  width: ${(props) => `${props.width}`};
  color: ${(props) => (props.fontColor ? `${props.fontColor};` : "black")};
  cursor: ${(props) => (props.cursor ? `${props.cursor};` : "pointer")};
  &:hover {
    transition: 0.5s ease;
    background: ${(props) =>
      props.hoverColor ? `${props.hoverColor};` : "rgb(65, 65, 65);"};
    color: ${(props) =>
      props.hoverFontColor ? `${props.hoverFontColor};` : "white"};
  }
`;
