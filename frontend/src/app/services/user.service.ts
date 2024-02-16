import { Inject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constrants/urls';
import { ToastrModule, ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})



export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());  
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastr: ToastrService) {
    
    this.userObservable = this.userSubject.asObservable();
   }


   login(userLogin: IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user)  =>{
          this.userSubject.next(user);
          this.toastr.success(
            `Welcometo Food Store ${user.name}`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastr.error(errorResponse.error, 'Login Failed');
        }
      })
    )
   }

   
   private setUserToLocalStorage(user:User){
    localStorage.setItem('USER_KEY', JSON.stringify(user))
   }

   private getUserFromLocalStorage(user:User):User{
    const UserJson = localStorage.getItem('USER_KEY');

    if(UserJson) return JSON.parse(UserJson) as User;
    return new User()
   }
}
