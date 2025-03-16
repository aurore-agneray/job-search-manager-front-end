import styled from "styled-components";

const MyFooter = styled.footer`
    display: flex;
    flex-direction: column;
    min-height: 150px;
`;

export default function Footer() {
    return (
        <MyFooter>
            <div>
                <a
                    href="https://www.flaticon.com/free-icons/job-loss"
                    title="job loss icons"
                    style={{ display: "inline" }}
                    target="_blank"
                >
                    Source logo principal - Flaticon
                </a>
            </div>
            <div>
                <a
                    href="https://www.flaticon.com/free-icons/page-not-found"
                    title="page not found icons"
                >
                    Source logo 404 - Flaticon
                </a>
            </div>
        </MyFooter>
    );
}
