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
                    target="_blank"
                >
                    Source logo principal - Flaticon
                </a>
            </div>
            <div>
                <a
                    href="https://www.flaticon.com/free-icons/page-not-found"
                    title="page not found icons"
                    target="_blank"
                >
                    Source logo 404 - Flaticon
                </a>
            </div>
            <div>
                <a
                    href="https://www.dafont.com/fr/highway-gothic.font"
                    title="Highway Gothic from Dafont"
                    target="_blank"
                >
                    Source police Highway Gothic - Dafont
                </a>
            </div>
        </MyFooter>
    );
}
