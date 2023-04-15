import { Pipe, PipeTransform } from '@angular/core';
import {User} from "@features/users/@models";

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.sort((a, b) => a.name.localeCompare(b.name));
  }
}
