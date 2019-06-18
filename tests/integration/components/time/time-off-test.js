import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | time/time-off', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{time/time-off}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#time/time-off}}
        template block text
      {{/time/time-off}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
