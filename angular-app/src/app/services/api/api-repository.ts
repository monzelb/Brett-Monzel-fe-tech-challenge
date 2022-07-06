import { IMemberDto } from "src/app/models/dto/member-dto.model";
import { IPreapprovalOfferDto, PreapprovalOfferType } from "src/app/models/dto/preapproval-offer-dto.model";

export enum PreapprovalStatus {
    Pending,
    Accepted,
    Dismissed
}

export const repository: {member: IMemberDto, preapprovals: (IPreapprovalOfferDto & { status: PreapprovalStatus })[]}[] = [{
    member: {
        firstName: "Billy",
        lastName: "Bob",
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
        firstName: "Jane",
        lastName: "Wellington",
        dateOfBirth: new Date(1986, 4, 12),
        ssn: "987-65-4321",
        id: 2,
    },
    preapprovals: []
}, {
    member: {
        firstName: "Bruce",
        lastName: "Habernathy",
        dateOfBirth: new Date(1986, 4, 12),
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
}];