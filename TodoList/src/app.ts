import { PLATFORM } from 'aurelia-framework';

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

export class App {
  configureRouter(config, router) {
    config.title = 'Todo-List';
    config.map([
      { route: '', name: 'home', moduleId: PLATFORM.moduleName("components/list"), nav: true, title: 'Home' },
      { route: 'edit', name: 'edit', moduleId: PLATFORM.moduleName("components/edit"), nav: true, title: 'Edit' },
      { route: 'delete', name: 'delete', moduleId: PLATFORM.moduleName("components/delete"), nav: true, title: 'Delete' }
    ]);
  }
}