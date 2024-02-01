import styled from "styled-components";

const ButtonStyle = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  &.primary {
    background: var(--blue-color);
    color: var(--white-color);
  }
  &.secondary {
    background: var(--white-color);
    color: var(--black-color);
    border: 2px solid var(--blue-color);
  }
`;

export { ButtonStyle };
