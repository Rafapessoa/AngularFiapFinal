import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any, filterBy: string) {       
        if(!items)
            return items
        const filterName = items.filter(items => items.name.includes(filterBy));    
        return filterName;
    }
}

