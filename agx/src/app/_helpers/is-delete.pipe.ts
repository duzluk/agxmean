import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../_models/SeedModel';

@Pipe({
  name: 'isDelete'
})
export class IsDeletePipe implements PipeTransform {

  transform(value: ProductDetail[], filter: boolean): ProductDetail[] {
    if(!filter)
      return value;

    return value.filter(p=>p.IsDeleted==filter);
  }

}
  