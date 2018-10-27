import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, findChar: any , replaceChar: any): any {
    console.log(value);
    console.log(findChar);
    console.log(replaceChar);
    let newValue = "Welcome : "+value.replace(findChar,replaceChar);
    return newValue;
  }

}
