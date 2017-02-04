var hello = require('./hello');

hello.main();

['Joe', 'Jane', 'Tarzan'].map(name => hello.hello(name)) ;
