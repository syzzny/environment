import styled, { keyframes } from 'styled-components'

export const Wrap = styled.div`
    padding: 80px;
    height: 100vh;
    padding-bottom: 0;
`
export const MainImg = styled.img`
    width: 100%;
    position: relative;
`
export const MainLogo = styled.img`
    position: absolute;
    width: 100%;
    top: 120px;
    right: 130px;
`
export const MainWrap = styled.div`
    display: flex;
    height: 388px;
    align-items: flex-end;
`
export const Title = styled.div`
    flex: 3;
    text-align: left;
    /* background-color: aliceblue; */
`
export const Involved = styled.div`
    width: 150px;
    height: 38px;
    background-color: #000;
    color: #fff;
    border-radius :30px;
    text-align: center;
    line-height: 34px;
    font-weight: 300;
    font-size: 20px;
`
export const Titletext = styled.h1`
    font-size: 100px;
    text-align: left;
    margin: 0;
    font-weight: 500;
`
export const SubImg = styled.div`
    flex: 1;
    display: grid;
    justify-items: end;
`
export const SubImgWrap = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    border-right: none;
    width: 140px;
    height: 140px;
`
export const SubIcon = styled.div`
    /* background-color: #fff; */
    width: 140px;
    height: 147px;
    position: relative;
`
export const Newsletter = styled.div`
    flex: 2;
    border: 1px solid #000;
    border-top: none;
`
export const NewsTitle = styled.div`
    height: 160px;
    text-align: left;
    padding: 40px;
    overflow: hidden;
`
export const NewsSpan = styled.span`
    font-size: 22px;
    font-weight: 700;
`
export const NewsP = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
`
export const NewsInfo = styled.div`
    border-top: 1px solid #000;
    height: 126px;
    background-color: #f5f5f5;
    padding: 10px 40px;
    display: flex;
    gap: 30px;
`
export const NewsImg = styled.div`
    width: 116px;
    height: 116px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid #ECECEC;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NewsName = styled.div`
    flex: 2;
    text-align: left;
`
export const NewsDetail = styled.div`
    flex: 1;
    display: grid;
    justify-items: end;
`
export const Go = styled.div`
    width: 50px;
    height: 27px;
    background-color: #000;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
`

export const SectionWrap = styled.div`
    /* width: 100%; */
    /* padding:  80px; */
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr 1.7fr;

`
export const ContWrap = styled.div`
    border: 2px solid #000;
    text-align: left;
    overflow: hidden;

    &:nth-child(3){
        padding: 20px;
        background-image:url('../assets/img/cc3.png');
        background-size: cover;
        display: flex;
        align-items: center;
    }
`
export const SectionTitle = styled.h1`
    font-size: 95px;
    margin: 45px 0;
`
export const TextWrap = styled.div`
    max-width: 611px;
    margin: 0 auto;
    position: relative;
`
export const SectonIcon = styled.img`
    position: absolute;
    right: 0px;
    bottom: 15px;
`
export const Card = styled.div`
    width: 456px;
    height: 368px;
    border: 1px solid #000;
    border-radius: 30px;
    z-index: 999;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
`
export const Badge = styled.div`
    border: 1px solid #000;
    padding: 0 15px;
    position: absolute;
    bottom: 20px;
    height: 40px;
    line-height: 36px;
    border-radius: 20px;
    left: 35px;
`
export const BadgeYear = styled.div`
    border: 1px solid #000;
    padding: 0 15px;
    position: absolute;
    bottom: 20px;
    right: 165px;
    height: 40px;
    line-height: 36px;
    border-radius: 20px;
`
export const Footer = styled.footer`
    height: 100vh;
    background-image: linear-gradient(90deg, #547C7C, #9A9355);
    text-align: left;
`
export const FooterTitle = styled.h1`
    padding: 100px 80px;
    font-size: 130px;
    color: #fff;
    margin: 0;
`
export const FooterBox = styled.div`
    /* width: 100%; */
    height: 120px;
    border-top: 1px solid #fff;
    padding: 5PX 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FooterSns = styled.p`
    font-size: 35px;
    color: #fff;
`
export const slideAnimation = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-100% - var(--gap)));
    }
`
export const LinkBox = styled.div`
    --space: 2rem;

display: grid;
align-content: center;
overflow: hidden;
gap: var(--space);
width: 100%;
font-family: "Corben", system-ui, sans-serif;
font-size: 1.5rem;
line-height: 1.5;
background-color: #fff;
height: 120px;
`
export const LinkBoxWrap = styled.div`
    --duration: 15s;
    --gap: var(--space);

    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 2.4rem;
`;

export const MarqueeGroup = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: ${slideAnimation} var(--duration) linear infinite;
`;
export const AnimatedText = styled.div`
    animation: ${slideAnimation} 10s linear infinite;
    white-space: normal;
`
export const RinkText = styled.p`
    font-size: 35px;
`