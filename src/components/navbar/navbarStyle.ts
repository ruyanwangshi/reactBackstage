import styled from 'styled-components'

const NavBarContianer = styled.div`
  height: 44px;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);

  .navbar-item {
    width: auto;
    padding: 4px 10px;
    background-color: #eeeeee;
    margin-right: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(121, 130, 160, 0.55), -5px -5px 10px rgb(255, 255, 255);
  }

  .navbar-item:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0), inset 5px 5px 10px rgba(121, 130, 160, 0.55), inset -5px -5px 10px rgb(255, 255, 255);
    transition: box-shadow 50ms ease-out;
  }
`

export { NavBarContianer }
