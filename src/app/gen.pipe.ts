import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'gen'
})


export class GenPipe implements PipeTransform {

  transform(value: string, gender: string): string {

    console.log(gender)
    console.log(value)
    if (gender.toLowerCase() == 'male') {
      return "Mr." + value;
    }
    else{

      return "Miss." + value;

    }

    
  }

}
