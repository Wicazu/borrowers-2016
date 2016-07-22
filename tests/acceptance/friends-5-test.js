import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends', {
  beforeEach() {
    //
    // Mirage makes the variable server avaialble in our tests.
    //
    // We can use server.create('model-name') to create 1 entry in the
    // mock server or use createList to create many.
    //
    //
    server.createList('friend', '10');
  }
});

test('0.624922664980289 /friends', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
    //
    // This will fail since we are creating 10 friends, fix it :)
    //
    assert.equal(
      find('table tbody tr').length,
      10,
      '10 friends'
    );
  });
});

test('0.033574270105202 /friends 2', function(assert) {
  visit('/friends');

  andThen(function() {
    assert.equal(currentURL(), '/friends');
    //
    // This will fail since we are creating 10 friends, fix it :)
    //
    assert.equal(
      find('table tbody tr').length,
      10,
      '10 friends'
    );
  });
});
