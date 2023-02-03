import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
          <HeaderContainer>
            <TopSpace />
            <LogoContainer>
                <LogoTitle>Deep. Projects</LogoTitle>
            </LogoContainer>
            <ListContainer>
                <Lists>
                    <Link to="/image-identify">이미지 분류</Link>
                </Lists>
                <Lists>
                    <Link to="/delete-background">배경 제거</Link>
                </Lists>
                <Lists>
                    <Link to="/webcam-detection">웹캠 사물 탐지</Link>
                </Lists>
            </ListContainer>
          </HeaderContainer>
        </>
    )
}

export default Header;



const TopSpace = styled.div`
    height: 25px;
`

const Lists = styled.li`
    list-style: none;
    font-size: 18px;
    margin-left: 100px;
`

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: -20px;
`

const LogoTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
    margin: 0;
`

const LogoContainer = styled.div`
    margin-left: 30px;
`

const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    border: 1px solid #DFDFDF;
`