import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddMember : boolean  = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddMember(): void {
    this.showAddMember = !this.showAddMember;
    this.subject.next(this.showAddMember);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
