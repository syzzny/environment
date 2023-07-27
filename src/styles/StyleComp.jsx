import styled, { keyframes } from 'styled-components'


export const Wrap = styled.div`
    padding: 0 80px;
    height: 100vh;

    /* 모바일 화면 크기 */
    @media (max-width: 767px) {
    /* 스타일 */
    }

  /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 0 40px;
    }

  /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        padding: 0 60px;
    }

`
export const MainImg = styled.img`
    padding-top: 80px;
    width: 100%;
    position: relative;
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        padding-top: 40px;
    }
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 316px;
    }
`
export const Title = styled.div`
    flex: 3;
    text-align: left;
    
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
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 70px;
    }
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
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        width: 132px;
        height: 132px;
    }
`
export const SubIcon = styled.div`
    /* background-color: #fff; */
    width: 140px;
    height: 147px;
    position: relative;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 132px;
    }
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        padding: 30px;
        height: 124px;
    }
`
export const NewsSpan = styled.span`
    font-size: 22px;
    font-weight: 700;
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 20px;
    }
`
export const NewsP = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 15px;
        white-space: nowrap;
    }
`
export const NewsInfo = styled.div`
    border-top: 1px solid #000;
    height: 126px;
    background-color: #f5f5f5;
    padding: 10px 40px;
    display: flex;
    gap: 30px;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        padding: 14px 30px;
        white-space: nowrap;
        height: 103px;
    }
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

    @media (min-width: 1024px) and (max-width: 1279px) {
        width: 100px;
        height: 100px;
    }
`
export const NewsName = styled.div`
    flex: 2;
    text-align: left;
`
export const Category = styled.p`
    margin: 10px 0;
    font-size: 16px;
`
export const NewsDetail = styled.div`
    flex: 1;
    display: grid;
    justify-items: end;
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        align-content: space-between;
    }

`
export const Date = styled.p`
    font-size: 16px;
    color: #868686;
    margin: 10px 0;
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


// secton2 ---------------------------------------------------
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 60px;
        margin: 20px 0;
    }
`
export const TextWrap = styled.div`
    max-width: 611px;
    margin: 0 auto;
    position: relative;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        max-width: 396px;
    }
`
export const SectonIcon = styled.img`
    position: absolute;
    right: 0px;
    bottom: 15px;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        bottom: 35px;
        width: 35px;
    }
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        width: 321px;
        height: 258px;
    }
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
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 32px;
        bottom: 13px;
        left: 20px;
        line-height: 30px;
    }
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 32px;
        bottom: 13px;
        right: 45px;
        line-height: 30px;
    }
`
export const Footer = styled.footer`
    height: 100vh;
    background-image: linear-gradient(90deg, #547C7C, #9A9355);
    text-align: left;
    width: 100%;
`
export const FooterTitle = styled.h1`
    padding: 60px 80px;
    font-size: 130px;
    color: #fff;
    margin: 0;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 75px;
        padding: 50px 70px;
    }
`
export const FooterBox = styled.div`
    /* width: 100%; */
    height: 120px;
    border-top: 1px solid #fff;
    padding: 5PX 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 80px;
    }
`
export const FooterSns = styled.p`
    font-size: 35px;
    color: #fff;

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 25px;
        font-weight: 300;
    }
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

    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        height: 100px;
    }
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
    
    /* 데스크탑 화면 크기 */
    @media (min-width: 1024px) and (max-width: 1279px) {
        font-size: 30px;
        font-weight: 300;
    }
`