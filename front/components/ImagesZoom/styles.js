import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Header = styled.header`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }
`;

export const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: rgba(0,0,0,0.9);
`;

export const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;

    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`;

export const Indicator = styled.div`
    text-align: center;

    & > div {
        display: inline-block;
        width: 75px;
        height: 30px;
        color: white;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
    }
`;

export const CloseBtn = styled(CloseOutlined)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`;

export const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
    .ant-card-cover {
        transform: none !important;
    }
`;