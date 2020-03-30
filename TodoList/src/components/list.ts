import { Todo } from '../models/Todo';
import { TodoService } from '../services/TodoService';
import { autoinject } from 'aurelia-framework';

@autoinject
export class List {
    public todos: Todo[] = null;

    constructor(private todoSvc: TodoService) { }

    activate() {
        this.todoSvc.getTodos().then((item) => {
            this.todos = item;
        }, () => {
            window.alert("Could not fetch data, please try again later!");
        });
    }

    getClass(index: number): string {
        let todo: Todo = this.todos[index];
        if (todo.isDone)
            return "table-success";
        if (new Date(todo.due) < new Date()) {
            return "table-danger";
        }
        return "";
    }
}
