import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecognitionGuard implements CanActivate {
	constructor(private location: Location) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  const element = 	document.getElementById('videoRec')!
	console.log(this.location.path());
        if (this.location.path() === '/emotii') {
		  	  element.style.display = 'block'!; 
        }
        else {
        	element.style.display = 'none'!; 
        }


    return true;
  }
  
}
