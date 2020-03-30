export class DateValueConverter {
    toView(date: Date): string {
        let parsedDate: Date = new Date(Date.parse(date.toString()));
        return new Date(parsedDate.valueOf() - parsedDate.getTimezoneOffset() * 60 * 1000).toLocaleString();
    }
}