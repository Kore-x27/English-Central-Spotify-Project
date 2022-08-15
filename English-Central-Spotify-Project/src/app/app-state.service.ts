import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  loginPageVisible: boolean = true;

  isLoginPageVisible(): boolean {
         return this.loginPageVisible;
  }
  
  setLoginPageVisibility(visible: boolean): void {
         this.loginPageVisible = visible;
  }
}