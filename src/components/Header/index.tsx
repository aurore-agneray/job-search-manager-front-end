import styled from "styled-components";
import LogoImage from "/images/colored_logo.png";
import { Icon } from "@mdi/react";
import { mdiBriefcasePlus } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import FrText from "../../texts/fr.ts";

const MyHeader = styled.header`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
`;

/** Header
-----------------
@returns Main header of the web application
*/
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
            <h1>{FrText.Header.MainTitle}</h1>
            <span onClick={() => navigate("/add-new-application")}>
                <Icon
                    className="link-icon"
                    path={mdiBriefcasePlus}
                    size={2}
                    color="var(--bs-primary)"
                />
            </span>
        </MyHeader>
    );
}
