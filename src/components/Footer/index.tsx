import styled from "styled-components";

const MyFooter = styled.footer`
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
                    Source logo principal
                </a>
            </div>
        </MyFooter>
    );
}
