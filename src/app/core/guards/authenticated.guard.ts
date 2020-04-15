import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor() { }

  canActivate(): Promise<boolean>{
    return new Promise( r => {
      false
    });
  }
}
