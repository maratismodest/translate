import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

export default () => {
    return (
        <StyledGame>
            Users
        </StyledGame>
    )
}
const StyledGame = styled.div`
    padding: 5%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: #FEF5EF;
  .ant-divider-horizontal {
  margin: 12px 0 !important;
  }
`