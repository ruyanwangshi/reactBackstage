import styled from 'styled-components'

const NavBarContianer = styled.div`
  .navbar-container {
    position: fixed;
    top: 0;
    height: 44px;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
    z-index: 10;
    background: #001529;
    color: #fff;
  }

  .ant-breadcrumb > span:last-child{
    color: #fff;
  }

  .navbar-left{
    width: 50%;
  }

  &::before {
    content: '';
    display:block;
    height: 44px;
    width: 100%;
  }
`

export { NavBarContianer }
