import { Pipe, PipeTransform } from '@angular/core';
import { Names } from 'src/models/names';

@Pipe({
  name: 'splitFName'
})
export class SplitFNamePipe implements PipeTransform {

  transform(fullName: string): any {


    let output = new Names()

    var names = fullName.split(" ");

    if (names.length > 2) {

      output.firstName = names[0]
      output.middleName = names.slice(1, -1).join(" ")
      output.lastName = names[names.length - 1]

     
    } else if (names.length < 2) {


      output.firstName = names[0]
      output.middleName = ""
      output.lastName = ""

    } else {

      output.firstName = names[0]
      output.middleName = ""
      output.lastName = names[names.length - 1]


    }


    return output
  }

}
