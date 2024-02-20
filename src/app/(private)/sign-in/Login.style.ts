import styled from "styled-components";

const LoginPageStyle = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("/what-about-ha-long-bay-1.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(100px);
    transition: all 0.3s ease;
    .imgWrapper {
      display: block;
      width: 100%;
      height: 100%;
    }
    .loginForm {
      padding: 40px;
      .heading {
        display: flex;
        border-radius: 100rem;
        border: 2px solid #28b7d1;
        overflow: hidden;
        button {
          flex: 1;
          padding: 10px 0;
          border-radius: 100rem;
          border: none;
          outline: none;
          height: 100%;
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
          background: transparent;
          color: var(--white-color);
          transition: all 0.3s ease;
          &.active {
            background: #28b7d1;
          }
        }
      }
      &__content {
        color: var(--black-color);
        margin-top: 40px;
        label {
          font-size: 2rem;
          font-weight: 500;
        }
        .formGroup {
          margin-bottom: 20px;
          &__wrapper {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            input {
              width: 70%;
              padding: 14px 20px;
              border: none;
              outline: none;
              border-radius: 12px;
              background: #ebebeb;
              font-size: 1.8rem;
            }
          }
          span {
            margin-left: 220px;
            font-style: italic;
            color: red;
            font-weight: 600;
          }
        }
        p.logError {
          color: red;
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.8rem;
          font-style: italic;
        }
        .showPasswordBox {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 30px;
          input {
            width: 20px;
            height: 20px;
            margin-left: 40px;
          }
          label {
            margin: 0;
            user-select: none;
          }
        }
        .controlGroup {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
        }
      }
    }
  }
`;

export { LoginPageStyle };
