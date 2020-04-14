import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentication(state.url);
  }

  private checkAuthentication(returnUrl?: string): boolean {
    // const isAuthenticated = this.authenticationService.isAuthenticated();
    const isAuthenticated = false;
    if (!isAuthenticated) {
      this.redirect(returnUrl);
    }
    return isAuthenticated;
  }

  private redirect(returnUrl?: string): void {
    returnUrl = returnUrl || '/tabs/inicio';
    this.router.navigate(['/login'], { queryParams: { returnUrl }, replaceUrl: true });
  }
}
