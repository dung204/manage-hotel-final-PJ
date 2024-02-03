import styled from "styled-components";

const HeaderStyle = styled.header`
  .hide{
    display: none !important;
  }
  background: var(--blue-color);
  color: var(--white-color);
  .header__wrapper {
    position: relative;
    height: 64px;
    padding: 5px 0;
    display: flex;
    flex-direction: start;
    .header__logo {
      height: 100%;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .header__nav{
    width: 100%;
    margin-left: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__nav__list{
      display: flex;
      gap: 5rem;

      .nav__item{
        color: white;
        text-decoration: none;
      }
    }
    .block_right{
      display: flex;
      align-items: center;
      gap: 3rem;
      .block_right__user{
        display: flex;
        position: relative;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        .avatar{
          border-radius: 100%;
          width: 4rem;
        }
        .dropdown{

          .dropdown__menu{
            position: absolute;
            padding: 2rem 2.5rem; 
            background-color: #cccccc;
            color: black;
            top: 4rem;
            left: -100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .dropdown__button{
              padding: 1rem 4rem;
              white-space:nowrap;
              color: var(--white-color);             
              background: var(--blue-color);
              border: none;
              text-align: center;
              text-decoration: none;
              border-radius: 1rem;

              &:hover{
                opacity: .7;
              }
            }

            .dropdown__register{
              display: flex;
              white-space:nowrap;
              gap: .5rem;
            }
          }
        }
      }
      .block_right__contact{
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
    }
  }
`;

export { HeaderStyle };
