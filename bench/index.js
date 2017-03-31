const vfa = require('./..');
const fargs = require('fast-args');

function withArraySlice() {
  return Array.prototype.slice.call(arguments);
}

function withFastArgs () {
  return fargs(arguments);
}

function withArrayApply() {
  return Array.apply(null, arguments);
}

function withVeryFastArgs() {
  return vfa.apply(null, arguments);
}

exports.compare = {
  'Array.apply.apply' : function () {
    return withArrayApply(1, 2, 3);
  },
  'Array.slice.call' : function () {
    return withArraySlice(1, 2, 3);
  },
  'fast-args': function () {
    return withFastArgs(1, 2, 3);
  },
  'very-fast-args': function () {
    return withVeryFastArgs(1,2,3);
  }
};

require("bench").runMain();
