import React from "react";
import styled from "styled-components";
import logo from "../assets/imgs/tensor_logo.png";

export default function Lists() {
  return (
    <div>
      <TopSpace />
      <Title>Tensorflow.js 모델 기반 딥러닝 기능</Title>
      <MidSpace>
        Explore pre-trained models to add computer vision, natural language
        processing (NLP), and other common ML tasks to your web and
        browser-based applications.
      </MidSpace>
      <div>
        <ModelLists>
          <Models>
            <ModelContainer>
              <LogoContainer>
                <InnerSpace />
                <LogoStyle src={logo} alt="이미지" />
              </LogoContainer>
            </ModelContainer>
          </Models>
          <Models>
            <ModelContainer>배경 이미지 인식 및 제거</ModelContainer>
          </Models>
          <Models>
            <ModelContainer>웹캠 사물 탐지</ModelContainer>
          </Models>
        </ModelLists>
      </div>
    </div>
  );
}

const InnerSpace = styled.div`
  height: 70px;
`

const LogoContainer = styled.div`
  width: 120px;
  height: 110px;
  margin: 0 auto;
`;

const LogoStyle = styled.img`
  width: 120px;
  height: 110px;
`;

const MidSpace = styled.div`
  width: 597.5px;
  height: 90px;
  margin: 0 auto;
  color: #425066;
`;

const ModelContainer = styled.div`
  width: 268.73px;
  height: 318.11px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
`;

const Models = styled.li`
  list-style: none;
  margin-left: 40px;
`;

const ModelLists = styled.ul`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 33px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`;

const TopSpace = styled.div`
  height: 85px;
`;
