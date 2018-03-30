import { NewsSource } from './models/source.model'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "completeness",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: NewsSource[], desiredCategory) {
    var output: NewsSource[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category == desiredCategory) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
