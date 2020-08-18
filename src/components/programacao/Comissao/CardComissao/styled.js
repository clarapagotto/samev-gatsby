import styled, { css } from "styled-components"
import media from "styled-media-query"

export const CardContainer = styled.div`
  overflow: hidden;
  color: white;
  width: 179px;
  height: 179px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 10px 10px;
`
export const CardImage = styled.div`
  ${props =>
    props.path &&
    css`
      background-image: url(${props.path});
    `}

  background-position: center;

  background-size: 130px;
  border-radius: 50%;
  height: 130px;
  margin: 10px auto;
  width: 130px;
`

export const CardNome = styled.h1`
  position: absolute;
  width: 40px;
  left: 20px;
  bottom: 20px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #060761;

  ${props =>
    props.active === "activeName" &&
    css`
      text-align: center;
      position: static;
      font-size: 20px;
      width: 80%;
    `}
`
export const CardButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: #060761;
  color: #fff;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;

  height: 50px;
  width: 50px;
`
export const Box = styled.div`
  display: none;
  ${props =>
    props.active === "activeBox" &&
    css`
      position: fixed;
      top: 50px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 0 130vw rgba(9, 7, 97, 0.9);
      padding: 20px;
      max-height: 90vh;
      width: 60%;

      display: flex;
      align-items: center;
      flex-direction: column;

      z-index: 99;
    `}

  ${media.lessThan("1200px")`
    width: 80%;
  `}

  ${media.lessThan("890px")`
    max-height: 80vh;
  `}
`
export const Header = styled.div`
  background-color: transparent;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CloseButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: transparent;
  color: #060761;
  cursor: pointer;
  font-size: 38px;
  font-weight: bold;

  height: 50px;
  width: 50px;

  transform: rotate(-45deg);
`

export const TextBox = styled.p`
  color: #333;
  font-family: "Roboto Condensed", "Sans-serif";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 40px 20px 20px;
  text-align: justify;

  z-index: 99;

  ${media.lessThan("890px")`
    overflow: scroll;
  `}
`