import React from "react"
import styled from "styled-components"
import { device } from "../components/device"

const StyledText = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--text-secondary);

  @media ${device.desktop} {
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    font-style: italic;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }
`

const Caption = props => <StyledText>{props.children}</StyledTexts>

export default Caption
