import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #4357692d;
  border-radius: 4px;
  padding: 10px;
  & > * {
    flex-basis: 25%;
  }
`;

export default Component;
