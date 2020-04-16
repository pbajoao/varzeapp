import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AnonymousGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authenticationService.getAuth().onAuthStateChanged(user => {
        if (user) { this.router.navigate(['/tabs']) }
        resolve(!user ? true : false)
      })
    });
  }
}
