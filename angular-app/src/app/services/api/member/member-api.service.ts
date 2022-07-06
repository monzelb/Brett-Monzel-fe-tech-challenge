import { Observable } from "rxjs";
import { IMemberDto } from "src/app/models/dto/member-dto.model";

export interface IMemberApiService {
    getCollection():Observable<IMemberDto[]>;
    get(id: number):Observable<IMemberDto | undefined>;
    create(member: IMemberDto):Observable<IMemberDto>;
    update(member: IMemberDto):Observable<IMemberDto>;
    delete(id: number): void;
}