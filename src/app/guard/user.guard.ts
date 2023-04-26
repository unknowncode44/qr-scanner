import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as selectors from '../state/app.state'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserGuard implements CanActivate {
  authed: boolean = false
  constructor(private cookieService: CookieService, private router: Router, private store: Store){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.cookieService.check('x-token')
      this.store.select(selectors.selectIsAuth).subscribe( (res) => {
        this.authed = res
      })
      if(!this.authed || !cookie){
      this.router.navigate(['/', 'login'])
      this.store.subscribe().unsubscribe()
      return false
      }
      else {
        return true;
      }

  }

}
