import styled from "styled-components";

const MyFooter = styled.footer`
    min-height: 150px;
`;

export default function Footer() {
    return (
        <MyFooter>
            <a
                href="https://www.flaticon.com/free-icons/job-loss"
                title="job loss icons"
            >
                Job loss icons created by Andy Horvath - Flaticon
            </a>
        </MyFooter>
    );
}
