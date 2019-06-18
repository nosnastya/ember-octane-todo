import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title(i) {
        return `Lists ${i+1}`
    },
    // todos() {
    //     return [{ id: 1, listId: 1, title: "Amazing post number 1! Enjoyed it" },
    //         { id: 2, listId: 1, title: "Dude this post 1 is great, thanks!" }
    //     ]
    // },

    // withTodos: trait({
    //     afterCreate(list, server) {
    //         server.createList('todo', 3, { list });
    //     }
    // })
});