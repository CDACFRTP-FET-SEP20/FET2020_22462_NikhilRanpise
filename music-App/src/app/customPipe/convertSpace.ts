import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'cts'
})
export class ConvertSpaces implements PipeTransform{
    transform(value: any, ...args: any[]) {
      let data:string=value;
      data=value.replace(" ","*");
      return data;
    }
    
}