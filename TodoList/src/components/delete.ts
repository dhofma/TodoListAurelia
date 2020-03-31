import { autoinject } from 'aurelia-framework';
import {Router} from 'aurelia-router';
import { TodoService } from 'services/TodoService';
import { Todo } from 'models/Todo';

@autoinject
export class Delete{
    public todo:Todo;

    activate(params: { id: number; }) {
        if (params.id > 0) {
            this.todoSvc.getTodoById(params.id).then((item) =>{
                this.todo = item;
            }, () =>{
                window.alert("Cannot delete a non-existing item");
                this.router.navigateToRoute('home');
            });
        }
    }

    constructor(private todoSvc: TodoService, private router: Router) { }

    public delete(): void{
        this.todoSvc.deleteTodo(this.todo.id).then(() =>{
            this.router.navigateToRoute('home');
        }, () =>{
            window.alert("Error, please try again!");
        });
    }
}