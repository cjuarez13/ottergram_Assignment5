QUnit.test('Testing: get and get All', function(assert) {
    var App = window.App;
    var ds = new App.DataStore();

    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    //ds.add('dr@no.com', 'coffee');
    //ds.add('me@goldfinger.com', 'double mocha');

    assert.equal(ds.get('m@bond.com'), 'tea', 'Correct output: tea');
    assert.equal(ds.get('james@bond.com'), 'eshpressho', 'Correct output: eshpressho');

    var obj = ds.getAll();
    assert.deepEqual(obj, {'m@bond.com': 'tea', 'james@bond.com':'eshpressho'}, 'Correct outputs');
    //assert.equal(ds.get('dr@no.com'), 'coffee', 'Correct output: coffee');
    //assert.equal(ds.get('me@goldfinger.com'), 'double mocha', 'Correct output: double mocha');

});


QUnit.test('Testing: Truck module', function(assert) {
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());

    myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
    myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
    myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
    myTruck.printOrders(); myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com'); myTruck.printOrders();

    assert.deepEqual();

});
