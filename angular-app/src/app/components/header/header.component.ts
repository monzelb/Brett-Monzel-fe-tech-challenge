import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Credit Union Members';
  showAddMember: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddMember = value));
  }

  ngOnInit(): void {
  }

  toggleAddMember() {
    console.log("toggle");
    this.uiService.toggleAddMember();
  }

}
