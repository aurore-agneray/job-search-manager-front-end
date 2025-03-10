import { ApplicationType } from "../types.tsx";
import { ApplicationStatusEnum } from "../enums.tsx";

const applications: ApplicationType[] = [
    {
        Id: "1",
        Date: new Date("2021-09-01"),
        Source: "Google",
        OfferUrl: "https://careers.google.com/jobs/results/",
        Position: "Software Engineer",
        Place: "Mountain View, CA",
        Motivations: "I want to work on the next big thing",
        Status: ApplicationStatusEnum.InPreparation,
        Notes: "I need to prepare my resume and cover letter"
    },
    {
        Id: "2",
        Date: new Date("2021-09-02"),
        Source: "Facebook",
        OfferUrl: "https://www.facebook.com/careers/jobs/",
        Position: "Product Manager",
        Place: "Menlo Park, CA",
        Motivations: "I want to break free",
        Status: ApplicationStatusEnum.Sent
    },
    {
        Id: "3",
        Date: new Date("2021-09-03"),
        Source: "Apple",
        OfferUrl: "https://www.apple.com/jobs/us/",
        Position: "iOS Developer",
        Place: "Cupertino, CA",
        Motivations: "I want to make the world a better place",
        Status: ApplicationStatusEnum.Processing
    },
    {
        Id: "4",
        Date: new Date("2021-09-04"),
        Source: "Amazon",
        OfferUrl: "https://www.amazon.jobs/en/",
        Position: "Data Scientist",
        Place: "Seattle, WA",
        Motivations: "I want a steak frite",
        Status: ApplicationStatusEnum.Refused,
        Notes: "I need to improve my technical skills"
    },
    {
        Id: "5",
        Date: new Date("2021-09-05"),
        Source: "Microsoft",
        OfferUrl: "https://careers.microsoft.com/us/en",
        Position: "Cloud Engineer",
        Place: "Redmond, WA",
        Motivations: "I want to be a billionaire",
        Status: ApplicationStatusEnum.NoResponse
    }
];

export default applications;
