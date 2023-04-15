import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersDataService} from "@features/users/@services/users-data.service";
import {combineLatest, map, Observable, tap} from "rxjs";
import {User} from "@features/users/@models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  name: string = '';
  status: boolean = false;

  users$ = this.usersDataService.getAllUsers();
  activeUsers$: Observable<User[]> = this.users$.pipe(
    map(users => users.filter(user => user.status))
  )

  usersViews$ = combineLatest([this.users$, this.activeUsers$]).pipe(
    map(([users, activeUsers]) : {
      users: User[],
      activeUsers: User[]
    } => {
      return {
        users,
        activeUsers
      }
    })
  )


  constructor(
    private usersDataService: UsersDataService,
  ) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.usersDataService.addUser({
      id: Math.floor(Math.random() * 100),
      name: this.name,
      status: this.status
    });
  }
}
