import React, { useEffect, useState } from 'react'
import {
    Wrap, MainImg, MainWrap, Title, Involved, SubImg, Newsletter,
    Titletext, NewsTitle, NewsInfo, NewsSpan, NewsP, NewsImg, NewsName, NewsDetail,
    Go, SubImgWrap, SubIcon, SectionWrap, ContWrap, SectionTitle, TextWrap, SectonIcon,
    Card, Badge, BadgeYear, Footer, FooterTitle, FooterBox, FooterSns, LinkBox,
    AnimatedText, MarqueeGroup, LinkBoxWrap, RinkText, Category, Date
} from '../styles/StyleComp'

import { SectionsContainer, Section } from 'react-fullpage';

export default function Home() {
    React.useEffect(()=>{
        let  windowVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--windowVh',`${windowVh}px`);
     },[])
    
    
    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    }
    return (
        <SectionsContainer {...options}>
            {/* <Section> */}
                <Wrap>
                    <MainImg src={`${process.env.PUBLIC_URL}/assets/img/main.png`}/>
                    <MainWrap>
                        {/* section1 */}
                        <Title>
                            <Involved>Get involved</Involved>
                            <Titletext>Go Green<br></br>Act Now</Titletext>
                        </Title>

                        {/* section2 */}
                        <SubImg>
                            <SubImgWrap>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/subImg.png`} alt="" />
                            </SubImgWrap>
                        </SubImg>

                        {/* section3 */}
                        <Newsletter>
                            <NewsTitle>
                                <NewsSpan>Newsletter</NewsSpan>
                                <NewsP>뉴스레터를 통해 진행 중인 환경 캠페인, 행사, 이벤트 <br />
                                    등에 대한 정보를 받아볼 수 있으며 이를 통해 자원 봉사자로 <br />
                                    참여하거나 환경 활동에 직접 참가할 수 있습니다. <br />
                                    지금 바로 구독해보세요!</NewsP>
                            </NewsTitle>
                            <NewsInfo>
                                <NewsImg> <img src={`${process.env.PUBLIC_URL}/assets/img/image.png`} style={{ height: '83px' }} /></NewsImg>
                                <NewsName>
                                    <Category>Newsletter</Category>
                                    <NewsSpan style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: '400' }}>위클리어스</NewsSpan>
                                </NewsName>
                                <NewsDetail>
                                    <Date>Friday at 2pm</Date>
                                    <Go>Go</Go>
                                </NewsDetail>
                            </NewsInfo>
                        </Newsletter>
                    </MainWrap>
                </Wrap>
            {/* </Section> */}
            <Section>
                <SectionWrap>
                    <ContWrap style={{ borderRight: 'none', borderBottom: 'none' }}>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/c.png`} style={{ width: '100%', objectFit: 'contain' }} />
                    </ContWrap>
                    <ContWrap style={{ borderBottom: 'none' }}>
                        <TextWrap>
                            <SectionTitle>Our Challenge</SectionTitle>
                            <NewsP>
                                환경을 위한 변화의 주인공이 되어보세요! <br />
                                매 순간이 지구를 위한 선택의 기회입니다. <br />
                                지금 바로 우리의 힘을 모아, 환경 캠페인에 힘차게 동참합시다.
                            </NewsP>
                            <SectonIcon src={`${process.env.PUBLIC_URL}/assets/img/challengeIcon.png`} alt="" />
                        </TextWrap>
                    </ContWrap>
                    <ContWrap style={{ borderRight: 'none', padding: '60px' }}>
                        {/* <img src="assets/img/c3.png" style={{ width: '100%'}} /> */}
                        <Card>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/c4.png`} style={{ width: '100%' }} />
                            <Badge>CanCrush Challenge</Badge>
                            <BadgeYear>2023</BadgeYear>
                            <SectonIcon src={`${process.env.PUBLIC_URL}/assets/img/challengeIcon.png`} style={{ top: '20px', right: '35px' }} />
                            <div></div>
                        </Card>
                    </ContWrap>
                    <ContWrap>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/c2.png`} style={{ width: '100%', objectFit: 'contain' }} />
                    </ContWrap>
                </SectionWrap>
            </Section>
            <Section>
                <Footer>
                    <FooterTitle>Follow Us</FooterTitle>
                    <FooterBox>
                        <FooterSns>INSTAGRAM</FooterSns>
                        <img src="{`${process.env.PUBLIC_URL}/assets/img/link.png`}" alt="" />
                    </FooterBox>
                    <FooterBox>
                        <FooterSns>FACEBOOK</FooterSns>
                        <img src="{`${process.env.PUBLIC_URL}/assets/img/link.png`}" alt="" />
                    </FooterBox>
                    <FooterBox>
                        <FooterSns>TWITTER</FooterSns>
                        <img src="{`${process.env.PUBLIC_URL}/assets/img/link.png`}" alt="" />
                    </FooterBox>
                    <LinkBox>
                        <LinkBoxWrap>
                            <MarqueeGroup>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/link.png`} alt="" />
                                <RinkText aria-hidden="true">LINKEDIN</RinkText>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/linkB.png`} alt="" />
                                <RinkText aria-hidden="true">LINKEDIN</RinkText>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/linkB.png`} alt="" />
                            </MarqueeGroup>

                            <MarqueeGroup aria-hidden="true">
                                <RinkText>LINKEDIN</RinkText>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/linkB.png`} alt="" />
                                <RinkText>LINKEDIN</RinkText>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/linkB.png`} alt="" />
                                <RinkText>LINKEDIN</RinkText>
                            </MarqueeGroup>
                        </LinkBoxWrap>
                    </LinkBox>
                </Footer>
            </Section>
        </SectionsContainer>
    )
}
