import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateStr'
})
export class FormateStrPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(value+ "===");
    let newValue = value.split('');
    return newValue;
  }

}
