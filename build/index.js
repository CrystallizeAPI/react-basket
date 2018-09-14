(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
  (factory((global['@crystallize/react-basket'] = {}),global.React,global.StyledComponents));
}(this, (function (exports,React,styled) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var styled__default = 'default' in styled ? styled['default'] : styled;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  !(function(global) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = module.exports;

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    runtime.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function(innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      );

      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  })(
    // In sloppy mode, unbound `this` refers to the global object, fallback to
    // Function constructor if we're in global strict mode. That is sadly a form
    // of indirect eval which violates Content Security Policy.
    (function() { return this })() || Function("return this")()
  );
  });

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  // This method of obtaining a reference to the global object needs to be
  // kept identical to the way it is obtained in runtime.js
  var g = (function() { return this })() || Function("return this")();

  // Use `getOwnPropertyNames` because not all browsers support calling
  // `hasOwnProperty` on the global `self` object in a worker. See #183.
  var hadRuntime = g.regeneratorRuntime &&
    Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

  // Save the old regeneratorRuntime in case it needs to be restored later.
  var oldRuntime = hadRuntime && g.regeneratorRuntime;

  // Force reevalutation of runtime.js.
  g.regeneratorRuntime = undefined;

  var runtimeModule = runtime;

  if (hadRuntime) {
    // Restore the original runtime.
    g.regeneratorRuntime = oldRuntime;
  } else {
    // Remove the global property added by runtime.js.
    try {
      delete g.regeneratorRuntime;
    } catch(e) {
      g.regeneratorRuntime = undefined;
    }
  }

  var regenerator = runtimeModule;

  var rngBrowser = createCommonjsModule(function (module) {
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection

  // getRandomValues needs to be invoked in a context where "this" is a Crypto
  // implementation. Also, find the complete implementation of crypto on IE11.
  var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                        (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports = function whatwgRNG() {
      getRandomValues(rnds8);
      return rnds8;
    };
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);

    module.exports = function mathRNG() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return rnds;
    };
  }
  });

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return ([bth[buf[i++]], bth[buf[i++]], 
  	bth[buf[i++]], bth[buf[i++]], '-',
  	bth[buf[i++]], bth[buf[i++]], '-',
  	bth[buf[i++]], bth[buf[i++]], '-',
  	bth[buf[i++]], bth[buf[i++]], '-',
  	bth[buf[i++]], bth[buf[i++]],
  	bth[buf[i++]], bth[buf[i++]],
  	bth[buf[i++]], bth[buf[i++]]]).join('');
  }

  var bytesToUuid_1 = bytesToUuid;

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  var _nodeId;
  var _clockseq;

  // Previous uuid creation time
  var _lastMSecs = 0;
  var _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
      var seedBytes = rngBrowser();
      if (node == null) {
        // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
          seedBytes[0] | 0x01,
          seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
        ];
      }
      if (clockseq == null) {
        // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
      }
    }

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }

    return buf ? buf : bytesToUuid_1(b);
  }

  var v1_1 = v1;

  var browserPonyfill = createCommonjsModule(function (module) {
  var __root__ = (function (root) {
  function F() { this.fetch = false; }
  F.prototype = root;
  return new F();
  })(typeof self !== 'undefined' ? self : commonjsGlobal);
  (function(self) {

  (function(self) {

    if (self.fetch) {
      return
    }

    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && (function() {
        try {
          new Blob();
          return true
        } catch(e) {
          return false
        }
      })(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    if (support.arrayBuffer) {
      var viewClasses = [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]'
      ];

      var isDataView = function(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj)
      };

      var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name')
      }
      return name.toLowerCase()
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value}
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator
        };
      }

      return iterator
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function(value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function(header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue+','+value : value;
    };

    Headers.prototype['delete'] = function(name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function(name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null
    };

    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name))
    };

    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function(callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function() {
      var items = [];
      this.forEach(function(value, name) { items.push(name); });
      return iteratorFor(items)
    };

    Headers.prototype.values = function() {
      var items = [];
      this.forEach(function(value) { items.push(value); });
      return iteratorFor(items)
    };

    Headers.prototype.entries = function() {
      var items = [];
      this.forEach(function(value, name) { items.push([name, value]); });
      return iteratorFor(items)
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'))
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      })
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }
      return chars.join('')
    }

    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0)
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function(body) {
        this._bodyInit = body;
        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer);
          // IE 10-11 can't handle a DataView body.
          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          throw new Error('unsupported BodyInit type')
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob)
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob')
          } else {
            return Promise.resolve(new Blob([this._bodyText]))
          }
        };

        this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
          } else {
            return this.blob().then(readBlobAsArrayBuffer)
          }
        };
      }

      this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      };

      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode)
        };
      }

      this.json = function() {
        return this.text().then(JSON.parse)
      };

      return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return (methods.indexOf(upcased) > -1) ? upcased : method
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read')
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests')
      }
      this._initBody(body);
    }

    Request.prototype.clone = function() {
      return new Request(this, { body: this._bodyInit })
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form
    }

    function parseHeaders(rawHeaders) {
      var headers = new Headers();
      // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2
      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
      return headers
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function() {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      })
    };

    Response.error = function() {
      var response = new Response(null, {status: 0, statusText: ''});
      response.type = 'error';
      return response
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function(url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code')
      }

      return new Response(null, {status: status, headers: {location: url}})
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function(input, init) {
      return new Promise(function(resolve, reject) {
        var request = new Request(input, init);
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function() {
          reject(new TypeError('Network request failed'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      })
    };
    self.fetch.polyfill = true;
  })(typeof self !== 'undefined' ? self : this);
  }).call(__root__, void(0));
  var fetch = __root__.fetch;
  var Response = fetch.Response = __root__.Response;
  var Request = fetch.Request = __root__.Request;
  var Headers = fetch.Headers = __root__.Headers;
  if (module.exports) {
  module.exports = fetch;
  }
  });

  var toString = {}.toString;

  var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var animationSpeedMs = 300;
  function getSupportedOptionsFromProps(props) {
    var _props$freeShippingMi = props.freeShippingMinimumPurchaseAmount,
        freeShippingMinimumPurchaseAmount = _props$freeShippingMi === void 0 ? -1 : _props$freeShippingMi,
        _props$validateEndpoi = props.validateEndpoint,
        validateEndpoint = _props$validateEndpoi === void 0 ? '/api/basket/validate' : _props$validateEndpoi,
        onEmpty = props.onEmpty,
        onAddToBasket = props.onAddToBasket,
        onRemoveFromBasket = props.onRemoveFromBasket,
        alwaysValidate = props.alwaysValidate;
    return {
      freeShippingMinimumPurchaseAmount: parseFloat(freeShippingMinimumPurchaseAmount),
      validateEndpoint: validateEndpoint,
      onEmpty: onEmpty,
      onAddToBasket: onAddToBasket,
      onRemoveFromBasket: onRemoveFromBasket,
      alwaysValidate: alwaysValidate
    };
  }
  var generateUniqueId = function iife() {
    var idIncremenet = 0;
    return function (name) {
      return "crystallize-".concat(name, "-").concat(idIncremenet++);
    };
  }();
  function parseBasketItem(_ref) {
    var basketId = _ref.basketId,
        item = _objectWithoutProperties(_ref, ["basketId"]);

    function ensureProperty(name, fallbackValue) {
      if (typeof item[name] === 'undefined') {
        /* eslint-disable */
        console.warn("Basket item validation error: missing property \"".concat(name, "\" for"), item);
        /* eslint-enable */

        return fallbackValue;
      }

      return item[name];
    }

    var sku = ensureProperty('sku', item.variation_sku);
    return _objectSpread({
      get basketId() {
        if (this.subscription) {
          return "".concat(item.sku, "-subscr-").concat(this.subscription.variationplan_id);
        }

        return item.sku;
      },

      name: ensureProperty('name', 'No name'),
      unit_price: ensureProperty('unit_price', item.price_ex_vat || 0),
      reference: sku,
      sku: sku,
      quantity: 1
    }, item);
  }
  function createBasketItem(_ref2) {
    var masterProduct = _ref2.masterProduct,
        variant = _ref2.variant,
        metadata = _ref2.metadata,
        subscription = _ref2.subscription;

    if (!masterProduct) {
      /* eslint-disable */
      console.error('Could not the create basket item without a master product!');
      /* eslint-enable */

      return {};
    }

    function getPriceWithVAT(price) {
      var vat = isNaN(masterProduct.vat) ? 0 : masterProduct.vat;
      return price * (1 + (vat || 0) / 100);
    }

    var basketItem = {
      masterId: masterProduct.id,
      name: masterProduct.name,
      sku: "".concat(masterProduct.sku, "-standard"),
      product_image: masterProduct.product_image,
      product_image_resized: masterProduct.product_image_resized,
      unit_price: getPriceWithVAT(masterProduct.price),
      attributes: [],
      metadata: metadata,
      subscription: subscription
    };

    if (!variant) {
      /* eslint-disable */
      console.warn('Creating basket item without a variant. Deferring to -standard');
      /* eslint-enable */
    } else {
      Object.assign(basketItem, {
        id: variant.id,
        sku: variant.variation_sku,
        attributes: variant.attributes
      });
      Object.assign(basketItem, {
        unit_price: getPriceWithVAT(variant.price_ex_vat)
      });

      if (variant.image) {
        Object.assign(basketItem, {
          product_image: isarray(variant.image) ? variant.image[0] : variant.image,
          product_image_resized: null
        });
      }
    }

    basketItem.reference = basketItem.sku;

    if (basketItem.subscription) {
      if (!basketItem.variationplan_id) {
        basketItem.variationplan_id = basketItem.subscription.variationplan_id;
      }
    }

    return basketItem;
  }

  var validateBasketRequest =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee(_ref3) {
      var validateEndpoint, basket, endpoint, l, response;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              validateEndpoint = _ref3.validateEndpoint, basket = _ref3.basket;
              endpoint = validateEndpoint;

              if (validateEndpoint.startsWith('/')) {
                l = window.location;
                endpoint = "".concat(l.protocol, "//").concat(l.host).concat(validateEndpoint);
              }

              _context.next = 5;
              return browserPonyfill(endpoint, {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(basket)
              });

            case 5:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function validateBasketRequest(_x) {
      return _ref4.apply(this, arguments);
    };
  }(); // Validate the basket if there is a coupon present.


  function validateBasket(_x2) {
    return _validateBasket.apply(this, arguments);
  }

  function _validateBasket() {
    _validateBasket = _asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee2(_ref5) {
      var validateEndpoint, items, coupon, discount, result, discountItem, itemsTransformed, totalAmount;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              validateEndpoint = _ref5.validateEndpoint, items = _ref5.items, coupon = _ref5.coupon;
              discount = null;

              if (!(items.length === 0)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", {
                coupon: coupon,
                items: [],
                totalAmount: 0,
                discount: discount
              });

            case 4:
              _context2.prev = 4;
              _context2.next = 7;
              return validateBasketRequest({
                validateEndpoint: validateEndpoint,
                basket: {
                  items: items.filter(function (item) {
                    return item.type !== 'discount' && item.type !== 'shipping';
                  }),
                  coupon: {
                    code: coupon
                  }
                }
              });

            case 7:
              result = _context2.sent;

              if (!(result.status === 'INVALID')) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", result);

            case 10:
              discountItem = result.find(function (item) {
                return item.type === 'discount';
              });

              if (discountItem) {
                discount = discountItem.unit_price;
              } // Transform the cart items so that they are validated by Klarna


              itemsTransformed = result.filter(function (item) {
                return item.type !== 'discount';
              }).map(function (i) {
                var item = _objectSpread({}, i);

                item.tax_rate = item.tax_rate || item.vat || 0;
                item.discount_rate = item.discount_rate || 0;
                delete item.vat;
                return i;
              }); // Calculate the total order value minus shipping and discount

              totalAmount = itemsTransformed.reduce(function (accumulator, item) {
                return accumulator + item.unit_price * item.quantity;
              }, 0);
              return _context2.abrupt("return", {
                coupon: coupon,
                items: itemsTransformed,
                totalAmount: totalAmount,
                discount: discount
              });

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](4);
              console.warn('@crystallize/react-basket', _context2.t0); // eslint-disable-line

              return _context2.abrupt("return", {
                error: _context2.t0
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 17]]);
    }));
    return _validateBasket.apply(this, arguments);
  }

  var localforage = createCommonjsModule(function (module, exports) {
  /*!
      localForage -- Offline Storage, Improved
      Version 1.7.2
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  */
  (function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
  (function (global){
  var Mutation = global.MutationObserver || global.WebKitMutationObserver;

  var scheduleDrain;

  {
    if (Mutation) {
      var called = 0;
      var observer = new Mutation(nextTick);
      var element = global.document.createTextNode('');
      observer.observe(element, {
        characterData: true
      });
      scheduleDrain = function () {
        element.data = (called = ++called % 2);
      };
    } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
      var channel = new global.MessageChannel();
      channel.port1.onmessage = nextTick;
      scheduleDrain = function () {
        channel.port2.postMessage(0);
      };
    } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
      scheduleDrain = function () {

        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
        var scriptEl = global.document.createElement('script');
        scriptEl.onreadystatechange = function () {
          nextTick();

          scriptEl.onreadystatechange = null;
          scriptEl.parentNode.removeChild(scriptEl);
          scriptEl = null;
        };
        global.document.documentElement.appendChild(scriptEl);
      };
    } else {
      scheduleDrain = function () {
        setTimeout(nextTick, 0);
      };
    }
  }

  var draining;
  var queue = [];
  //named nextTick for less confusing stack traces
  function nextTick() {
    draining = true;
    var i, oldQueue;
    var len = queue.length;
    while (len) {
      oldQueue = queue;
      queue = [];
      i = -1;
      while (++i < len) {
        oldQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }

  module.exports = immediate;
  function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
      scheduleDrain();
    }
  }

  }).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  },{}],2:[function(_dereq_,module,exports){
  var immediate = _dereq_(1);

  /* istanbul ignore next */
  function INTERNAL() {}

  var handlers = {};

  var REJECTED = ['REJECTED'];
  var FULFILLED = ['FULFILLED'];
  var PENDING = ['PENDING'];

  module.exports = Promise;

  function Promise(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('resolver must be a function');
    }
    this.state = PENDING;
    this.queue = [];
    this.outcome = void 0;
    if (resolver !== INTERNAL) {
      safelyResolveThenable(this, resolver);
    }
  }

  Promise.prototype["catch"] = function (onRejected) {
    return this.then(null, onRejected);
  };
  Promise.prototype.then = function (onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
      typeof onRejected !== 'function' && this.state === REJECTED) {
      return this;
    }
    var promise = new this.constructor(INTERNAL);
    if (this.state !== PENDING) {
      var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
      unwrap(promise, resolver, this.outcome);
    } else {
      this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
    }

    return promise;
  };
  function QueueItem(promise, onFulfilled, onRejected) {
    this.promise = promise;
    if (typeof onFulfilled === 'function') {
      this.onFulfilled = onFulfilled;
      this.callFulfilled = this.otherCallFulfilled;
    }
    if (typeof onRejected === 'function') {
      this.onRejected = onRejected;
      this.callRejected = this.otherCallRejected;
    }
  }
  QueueItem.prototype.callFulfilled = function (value) {
    handlers.resolve(this.promise, value);
  };
  QueueItem.prototype.otherCallFulfilled = function (value) {
    unwrap(this.promise, this.onFulfilled, value);
  };
  QueueItem.prototype.callRejected = function (value) {
    handlers.reject(this.promise, value);
  };
  QueueItem.prototype.otherCallRejected = function (value) {
    unwrap(this.promise, this.onRejected, value);
  };

  function unwrap(promise, func, value) {
    immediate(function () {
      var returnValue;
      try {
        returnValue = func(value);
      } catch (e) {
        return handlers.reject(promise, e);
      }
      if (returnValue === promise) {
        handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
      } else {
        handlers.resolve(promise, returnValue);
      }
    });
  }

  handlers.resolve = function (self, value) {
    var result = tryCatch(getThen, value);
    if (result.status === 'error') {
      return handlers.reject(self, result.value);
    }
    var thenable = result.value;

    if (thenable) {
      safelyResolveThenable(self, thenable);
    } else {
      self.state = FULFILLED;
      self.outcome = value;
      var i = -1;
      var len = self.queue.length;
      while (++i < len) {
        self.queue[i].callFulfilled(value);
      }
    }
    return self;
  };
  handlers.reject = function (self, error) {
    self.state = REJECTED;
    self.outcome = error;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callRejected(error);
    }
    return self;
  };

  function getThen(obj) {
    // Make sure we only access the accessor once as required by the spec
    var then = obj && obj.then;
    if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
      return function appyThen() {
        then.apply(obj, arguments);
      };
    }
  }

  function safelyResolveThenable(self, thenable) {
    // Either fulfill, reject or reject with error
    var called = false;
    function onError(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.reject(self, value);
    }

    function onSuccess(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.resolve(self, value);
    }

    function tryToUnwrap() {
      thenable(onSuccess, onError);
    }

    var result = tryCatch(tryToUnwrap);
    if (result.status === 'error') {
      onError(result.value);
    }
  }

  function tryCatch(func, value) {
    var out = {};
    try {
      out.value = func(value);
      out.status = 'success';
    } catch (e) {
      out.status = 'error';
      out.value = e;
    }
    return out;
  }

  Promise.resolve = resolve;
  function resolve(value) {
    if (value instanceof this) {
      return value;
    }
    return handlers.resolve(new this(INTERNAL), value);
  }

  Promise.reject = reject;
  function reject(reason) {
    var promise = new this(INTERNAL);
    return handlers.reject(promise, reason);
  }

  Promise.all = all;
  function all(iterable) {
    var self = this;
    if (Object.prototype.toString.call(iterable) !== '[object Array]') {
      return this.reject(new TypeError('must be an array'));
    }

    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }

    var values = new Array(len);
    var resolved = 0;
    var i = -1;
    var promise = new this(INTERNAL);

    while (++i < len) {
      allResolver(iterable[i], i);
    }
    return promise;
    function allResolver(value, i) {
      self.resolve(value).then(resolveFromAll, function (error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
      function resolveFromAll(outValue) {
        values[i] = outValue;
        if (++resolved === len && !called) {
          called = true;
          handlers.resolve(promise, values);
        }
      }
    }
  }

  Promise.race = race;
  function race(iterable) {
    var self = this;
    if (Object.prototype.toString.call(iterable) !== '[object Array]') {
      return this.reject(new TypeError('must be an array'));
    }

    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }

    var i = -1;
    var promise = new this(INTERNAL);

    while (++i < len) {
      resolver(iterable[i]);
    }
    return promise;
    function resolver(value) {
      self.resolve(value).then(function (response) {
        if (!called) {
          called = true;
          handlers.resolve(promise, response);
        }
      }, function (error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
    }
  }

  },{"1":1}],3:[function(_dereq_,module,exports){
  (function (global){
  if (typeof global.Promise !== 'function') {
    global.Promise = _dereq_(2);
  }

  }).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  },{"2":2}],4:[function(_dereq_,module,exports){

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function getIDB() {
      /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
      try {
          if (typeof indexedDB !== 'undefined') {
              return indexedDB;
          }
          if (typeof webkitIndexedDB !== 'undefined') {
              return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== 'undefined') {
              return mozIndexedDB;
          }
          if (typeof OIndexedDB !== 'undefined') {
              return OIndexedDB;
          }
          if (typeof msIndexedDB !== 'undefined') {
              return msIndexedDB;
          }
      } catch (e) {
          return;
      }
  }

  var idb = getIDB();

  function isIndexedDBValid() {
      try {
          // Initialize IndexedDB; fall back to vendor-prefixed versions
          // if needed.
          if (!idb) {
              return false;
          }
          // We mimic PouchDB here;
          //
          // We test for openDatabase because IE Mobile identifies itself
          // as Safari. Oh the lulz...
          var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

          var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

          // Safari <10.1 does not meet our requirements for IDB support (#5572)
          // since Safari 10.1 shipped with fetch, we can use that to detect it
          return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
          // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange !== 'undefined';
      } catch (e) {
          return false;
      }
  }

  // Abstracts constructing a Blob object, so it also works in older
  // browsers that don't support the native Blob constructor. (i.e.
  // old QtWebKit versions, at least).
  // Abstracts constructing a Blob object, so it also works in older
  // browsers that don't support the native Blob constructor. (i.e.
  // old QtWebKit versions, at least).
  function createBlob(parts, properties) {
      /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
      parts = parts || [];
      properties = properties || {};
      try {
          return new Blob(parts, properties);
      } catch (e) {
          if (e.name !== 'TypeError') {
              throw e;
          }
          var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
              builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
      }
  }

  // This is CommonJS because lie is an external dependency, so Rollup
  // can just ignore it.
  if (typeof Promise === 'undefined') {
      // In the "nopromises" build this will just throw if you don't have
      // a global promise object, but it would throw anyway later.
      _dereq_(3);
  }
  var Promise$1 = Promise;

  function executeCallback(promise, callback) {
      if (callback) {
          promise.then(function (result) {
              callback(null, result);
          }, function (error) {
              callback(error);
          });
      }
  }

  function executeTwoCallbacks(promise, callback, errorCallback) {
      if (typeof callback === 'function') {
          promise.then(callback);
      }

      if (typeof errorCallback === 'function') {
          promise["catch"](errorCallback);
      }
  }

  function normalizeKey(key) {
      // Cast the key to a string, as that's all we can set as a key.
      if (typeof key !== 'string') {
          console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
      }

      return key;
  }

  function getCallback() {
      if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
          return arguments[arguments.length - 1];
      }
  }

  // Some code originally from async_storage.js in
  // [Gaia](https://github.com/mozilla-b2g/gaia).

  var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
  var supportsBlobs = void 0;
  var dbContexts = {};
  var toString = Object.prototype.toString;

  // Transaction Modes
  var READ_ONLY = 'readonly';
  var READ_WRITE = 'readwrite';

  // Transform a binary string to an array buffer, because otherwise
  // weird stuff happens when you try to work with the binary string directly.
  // It is known.
  // From http://stackoverflow.com/questions/14967647/ (continues on next line)
  // encode-decode-image-with-base64-breaks-image (2013-04-21)
  function _binStringToArrayBuffer(bin) {
      var length = bin.length;
      var buf = new ArrayBuffer(length);
      var arr = new Uint8Array(buf);
      for (var i = 0; i < length; i++) {
          arr[i] = bin.charCodeAt(i);
      }
      return buf;
  }

  //
  // Blobs are not supported in all versions of IndexedDB, notably
  // Chrome <37 and Android <5. In those versions, storing a blob will throw.
  //
  // Various other blob bugs exist in Chrome v37-42 (inclusive).
  // Detecting them is expensive and confusing to users, and Chrome 37-42
  // is at very low usage worldwide, so we do a hacky userAgent check instead.
  //
  // content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
  // 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
  // FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
  //
  // Code borrowed from PouchDB. See:
  // https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
  //
  function _checkBlobSupportWithoutCaching(idb) {
      return new Promise$1(function (resolve) {
          var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob(['']);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

          txn.onabort = function (e) {
              // If the transaction aborts now its due to not being able to
              // write to the database, likely due to the disk being full
              e.preventDefault();
              e.stopPropagation();
              resolve(false);
          };

          txn.oncomplete = function () {
              var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
              var matchedEdge = navigator.userAgent.match(/Edge\//);
              // MS Edge pretends to be Chrome 42:
              // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
              resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
      })["catch"](function () {
          return false; // error, so assume unsupported
      });
  }

  function _checkBlobSupport(idb) {
      if (typeof supportsBlobs === 'boolean') {
          return Promise$1.resolve(supportsBlobs);
      }
      return _checkBlobSupportWithoutCaching(idb).then(function (value) {
          supportsBlobs = value;
          return supportsBlobs;
      });
  }

  function _deferReadiness(dbInfo) {
      var dbContext = dbContexts[dbInfo.name];

      // Create a deferred object representing the current database operation.
      var deferredOperation = {};

      deferredOperation.promise = new Promise$1(function (resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
      });

      // Enqueue the deferred operation.
      dbContext.deferredOperations.push(deferredOperation);

      // Chain its promise to the database readiness.
      if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
      } else {
          dbContext.dbReady = dbContext.dbReady.then(function () {
              return deferredOperation.promise;
          });
      }
  }

  function _advanceReadiness(dbInfo) {
      var dbContext = dbContexts[dbInfo.name];

      // Dequeue a deferred operation.
      var deferredOperation = dbContext.deferredOperations.pop();

      // Resolve its promise (which is part of the database readiness
      // chain of promises).
      if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
      }
  }

  function _rejectReadiness(dbInfo, err) {
      var dbContext = dbContexts[dbInfo.name];

      // Dequeue a deferred operation.
      var deferredOperation = dbContext.deferredOperations.pop();

      // Reject its promise (which is part of the database readiness
      // chain of promises).
      if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
      }
  }

  function _getConnection(dbInfo, upgradeNeeded) {
      return new Promise$1(function (resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

          if (dbInfo.db) {
              if (upgradeNeeded) {
                  _deferReadiness(dbInfo);
                  dbInfo.db.close();
              } else {
                  return resolve(dbInfo.db);
              }
          }

          var dbArgs = [dbInfo.name];

          if (upgradeNeeded) {
              dbArgs.push(dbInfo.version);
          }

          var openreq = idb.open.apply(idb, dbArgs);

          if (upgradeNeeded) {
              openreq.onupgradeneeded = function (e) {
                  var db = openreq.result;
                  try {
                      db.createObjectStore(dbInfo.storeName);
                      if (e.oldVersion <= 1) {
                          // Added when support for blob shims was added
                          db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                      }
                  } catch (ex) {
                      if (ex.name === 'ConstraintError') {
                          console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                      } else {
                          throw ex;
                      }
                  }
              };
          }

          openreq.onerror = function (e) {
              e.preventDefault();
              reject(openreq.error);
          };

          openreq.onsuccess = function () {
              resolve(openreq.result);
              _advanceReadiness(dbInfo);
          };
      });
  }

  function _getOriginalConnection(dbInfo) {
      return _getConnection(dbInfo, false);
  }

  function _getUpgradedConnection(dbInfo) {
      return _getConnection(dbInfo, true);
  }

  function _isUpgradeNeeded(dbInfo, defaultVersion) {
      if (!dbInfo.db) {
          return true;
      }

      var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
      var isDowngrade = dbInfo.version < dbInfo.db.version;
      var isUpgrade = dbInfo.version > dbInfo.db.version;

      if (isDowngrade) {
          // If the version is not the default one
          // then warn for impossible downgrade.
          if (dbInfo.version !== defaultVersion) {
              console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
          }
          // Align the versions to prevent errors.
          dbInfo.version = dbInfo.db.version;
      }

      if (isUpgrade || isNewStore) {
          // If the store is new then increment the version (if needed).
          // This will trigger an "upgradeneeded" event which is required
          // for creating a store.
          if (isNewStore) {
              var incVersion = dbInfo.db.version + 1;
              if (incVersion > dbInfo.version) {
                  dbInfo.version = incVersion;
              }
          }

          return true;
      }

      return false;
  }

  // encode a blob for indexeddb engines that don't support blobs
  function _encodeBlob(blob) {
      return new Promise$1(function (resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function (e) {
              var base64 = btoa(e.target.result || '');
              resolve({
                  __local_forage_encoded_blob: true,
                  data: base64,
                  type: blob.type
              });
          };
          reader.readAsBinaryString(blob);
      });
  }

  // decode an encoded blob
  function _decodeBlob(encodedBlob) {
      var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
      return createBlob([arrayBuff], { type: encodedBlob.type });
  }

  // is this one of our fancy encoded blobs?
  function _isEncodedBlob(value) {
      return value && value.__local_forage_encoded_blob;
  }

  // Specialize the default `ready()` function by making it dependent
  // on the current database operations. Thus, the driver will be actually
  // ready when it's been initialized (default) *and* there are no pending
  // operations on the database (initiated by some other instances).
  function _fullyReady(callback) {
      var self = this;

      var promise = self._initReady().then(function () {
          var dbContext = dbContexts[self._dbInfo.name];

          if (dbContext && dbContext.dbReady) {
              return dbContext.dbReady;
          }
      });

      executeTwoCallbacks(promise, callback, callback);
      return promise;
  }

  // Try to establish a new db connection to replace the
  // current one which is broken (i.e. experiencing
  // InvalidStateError while creating a transaction).
  function _tryReconnect(dbInfo) {
      _deferReadiness(dbInfo);

      var dbContext = dbContexts[dbInfo.name];
      var forages = dbContext.forages;

      for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];
          if (forage._dbInfo.db) {
              forage._dbInfo.db.close();
              forage._dbInfo.db = null;
          }
      }
      dbInfo.db = null;

      return _getOriginalConnection(dbInfo).then(function (db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
              // Reopen the database for upgrading.
              return _getUpgradedConnection(dbInfo);
          }
          return db;
      }).then(function (db) {
          // store the latest db reference
          // in case the db was upgraded
          dbInfo.db = dbContext.db = db;
          for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
          }
      })["catch"](function (err) {
          _rejectReadiness(dbInfo, err);
          throw err;
      });
  }

  // FF doesn't like Promises (micro-tasks) and IDDB store operations,
  // so we have to do it with callbacks
  function createTransaction(dbInfo, mode, callback, retries) {
      if (retries === undefined) {
          retries = 1;
      }

      try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
      } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
              return Promise$1.resolve().then(function () {
                  if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                      // increase the db version, to create the new ObjectStore
                      if (dbInfo.db) {
                          dbInfo.version = dbInfo.db.version + 1;
                      }
                      // Reopen the database for upgrading.
                      return _getUpgradedConnection(dbInfo);
                  }
              }).then(function () {
                  return _tryReconnect(dbInfo).then(function () {
                      createTransaction(dbInfo, mode, callback, retries - 1);
                  });
              })["catch"](callback);
          }

          callback(err);
      }
  }

  function createDbContext() {
      return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
      };
  }

  // Open the IndexedDB database (automatically creates one if one didn't
  // previously exist), using any options set in the config.
  function _initStorage(options) {
      var self = this;
      var dbInfo = {
          db: null
      };

      if (options) {
          for (var i in options) {
              dbInfo[i] = options[i];
          }
      }

      // Get the current context of the database;
      var dbContext = dbContexts[dbInfo.name];

      // ...or create a new context.
      if (!dbContext) {
          dbContext = createDbContext();
          // Register the new context in the global container.
          dbContexts[dbInfo.name] = dbContext;
      }

      // Register itself as a running localForage in the current context.
      dbContext.forages.push(self);

      // Replace the default `ready()` function with the specialized one.
      if (!self._initReady) {
          self._initReady = self.ready;
          self.ready = _fullyReady;
      }

      // Create an array of initialization states of the related localForages.
      var initPromises = [];

      function ignoreErrors() {
          // Don't handle errors here,
          // just makes sure related localForages aren't pending.
          return Promise$1.resolve();
      }

      for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];
          if (forage !== self) {
              // Don't wait for itself...
              initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
      }

      // Take a snapshot of the related localForages.
      var forages = dbContext.forages.slice(0);

      // Initialize the connection process only when
      // all the related localForages aren't pending.
      return Promise$1.all(initPromises).then(function () {
          dbInfo.db = dbContext.db;
          // Get the connection or open a new one without upgrade.
          return _getOriginalConnection(dbInfo);
      }).then(function (db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
              // Reopen the database for upgrading.
              return _getUpgradedConnection(dbInfo);
          }
          return db;
      }).then(function (db) {
          dbInfo.db = dbContext.db = db;
          self._dbInfo = dbInfo;
          // Share the final connection amongst related localForages.
          for (var k = 0; k < forages.length; k++) {
              var forage = forages[k];
              if (forage !== self) {
                  // Self is already up-to-date.
                  forage._dbInfo.db = dbInfo.db;
                  forage._dbInfo.version = dbInfo.version;
              }
          }
      });
  }

  function getItem(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.get(key);

                      req.onsuccess = function () {
                          var value = req.result;
                          if (value === undefined) {
                              value = null;
                          }
                          if (_isEncodedBlob(value)) {
                              value = _decodeBlob(value);
                          }
                          resolve(value);
                      };

                      req.onerror = function () {
                          reject(req.error);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Iterate over all items stored in database.
  function iterate(iterator, callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.openCursor();
                      var iterationNumber = 1;

                      req.onsuccess = function () {
                          var cursor = req.result;

                          if (cursor) {
                              var value = cursor.value;
                              if (_isEncodedBlob(value)) {
                                  value = _decodeBlob(value);
                              }
                              var result = iterator(value, cursor.key, iterationNumber++);

                              // when the iterator callback retuns any
                              // (non-`undefined`) value, then we stop
                              // the iteration immediately
                              if (result !== void 0) {
                                  resolve(result);
                              } else {
                                  cursor["continue"]();
                              }
                          } else {
                              resolve();
                          }
                      };

                      req.onerror = function () {
                          reject(req.error);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);

      return promise;
  }

  function setItem(key, value, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          var dbInfo;
          self.ready().then(function () {
              dbInfo = self._dbInfo;
              if (toString.call(value) === '[object Blob]') {
                  return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                      if (blobSupport) {
                          return value;
                      }
                      return _encodeBlob(value);
                  });
              }
              return value;
          }).then(function (value) {
              createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);

                      // The reason we don't _save_ null is because IE 10 does
                      // not support saving the `null` type in IndexedDB. How
                      // ironic, given the bug below!
                      // See: https://github.com/mozilla/localForage/issues/161
                      if (value === null) {
                          value = undefined;
                      }

                      var req = store.put(value, key);

                      transaction.oncomplete = function () {
                          // Cast to undefined so the value passed to
                          // callback/promise is the same as what one would get out
                          // of `getItem()` later. This leads to some weirdness
                          // (setItem('foo', undefined) will return `null`), but
                          // it's not my fault localStorage is our baseline and that
                          // it's weird.
                          if (value === undefined) {
                              value = null;
                          }

                          resolve(value);
                      };
                      transaction.onabort = transaction.onerror = function () {
                          var err = req.error ? req.error : req.transaction.error;
                          reject(err);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function removeItem(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      // We use a Grunt task to make this safe for IE and some
                      // versions of Android (including those used by Cordova).
                      // Normally IE won't like `.delete()` and will insist on
                      // using `['delete']()`, but we have a build step that
                      // fixes this for us now.
                      var req = store["delete"](key);
                      transaction.oncomplete = function () {
                          resolve();
                      };

                      transaction.onerror = function () {
                          reject(req.error);
                      };

                      // The request will be also be aborted if we've exceeded our storage
                      // space.
                      transaction.onabort = function () {
                          var err = req.error ? req.error : req.transaction.error;
                          reject(err);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function clear(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.clear();

                      transaction.oncomplete = function () {
                          resolve();
                      };

                      transaction.onabort = transaction.onerror = function () {
                          var err = req.error ? req.error : req.transaction.error;
                          reject(err);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function length(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.count();

                      req.onsuccess = function () {
                          resolve(req.result);
                      };

                      req.onerror = function () {
                          reject(req.error);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function key(n, callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          if (n < 0) {
              resolve(null);

              return;
          }

          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var advanced = false;
                      var req = store.openCursor();

                      req.onsuccess = function () {
                          var cursor = req.result;
                          if (!cursor) {
                              // this means there weren't enough keys
                              resolve(null);

                              return;
                          }

                          if (n === 0) {
                              // We have the first key, return it if that's what they
                              // wanted.
                              resolve(cursor.key);
                          } else {
                              if (!advanced) {
                                  // Otherwise, ask the cursor to skip ahead n
                                  // records.
                                  advanced = true;
                                  cursor.advance(n);
                              } else {
                                  // When we get here, we've got the nth key.
                                  resolve(cursor.key);
                              }
                          }
                      };

                      req.onerror = function () {
                          reject(req.error);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function keys(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                  if (err) {
                      return reject(err);
                  }

                  try {
                      var store = transaction.objectStore(self._dbInfo.storeName);
                      var req = store.openCursor();
                      var keys = [];

                      req.onsuccess = function () {
                          var cursor = req.result;

                          if (!cursor) {
                              resolve(keys);
                              return;
                          }

                          keys.push(cursor.key);
                          cursor["continue"]();
                      };

                      req.onerror = function () {
                          reject(req.error);
                      };
                  } catch (e) {
                      reject(e);
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function dropInstance(options, callback) {
      callback = getCallback.apply(this, arguments);

      var currentConfig = this.config();
      options = typeof options !== 'function' && options || {};
      if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
      }

      var self = this;
      var promise;
      if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
      } else {
          var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

          var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              dbContext.db = db;
              for (var i = 0; i < forages.length; i++) {
                  forages[i]._dbInfo.db = db;
              }
              return db;
          });

          if (!options.storeName) {
              promise = dbPromise.then(function (db) {
                  _deferReadiness(options);

                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;

                  db.close();
                  for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                  }

                  var dropDBPromise = new Promise$1(function (resolve, reject) {
                      var req = idb.deleteDatabase(options.name);

                      req.onerror = req.onblocked = function (err) {
                          var db = req.result;
                          if (db) {
                              db.close();
                          }
                          reject(err);
                      };

                      req.onsuccess = function () {
                          var db = req.result;
                          if (db) {
                              db.close();
                          }
                          resolve(db);
                      };
                  });

                  return dropDBPromise.then(function (db) {
                      dbContext.db = db;
                      for (var i = 0; i < forages.length; i++) {
                          var _forage = forages[i];
                          _advanceReadiness(_forage._dbInfo);
                      }
                  })["catch"](function (err) {
                      (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                      throw err;
                  });
              });
          } else {
              promise = dbPromise.then(function (db) {
                  if (!db.objectStoreNames.contains(options.storeName)) {
                      return;
                  }

                  var newVersion = db.version + 1;

                  _deferReadiness(options);

                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;

                  db.close();
                  for (var i = 0; i < forages.length; i++) {
                      var forage = forages[i];
                      forage._dbInfo.db = null;
                      forage._dbInfo.version = newVersion;
                  }

                  var dropObjectPromise = new Promise$1(function (resolve, reject) {
                      var req = idb.open(options.name, newVersion);

                      req.onerror = function (err) {
                          var db = req.result;
                          db.close();
                          reject(err);
                      };

                      req.onupgradeneeded = function () {
                          var db = req.result;
                          db.deleteObjectStore(options.storeName);
                      };

                      req.onsuccess = function () {
                          var db = req.result;
                          db.close();
                          resolve(db);
                      };
                  });

                  return dropObjectPromise.then(function (db) {
                      dbContext.db = db;
                      for (var j = 0; j < forages.length; j++) {
                          var _forage2 = forages[j];
                          _forage2._dbInfo.db = db;
                          _advanceReadiness(_forage2._dbInfo);
                      }
                  })["catch"](function (err) {
                      (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                      throw err;
                  });
              });
          }
      }

      executeCallback(promise, callback);
      return promise;
  }

  var asyncStorage = {
      _driver: 'asyncStorage',
      _initStorage: _initStorage,
      _support: isIndexedDBValid(),
      iterate: iterate,
      getItem: getItem,
      setItem: setItem,
      removeItem: removeItem,
      clear: clear,
      length: length,
      key: key,
      keys: keys,
      dropInstance: dropInstance
  };

  function isWebSQLValid() {
      return typeof openDatabase === 'function';
  }

  // Sadly, the best way to save binary data in WebSQL/localStorage is serializing
  // it to Base64, so this is how we store it to prevent very strange errors with less
  // verbose ways of binary <-> string data storage.
  var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var BLOB_TYPE_PREFIX = '~~local_forage_type~';
  var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

  var SERIALIZED_MARKER = '__lfsc__:';
  var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

  // OMG the serializations!
  var TYPE_ARRAYBUFFER = 'arbf';
  var TYPE_BLOB = 'blob';
  var TYPE_INT8ARRAY = 'si08';
  var TYPE_UINT8ARRAY = 'ui08';
  var TYPE_UINT8CLAMPEDARRAY = 'uic8';
  var TYPE_INT16ARRAY = 'si16';
  var TYPE_INT32ARRAY = 'si32';
  var TYPE_UINT16ARRAY = 'ur16';
  var TYPE_UINT32ARRAY = 'ui32';
  var TYPE_FLOAT32ARRAY = 'fl32';
  var TYPE_FLOAT64ARRAY = 'fl64';
  var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

  var toString$1 = Object.prototype.toString;

  function stringToBuffer(serializedString) {
      // Fill the string into a ArrayBuffer.
      var bufferLength = serializedString.length * 0.75;
      var len = serializedString.length;
      var i;
      var p = 0;
      var encoded1, encoded2, encoded3, encoded4;

      if (serializedString[serializedString.length - 1] === '=') {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === '=') {
              bufferLength--;
          }
      }

      var buffer = new ArrayBuffer(bufferLength);
      var bytes = new Uint8Array(buffer);

      for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

          /*jslint bitwise: true */
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
      return buffer;
  }

  // Converts a buffer to a string to store, serialized, in the backend
  // storage library.
  function bufferToString(buffer) {
      // base64-arraybuffer
      var bytes = new Uint8Array(buffer);
      var base64String = '';
      var i;

      for (i = 0; i < bytes.length; i += 3) {
          /*jslint bitwise: true */
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
      }

      if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + '=';
      } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + '==';
      }

      return base64String;
  }

  // Serialize a value, afterwards executing a callback (which usually
  // instructs the `setItem()` callback/promise to be executed). This is how
  // we store binary data with localStorage.
  function serialize(value, callback) {
      var valueType = '';
      if (value) {
          valueType = toString$1.call(value);
      }

      // Cannot use `value instanceof ArrayBuffer` or such here, as these
      // checks fail when running the tests using casper.js...
      //
      // TODO: See why those tests fail and use a better solution.
      if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
          // Convert binary arrays to a string and prefix the string with
          // a special marker.
          var buffer;
          var marker = SERIALIZED_MARKER;

          if (value instanceof ArrayBuffer) {
              buffer = value;
              marker += TYPE_ARRAYBUFFER;
          } else {
              buffer = value.buffer;

              if (valueType === '[object Int8Array]') {
                  marker += TYPE_INT8ARRAY;
              } else if (valueType === '[object Uint8Array]') {
                  marker += TYPE_UINT8ARRAY;
              } else if (valueType === '[object Uint8ClampedArray]') {
                  marker += TYPE_UINT8CLAMPEDARRAY;
              } else if (valueType === '[object Int16Array]') {
                  marker += TYPE_INT16ARRAY;
              } else if (valueType === '[object Uint16Array]') {
                  marker += TYPE_UINT16ARRAY;
              } else if (valueType === '[object Int32Array]') {
                  marker += TYPE_INT32ARRAY;
              } else if (valueType === '[object Uint32Array]') {
                  marker += TYPE_UINT32ARRAY;
              } else if (valueType === '[object Float32Array]') {
                  marker += TYPE_FLOAT32ARRAY;
              } else if (valueType === '[object Float64Array]') {
                  marker += TYPE_FLOAT64ARRAY;
              } else {
                  callback(new Error('Failed to get type for BinaryArray'));
              }
          }

          callback(marker + bufferToString(buffer));
      } else if (valueType === '[object Blob]') {
          // Conver the blob to a binaryArray and then to a string.
          var fileReader = new FileReader();

          fileReader.onload = function () {
              // Backwards-compatible prefix for the blob type.
              var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

              callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };

          fileReader.readAsArrayBuffer(value);
      } else {
          try {
              callback(JSON.stringify(value));
          } catch (e) {
              console.error("Couldn't convert value into a JSON string: ", value);

              callback(null, e);
          }
      }
  }

  // Deserialize data we've inserted into a value column/field. We place
  // special markers into our strings to mark them as encoded; this isn't
  // as nice as a meta field, but it's the only sane thing we can do whilst
  // keeping localStorage support intact.
  //
  // Oftentimes this will just deserialize JSON content, but if we have a
  // special marker (SERIALIZED_MARKER, defined above), we will extract
  // some kind of arraybuffer/binary data/typed array out of the string.
  function deserialize(value) {
      // If we haven't marked this string as being specially serialized (i.e.
      // something other than serialized JSON), we can just return it and be
      // done with it.
      if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
      }

      // The following code deals with deserializing some kind of Blob or
      // TypedArray. First we separate out the type of data we're dealing
      // with from the data itself.
      var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
      var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

      var blobType;
      // Backwards-compatible blob type serialization strategy.
      // DBs created with older versions of localForage will simply not have the blob type.
      if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
      }
      var buffer = stringToBuffer(serializedString);

      // Return the right type based on the code/type set during
      // serialization.
      switch (type) {
          case TYPE_ARRAYBUFFER:
              return buffer;
          case TYPE_BLOB:
              return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
              return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
              return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
              return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
              return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
              return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
              return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
              return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
              return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
              return new Float64Array(buffer);
          default:
              throw new Error('Unkown type: ' + type);
      }
  }

  var localforageSerializer = {
      serialize: serialize,
      deserialize: deserialize,
      stringToBuffer: stringToBuffer,
      bufferToString: bufferToString
  };

  /*
   * Includes code from:
   *
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */

  function createDbTable(t, dbInfo, callback, errorCallback) {
      t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
  }

  // Open the WebSQL database (automatically creates one if one didn't
  // previously exist), using any options set in the config.
  function _initStorage$1(options) {
      var self = this;
      var dbInfo = {
          db: null
      };

      if (options) {
          for (var i in options) {
              dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
          }
      }

      var dbInfoPromise = new Promise$1(function (resolve, reject) {
          // Open the database; the openDatabase API will automatically
          // create it for us if it doesn't exist.
          try {
              dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
              return reject(e);
          }

          // Create our key/value table if it doesn't exist.
          dbInfo.db.transaction(function (t) {
              createDbTable(t, dbInfo, function () {
                  self._dbInfo = dbInfo;
                  resolve();
              }, function (t, error) {
                  reject(error);
              });
          }, reject);
      });

      dbInfo.serializer = localforageSerializer;
      return dbInfoPromise;
  }

  function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
      t.executeSql(sqlStatement, args, callback, function (t, error) {
          if (error.code === error.SYNTAX_ERR) {
              t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                  if (!results.rows.length) {
                      // if the table is missing (was deleted)
                      // re-create it table and retry
                      createDbTable(t, dbInfo, function () {
                          t.executeSql(sqlStatement, args, callback, errorCallback);
                      }, errorCallback);
                  } else {
                      errorCallback(t, error);
                  }
              }, errorCallback);
          } else {
              errorCallback(t, error);
          }
      }, errorCallback);
  }

  function getItem$1(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).value : null;

                      // Check to see if this is serialized content we need to
                      // unpack.
                      if (result) {
                          result = dbInfo.serializer.deserialize(result);
                      }

                      resolve(result);
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function iterate$1(iterator, callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;

              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                      var rows = results.rows;
                      var length = rows.length;

                      for (var i = 0; i < length; i++) {
                          var item = rows.item(i);
                          var result = item.value;

                          // Check to see if this is serialized content
                          // we need to unpack.
                          if (result) {
                              result = dbInfo.serializer.deserialize(result);
                          }

                          result = iterator(result, item.key, i + 1);

                          // void(0) prevents problems with redefinition
                          // of `undefined`.
                          if (result !== void 0) {
                              resolve(result);
                              return;
                          }
                      }

                      resolve();
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function _setItem(key, value, callback, retriesLeft) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              // The localStorage API doesn't return undefined values in an
              // "expected" way, so undefined is always cast to null in all
              // drivers. See: https://github.com/mozilla/localForage/pull/42
              if (value === undefined) {
                  value = null;
              }

              // Save the original value to pass to the callback.
              var originalValue = value;

              var dbInfo = self._dbInfo;
              dbInfo.serializer.serialize(value, function (value, error) {
                  if (error) {
                      reject(error);
                  } else {
                      dbInfo.db.transaction(function (t) {
                          tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                              resolve(originalValue);
                          }, function (t, error) {
                              reject(error);
                          });
                      }, function (sqlError) {
                          // The transaction failed; check
                          // to see if it's a quota error.
                          if (sqlError.code === sqlError.QUOTA_ERR) {
                              // We reject the callback outright for now, but
                              // it's worth trying to re-run the transaction.
                              // Even if the user accepts the prompt to use
                              // more storage on Safari, this error will
                              // be called.
                              //
                              // Try to re-run the transaction.
                              if (retriesLeft > 0) {
                                  resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                  return;
                              }
                              reject(sqlError);
                          }
                      });
                  }
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function setItem$1(key, value, callback) {
      return _setItem.apply(this, [key, value, callback, 1]);
  }

  function removeItem$1(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                      resolve();
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Deletes every item in the table.
  // TODO: Find out if this resets the AUTO_INCREMENT number.
  function clear$1(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                      resolve();
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Does a simple `COUNT(key)` to get the number of items stored in
  // localForage.
  function length$1(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  // Ahhh, SQL makes this one soooooo easy.
                  tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                      var result = results.rows.item(0).c;
                      resolve(result);
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Return the key located at key index X; essentially gets the key from a
  // `WHERE id = ?`. This is the most efficient way I can think to implement
  // this rarely-used (in my experience) part of the API, but it can seem
  // inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
  // the ID of each key will change every time it's updated. Perhaps a stored
  // procedure for the `setItem()` SQL would solve this problem?
  // TODO: Don't change ID on `setItem()`.
  function key$1(n, callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).key : null;
                      resolve(result);
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  function keys$1(callback) {
      var self = this;

      var promise = new Promise$1(function (resolve, reject) {
          self.ready().then(function () {
              var dbInfo = self._dbInfo;
              dbInfo.db.transaction(function (t) {
                  tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                      var keys = [];

                      for (var i = 0; i < results.rows.length; i++) {
                          keys.push(results.rows.item(i).key);
                      }

                      resolve(keys);
                  }, function (t, error) {
                      reject(error);
                  });
              });
          })["catch"](reject);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // https://www.w3.org/TR/webdatabase/#databases
  // > There is no way to enumerate or delete the databases available for an origin from this API.
  function getAllStoreNames(db) {
      return new Promise$1(function (resolve, reject) {
          db.transaction(function (t) {
              t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                  var storeNames = [];

                  for (var i = 0; i < results.rows.length; i++) {
                      storeNames.push(results.rows.item(i).name);
                  }

                  resolve({
                      db: db,
                      storeNames: storeNames
                  });
              }, function (t, error) {
                  reject(error);
              });
          }, function (sqlError) {
              reject(sqlError);
          });
      });
  }

  function dropInstance$1(options, callback) {
      callback = getCallback.apply(this, arguments);

      var currentConfig = this.config();
      options = typeof options !== 'function' && options || {};
      if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
      }

      var self = this;
      var promise;
      if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
      } else {
          promise = new Promise$1(function (resolve) {
              var db;
              if (options.name === currentConfig.name) {
                  // use the db reference of the current instance
                  db = self._dbInfo.db;
              } else {
                  db = openDatabase(options.name, '', '', 0);
              }

              if (!options.storeName) {
                  // drop all database tables
                  resolve(getAllStoreNames(db));
              } else {
                  resolve({
                      db: db,
                      storeNames: [options.storeName]
                  });
              }
          }).then(function (operationInfo) {
              return new Promise$1(function (resolve, reject) {
                  operationInfo.db.transaction(function (t) {
                      function dropTable(storeName) {
                          return new Promise$1(function (resolve, reject) {
                              t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                  resolve();
                              }, function (t, error) {
                                  reject(error);
                              });
                          });
                      }

                      var operations = [];
                      for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                          operations.push(dropTable(operationInfo.storeNames[i]));
                      }

                      Promise$1.all(operations).then(function () {
                          resolve();
                      })["catch"](function (e) {
                          reject(e);
                      });
                  }, function (sqlError) {
                      reject(sqlError);
                  });
              });
          });
      }

      executeCallback(promise, callback);
      return promise;
  }

  var webSQLStorage = {
      _driver: 'webSQLStorage',
      _initStorage: _initStorage$1,
      _support: isWebSQLValid(),
      iterate: iterate$1,
      getItem: getItem$1,
      setItem: setItem$1,
      removeItem: removeItem$1,
      clear: clear$1,
      length: length$1,
      key: key$1,
      keys: keys$1,
      dropInstance: dropInstance$1
  };

  function isLocalStorageValid() {
      try {
          return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
          // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
      } catch (e) {
          return false;
      }
  }

  function _getKeyPrefix(options, defaultConfig) {
      var keyPrefix = options.name + '/';

      if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + '/';
      }
      return keyPrefix;
  }

  // Check if localStorage throws when saving an item
  function checkIfLocalStorageThrows() {
      var localStorageTestKey = '_localforage_support_test';

      try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);

          return false;
      } catch (e) {
          return true;
      }
  }

  // Check if localStorage is usable and allows to save an item
  // This method checks if localStorage is usable in Safari Private Browsing
  // mode, or in any other case where the available quota for localStorage
  // is 0 and there wasn't any saved items yet.
  function _isLocalStorageUsable() {
      return !checkIfLocalStorageThrows() || localStorage.length > 0;
  }

  // Config the localStorage backend, using options set in the config.
  function _initStorage$2(options) {
      var self = this;
      var dbInfo = {};
      if (options) {
          for (var i in options) {
              dbInfo[i] = options[i];
          }
      }

      dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

      if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
      }

      self._dbInfo = dbInfo;
      dbInfo.serializer = localforageSerializer;

      return Promise$1.resolve();
  }

  // Remove all keys from the datastore, effectively destroying all data in
  // the app's key/value store!
  function clear$2(callback) {
      var self = this;
      var promise = self.ready().then(function () {
          var keyPrefix = self._dbInfo.keyPrefix;

          for (var i = localStorage.length - 1; i >= 0; i--) {
              var key = localStorage.key(i);

              if (key.indexOf(keyPrefix) === 0) {
                  localStorage.removeItem(key);
              }
          }
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Retrieve an item from the store. Unlike the original async_storage
  // library in Gaia, we don't modify return values at all. If a key's value
  // is `undefined`, we pass that value to the callback function.
  function getItem$2(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key);

          // If a result was found, parse it from the serialized
          // string into a JS object. If result isn't truthy, the key
          // is likely undefined and we'll pass it straight to the
          // callback.
          if (result) {
              result = dbInfo.serializer.deserialize(result);
          }

          return result;
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Iterate over all items in the store.
  function iterate$2(iterator, callback) {
      var self = this;

      var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length = localStorage.length;

          // We use a dedicated iterator instead of the `i` variable below
          // so other keys we fetch in localStorage aren't counted in
          // the `iterationNumber` argument passed to the `iterate()`
          // callback.
          //
          // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
          var iterationNumber = 1;

          for (var i = 0; i < length; i++) {
              var key = localStorage.key(i);
              if (key.indexOf(keyPrefix) !== 0) {
                  continue;
              }
              var value = localStorage.getItem(key);

              // If a result was found, parse it from the serialized
              // string into a JS object. If result isn't truthy, the
              // key is likely undefined and we'll pass it straight
              // to the iterator.
              if (value) {
                  value = dbInfo.serializer.deserialize(value);
              }

              value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

              if (value !== void 0) {
                  return value;
              }
          }
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Same as localStorage's key() method, except takes a callback.
  function key$2(n, callback) {
      var self = this;
      var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var result;
          try {
              result = localStorage.key(n);
          } catch (error) {
              result = null;
          }

          // Remove the prefix from the key, if a key is found.
          if (result) {
              result = result.substring(dbInfo.keyPrefix.length);
          }

          return result;
      });

      executeCallback(promise, callback);
      return promise;
  }

  function keys$2(callback) {
      var self = this;
      var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          var length = localStorage.length;
          var keys = [];

          for (var i = 0; i < length; i++) {
              var itemKey = localStorage.key(i);
              if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                  keys.push(itemKey.substring(dbInfo.keyPrefix.length));
              }
          }

          return keys;
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Supply the number of keys in the datastore to the callback function.
  function length$2(callback) {
      var self = this;
      var promise = self.keys().then(function (keys) {
          return keys.length;
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Remove an item from the store, nice and simple.
  function removeItem$2(key, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = self.ready().then(function () {
          var dbInfo = self._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key);
      });

      executeCallback(promise, callback);
      return promise;
  }

  // Set a key's value and run an optional callback once the value is set.
  // Unlike Gaia's implementation, the callback function is passed the value,
  // in case you want to operate on that value only after you're sure it
  // saved, or something like that.
  function setItem$2(key, value, callback) {
      var self = this;

      key = normalizeKey(key);

      var promise = self.ready().then(function () {
          // Convert undefined values to null.
          // https://github.com/mozilla/localForage/pull/42
          if (value === undefined) {
              value = null;
          }

          // Save the original value to pass to the callback.
          var originalValue = value;

          return new Promise$1(function (resolve, reject) {
              var dbInfo = self._dbInfo;
              dbInfo.serializer.serialize(value, function (value, error) {
                  if (error) {
                      reject(error);
                  } else {
                      try {
                          localStorage.setItem(dbInfo.keyPrefix + key, value);
                          resolve(originalValue);
                      } catch (e) {
                          // localStorage capacity exceeded.
                          // TODO: Make this a specific error/event.
                          if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                              reject(e);
                          }
                          reject(e);
                      }
                  }
              });
          });
      });

      executeCallback(promise, callback);
      return promise;
  }

  function dropInstance$2(options, callback) {
      callback = getCallback.apply(this, arguments);

      options = typeof options !== 'function' && options || {};
      if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
      }

      var self = this;
      var promise;
      if (!options.name) {
          promise = Promise$1.reject('Invalid arguments');
      } else {
          promise = new Promise$1(function (resolve) {
              if (!options.storeName) {
                  resolve(options.name + '/');
              } else {
                  resolve(_getKeyPrefix(options, self._defaultConfig));
              }
          }).then(function (keyPrefix) {
              for (var i = localStorage.length - 1; i >= 0; i--) {
                  var key = localStorage.key(i);

                  if (key.indexOf(keyPrefix) === 0) {
                      localStorage.removeItem(key);
                  }
              }
          });
      }

      executeCallback(promise, callback);
      return promise;
  }

  var localStorageWrapper = {
      _driver: 'localStorageWrapper',
      _initStorage: _initStorage$2,
      _support: isLocalStorageValid(),
      iterate: iterate$2,
      getItem: getItem$2,
      setItem: setItem$2,
      removeItem: removeItem$2,
      clear: clear$2,
      length: length$2,
      key: key$2,
      keys: keys$2,
      dropInstance: dropInstance$2
  };

  var sameValue = function sameValue(x, y) {
      return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
  };

  var includes = function includes(array, searchElement) {
      var len = array.length;
      var i = 0;
      while (i < len) {
          if (sameValue(array[i], searchElement)) {
              return true;
          }
          i++;
      }

      return false;
  };

  var isArray = Array.isArray || function (arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
  };

  // Drivers are stored here when `defineDriver()` is called.
  // They are shared across all instances of localForage.
  var DefinedDrivers = {};

  var DriverSupport = {};

  var DefaultDrivers = {
      INDEXEDDB: asyncStorage,
      WEBSQL: webSQLStorage,
      LOCALSTORAGE: localStorageWrapper
  };

  var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

  var OptionalDriverMethods = ['dropInstance'];

  var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

  var DefaultConfig = {
      description: '',
      driver: DefaultDriverOrder.slice(),
      name: 'localforage',
      // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
      // we can use without a prompt.
      size: 4980736,
      storeName: 'keyvaluepairs',
      version: 1.0
  };

  function callWhenReady(localForageInstance, libraryMethod) {
      localForageInstance[libraryMethod] = function () {
          var _args = arguments;
          return localForageInstance.ready().then(function () {
              return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
      };
  }

  function extend() {
      for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];

          if (arg) {
              for (var _key in arg) {
                  if (arg.hasOwnProperty(_key)) {
                      if (isArray(arg[_key])) {
                          arguments[0][_key] = arg[_key].slice();
                      } else {
                          arguments[0][_key] = arg[_key];
                      }
                  }
              }
          }
      }

      return arguments[0];
  }

  var LocalForage = function () {
      function LocalForage(options) {
          _classCallCheck(this, LocalForage);

          for (var driverTypeKey in DefaultDrivers) {
              if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                  var driver = DefaultDrivers[driverTypeKey];
                  var driverName = driver._driver;
                  this[driverTypeKey] = driverName;

                  if (!DefinedDrivers[driverName]) {
                      // we don't need to wait for the promise,
                      // since the default drivers can be defined
                      // in a blocking manner
                      this.defineDriver(driver);
                  }
              }
          }

          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;

          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function () {});
      }

      // Set any config values for localForage; can be called anytime before
      // the first API call (e.g. `getItem`, `setItem`).
      // We loop through options so we don't overwrite existing config
      // values.


      LocalForage.prototype.config = function config(options) {
          // If the options argument is an object, we use it to set values.
          // Otherwise, we return either a specified config value or all
          // config values.
          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
              // If localforage is ready and fully initialized, we can't set
              // any new configuration values. Instead, we return an error.
              if (this._ready) {
                  return new Error("Can't call config() after localforage " + 'has been used.');
              }

              for (var i in options) {
                  if (i === 'storeName') {
                      options[i] = options[i].replace(/\W/g, '_');
                  }

                  if (i === 'version' && typeof options[i] !== 'number') {
                      return new Error('Database version must be a number.');
                  }

                  this._config[i] = options[i];
              }

              // after all config options are set and
              // the driver option is used, try setting it
              if ('driver' in options && options.driver) {
                  return this.setDriver(this._config.driver);
              }

              return true;
          } else if (typeof options === 'string') {
              return this._config[options];
          } else {
              return this._config;
          }
      };

      // Used to define a custom driver, shared across all instances of
      // localForage.


      LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function (resolve, reject) {
              try {
                  var driverName = driverObject._driver;
                  var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                  // A driver name should be defined and not overlap with the
                  // library-defined, default drivers.
                  if (!driverObject._driver) {
                      reject(complianceError);
                      return;
                  }

                  var driverMethods = LibraryMethods.concat('_initStorage');
                  for (var i = 0, len = driverMethods.length; i < len; i++) {
                      var driverMethodName = driverMethods[i];

                      // when the property is there,
                      // it should be a method even when optional
                      var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                      if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                          reject(complianceError);
                          return;
                      }
                  }

                  var configureMissingMethods = function configureMissingMethods() {
                      var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                          return function () {
                              var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                              var promise = Promise$1.reject(error);
                              executeCallback(promise, arguments[arguments.length - 1]);
                              return promise;
                          };
                      };

                      for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                          var optionalDriverMethod = OptionalDriverMethods[_i];
                          if (!driverObject[optionalDriverMethod]) {
                              driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                          }
                      }
                  };

                  configureMissingMethods();

                  var setDriverSupport = function setDriverSupport(support) {
                      if (DefinedDrivers[driverName]) {
                          console.info('Redefining LocalForage driver: ' + driverName);
                      }
                      DefinedDrivers[driverName] = driverObject;
                      DriverSupport[driverName] = support;
                      // don't use a then, so that we can define
                      // drivers that have simple _support methods
                      // in a blocking manner
                      resolve();
                  };

                  if ('_support' in driverObject) {
                      if (driverObject._support && typeof driverObject._support === 'function') {
                          driverObject._support().then(setDriverSupport, reject);
                      } else {
                          setDriverSupport(!!driverObject._support);
                      }
                  } else {
                      setDriverSupport(true);
                  }
              } catch (e) {
                  reject(e);
              }
          });

          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
      };

      LocalForage.prototype.driver = function driver() {
          return this._driver || null;
      };

      LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
      };

      LocalForage.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
      };

      LocalForage.prototype.ready = function ready(callback) {
          var self = this;

          var promise = self._driverSet.then(function () {
              if (self._ready === null) {
                  self._ready = self._initDriver();
              }

              return self._ready;
          });

          executeTwoCallbacks(promise, callback, callback);
          return promise;
      };

      LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self = this;

          if (!isArray(drivers)) {
              drivers = [drivers];
          }

          var supportedDrivers = this._getSupportedDrivers(drivers);

          function setDriverToConfig() {
              self._config.driver = self.driver();
          }

          function extendSelfWithDriver(driver) {
              self._extend(driver);
              setDriverToConfig();

              self._ready = self._initStorage(self._config);
              return self._ready;
          }

          function initDriver(supportedDrivers) {
              return function () {
                  var currentDriverIndex = 0;

                  function driverPromiseLoop() {
                      while (currentDriverIndex < supportedDrivers.length) {
                          var driverName = supportedDrivers[currentDriverIndex];
                          currentDriverIndex++;

                          self._dbInfo = null;
                          self._ready = null;

                          return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                      }

                      setDriverToConfig();
                      var error = new Error('No available storage method found.');
                      self._driverSet = Promise$1.reject(error);
                      return self._driverSet;
                  }

                  return driverPromiseLoop();
              };
          }

          // There might be a driver initialization in progress
          // so wait for it to finish in order to avoid a possible
          // race condition to set _dbInfo
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
              return Promise$1.resolve();
          }) : Promise$1.resolve();

          this._driverSet = oldDriverSetDone.then(function () {
              var driverName = supportedDrivers[0];
              self._dbInfo = null;
              self._ready = null;

              return self.getDriver(driverName).then(function (driver) {
                  self._driver = driver._driver;
                  setDriverToConfig();
                  self._wrapLibraryMethodsWithReady();
                  self._initDriver = initDriver(supportedDrivers);
              });
          })["catch"](function () {
              setDriverToConfig();
              var error = new Error('No available storage method found.');
              self._driverSet = Promise$1.reject(error);
              return self._driverSet;
          });

          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
      };

      LocalForage.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
      };

      LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
      };

      LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i = 0, len = drivers.length; i < len; i++) {
              var driverName = drivers[i];
              if (this.supports(driverName)) {
                  supportedDrivers.push(driverName);
              }
          }
          return supportedDrivers;
      };

      LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          // Add a stub for each driver API method that delays the call to the
          // corresponding driver method until localForage is ready. These stubs
          // will be replaced by the driver methods as soon as the driver is
          // loaded, so there is no performance impact.
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
              callWhenReady(this, LibraryMethods[i]);
          }
      };

      LocalForage.prototype.createInstance = function createInstance(options) {
          return new LocalForage(options);
      };

      return LocalForage;
  }();

  // The actual localForage object that we expose as a module or via a
  // global. It's extended by pulling in one of our other libraries.


  var localforage_js = new LocalForage();

  module.exports = localforage_js;

  },{"3":3}]},{},[4])(4)
  });
  });

  var localCacheKey = 'crystallize-basket';
  function retrieveBasketFromCache() {
    return _retrieveBasketFromCache.apply(this, arguments);
  }

  function _retrieveBasketFromCache() {
    _retrieveBasketFromCache = _asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      var basket, parsed;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return localforage.getItem(localCacheKey);

            case 3:
              basket = _context.sent;

              if (!basket) {
                _context.next = 8;
                break;
              }

              parsed = JSON.parse(basket);
              parsed.items.forEach(parseBasketItem);
              return _context.abrupt("return", parsed);

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.warn('The basket was not retrieved', _context.t0); // eslint-disable-line

            case 13:
              return _context.abrupt("return", null);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));
    return _retrieveBasketFromCache.apply(this, arguments);
  }

  function persistBasketToCache(_x) {
    return _persistBasketToCache.apply(this, arguments);
  }

  function _persistBasketToCache() {
    _persistBasketToCache = _asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee2(_ref) {
      var id, items, shipping, metadata, coupon, discount;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref.id, items = _ref.items, shipping = _ref.shipping, metadata = _ref.metadata, coupon = _ref.coupon, discount = _ref.discount;
              _context2.prev = 1;
              _context2.next = 4;
              return localforage.setItem(localCacheKey, JSON.stringify({
                id: id,
                items: items,
                shipping: shipping,
                metadata: metadata,
                coupon: coupon,
                discount: discount
              }));

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.warn('The basket was not persisted', _context2.t0); // eslint-disable-line

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 6]]);
    }));
    return _persistBasketToCache.apply(this, arguments);
  }

  var parseBasketItem$1 = parseBasketItem,
      createBasketItem$1 = createBasketItem,
      getSupportedOptionsFromProps$1 = getSupportedOptionsFromProps,
      validateBasket$1 = validateBasket;
  var BasketContext = React.createContext();
  var BasketProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(BasketProvider, _React$Component);

    _createClass(BasketProvider, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var newState = {
          options: _objectSpread({}, prevState.options, getSupportedOptionsFromProps$1(nextProps))
        };
        return newState;
      }
      /* eslint-disable */

    }, {
      key: "createShippingBasketItem",
      value: function createShippingBasketItem(shipping) {
        if (!shipping) {
          return shipping;
        }

        return _objectSpread({
          name: 'Shipping',
          reference: 'not-set',
          discount_rate: 0,
          quantity: 1,
          tax_rate: 0,
          total_price_excluding_tax: 0,
          total_price_including_tax: 0,
          total_tax_amount: 0,
          type: 'shipping_fee',
          unit_price: shipping.price || 0
        }, shipping);
      }
    }]);

    function BasketProvider(props) {
      var _this;

      _classCallCheck(this, BasketProvider);

      _this = _possibleConstructorReturn(this, (BasketProvider.__proto__ || Object.getPrototypeOf(BasketProvider)).call(this, props));

      _initialiseProps.call(_assertThisInitialized(_this));

      var shipping = null;

      if (props.defaultShipping) {
        shipping = BasketProvider.createShippingBasketItem(props.defaultShipping);
      }

      _this.state = {
        ready: false,
        items: [],
        options: {},
        validating: false,
        validatingNewCoupon: false,
        coupon: null,
        discount: null,
        shipping: shipping,
        metadata: {}
      };
      return _this;
    }

    _createClass(BasketProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.getCachedBasket();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        persistBasketToCache(this.state);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            options = _this$state.options,
            state = _objectWithoutProperties(_this$state, ["options"]);

        var calculatedState = this.calculateExtraBasketState();
        return React__default.createElement(BasketContext.Provider, {
          value: {
            state: _objectSpread({}, state, calculatedState),
            options: options,
            actions: {
              empty: this.empty,
              reset: this.reset,
              addItem: this.addItem,
              setItems: this.setItems,
              animateItem: this.animateItem,
              removeItem: this.removeItem,
              incrementQuantityItem: this.incrementQuantityItem,
              decrementQuantityItem: this.decrementQuantityItem,
              parseBasketItem: parseBasketItem$1,
              setValidating: this.setValidating,
              setValidatingNewCoupon: this.setValidatingNewCoupon,
              setCoupon: this.setCoupon,
              setDiscount: this.setDiscount,
              setShipping: this.setShipping,
              setMetadata: this.setMetadata,
              onReady: this.onReady
            }
          }
        }, this.props.children);
      }
    }]);

    return BasketProvider;
  }(React__default.Component);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    Object.defineProperty(this, "onReadyQueue", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "itemAnimationTimeouts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "onReady", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(fn) {
        if (_this2.state.ready) {
          fn();
        } else {
          _this2.onReadyQueue.push(fn);
        }
      }
    });
    Object.defineProperty(this, "getCachedBasket", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee() {
          var id, basket, items, rest;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  id = v1_1();
                  _context.next = 3;
                  return retrieveBasketFromCache();

                case 3:
                  basket = _context.sent;

                  if (basket) {
                    items = basket.items, rest = _objectWithoutProperties(basket, ["items"]);

                    _this2.setState(_objectSpread({
                      id: id
                    }, rest, {
                      items: items.map(parseBasketItem$1)
                    }));
                  } else {
                    _this2.setState({
                      id: id
                    });
                  }

                  _this2.setState({
                    ready: true
                  });

                  _this2.onReadyQueue.forEach(function (fn) {
                    return fn();
                  });

                  _this2.onReadyQueue.length = 0;

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(this, "calculateExtraBasketState", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this2$state = _this2.state,
            items = _this2$state.items,
            discount = _this2$state.discount,
            options = _this2$state.options,
            shipping = _this2$state.shipping;
        var _options$freeShipping = options.freeShippingMinimumPurchaseAmount,
            freeShippingMinimumPurchaseAmount = _options$freeShipping === void 0 ? -1 : _options$freeShipping;
        var totalQuantity = items.reduce(function (acc, i) {
          return acc + i.quantity;
        }, 0);
        var totalPrice = items.reduce(function (acc, i) {
          return acc + i.quantity * i.unit_price;
        }, 0);
        var totalPriceMinusDiscount = totalPrice - Math.abs(discount || 0); // Determine shipping related variables

        var freeShipping = false;
        var remainingUntilFreeShippingApplies = 0;

        if (freeShippingMinimumPurchaseAmount && freeShippingMinimumPurchaseAmount > 0) {
          remainingUntilFreeShippingApplies = freeShippingMinimumPurchaseAmount - totalPriceMinusDiscount;

          if (remainingUntilFreeShippingApplies <= 0) {
            remainingUntilFreeShippingApplies = 0;
            freeShipping = true;
          }
        }

        var shippingCost = shipping ? shipping.unit_price : 0;
        var totalToPay = totalPriceMinusDiscount;

        if (!freeShipping && shippingCost) {
          totalToPay += shippingCost;
        }

        return {
          totalPrice: totalPrice,
          totalPriceMinusDiscount: totalPriceMinusDiscount,
          totalToPay: totalToPay,
          totalQuantity: totalQuantity,
          freeShipping: freeShipping,
          remainingUntilFreeShippingApplies: remainingUntilFreeShippingApplies,
          items: items
        };
      }
    });
    Object.defineProperty(this, "validateBasketDelayed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        // No coupon -> no validation needed
        if (!_this2.state.coupon && !_this2.state.options.alwaysValidate) {
          return;
        }

        _this2.setValidating(true);

        clearTimeout(_this2.validateBasketDelayedTimeout);
        _this2.validateBasketDelayedTimeout = setTimeout(
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee2() {
          var _this2$state2, items, coupon, options, shipping, validateEndpoint, itemsToValidate, result, shippingItem, basketItems, discount;

          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this2$state2 = _this2.state, items = _this2$state2.items, coupon = _this2$state2.coupon, options = _this2$state2.options, shipping = _this2$state2.shipping;
                  validateEndpoint = options.validateEndpoint;
                  _context2.prev = 2;
                  itemsToValidate = _toConsumableArray(items);

                  if (shipping) {
                    itemsToValidate.push(shipping);
                  }

                  _context2.next = 7;
                  return validateBasket$1({
                    items: itemsToValidate,
                    coupon: coupon,
                    validateEndpoint: validateEndpoint
                  });

                case 7:
                  result = _context2.sent;

                  if (!result.error && result.status !== 'INVALID') {
                    shippingItem = result.items.find(function (i) {
                      return i.type === 'shipping_fee';
                    });

                    if (shippingItem) {
                      _this2.setShipping(shippingItem);
                    }

                    basketItems = result.items.filter(function (i) {
                      return i.type !== 'shipping_fee';
                    });

                    _this2.setItems(basketItems);

                    discount = result.discount;

                    if (!discount) {
                      discount = 0;
                      basketItems.forEach(function (item) {
                        discount -= item.discount_value;
                      });
                    }

                    if (discount) {
                      _this2.setDiscount(discount, false);
                    }
                  }

                  _context2.next = 14;
                  break;

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](2);
                  console.error(_context2.t0); // eslint-disable-line

                case 14:
                  _this2.setValidating(false);

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 11]]);
        })), 250);
      }
    });
    Object.defineProperty(this, "changeItemQuantity", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var item = _ref2.item,
            num = _ref2.num,
            quantity = _ref2.quantity;
        var items = _this2.state.items;

        var index = _this2.findItemIndex(item);

        var itemInBasket = items[index];

        if (itemInBasket) {
          var itemInBasketOldQuantity = itemInBasket.quantity;

          if (typeof quantity === 'number') {
            itemInBasket.quantity = quantity;
          } else if (typeof num === 'number') {
            itemInBasket.quantity += num;
          }

          if (itemInBasket.quantity === 0) {
            items.splice(index, 1);
          }

          _this2.setState({
            items: _toConsumableArray(items)
          });

          _this2.validateBasketDelayed();

          var quantityChange = itemInBasket.quantity - itemInBasketOldQuantity;

          if (quantityChange > 0) {
            if (_this2.state.options.onAddToBasket) {
              _this2.state.options.onAddToBasket([_objectSpread({}, item, {
                quantity: quantityChange
              })]);
            }
          } else if (quantityChange < 0) {
            if (_this2.state.options.onRemoveFromBasket) {
              _this2.state.options.onRemoveFromBasket([_objectSpread({}, item, {
                quantity: Math.abs(quantityChange)
              })]);
            }
          }

          return true;
        }

        return false;
      }
    });
    Object.defineProperty(this, "incrementQuantityItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        return _this2.onReady(function () {
          _this2.changeItemQuantity({
            item: item,
            num: 1
          });
        });
      }
    });
    Object.defineProperty(this, "decrementQuantityItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        return _this2.onReady(function () {
          _this2.changeItemQuantity({
            item: item,
            num: -1
          });
        });
      }
    });
    Object.defineProperty(this, "addItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(itemRaw) {
        return _this2.onReady(function () {
          var item = parseBasketItem$1(itemRaw); // Try to increment by one. If not, add new product to basket

          if (!_this2.changeItemQuantity({
            item: item,
            num: 1
          })) {
            _this2.setState({
              items: _toConsumableArray(_this2.state.items).concat([item])
            });

            _this2.validateBasketDelayed();

            if (_this2.state.options.onAddToBasket) {
              _this2.state.options.onAddToBasket([_objectSpread({}, item, {
                quantity: 1
              })]);
            }
          }
        });
      }
    });
    Object.defineProperty(this, "findItemIndex", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        var parsed = parseBasketItem$1(item);
        return _this2.state.items.findIndex(function (i) {
          return i.basketId === parsed.basketId;
        });
      }
    });
    Object.defineProperty(this, "animateItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(animItem) {
        var parsedItem = parseBasketItem$1(animItem);
        return new Promise(
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          regenerator.mark(function _callee5(mainResolve) {
            var removeQueuedAnimation, updateStateItem;
            return regenerator.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // Remove queued animation
                    removeQueuedAnimation =
                    /*#__PURE__*/
                    function () {
                      var _ref4 = _asyncToGenerator(
                      /*#__PURE__*/
                      regenerator.mark(function _callee3() {
                        var index;
                        return regenerator.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                index = _this2.itemAnimationTimeouts.findIndex(function (i) {
                                  return i.item.basketId === parsedItem.basketId;
                                });

                                if (!(index >= 0)) {
                                  _context3.next = 6;
                                  break;
                                }

                                clearTimeout(_this2.itemAnimationTimeouts[index].timeout);

                                _this2.itemAnimationTimeouts.splice(index, 1);

                                _context3.next = 6;
                                return updateStateItem(parsedItem, false);

                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));

                      return function removeQueuedAnimation() {
                        return _ref4.apply(this, arguments);
                      };
                    }();

                    updateStateItem = function updateStateItem(stateItem, animate) {
                      return new Promise(function (resolve) {
                        _this2.setState({
                          items: _this2.state.items.map(function (item) {
                            if (item.basketId === stateItem.basketId) {
                              item.animate = animate;
                            }

                            return item;
                          })
                        }, resolve);
                      });
                    };

                    _context5.next = 4;
                    return removeQueuedAnimation(parsedItem);

                  case 4:
                    _context5.next = 6;
                    return updateStateItem(parsedItem, true);

                  case 6:
                    _this2.itemAnimationTimeouts.push({
                      item: parsedItem,
                      timeout: setTimeout(
                      /*#__PURE__*/
                      _asyncToGenerator(
                      /*#__PURE__*/
                      regenerator.mark(function _callee4() {
                        return regenerator.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return removeQueuedAnimation(parsedItem);

                              case 2:
                                mainResolve();

                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      })), animationSpeedMs)
                    });

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    });
    Object.defineProperty(this, "removeItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(item) {
        return _this2.onReady(function () {
          return _this2.changeItemQuantity({
            item: item,
            quantity: 0
          });
        });
      }
    });
    Object.defineProperty(this, "empty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this2.onReady(function () {
          if (_this2.state.options.onRemoveFromBasket) {
            _this2.state.options.onRemoveFromBasket(_this2.state.items);
          }

          _this2.setState({
            items: []
          });
        });
      }
    });
    Object.defineProperty(this, "reset", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this2.onReady(function () {
          return _this2.setState({
            id: v1_1(),
            items: [],
            metadata: null,
            coupon: null,
            discount: null
          });
        });
      }
    });
    Object.defineProperty(this, "setValidating", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(validating) {
        return _this2.onReady(function () {
          return _this2.setState({
            validating: validating
          });
        });
      }
    });
    Object.defineProperty(this, "setValidatingNewCoupon", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(validatingNewCoupon) {
        return _this2.onReady(function () {
          return _this2.setState({
            validatingNewCoupon: validatingNewCoupon
          });
        });
      }
    });
    Object.defineProperty(this, "setCoupon", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(coupon) {
        return _this2.onReady(function () {
          return _this2.setState({
            coupon: coupon
          });
        });
      }
    });
    Object.defineProperty(this, "setItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(items) {
        return _this2.onReady(function () {
          return _this2.setState({
            items: items
          });
        });
      }
    });
    Object.defineProperty(this, "setDiscount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(discount) {
        var validateBasket$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return _this2.onReady(function () {
          return _this2.setState({
            discount: discount
          }, function () {
            if (validateBasket$$1) {
              _this2.validateBasketDelayed();
            }
          });
        });
      }
    });
    Object.defineProperty(this, "setMetadata", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(metadata) {
        return _this2.onReady(function () {
          return _this2.setState({
            metadata: metadata
          });
        });
      }
    });
    Object.defineProperty(this, "setShipping", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(shipping) {
        return _this2.onReady(function () {
          return _this2.setState({
            shipping: BasketProvider.createShippingBasketItem(shipping)
          });
        });
      }
    });
  };

  var BasketConsumer = BasketContext.Consumer;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );

          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var printWarning$1 = function() {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  function emptyFunction() {}

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };

  var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
  };

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols$1) {
              keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try { // Avoid failures from read-only properties
                      defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }

          return targetComponent;
      }

      return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule shallowEqual
   * @typechecks
   * 
   */

  /* eslint-disable no-self-compare */

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof$1(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof$1(objB)) !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty$1.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var defaultOptions = {
    wait: false,
    withRef: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    translateFuncName: 't',
    nsMode: 'default',
    usePureComponent: false,
    omitBoundRerender: true
  };

  var i18n = void 0;

  function setDefaults(options) {
    defaultOptions = _extends$1({}, defaultOptions, options);
  }

  function getDefaults() {
    return defaultOptions;
  }

  function setI18n(instance) {
    i18n = instance;
  }

  function getI18n() {
    return i18n;
  }

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var removedIsInitialSSR = false;

  var I18n = function (_Component) {
    _inherits$1(I18n, _Component);

    function I18n(props, context) {
      _classCallCheck$1(this, I18n);

      var _this = _possibleConstructorReturn$1(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props, context));

      _this.i18n = props.i18n || context.i18n || getI18n();
      _this.namespaces = props.ns || _this.i18n.options && _this.i18n.options.defaultNS;
      if (typeof _this.namespaces === 'string') _this.namespaces = [_this.namespaces];

      var i18nOptions = _this.i18n && _this.i18n.options && _this.i18n.options.react || {};
      _this.options = _extends$2({}, getDefaults(), i18nOptions, props);

      // nextjs SSR: getting data from next.js or other ssr stack
      if (props.initialI18nStore) {
        _this.i18n.services.resourceStore.data = props.initialI18nStore;
        _this.options.wait = false; // we got all passed down already
      }
      if (props.initialLanguage) {
        _this.i18n.changeLanguage(props.initialLanguage);
      }

      // provider SSR: data was set in provider and ssr flag was set
      if (_this.i18n.options && _this.i18n.options.isInitialSSR) {
        _this.options.wait = false;
      }

      var language = _this.i18n.languages && _this.i18n.languages[0];
      var ready = !!language && _this.namespaces.every(function (ns) {
        return _this.i18n.hasResourceBundle(language, ns);
      });

      _this.state = {
        i18nLoadedAt: null,
        ready: ready
      };

      _this.t = _this.getI18nTranslate();

      _this.onI18nChanged = _this.onI18nChanged.bind(_this);
      _this.getI18nTranslate = _this.getI18nTranslate.bind(_this);
      return _this;
    }

    _createClass$1(I18n, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          t: this.t,
          i18n: this.i18n
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var bind = function bind() {
          if (_this2.options.bindI18n && _this2.i18n) _this2.i18n.on(_this2.options.bindI18n, _this2.onI18nChanged);
          if (_this2.options.bindStore && _this2.i18n.store) _this2.i18n.store.on(_this2.options.bindStore, _this2.onI18nChanged);
        };

        this.mounted = true;
        this.i18n.loadNamespaces(this.namespaces, function () {
          var ready = function ready() {
            if (_this2.mounted && !_this2.state.ready) _this2.setState({ ready: true });
            if (_this2.options.wait && _this2.mounted) bind();
          };

          if (_this2.i18n.isInitialized) {
            ready();
          } else {
            var initialized = function initialized() {
              // due to emitter removing issue in i18next we need to delay remove
              setTimeout(function () {
                _this2.i18n.off('initialized', initialized);
              }, 1000);
              ready();
            };

            _this2.i18n.on('initialized', initialized);
          }
        });

        if (!this.options.wait) bind();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        this.mounted = false;
        if (this.onI18nChanged) {
          if (this.options.bindI18n) {
            var p = this.options.bindI18n.split(' ');
            p.forEach(function (f) {
              return _this3.i18n.off(f, _this3.onI18nChanged);
            });
          }
          if (this.options.bindStore) {
            var _p = this.options.bindStore.split(' ');
            _p.forEach(function (f) {
              return _this3.i18n.store && _this3.i18n.store.off(f, _this3.onI18nChanged);
            });
          }
        }
      }
    }, {
      key: 'onI18nChanged',
      value: function onI18nChanged() {
        if (!this.mounted) return;
        if (!this.state.ready && this.options.omitBoundRerender) return;

        this.t = this.getI18nTranslate();
        this.setState({ i18nLoadedAt: new Date() }); // rerender
      }
    }, {
      key: 'getI18nTranslate',
      value: function getI18nTranslate() {
        return this.i18n.getFixedT(null, this.options.nsMode === 'fallback' ? this.namespaces : this.namespaces[0]);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var children = this.props.children;
        var ready = this.state.ready;


        if (!ready && this.options.wait) return null;

        // remove ssr flag set by provider - first render was done from now on wait if set to wait
        if (this.i18n.options && this.i18n.options.isInitialSSR && !removedIsInitialSSR) {
          removedIsInitialSSR = true;
          setTimeout(function () {
            delete _this4.i18n.options.isInitialSSR;
          }, 100);
        }

        return children(this.t, {
          i18n: this.i18n,
          t: this.t,
          lng: this.i18n.language,
          ready: ready
        });
      }
    }]);

    return I18n;
  }(React.Component);


  I18n.contextTypes = {
    i18n: propTypes.object
  };

  I18n.childContextTypes = {
    t: propTypes.func.isRequired,
    i18n: propTypes.object
  };

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
  }

  function translate(namespaceArg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    return function Wrapper(WrappedComponent) {
      var Translate = function (_Component) {
        _inherits$2(Translate, _Component);

        function Translate(props, context) {
          _classCallCheck$2(this, Translate);

          var _this = _possibleConstructorReturn$2(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).call(this, props, context));

          _this.i18n = props.i18n || options.i18n || context.i18n || getI18n();
          _this.namespaces = typeof namespaceArg === 'function' ? namespaceArg(props) : namespaceArg || context.defaultNS || _this.i18n.options && _this.i18n.options.defaultNS;
          if (typeof _this.namespaces === 'string') _this.namespaces = [_this.namespaces];

          var i18nOptions = _this.i18n && _this.i18n.options && _this.i18n.options.react || {};
          _this.options = _extends$3({}, getDefaults(), i18nOptions, options);

          if (context.reportNS) {
            var namespaces = _this.namespaces || [undefined];
            namespaces.forEach(context.reportNS);
          }

          _this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
          return _this;
        }

        _createClass$2(Translate, [{
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            if (!this.options.usePureComponent) {
              return true;
            }

            return !shallowEqual(this.props, nextProps);
          }
        }, {
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            if (!this.options.withRef) {
              // eslint-disable-next-line no-console
              console.error('To access the wrapped instance, you need to specify ' + '{ withRef: true } as the second argument of the translate() call.');
            }

            /* eslint react/no-string-refs: 1 */
            return this.wrappedInstance;
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var extraProps = {};

            if (this.options.withRef) {
              extraProps.ref = function (c) {
                _this2.wrappedInstance = c;
              };
            }

            return React__default.createElement(I18n, _extends$3({ ns: this.namespaces }, this.options, this.props, { i18n: this.i18n }), function (t, _ref) {
              var ready = _ref.ready,
                  context = _objectWithoutProperties$1(_ref, ['ready']);

              return React__default.createElement(WrappedComponent, _extends$3({
                tReady: ready
              }, _this2.props, extraProps, context));
            });
          }
        }]);

        return Translate;
      }(React.Component);

      Translate.WrappedComponent = WrappedComponent;

      Translate.contextTypes = {
        i18n: propTypes.object,
        defaultNS: propTypes.string,
        reportNS: propTypes.func
      };

      Translate.displayName = 'Translate(' + getDisplayName(WrappedComponent) + ')';

      Translate.namespaces = namespaceArg;

      return hoistNonReactStatics_cjs(Translate, WrappedComponent);
    };
  }

  translate.setDefaults = setDefaults;

  translate.setI18n = setI18n;

  var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Interpolate = function (_Component) {
    _inherits$3(Interpolate, _Component);

    function Interpolate(props, context) {
      _classCallCheck$3(this, Interpolate);

      var _this = _possibleConstructorReturn$3(this, (Interpolate.__proto__ || Object.getPrototypeOf(Interpolate)).call(this, props, context));

      _this.i18n = props.i18n || context.i18n;
      _this.t = props.t || context.t;
      return _this;
    }

    _createClass$3(Interpolate, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var parent = this.props.parent || 'span';
        var REGEXP = this.props.regexp || this.i18n.services.interpolator.regexp;
        var _props = this.props,
            className = _props.className,
            style = _props.style;

        // Set to true if you want to use raw HTML in translation values
        // See https://github.com/i18next/react-i18next/issues/189

        var useDangerouslySetInnerHTML = this.props.useDangerouslySetInnerHTML || false;
        var dangerouslySetInnerHTMLPartElement = this.props.dangerouslySetInnerHTMLPartElement || 'span';

        var tOpts = _extends$4({}, this.props.options, { interpolation: { prefix: '#$?', suffix: '?$#' } });
        var format = this.t(this.props.i18nKey, tOpts);

        if (!format || typeof format !== 'string') return React__default.createElement('noscript', null);

        var children = [];

        var handleFormat = function handleFormat(key, props) {
          if (key.indexOf(_this2.i18n.options.interpolation.formatSeparator) < 0) {
            if (props[key] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + key + ' for interpolating ' + format);
            return props[key];
          }

          var p = key.split(_this2.i18n.options.interpolation.formatSeparator);
          var k = p.shift().trim();
          var f = p.join(_this2.i18n.options.interpolation.formatSeparator).trim();

          if (props[k] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + k + ' for interpolating ' + format);
          return _this2.i18n.options.interpolation.format(props[k], f, _this2.i18n.language);
        };

        format.split(REGEXP).reduce(function (memo, match, index) {
          var child = void 0;

          if (index % 2 === 0) {
            if (match.length === 0) return memo;
            if (useDangerouslySetInnerHTML) {
              child = React__default.createElement(dangerouslySetInnerHTMLPartElement, { dangerouslySetInnerHTML: { __html: match } });
            } else {
              child = match;
            }
          } else {
            child = handleFormat(match, _this2.props);
          }

          memo.push(child);
          return memo;
        }, children);

        var additionalProps = {};
        if (this.i18n.options.react && this.i18n.options.react.exposeNamespace) {
          var ns = typeof this.t.ns === 'string' ? this.t.ns : this.t.ns[0];
          if (this.props.i18nKey && this.i18n.options.nsSeparator && this.props.i18nKey.indexOf(this.i18n.options.nsSeparator) > -1) {
            var parts = this.props.i18nKey.split(this.i18n.options.nsSeparator);
            ns = parts[0];
          }
          if (this.t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
        }

        if (className) additionalProps.className = className;
        if (style) additionalProps.style = style;

        return React__default.createElement.apply(this, [parent, additionalProps].concat(children));
      }
    }]);

    return Interpolate;
  }(React.Component);

  Interpolate.propTypes = {
    className: propTypes.string
  };

  Interpolate.defaultProps = {
    className: ''
  };

  Interpolate.contextTypes = {
    i18n: propTypes.object.isRequired,
    t: propTypes.func.isRequired
  };

  /**
   * This file automatically generated from `pre-publish.js`.
   * Do not manually edit.
   */

  var voidElements = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "keygen": true,
    "link": true,
    "menuitem": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
  };

  var attrRE = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g;


  var parseTag = function (tag) {
      var i = 0;
      var key;
      var expectingValueAfterEquals = true;
      var res = {
          type: 'tag',
          name: '',
          voidElement: false,
          attrs: {},
          children: []
      };

      tag.replace(attrRE, function (match) {
          if (match === '=') {
              expectingValueAfterEquals = true;
              i++;
              return;
          }

          if (!expectingValueAfterEquals) {
              if (key) {
                  res.attrs[key] = key; // boolean attribute
              }
              key=match;
          } else {
              if (i === 0) {
                  if (voidElements[match] || tag.charAt(tag.length - 2) === '/') {
                      res.voidElement = true;
                  }
                  res.name = match;
              } else {
                  res.attrs[key] = match.replace(/^['"]|['"]$/g, '');
                  key=undefined;
              }
          }
          i++;
          expectingValueAfterEquals = false;
      });

      return res;
  };

  /*jshint -W030 */
  var tagRE = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g;

  // re-used obj for quick lookups of components
  var empty = Object.create ? Object.create(null) : {};
  // common logic for pushing a child node onto a list
  function pushTextNode(list, html, level, start, ignoreWhitespace) {
      // calculate correct end of the content slice in case there's
      // no tag after the text node.
      var end = html.indexOf('<', start);
      var content = html.slice(start, end === -1 ? undefined : end);
      // if a node is nothing but whitespace, collapse it as the spec states:
      // https://www.w3.org/TR/html4/struct/text.html#h-9.1
      if (/^\s*$/.test(content)) {
          content = ' ';
      }
      // don't add whitespace-only text nodes if they would be trailing text nodes
      // or if they would be leading whitespace-only text nodes:
      //  * end > -1 indicates this is not a trailing text node
      //  * leading node is when level is -1 and list has length 0
      if ((!ignoreWhitespace && end > -1 && level + list.length >= 0) || content !== ' ') {
          list.push({
              type: 'text',
              content: content
          });
      }
  }

  var parse = function parse(html, options) {
      options || (options = {});
      options.components || (options.components = empty);
      var result = [];
      var current;
      var level = -1;
      var arr = [];
      var byTag = {};
      var inComponent = false;

      html.replace(tagRE, function (tag, index) {
          if (inComponent) {
              if (tag !== ('</' + current.name + '>')) {
                  return;
              } else {
                  inComponent = false;
              }
          }

          var isOpen = tag.charAt(1) !== '/';
          var isComment = tag.indexOf('<!--') === 0;
          var start = index + tag.length;
          var nextChar = html.charAt(start);
          var parent;

          if (isOpen && !isComment) {
              level++;

              current = parseTag(tag);
              if (current.type === 'tag' && options.components[current.name]) {
                  current.type = 'component';
                  inComponent = true;
              }

              if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
                  pushTextNode(current.children, html, level, start, options.ignoreWhitespace);
              }

              byTag[current.tagName] = current;

              // if we're at root, push new base node
              if (level === 0) {
                  result.push(current);
              }

              parent = arr[level - 1];

              if (parent) {
                  parent.children.push(current);
              }

              arr[level] = current;
          }

          if (isComment || !isOpen || current.voidElement) {
              if (!isComment) {
                  level--;
              }
              if (!inComponent && nextChar !== '<' && nextChar) {
                  // trailing text node
                  // if we're at the root, push a base text node. otherwise add as
                  // a child to the current node.
                  parent = level === -1 ? result : arr[level].children;
                  pushTextNode(parent, html, level, start, options.ignoreWhitespace);
              }
          }
      });

      // If the "html" passed isn't actually html, add it as a text node.
      if (!result.length && html.length) {
          pushTextNode(result, html, 0, 0, options.ignoreWhitespace);
      }

      return result;
  };

  function attrString(attrs) {
      var buff = [];
      for (var key in attrs) {
          buff.push(key + '="' + attrs[key] + '"');
      }
      if (!buff.length) {
          return '';
      }
      return ' ' + buff.join(' ');
  }

  function stringify(buff, doc) {
      switch (doc.type) {
      case 'text':
          return buff + doc.content;
      case 'tag':
          buff += '<' + doc.name + (doc.attrs ? attrString(doc.attrs) : '') + (doc.voidElement ? '/>' : '>');
          if (doc.voidElement) {
              return buff;
          }
          return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
      }
  }

  var stringify_1 = function (doc) {
      return doc.reduce(function (token, rootEl) {
          return token + stringify('', rootEl);
      }, '');
  };

  var htmlParseStringify2 = {
      parse: parse,
      stringify: stringify_1
  };

  var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function hasChildren(node) {
    return node && (node.children || node.props && node.props.children);
  }

  function getChildren(node) {
    return node && node.children ? node.children : node.props && node.props.children;
  }

  function nodesToString(mem, children, index) {
    if (!children) return '';
    if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];

    children.forEach(function (child, i) {
      // const isElement = React.isValidElement(child);
      // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
      var elementKey = '' + i;

      if (typeof child === 'string') {
        mem = '' + mem + child;
      } else if (hasChildren(child)) {
        mem = mem + '<' + elementKey + '>' + nodesToString('', getChildren(child), i + 1) + '</' + elementKey + '>';
      } else if (React__default.isValidElement(child)) {
        mem = mem + '<' + elementKey + '></' + elementKey + '>';
      } else if ((typeof child === 'undefined' ? 'undefined' : _typeof$2(child)) === 'object') {
        var clone = _extends$5({}, child);
        var format = clone.format;
        delete clone.format;

        var keys = Object.keys(clone);
        if (format && keys.length === 1) {
          mem = mem + '<' + elementKey + '>{{' + keys[0] + ', ' + format + '}}</' + elementKey + '>';
        } else if (keys.length === 1) {
          mem = mem + '<' + elementKey + '>{{' + keys[0] + '}}</' + elementKey + '>';
        } else if (console && console.warn) {
          // not a valid interpolation object (can only contain one value plus format)
          console.warn('react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.', child);
        }
      } else if (console && console.warn) {
        console.warn('react-i18next: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.', child);
      }
    });

    return mem;
  }

  function renderNodes(children, targetString, i18n) {
    if (targetString === "") return [];
    if (!children) return [targetString];

    // parse ast from string with additional wrapper tag
    // -> avoids issues in parser removing prepending text nodes
    var ast = htmlParseStringify2.parse('<0>' + targetString + '</0>');

    function mapAST(reactNodes, astNodes) {
      if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
      if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];

      return astNodes.reduce(function (mem, node, i) {
        if (node.type === 'tag') {
          var child = reactNodes[parseInt(node.name, 10)] || {};
          var isElement = React__default.isValidElement(child);

          if (typeof child === 'string') {
            mem.push(child);
          } else if (hasChildren(child)) {
            var inner = mapAST(getChildren(child), node.children);
            if (child.dummy) child.children = inner; // needed on preact!
            mem.push(React__default.cloneElement(child, _extends$5({}, child.props, { key: i }), inner));
          } else if ((typeof child === 'undefined' ? 'undefined' : _typeof$2(child)) === 'object' && !isElement) {
            var content = node.children[0] ? node.children[0].content : null;
            if (content) {
              var interpolated = i18n.services.interpolator.interpolate(node.children[0].content, child, i18n.language);
              mem.push(interpolated);
            }
          } else {
            mem.push(child);
          }
        } else if (node.type === 'text') {
          mem.push(node.content);
        }
        return mem;
      }, []);
    }

    // call mapAST with having react nodes nested into additional node like
    // we did for the string ast from translation
    // return the children of that extra node to get expected result
    var result = mapAST([{ dummy: true, children: children }], ast);
    return getChildren(result[0]);
  }

  var Trans = function (_React$Component) {
    _inherits$4(Trans, _React$Component);

    function Trans() {
      _classCallCheck$4(this, Trans);

      return _possibleConstructorReturn$4(this, (Trans.__proto__ || Object.getPrototypeOf(Trans)).apply(this, arguments));
    }

    _createClass$4(Trans, [{
      key: 'render',
      value: function render() {
        var contextAndProps = _extends$5({ i18n: this.context.i18n, t: this.context.t }, this.props);

        var children = contextAndProps.children,
            count = contextAndProps.count,
            parent = contextAndProps.parent,
            i18nKey = contextAndProps.i18nKey,
            tOptions = contextAndProps.tOptions,
            values = contextAndProps.values,
            defaults = contextAndProps.defaults,
            components = contextAndProps.components,
            namespace = contextAndProps.ns,
            i18n = contextAndProps.i18n,
            tFromContextAndProps = contextAndProps.t,
            additionalProps = _objectWithoutProperties$2(contextAndProps, ['children', 'count', 'parent', 'i18nKey', 'tOptions', 'values', 'defaults', 'components', 'ns', 'i18n', 't']);

        var t = tFromContextAndProps || i18n.t.bind(i18n);

        var reactI18nextOptions = i18n.options && i18n.options.react || {};
        var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;

        var defaultValue = defaults || nodesToString('', children, 0);
        var hashTransKey = reactI18nextOptions.hashTransKey;
        var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
        var interpolationOverride = values ? {} : { interpolation: { prefix: '#$?', suffix: '?$#' } };
        var translation = key ? t(key, _extends$5({}, tOptions, values, interpolationOverride, { defaultValue: defaultValue, count: count, ns: namespace })) : defaultValue;

        if (reactI18nextOptions.exposeNamespace) {
          var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];
          if (i18nKey && i18n.options && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
            var parts = i18nKey.split(i18n.options.nsSeparator);
            ns = parts[0];
          }
          if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
        }

        if (!useAsParent) return renderNodes(components || children, translation, i18n);

        return React__default.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n));
      }
    }]);

    return Trans;
  }(React__default.Component);


  Trans.propTypes = {
    count: propTypes.number,
    parent: propTypes.oneOfType([propTypes.node, propTypes.func]),
    i18nKey: propTypes.string,
    i18n: propTypes.object,
    t: propTypes.func
  };

  // Trans.defaultProps = {
  //   parent: 'div'
  // };

  Trans.contextTypes = {
    i18n: propTypes.object,
    t: propTypes.func
  };

  var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var I18nextProvider = function (_Component) {
    _inherits$5(I18nextProvider, _Component);

    function I18nextProvider(props, context) {
      _classCallCheck$5(this, I18nextProvider);

      var _this = _possibleConstructorReturn$5(this, (I18nextProvider.__proto__ || Object.getPrototypeOf(I18nextProvider)).call(this, props, context));

      _this.i18n = props.i18n;
      _this.defaultNS = props.defaultNS;
      if (props.initialI18nStore) {
        _this.i18n.services.resourceStore.data = props.initialI18nStore;
        _this.i18n.options.isInitialSSR = true; // if set will be deleted on first render in translate hoc
      }
      if (props.initialLanguage) {
        _this.i18n.changeLanguage(props.initialLanguage);
      }
      _this.reportNS = props.reportNS;
      return _this;
    }

    _createClass$5(I18nextProvider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          i18n: this.i18n,
          defaultNS: this.defaultNS,
          reportNS: this.reportNS
        };
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.i18n !== nextProps.i18n) {
          throw new Error('[react-i18next][I18nextProvider]does not support changing the i18n object.');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return React.Children.only(children);
      }
    }]);

    return I18nextProvider;
  }(React.Component);

  I18nextProvider.propTypes = {
    i18n: propTypes.object.isRequired,
    children: propTypes.element.isRequired,
    defaultNS: propTypes.string,
    reportNS: propTypes.func
  };

  I18nextProvider.childContextTypes = {
    i18n: propTypes.object.isRequired,
    defaultNS: propTypes.string,
    reportNS: propTypes.func
  };

  I18nextProvider.defaultProps = {
    defaultNS: undefined,
    reportNS: undefined
  };

  var DefaultSpinner = (function (_ref) {
    var _ref$color = _ref.color,
        color = _ref$color === void 0 ? '#333' : _ref$color,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 15 : _ref$size;
    return React__default.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 38 38"
    }, React__default.createElement("defs", null, React__default.createElement("linearGradient", {
      x1: "8.042%",
      y1: "0%",
      x2: "65.682%",
      y2: "23.865%",
      id: "a"
    }, React__default.createElement("stop", {
      stopColor: color,
      stopOpacity: "0",
      offset: "0%"
    }), React__default.createElement("stop", {
      stopColor: color,
      stopOpacity: ".631",
      offset: "63.146%"
    }), React__default.createElement("stop", {
      stopColor: color,
      offset: "100%"
    }))), React__default.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, React__default.createElement("g", {
      transform: "translate(1 1)"
    }, React__default.createElement("path", {
      d: "M36 18c0-9.94-8.06-18-18-18",
      id: "Oval-2",
      stroke: "url(#a)",
      strokeWidth: "2"
    }, React__default.createElement("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 18 18",
      to: "360 18 18",
      dur: "0.75s",
      repeatCount: "indefinite"
    })), React__default.createElement("circle", {
      fill: color,
      cx: "36",
      cy: "18",
      r: "1"
    }, React__default.createElement("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 18 18",
      to: "360 18 18",
      dur: "0.75s",
      repeatCount: "indefinite"
    })))));
  });

  var Outer = styled__default.div.attrs({
    className: 'crystallize-basket-coupon'
  }).withConfig({
    displayName: "styles__Outer",
    componentId: "sg9cea-0"
  })(["margin-top:15px;"]);
  var ButtonToggle = styled__default.button.attrs({
    className: 'crystallize-basket-coupon__Toggle'
  }).withConfig({
    displayName: "styles__ButtonToggle",
    componentId: "sg9cea-1"
  })(["appearance:none;padding:0;border:none;text-decoration:none;color:#555;font-size:0.8rem;cursor:pointer;&:hover{text-decoration:underline;}"]);
  var Label = styled__default.label.attrs({
    className: 'crystallize-basket-coupon__label'
  }).withConfig({
    displayName: "styles__Label",
    componentId: "sg9cea-2"
  })(["display:block;padding-bottom:3px;"]);
  var Input = styled__default.input.attrs({
    className: 'crystallize-basket-coupon__input'
  }).withConfig({
    displayName: "styles__Input",
    componentId: "sg9cea-3"
  })(["padding:5px 8px;font-size:16px;"]);
  var ButtonRegisterWrap = styled__default.div.attrs({
    className: 'crystallize-basket-coupon__register-wrap'
  }).withConfig({
    displayName: "styles__ButtonRegisterWrap",
    componentId: "sg9cea-4"
  })(["margin-top:5px;"]);
  var ButtonRegister = styled__default.button.attrs({
    className: 'crystallize-basket-coupon__register'
  }).withConfig({
    displayName: "styles__ButtonRegister",
    componentId: "sg9cea-5"
  })(["margin-right:10px;"]);
  var ButtonRegisterCancel = styled__default.div.attrs({
    className: 'crystallize-basket-coupon__cancel'
  }).withConfig({
    displayName: "styles__ButtonRegisterCancel",
    componentId: "sg9cea-6"
  })(["margin-top:5px;"]);
  var Feedback = styled__default.div.withConfig({
    displayName: "styles__Feedback",
    componentId: "sg9cea-7"
  })(["margin:5px 0;color:red;"]);

  var CouponInner =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CouponInner, _React$Component);

    function CouponInner() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, CouponInner);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CouponInner.__proto__ || Object.getPrototypeOf(CouponInner)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {
          showInput: false,
          coupon: '',
          feedback: null
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "getInputRef", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(el) {
          return _this.inputRef = el;
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "onCouponChange", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(e) {
          return _this.setState({
            coupon: e.target.value
          });
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "onCouponKeyPress", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value(e) {
          if (e.key === 'Enter') {
            _this.register();
          }
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "register", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
          var _value = _asyncToGenerator(
          /*#__PURE__*/
          regenerator.mark(function _callee() {
            var _this$props, t, actions, state, options, setValidatingNewCoupon, setCoupon, setItems, setDiscount, items, validateEndpoint, coupon, result;

            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this$props = _this.props, t = _this$props.t, actions = _this$props.actions, state = _this$props.state, options = _this$props.options;
                    setValidatingNewCoupon = actions.setValidatingNewCoupon, setCoupon = actions.setCoupon, setItems = actions.setItems, setDiscount = actions.setDiscount;
                    items = state.items;
                    validateEndpoint = options.validateEndpoint;
                    coupon = _this.state.coupon;

                    if (coupon) {
                      _context.next = 9;
                      break;
                    }

                    _this.inputRef.focus();

                    _this.setState({
                      feedback: t('basket:fillOutCoupon')
                    });

                    return _context.abrupt("return");

                  case 9:
                    _this.setState({
                      feedback: null
                    });

                    setValidatingNewCoupon(true);
                    _context.prev = 11;
                    _context.next = 14;
                    return validateBasket({
                      items: items,
                      coupon: coupon,
                      validateEndpoint: validateEndpoint
                    });

                  case 14:
                    result = _context.sent;

                    if (result.error || result.status === 'INVALID') {
                      _this.setState({
                        feedback: t('basket:couldNotVerifyCoupon', {
                          coupon: coupon
                        })
                      });

                      _this.inputRef.focus();
                    } else {
                      setCoupon(coupon);
                      setItems(result.items);
                      setDiscount(result.discount);
                    }

                    _context.next = 21;
                    break;

                  case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](11);
                    console.warn(_context.t0); // eslint-disable-line

                  case 21:
                    setValidatingNewCoupon(false);

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[11, 18]]);
          }));

          return function value() {
            return _value.apply(this, arguments);
          };
        }()
      }), Object.defineProperty(_assertThisInitialized(_this), "showInput", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          return _this.setState({
            showInput: true
          }, function () {
            _this.inputRef.focus();
          });
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "hideInput", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          return _this.setState({
            showInput: false,
            feedback: null,
            coupon: ''
          });
        }
      }), _temp));
    }

    _createClass(CouponInner, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            showInput = _this$state.showInput,
            coupon = _this$state.coupon,
            feedback = _this$state.feedback;
        var _this$props2 = this.props,
            _this$props2$SpinnerC = _this$props2.SpinnerCmp,
            SpinnerCmp = _this$props2$SpinnerC === void 0 ? DefaultSpinner : _this$props2$SpinnerC,
            t = _this$props2.t,
            state = _this$props2.state;
        var validatingNewCoupon = state.validatingNewCoupon; // A coupon has already been registered

        if (state.coupon) {
          return null;
        }

        if (showInput) {
          var id = generateUniqueId('coupon-input');
          return React__default.createElement(Outer, null, React__default.createElement(Label, {
            htmlFor: id
          }, t('basket:inputCoupon')), React__default.createElement(Input, {
            id: id,
            innerRef: this.getInputRef,
            value: coupon,
            onChange: this.onCouponChange,
            onKeyPress: this.onCouponKeyPress,
            readOnly: validatingNewCoupon,
            placeholder: t('basket:inputCouponPlaceholder'),
            autoComplete: "off"
          }), React__default.createElement(ButtonRegisterWrap, null, feedback && React__default.createElement(Feedback, null, feedback), React__default.createElement(ButtonRegister, {
            type: "button",
            onClick: this.register,
            disabled: validatingNewCoupon
          }, t('basket:registerCoupon')), validatingNewCoupon && React__default.createElement(SpinnerCmp, {
            size: "12"
          }), React__default.createElement(ButtonRegisterCancel, null, React__default.createElement(ButtonToggle, {
            onClick: this.hideInput
          }, t('basket:cancel')))));
        }

        return React__default.createElement(Outer, null, React__default.createElement(ButtonToggle, {
          onClick: this.showInput
        }, t('basket:clickToAddCoupon')));
      }
    }]);

    return CouponInner;
  }(React__default.Component);

  var Coupon = translate(['common', 'basket'])(function (outerProps) {
    return React__default.createElement(BasketConsumer, null, function (props) {
      return React__default.createElement(CouponInner, _extends({}, props, outerProps));
    });
  });

  var Outer$1 = styled__default.div.withConfig({
    displayName: "styles__Outer",
    componentId: "zaxmdr-0"
  })(["padding:25px;"]);

  var BigBasket = function BigBasket() {
    return React__default.createElement(BasketConsumer, null, function (_ref) {
      var state = _ref.state;
      return React__default.createElement(Outer$1, null, React__default.createElement("h2", null, "The big basket has not been implemented yet"), React__default.createElement("br", null), !state.items.length ? React__default.createElement("div", null, "No items in basket") : state.items.map(function (item) {
        return React__default.createElement("div", {
          key: item.basketId
        }, item.name, " (", item.quantity, ")");
      }), React__default.createElement(Coupon, null));
    });
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
      return t;
  }

  var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
  var prevTime = 0;
  var onNextFrame = hasRAF
      ? function (callback) { return window.requestAnimationFrame(callback); }
      : function (callback) {
          var currentTime = Date.now();
          var timeToCall = Math.max(0, 16.7 - (currentTime - prevTime));
          prevTime = currentTime + timeToCall;
          setTimeout(function () { return callback(prevTime); }, timeToCall);
      };

  function createRenderStep(startRenderLoop) {
      var functionsToRun = [];
      var functionsToRunNextFrame = [];
      var numThisFrame = 0;
      var isProcessing = false;
      var i = 0;
      return {
          cancel: function (callback) {
              var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
              if (indexOfCallback !== -1) {
                  functionsToRunNextFrame.splice(indexOfCallback, 1);
              }
          },
          process: function () {
              isProcessing = true;
              _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
              functionsToRunNextFrame.length = 0;
              numThisFrame = functionsToRun.length;
              for (i = 0; i < numThisFrame; i++) {
                  functionsToRun[i]();
              }
              isProcessing = false;
              var _a;
          },
          schedule: function (callback, immediate) {
              if (immediate === void 0) { immediate = false; }
              startRenderLoop();
              var addToCurrentBuffer = immediate && isProcessing;
              var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
              if (buffer.indexOf(callback) === -1) {
                  buffer.push(callback);
                  if (addToCurrentBuffer) {
                      numThisFrame = functionsToRun.length;
                  }
              }
          },
      };
  }

  var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
  var currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return Date.now(); };
  var willRenderNextFrame = false;
  var MAX_ELAPSED = 40;
  var defaultElapsed = 16.7;
  var useDefaultElapsed = true;
  var currentFramestamp = 0;
  var elapsed = 0;
  function startRenderLoop() {
      if (willRenderNextFrame)
          return;
      willRenderNextFrame = true;
      useDefaultElapsed = true;
      onNextFrame(processFrame);
  }
  var frameStart = createRenderStep(startRenderLoop);
  var frameUpdate = createRenderStep(startRenderLoop);
  var frameRender = createRenderStep(startRenderLoop);
  var frameEnd = createRenderStep(startRenderLoop);
  function processFrame(framestamp) {
      willRenderNextFrame = false;
      elapsed = useDefaultElapsed
          ? defaultElapsed
          : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
      if (!useDefaultElapsed)
          defaultElapsed = elapsed;
      currentFramestamp = framestamp;
      frameStart.process();
      frameUpdate.process();
      frameRender.process();
      frameEnd.process();
      if (willRenderNextFrame)
          useDefaultElapsed = false;
  }
  var onFrameUpdate = frameUpdate.schedule;
  var onFrameRender = frameRender.schedule;
  var onFrameEnd = frameEnd.schedule;
  var cancelOnFrameUpdate = frameUpdate.cancel;
  var timeSinceLastFrame = function () { return elapsed; };
  var currentFrameTime = function () { return currentFramestamp; };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign$1 = function() {
      __assign$1 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$1.apply(this, arguments);
  };

  var clamp = function (min, max) { return function (v) {
      return Math.max(Math.min(v, max), min);
  }; };
  var isFirstChars = function (term) { return function (v) {
      return typeof v === 'string' && v.indexOf(term) === 0;
  }; };
  var getValueFromFunctionString = function (value) {
      return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
  };
  var splitCommaDelimited = function (value) {
      return typeof value === 'string' ? value.split(/,\s*/) : [value];
  };
  var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };

  var number = {
      test: function (v) { return typeof v === 'number'; },
      parse: parseFloat,
      transform: function (v) { return v; }
  };
  var alpha = __assign$1({}, number, { transform: clamp(0, 1) });
  var scale = __assign$1({}, number, { default: 1 });

  var createUnitType = function (unit) { return ({
      test: function (v) {
          return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
      },
      parse: parseFloat,
      transform: function (v) { return "" + v + unit; }
  }); };
  var degrees = createUnitType('deg');
  var percent = createUnitType('%');
  var px = createUnitType('px');
  var vh = createUnitType('vh');
  var vw = createUnitType('vw');

  var clampRgbUnit = clamp(0, 255);
  var onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;
  var isRgba = function (v) { return v.red !== undefined; };
  var isHsla = function (v) { return v.hue !== undefined; };
  var splitColorValues = function (terms) {
      var numTerms = terms.length;
      return function (v) {
          if (typeof v !== 'string')
              return v;
          var values = {};
          var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
          for (var i = 0; i < numTerms; i++) {
              values[terms[i]] =
                  valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
          }
          return values;
      };
  };
  var rgbaTemplate = function (_a) {
      var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
      return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
  };
  var hslaTemplate = function (_a) {
      var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
      return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
  };
  var rgbUnit = __assign$1({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
  var testRgbaString = isFirstChars('rgb');
  var rgba = {
      test: function (v) { return (typeof v === 'string' ? testRgbaString(v) : isRgba(v)); },
      parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
      transform: function (_a) {
          var red = _a.red, green = _a.green, blue = _a.blue, alpha$$1 = _a.alpha;
          return rgbaTemplate({
              red: rgbUnit.transform(red),
              green: rgbUnit.transform(green),
              blue: rgbUnit.transform(blue),
              alpha: sanitize(alpha$$1)
          });
      }
  };
  var testHslaString = isFirstChars('hsl');
  var hsla = {
      test: function (v) { return (typeof v === 'string' ? testHslaString(v) : isHsla(v)); },
      parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
      transform: function (_a) {
          var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha$$1 = _a.alpha;
          return hslaTemplate({
              hue: Math.round(hue),
              saturation: percent.transform(sanitize(saturation)),
              lightness: percent.transform(sanitize(lightness)),
              alpha: sanitize(alpha$$1)
          });
      }
  };
  var hex = __assign$1({}, rgba, { test: isFirstChars('#'), parse: function (v) {
          var r = '';
          var g = '';
          var b = '';
          if (v.length > 4) {
              r = v.substr(1, 2);
              g = v.substr(3, 2);
              b = v.substr(5, 2);
          }
          else {
              r = v.substr(1, 1);
              g = v.substr(2, 1);
              b = v.substr(3, 1);
              r += r;
              g += g;
              b += b;
          }
          return {
              red: parseInt(r, 16),
              green: parseInt(g, 16),
              blue: parseInt(b, 16),
              alpha: 1
          };
      } });
  var color = {
      test: function (v) {
          return (typeof v === 'string' && onlyColorRegex.test(v)) ||
              rgba.test(v) ||
              hsla.test(v) ||
              hex.test(v);
      },
      parse: function (v) {
          if (rgba.test(v)) {
              return rgba.parse(v);
          }
          else if (hsla.test(v)) {
              return hsla.parse(v);
          }
          else if (hex.test(v)) {
              return hex.parse(v);
          }
          return v;
      },
      transform: function (v) {
          if (isRgba(v)) {
              return rgba.transform(v);
          }
          else if (isHsla(v)) {
              return hsla.transform(v);
          }
          return v;
      }
  };

  var floatRegex = /(-)?(\d[\d\.]*)/g;
  var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
  var COLOR_TOKEN = '${c}';
  var NUMBER_TOKEN = '${n}';
  var complex = {
      test: function (v) {
          if (typeof v !== 'string' || !isNaN(v))
              return false;
          var numValues = 0;
          var foundNumbers = v.match(floatRegex);
          var foundColors = v.match(colorRegex);
          if (foundNumbers)
              numValues += foundNumbers.length;
          if (foundColors)
              numValues += foundColors.length;
          return numValues > 0;
      },
      parse: function (v) {
          var input = v;
          var parsed = [];
          var foundColors = input.match(colorRegex);
          if (foundColors) {
              input = input.replace(colorRegex, COLOR_TOKEN);
              parsed.push.apply(parsed, foundColors.map(color.parse));
          }
          var foundNumbers = input.match(floatRegex);
          if (foundNumbers) {
              parsed.push.apply(parsed, foundNumbers.map(number.parse));
          }
          return parsed;
      },
      createTransformer: function (prop) {
          var template = prop;
          var token = 0;
          var foundColors = prop.match(colorRegex);
          var numColors = foundColors ? foundColors.length : 0;
          if (foundColors) {
              for (var i = 0; i < numColors; i++) {
                  template = template.replace(foundColors[i], COLOR_TOKEN);
                  token++;
              }
          }
          var foundNumbers = template.match(floatRegex);
          var numNumbers = foundNumbers ? foundNumbers.length : 0;
          if (foundNumbers) {
              for (var i = 0; i < numNumbers; i++) {
                  template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                  token++;
              }
          }
          return function (v) {
              var output = template;
              for (var i = 0; i < token; i++) {
                  output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
              }
              return output;
          };
      }
  };

  var HEY_LISTEN = 'Hey, listen! ';
  var invariant = function () { };
  if (process.env.NODE_ENV !== 'production') {
      invariant = function (check, message) {
          if (!check) {
              throw new Error(HEY_LISTEN.toUpperCase() + message);
          }
      };
  }

  var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
  var reversed = function (easing) {
      return function (p) {
          return 1 - easing(1 - p);
      };
  };
  var mirrored = function (easing) {
      return function (p) {
          return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
      };
  };
  var createExpoIn = function (power) {
      return function (p) {
          return Math.pow(p, power);
      };
  };
  var createBackIn = function (power) {
      return function (p) {
          return p * p * ((power + 1) * p - power);
      };
  };
  var createAnticipateEasing = function (power) {
      var backEasing = createBackIn(power);
      return function (p) {
          return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
      };
  };
  var linear = function (p) {
      return p;
  };
  var easeIn = /*#__PURE__*/createExpoIn(2);
  var easeOut = /*#__PURE__*/reversed(easeIn);
  var easeInOut = /*#__PURE__*/mirrored(easeIn);
  var circIn = function (p) {
      return 1 - Math.sin(Math.acos(p));
  };
  var circOut = /*#__PURE__*/reversed(circIn);
  var circInOut = /*#__PURE__*/mirrored(circOut);
  var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
  var backOut = /*#__PURE__*/reversed(backIn);
  var backInOut = /*#__PURE__*/mirrored(backIn);
  var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
  var NEWTON_ITERATIONS = 8;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var K_SPLINE_TABLE_SIZE = 11;
  var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
  var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
  var a = function (a1, a2) {
      return 1.0 - 3.0 * a2 + 3.0 * a1;
  };
  var b = function (a1, a2) {
      return 3.0 * a2 - 6.0 * a1;
  };
  var c = function (a1) {
      return 3.0 * a1;
  };
  var getSlope = function (t, a1, a2) {
      return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
  };
  var calcBezier = function (t, a1, a2) {
      return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  };
  function cubicBezier(mX1, mY1, mX2, mY2) {
      var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
      var binarySubdivide = function (aX, aA, aB) {
          var i = 0;
          var currentX;
          var currentT;
          do {
              currentT = aA + (aB - aA) / 2.0;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0.0) {
                  aB = currentT;
              } else {
                  aA = currentT;
              }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
      };
      var newtonRaphsonIterate = function (aX, aGuessT) {
          var i = 0;
          var currentSlope = 0;
          var currentX;
          for (; i < NEWTON_ITERATIONS; ++i) {
              currentSlope = getSlope(aGuessT, mX1, mX2);
              if (currentSlope === 0.0) {
                  return aGuessT;
              }
              currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
      };
      var calcSampleValues = function () {
          for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
              sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
          }
      };
      var getTForX = function (aX) {
          var intervalStart = 0.0;
          var currentSample = 1;
          var lastSample = K_SPLINE_TABLE_SIZE - 1;
          var dist = 0.0;
          var guessForT = 0.0;
          var initialSlope = 0.0;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += K_SAMPLE_STEP_SIZE;
          }
          --currentSample;
          dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
          initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT);
          } else if (initialSlope === 0.0) {
              return guessForT;
          } else {
              return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
          }
      };
      calcSampleValues();
      var resolver = function (aX) {
          var returnValue;
          if (mX1 === mY1 && mX2 === mY2) {
              returnValue = aX;
          } else if (aX === 0) {
              returnValue = 0;
          } else if (aX === 1) {
              returnValue = 1;
          } else {
              returnValue = calcBezier(getTForX(aX), mY1, mY2);
          }
          return returnValue;
      };
      return resolver;
  }

  var createStyler = function (_a) {
      var onRead = _a.onRead,
          onRender = _a.onRender,
          _b = _a.aliasMap,
          aliasMap = _b === void 0 ? {} : _b,
          _c = _a.useCache,
          useCache = _c === void 0 ? true : _c;
      return function (props) {
          var state = {};
          var changedValues = [];
          var hasChanged = false;
          var setValue = function (unmappedKey, value) {
              var key = aliasMap[unmappedKey] || unmappedKey;
              var currentValue = state[key];
              state[key] = value;
              if (state[key] !== currentValue) {
                  if (changedValues.indexOf(key) === -1) {
                      changedValues.push(key);
                  }
                  if (!hasChanged) {
                      hasChanged = true;
                      onFrameRender(render);
                  }
              }
          };
          function render(forceRender) {
              if (forceRender === void 0) {
                  forceRender = false;
              }
              if (forceRender || hasChanged) {
                  onRender(state, props, changedValues);
                  hasChanged = false;
                  changedValues.length = 0;
              }
              return this;
          }
          return {
              get: function (unmappedKey) {
                  var key = aliasMap[unmappedKey] || unmappedKey;
                  return key ? useCache && state[key] !== undefined ? state[key] : onRead(key, props) : state;
              },
              set: function (values, value) {
                  if (typeof values === 'string') {
                      if (value !== undefined) {
                          setValue(values, value);
                      } else {
                          return function (v) {
                              return setValue(values, v);
                          };
                      }
                  } else {
                      for (var key in values) {
                          if (values.hasOwnProperty(key)) {
                              setValue(key, values[key]);
                          }
                      }
                  }
                  return this;
              },
              render: render
          };
      };
  };

  var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
  var REPLACE_TEMPLATE = '$1-$2';
  var camelToDash = function (str) {
      return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
  };
  var setDomAttrs = function (element, attrs) {
      for (var key in attrs) {
          if (attrs.hasOwnProperty(key)) {
              element.setAttribute(key, attrs[key]);
          }
      }
  };

  var camelCache = /*#__PURE__*/new Map();
  var dashCache = /*#__PURE__*/new Map();
  var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
  var numPrefixes = prefixes.length;
  var testElement;
  var testPrefix = function (key) {
      if (typeof document === 'undefined') return;
      testElement = testElement || document.createElement('div');
      for (var i = 0; i < numPrefixes; i++) {
          var prefix = prefixes[i];
          var noPrefix = prefix === '';
          var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
          if (prefixedPropertyName in testElement.style) {
              camelCache.set(key, prefixedPropertyName);
              dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
          }
      }
  };
  var prefixer = function (key, asDashCase) {
      if (asDashCase === void 0) {
          asDashCase = false;
      }
      var cache = asDashCase ? dashCache : camelCache;
      if (!cache.has(key)) testPrefix(key);
      return cache.get(key) || key;
  };

  var axes = ['', 'X', 'Y', 'Z'];
  var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
  var TRANSFORM_ORIGIN_X = 'transformOriginX';
  var TRANSFORM_ORIGIN_Y = 'transformOriginY';
  var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
      return axes.reduce(function (axesAcc, axesKey) {
          axesAcc.push(key + axesKey);
          return axesAcc;
      }, acc);
  }, ['x', 'y', 'z']);
  var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
      dict[key] = true;
      return dict;
  }, {});
  var isTransformProp = function (key) {
      return transformPropDictionary[key] === true;
  };
  var sortTransformProps = function (a, b) {
      return transformProps.indexOf(a) - transformProps.indexOf(b);
  };
  var isTransformOriginProp = function (key) {
      return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y;
  };

  var valueTypes = {
      color: color,
      backgroundColor: color,
      outlineColor: color,
      fill: color,
      stroke: color,
      borderColor: color,
      borderTopColor: color,
      borderRightColor: color,
      borderBottomColor: color,
      borderLeftColor: color,
      borderRadius: px,
      width: px,
      maxWidth: px,
      height: px,
      maxHeight: px,
      top: px,
      left: px,
      bottom: px,
      right: px,
      rotate: degrees,
      rotateX: degrees,
      rotateY: degrees,
      rotateZ: degrees,
      scale: scale,
      scaleX: scale,
      scaleY: scale,
      scaleZ: scale,
      skewX: degrees,
      skewY: degrees,
      distance: px,
      translateX: px,
      translateY: px,
      translateZ: px,
      perspective: px,
      opacity: alpha,
      transformOriginX: percent,
      transformOriginY: percent,
      transformOriginZ: px
  };
  var getValueType = function (key) {
      return valueTypes[key];
  };

  var aliasMap = {
      x: 'translateX',
      y: 'translateY',
      z: 'translateZ',
      originX: 'transformOriginX',
      originY: 'transformOriginY',
      originZ: 'transformOriginZ'
  };
  var NUMBER = 'number';
  var OBJECT = 'object';
  var COLON = ':';
  var SEMI_COLON = ';';
  var TRANSFORM_ORIGIN = 'transform-origin';
  var TRANSFORM = 'transform';
  var TRANSLATE_Z = 'translateZ';
  var TRANSFORM_NONE = ';transform: none';
  var styleRule = function (key, value) {
      return "" + SEMI_COLON + key + COLON + value;
  };
  function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
      if (changedValues === void 0) {
          changedValues = true;
      }
      if (enableHardwareAcceleration === void 0) {
          enableHardwareAcceleration = true;
      }
      var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
      var propertyString = '';
      var transformString = '';
      var hasTransformOrigin = false;
      var transformIsDefault = true;
      var hasTransform = false;
      var transformHasZ = false;
      var numChangedValues = valuesToChange.length;
      for (var i = 0; i < numChangedValues; i++) {
          var key = valuesToChange[i];
          if (isTransformProp(key)) {
              hasTransform = true;
              for (var stateKey in state) {
                  if (isTransformProp(stateKey) && valuesToChange.indexOf(stateKey) === -1) {
                      valuesToChange.push(stateKey);
                  }
              }
              break;
          }
      }
      valuesToChange.sort(sortTransformProps);
      var totalNumChangedValues = valuesToChange.length;
      for (var i = 0; i < totalNumChangedValues; i++) {
          var key = valuesToChange[i];
          if (blacklist.has(key)) continue;
          var isTransformKey = isTransformProp(key);
          var value = state[key];
          var valueType = getValueType(key);
          if (isTransformKey) {
              if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                  transformIsDefault = false;
              }
          }
          if (valueType && (typeof value === NUMBER || typeof value === OBJECT) && valueType.transform) {
              value = valueType.transform(value);
          }
          if (isTransformKey) {
              transformString += key + '(' + value + ') ';
              transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
          } else if (isTransformOriginProp(key)) {
              state[key] = value;
              hasTransformOrigin = true;
          } else {
              propertyString += styleRule(prefixer(key, true), value);
          }
      }
      if (hasTransformOrigin) {
          propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY || 0) + " " + (state.transformOriginZ || 0));
      }
      if (hasTransform) {
          if (!transformHasZ && enableHardwareAcceleration) {
              transformString += TRANSLATE_Z + "(0)";
          }
          propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
      }
      return propertyString;
  }

  var SCROLL_LEFT = 'scrollLeft';
  var SCROLL_TOP = 'scrollTop';
  var scrollValues = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);
  var cssStyler = /*#__PURE__*/createStyler({
      onRead: function (key, _a) {
          var element = _a.element,
              preparseOutput = _a.preparseOutput;
          var valueType = getValueType(key);
          if (isTransformProp(key)) {
              return valueType ? valueType.default || 0 : 0;
          } else if (scrollValues.has(key)) {
              return element[key];
          } else {
              var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
              return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
          }
      },
      onRender: function (state, _a, changedValues) {
          var element = _a.element,
              enableHardwareAcceleration = _a.enableHardwareAcceleration;
          element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
          if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
          if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
      },
      aliasMap: aliasMap,
      uncachedValues: scrollValues
  });
  var css = function (element, props) {
      return cssStyler(__assign({ element: element, enableHardwareAcceleration: true, preparseOutput: true }, props));
  };

  var ZERO_NOT_ZERO = 0.0000001;
  var percentToPixels = function (percent$$1, length) {
      return percent$$1 / 100 * length + 'px';
  };
  var build = function (state, dimensions, isPath, pathLength) {
      var hasTransform = false;
      var hasDashArray = false;
      var props = {};
      var dashArrayStyles = isPath ? {
          pathLength: '0',
          pathSpacing: "" + pathLength
      } : undefined;
      var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
      var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
      var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
      var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
      var scaleTransformX = -transformOriginX * (scale$$1 * 1);
      var scaleTransformY = -transformOriginY * (scaleY * 1);
      var scaleReplaceX = transformOriginX / scale$$1;
      var scaleReplaceY = transformOriginY / scaleY;
      var transform = {
          translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
          scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
          rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
          skewX: "skewX(" + state.skewX + ") ",
          skewY: "skewY(" + state.skewY + ") "
      };
      for (var key in state) {
          if (state.hasOwnProperty(key)) {
              var value = state[key];
              if (isTransformProp(key)) {
                  hasTransform = true;
              } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                  hasDashArray = true;
                  dashArrayStyles[key] = percentToPixels(value, pathLength);
              } else if (isPath && key === 'pathOffset') {
                  props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
              } else {
                  props[camelToDash(key)] = value;
              }
          }
      }
      if (hasDashArray) {
          props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
      }
      if (hasTransform) {
          props.transform = '';
          for (var key in transform) {
              if (transform.hasOwnProperty(key)) {
                  var defaultValue = key === 'scale' ? '1' : '0';
                  props.transform += transform[key].replace(/undefined/g, defaultValue);
              }
          }
      }
      return props;
  };

  var valueTypes$1 = {
      fill: color,
      stroke: color,
      scale: scale,
      scaleX: scale,
      scaleY: scale,
      opacity: alpha,
      fillOpacity: alpha,
      strokeOpacity: alpha
  };
  var getValueType$1 = function (key) {
      return valueTypes$1[key];
  };

  var svgStyler = /*#__PURE__*/createStyler({
      onRead: function (key, _a) {
          var element = _a.element;
          if (!isTransformProp(key)) {
              return element.getAttribute(key);
          } else {
              var valueType = getValueType$1(key);
              return valueType ? valueType.default : 0;
          }
      },
      onRender: function (state, _a, changedValues) {
          var dimensions = _a.dimensions,
              element = _a.element,
              isPath = _a.isPath,
              pathLength = _a.pathLength;
          setDomAttrs(element, build(state, dimensions, isPath, pathLength));
      },
      aliasMap: {
          x: 'translateX',
          y: 'translateY',
          background: 'fill'
      }
  });
  var svg = function (element) {
      var _a = element.getBBox(),
          x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height;
      var props = {
          element: element,
          dimensions: { x: x, y: y, width: width, height: height },
          isPath: false
      };
      if (element.tagName === 'path') {
          props.isPath = true;
          props.pathLength = element.getTotalLength();
      }
      return svgStyler(props);
  };

  var viewport = /*#__PURE__*/createStyler({
      useCache: false,
      onRead: function (key) {
          return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
      },
      onRender: function (_a) {
          var _b = _a.scrollTop,
              scrollTop = _b === void 0 ? 0 : _b,
              _c = _a.scrollLeft,
              scrollLeft = _c === void 0 ? 0 : _c;
          return window.scrollTo(scrollLeft, scrollTop);
      }
  });

  var cache = /*#__PURE__*/new WeakMap();
  var createDOMStyler = function (node, props) {
      var styler;
      if (node instanceof HTMLElement) {
          styler = css(node, props);
      } else if (node instanceof SVGElement) {
          styler = svg(node);
      } else if (typeof window !== 'undefined' && node === window) {
          styler = viewport(node);
      }
      invariant(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
      cache.set(node, styler);
      return styler;
  };
  var getStyler = function (node, props) {
      return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
  };
  function index(nodeOrSelector, props) {
      var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
      return getStyler(node, props);
  }

  var isNum = function (v) {
      return typeof v === 'number';
  };
  var isPoint = function (point) {
      return point.x !== undefined && point.y !== undefined;
  };
  var isPoint3D = function (point) {
      return point.z !== undefined;
  };
  var toDecimal = function (num, precision) {
      if (precision === void 0) {
          precision = 2;
      }
      precision = Math.pow(10, precision);
      return Math.round(num * precision) / precision;
  };
  var ZERO_POINT = {
      x: 0,
      y: 0,
      z: 0
  };
  var distance1D = function (a, b) {
      return Math.abs(a - b);
  };
  var angle = function (a, b) {
      if (b === void 0) {
          b = ZERO_POINT;
      }
      return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
  };
  var degreesToRadians = function (degrees$$1) {
      return degrees$$1 * Math.PI / 180;
  };
  var dilate = function (a, b, dilation) {
      return a + (b - a) * dilation;
  };
  var distance = function (a, b) {
      if (b === void 0) {
          b = ZERO_POINT;
      }
      if (isNum(a) && isNum(b)) {
          return distance1D(a, b);
      } else if (isPoint(a) && isPoint(b)) {
          var xDelta = distance1D(a.x, b.x);
          var yDelta = distance1D(a.y, b.y);
          var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
          return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
      }
      return 0;
  };
  var getProgressFromValue = function (from, to, value) {
      var toFromDifference = to - from;
      return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };
  var getValueFromProgress = function (from, to, progress) {
      return -progress * from + progress * to + from;
  };
  var pointFromAngleAndDistance = function (origin, angle, distance) {
      angle = degreesToRadians(angle);
      return {
          x: distance * Math.cos(angle) + origin.x,
          y: distance * Math.sin(angle) + origin.y
      };
  };
  var radiansToDegrees = function (radians) {
      return radians * 180 / Math.PI;
  };
  var smooth = function (newValue, oldValue, duration, smoothing) {
      if (smoothing === void 0) {
          smoothing = 0;
      }
      return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
  };
  var speedPerFrame = function (xps, frameDuration) {
      return isNum(xps) ? xps / (1000 / frameDuration) : 0;
  };
  var speedPerSecond = function (velocity, frameDuration) {
      return frameDuration ? velocity * (1000 / frameDuration) : 0;
  };
  var stepProgress = function (steps, progress) {
      var segment = 1 / (steps - 1);
      var target = 1 - 1 / steps;
      var progressOfTarget = Math.min(progress / target, 1);
      return Math.floor(progressOfTarget / segment) * segment;
  };

  var calc = /*#__PURE__*/Object.freeze({
      isPoint: isPoint,
      isPoint3D: isPoint3D,
      angle: angle,
      degreesToRadians: degreesToRadians,
      dilate: dilate,
      distance: distance,
      getProgressFromValue: getProgressFromValue,
      getValueFromProgress: getValueFromProgress,
      pointFromAngleAndDistance: pointFromAngleAndDistance,
      radiansToDegrees: radiansToDegrees,
      smooth: smooth,
      speedPerFrame: speedPerFrame,
      speedPerSecond: speedPerSecond,
      stepProgress: stepProgress
  });

  var identity = function (v) {
      return v;
  };
  var appendUnit = function (unit) {
      return function (v) {
          return "" + v + unit;
      };
  };
  var applyOffset = function (from, to) {
      var hasReceivedFrom = true;
      if (to === undefined) {
          to = from;
          hasReceivedFrom = false;
      }
      var getOffset = function (v) {
          return v - from;
      };
      var applyOffsetTo = function (v) {
          return v + to;
      };
      return function (v) {
          if (hasReceivedFrom) {
              return applyOffsetTo(getOffset(v));
          } else {
              from = v;
              hasReceivedFrom = true;
              return to;
          }
      };
  };
  var blend = function (from, to, v) {
      var fromExpo = from * from;
      var toExpo = to * to;
      return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
  };
  var blendColor = function (from, to) {
      var fromColor = typeof from === 'string' ? color.parse(from) : from;
      var toColor = typeof to === 'string' ? color.parse(to) : to;
      var blended = __assign({}, fromColor);
      var blendFunc = from.hue !== undefined || typeof from === 'string' && hsla.test(from) ? getValueFromProgress : blend;
      return function (v) {
          blended = __assign({}, blended);
          for (var key in blended) {
              if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                  blended[key] = blendFunc(fromColor[key], toColor[key], v);
              }
          }
          blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
          return blended;
      };
  };
  var blendArray = function (from, to) {
      var output = from.slice();
      var numValues = output.length;
      var blendValue = from.map(function (fromThis, i) {
          var toThis = to[i];
          return typeof fromThis === 'number' ? function (v) {
              return getValueFromProgress(fromThis, toThis, v);
          } : blendColor(fromThis, toThis);
      });
      return function (v) {
          for (var i = 0; i < numValues; i++) {
              output[i] = blendValue[i](v);
          }
          return output;
      };
  };
  var clamp$1 = function (min, max) {
      return function (v) {
          return Math.min(Math.max(v, min), max);
      };
  };
  var combineFunctions = function (a, b) {
      return function (v) {
          return b(a(v));
      };
  };
  var pipe = function () {
      var transformers = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          transformers[_i] = arguments[_i];
      }
      return transformers.reduce(combineFunctions);
  };
  var conditional = function (check, apply) {
      return function (v) {
          return check(v) ? apply(v) : v;
      };
  };
  var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
      var finalIndex = rangeLength - 1;
      if (input[0] > input[finalIndex]) {
          input.reverse();
          output.reverse();
      }
      return function (v) {
          if (v <= input[0]) {
              return output[0];
          }
          if (v >= input[finalIndex]) {
              return output[finalIndex];
          }
          var i = 1;
          for (; i < rangeLength; i++) {
              if (input[i] > v || i === finalIndex) {
                  break;
              }
          }
          var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
          var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
          return getValueFromProgress(output[i - 1], output[i], easedProgress);
      };
  };
  var fastInterpolate = function (minA, maxA, minB, maxB) {
      return function (v) {
          return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
      };
  };
  var interpolate = function (input, output, rangeEasing) {
      var rangeLength = input.length;
      return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
  };
  var generateStaticSpring = function (alterDisplacement) {
      if (alterDisplacement === void 0) {
          alterDisplacement = identity;
      }
      return function (constant, origin) {
          return function (v) {
              var displacement = origin - v;
              var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
              return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
          };
      };
  };
  var linearSpring = /*#__PURE__*/generateStaticSpring();
  var nonlinearSpring = /*#__PURE__*/generateStaticSpring(Math.sqrt);
  var wrap = function (min, max) {
      return function (v) {
          var rangeSize = max - min;
          return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
      };
  };
  var smooth$1 = function (strength) {
      if (strength === void 0) {
          strength = 50;
      }
      var previousValue = 0;
      var lastUpdated = 0;
      return function (v) {
          var currentFramestamp = currentFrameTime();
          var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
          var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
          lastUpdated = currentFramestamp;
          previousValue = newValue;
          return newValue;
      };
  };
  var snap = function (points) {
      if (typeof points === 'number') {
          return function (v) {
              return Math.round(v / points) * points;
          };
      } else {
          var i_1 = 0;
          var numPoints_1 = points.length;
          return function (v) {
              var lastDistance = Math.abs(points[0] - v);
              for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                  var point = points[i_1];
                  var distance$$1 = Math.abs(point - v);
                  if (distance$$1 === 0) return point;
                  if (distance$$1 > lastDistance) return points[i_1 - 1];
                  if (i_1 === numPoints_1 - 1) return point;
                  lastDistance = distance$$1;
              }
          };
      }
  };
  var steps = function (st, min, max) {
      if (min === void 0) {
          min = 0;
      }
      if (max === void 0) {
          max = 1;
      }
      return function (v) {
          var progress = getProgressFromValue(min, max, v);
          return getValueFromProgress(min, max, stepProgress(st, progress));
      };
  };
  var transformMap = function (childTransformers) {
      return function (v) {
          var output = __assign({}, v);
          for (var key in childTransformers) {
              if (childTransformers.hasOwnProperty(key)) {
                  var childTransformer = childTransformers[key];
                  output[key] = childTransformer(v[key]);
              }
          }
          return output;
      };
  };

  var transformers = /*#__PURE__*/Object.freeze({
      appendUnit: appendUnit,
      applyOffset: applyOffset,
      blendColor: blendColor,
      blendArray: blendArray,
      clamp: clamp$1,
      pipe: pipe,
      conditional: conditional,
      interpolate: interpolate,
      generateStaticSpring: generateStaticSpring,
      linearSpring: linearSpring,
      nonlinearSpring: nonlinearSpring,
      wrap: wrap,
      smooth: smooth$1,
      snap: snap,
      steps: steps,
      transformMap: transformMap
  });

  var Chainable = /*#__PURE__*/function () {
      function Chainable(props) {
          if (props === void 0) {
              props = {};
          }
          this.props = props;
      }
      Chainable.prototype.applyMiddleware = function (middleware) {
          return this.create(__assign({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
      };
      Chainable.prototype.pipe = function () {
          var funcs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              funcs[_i] = arguments[_i];
          }
          var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
          return this.applyMiddleware(function (update) {
              return function (v) {
                  return update(pipedUpdate(v));
              };
          });
      };
      Chainable.prototype.while = function (predicate) {
          return this.applyMiddleware(function (update, complete) {
              return function (v) {
                  return predicate(v) ? update(v) : complete();
              };
          });
      };
      Chainable.prototype.filter = function (predicate) {
          return this.applyMiddleware(function (update) {
              return function (v) {
                  return predicate(v) && update(v);
              };
          });
      };
      return Chainable;
  }();

  var Observer = /*#__PURE__*/function () {
      function Observer(_a, observer) {
          var middleware = _a.middleware,
              onComplete = _a.onComplete;
          var _this = this;
          this.isActive = true;
          this.update = function (v) {
              if (_this.observer.update) _this.updateObserver(v);
          };
          this.complete = function () {
              if (_this.observer.complete && _this.isActive) _this.observer.complete();
              if (_this.onComplete) _this.onComplete();
              _this.isActive = false;
          };
          this.error = function (err) {
              if (_this.observer.error && _this.isActive) _this.observer.error(err);
              _this.isActive = false;
          };
          this.observer = observer;
          this.updateObserver = function (v) {
              return observer.update(v);
          };
          this.onComplete = onComplete;
          if (observer.update && middleware && middleware.length) {
              middleware.forEach(function (m) {
                  return _this.updateObserver = m(_this.updateObserver, _this.complete);
              });
          }
      }
      return Observer;
  }();
  var createObserver = function (observerCandidate, _a, onComplete) {
      var middleware = _a.middleware;
      if (typeof observerCandidate === 'function') {
          return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
      } else {
          return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
      }
  };

  var Action = /*#__PURE__*/function (_super) {
      __extends(Action, _super);
      function Action() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Action.prototype.create = function (props) {
          return new Action(props);
      };
      Action.prototype.start = function (observerCandidate) {
          if (observerCandidate === void 0) {
              observerCandidate = {};
          }
          var isComplete = false;
          var subscription = {
              stop: function () {
                  return undefined;
              }
          };
          var _a = this.props,
              init = _a.init,
              observerProps = __rest(_a, ["init"]);
          var observer = createObserver(observerCandidate, observerProps, function () {
              isComplete = true;
              subscription.stop();
          });
          var api = init(observer);
          subscription = api ? __assign({}, subscription, api) : subscription;
          if (observerCandidate.registerParent) {
              observerCandidate.registerParent(subscription);
          }
          if (isComplete) subscription.stop();
          return subscription;
      };
      return Action;
  }(Chainable);
  var action = function (init) {
      return new Action({ init: init });
  };

  var BaseMulticast = /*#__PURE__*/function (_super) {
      __extends(BaseMulticast, _super);
      function BaseMulticast() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.subscribers = [];
          return _this;
      }
      BaseMulticast.prototype.complete = function () {
          this.subscribers.forEach(function (subscriber) {
              return subscriber.complete();
          });
      };
      BaseMulticast.prototype.error = function (err) {
          this.subscribers.forEach(function (subscriber) {
              return subscriber.error(err);
          });
      };
      BaseMulticast.prototype.update = function (v) {
          for (var i = 0; i < this.subscribers.length; i++) {
              this.subscribers[i].update(v);
          }
      };
      BaseMulticast.prototype.subscribe = function (observerCandidate) {
          var _this = this;
          var observer = createObserver(observerCandidate, this.props);
          this.subscribers.push(observer);
          var subscription = {
              unsubscribe: function () {
                  var index$$1 = _this.subscribers.indexOf(observer);
                  if (index$$1 !== -1) _this.subscribers.splice(index$$1, 1);
              }
          };
          return subscription;
      };
      BaseMulticast.prototype.stop = function () {
          if (this.parent) this.parent.stop();
      };
      BaseMulticast.prototype.registerParent = function (subscription) {
          this.stop();
          this.parent = subscription;
      };
      return BaseMulticast;
  }(Chainable);

  var Multicast = /*#__PURE__*/function (_super) {
      __extends(Multicast, _super);
      function Multicast() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Multicast.prototype.create = function (props) {
          return new Multicast(props);
      };
      return Multicast;
  }(BaseMulticast);

  var isValueList = function (v) {
      return Array.isArray(v);
  };
  var isSingleValue = function (v) {
      var typeOfV = typeof v;
      return typeOfV === 'string' || typeOfV === 'number';
  };
  var ValueReaction = /*#__PURE__*/function (_super) {
      __extends(ValueReaction, _super);
      function ValueReaction(props) {
          var _this = _super.call(this, props) || this;
          _this.scheduleVelocityCheck = function () {
              return onFrameEnd(_this.velocityCheck);
          };
          _this.velocityCheck = function () {
              if (currentFrameTime() !== _this.lastUpdated) {
                  _this.prev = _this.current;
              }
          };
          _this.prev = _this.current = props.value || 0;
          if (isSingleValue(_this.current)) {
              _this.updateCurrent = function (v) {
                  return _this.current = v;
              };
              _this.getVelocityOfCurrent = function () {
                  return _this.getSingleVelocity(_this.current, _this.prev);
              };
          } else if (isValueList(_this.current)) {
              _this.updateCurrent = function (v) {
                  return _this.current = v.slice();
              };
              _this.getVelocityOfCurrent = function () {
                  return _this.getListVelocity();
              };
          } else {
              _this.updateCurrent = function (v) {
                  _this.current = {};
                  for (var key in v) {
                      if (v.hasOwnProperty(key)) {
                          _this.current[key] = v[key];
                      }
                  }
              };
              _this.getVelocityOfCurrent = function () {
                  return _this.getMapVelocity();
              };
          }
          if (props.initialSubscription) _this.subscribe(props.initialSubscription);
          return _this;
      }
      ValueReaction.prototype.create = function (props) {
          return new ValueReaction(props);
      };
      ValueReaction.prototype.get = function () {
          return this.current;
      };
      ValueReaction.prototype.getVelocity = function () {
          return this.getVelocityOfCurrent();
      };
      ValueReaction.prototype.update = function (v) {
          _super.prototype.update.call(this, v);
          this.prev = this.current;
          this.updateCurrent(v);
          this.timeDelta = timeSinceLastFrame();
          this.lastUpdated = currentFrameTime();
          onFrameEnd(this.scheduleVelocityCheck);
      };
      ValueReaction.prototype.subscribe = function (observerCandidate) {
          var sub = _super.prototype.subscribe.call(this, observerCandidate);
          this.update(this.current);
          return sub;
      };
      ValueReaction.prototype.getSingleVelocity = function (current, prev) {
          return typeof current === 'number' && typeof prev === 'number' ? speedPerSecond(current - prev, this.timeDelta) : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
      };
      ValueReaction.prototype.getListVelocity = function () {
          var _this = this;
          return this.current.map(function (c, i) {
              return _this.getSingleVelocity(c, _this.prev[i]);
          });
      };
      ValueReaction.prototype.getMapVelocity = function () {
          var velocity = {};
          for (var key in this.current) {
              if (this.current.hasOwnProperty(key)) {
                  velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
              }
          }
          return velocity;
      };
      return ValueReaction;
  }(BaseMulticast);
  var value = function (value, initialSubscription) {
      return new ValueReaction({ value: value, initialSubscription: initialSubscription });
  };

  var multi = function (_a) {
      var getCount = _a.getCount,
          getFirst = _a.getFirst,
          getOutput = _a.getOutput,
          mapApi = _a.mapApi,
          setProp = _a.setProp,
          startActions = _a.startActions;
      return function (actions) {
          return action(function (_a) {
              var update = _a.update,
                  complete = _a.complete,
                  error = _a.error;
              var numActions = getCount(actions);
              var output = getOutput();
              var updateOutput = function () {
                  return update(output);
              };
              var numCompletedActions = 0;
              var subs = startActions(actions, function (a, name) {
                  var hasCompleted = false;
                  return a.start({
                      complete: function () {
                          if (!hasCompleted) {
                              hasCompleted = true;
                              numCompletedActions++;
                              if (numCompletedActions === numActions) onFrameUpdate(complete);
                          }
                      },
                      error: error,
                      update: function (v) {
                          setProp(output, name, v);
                          onFrameUpdate(updateOutput, true);
                      }
                  });
              });
              return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                  api[methodName] = mapApi(subs, methodName);
                  return api;
              }, {});
          });
      };
  };

  var composite = /*#__PURE__*/multi({
      getOutput: function () {
          return {};
      },
      getCount: function (subs) {
          return Object.keys(subs).length;
      },
      getFirst: function (subs) {
          return subs[Object.keys(subs)[0]];
      },
      mapApi: function (subs, methodName) {
          return function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return Object.keys(subs).reduce(function (output, propKey) {
                  var _a;
                  if (subs[propKey][methodName]) {
                      args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                  }
                  return output;
              }, {});
          };
      },
      setProp: function (output, name, v) {
          return output[name] = v;
      },
      startActions: function (actions, starter) {
          return Object.keys(actions).reduce(function (subs, key) {
              subs[key] = starter(actions[key], key);
              return subs;
          }, {});
      }
  });

  var parallel = /*#__PURE__*/multi({
      getOutput: function () {
          return [];
      },
      getCount: function (subs) {
          return subs.length;
      },
      getFirst: function (subs) {
          return subs[0];
      },
      mapApi: function (subs, methodName) {
          return function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              return subs.map(function (sub, i) {
                  if (sub[methodName]) {
                      return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                  }
              });
          };
      },
      setProp: function (output, name, v) {
          return output[name] = v;
      },
      startActions: function (actions, starter) {
          return actions.map(function (action, i) {
              return starter(action, i);
          });
      }
  });
  var parallel$1 = function () {
      var actions = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          actions[_i] = arguments[_i];
      }
      return parallel(actions);
  };

  var createVectorTests = function (typeTests) {
      var testNames = Object.keys(typeTests);
      var isVectorProp = function (prop, key) {
          return prop !== undefined && !typeTests[key](prop);
      };
      var getVectorKeys = function (props) {
          return testNames.reduce(function (vectorKeys, key) {
              if (isVectorProp(props[key], key)) vectorKeys.push(key);
              return vectorKeys;
          }, []);
      };
      var testVectorProps = function (props) {
          return props && testNames.some(function (key) {
              return isVectorProp(props[key], key);
          });
      };
      return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
  };
  var unitTypes = [px, percent, degrees, vh, vw];
  var findUnitType = function (prop) {
      return unitTypes.find(function (type) {
          return type.test(prop);
      });
  };
  var isUnitProp = function (prop) {
      return Boolean(findUnitType(prop));
  };
  var createAction = function (action, props) {
      return action(props);
  };
  var reduceArrayValue = function (i) {
      return function (props, key) {
          props[key] = props[key][i];
          return props;
      };
  };
  var createArrayAction = function (action, props, vectorKeys) {
      var firstVectorKey = vectorKeys[0];
      var actionList = props[firstVectorKey].map(function (v, i) {
          var childActionProps = vectorKeys.reduce(reduceArrayValue(i), __assign({}, props));
          return getActionCreator(v)(action, childActionProps);
      });
      return parallel$1.apply(void 0, actionList);
  };
  var reduceObjectValue = function (key) {
      return function (props, propKey) {
          props[propKey] = props[propKey][key];
          return props;
      };
  };
  var createObjectAction = function (action, props, vectorKeys) {
      var firstVectorKey = vectorKeys[0];
      var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
          var childActionProps = vectorKeys.reduce(reduceObjectValue(key), __assign({}, props));
          map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
          return map;
      }, {});
      return composite(actionMap);
  };
  var createUnitAction = function (action, _a) {
      var from = _a.from,
          to = _a.to,
          props = __rest(_a, ["from", "to"]);
      var unitType = findUnitType(from) || findUnitType(to);
      var transform = unitType.transform,
          parse = unitType.parse;
      return action(__assign({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
  };
  var createColorAction = function (action, _a) {
      var from = _a.from,
          to = _a.to,
          props = __rest(_a, ["from", "to"]);
      return action(__assign({}, props, { from: 0, to: 1 })).pipe(blendColor(from, to), color.transform);
  };
  var createComplexAction = function (action, _a) {
      var from = _a.from,
          to = _a.to,
          props = __rest(_a, ["from", "to"]);
      var valueTemplate = complex.createTransformer(from);
      invariant(valueTemplate(from) === complex.createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
      return action(__assign({}, props, { from: 0, to: 1 })).pipe(blendArray(complex.parse(from), complex.parse(to)), valueTemplate);
  };
  var createVectorAction = function (action, typeTests) {
      var _a = createVectorTests(typeTests),
          testVectorProps = _a.testVectorProps,
          getVectorKeys = _a.getVectorKeys;
      var vectorAction = function (props) {
          var isVector = testVectorProps(props);
          if (!isVector) return action(props);
          var vectorKeys = getVectorKeys(props);
          var testKey = vectorKeys[0];
          var testProp = props[testKey];
          return getActionCreator(testProp)(action, props, vectorKeys);
      };
      return vectorAction;
  };
  var getActionCreator = function (prop) {
      var actionCreator = createAction;
      if (typeof prop === 'number') {
          actionCreator = createAction;
      } else if (Array.isArray(prop)) {
          actionCreator = createArrayAction;
      } else if (isUnitProp(prop)) {
          actionCreator = createUnitAction;
      } else if (color.test(prop)) {
          actionCreator = createColorAction;
      } else if (complex.test(prop)) {
          actionCreator = createComplexAction;
      } else if (typeof prop === 'object') {
          actionCreator = createObjectAction;
      }
      return actionCreator;
  };

  var frame = function () {
      return action(function (_a) {
          var update = _a.update;
          var isActive = true;
          var startTime = currentTime();
          var nextFrame = function () {
              if (!isActive) return;
              update(Math.max(currentFrameTime() - startTime, 0));
              onFrameUpdate(nextFrame);
          };
          onFrameUpdate(nextFrame);
          return {
              stop: function () {
                  return isActive = false;
              }
          };
      });
  };

  var decay = function (props) {
      if (props === void 0) {
          props = {};
      }
      return action(function (_a) {
          var complete = _a.complete,
              update = _a.update;
          var _b = props.velocity,
              velocity = _b === void 0 ? 0 : _b,
              _c = props.from,
              from = _c === void 0 ? 0 : _c,
              _d = props.power,
              power = _d === void 0 ? 0.8 : _d,
              _e = props.timeConstant,
              timeConstant = _e === void 0 ? 350 : _e,
              _f = props.restDelta,
              restDelta = _f === void 0 ? 0.5 : _f,
              modifyTarget = props.modifyTarget;
          var elapsed = 0;
          var amplitude = power * velocity;
          var idealTarget = Math.round(from + amplitude);
          var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
          var timer = frame().start(function () {
              elapsed += timeSinceLastFrame();
              var delta = -amplitude * Math.exp(-elapsed / timeConstant);
              var isMoving = delta > restDelta || delta < -restDelta;
              var current = isMoving ? target + delta : target;
              update(current);
              if (!isMoving) {
                  timer.stop();
                  complete();
              }
          });
          return {
              stop: function () {
                  return timer.stop();
              }
          };
      });
  };
  var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
      from: number.test,
      modifyTarget: function (func) {
          return typeof func === 'function';
      },
      velocity: number.test
  });

  var scrubber = function (_a) {
      var _b = _a.from,
          from = _b === void 0 ? 0 : _b,
          _c = _a.to,
          to = _c === void 0 ? 1 : _c,
          _d = _a.ease,
          ease = _d === void 0 ? linear : _d;
      return action(function (_a) {
          var update = _a.update;
          return {
              seek: function (progress) {
                  return update(progress);
              }
          };
      }).pipe(ease, function (v) {
          return getValueFromProgress(from, to, v);
      });
  };
  var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
      ease: function (func) {
          return typeof func === 'function';
      },
      from: number.test,
      to: number.test
  });

  var clampProgress = /*#__PURE__*/clamp$1(0, 1);
  var tween = function (props) {
      if (props === void 0) {
          props = {};
      }
      return action(function (_a) {
          var update = _a.update,
              complete = _a.complete;
          var _b = props.duration,
              duration = _b === void 0 ? 300 : _b,
              _c = props.ease,
              ease = _c === void 0 ? easeOut : _c,
              _d = props.flip,
              flip = _d === void 0 ? 0 : _d,
              _e = props.loop,
              loop = _e === void 0 ? 0 : _e,
              _f = props.yoyo,
              yoyo = _f === void 0 ? 0 : _f;
          var _g = props.from,
              from = _g === void 0 ? 0 : _g,
              _h = props.to,
              to = _h === void 0 ? 1 : _h,
              _j = props.elapsed,
              elapsed = _j === void 0 ? 0 : _j,
              _k = props.playDirection,
              playDirection = _k === void 0 ? 1 : _k,
              _l = props.flipCount,
              flipCount = _l === void 0 ? 0 : _l,
              _m = props.yoyoCount,
              yoyoCount = _m === void 0 ? 0 : _m,
              _o = props.loopCount,
              loopCount = _o === void 0 ? 0 : _o;
          var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
          var progress = 0;
          var tweenTimer;
          var isActive = false;
          var reverseTween = function () {
              return playDirection *= -1;
          };
          var isTweenComplete = function () {
              var _a;
              var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
              if (!isComplete) return false;
              if (isComplete && !loop && !flip && !yoyo) return true;
              var isStepTaken = false;
              if (loop && loopCount < loop) {
                  elapsed = 0;
                  loopCount++;
                  isStepTaken = true;
              } else if (flip && flipCount < flip) {
                  elapsed = duration - elapsed;
                  _a = [to, from], from = _a[0], to = _a[1];
                  playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
                  flipCount++;
                  isStepTaken = true;
              } else if (yoyo && yoyoCount < yoyo) {
                  reverseTween();
                  yoyoCount++;
                  isStepTaken = true;
              }
              return !isStepTaken;
          };
          var updateTween = function () {
              progress = clampProgress(getProgressFromValue(0, duration, elapsed));
              playhead.seek(progress);
          };
          var startTimer = function () {
              isActive = true;
              tweenTimer = frame().start(function () {
                  elapsed += timeSinceLastFrame() * playDirection;
                  updateTween();
                  if (isTweenComplete() && complete) {
                      tweenTimer.stop();
                      onFrameUpdate(complete, true);
                  }
              });
          };
          var stopTimer = function () {
              isActive = false;
              if (tweenTimer) tweenTimer.stop();
          };
          startTimer();
          return {
              isActive: function () {
                  return isActive;
              },
              getElapsed: function () {
                  return clamp$1(0, duration)(elapsed);
              },
              getProgress: function () {
                  return progress;
              },
              stop: function () {
                  stopTimer();
              },
              pause: function () {
                  stopTimer();
                  return this;
              },
              resume: function () {
                  if (!isActive) startTimer();
                  return this;
              },
              seek: function (newProgress) {
                  elapsed = getValueFromProgress(0, duration, newProgress);
                  onFrameUpdate(updateTween, true);
                  return this;
              },
              reverse: function () {
                  reverseTween();
                  return this;
              }
          };
      });
  };

  var clampProgress$1 = /*#__PURE__*/clamp$1(0, 1);
  var defaultEasings = function (values, easing$$1) {
      return values.map(function () {
          return easing$$1 || easeOut;
      }).splice(0, values.length - 1);
  };
  var defaultTimings = function (values) {
      var numValues = values.length;
      return values.map(function (value, i) {
          return i !== 0 ? i / (numValues - 1) : 0;
      });
  };
  var interpolateScrubbers = function (input, scrubbers, update) {
      var rangeLength = input.length;
      var finalInputIndex = rangeLength - 1;
      var finalScrubberIndex = finalInputIndex - 1;
      var subs = scrubbers.map(function (scrub) {
          return scrub.start(update);
      });
      return function (v) {
          if (v <= input[0]) {
              subs[0].seek(0);
          }
          if (v >= input[finalInputIndex]) {
              subs[finalScrubberIndex].seek(1);
          }
          var i = 1;
          for (; i < rangeLength; i++) {
              if (input[i] > v || i === finalInputIndex) break;
          }
          var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
          subs[i - 1].seek(clampProgress$1(progressInRange));
      };
  };
  var keyframes = function (_a) {
      var easings = _a.easings,
          _b = _a.ease,
          ease = _b === void 0 ? linear : _b,
          times = _a.times,
          values = _a.values,
          tweenProps = __rest(_a, ["easings", "ease", "times", "values"]);
      easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
      times = times || defaultTimings(values);
      var scrubbers = easings.map(function (easing$$1, i) {
          return vectorScrubber({
              from: values[i],
              to: values[i + 1],
              ease: easing$$1
          });
      });
      return tween(__assign({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
          return interpolateScrubbers(times, scrubbers, update);
      });
  };

  var physics = function (props) {
      if (props === void 0) {
          props = {};
      }
      return action(function (_a) {
          var complete = _a.complete,
              update = _a.update;
          var _b = props.acceleration,
              acceleration = _b === void 0 ? 0 : _b,
              _c = props.friction,
              friction = _c === void 0 ? 0 : _c,
              _d = props.velocity,
              velocity = _d === void 0 ? 0 : _d,
              springStrength = props.springStrength,
              to = props.to;
          var _e = props.restSpeed,
              restSpeed = _e === void 0 ? 0.001 : _e,
              _f = props.from,
              from = _f === void 0 ? 0 : _f;
          var current = from;
          var timer = frame().start(function () {
              var elapsed = Math.max(timeSinceLastFrame(), 16);
              if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
              if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
              if (springStrength !== undefined && to !== undefined) {
                  var distanceToTarget = to - current;
                  velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
              }
              current += speedPerFrame(velocity, elapsed);
              update(current);
              var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
              if (isComplete) {
                  timer.stop();
                  complete();
              }
          });
          return {
              set: function (v) {
                  current = v;
                  return this;
              },
              setAcceleration: function (v) {
                  acceleration = v;
                  return this;
              },
              setFriction: function (v) {
                  friction = v;
                  return this;
              },
              setSpringStrength: function (v) {
                  springStrength = v;
                  return this;
              },
              setSpringTarget: function (v) {
                  to = v;
                  return this;
              },
              setVelocity: function (v) {
                  velocity = v;
                  return this;
              },
              stop: function () {
                  return timer.stop();
              }
          };
      });
  };
  var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
      acceleration: number.test,
      friction: number.test,
      velocity: number.test,
      from: number.test,
      to: number.test,
      springStrength: number.test
  });

  var spring = function (props) {
      if (props === void 0) {
          props = {};
      }
      return action(function (_a) {
          var update = _a.update,
              complete = _a.complete;
          var _b = props.velocity,
              velocity = _b === void 0 ? 0.0 : _b;
          var _c = props.from,
              from = _c === void 0 ? 0.0 : _c,
              _d = props.to,
              to = _d === void 0 ? 0.0 : _d,
              _e = props.stiffness,
              stiffness = _e === void 0 ? 100 : _e,
              _f = props.damping,
              damping = _f === void 0 ? 10 : _f,
              _g = props.mass,
              mass = _g === void 0 ? 1.0 : _g,
              _h = props.restSpeed,
              restSpeed = _h === void 0 ? 0.01 : _h,
              _j = props.restDelta,
              restDelta = _j === void 0 ? 0.01 : _j;
          var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
          var t = 0;
          var delta = to - from;
          var position = from;
          var prevPosition = position;
          var springTimer = frame().start(function () {
              var timeDelta = timeSinceLastFrame();
              t += timeDelta;
              var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
              var angularFreq = Math.sqrt(stiffness / mass) / 1000;
              prevPosition = position;
              if (dampingRatio < 1) {
                  var envelope = Math.exp(-dampingRatio * angularFreq * t);
                  var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                  position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
              } else {
                  var envelope = Math.exp(-angularFreq * t);
                  position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
              }
              velocity = speedPerSecond(position - prevPosition, timeDelta);
              var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
              var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
              if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                  position = to;
                  update(position);
                  springTimer.stop();
                  complete();
              } else {
                  update(position);
              }
          });
          return {
              stop: function () {
                  return springTimer.stop();
              }
          };
      });
  };
  var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
      from: number.test,
      to: number.test,
      stiffness: number.test,
      damping: number.test,
      mass: number.test,
      velocity: number.test
  });

  var listen = function (element, events, options) {
      return action(function (_a) {
          var update = _a.update;
          var eventNames = events.split(' ').map(function (eventName) {
              element.addEventListener(eventName, update, options);
              return eventName;
          });
          return {
              stop: function () {
                  return eventNames.forEach(function (eventName) {
                      return element.removeEventListener(eventName, update, options);
                  });
              }
          };
      });
  };

  var defaultPointerPos = function () {
      return {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          x: 0,
          y: 0
      };
  };
  var eventToPoint = function (e, point) {
      if (point === void 0) {
          point = defaultPointerPos();
      }
      point.clientX = point.x = e.clientX;
      point.clientY = point.y = e.clientY;
      point.pageX = e.pageX;
      point.pageY = e.pageY;
      return point;
  };

  var points = [/*#__PURE__*/defaultPointerPos()];
  var isTouchDevice = false;
  if (typeof document !== 'undefined') {
      var updatePointsLocation = function (_a) {
          var touches = _a.touches;
          isTouchDevice = true;
          var numTouches = touches.length;
          points.length = 0;
          for (var i = 0; i < numTouches; i++) {
              var thisTouch = touches[i];
              points.push(eventToPoint(thisTouch));
          }
      };
      listen(document, 'touchstart touchmove', {
          passive: true,
          capture: true
      }).start(updatePointsLocation);
  }
  var multitouch = function (_a) {
      var _b = _a === void 0 ? {} : _a,
          _c = _b.preventDefault,
          preventDefault = _c === void 0 ? true : _c,
          _d = _b.scale,
          scale$$1 = _d === void 0 ? 1.0 : _d,
          _e = _b.rotate,
          rotate = _e === void 0 ? 0.0 : _e;
      return action(function (_a) {
          var update = _a.update;
          var output = {
              touches: points,
              scale: scale$$1,
              rotate: rotate
          };
          var initialDistance = 0.0;
          var initialRotation = 0.0;
          var isGesture = points.length > 1;
          if (isGesture) {
              var firstTouch = points[0],
                  secondTouch = points[1];
              initialDistance = distance(firstTouch, secondTouch);
              initialRotation = angle(firstTouch, secondTouch);
          }
          var updatePoint = function () {
              if (isGesture) {
                  var firstTouch = points[0],
                      secondTouch = points[1];
                  var newDistance = distance(firstTouch, secondTouch);
                  var newRotation = angle(firstTouch, secondTouch);
                  output.scale = scale$$1 * (newDistance / initialDistance);
                  output.rotate = rotate + (newRotation - initialRotation);
              }
              update(output);
          };
          var onMove = function (e) {
              if (preventDefault || e.touches.length > 1) e.preventDefault();
              onFrameUpdate(updatePoint);
          };
          var updateOnMove = listen(document, 'touchmove', {
              passive: !preventDefault
          }).start(onMove);
          if (isTouchDevice) onFrameUpdate(updatePoint);
          return {
              stop: function () {
                  cancelOnFrameUpdate(updatePoint);
                  updateOnMove.stop();
              }
          };
      });
  };
  var getIsTouchDevice = function () {
      return isTouchDevice;
  };

  var point = /*#__PURE__*/defaultPointerPos();
  var isMouseDevice = false;
  if (typeof document !== 'undefined') {
      var updatePointLocation = function (e) {
          isMouseDevice = true;
          eventToPoint(e, point);
      };
      listen(document, 'mousedown mousemove', true).start(updatePointLocation);
  }
  var mouse = function (_a) {
      var _b = (_a === void 0 ? {} : _a).preventDefault,
          preventDefault = _b === void 0 ? true : _b;
      return action(function (_a) {
          var update = _a.update;
          var updatePoint = function () {
              return update(point);
          };
          var onMove = function (e) {
              if (preventDefault) e.preventDefault();
              onFrameUpdate(updatePoint);
          };
          var updateOnMove = listen(document, 'mousemove').start(onMove);
          if (isMouseDevice) onFrameUpdate(updatePoint);
          return {
              stop: function () {
                  cancelOnFrameUpdate(updatePoint);
                  updateOnMove.stop();
              }
          };
      });
  };

  var getFirstTouch = function (_a) {
      var firstTouch = _a[0];
      return firstTouch;
  };
  var pointer = function (props) {
      if (props === void 0) {
          props = {};
      }
      return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
          var touches = _a.touches;
          return touches;
      }, getFirstTouch) : mouse(props);
  };
  var index$1 = function (_a) {
      if (_a === void 0) {
          _a = {};
      }
      var x = _a.x,
          y = _a.y,
          props = __rest(_a, ["x", "y"]);
      if (x !== undefined || y !== undefined) {
          var applyXOffset_1 = applyOffset(x || 0);
          var applyYOffset_1 = applyOffset(y || 0);
          var delta_1 = { x: 0, y: 0 };
          return pointer(props).pipe(function (point) {
              delta_1.x = applyXOffset_1(point.x);
              delta_1.y = applyYOffset_1(point.y);
              return delta_1;
          });
      } else {
          return pointer(props);
      }
  };

  var chain = function () {
      var actions = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          actions[_i] = arguments[_i];
      }
      return action(function (_a) {
          var update = _a.update,
              complete = _a.complete;
          var i = 0;
          var current;
          var playCurrent = function () {
              current = actions[i].start({
                  complete: function () {
                      i++;
                      i >= actions.length ? complete() : playCurrent();
                  },
                  update: update
              });
          };
          playCurrent();
          return {
              stop: function () {
                  return current && current.stop();
              }
          };
      });
  };

  var delay = function (timeToDelay) {
      return action(function (_a) {
          var complete = _a.complete;
          var timeout = setTimeout(complete, timeToDelay);
          return {
              stop: function () {
                  return clearTimeout(timeout);
              }
          };
      });
  };

  var getPoseValues = function (_a) {
      var transition = _a.transition,
          delay = _a.delay,
          delayChildren = _a.delayChildren,
          staggerChildren = _a.staggerChildren,
          staggerDirection = _a.staggerDirection,
          afterChildren = _a.afterChildren,
          beforeChildren = _a.beforeChildren,
          preTransition = _a.preTransition,
          applyAtStart = _a.applyAtStart,
          applyAtEnd = _a.applyAtEnd,
          props = __rest(_a, ["transition", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition", "applyAtStart", "applyAtEnd"]);
      return props;
  };
  var selectPoses = function (_a) {
      var label = _a.label,
          props = _a.props,
          values = _a.values,
          parentValues = _a.parentValues,
          ancestorValues = _a.ancestorValues,
          onChange = _a.onChange,
          passive = _a.passive,
          initialPose = _a.initialPose,
          poses = __rest(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
      return poses;
  };
  var selectAllValues = function (values, selectValue) {
      var allValues = {};
      values.forEach(function (value, key) {
          return allValues[key] = selectValue(value);
      });
      return allValues;
  };

  var resolveProp = function (target, props) {
      return typeof target === 'function' ? target(props) : target;
  };
  var poseDefault = function (pose, prop, defaultValue, resolveProps) {
      return pose && pose[prop] !== undefined ? resolveProp(pose[prop], resolveProps) : defaultValue;
  };
  var startChildAnimations = function (children, next, pose, props) {
      var animations = [];
      var delay = poseDefault(pose, 'delayChildren', 0, props);
      var stagger = poseDefault(pose, 'staggerChildren', 0, props);
      var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
      var maxStaggerDuration = (children.size - 1) * stagger;
      var generateStaggerDuration = staggerDirection === 1 ? function (i) {
          return i * stagger;
      } : function (i) {
          return maxStaggerDuration - i * stagger;
      };
      Array.from(children).forEach(function (child, i) {
          animations.push(child.set(next, __assign({}, props, { delay: delay + generateStaggerDuration(i) })));
      });
      return animations;
  };
  var resolveTransition = function (transition, key, value, props, convertTransitionDefinition, getInstantTransition) {
      var resolvedTransition;
      if (typeof transition === 'function') {
          resolvedTransition = transition(props);
      } else if (transition[key] || transition.default) {
          var keyTransition = transition[key] || transition.default;
          if (typeof keyTransition === 'function') {
              resolvedTransition = keyTransition(props);
          } else {
              resolvedTransition = keyTransition;
          }
      } else {
          resolvedTransition = transition;
      }
      return resolvedTransition === false ? getInstantTransition(value, props) : convertTransitionDefinition(value, resolvedTransition, props);
  };
  var findInsertionIndex = function (poseList, priorityList, priorityIndex) {
      var insertionIndex = 0;
      for (var i = priorityIndex - 1; i >= 0; i--) {
          var nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);
          if (nextHighestPriorityIndex !== -1) {
              insertionIndex = nextHighestPriorityIndex + 1;
              break;
          }
      }
      return insertionIndex;
  };
  var applyValues = function (toApply, values, props, setValue, setValueNative) {
      invariant(typeof toApply === 'object', 'applyAtStart and applyAtEnd must be of type object');
      return Object.keys(toApply).forEach(function (key) {
          var valueToSet = resolveProp(toApply[key], props);
          values.has(key) ? setValue(values.get(key), valueToSet) : setValueNative(key, valueToSet, props);
      });
  };
  var createPoseSetter = function (setterProps) {
      var state = setterProps.state,
          poses = setterProps.poses,
          startAction = setterProps.startAction,
          stopAction = setterProps.stopAction,
          getInstantTransition = setterProps.getInstantTransition,
          addActionDelay = setterProps.addActionDelay,
          getTransitionProps = setterProps.getTransitionProps,
          resolveTarget = setterProps.resolveTarget,
          transformPose = setterProps.transformPose,
          posePriority = setterProps.posePriority,
          convertTransitionDefinition = setterProps.convertTransitionDefinition,
          setValue = setterProps.setValue,
          setValueNative = setterProps.setValueNative;
      return function (next, nextProps, propagate) {
          if (nextProps === void 0) {
              nextProps = {};
          }
          if (propagate === void 0) {
              propagate = true;
          }
          var children = state.children,
              values = state.values,
              props = state.props,
              activeActions = state.activeActions,
              activePoses = state.activePoses;
          var _a = nextProps.delay,
              delay = _a === void 0 ? 0 : _a;
          var hasChildren = children.size;
          var baseTransitionProps = __assign({}, props, nextProps);
          var nextPose = poses[next];
          var getChildAnimations = function () {
              return hasChildren && propagate ? startChildAnimations(children, next, nextPose, baseTransitionProps) : [];
          };
          var getParentAnimations = function () {
              if (!nextPose) return [];
              if (transformPose) nextPose = transformPose(nextPose, next, state);
              var preTransition = nextPose.preTransition,
                  getTransition = nextPose.transition,
                  applyAtStart = nextPose.applyAtStart,
                  applyAtEnd = nextPose.applyAtEnd;
              if (preTransition) preTransition(baseTransitionProps);
              if (applyAtStart) {
                  applyValues(applyAtStart, values, baseTransitionProps, setValue, setValueNative);
              }
              var animations = Object.keys(getPoseValues(nextPose)).map(function (key) {
                  var valuePoses = activePoses.has(key) ? activePoses.get(key) : (activePoses.set(key, []), activePoses.get(key));
                  var existingIndex = valuePoses.indexOf(next);
                  if (existingIndex !== -1) valuePoses.splice(existingIndex, 1);
                  var priority = posePriority ? posePriority.indexOf(next) : 0;
                  var insertionIndex = priority <= 0 ? 0 : findInsertionIndex(valuePoses, posePriority, priority);
                  valuePoses.splice(insertionIndex, 0, next);
                  return insertionIndex === 0 ? new Promise(function (complete) {
                      var value = values.get(key);
                      var transitionProps = __assign({}, baseTransitionProps, { key: key,
                          value: value });
                      var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                      if (activeActions.has(key)) stopAction(activeActions.get(key));
                      var resolveTransitionProps = __assign({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                      var transition = resolveTransition(getTransition, key, value, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                      var poseDelay = resolveProp(nextPose.delay, transitionProps);
                      if (delay || poseDelay) {
                          transition = addActionDelay(delay || poseDelay, transition);
                      }
                      activeActions.set(key, startAction(value, transition, complete));
                  }) : Promise.resolve();
              });
              return applyAtEnd ? [Promise.all(animations).then(function () {
                  applyValues(applyAtEnd, values, baseTransitionProps, setValue, setValueNative);
              })] : animations;
          };
          if (nextPose && hasChildren) {
              if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
                  return Promise.all(getParentAnimations()).then(function () {
                      return Promise.all(getChildAnimations());
                  });
              } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
                  return Promise.all(getChildAnimations()).then(function () {
                      return Promise.all(getParentAnimations());
                  });
              }
          }
          return Promise.all(getParentAnimations().concat(getChildAnimations()));
      };
  };

  var DEFAULT_INITIAL_POSE = 'init';
  var isScale = function (key) {
      return key.includes('scale');
  };
  var defaultReadValueFromSource = function (key) {
      return isScale(key) ? 1 : 0;
  };
  var getInitialValue = function (poses, key, initialPose, props, readValueFromSource, activePoses) {
      if (readValueFromSource === void 0) {
          readValueFromSource = defaultReadValueFromSource;
      }
      var posesToSearch = Array.isArray(initialPose) ? initialPose : [initialPose];
      posesToSearch.push(DEFAULT_INITIAL_POSE);
      var pose = posesToSearch.filter(Boolean).find(function (name) {
          return poses[name] && poses[name][key] !== undefined;
      });
      activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);
      return pose ? resolveProp(poses[pose][key], props) : readValueFromSource(key, props);
  };
  var createValues = function (values, _a) {
      var userSetValues = _a.userSetValues,
          createValue = _a.createValue,
          convertValue = _a.convertValue,
          readValueFromSource = _a.readValueFromSource,
          initialPose = _a.initialPose,
          poses = _a.poses,
          activePoses = _a.activePoses,
          props = _a.props;
      return function (key) {
          if (values.has(key)) return;
          var value;
          if (userSetValues && userSetValues[key] !== undefined) {
              value = convertValue(userSetValues[key], key, props);
          } else {
              var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource, activePoses);
              value = createValue(initValue, key, props);
          }
          values.set(key, value);
      };
  };
  var scrapeValuesFromPose = function (values, props) {
      return function (key) {
          var pose = props.poses[key];
          Object.keys(getPoseValues(pose)).forEach(createValues(values, props));
      };
  };
  var getAncestorValue = function (key, fromParent, ancestors) {
      if (fromParent === true) {
          return ancestors[0] && ancestors[0].values.get(key);
      } else {
          var foundAncestor = ancestors.find(function (_a) {
              var label = _a.label;
              return label === fromParent;
          });
          return foundAncestor && foundAncestor.values.get(key);
      }
  };
  var bindPassiveValues = function (values, _a) {
      var passive = _a.passive,
          ancestorValues = _a.ancestorValues,
          createValue = _a.createValue,
          readValue = _a.readValue,
          props = _a.props;
      return function (key) {
          var _a = passive[key],
              valueKey = _a[0],
              passiveProps = _a[1],
              fromParent = _a[2];
          var valueToBind = fromParent && ancestorValues.length ? getAncestorValue(valueKey, fromParent, ancestorValues) : values.has(valueKey) ? values.get(valueKey) : false;
          if (!valueToBind) return;
          var newValue = createValue(readValue(valueToBind), key, props, {
              passiveParentKey: valueKey,
              passiveParent: valueToBind,
              passiveProps: passiveProps
          });
          values.set(key, newValue);
      };
  };
  var createValueMap = function (props) {
      var poses = props.poses,
          passive = props.passive;
      var values = new Map();
      Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
      if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));
      return values;
  };

  var applyDefaultTransition = function (pose, key, defaultTransitions) {
      return __assign({}, pose, { transition: defaultTransitions.has(key) ? defaultTransitions.get(key) : defaultTransitions.get('default') });
  };
  var generateTransitions = function (poses, defaultTransitions) {
      Object.keys(poses).forEach(function (key) {
          var pose = poses[key];
          invariant(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
          poses[key] = pose.transition !== undefined ? pose : applyDefaultTransition(pose, key, defaultTransitions);
      });
      return poses;
  };

  var sortByReversePriority = function (priorityOrder) {
      return function (a, b) {
          var aP = priorityOrder.indexOf(a);
          var bP = priorityOrder.indexOf(b);
          if (aP === -1 && bP !== -1) return -1;
          if (aP !== -1 && bP === -1) return 1;
          return aP - bP;
      };
  };

  var poseFactory = function (_a) {
      var getDefaultProps = _a.getDefaultProps,
          defaultTransitions = _a.defaultTransitions,
          bindOnChange = _a.bindOnChange,
          startAction = _a.startAction,
          stopAction = _a.stopAction,
          readValue = _a.readValue,
          readValueFromSource = _a.readValueFromSource,
          resolveTarget = _a.resolveTarget,
          setValue = _a.setValue,
          setValueNative = _a.setValueNative,
          createValue = _a.createValue,
          convertValue = _a.convertValue,
          getInstantTransition = _a.getInstantTransition,
          getTransitionProps = _a.getTransitionProps,
          addActionDelay = _a.addActionDelay,
          selectValueToRead = _a.selectValueToRead,
          convertTransitionDefinition = _a.convertTransitionDefinition,
          transformPose = _a.transformPose,
          posePriority = _a.posePriority,
          extendAPI = _a.extendAPI;
      return function (config) {
          var parentValues = config.parentValues,
              _a = config.ancestorValues,
              ancestorValues = _a === void 0 ? [] : _a;
          if (parentValues) ancestorValues.unshift({ values: parentValues });
          var activeActions = new Map();
          var activePoses = new Map();
          var children = new Set();
          var poses = generateTransitions(selectPoses(config), defaultTransitions);
          var props = config.props || {};
          if (getDefaultProps) props = __assign({}, props, getDefaultProps(config));
          var passive = config.passive,
              userSetValues = config.values,
              _b = config.initialPose,
              initialPose = _b === void 0 ? DEFAULT_INITIAL_POSE : _b;
          var values = createValueMap({
              poses: poses,
              passive: passive,
              ancestorValues: ancestorValues,
              readValue: readValue,
              createValue: createValue,
              convertValue: convertValue,
              readValueFromSource: readValueFromSource,
              userSetValues: userSetValues,
              initialPose: initialPose,
              activePoses: activePoses,
              props: props
          });
          var state = {
              activeActions: activeActions,
              activePoses: activePoses,
              children: children,
              props: props,
              values: values
          };
          var onChange = config.onChange;
          if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));
          var set = createPoseSetter({
              state: state,
              poses: poses,
              getInstantTransition: getInstantTransition,
              getTransitionProps: getTransitionProps,
              convertTransitionDefinition: convertTransitionDefinition,
              setValue: setValue,
              setValueNative: setValueNative,
              startAction: startAction,
              stopAction: stopAction,
              resolveTarget: resolveTarget,
              addActionDelay: addActionDelay,
              transformPose: transformPose,
              posePriority: posePriority
          });
          var has = function (poseName) {
              return !!poses[poseName];
          };
          var api = {
              set: set,
              unset: function (poseName, poseProps) {
                  var posesToSet = [];
                  activePoses.forEach(function (valuePoses) {
                      var poseIndex = valuePoses.indexOf(poseName);
                      if (poseIndex === -1) return;
                      var currentPose = valuePoses[0];
                      valuePoses.splice(poseIndex, 1);
                      var nextPose = valuePoses[0];
                      if (nextPose === currentPose) return;
                      if (posesToSet.indexOf(nextPose) === -1) {
                          posesToSet.push(nextPose);
                      }
                  });
                  var animationsToResolve = posesToSet.sort(sortByReversePriority(posePriority)).map(function (poseToSet) {
                      return set(poseToSet, poseProps, false);
                  });
                  children.forEach(function (child) {
                      return animationsToResolve.push(child.unset(poseName));
                  });
                  return Promise.all(animationsToResolve);
              },
              get: function (valueName) {
                  return valueName ? selectValueToRead(values.get(valueName)) : selectAllValues(values, selectValueToRead);
              },
              has: has,
              setProps: function (newProps) {
                  return state.props = __assign({}, state.props, newProps);
              },
              _addChild: function (childConfig, factory) {
                  var child = factory(__assign({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                  children.add(child);
                  return child;
              },
              removeChild: function (child) {
                  return children.delete(child);
              },
              clearChildren: function () {
                  children.forEach(function (child) {
                      return child.destroy();
                  });
                  children.clear();
              },
              destroy: function () {
                  activeActions.forEach(stopAction);
                  children.forEach(function (child) {
                      return child.destroy();
                  });
              }
          };
          return extendAPI(api, state, config);
      };
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign$2 = function () {
      __assign$2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$2.apply(this, arguments);
  };

  function __rest$1(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      return t;
  }

  var BoundingBoxDimension;
  (function (BoundingBoxDimension) {
      BoundingBoxDimension["width"] = "width";
      BoundingBoxDimension["height"] = "height";
      BoundingBoxDimension["left"] = "left";
      BoundingBoxDimension["right"] = "right";
      BoundingBoxDimension["top"] = "top";
      BoundingBoxDimension["bottom"] = "bottom";
  })(BoundingBoxDimension || (BoundingBoxDimension = {}));

  var linear$1 = linear;
  var interpolate$1 = transformers.interpolate;
  var singleAxisPointer = function (axis) {
      return function (from) {
          var _a;
          return index$1((_a = {}, _a[axis] = typeof from === 'string' ? parseFloat(from) : from, _a)).pipe(function (v) {
              return v[axis];
          });
      };
  };
  var pointerX = /*#__PURE__*/singleAxisPointer('x');
  var pointerY = /*#__PURE__*/singleAxisPointer('y');
  var createPointer = function (axisPointerCreator, min, max, measurement) {
      return function (_a) {
          var from = _a.from,
              type = _a.type,
              dimensions = _a.dimensions,
              dragBounds = _a.dragBounds;
          var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
          var transformQueue = [];
          if (dragBounds) {
              if (dragBounds[min] !== undefined) {
                  transformQueue.push(function (v) {
                      return Math.max(v, dimensions.measurementAsPixels(measurement, dragBounds[min], type));
                  });
              }
              if (dragBounds[max] !== undefined) {
                  transformQueue.push(function (v) {
                      return Math.min(v, dimensions.measurementAsPixels(measurement, dragBounds[max], type));
                  });
              }
          }
          if (type === percent) {
              transformQueue.push(interpolate$1([0, dimensions.get(measurement)], [0, 100]), function (v) {
                  return v + '%';
              });
          }
          return transformQueue.length ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
      };
  };
  var just = function (from) {
      return action(function (_a) {
          var update = _a.update,
              complete = _a.complete;
          update(from);
          complete();
      });
  };
  var underDampedSpring = function (_a) {
      var from = _a.from,
          velocity = _a.velocity,
          to = _a.to;
      return vectorSpring({
          from: from,
          to: to,
          velocity: velocity,
          stiffness: 500,
          damping: 25,
          restDelta: 0.5,
          restSpeed: 10
      });
  };
  var overDampedSpring = function (_a) {
      var from = _a.from,
          velocity = _a.velocity,
          to = _a.to;
      return vectorSpring({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
  };
  var linearTween = function (_a) {
      var from = _a.from,
          to = _a.to;
      return tween({ from: from, to: to, ease: linear$1 });
  };
  var intelligentTransition = {
      x: underDampedSpring,
      y: underDampedSpring,
      z: underDampedSpring,
      rotate: underDampedSpring,
      rotateX: underDampedSpring,
      rotateY: underDampedSpring,
      rotateZ: underDampedSpring,
      scaleX: overDampedSpring,
      scaleY: overDampedSpring,
      scale: overDampedSpring,
      opacity: linearTween,
      default: tween
  };
  var dragAction = /*#__PURE__*/__assign$2({}, intelligentTransition, { x: /*#__PURE__*/createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width), y: /*#__PURE__*/createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height) });
  var justAxis = function (_a) {
      var from = _a.from;
      return just(from);
  };
  var intelligentDragEnd = /*#__PURE__*/__assign$2({}, intelligentTransition, { x: justAxis, y: justAxis });
  var defaultTransitions = /*#__PURE__*/new Map([['default', intelligentTransition], ['drag', dragAction], ['dragEnd', intelligentDragEnd]]);

  var auto = {
      test: function (v) {
          return v === 'auto';
      },
      parse: function (v) {
          return v;
      }
  };
  var valueTypeTests = [number, degrees, percent, px, vw, vh, auto];
  var testValueType = function (v) {
      return function (type) {
          return type.test(v);
      };
  };
  var getValueType$2 = function (v) {
      return valueTypeTests.find(testValueType(v));
  };

  var createPassiveValue = function (init, parent, transform$$1) {
      var raw = value(transform$$1(init));
      parent.raw.subscribe(function (v) {
          return raw.update(transform$$1(v));
      });
      return { raw: raw };
  };
  var createValue = function (init) {
      var type = getValueType$2(init);
      var raw = value(init);
      return { raw: raw, type: type };
  };
  var addActionDelay = function (delay$$1, transition) {
      if (delay$$1 === void 0) {
          delay$$1 = 0;
      }
      return chain(delay(delay$$1), transition);
  };
  var animationLookup = {
      tween: tween,
      spring: vectorSpring,
      decay: vectorDecay,
      keyframes: keyframes,
      physics: vectorPhysics
  };
  var linear$1$1 = linear,
      easeIn$1 = easeIn,
      easeOut$1 = easeOut,
      easeInOut$1 = easeInOut,
      circIn$1 = circIn,
      circOut$1 = circOut,
      circInOut$1 = circInOut,
      backIn$1 = backIn,
      backOut$1 = backOut,
      backInOut$1 = backInOut,
      anticipate$1 = anticipate;
  var easingLookup = {
      linear: linear$1$1,
      easeIn: easeIn$1,
      easeOut: easeOut$1,
      easeInOut: easeInOut$1,
      circIn: circIn$1,
      circOut: circOut$1,
      circInOut: circInOut$1,
      backIn: backIn$1,
      backOut: backOut$1,
      backInOut: backInOut$1,
      anticipate: anticipate$1
  };
  var getAction = function (v, _a, _b) {
      var from = _b.from,
          to = _b.to,
          velocity = _b.velocity;
      var _c = _a.type,
          type = _c === void 0 ? 'tween' : _c,
          ease = _a.ease,
          def = __rest$1(_a, ["type", "ease"]);
      invariant(animationLookup[type] !== undefined, "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
      if (type === 'tween') {
          var typeOfEase = typeof ease;
          if (typeOfEase !== 'function') {
              if (typeOfEase === 'string') {
                  invariant(easingLookup[ease] !== undefined, "Invalid easing type '" + ease + "'. popmotion.io/pose/api/config");
                  ease = easingLookup[ease];
              } else if (Array.isArray(ease)) {
                  invariant(ease.length === 4, "Cubic bezier arrays must contain four numerical values.");
                  var x1 = ease[0],
                      y1 = ease[1],
                      x2 = ease[2],
                      y2 = ease[3];
                  ease = cubicBezier(x1, y1, x2, y2);
              }
          }
      }
      var baseProps = type !== 'keyframes' ? {
          from: from,
          to: to,
          velocity: velocity,
          ease: ease
      } : { ease: ease };
      return animationLookup[type](__assign$2({}, baseProps, def));
  };
  var isAction = function (action$$1) {
      return typeof action$$1.start !== 'undefined';
  };
  var pose = function (_a) {
      var transformPose = _a.transformPose,
          addListenerToValue = _a.addListenerToValue,
          extendAPI = _a.extendAPI,
          readValueFromSource = _a.readValueFromSource,
          posePriority = _a.posePriority,
          setValueNative = _a.setValueNative;
      return poseFactory({
          bindOnChange: function (values, onChange) {
              return function (key) {
                  if (!values.has(key)) return;
                  var raw = values.get(key).raw;
                  raw.subscribe(onChange[key]);
              };
          },
          readValue: function (_a) {
              var raw = _a.raw;
              return raw.get();
          },
          setValue: function (_a, to) {
              var raw = _a.raw;
              return raw.update(to);
          },
          createValue: function (init, key, _a, _b) {
              var elementStyler = _a.elementStyler;
              var _c = _b === void 0 ? {} : _b,
                  passiveParent = _c.passiveParent,
                  passiveProps = _c.passiveProps;
              var val = passiveParent ? createPassiveValue(init, passiveParent, passiveProps) : createValue(init);
              if (addListenerToValue) {
                  val.raw.subscribe(addListenerToValue(key, elementStyler));
              }
              return val;
          },
          convertValue: function (raw, key, _a) {
              var elementStyler = _a.elementStyler;
              if (addListenerToValue) {
                  raw.subscribe(addListenerToValue(key, elementStyler));
              }
              return {
                  raw: raw,
                  type: getValueType$2(raw.get())
              };
          },
          getTransitionProps: function (_a, to) {
              var raw = _a.raw,
                  type = _a.type;
              return {
                  from: raw.get(),
                  velocity: raw.getVelocity(),
                  to: to,
                  type: type
              };
          },
          resolveTarget: function (_, to) {
              return to;
          },
          selectValueToRead: function (_a) {
              var raw = _a.raw;
              return raw;
          },
          startAction: function (_a, action$$1, complete) {
              var raw = _a.raw;
              var reaction = {
                  update: function (v) {
                      return raw.update(v);
                  },
                  complete: complete
              };
              return action$$1.start(reaction);
          },
          stopAction: function (action$$1) {
              return action$$1.stop();
          },
          getInstantTransition: function (_, _a) {
              var to = _a.to;
              return just(to);
          },
          convertTransitionDefinition: function (val, def, props) {
              if (isAction(def)) return def;
              var delay$$1 = def.delay,
                  min = def.min,
                  max = def.max,
                  round = def.round,
                  remainingDef = __rest$1(def, ["delay", "min", "max", "round"]);
              var action$$1 = getAction(val, remainingDef, props);
              var outputPipe = [];
              if (delay$$1) action$$1 = addActionDelay(delay$$1, action$$1);
              if (min !== undefined) outputPipe.push(function (v) {
                  return Math.max(v, min);
              });
              if (max !== undefined) outputPipe.push(function (v) {
                  return Math.min(v, max);
              });
              if (round) outputPipe.push(Math.round);
              return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
          },
          setValueNative: setValueNative,
          addActionDelay: addActionDelay,
          defaultTransitions: defaultTransitions,
          transformPose: transformPose,
          readValueFromSource: readValueFromSource,
          posePriority: posePriority,
          extendAPI: extendAPI
      });
  };

  var createDimensions = function (element) {
      var hasMeasured = false;
      var current = {
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
      };
      return {
          get: function (measurement) {
              return measurement ? current[measurement] : current;
          },
          measure: function () {
              current = element.getBoundingClientRect();
              hasMeasured = true;
              return current;
          },
          measurementAsPixels: function (measurement, value$$1, type) {
              return type === percent ? (typeof value$$1 === 'string' ? parseFloat(value$$1) : value$$1) / 100 * current[measurement] : value$$1;
          },
          has: function () {
              return hasMeasured;
          }
      };
  };

  var makeUIEventApplicator = function (_a) {
      var startEvents = _a.startEvents,
          endEvents = _a.endEvents,
          startPose = _a.startPose,
          endPose = _a.endPose,
          startCallback = _a.startCallback,
          endCallback = _a.endCallback,
          useDocumentToEnd = _a.useDocumentToEnd,
          preventDefault = _a.preventDefault;
      return function (element, activeActions, poser, config) {
          var startListener = startPose + 'Start';
          var endListener = startPose + 'End';
          var eventStartListener = listen(element, startEvents).start(function (startEvent) {
              if (preventDefault) startEvent.preventDefault();
              poser.set(startPose);
              if (startCallback && config[startCallback]) config[startCallback](startEvent);
              var eventEndListener = listen(useDocumentToEnd ? document.documentElement : element, endEvents + (useDocumentToEnd ? ' mouseenter' : '')).start(function (endEvent) {
                  if (useDocumentToEnd && endEvent.type === 'mouseenter' && endEvent.buttons === 1) {
                      return;
                  }
                  if (preventDefault) endEvent.preventDefault();
                  activeActions.get(endListener).stop();
                  poser.unset(startPose);
                  poser.set(endPose);
                  if (endCallback && config[endCallback]) config[endCallback](endEvent);
              });
              activeActions.set(endListener, eventEndListener);
          });
          activeActions.set(startListener, eventStartListener);
      };
  };
  var events = {
      draggable: /*#__PURE__*/makeUIEventApplicator({
          startEvents: 'mousedown touchstart',
          endEvents: 'mouseup touchend',
          startPose: 'drag',
          endPose: 'dragEnd',
          startCallback: 'onDragStart',
          endCallback: 'onDragEnd',
          useDocumentToEnd: true,
          preventDefault: true
      }),
      hoverable: /*#__PURE__*/makeUIEventApplicator({
          startEvents: 'mouseenter',
          endEvents: 'mouseleave',
          startPose: 'hover',
          endPose: 'hoverEnd'
      }),
      focusable: /*#__PURE__*/makeUIEventApplicator({
          startEvents: 'focus',
          endEvents: 'blur',
          startPose: 'focus',
          endPose: 'blur'
      }),
      pressable: /*#__PURE__*/makeUIEventApplicator({
          startEvents: 'mousedown touchstart',
          endEvents: 'mouseup touchend',
          startPose: 'press',
          endPose: 'pressEnd',
          startCallback: 'onPressStart',
          endCallback: 'onPressEnd',
          useDocumentToEnd: true
      })
  };
  var eventKeys = /*#__PURE__*/Object.keys(events);
  var appendEventListeners = function (element, activeActions, poser, _a) {
      var props = _a.props;
      return eventKeys.forEach(function (key) {
          if (props[key]) events[key](element, activeActions, poser, props);
      });
  };

  var measureWithoutTransform = function (element) {
      var transform$$1 = element.style.transform;
      element.style.transform = '';
      var bbox = element.getBoundingClientRect();
      element.style.transform = transform$$1;
      return bbox;
  };
  var resolveProp$1 = function (target, props) {
      return typeof target === 'function' ? target(props) : target;
  };

  var ORIGIN_START = 0;
  var ORIGIN_CENTER = '50%';
  var ORIGIN_END = '100%';
  var findCenter = function (_a) {
      var top = _a.top,
          right = _a.right,
          bottom = _a.bottom,
          left = _a.left;
      return {
          x: (left + right) / 2,
          y: (top + bottom) / 2
      };
  };
  var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
  var positionalPropsDict = /*#__PURE__*/new Set(positionalProps);
  var checkPositionalProp = function (key) {
      return positionalPropsDict.has(key);
  };
  var hasPositionalProps = function (pose) {
      return Object.keys(pose).some(checkPositionalProp);
  };
  var isFlipPose = function (flip, key, state) {
      return state.props.element instanceof HTMLElement && (flip === true || key === 'flip');
  };
  var setValue = function (_a, key, to) {
      var values = _a.values,
          props = _a.props;
      if (values.has(key)) {
          var raw = values.get(key).raw;
          raw.update(to);
          raw.update(to);
      } else {
          values.set(key, {
              raw: value(to, function (v) {
                  return props.elementStyler.set(key, v);
              })
          });
      }
  };
  var explicitlyFlipPose = function (state, nextPose) {
      var _a = state.props,
          dimensions = _a.dimensions,
          elementStyler = _a.elementStyler;
      dimensions.measure();
      var width = nextPose.width,
          height = nextPose.height,
          top = nextPose.top,
          left = nextPose.left,
          bottom = nextPose.bottom,
          right = nextPose.right,
          position = nextPose.position,
          remainingPose = __rest$1(nextPose, ["width", "height", "top", "left", "bottom", "right", "position"]);
      var propsToSet = positionalProps.concat('position').reduce(function (acc, key) {
          if (nextPose[key] !== undefined) {
              acc[key] = resolveProp$1(nextPose[key], state.props);
          }
          return acc;
      }, {});
      elementStyler.set(propsToSet).render();
      return implicitlyFlipPose(state, remainingPose);
  };
  var implicitlyFlipPose = function (state, nextPose) {
      var _a = state.props,
          dimensions = _a.dimensions,
          element = _a.element,
          elementStyler = _a.elementStyler;
      if (!dimensions.has()) return {};
      var prev = dimensions.get();
      var next = measureWithoutTransform(element);
      var originX = prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
      var originY = prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
      elementStyler.set({ originX: originX, originY: originY });
      var flipPoseProps = {};
      if (prev.width !== next.width) {
          setValue(state, 'scaleX', prev.width / next.width);
          flipPoseProps.scaleX = 1;
      }
      if (prev.height !== next.height) {
          setValue(state, 'scaleY', prev.height / next.height);
          flipPoseProps.scaleY = 1;
      }
      var prevCenter = findCenter(prev);
      var nextCenter = findCenter(next);
      if (originX === ORIGIN_CENTER) {
          setValue(state, 'x', prevCenter.x - nextCenter.x);
          flipPoseProps.x = 0;
      }
      if (originY === ORIGIN_CENTER) {
          setValue(state, 'y', prevCenter.y - nextCenter.y);
          flipPoseProps.y = 0;
      }
      elementStyler.render();
      return __assign$2({}, nextPose, flipPoseProps);
  };
  var flipPose = function (props, nextPose) {
      return hasPositionalProps(nextPose) ? explicitlyFlipPose(props, nextPose) : implicitlyFlipPose(props, nextPose);
  };

  var getPosFromMatrix = function (matrix, pos) {
      return parseFloat(matrix.split(', ')[pos]);
  };
  var getTranslateFromMatrix = function (pos2, pos3) {
      return function (element, bbox, _a) {
          var transform$$1 = _a.transform;
          if (transform$$1 === 'none') return 0;
          var matrix3d = transform$$1.match(/^matrix3d\((.+)\)$/);
          if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
          return getPosFromMatrix(transform$$1.match(/^matrix\((.+)\)$/)[1], pos2);
      };
  };
  var positionalValues = {
      width: function (element, _a) {
          var width = _a.width;
          return width;
      },
      height: function (element, _a) {
          var height = _a.height;
          return height;
      },
      top: function (element, bbox, _a) {
          var top = _a.top;
          return parseFloat(top);
      },
      left: function (element, bbox, _a) {
          var left = _a.left;
          return parseFloat(left);
      },
      bottom: function (element, _a, _b) {
          var height = _a.height;
          var top = _b.top;
          return parseFloat(top) + height;
      },
      right: function (element, _a, _b) {
          var width = _a.width;
          var left = _b.left;
          return parseFloat(left) + width;
      },
      x: /*#__PURE__*/getTranslateFromMatrix(4, 13),
      y: /*#__PURE__*/getTranslateFromMatrix(5, 14)
  };
  var isPositionalKey = function (v) {
      return positionalValues[v] !== undefined;
  };
  var isPositional = function (pose) {
      return Object.keys(pose).some(isPositionalKey);
  };
  var convertPositionalUnits = function (state, pose) {
      var values = state.values,
          props = state.props;
      var element = props.element,
          elementStyler = props.elementStyler;
      var positionalPoseKeys = Object.keys(pose).filter(isPositionalKey);
      var changedPositionalKeys = [];
      var elementComputedStyle = getComputedStyle(element);
      positionalPoseKeys.forEach(function (key) {
          var value$$1 = values.get(key);
          var fromValueType = getValueType$2(value$$1.raw.get());
          var to = resolveProp$1(pose[key], props);
          var toValueType = getValueType$2(to);
          if (fromValueType !== toValueType) {
              changedPositionalKeys.push(key);
              pose.applyAtEnd = pose.applyAtEnd || {};
              pose.applyAtEnd[key] = pose[key];
              setValue(state, key, to);
          }
      });
      if (!changedPositionalKeys.length) return pose;
      var originBbox = element.getBoundingClientRect();
      var top = elementComputedStyle.top,
          left = elementComputedStyle.left,
          bottom = elementComputedStyle.bottom,
          right = elementComputedStyle.right,
          transform$$1 = elementComputedStyle.transform;
      var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform$$1 };
      elementStyler.render();
      var targetBbox = element.getBoundingClientRect();
      var newPose = __assign$2({}, pose);
      changedPositionalKeys.forEach(function (key) {
          setValue(state, key, positionalValues[key](element, originBbox, originComputedStyle));
          newPose[key] = positionalValues[key](element, targetBbox, elementComputedStyle);
      });
      elementStyler.render();
      return newPose;
  };

  var dragPoses = function (draggable) {
      var drag = {
          preTransition: function (_a) {
              var dimensions = _a.dimensions;
              return dimensions.measure();
          }
      };
      var dragEnd = {};
      if (draggable === true || draggable === 'x') drag.x = dragEnd.x = 0;
      if (draggable === true || draggable === 'y') drag.y = dragEnd.y = 0;
      return { drag: drag, dragEnd: dragEnd };
  };
  var createPoseConfig = function (element, _a) {
      var onDragStart = _a.onDragStart,
          onDragEnd = _a.onDragEnd,
          onPressStart = _a.onPressStart,
          onPressEnd = _a.onPressEnd,
          draggable = _a.draggable,
          hoverable = _a.hoverable,
          focusable = _a.focusable,
          pressable = _a.pressable,
          dragBounds = _a.dragBounds,
          config = __rest$1(_a, ["onDragStart", "onDragEnd", "onPressStart", "onPressEnd", "draggable", "hoverable", "focusable", "pressable", "dragBounds"]);
      var poseConfig = __assign$2({ flip: {} }, config, { props: __assign$2({}, config.props, { onDragStart: onDragStart,
              onDragEnd: onDragEnd,
              onPressStart: onPressStart,
              onPressEnd: onPressEnd,
              dragBounds: dragBounds,
              draggable: draggable,
              hoverable: hoverable,
              focusable: focusable,
              pressable: pressable,
              element: element, elementStyler: index(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
      if (draggable) {
          var _b = dragPoses(draggable),
              drag = _b.drag,
              dragEnd = _b.dragEnd;
          poseConfig.drag = __assign$2({}, poseConfig.drag, drag);
          poseConfig.dragEnd = __assign$2({}, poseConfig.dragEnd, dragEnd);
      }
      return poseConfig;
  };
  var domPose = /*#__PURE__*/pose({
      posePriority: ['drag', 'press', 'focus', 'hover'],
      transformPose: function (_a, name, state) {
          var flip = _a.flip,
              pose$$1 = __rest$1(_a, ["flip"]);
          if (isFlipPose(flip, name, state)) {
              return flipPose(state, pose$$1);
          } else if (isPositional(pose$$1)) {
              return convertPositionalUnits(state, pose$$1);
          }
          return pose$$1;
      },
      addListenerToValue: function (key, elementStyler) {
          return function (v) {
              return elementStyler.set(key, v);
          };
      },
      readValueFromSource: function (key, _a) {
          var elementStyler = _a.elementStyler,
              dragBounds = _a.dragBounds;
          var value$$1 = elementStyler.get(key);
          if (dragBounds && (key === 'x' || key === 'y')) {
              var bound = key === 'x' ? dragBounds.left || dragBounds.right : dragBounds.top || dragBounds.bottom;
              if (bound) {
                  var boundType = getValueType$2(bound);
                  value$$1 = boundType.transform(value$$1);
              }
          }
          return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
      },
      setValueNative: function (key, to, _a) {
          var elementStyler = _a.elementStyler;
          return elementStyler.set(key, to);
      },
      extendAPI: function (api, _a, config) {
          var props = _a.props,
              activeActions = _a.activeActions;
          var measure = props.dimensions.measure;
          var poserApi = __assign$2({}, api, { addChild: function (element, childConfig) {
                  return api._addChild(createPoseConfig(element, childConfig), domPose);
              }, measure: measure, flip: function (op) {
                  if (op) {
                      measure();
                      op();
                  }
                  return api.set('flip');
              } });
          props.elementStyler.render();
          appendEventListeners(props.element, activeActions, poserApi, config);
          return poserApi;
      }
  });
  var domPose$1 = function (element, config) {
      return domPose(createPoseConfig(element, config));
  };

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
  var index$2 = memoize(reactPropsRegex.test.bind(reactPropsRegex));

  var hasChanged = function (prev, next) {
      if (prev === next)
          return false;
      var prevIsArray = Array.isArray(prev);
      var nextIsArray = Array.isArray(next);
      if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
          return true;
      }
      else if (prevIsArray && nextIsArray) {
          var numPrev = prev.length;
          var numNext = next.length;
          if (numPrev !== numNext)
              return true;
          for (var i = numPrev; i < numPrev; i++) {
              if (prev[i] !== next[i])
                  return true;
          }
      }
      return false;
  };

  var pickAssign = function (shouldPick, sources) {
      return sources.reduce(function (picked, source) {
          for (var key in source) {
              if (shouldPick(key)) {
                  picked[key] = source[key];
              }
          }
          return picked;
      }, {});
  };

  var PoseParentContext = React.createContext({});
  var calcPopFromFlowStyle = function (el) {
      var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
      return {
          position: 'absolute',
          top: offsetTop,
          left: offsetLeft,
          width: offsetWidth,
          height: offsetHeight
      };
  };
  var hasPose = function (pose, key) {
      return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
  };
  var objectToMap = function (obj) {
      return Object.keys(obj).reduce(function (map, key) {
          map.set(key, { raw: obj[key] });
          return map;
      }, new Map());
  };
  var testAlwaysTrue = function () { return true; };
  var PoseElement = (function (_super) {
      __extends(PoseElement, _super);
      function PoseElement(props) {
          var _this = _super.call(this, props) || this;
          _this.children = new Set();
          _this.childrenHandlers = {
              registerChild: function (props) {
                  _this.children.add(props);
                  if (_this.poser)
                      _this.flushChildren();
              },
              onUnmount: function (child) { return _this.poser.removeChild(child); },
              getParentPoseConfig: function () { return _this.props.poseConfig; },
              getInitialPoseFromParent: function () { return _this.getInitialPose(); }
          };
          _this.getRefs = function () {
              var refs = {};
              var elementType = _this.props.elementType;
              if (typeof elementType === 'string') {
                  refs.ref = _this.setRef;
              }
              else {
                  refs.innerRef = _this.setRef;
                  refs.hostRef = _this.setRef;
              }
              return refs;
          };
          _this.setRef = function (ref) {
              if (ref instanceof Element || (_this.ref && ref === null)) {
                  var innerRef = _this.props.innerRef;
                  if (innerRef)
                      innerRef(ref);
                  _this.ref = ref;
              }
          };
          _this.shouldForwardProp =
              typeof _this.props.elementType === 'string' ? index$2 : testAlwaysTrue;
          return _this;
      }
      PoseElement.prototype.getInitialPose = function () {
          var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
          if (initialPose) {
              return initialPose;
          }
          else {
              var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
              var thisPose = Array.isArray(pose) ? pose : [pose];
              var thisInternalPose = Array.isArray(_pose) ? _pose : [_pose];
              var initialPoses = Array.isArray(parentPose)
                  ? parentPose.concat(thisPose, thisInternalPose) : [parentPose].concat(thisPose, thisInternalPose);
              var filteredInitialPoses = initialPoses.filter(Boolean);
              return filteredInitialPoses.length ? filteredInitialPoses : undefined;
          }
      };
      PoseElement.prototype.getFirstPose = function () {
          var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
          if (!initialPose)
              return;
          var thisPose = Array.isArray(pose) ? pose : [pose];
          var thisInternalPose = Array.isArray(_pose) ? _pose : [_pose];
          return thisPose.concat(thisInternalPose);
      };
      PoseElement.prototype.getSetProps = function () {
          var _a = this.props, elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = __rest(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
          if (popFromFlow && this.ref && this.ref instanceof HTMLElement) {
              if (!this.popStyle) {
                  props.style = __assign({}, props.style, calcPopFromFlowStyle(this.ref));
                  this.popStyle = props.style;
              }
              else {
                  props.style = this.popStyle;
              }
          }
          else {
              this.popStyle = null;
          }
          return props;
      };
      PoseElement.prototype.componentDidMount = function () {
          var _this = this;
          invariant(typeof this.ref !== 'undefined', "No DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the hostRef prop to your underlying DOM element.");
          var _a = this.props, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
          var config = __assign({}, poseConfig, { initialPose: this.getInitialPose(), values: values || poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
              onDragEnd: onDragEnd,
              onPressStart: onPressStart,
              onPressEnd: onPressEnd, onChange: onValueChange });
          if (!registerChild) {
              this.initPoser(domPose$1(this.ref, config));
          }
          else {
              registerChild({
                  element: this.ref,
                  poseConfig: config,
                  onRegistered: function (poser) { return _this.initPoser(poser); }
              });
          }
      };
      PoseElement.prototype.UNSAFE_componentWillUpdate = function (_a) {
          var pose = _a.pose, _pose = _a._pose;
          if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
              this.poser.measure();
      };
      PoseElement.prototype.componentDidUpdate = function (prevProps) {
          var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
          this.poser.setProps(this.getSetProps());
          if (poseKey !== prevProps.poseKey ||
              hasChanged(prevProps.pose, pose) ||
              pose === 'flip') {
              this.setPose(pose);
          }
          if (_pose !== prevProps._pose || _pose === 'flip')
              this.setPose(_pose);
      };
      PoseElement.prototype.componentWillUnmount = function () {
          if (!this.poser)
              return;
          var onUnmount = this.props.onUnmount;
          if (onUnmount)
              onUnmount(this.poser);
          this.poser.destroy();
      };
      PoseElement.prototype.initPoser = function (poser) {
          this.poser = poser;
          this.flushChildren();
          var firstPose = this.getFirstPose();
          if (firstPose)
              this.setPose(firstPose);
      };
      PoseElement.prototype.setPose = function (pose) {
          var _this = this;
          var onPoseComplete = this.props.onPoseComplete;
          var poseList = Array.isArray(pose) ? pose : [pose];
          Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(); });
      };
      PoseElement.prototype.flushChildren = function () {
          var _this = this;
          this.children.forEach(function (_a) {
              var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
              return onRegistered(_this.poser.addChild(element, poseConfig));
          });
          this.children.clear();
      };
      PoseElement.prototype.render = function () {
          var elementType = this.props.elementType;
          return (React.createElement(PoseParentContext.Provider, { value: this.childrenHandlers }, React.createElement(elementType, pickAssign(this.shouldForwardProp, [
              this.getSetProps(),
              this.getRefs()
          ]))));
      };
      return PoseElement;
  }(React.PureComponent));

  var supportedElements = [
      'a',
      'article',
      'aside',
      'audio',
      'b',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dialog',
      'div',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'i',
      'iframe',
      'img',
      'input',
      'label',
      'legend',
      'li',
      'nav',
      'object',
      'ol',
      'option',
      'p',
      'param',
      'picture',
      'pre',
      'progress',
      'q',
      'section',
      'select',
      'span',
      'strong',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'ul',
      'video',
      'circle',
      'clipPath',
      'defs',
      'ellipse',
      'g',
      'image',
      'line',
      'linearGradient',
      'mask',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'radialGradient',
      'rect',
      'stop',
      'svg',
      'text',
      'tspan'
  ];

  var componentCache = new Map();
  var createComponentFactory = function (key) {
      var componentFactory = function (poseConfig) {
          if (poseConfig === void 0) { poseConfig = {}; }
          var config;
          return function (_a) {
              var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = __rest(_a, ["withParent"]);
              config =
                  config ||
                      (typeof poseConfig === 'function' ? poseConfig(props) : poseConfig);
              return !withParent || props.parentValues ? (React.createElement(PoseElement, __assign({ poseConfig: config, elementType: key }, props))) : (React.createElement(PoseParentContext.Consumer, null, function (parentCtx) { return (React.createElement(PoseElement, __assign({ poseConfig: config, elementType: key }, props, parentCtx))); }));
          };
      };
      componentCache.set(key, componentFactory);
      return componentFactory;
  };
  var getComponentFactory = function (key) {
      return componentCache.has(key)
          ? componentCache.get(key)
          : createComponentFactory(key);
  };
  var posed = (function (component) {
      return getComponentFactory(component);
  });
  supportedElements.reduce(function (acc, key) {
      acc[key] = getComponentFactory(key);
      return acc;
  }, posed);

  var Children$1 = React.Children, cloneElement$1 = React.cloneElement;
  var getKey = function (child) { return child.key; };
  var animateChildrenList = function (incomingChildren, pose, initialPose) {
      var children = [];
      Children$1.forEach(incomingChildren, function (child) {
          return children.push(cloneElement$1(child, { pose: pose, initialPose: initialPose }));
      });
      return children;
  };
  var mergeChildren = function (_a) {
      var incomingChildren = _a.incomingChildren, displayedChildren = _a.displayedChildren, isLeaving = _a.isLeaving, removeFromTree = _a.removeFromTree, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, flipMove = _a.flipMove;
      var children = [];
      var prevKeys = displayedChildren.map(getKey);
      var nextKeys = incomingChildren.map(getKey);
      var entering = new Set(nextKeys.filter(function (key) { return isLeaving.has(key) || prevKeys.indexOf(key) === -1; }));
      entering.forEach(function (key) { return isLeaving.delete(key); });
      var leaving = prevKeys.filter(function (key) {
          return !entering.has(key) && (isLeaving.has(key) || nextKeys.indexOf(key) === -1);
      });
      leaving.forEach(function (key) { return isLeaving.add(key); });
      var moving = new Set(prevKeys.filter(function (key, i) {
          var nextIndex = nextKeys.indexOf(key);
          return !entering.has(key) && nextIndex !== -1 && i !== nextIndex;
      }));
      incomingChildren.forEach(function (child) {
          var newChildProps = entering.has(child.key)
              ? { initialPose: preEnterPose, _pose: enterPose }
              : moving.has(child.key) && flipMove
                  ? { _pose: [enterPose, 'flip'] }
                  : { _pose: enterPose };
          children.push(cloneElement$1(child, newChildProps));
      });
      leaving.forEach(function (key) {
          var child = displayedChildren.find(function (c) { return c.key === key; });
          var newChild = cloneElement$1(child, {
              _pose: exitPose,
              onPoseComplete: removeFromTree(key),
              popFromFlow: flipMove
          });
          var insertionIndex = prevKeys.indexOf(key);
          children.splice(insertionIndex, 0, newChild);
      });
      return children;
  };
  var handleIncomingChildren = function (props) {
      var displayedChildren = props.displayedChildren, incomingChildren = props.incomingChildren, animateOnMount = props.animateOnMount, preEnterPose = props.preEnterPose, enterPose = props.enterPose;
      if (!displayedChildren && animateOnMount) {
          return animateChildrenList(incomingChildren, enterPose, preEnterPose);
      }
      else if (displayedChildren) {
          return mergeChildren(props);
      }
      else {
          return animateChildrenList(incomingChildren, enterPose);
      }
  };
  var makeChildList = function (children) {
      var list = [];
      Children$1.forEach(children, function (child) { return child && list.push(child); });
      return list;
  };
  var removeFromChildren = function (children, key) { return children.filter(function (child) { return child.key !== key; }); };

  var PoseGroup = (function (_super) {
      __extends(PoseGroup, _super);
      function PoseGroup() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.state = {
              incomingChildren: [],
              isLeaving: new Set(),
              removeFromTree: function (key) { return function () {
                  var isLeaving = _this.state.isLeaving;
                  isLeaving.delete(key);
                  _this.removeFromChildren(key);
              }; }
          };
          return _this;
      }
      PoseGroup.prototype.removeFromChildren = function (key) {
          var children = this.state.children;
          this.setState({
              children: removeFromChildren(children, key)
          });
      };
      PoseGroup.prototype.shouldComponentUpdate = function (nextProps, nextState) {
          return this.state !== nextState;
      };
      PoseGroup.prototype.render = function () {
          return React.createElement(React.Fragment, null, this.state.children);
      };
      PoseGroup.defaultProps = {
          flipMove: true,
          preEnterPose: 'exit',
          enterPose: 'enter',
          exitPose: 'exit',
          singleChildOnly: false
      };
      PoseGroup.getDerivedStateFromProps = function (props, _a) {
          var isLeaving = _a.isLeaving, removeFromTree = _a.removeFromTree, children = _a.children;
          var incomingChildren = makeChildList(props.children);
          return {
              incomingChildren: incomingChildren,
              children: handleIncomingChildren({
                  incomingChildren: incomingChildren,
                  displayedChildren: children,
                  isLeaving: isLeaving,
                  removeFromTree: removeFromTree,
                  enterPose: props.enterPose,
                  exitPose: props.exitPose,
                  flipMove: props.flipMove,
                  animateOnMount: props.animateOnMount,
                  preEnterPose: props.preEnterPose
              })
          };
      };
      return PoseGroup;
  }(React.Component));

  var Outer$2 = styled__default.div.attrs({
    className: 'crystallize-basket__totals'
  }).withConfig({
    displayName: "styles__Outer",
    componentId: "g48tmx-0"
  })(["padding:15px;flex:0 0 auto;"]);
  var Rows = styled__default.div.attrs({
    className: 'crystallize-basket__totals-rows'
  }).withConfig({
    displayName: "styles__Rows",
    componentId: "g48tmx-1"
  })(["position:relative;"]);
  var TotalsSpinner = styled__default.div.attrs({
    className: 'crystallize-basket__totals-spinner'
  }).withConfig({
    displayName: "styles__TotalsSpinner",
    componentId: "g48tmx-2"
  })(["position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;z-index:1;"]);
  var Row = styled__default.div.attrs({
    className: function className(p) {
      return "crystallize-basket__totals-row crystallize-basket__totals-row--".concat(p.modifier);
    }
  }).withConfig({
    displayName: "styles__Row",
    componentId: "g48tmx-3"
  })(["display:grid;grid-template-columns:2fr 1fr;&:not(:last-child){margin-bottom:5px;}>:last-child{text-align:right;opacity:", ";}"], function (p) {
    return p.hideValue ? '0' : '1';
  });
  var StrikeThrough = styled__default.span.attrs({
    className: 'crystallize-basket__strike-through'
  }).withConfig({
    displayName: "styles__StrikeThrough",
    componentId: "g48tmx-4"
  })(["text-decoration:line-through;"]);

  var TotalsInner =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TotalsInner, _React$Component);

    function TotalsInner() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, TotalsInner);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TotalsInner.__proto__ || Object.getPrototypeOf(TotalsInner)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {}
      }), _temp));
    }

    _createClass(TotalsInner, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            t = _this$props.t,
            state = _this$props.state,
            _this$props$SpinnerCm = _this$props.SpinnerCmp,
            SpinnerCmp = _this$props$SpinnerCm === void 0 ? DefaultSpinner : _this$props$SpinnerCm,
            _this$props$hideCoupo = _this$props.hideCoupon,
            hideCoupon = _this$props$hideCoupo === void 0 ? false : _this$props$hideCoupo;
        var discount = state.discount,
            totalPrice = state.totalPrice,
            totalPriceMinusDiscount = state.totalPriceMinusDiscount,
            totalToPay = state.totalToPay,
            shipping = state.shipping,
            freeShipping = state.freeShipping,
            validating = state.validating;
        return React__default.createElement(Outer$2, null, React__default.createElement(Rows, null, React__default.createElement(Row, {
          hideValue: validating,
          modifier: "total-price"
        }, React__default.createElement("span", null, t('basket:totalPrice', state), ":"), React__default.createElement("span", null, t('currency', {
          amount: totalPrice
        }))), discount && React__default.createElement(React.Fragment, null, React__default.createElement(Row, {
          hideValue: validating,
          modifier: "discount"
        }, React__default.createElement("span", null, t('basket:discount', state), ":"), React__default.createElement("span", null, t('currency', {
          amount: discount
        }))), React__default.createElement(Row, {
          hideValue: validating,
          modifier: "total-after-discount"
        }, React__default.createElement("span", null, t('basket:totalAfterDiscount', state), ":"), React__default.createElement("span", null, t('currency', {
          amount: totalPriceMinusDiscount
        })))), React__default.createElement(Row, {
          hideValue: validating,
          modifier: "shipping"
        }, React__default.createElement("span", null, t('basket:shipping', state), ":"), freeShipping ? React__default.createElement("span", null, shipping && shipping.unit_price > 0 && React__default.createElement(StrikeThrough, null, t('currency', {
          amount: shipping.unit_price
        })), ' ', t('currency', {
          amount: 0
        })) : React__default.createElement("span", null, t('currency', {
          amount: shipping ? shipping.unit_price : 0
        }))), React__default.createElement(Row, {
          hideValue: validating,
          modifier: "to-pay"
        }, React__default.createElement("span", null, t('basket:amountToPay', state), ":"), React__default.createElement("span", null, t('currency', {
          amount: totalToPay
        }))), validating && React__default.createElement(TotalsSpinner, null, React__default.createElement(SpinnerCmp, {
          size: "25"
        }))), !hideCoupon && React__default.createElement(Coupon, {
          SpinnerCmp: SpinnerCmp
        }));
      }
    }]);

    return TotalsInner;
  }(React__default.Component);
  var Totals = translate(['common', 'basket'])(function (outerProps) {
    return React__default.createElement(BasketConsumer, null, function (props) {
      return React__default.createElement(TotalsInner, _extends({}, props, outerProps));
    });
  });

  var build$1 = createCommonjsModule(function (module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
  	module.exports = factory(React__default);
  })(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
  /******/ 		if(mode & 1) value = __webpack_require__(value);
  /******/ 		if(mode & 8) return value;
  /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
  /******/ 		var ns = Object.create(null);
  /******/ 		__webpack_require__.r(ns);
  /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
  /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
  /******/ 		return ns;
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/ })
  /************************************************************************/
  /******/ ({

  /***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/get-iterator.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
  /*!***********************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/is-iterable */ \"./node_modules/core-js/library/fn/is-iterable.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/is-iterable.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/object/assign.js":
  /*!*************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/assign.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/object/create.js":
  /*!*************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/create.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
    \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/symbol.js":
  /*!******************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
  /*!***************************************************************!*\
    !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol/iterator.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
  /*!**************************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/createClass.js":
  /*!***********************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/extends.js":
  /*!*******************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/extends.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _assign = __webpack_require__(/*! ../core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _assign2.default || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/extends.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/inherits.js":
  /*!********************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/inherits.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nexports.default = function (obj, keys) {\n  var target = {};\n\n  for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;\n    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;\n    target[i] = obj[i];\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/objectWithoutProperties.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
    \*************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
  /*!*************************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/babel-runtime/core-js/is-iterable.js\");\n\nvar _isIterable3 = _interopRequireDefault(_isIterable2);\n\nvar _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function sliceIterator(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n\n    try {\n      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n        _arr.push(_s.value);\n\n        if (i && _arr.length === i) break;\n      }\n    } catch (err) {\n      _d = true;\n      _e = err;\n    } finally {\n      try {\n        if (!_n && _i[\"return\"]) _i[\"return\"]();\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n\n    return _arr;\n  }\n\n  return function (arr, i) {\n    if (Array.isArray(arr)) {\n      return arr;\n    } else if ((0, _isIterable3.default)(Object(arr))) {\n      return sliceIterator(arr, i);\n    } else {\n      throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/slicedToArray.js?");

  /***/ }),

  /***/ "./node_modules/babel-runtime/helpers/typeof.js":
  /*!******************************************************!*\
    !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/typeof.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/get-iterator.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/get-iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/is-iterable.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.is-iterable */ \"./node_modules/core-js/library/modules/core.is-iterable.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/is-iterable.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/object/assign.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/fn/object/assign.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/assign.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/object/create.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/fn/object/create.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/object/define-property.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/symbol/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_a-function.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_a-function.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
    \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_an-object.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_an-object.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_array-includes.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_classof.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_classof.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_classof.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_cof.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_cof.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_core.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_core.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("var core = module.exports = { version: '2.5.3' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_ctx.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_ctx.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_defined.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_defined.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_descriptors.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_dom-create.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_enum-keys.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_export.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_export.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && key in exports) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_fails.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_fails.js ***!
    \********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_global.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_global.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_has.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_has.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_hide.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_hide.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_html.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_html.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_iobject.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_iobject.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_is-array.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_is-array.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_is-object.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_is-object.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_iter-create.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_iter-define.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = (!BUGGY && $native) || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_iter-step.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_iterators.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_iterators.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_library.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_library.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_meta.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_meta.js ***!
    \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-assign.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-assign.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-create.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-create.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-dp.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-dps.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-gopd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
    \******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-gopn.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-gops.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-gpo.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-keys.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_object-pie.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_property-desc.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_redefine.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_redefine.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_set-proto.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_shared-key.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_shared.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_shared.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_string-at.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_string-at.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-integer.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-iobject.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-length.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-length.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-object.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-object.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_to-primitive.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
    \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_uid.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_uid.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_wks-define.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_wks-ext.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
    \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/_wks.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/library/modules/_wks.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
    \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator-method.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
    \******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").isIterable = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined\n    || '@@iterator' in O\n    // eslint-disable-next-line no-prototype-builtins\n    || Iterators.hasOwnProperty(classof(O));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.is-iterable.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
    \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.assign.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.object.create.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
    \*******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
    \****************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
    \*****************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
    \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
    \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es6.symbol.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
    \***************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

  /***/ }),

  /***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
    \******************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

  /***/ }),

  /***/ "./node_modules/fbjs/lib/emptyFunction.js":
  /*!************************************************!*\
    !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/emptyFunction.js?");

  /***/ }),

  /***/ "./node_modules/fbjs/lib/invariant.js":
  /*!********************************************!*\
    !*** ./node_modules/fbjs/lib/invariant.js ***!
    \********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (true) {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

  /***/ }),

  /***/ "./node_modules/fbjs/lib/warning.js":
  /*!******************************************!*\
    !*** ./node_modules/fbjs/lib/warning.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\nvar emptyFunction = __webpack_require__(/*! ./emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\n\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\nvar warning = emptyFunction;\n\nif (true) {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/warning.js?");

  /***/ }),

  /***/ "./node_modules/object-assign/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/object-assign/index.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

  /***/ }),

  /***/ "./node_modules/prop-types/checkPropTypes.js":
  /*!***************************************************!*\
    !*** ./node_modules/prop-types/checkPropTypes.js ***!
    \***************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n  var warning = __webpack_require__(/*! fbjs/lib/warning */ \"./node_modules/fbjs/lib/warning.js\");\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/checkPropTypes.js?");

  /***/ }),

  /***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
  /*!************************************************************!*\
    !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
    \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\nvar warning = __webpack_require__(/*! fbjs/lib/warning */ \"./node_modules/fbjs/lib/warning.js\");\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          invariant(\n            false,\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n        } else if (\"development\" !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            warning(\n              false,\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `%s` prop on `%s`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',\n              propFullName,\n              componentName\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        warning(\n          false,\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received %s at index %s.',\n          getPostfixForTypeWarning(checker),\n          i\n        );\n        return emptyFunction.thatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?");

  /***/ }),

  /***/ "./node_modules/prop-types/index.js":
  /*!******************************************!*\
    !*** ./node_modules/prop-types/index.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (true) {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(isValidElement, throwOnDirectAccess);\n} else {}\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?");

  /***/ }),

  /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
    \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

  /***/ }),

  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ \"./node_modules/babel-runtime/helpers/objectWithoutProperties.js\");\n\nvar _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"./node_modules/babel-runtime/helpers/slicedToArray.js\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nexports.generateImageVariationsFromSrc = generateImageVariationsFromSrc;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// The default image variations created by Crystallize\nvar imageVariations = \"300 320 414 768 828 1280 1366 1440 1536 1920 2560 3200\".split(\" \");\n\nfunction generateImageVariationsFromSrc(src) {\n  if (typeof src !== \"string\") {\n    throw new Error(\"@crystallize/react-image: src is not a string\");\n  }\n\n  var match = src.match(/(.+)\\.(jpg|jpeg|png|webp)$/);\n  if (!match) {\n    return [];\n  }\n\n  var _match = (0, _slicedToArray3.default)(match, 3),\n      name = _match[1],\n      extension = _match[2];\n\n  return imageVariations.map(function (i) {\n    return name + \"/_resized_\" + i + \".\" + extension;\n  });\n}\n\nvar CrystallizeImage = function (_React$Component) {\n  (0, _inherits3.default)(CrystallizeImage, _React$Component);\n\n  function CrystallizeImage() {\n    (0, _classCallCheck3.default)(this, CrystallizeImage);\n    return (0, _possibleConstructorReturn3.default)(this, (CrystallizeImage.__proto__ || Object.getPrototypeOf(CrystallizeImage)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(CrystallizeImage, [{\n    key: \"createSrcSet\",\n    value: function createSrcSet(srcVariations) {\n      if (!srcVariations || !srcVariations.length) {\n        return;\n      }\n\n      var maxWidth = parseInt(this.props.width || -1, 10);\n      var sets = [];\n      srcVariations.forEach(function (variation) {\n        var widthMatch = variation.match(/_(\\d+)\\.(jpg|jpeg|png|webp)$/);\n        if (widthMatch) {\n          var width = widthMatch[1];\n          if (maxWidth === -1 || width <= maxWidth) {\n            sets.push(variation + \" \" + width + \"w\");\n          }\n        }\n      });\n\n      if (sets.length) {\n        return sets.join(\", \");\n      }\n    }\n  }, {\n    key: \"getDefaultSrc\",\n    value: function getDefaultSrc(srcVariations) {\n      if (!srcVariations || !srcVariations.length) {\n        return;\n      }\n      return srcVariations[0];\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          media = _props.media,\n          src = _props.src,\n          srcVariations = _props.srcVariations,\n          product_image = _props.product_image,\n          rest = (0, _objectWithoutProperties3.default)(_props, [\"media\", \"src\", \"srcVariations\", \"product_image\"]);\n\n      var srcToUse = src;\n\n      if (media && media.url) {\n        srcToUse = media.url;\n      } else if (product_image) {\n        srcToUse = product_image;\n      }\n\n      // Gifs are not supported atm.\n      if (srcToUse && srcToUse.includes(\".gif\")) {\n        return _react2.default.createElement(\"img\", (0, _extends3.default)({ src: srcToUse }, rest));\n      }\n\n      var srcVariationsToUse = media && media.product_image_variations ? media.product_image_variations : srcVariations;\n\n      if (!srcVariationsToUse && srcToUse && srcToUse.startsWith(\"https://accelerated.atoms.crystallize.digital\")) {\n        srcVariationsToUse = generateImageVariationsFromSrc(srcToUse);\n      }\n\n      var srcSet = this.createSrcSet(srcVariationsToUse);\n\n      if (!srcSet) {\n        return _react2.default.createElement(\"img\", (0, _extends3.default)({ src: srcToUse }, rest));\n      }\n\n      srcToUse = srcToUse || this.getDefaultSrc(srcVariationsToUse);\n      return _react2.default.createElement(\"img\", (0, _extends3.default)({ src: srcToUse, srcSet: srcSet }, rest));\n    }\n  }]);\n  return CrystallizeImage;\n}(_react2.default.Component);\n\nCrystallizeImage.propTypes = {\n  src: _propTypes2.default.string,\n  srcVariations: _propTypes2.default.arrayOf(_propTypes2.default.string),\n  media: _propTypes2.default.shape({\n    url: _propTypes2.default.string,\n    product_image_variations: _propTypes2.default.arrayOf(_propTypes2.default.string)\n  }),\n  alt: _propTypes2.default.string.isRequired\n};\n\nexports.default = CrystallizeImage;\n\n//# sourceURL=webpack:///./src/index.js?");

  /***/ }),

  /***/ 0:
  /*!****************************!*\
    !*** multi ./src/index.js ***!
    \****************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

  /***/ }),

  /***/ "react":
  /*!***********************************************************************!*\
    !*** external {"commonjs":"react","commonjs2":"react","amd":"react"} ***!
    \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

  /***/ })

  /******/ });
  });
  });

  var CrystallizeImage = unwrapExports(build$1);

  var animationItemHighlight = styled.keyframes(["0%{transform:scale(1);}25%{transform:scale(0.95);}50%{transform:scale(0.97);}75%{transform:scale(0.93);}100%{transform:scale(1);}"]);
  var Item = styled__default.div.attrs({
    className: function className(p) {
      var b = "crystallize-basket__item-inner";

      if (p.animate) {
        return "".concat(b, " ").concat(b, "--animate");
      }

      return b;
    }
  }).withConfig({
    displayName: "item__Item",
    componentId: "sc-1w3cru-0"
  })(["display:grid;grid-template-columns:3fr 1fr;padding:15px 20px;border-bottom:1px solid #eee;position:relative;", ";"], function (p) {
    return p.animate && "\n    animation: ".concat(animationItemHighlight, " ").concat(animationSpeedMs, "ms 1;\n  ");
  });
  var ItemInfo = styled__default.span.attrs({
    className: 'crystallize-basket__item-info'
  }).withConfig({
    displayName: "item__ItemInfo",
    componentId: "sc-1w3cru-1"
  })(["display:flex;align-items:center;"]);
  var ItemInfoText = styled__default.div.attrs({
    className: 'crystallize-basket__item-info-text'
  }).withConfig({
    displayName: "item__ItemInfoText",
    componentId: "sc-1w3cru-2"
  })([""]);
  var ItemImage = styled__default(CrystallizeImage).attrs({
    className: 'crystallize-basket__item-image'
  }).withConfig({
    displayName: "item__ItemImage",
    componentId: "sc-1w3cru-3"
  })(["width:50px;margin-right:10px;"]);
  var ItemName = styled__default.div.attrs({
    className: 'crystallize-basket__item-name'
  }).withConfig({
    displayName: "item__ItemName",
    componentId: "sc-1w3cru-4"
  })([""]);
  var ItemQuantityChanger = styled__default.span.attrs({
    className: 'crystallize-basket__item-quantity-changer'
  }).withConfig({
    displayName: "item__ItemQuantityChanger",
    componentId: "sc-1w3cru-5"
  })(["display:flex;align-items:center;justify-content:space-between;"]);
  var ItemQuantity = styled__default.span.attrs({
    className: 'crystallize-basket__item-quantity'
  }).withConfig({
    displayName: "item__ItemQuantity",
    componentId: "sc-1w3cru-6"
  })(["display:inline-block;margin:0 3px;min-width:23px;text-align:center;"]);
  var ItemDelete = styled__default.button.attrs({
    className: 'crystallize-basket__item-delete'
  }).withConfig({
    displayName: "item__ItemDelete",
    componentId: "sc-1w3cru-7"
  })(["position:absolute;top:2px;right:2px;font-size:0px;&:before{content:'+';display:block;transform:rotate(45deg);font-size:12px;}"]);
  var Attributes = styled__default.div.attrs({
    className: 'crystallize-basket__item-attributes'
  }).withConfig({
    displayName: "item__Attributes",
    componentId: "sc-1w3cru-8"
  })(["margin-top:5px;font-size:0.8rem;"]);
  var Attribute = styled__default.div.attrs({
    className: 'crystallize-basket__item-attribute'
  }).withConfig({
    displayName: "item__Attribute",
    componentId: "sc-1w3cru-9"
  })([""]);
  var PriceWrap = styled__default.div.attrs({
    className: "crystallize-basket__item-price-wrap"
  }).withConfig({
    displayName: "item__PriceWrap",
    componentId: "sc-1w3cru-10"
  })(["display:flex;margin-top:5px;"]);
  var Price = styled__default.div.attrs({
    className: function className(p) {
      return "crystallize-basket__item-price crystallize-basket__item-price--original ".concat(p.isDiscounted && 'crystallize-basket__item-price--original-discounted');
    }
  }).withConfig({
    displayName: "item__Price",
    componentId: "sc-1w3cru-11"
  })(["", ";"], function (p) {
    return p.isDiscounted && 'text-decoration: line-through';
  });
  var PriceDiscounted = styled__default.div.attrs({
    className: "crystallize-basket__item-price crystallize-basket__item-price--discounted"
  }).withConfig({
    displayName: "item__PriceDiscounted",
    componentId: "sc-1w3cru-12"
  })(["margin-left:10px;text-decoration:line-through;"]);
  var SubInfoOuter = styled__default.div.attrs({
    className: 'crystallize-basket__item-subscription'
  }).withConfig({
    displayName: "item__SubInfoOuter",
    componentId: "sc-1w3cru-13"
  })(["font-size:0.8rem;"]);
  var SubInfoLine = styled__default.div.attrs({
    className: 'crystallize-basket__item-subscription-line'
  }).withConfig({
    displayName: "item__SubInfoLine",
    componentId: "sc-1w3cru-14"
  })(["margin-top:5px;"]);

  function ItemSubscriptionInfo(_ref) {
    var t = _ref.t,
        plan = _objectWithoutProperties(_ref, ["t"]);

    return React__default.createElement(SubInfoOuter, null, React__default.createElement(SubInfoLine, null, t('basket:subscriptionInitialInfo', plan)), React__default.createElement(SubInfoLine, null, t('basket:subscriptionRenewalInfo', plan)));
  }

  var TinyBasketItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TinyBasketItem, _React$Component);

    function TinyBasketItem() {
      var _ref2;

      var _temp, _this;

      _classCallCheck(this, TinyBasketItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = TinyBasketItem.__proto__ || Object.getPrototypeOf(TinyBasketItem)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {}
      }), Object.defineProperty(_assertThisInitialized(_this), "increment", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          var _this$props = _this.props,
              actions = _this$props.actions,
              item = _this$props.item;
          actions.incrementQuantityItem(item);
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "decrement", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          var _this$props2 = _this.props,
              actions = _this$props2.actions,
              item = _this$props2.item;
          actions.decrementQuantityItem(item);
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          var _this$props3 = _this.props,
              actions = _this$props3.actions,
              item = _this$props3.item;
          actions.removeItem(item);
        }
      }), _temp));
    }

    _createClass(TinyBasketItem, [{
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            item = _this$props4.item,
            t = _this$props4.t,
            _this$props4$itemImag = _this$props4.itemImageSizes,
            itemImageSizes = _this$props4$itemImag === void 0 ? '100px' : _this$props4$itemImag;
        var attributes = item.attributes,
            subscription = item.subscription;
        var isDiscounted = !!item.discount_rate;
        var discountedPrice = Math.round(item.unit_price - item.unit_price * (item.discount_rate / 100));
        var isSubscription = !!subscription;

        if (item.animate) {
          console.log('ANIMATING!', item);
        }

        return React__default.createElement(Item, {
          animate: item.animate,
          isSubscription: isSubscription
        }, React__default.createElement(ItemInfo, null, React__default.createElement(ItemImage, {
          src: item.product_image,
          alt: item.name,
          sizes: itemImageSizes
        }), React__default.createElement(ItemInfoText, null, React__default.createElement(ItemName, null, isSubscription ? t('basket:subscriptionItemName', item) : item.name), attributes && attributes.length > 0 && React__default.createElement(Attributes, null, attributes.map(function (a) {
          return React__default.createElement(Attribute, {
            key: a.attribute_key
          }, a.attribute_key, ": ", a.attribute_value);
        })), isSubscription ? React__default.createElement(ItemSubscriptionInfo, _extends({
          t: t
        }, subscription)) : React__default.createElement(PriceWrap, null, React__default.createElement(Price, {
          isDiscounted: isDiscounted
        }, t('currency', {
          amount: item.unit_price
        })), isDiscounted && React__default.createElement(PriceDiscounted, null, t('currency', {
          amount: discountedPrice
        }))))), React__default.createElement(ItemQuantityChanger, null, React__default.createElement("button", {
          onClick: this.decrement,
          type: "button",
          disabled: item.quantity === 1
        }, "-"), React__default.createElement(ItemQuantity, null, item.quantity), React__default.createElement("button", {
          onClick: this.increment,
          type: "button"
        }, "+")), React__default.createElement(ItemDelete, {
          onClick: this.remove
        }, t('basket:removeItemFromBasket', item)));
      }
    }]);

    return TinyBasketItem;
  }(React__default.Component);

  var Outer$3 = styled__default.div.attrs({
    className: 'crystallize-basket crystallize-basket--tiny'
  }).withConfig({
    displayName: "styles__Outer",
    componentId: "vjw52v-0"
  })(["padding-bottom:15px;"]);
  var Items = styled__default.ul.attrs({
    className: 'crystallize-basket__items'
  }).withConfig({
    displayName: "styles__Items",
    componentId: "vjw52v-1"
  })(["flex:1 1 auto;display:block;margin:0;padding:0;list-style:none;overflow-y:auto;"]);
  var BasketIsEmpty = styled__default.div.attrs({
    className: 'crystallize-basket__basket-is-empty'
  }).withConfig({
    displayName: "styles__BasketIsEmpty",
    componentId: "vjw52v-2"
  })(["text-align:center;margin:25px;"]);
  var RemainingUntilFreeShipping = styled__default.div.attrs({
    className: 'crystallize-basket__remaining-until-free-shipping'
  }).withConfig({
    displayName: "styles__RemainingUntilFreeShipping",
    componentId: "vjw52v-3"
  })(["text-align:center;"]);
  var ItemIsSubscription = styled__default.strong.withConfig({
    displayName: "styles__ItemIsSubscription",
    componentId: "vjw52v-4"
  })(["display:block;font-weight:bold;"]);

  var PosedItem = posed.li({
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.5
    }
  });
  var StyledPosedItem = styled__default(PosedItem).attrs({
    className: function className(p) {
      return "crystallize-basket__item".concat(p.subscription ? ' crystallize-basket__item--has-subscription' : '');
    }
  }).withConfig({
    displayName: "tiny-basket__StyledPosedItem",
    componentId: "sc-1r4cnvd-0"
  })(["display:block;margin:0;"]);

  var TinyBasketInner =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(TinyBasketInner, _React$Component);

    function TinyBasketInner() {
      _classCallCheck(this, TinyBasketInner);

      return _possibleConstructorReturn(this, (TinyBasketInner.__proto__ || Object.getPrototypeOf(TinyBasketInner)).apply(this, arguments));
    }

    _createClass(TinyBasketInner, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            t = _this$props.t,
            state = _this$props.state,
            actions = _this$props.actions,
            _this$props$SpinnerCm = _this$props.SpinnerCmp,
            SpinnerCmp = _this$props$SpinnerCm === void 0 ? DefaultSpinner : _this$props$SpinnerCm,
            _this$props$ItemCmp = _this$props.ItemCmp,
            ItemCmp = _this$props$ItemCmp === void 0 ? TinyBasketItem : _this$props$ItemCmp,
            _this$props$hideTotal = _this$props.hideTotals,
            hideTotals = _this$props$hideTotal === void 0 ? false : _this$props$hideTotal,
            _this$props$hideCoupo = _this$props.hideCoupon,
            hideCoupon = _this$props$hideCoupo === void 0 ? false : _this$props$hideCoupo,
            _this$props$hideRemai = _this$props.hideRemainingUntilFreeShipping,
            hideRemainingUntilFreeShipping = _this$props$hideRemai === void 0 ? false : _this$props$hideRemai,
            itemImageSizes = _this$props.itemImageSizes;
        var items = state.items,
            freeShipping = state.freeShipping,
            validating = state.validating,
            remainingUntilFreeShippingApplies = state.remainingUntilFreeShippingApplies;

        if (!items.length) {
          return React__default.createElement(Outer$3, null, React__default.createElement(BasketIsEmpty, null, t('basket:empty', state)));
        }

        return React__default.createElement(Outer$3, null, React__default.createElement(Items, null, React__default.createElement(PoseGroup, null, items.map(function (item) {
          return React__default.createElement(StyledPosedItem, {
            key: item.basketId,
            item: item
          }, React__default.createElement(ItemCmp, {
            actions: actions,
            item: item,
            t: t,
            itemImageSizes: itemImageSizes
          }));
        }))), !hideTotals && React__default.createElement(Totals, {
          SpinnerCmp: SpinnerCmp,
          hideCoupon: hideCoupon
        }), !hideRemainingUntilFreeShipping && !validating && !freeShipping && remainingUntilFreeShippingApplies > 0 && React__default.createElement(RemainingUntilFreeShipping, null, t('basket:remainingUntilFreeShippingApplies', state)));
      }
    }]);

    return TinyBasketInner;
  }(React__default.Component);

  var TinyBasket = translate(['common', 'basket'])(function (outerProps) {
    return React__default.createElement(BasketConsumer, null, function (props) {
      return React__default.createElement(TinyBasketInner, _extends({}, props, outerProps));
    });
  });

  exports.parseBasketItem = parseBasketItem$1;
  exports.createBasketItem = createBasketItem$1;
  exports.getSupportedOptionsFromProps = getSupportedOptionsFromProps$1;
  exports.validateBasket = validateBasket$1;
  exports.BasketProvider = BasketProvider;
  exports.BasketConsumer = BasketConsumer;
  exports.BigBasket = BigBasket;
  exports.TinyBasket = TinyBasket;
  exports.Coupon = Coupon;
  exports.Totals = Totals;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
