import EmberObject from '@ember/object';
import EmbeddedJsonapiRecordsMixin from 'ember-app-octane-todo/mixins/embedded-jsonapi-records';
import { module, test } from 'qunit';

module('Unit | Mixin | embedded-jsonapi-records', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let EmbeddedJsonapiRecordsObject = EmberObject.extend(EmbeddedJsonapiRecordsMixin);
    let subject = EmbeddedJsonapiRecordsObject.create();
    assert.ok(subject);
  });
});
