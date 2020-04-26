import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { DatePlay } from '@app/models/person/date-play.model';
import { DateClub } from '@app/models/person/date-club.model';
import { User } from '@app/models/user';
import { Subscription } from 'rxjs';
import { ApiService } from '@app/core/http/api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit, OnDestroy {

  userSubscription: Subscription;
  currentUserId: any;
  datePerson: User;
  datePlay: DatePlay = new DatePlay('-', '-', '-', '-', '-', '-');
  dateClub: DateClub = new DateClub('-', '-');
  age: any;

  constructor(
    private authenticationService: AuthenticationService,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.authenticationService.getAuth().onAuthStateChanged(
      user => {
        this.currentUserId = user.uid;
        this.getUse(this.currentUserId);
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  private getUse(currentUserId: any) {
    this.userSubscription = this.apiService.getUsuario(currentUserId).subscribe(
      user => {
        this.datePerson = user;
        this.age = this.calculateYear(this.datePerson.birth);
        console.log(this.datePerson)
      });
  }


  private calculateYear(data: any) {
    const currentDate = new Date();
    const birth = new Date(data);
    let age = currentDate.getFullYear() - birth.getFullYear();

    if (currentDate.getMonth() < birth.getMonth() ||
      currentDate.getMonth() == birth.getMonth() &&
      currentDate.getDay() < birth.getDay()) {
      age--;
    }

    return age
  }

  navigateEditPerson() {
    this.router.navigate(['/tabs/person/edit-person']);
  }

}
