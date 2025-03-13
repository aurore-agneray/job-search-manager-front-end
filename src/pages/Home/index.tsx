import styled from "styled-components";
import myApplications from "../../data/my-applications";
import ApplicationCard from "../../components/ApplicationCard";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

function Home() {
    return (
        <HomeDiv>
            {myApplications
                .sort((a, b) => {
                    if (!a.Date && b.Date) {
                        return -1;
                    } else if (a.Date && !b.Date) {
                        return 1;
                    } else {
                        return -a.Date.getTime() + b.Date.getTime();
                    }
                })
                .map((applic) => (
                    <ApplicationCard
                        key={applic.Id}
                        {...applic}
                    />
                ))}
        </HomeDiv>
    );
}

export default Home;
