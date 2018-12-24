'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bellcore-p2p Module {0}'
};

module.exports = require('bellcore-lib').errors.extend(spec);
