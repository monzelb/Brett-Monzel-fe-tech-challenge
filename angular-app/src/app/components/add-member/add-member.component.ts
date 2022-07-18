import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { IMemberDto } from "src/app/models/dto/member-dto.model";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  @Output() onAddMember: EventEmitter<IMemberDto> = new EventEmitter();
  firstName: any;
  lastName: any;
  dateOfBirth: any;
  ssn: any;
  showAddMember: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddMember = value));
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.firstName || !this.firstName ) {
      alert("Please Enter all required fields");
      return
    }

    const newMember = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      ssn: this.ssn
    }
    this.onAddMember.emit(newMember);

    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = '';
    this.ssn = '';
  }

}
