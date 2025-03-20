import { ApplicationType } from "../src/types.tsx";
import { ApplicationStatusEnum } from "../src/enums.tsx";

const applications: ApplicationType[] = [
    {
        Id: "1",
        Date: "2021-09-01",
        Source: "Google",
        IsSpontaneous: false,
        IsFromMyInitiative: true,
        OfferUrl: "https://careers.google.com/jobs/results/",
        Position: "Software Engineer",
        Place: "Mountain View, CA",
        Status: ApplicationStatusEnum.InPreparation,
        Motivations: "I want to work on the next big thing",
        Notes: "I need to prepare my resume and cover letter",
        Contacts: ``,
        FeelingLevel: 0
    },
    {
        Id: "2",
        Date: "2021-09-02",
        Source: "Facebook",
        IsSpontaneous: false,
        IsFromMyInitiative: true,
        OfferUrl: "https://www.facebook.com/careers/jobs/",
        Position: "Product Manager",
        Place: "Menlo Park, CA",
        Status: ApplicationStatusEnum.Sent,
        Motivations: "I want to break free",
        Contacts: ``,
        FeelingLevel: 0
    },
    {
        Id: "3",
        Date: "2021-09-03",
        Source: "Apple",
        IsSpontaneous: false,
        IsFromMyInitiative: true,
        OfferUrl: "https://www.apple.com/jobs/us/",
        Position: "iOS Developer",
        Place: "Cupertino, CA",
        Status: ApplicationStatusEnum.Processing,
        Motivations: "I want to make the world a better place",
        Contacts: ``,
        FeelingLevel: 0
    },
    {
        Id: "4",
        Date: "2021-09-04",
        Source: "Amazon",
        IsSpontaneous: false,
        IsFromMyInitiative: true,
        OfferUrl: "",
        Position: "Data Scientist",
        Place: "Seattle, WA",
        Status: ApplicationStatusEnum.Refused,
        Motivations: "I want a steak frite",
        Notes: "I need to improve my technical skills",
        Contacts: ``,
        FeelingLevel: 0
    },
    {
        Id: "5",
        Date: "2021-09-05",
        Source: "Microsoft",
        IsSpontaneous: false,
        IsFromMyInitiative: true,
        OfferUrl: "-",
        Position: "Cloud Engineer",
        Place: "Redmond, WA",
        Status: ApplicationStatusEnum.NoResponse,
        Motivations: "I want to be a billionaire",
        Contacts: ``,
        FeelingLevel: 0
    }
];

export default applications;
