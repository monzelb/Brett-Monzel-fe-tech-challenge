import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPreapprovalOfferDto } from "src/app/models/dto/preapproval-offer-dto.model";
import { PreapprovalStatus, repository } from "../api-repository";
import { IPreapprovalApiService } from "./preapproval-api.service";

@Injectable({
    providedIn: 'root'
})

export class StubPreapprovalApiService implements IPreapprovalApiService {
    getForMember(memberId: number): Observable<IPreapprovalOfferDto[]> {
        let member = repository.find(x => x.member.id === memberId);
        if (!member) throw new Error("Member does not exist.");

        return of(member.preapprovals);
    }
    
    getSingle(id: number): Observable<IPreapprovalOfferDto> {
        let ret = repository
            .map(x => x.preapprovals)
            .reduce((a, b) => a.concat(b))
            .find(x => x.id == id)
        
        if (!ret) throw new Error("Preapproval does not exist.");
        
        (ret as any).status = null;
        
        return of(ret);
    }

    accept(id: number): Observable<void> {
        let ret = repository
            .map(x => x.preapprovals)
            .reduce((a, b) => a.concat(b))
            .find(x => x.id == id)
        
        if (!ret) throw new Error("Preapproval does not exist.");

        ret.status = PreapprovalStatus.Accepted;

        return of()
    }

    dimiss(id: number): Observable<void> {
        let ret = repository
            .map(x => x.preapprovals)
            .reduce((a, b) => a.concat(b))
            .find(x => x.id == id)
    
        if (!ret) throw new Error("Preapproval does not exist.");

        ret.status = PreapprovalStatus.Dismissed;

        return of()
    }
}