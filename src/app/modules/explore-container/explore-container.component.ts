import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {}

  logout(){
    this.authenticationService.logout();
  }

}
