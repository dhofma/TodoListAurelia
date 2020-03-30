import { Todo } from "models/Todo";
import {HttpClient, json} from "aurelia-fetch-client";

export class TodoService{
    private baseUrl: string = "https://localhost:44332/api/todo";
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    public async getTodos(): Promise<Todo[]> {
        let result = await this.httpClient.fetch(this.baseUrl, {
            method: "get"
        });
        if(result.ok)
            return Promise.resolve(result.json());
        else
            return Promise.reject(null);
    }

    public async getTodoById(id:number): Promise<Todo>{
        let result = await this.httpClient.fetch(this.baseUrl + "/" + id, {
            method: "get"
        });
        if(result.ok)
            return Promise.resolve(result.json());
        else
            return Promise.reject(null);
    }

    public async createTodo(item:Todo): Promise<Todo>{
        let result = await this.httpClient.fetch(this.baseUrl, {
            method: "post",
            body: json(item)
        });
        if(result.ok)
            return Promise.resolve(result.json());
        else
            return Promise.reject(null);
    }

    public async updateTodo(item: Todo): Promise<Todo>{
        let result = await this.httpClient.fetch(this.baseUrl, {
            method: "put",
            body: json(item)
        });
        if(result.ok)
            return Promise.resolve(result.json());
        else
            return Promise.reject(null);
    }

    public async deleteTodo(id: number): Promise<void>{
        let result = await this.httpClient.fetch(this.baseUrl, {
            method: "delete",
            body: ""+id
        });
        if(result.ok)
            return Promise.resolve();
        else
            return Promise.reject();
    }
}