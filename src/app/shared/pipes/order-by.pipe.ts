import { Pipe, PipeTransform } from '@angular/core';

/**
 * Sort array of objects by supplied key
*/
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(items: Array<any>, sortBy: string, desc = true): any {
    return items.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return desc ? 1 : -1;
      }

      if (a[sortBy] > b[sortBy]) {
        return desc ? -1 : 1;
      }

      return 0;
    });
  }

}
