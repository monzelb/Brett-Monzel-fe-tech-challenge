import { Observable } from "rxjs";
import { IMemberDto } from "src/app/models/dto/member-dto.model";

export interface IMemberApiService {
    /**
     * Get all of our credit union members
     * @returns A collection of members
     */
    getCollection():Observable<IMemberDto[]>;

    /**
     * Gets a member with the provided id from the "API"
     * @param id - The id of the member to get
     * @returns A member
     */
    get(id: number):Observable<IMemberDto | undefined>;

    /**
     * Onboards a new member.  Hooray 🎉!!
     * @param member - The new member to enroll in our credit union
     * @returns The newly created member
     */
    create(member: IMemberDto):Observable<IMemberDto>;

    /**
     * Updates an existing member's information
     * @param member - The updated member
     * @returns The updated member
     */
    update(member: IMemberDto):Observable<IMemberDto>;

    /**
     * Removes a member from our credit union. 😢
     * @param id - The id of the member to remove
     */
    delete(id: number): void;
}