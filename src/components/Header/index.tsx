import styled from "styled-components";
import LogoImage from "/images/logo.png";

const MyHeader = styled.header`
    flex-direction: row;
    align-items: center;
`;

export default function Header() {
    return (
        <MyHeader>
            <img
                src={LogoImage}
                alt="Logo"
                className="header-logo"
            />
            <h1>Mes candidatures</h1>
        </MyHeader>
    );
}
