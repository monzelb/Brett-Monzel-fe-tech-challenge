import { Observable } from "rxjs";
import { IPreapprovalOfferDto } from "src/app/models/dto/preapproval-offer-dto.model";

export interface IPreapprovalApiService {
    getForMember(memberId: number): Observable<IPreapprovalOfferDto[]>;
    getSingle(id: number): Observable<IPreapprovalOfferDto>;
    accept(id: number): Observable<void>;
    dimiss(id: number): Observable<void>;
}