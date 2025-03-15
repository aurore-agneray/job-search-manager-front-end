import styled from "styled-components";
import ApplicationCard from "../../components/ApplicationCard";
import { ApplicationType } from "../../types";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

const { default: myApplications } = await import(
    `../../../data/${import.meta.env.VITE_APP_DATA_SOURCE_FILE}`
);

function Home() {
    return (
        <HomeDiv>
            {myApplications
                .sort((a: ApplicationType, b: ApplicationType) => {
                    if (!a.Date && b.Date) {
                        return -1;
                    } else if (a.Date && !b.Date) {
                        return 1;
                    } else if (a.Date && b.Date) {
                        return -a.Date.getTime() + b.Date.getTime();
                    }
                    return 0;
                })
                .map((applic: ApplicationType) => (
                    <ApplicationCard
                        key={applic.Id}
                        {...applic}
                    />
                ))}
        </HomeDiv>
    );
}

export default Home;
