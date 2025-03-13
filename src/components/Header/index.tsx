import styled from "styled-components";
import LogoImage from "/images/logo.png";
import { useNavigate } from "react-router-dom";

const MyHeader = styled.header`
    flex-direction: row;
    align-items: center;
`;

export default function Header() {
    const navigate = useNavigate();

    return (
        <MyHeader>
            <img
                src={LogoImage}
                alt="Logo"
                className="header-logo"
                onClick={() => {
                    navigate("/");
                }}
            />
            <h1>Mes candidatures</h1>
        </MyHeader>
    );
}
