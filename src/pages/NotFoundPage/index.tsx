import styled from "styled-components";
import Error404 from "/images/error.png";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: var(--my-var-main-min-height);
`;

const FlaticonLink = styled.a`
    font-size: 0.8rem;
`;

/** NotFoundPage
 * -------------------------
 * Dislays a 404 error logo
 */
function NotFoundPage() {
    return (
        <MainDiv>
            <img
                src={Error404}
                alt="Error 404 logo"
                style={{ width: "300px" }}
            />
            <h1>Page non trouvée !</h1>
            <p>J'en suis navrée ... ou pas !</p>
            <FlaticonLink
                href="https://www.flaticon.com/free-icons/page-not-found"
                title="page not found icons"
            >
                Ce joli logo est téléchargeable sur Flaticon, création de Us and
                Up
            </FlaticonLink>
        </MainDiv>
    );
}

export default NotFoundPage;
