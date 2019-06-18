import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
    // todo: service('alist'),
    // router: service(),
    // lists: computed(function() {
    //     return this.todo.aList;
    // }),

    actions: {

        // onClickList(itemId) {
        //     debugger;
        //     this.router.transitionTo('todos-item', itemId.id);

        // },
        // createNewList(newListTitle) {
        //     if (newListTitle) {
        //         this.todo.createNewList(newListTitle, this.aList);
        //         this.set('newListTitle', '');
        //     }
        // },
        // removeList(newListTitle) {
        //     if (newListTitle) {
        //         this.todo.removeList(newListTitle, this.aList);
        //     }
        // },
    }
});