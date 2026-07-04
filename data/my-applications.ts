import { ApplicationType } from "../src/types.tsx";
import { ApplicationStatusEnum } from "../src/enums.tsx";

const applications: ApplicationType[] = [
    {
        id: "1",
        date: "2021-09-01",
        source: "Google",
        isSpontaneous: false,
        isFromMyInitiative: true,
        offerUrl: "https://careers.google.com/jobs/results/",
        position: "Software Engineer",
        place: "Mountain View, CA",
        statusId: ApplicationStatusEnum.InPreparation,
        motivations: "I want to work on the next big thing",
        notes: "I need to prepare my resume and cover letter",
        contacts: ``,
        feelingLevel: 0
    },
    {
        id: "2",
        date: "2021-09-02",
        source: "Facebook",
        isSpontaneous: false,
        isFromMyInitiative: true,
        offerUrl: "https://www.facebook.com/careers/jobs/",
        position: "Product Manager",
        place: "Menlo Park, CA",
        statusId: ApplicationStatusEnum.Sent,
        motivations: "I want to break free",
        contacts: ``,
        feelingLevel: 0
    },
    {
        id: "3",
        date: "2021-09-03",
        source: "Apple",
        isSpontaneous: false,
        isFromMyInitiative: true,
        offerUrl: "https://www.apple.com/jobs/us/",
        position: "iOS Developer",
        place: "Cupertino, CA",
        statusId: ApplicationStatusEnum.Processing,
        motivations: "I want to make the world a better place",
        contacts: ``,
        feelingLevel: 0
    },
    {
        id: "4",
        date: "2021-09-04",
        source: "Amazon",
        isSpontaneous: false,
        isFromMyInitiative: true,
        offerUrl: "",
        position: "Data Scientist",
        place: "Seattle, WA",
        statusId: ApplicationStatusEnum.Refused,
        motivations: "I want a steak frite",
        notes: "I need to improve my technical skills",
        contacts: ``,
        feelingLevel: 0
    },
    {
        id: "5",
        date: "2021-09-05",
        source: "Microsoft",
        isSpontaneous: false,
        isFromMyInitiative: true,
        offerUrl: "-",
        position: "Cloud Engineer",
        place: "Redmond, WA",
        statusId: ApplicationStatusEnum.NoResponse,
        motivations: "I want to be a billionaire",
        contacts: ``,
        feelingLevel: 0
    }
];

export default applications;
