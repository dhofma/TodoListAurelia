import { Todo } from "models/Todo";
import { TodoService } from "services/TodoService";
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class Edit {
    public todo: Todo = null;
    private newTodo: boolean = false;

    constructor(private todoSvc: TodoService, private router: Router) { }

    activate(params: { id: number; }) {
        if (params.id <= 0) {
            this.todo = new Todo();
            this.newTodo = true;
        }
        else {
            this.todoSvc.getTodoById(params.id).then((item) =>{
                this.todo = item;
            }, () =>{
                this.todo = new Todo();
                this.newTodo = true;
            });
        }
    }

    public submit(): void {
        if (this.newTodo) {
            //call Create
            this.todoSvc.createTodo(this.todo).then(() =>{
                this.router.navigateToRoute('home');
            }, () =>{
                window.alert("Error, please try again!");
            });
        }
        else {
            //call Update
            this.todoSvc.updateTodo(this.todo).then(() =>{
                this.router.navigateToRoute('home');
            }, () =>{
                window.alert("Error, please try again!");
            })
        }
    }
}