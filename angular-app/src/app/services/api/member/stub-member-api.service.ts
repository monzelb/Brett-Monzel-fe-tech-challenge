import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IMemberDto } from "src/app/models/dto/member-dto.model";
import { repository } from "../api-repository";
import { IMemberApiService } from "./member-api.service";

@Injectable({
    providedIn: 'root'
})

export class StubMemberApiService implements IMemberApiService {
    getCollection(): Observable<IMemberDto[]> {
        let ret = repository.map(x => x.member);
        
        return of(ret);
    }
    
    get(id: number): Observable<IMemberDto | undefined> {
        let ret = repository.map(x => x.member)
            .find(x => x.id === id)
        
        if (!ret) throw new Error("Member does not exist.");
        
        return of(ret);
    }

    create(member: IMemberDto): Observable<IMemberDto> { 
        repository.push({
            member,
            preapprovals: []
        })
        
        return of(member);
    }
    
    update(member: IMemberDto): Observable<IMemberDto> {
        let toUpdate = repository.find(x => x.member.id == member.id);
        if (!toUpdate) throw new Error("Member does not exist.");
        
        Object.assign(toUpdate, member);
        
        return of(member);
    }
    
    delete(id: number): Observable<void> {
        let memberIds = repository.map(x => x.member.id);
        let indexToDelete = memberIds.indexOf(id);
        if (id === -1) throw new Error("Member does not exist.");

        repository.splice(indexToDelete, 1);

        return of();
    }
}