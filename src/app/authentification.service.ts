import { Injectable } from '@angular/core';
import { utilisateur } from './utilisateur';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  public seConnecter(userData:utilisateur){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }
  public estConnecter(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  public setDeconnecter(){
    return localStorage.removeItem('ACCESS_TOKEN')
  } 
  
}
