import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
	transform(items: any[], filter: any): any {
		if (!items || !filter) {
			return items;
		}
		// Filter items array, items which match and return true will be
		// kept, false will be filtered out
		return items.filter(item => item[filter.filterProperty] === filter.filterValue);
	}
}
