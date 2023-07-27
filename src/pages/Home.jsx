import React from 'react'
import {
    Wrap, MainImg, MainWrap, Title, Involved, SubImg, Newsletter,
    Titletext, NewsTitle, NewsInfo, NewsSpan, NewsP, NewsImg, NewsName, NewsDetail,
    Go, SubImgWrap, SubIcon, SectionWrap, ContWrap, SectionTitle, TextWrap, SectonIcon,
    Card, Badge, BadgeYear, Footer, FooterTitle, FooterBox, FooterSns, LinkBox,
    AnimatedText, MarqueeGroup, LinkBoxWrap, RinkText
} from '../styles/StyleComp'


export default function Home() {
    return (
        <div>
            <Wrap>
                <MainImg src="assets/img/main.png" alt="" />
                <MainWrap>
                    {/* section1 */}
                    <Title>
                        <Involved>Get involved</Involved>
                        <Titletext>Go Green<br></br>Act Now</Titletext>
                    </Title>

                    {/* section2 */}
                    <SubImg>
                        <SubImgWrap>
                            <img src="assets/img/subImg.png" alt="" />
                        </SubImgWrap>
                        <SubIcon>
                            <img src="assets/img/SubIcon.png" style={{ position: 'absolute', left: '0', bottom: '0' }} />
                        </SubIcon>
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
                            <NewsImg> <img src="assets/img/image.png" style={{ height: '83px' }} /></NewsImg>
                            <NewsName>
                                <NewsP style={{ margin: '10px 0', fontSize: '16px' }}>Newsletter</NewsP>
                                <NewsSpan style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: '400' }}>위클리어스</NewsSpan>
                            </NewsName>
                            <NewsDetail>
                                <NewsP style={{ fontSize: '16px', color: '#868686' }}>Friday at 2pm</NewsP>
                                <Go>Go</Go>
                            </NewsDetail>
                        </NewsInfo>
                    </Newsletter>
                </MainWrap>
            </Wrap>

            <SectionWrap>
                <ContWrap style={{ borderRight: 'none', borderBottom: 'none' }}>
                    <img src="assets/img/c.png" style={{ width: '100%', objectFit: 'contain' }} />
                </ContWrap>
                <ContWrap style={{ borderBottom: 'none' }}>
                    <TextWrap>
                        <SectionTitle>Our Challenge</SectionTitle>
                        <NewsP>
                            환경을 위한 변화의 주인공이 되어보세요! <br />
                            매 순간이 지구를 위한 선택의 기회입니다. <br />
                            지금 바로 우리의 힘을 모아, 환경 캠페인에 힘차게 동참합시다.
                        </NewsP>
                        <SectonIcon src="assets/img/challengeIcon.png" alt="" />
                    </TextWrap>
                </ContWrap>
                <ContWrap style={{ borderRight: 'none', padding: '60px' }}>
                    {/* <img src="assets/img/c3.png" style={{ width: '100%'}} /> */}
                    <Card>
                        <img src="assets/img/c4.png" style={{ width: '100%' }} />
                        <Badge>CanCrush Challenge</Badge>
                        <BadgeYear>2023</BadgeYear>
                        <SectonIcon src="assets/img/challengeIcon.png" style={{ top: '20px', right: '35px' }} />
                        <div></div>
                    </Card>
                </ContWrap>
                <ContWrap>
                    <img src="assets/img/c2.png" style={{ width: '100%', objectFit: 'contain' }} />
                </ContWrap>
            </SectionWrap>

            <Footer>
                <FooterTitle>Follow Us</FooterTitle>
                <FooterBox>
                    <FooterSns>INSTAGRAM</FooterSns>
                    <img src="assets/img/link.png" alt="" />
                </FooterBox>
                <FooterBox>
                    <FooterSns>FACEBOOK</FooterSns>
                    <img src="assets/img/link.png" alt="" />
                </FooterBox>
                <FooterBox>
                    <FooterSns>TWITTER</FooterSns>
                    <img src="assets/img/link.png" alt="" />
                </FooterBox>
                <LinkBox>
                    <LinkBoxWrap>
                        <MarqueeGroup>
                            <img src="assets/img/linkB.png"/>
                            <RinkText aria-hidden="true">LINKEDIN</RinkText>
                            <img src="assets/img/linkB.png"/>
                            <RinkText aria-hidden="true">LINKEDIN</RinkText>
                            <img src="assets/img/linkB.png"/>
                        </MarqueeGroup>

                        <MarqueeGroup aria-hidden="true">
                            <RinkText>LINKEDIN</RinkText>
                            <img src="assets/img/linkB.png"/>
                            <RinkText>LINKEDIN</RinkText>
                            <img src="assets/img/linkB.png"/>
                            <RinkText>LINKEDIN</RinkText>
                        </MarqueeGroup>
                    </LinkBoxWrap>
                </LinkBox>
            </Footer>
        </div>
    )
}
