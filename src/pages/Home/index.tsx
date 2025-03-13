import styled from "styled-components";
import ApplicationCard from "../../components/ApplicationCard";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

function Home() {
    const myApplications = useSelector(
        (state: RootState) => state.jobApplications.List
    );

    console.log(myApplications);

    return (
        <HomeDiv>
            {myApplications
                .sort((a, b) => {
                    if (!a.Date && b.Date) {
                        return -1;
                    } else if (a.Date && !b.Date) {
                        return 1;
                    } else if (a.Date && b.Date) {
                        const dateA = new Date(a.Date);
                        const dateB = new Date(b.Date);
                        return -dateA.getTime() + dateB.getTime();
                    }
                    return 0;
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
