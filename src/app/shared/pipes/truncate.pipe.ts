import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, lines: number): string {
    const words = value.split(' ');
    if (words.length <= lines * 10) {
      return value;
    }

    return words.slice(0, lines * 10).join(' ') + '...';
  }
}
