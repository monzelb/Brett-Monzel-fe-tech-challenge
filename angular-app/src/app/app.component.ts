import { Component, Inject } from '@angular/core';
import { IMemberApiServiceProvider } from './services/api/member/member-api.config';
import { IMemberApiService } from './services/api/member/member-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    @Inject(IMemberApiServiceProvider)
    private memberApiService: IMemberApiService
  ) {

  }
}
