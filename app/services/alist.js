import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    // store: service(),
    // //     init() {
    // //         return this.set('aList', this.store.query('todo-list', {}))
    // //    },

    // createTodo(newTodoTitle, tasks) {
    //     const newTodo = this.store.createRecord('todos-item', {
    //         id: Math.floor(Math.random(100)),
    //         title: newTodoTitle
    //     })
    //     tasks.pushObject(newTodo);
    // },
    // removeTodo(item, tasks) {
    //     tasks.removeObject(item);
    // },
    // createNewList(newListTitle) {
    //     this.init();
    //     const newListItem = {
    //         id: `${Math.floor(Math.random(100))}`,
    //         title: newListTitle,
    //         tasks: [

    //         ]
    //     }
    //     aList.pushObject(newListItem);
    // },
    // removeList(todoList) {
    //     todoList.destroyRecord();
    // }

});