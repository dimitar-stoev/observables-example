import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, find, from, map, Observable, of} from "rxjs";
import {User} from "@features/users/@models";
import {USERS} from '../@constant-data';

@Injectable()
export class UsersDataService {

  private readonly USERS: User[] = USERS;

  private Users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.USERS);

  private readonly Users$: Observable<User[]> = this.Users.asObservable();

  constructor() {
  }

  getSingleUser(id: number): Observable<User> {

    return from(this.USERS).pipe(
      find(user => user.id === id),
      map(user => {
        if (user) {
          return user;
        } else {
          throw new Error(`User with id ${id} not found.`);
        }
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.Users$;
  }

  addUser(param: { name: string; id: number; status: boolean }) {
    this.USERS.push(param as User);
    this.Users.next(this.USERS);
  }
}
