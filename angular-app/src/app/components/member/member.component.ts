import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IMemberDto } from "src/app/models/dto/member-dto.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() member: any;
  @Output() onDeleteMember: EventEmitter<IMemberDto> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(member: IMemberDto) {
    this.onDeleteMember.emit(member)
  }

}
