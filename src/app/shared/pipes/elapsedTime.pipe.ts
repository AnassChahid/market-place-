import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime',
  standalone: true
})
export class ElapsedTimePipe implements PipeTransform {
  transform(date: Date | string): string {
    const publicationDate = typeof date === 'string' ? new Date(date) : date;
    const currentDate = new Date();

    const diffMilliseconds = currentDate.getTime() - publicationDate.getTime();
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 60) {
      // If less than 60 minutes, use minutes
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      // If less than 24 hours, use hours
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays <= 10) {
      // If less than or equal to 10 days, display "x days ago"
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
      // If more than 10 days, use the DatePipe for a human-readable format
      // You may need to inject and use the DatePipe if it's not available in the pipe
      // Alternatively, you can implement the human-readable format logic here
      const day = publicationDate.getDate();
      const month = publicationDate.getMonth() + 1; // Months are zero-based
      const year = publicationDate.getFullYear();

      // Ensure two-digit format for day and month
      const formattedDay = day < 10 ? `0${day}` : `${day}`;
      const formattedMonth = month < 10 ? `0${month}` : `${month}`;

      return `${formattedDay}/${formattedMonth}/${year}`;
    }
  }
}
