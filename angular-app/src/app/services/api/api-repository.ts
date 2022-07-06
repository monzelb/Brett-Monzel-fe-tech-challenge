import { IMemberDto } from "src/app/models/dto/member-dto.model";
import { IPreapprovalOfferDto, PreapprovalOfferType } from "src/app/models/dto/preapproval-offer-dto.model";

export enum PreapprovalStatus {
    Pending,
    Accepted,
    Dismissed
}

export const repository: {member: IMemberDto, preapprovals: (IPreapprovalOfferDto & { status: PreapprovalStatus })[]}[] = [{
    member: {
        firstName: "Successful",
        lastName: "Capybara",
        dateOfBirth: new Date(1990, 1, 28),
        ssn: "123-45-6789",
        id: 1,
    },
    preapprovals: [{
        id: 1,
        offerType: PreapprovalOfferType.HomeEquity,
        rate: .0225,
        termMonths: 360,
        status: PreapprovalStatus.Pending
    }, {
        id: 2,
        offerType: PreapprovalOfferType.Personal,
        rate: .0825,
        termMonths: 60,
        status: PreapprovalStatus.Pending
    }]
}, {
    member: {
        firstName: "Irritating",
        lastName: "Jackrabbit",
        dateOfBirth: new Date(1986, 4, 12),
        ssn: "987-65-4321",
        id: 2,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Questionable",
        lastName: "Manatee",
        dateOfBirth: new Date(1986, 9, 30),
        ssn: "563-68-7015",
        id: 3,
    },
    preapprovals: [{
        id: 3,
        offerType: PreapprovalOfferType.Vehicle,
        rate: .1234,
        termMonths: 48,
        status: PreapprovalStatus.Pending
    }]
}, {
    member: {
        firstName: "Excitable",
        lastName: "Llama",
        dateOfBirth: new Date(1926, 6, 2),
        ssn: "876-34-5685",
        id: 4,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Consequential",
        lastName: "Marmoset",
        dateOfBirth: new Date(1956, 5, 9),
        ssn: "574-95-3587",
        id: 5,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Stinky",
        lastName: "Unicorn",
        dateOfBirth: new Date(2000, 1, 2),
        ssn: "987-45-0165",
        id: 6,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Immaculate",
        lastName: "Turtle",
        dateOfBirth: new Date(1939, 9, 8),
        ssn: "234-87-2847",
        id: 7,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Clandestine",
        lastName: "Salamander",
        dateOfBirth: new Date(1993, 2, 1),
        ssn: "567-29-3658",
        id: 8,
    },
    preapprovals: []
}];