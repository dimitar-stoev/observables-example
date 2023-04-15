import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "@features/users/users.component";
import {NgModule} from "@angular/core";
import {DetailsComponent} from "@features/users/details/details.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: DetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
