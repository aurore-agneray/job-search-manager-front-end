import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const MainLoaderDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 242, 229, 0.452);
    z-index: 99999;
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
`;

const LoaderSubDiv = styled.div`
    margin: 0 auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 25px dotted !important;
    border-color: var(--my-var-loader-color-1) !important;
    border-right-color: var(--my-var-loader-color-2) !important;
    animation: ${rotate} 1.8s infinite linear;
`;

export default function Loader() {
    // Source loader code : https://www.cssportal.com/css-loader-generator/
    return (
        <MainLoaderDiv>
            <LoaderSubDiv />
        </MainLoaderDiv>
    );
}
