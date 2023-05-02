import { Pipe, PipeTransform } from '@angular/core';

interface Options {
    title: string,
    logo: string
  }

@Pipe({
    name: 'filterOpt',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Options): any {
        if(!items || !filter){
            return items
        }
        
        return items.filter(item => item.title.indexOf(filter.title) !== -1) 
    }
}