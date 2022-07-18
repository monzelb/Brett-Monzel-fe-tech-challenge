import { Component, Inject, OnInit } from '@angular/core';
import { IMemberApiServiceProvider } from '../../services/api/member/member-api.config';
import { IMemberApiService } from '../../services/api/member/member-api.service';
import { IMemberDto } from "src/app/models/dto/member-dto.model";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members : IMemberDto[] = [];

  constructor(
    @Inject(IMemberApiServiceProvider)
    private memberApiService: IMemberApiService
  ) {
   }

  ngOnInit(): void {
    this.getAllMembers()
  }

  deleteMember(member: IMemberDto) {
    this.memberApiService.delete(member.id!);
    this.memberApiService.getCollection().subscribe(members => this.members = members);
  }

  addMember(member: IMemberDto) {
    this.memberApiService.create({
      firstName: member.firstName,
      lastName: member.lastName,
      dateOfBirth: member.dateOfBirth,
      ssn: member.ssn
    });

    this.getAllMembers()
  }

  getAllMembers() {
    this.memberApiService.getCollection().subscribe(members => this.members = members);
    this.memberApiService.getCollection().subscribe(x => console.log(x));
  }

}
