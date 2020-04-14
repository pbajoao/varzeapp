import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '@app/config/app.config';
// import { ApiService } from '@app/core/http/api.service';
import { LoginContext, User } from '@app/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<User>;
  private subject: BehaviorSubject<User>;

  constructor(
    // private cookieHelperService: CookieHelperService, 
    // private apiService: ApiService
    ) {
    // this.subject = new BehaviorSubject<User>(this.getSubject());
    // this.user$ = this.subject.asObservable();
  }

  // isAuthenticated(): boolean {
  //   return this.hasTokenCookie() && this.hasSubjectCookie();
  // }

  // searchUser(documento: string): Observable<User> {
  //   return this.apiService.searchUser(documento).pipe(
  //     map(searchUserResponse => searchUserResponse.body)
  //   );
  // }

  // login(loginContext: LoginContext): Observable<User> {
  //   return this.apiService.login(loginContext).pipe(
  //     map(loginResponse => {
  //       const user = loginResponse.body;
  //       this.addTokenCookie(this.getTokenFromResponse(loginResponse));
  //       this.addSubjectCookie(user);
  //       this.subject.next(user);
  //       return user;
  //     })
  //   );
  // }

  // registerUser(request: User): Observable<User | HttpResponse<any>> {
  //   return this.apiService.registerUser(request).pipe(
  //     flatMap(registerUserResponse => {
  //       this.addTokenCookie(this.getTokenFromResponse(registerUserResponse));
  //       return this.apiService.currentUser();
  //     }),
  //     map(currentUserResponse => {
  //       const user = currentUserResponse.body;
  //       this.addSubjectCookie(user);
  //       this.subject.next(user);
  //       return user;
  //     })
  //   );
  // }

  // logout(): Observable<any> {
  //   this.removeCookies();
  //   this.subject.next(null);
  //   return this.apiService.logout();
  // }

  // hasTokenCookie(): boolean {
  //   return this.cookieHelperService.check(AppConfig.auth.tokenCookie);
  // }

  // getToken(): string {
  //   return this.cookieHelperService.get(AppConfig.auth.tokenCookie, false);
  // }

  // hasSubjectCookie(): boolean {
  //   return this.cookieHelperService.check(AppConfig.auth.subjectCookie);
  // }

  // getSubject(): User {
  //   let user: User = null;
  //   try {
  //     const subject = this.cookieHelperService.get(AppConfig.auth.subjectCookie);
  //     if (!subject) { return null; }
  //     user = JSON.parse(subject);
  //   } catch {
  //     this.removeCookies();
  //   }
  //   return user;
  // }

  // private getTokenFromResponse(response: HttpResponse<any>): string {
  //   return response.headers.get(AppConfig.auth.tokenHeader);
  // }

  // private addTokenCookie(token: string): void {
  //   if (!token) { return; }
  //   this.cookieHelperService.add(AppConfig.auth.tokenCookie, token, false, 1);
  // }

  // private addSubjectCookie(user: User): void {
  //   if (!user) { return; }
  //   this.cookieHelperService.add(AppConfig.auth.subjectCookie, JSON.stringify(user), true, 1);
  // }

  // private removeCookies(): void {
  //   this.cookieHelperService.remove(AppConfig.auth.tokenCookie);
  //   this.cookieHelperService.remove(AppConfig.auth.subjectCookie);
  //   this.cookieHelperService.remove(AppConfig.partner);
  // }
}
