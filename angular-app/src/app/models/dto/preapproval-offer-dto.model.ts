export enum PreapprovalOfferType {
    Personal,
    Vehicle,
    HomeEquity
}

export interface IPreapprovalOfferDto {
    id: number;
    offerType: PreapprovalOfferType;
    termMonths: number;
    rate: number;
}