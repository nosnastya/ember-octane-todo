import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp'
import $ from 'jquery';

export default Route.extend({
    todo: service('alist'),

    model() {
        // let parentModel = this.modelFor('todos-list');
        // const itemId = params.itemId;
        // return this.todo.aList.findBy('id', itemId).tasks;
        return RSVP.hash({
            // lists: parentModel.lists,
            // todos: parentModel.todos

            todos: $.getJSON('/api/lists/:id'),
            // childModels: this.store.query("things", {"product_group_id": parentModel.productGroup.id, ...})

            //   commentsFor1: $.getJSON('/api/lists/1/todos'),
            //   commentsFor5: $.getJSON('/api/lists/5/todos')
        });
    },

    actions: {

    }

});