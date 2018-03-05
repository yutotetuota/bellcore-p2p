<img src="http://vertcore.io/css/images/vertcore-p2p.svg" alt="vertcore payment protocol" height="35" width="102">

Vertcore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/vertcore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/vertcore-p2p)
[![Build Status](https://img.shields.io/travis/vertcoin-project/vertcore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/vertcoin-project/vertcore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/vertcoin-project/vertcore-p2p.svg?style=flat-square)](https://coveralls.io/r/vertcoin-project/vertcore-p2p?branch=master)

`vertcore-p2p` adds [Vertcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Vertcore.

See [the main vertcore repo](https://github.com/vertcoin-project/vertcore) for more information.

## Getting Started

```sh
npm install vertcore-p2p
```
In order to connect to the Vertcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('vertcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [vertcore guide](http://vertcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/vertcoin-project/vertcore/blob/master/CONTRIBUTING.md) on the main vertcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/vertcoin-project/vertcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
