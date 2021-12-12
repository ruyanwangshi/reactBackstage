import styled from 'styled-components'

const HomeContainer = styled.div`
  height: auto;
  width: 80%;
  margin: 20px auto;

  .md-container {
    height: auto;
    border: 1px solid #000;
  }

  .save-container {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  

  .sub-btn {
    margin: 0 auto;
    height: 50px;
    width: 120px;
    background-color: #eeeeee;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 10px #fbfbfb;
    user-select: none;
    box-shadow: 5px 5px 10px rgba(121, 130, 160, 0.55), -5px -5px 10px rgb(255, 255, 255);
    background-color: #ebecf0;
    color: #333333;
    font-weight: bold;
  }

  .sub-btn {
    transform: scale(1);
  }

  .sub-btn:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0), inset 5px 5px 10px rgba(121, 130, 160, 0.55), inset -5px -5px 10px rgb(255, 255, 255);
    transition: box-shadow 50ms ease-out;
  }
`

export { HomeContainer }
