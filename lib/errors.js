'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on vertcore-p2p Module {0}'
};

module.exports = require('vertcore-lib').errors.extend(spec);
