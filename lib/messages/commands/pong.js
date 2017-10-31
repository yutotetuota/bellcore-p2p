'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var vertcore = require('vertcore-lib');
var utils = require('../utils');
var $ = vertcore.util.preconditions;
var _ = vertcore.deps._;
var BufferUtil = vertcore.util.buffer;
var BufferReader = vertcore.encoding.BufferReader;

/**
 * A message in response to a ping message.
 * @param {Number} arg - A nonce for the Pong message
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function PongMessage(arg, options) {
  Message.call(this, options);
  this.command = 'pong';
  $.checkArgument(
    _.isUndefined(arg) || (BufferUtil.isBuffer(arg) && arg.length === 8),
    'First argument is expected to be an 8 byte buffer'
  );
  this.nonce = arg || utils.getNonce();
}
inherits(PongMessage, Message);

PongMessage.prototype.setPayload = function(payload) {
  var parser = new BufferReader(payload);
  this.nonce = parser.read(8);

  utils.checkFinished(parser);
};

PongMessage.prototype.getPayload = function() {
  return this.nonce;
};

module.exports = PongMessage;
