import styled from "styled-components";

const HeaderStyle = styled.header`
  background: var(--blue-color);
  color: var(--white-color);
  .header__wrapper {
    height: 64px;
    padding: 5px 0;
    .header__logo {
      height: 100%;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export { HeaderStyle };
