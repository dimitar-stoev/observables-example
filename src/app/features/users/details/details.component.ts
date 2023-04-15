import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from "@features/users/@models";
import {Observable, switchMap} from "rxjs";
import {UsersDataService} from "@features/users/@services/users-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {

  readonly user$: Observable<User>;

  constructor(
    private usersDataService: UsersDataService,
    private route: ActivatedRoute,
  ) {

    this.user$ = this.route.paramMap.pipe(
      switchMap(params => this.usersDataService.getSingleUser(+params.get('id')!))
    )
  }

  ngOnInit(): void {
  }

}
