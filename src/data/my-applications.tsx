import { ApplicationType } from "../types.tsx";

const applications: ApplicationType[] = [
    {
        Id: "1",
        Date: new Date("2021-09-01"),
        Source: "Google",
        OfferUrl: "https://careers.google.com/jobs/results/",
        Position: "Software Engineer",
        Place: "Mountain View, CA",
        Motivations: "I want to work on the next big thing"
    },
    {
        Id: "2",
        Date: new Date("2021-09-02"),
        Source: "Facebook",
        OfferUrl: "https://www.facebook.com/careers/jobs/",
        Position: "Product Manager",
        Place: "Menlo Park, CA",
        Motivations: "I want to break free"
    },
    {
        Id: "3",
        Date: new Date("2021-09-03"),
        Source: "Apple",
        OfferUrl: "https://www.apple.com/jobs/us/",
        Position: "iOS Developer",
        Place: "Cupertino, CA",
        Motivations: "I want to make the world a better place"
    },
    {
        Id: "4",
        Date: new Date("2021-09-04"),
        Source: "Amazon",
        OfferUrl: "https://www.amazon.jobs/en/",
        Position: "Data Scientist",
        Place: "Seattle, WA",
        Motivations: "I want a steak frite"
    }
];

export default applications;
