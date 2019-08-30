'use strict';

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

function _AwaitValue(value) {
  this.wrapped = value;
}

function _AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume("next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen.return !== "function") {
    this.return = undefined;
  }
}

if (typeof Symbol === "function" && Symbol.asyncIterator) {
  _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
    return this;
  };
}

_AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

_AsyncGenerator.prototype.throw = function (arg) {
  return this._invoke("throw", arg);
};

_AsyncGenerator.prototype.return = function (arg) {
  return this._invoke("return", arg);
};

function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var defaultOptions = {
  text: "",
  speed: [100, 500],
  // Number: constant speed / Array[2]: Variable speed
  cursor: "|"
};

function lettersItterator(_x, _x2) {
  return _lettersItterator.apply(this, arguments);
}

function _lettersItterator() {
  _lettersItterator = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(text, speed) {
    var letters, s, newLetter;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            letters = text.split("");
            s = speed || 100;

          case 2:
            if (!(letters.length > 0)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return _awaitAsyncGenerator(asyncLetter(letters.splice(0, 1)[0], s));

          case 5:
            newLetter = _context.sent;
            _context.next = 8;
            return newLetter;

          case 8:
            _context.next = 2;
            break;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _lettersItterator.apply(this, arguments);
}

function asyncLetter(letter, time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(letter);
    }, Math.random() * time);
  });
}

function getSpeed(speedOption) {
  if (Array.isArray(speedOption) && speedOption.length === 2) {
    var sp0 = speedOption[0];
    var sp1 = speedOption[1];

    if (sp0 !== null && sp1 !== null) {
      var min = Number(sp0);
      var max = Number(sp1);
      if (!isNaN(min) && !isNaN(max)) return Math.random() * (max - min) + min;
    }
  }

  var n = Number(speedOption);
  if (!isNaN(n)) return n;
  return 0;
}

function textTyping$1(elem) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opt = Object.assign({}, defaultOptions, options);
  var cursor = document.createElement("span");
  cursor.classList.add("fake-cursor");
  cursor.innerHTML = opt.cursor;
  var mainTextHolder = document.createElement("span");
  mainTextHolder.classList.add("main-text-holder");
  return {
    init: function init() {
      elem.appendChild(mainTextHolder);
      elem.appendChild(cursor);
      return this;
    },
    startTyping: function () {
      var _startTyping = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var speed, sequence, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, letter;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!text) {
                  _context.next = 36;
                  break;
                }

                speed = getSpeed(opt.speed);
                sequence = lettersItterator(opt.text, speed);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 5;
                _iterator = _asyncIterator(sequence);

              case 7:
                _context.next = 9;
                return _iterator.next();

              case 9:
                _step = _context.sent;
                _iteratorNormalCompletion = _step.done;
                _context.next = 13;
                return _step.value;

              case 13:
                _value = _context.sent;

                if (_iteratorNormalCompletion) {
                  _context.next = 20;
                  break;
                }

                letter = _value;
                mainTextHolder.innerHTML = mainTextHolder.innerHTML + letter;

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 31;
                return _iterator["return"]();

              case 31:
                _context.prev = 31;

                if (!_didIteratorError) {
                  _context.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context.finish(31);

              case 35:
                return _context.finish(26);

              case 36:
                return _context.abrupt("return", this);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 22, 26, 36], [27,, 31, 35]]);
      }));

      function startTyping() {
        return _startTyping.apply(this, arguments);
      }

      return startTyping;
    }()
  };
}

module.exports = textTyping$1;

document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  var h1 = document.getElementById("header_1");
  textTyping(h1, {
    text: "Hello world"
  }).init().startTyping();
}
