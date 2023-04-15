import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from "@features/users/users-routing.module";
import {UsersDataService} from "@features/users/@services/users-data.service";
import { DetailsComponent } from './details/details.component';
import {FormsModule} from "@angular/forms";
import { AlphabeticalPipe } from './@pipes/alphabetical.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    DetailsComponent,
    AlphabeticalPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [UsersDataService]
})
export class UsersModule {
}
