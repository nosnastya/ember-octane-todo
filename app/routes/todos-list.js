import Route from '@ember/routing/route';
import RSVP from 'rsvp'
import $ from 'jquery';

export default Route.extend({
    model() {
        return RSVP.hash({

            lists: $.getJSON('/api/lists'),
            //   commentsFor1: $.getJSON('/api/lists/1/todos'),
            //   commentsFor5: $.getJSON('/api/lists/5/todos')
        });
    }
});