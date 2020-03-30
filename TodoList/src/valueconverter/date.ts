export class DateValueConverter {
    toView(date: Date): string {
        let parsedDate: Date = new Date(date);
        return new Date(parsedDate.valueOf() - parsedDate.getTimezoneOffset() * 60 * 1000).toLocaleString();
    }
}