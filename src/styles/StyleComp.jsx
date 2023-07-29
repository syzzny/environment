import styled, { keyframes } from 'styled-components'


export const Wrap = styled.div`
    padding: 0 80px;
    height : 100%;
   height : var(--windowVh);

    /* 모바일 화면 크기 */
    @media (max-width: 767px) {
    /* 스타일 */
    }

  /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 0 40px;
        margin: 0 auto;
        width: 100%;
    }

  /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        padding: 0 60px;
    }
    

`
export const MainImg = styled.img`
    padding-top: 80px;
    width: 100%;
    position: relative;

    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        padding-top: 190px;
    }
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        padding-top: 40px;
    }
`

export const PadImg = styled.img`
    
`

export const MainLogo = styled.img`
    position: absolute;
    width: 100%;
    top: 120px;
    right: 130px;
`
export const MainWrap = styled.div`
    display: flex;
    height: auto;
    align-items: flex-end;

    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        height: 366px;
    }
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
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
    font-size: 2rem;

    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 120px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
    }
`
export const Titletext = styled.h1`
    font-size: 10rem;
    text-align: left;
    margin: 0;
    font-weight: 500;
    
    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 50px;
    }
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        font-size: 70px;
        color: blue;
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
    padding: 2.5px;
    
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
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
    @media (max-width: 1024px) {
        height: 132px;
    }
`
export const Newsletter = styled.div`
    flex: 2;
    border: 1px solid #000;
    border-top: none;
`
export const NewsTitle = styled.div`
    height: auto;
    text-align: left;
    padding: 30px 35px;
    overflow: hidden;

    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        height: 160px;
        padding: 30px;
    }

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        padding: 30px;
        height: 124px;
    }
`
export const NewsSpan = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
    
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        font-size: 20px;
    }
`
export const NewsP = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5rem;
    white-space: nowrap;

    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        margin: 10px 0;
        font-size: 15px;
    }
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px){
        font-size: 15px;
        white-space: nowrap;
    }
`
export const NewsInfo = styled.div`
    border-top: 1px solid #000;
    height: auto;
    background-color: #f5f5f5;
    padding: 10px 35px;
    display: flex;
    gap: 30px;


    /* 태블릿 화면 크기 */
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 14px 30px;
    }
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
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
    font-size: 1.5rem;
`
export const NewsDetail = styled.div`
    flex: 1;
    display: grid;
    justify-items: end;
    
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        align-content: space-between;
    }

`
export const Date = styled.p`
    font-size: 1.5rem;
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
    font-size: 1.5rem;
    line-height: 25px;
`


// secton2 ---------------------------------------------------
export const SectionWrap = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr 1.7fr;

`

const c4ImgURL = `${process.env.PUBLIC_URL}/assets/img/cc3.png`;
export const ContWrap = styled.div`
    border: 2px solid #000;
    text-align: left;
    overflow: hidden;

    &:nth-child(2){
        padding: 4rem 0;
    }
    &:nth-child(3){
        padding: 20px;
        background-image:url(${c4ImgURL});
        background-size: cover;
        display: flex;
        align-items: center;
    }
`
export const SectionTitle = styled.h1`
    font-size: 9rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 5rem;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        font-size: 60px;
        margin: 20px 0;
    }
`
export const SectonSub = styled.p`
    font-size: 1.8rem;
    font-family: 'Noto Sans KR', sans-serif;

`
export const TextWrap = styled.div`
    max-width: 58rem;
    margin: 0 auto;
    position: relative;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px)  {
        max-width: 396px;
    }
`
export const SectonIcon = styled.img`
    position: absolute;
    right: 0px;
    bottom: 2rem;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        bottom: 35px;
        width: 35px;
    }
`

export const Card = styled.div`
    width: 46rem;
    height: 37rem;
    border: 1px solid #000;
    border-radius: 30px;
    z-index: 999;
    overflow: hidden;
    margin: 0 auto;
    position: relative;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px){
        width: 321px;
        height: 258px;
    }
`
export const Badge = styled.div`
    border: 1px solid #000;
    padding: 0 1.6rem;
    position: absolute;
    bottom: 2rem;
    height: 4rem;
    line-height: 3.6rem;
    border-radius: 20px;
    left: 3.5rem;
    font-size: 1.6rem;
    
    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        height: 32px;
        bottom: 13px;
        left: 20px;
        line-height: 30px;
    }
`
export const BadgeYear = styled.div`
    border: 1px solid #000;
    padding: 0 1.6rem;
    position: absolute;
    bottom: 2rem;
    right: 16.5rem;
    height: 4rem;
    line-height: 3.6rem;
    border-radius: 20px;
    font-size: 1.6rem;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
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
    padding: 6rem 8rem;
    font-size: 12rem;
    color: #fff;
    margin: 0;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px) {
        font-size: 75px;
        padding: 50px 70px;
    }
`
export const FooterBox = styled.div`
    /* width: 100%; */
    height: 12rem;
    border-top: 1px solid #fff;
    padding: 0.5rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px)  {
        height: 80px;
    }
`
export const FooterSns = styled.p`
    font-size: 3.5rem;
    color: #fff;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px){
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
    height: 12rem;

    /* 데스크탑 화면 크기 */
    @media (max-width: 1024px){
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
    @media (max-width: 1024px) {
        font-size: 30px;
        font-weight: 300;
    }
`