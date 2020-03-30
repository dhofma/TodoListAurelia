export class Todo{
    public id: number;
    public title: string = "";
    public isDone: boolean = false;
    public created: Date = new Date();
    public due: Date = new Date((new Date()).valueOf() + 1000*3600*24);
}