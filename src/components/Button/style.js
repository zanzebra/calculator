import styled from "styled-components";

const Component = styled.div`
  padding: 10px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    width: 100%;
    height: 100%;
    background: #333;
    font-size: 24px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background: #111111;
  }

  .eq {
    background: #f79988;
  }

  .eq:hover {
    background: #f5836e;
  }
`;

export default Component;
