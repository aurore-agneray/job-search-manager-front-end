import styled from "styled-components";
import myApplications from "../../data/my-applications";
import ApplicationCard from "../../components/ApplicationCard";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;

function Home() {
    return (
        <HomeDiv>
            {myApplications.map((applic) => (
                <ApplicationCard
                    key={applic.Id}
                    {...applic}
                />
            ))}
        </HomeDiv>
    );
}

export default Home;
