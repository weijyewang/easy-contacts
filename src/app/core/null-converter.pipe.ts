import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'nullConverter'
})

export class NullConverterPipe implements PipeTransform {
	transform(value: any, args?: any): any {

		if (value === 0) return 0; // This is because !value will treat 0 as true and return '--' in the next line.
		if (!value) return '--';
		if (value === -1) return '--';

		return value;
	}
}
