(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Scorm12API2 = _interopRequireDefault(require("./Scorm12API"));

var _aicc_cmi = require("./cmi/aicc_cmi");

var _scorm12_cmi = require("./cmi/scorm12_cmi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * The AICC API class
 */
var AICC = /*#__PURE__*/function (_Scorm12API) {
  _inherits(AICC, _Scorm12API);

  var _super = _createSuper(AICC);

  /**
   * Constructor to create AICC API object
   * @param {object} settings
   */
  function AICC(settings) {
    var _this;

    _classCallCheck(this, AICC);

    var finalSettings = _objectSpread(_objectSpread({}, {
      mastery_override: false
    }), settings);

    _this = _super.call(this, finalSettings);
    _this.cmi = new _aicc_cmi.CMI();
    _this.nav = new _scorm12_cmi.NAV();
    return _this;
  }
  /**
   * Gets or builds a new child element to add to the array.
   *
   * @param {string} CMIElement
   * @param {any} value
   * @param {boolean} foundFirstIndex
   * @return {object}
   */


  _createClass(AICC, [{
    key: "getChildElement",
    value: function getChildElement(CMIElement, value, foundFirstIndex) {
      var newChild = _get(_getPrototypeOf(AICC.prototype), "getChildElement", this).call(this, CMIElement, value, foundFirstIndex);

      if (!newChild) {
        if (this.stringMatches(CMIElement, 'cmi\\.evaluation\\.comments\\.\\d')) {
          newChild = new _aicc_cmi.CMIEvaluationCommentsObject();
        } else if (this.stringMatches(CMIElement, 'cmi\\.student_data\\.tries\\.\\d')) {
          newChild = new _aicc_cmi.CMITriesObject();
        } else if (this.stringMatches(CMIElement, 'cmi\\.student_data\\.attempt_records\\.\\d')) {
          newChild = new _aicc_cmi.CMIAttemptRecordsObject();
        }
      }

      return newChild;
    }
    /**
     * Replace the whole API with another
     *
     * @param {AICC} newAPI
     */

  }, {
    key: "replaceWithAnotherScormAPI",
    value: function replaceWithAnotherScormAPI(newAPI) {
      // Data Model
      this.cmi = newAPI.cmi;
      this.nav = newAPI.nav;
    }
  }]);

  return AICC;
}(_Scorm12API2["default"]);

exports["default"] = AICC;

},{"./Scorm12API":3,"./cmi/aicc_cmi":5,"./cmi/scorm12_cmi":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./cmi/common");

var _exceptions = require("./exceptions");

var _error_codes2 = _interopRequireDefault(require("./constants/error_codes"));

var _api_constants = _interopRequireDefault(require("./constants/api_constants"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var global_constants = _api_constants["default"].global;
var scorm12_error_codes = _error_codes2["default"].scorm12;
/**
 * Base API class for AICC, SCORM 1.2, and SCORM 2004. Should be considered
 * abstract, and never initialized on it's own.
 */

var BaseAPI = /*#__PURE__*/function () {
  /**
   * Constructor for Base API class. Sets some shared API fields, as well as
   * sets up options for the API.
   * @param {object} error_codes
   * @param {object} settings
   */
  function BaseAPI(error_codes, settings) {
    _classCallCheck(this, BaseAPI);

    _timeout.set(this, {
      writable: true,
      value: void 0
    });

    _error_codes.set(this, {
      writable: true,
      value: void 0
    });

    _settings.set(this, {
      writable: true,
      value: {
        autocommit: false,
        autocommitSeconds: 60,
        lmsCommitUrl: false,
        dataCommitFormat: 'json',
        // valid formats are 'json' or 'flattened', 'params'
        commitRequestDataType: 'application/json;charset=UTF-8',
        autoProgress: false,
        logLevel: global_constants.LOG_LEVEL_ERROR
      }
    });

    _defineProperty(this, "cmi", void 0);

    _defineProperty(this, "startingData", void 0);

    if ((this instanceof BaseAPI ? this.constructor : void 0) === BaseAPI) {
      throw new TypeError('Cannot construct BaseAPI instances directly');
    }

    this.currentState = global_constants.STATE_NOT_INITIALIZED;
    this.lastErrorCode = 0;
    this.listenerArray = [];

    _classPrivateFieldSet(this, _timeout, null);

    _classPrivateFieldSet(this, _error_codes, error_codes);

    this.settings = settings;
    this.apiLogLevel = this.settings.logLevel;
  }
  /**
   * Initialize the API
   * @param {string} callbackName
   * @param {string} initializeMessage
   * @param {string} terminationMessage
   * @return {string}
   */


  _createClass(BaseAPI, [{
    key: "initialize",
    value: function initialize(callbackName, initializeMessage, terminationMessage) {
      var returnValue = global_constants.SCORM_FALSE;

      if (this.isInitialized()) {
        this.throwSCORMError(_classPrivateFieldGet(this, _error_codes).INITIALIZED, initializeMessage);
      } else if (this.isTerminated()) {
        this.throwSCORMError(_classPrivateFieldGet(this, _error_codes).TERMINATED, terminationMessage);
      } else {
        this.currentState = global_constants.STATE_INITIALIZED;
        this.lastErrorCode = 0;
        returnValue = global_constants.SCORM_TRUE;
        this.processListeners(callbackName);
      }

      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      this.clearSCORMError(returnValue);
      return returnValue;
    }
    /**
     * Getter for #settings
     * @return {object}
     */

  }, {
    key: "terminate",

    /**
     * Terminates the current run of the API
     * @param {string} callbackName
     * @param {boolean} checkTerminated
     * @return {string}
     */
    value: function terminate(callbackName, checkTerminated) {
      var returnValue = global_constants.SCORM_FALSE;

      if (this.checkState(checkTerminated, _classPrivateFieldGet(this, _error_codes).TERMINATION_BEFORE_INIT, _classPrivateFieldGet(this, _error_codes).MULTIPLE_TERMINATION)) {
        this.currentState = global_constants.STATE_TERMINATED;
        var result = this.storeData(true);

        if (result.errorCode && result.errorCode > 0) {
          this.throwSCORMError(result.errorCode);
        }

        returnValue = result.result ? result.result : global_constants.SCORM_FALSE;
        if (checkTerminated) this.lastErrorCode = 0;
        returnValue = global_constants.SCORM_TRUE;
        this.processListeners(callbackName);
      }

      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      this.clearSCORMError(returnValue);
      return returnValue;
    }
    /**
     * Get the value of the CMIElement.
     *
     * @param {string} callbackName
     * @param {boolean} checkTerminated
     * @param {string} CMIElement
     * @return {string}
     */

  }, {
    key: "getValue",
    value: function getValue(callbackName, checkTerminated, CMIElement) {
      var returnValue;

      if (this.checkState(checkTerminated, _classPrivateFieldGet(this, _error_codes).RETRIEVE_BEFORE_INIT, _classPrivateFieldGet(this, _error_codes).RETRIEVE_AFTER_TERM)) {
        if (checkTerminated) this.lastErrorCode = 0;
        returnValue = this.getCMIValue(CMIElement);
        this.processListeners(callbackName, CMIElement);
      }

      this.apiLog(callbackName, CMIElement, ': returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      this.clearSCORMError(returnValue);
      return returnValue;
    }
    /**
     * Sets the value of the CMIElement.
     *
     * @param {string} callbackName
     * @param {boolean} checkTerminated
     * @param {string} CMIElement
     * @param {*} value
     * @return {string}
     */

  }, {
    key: "setValue",
    value: function setValue(callbackName, checkTerminated, CMIElement, value) {
      if (value !== undefined) {
        value = String(value);
      }

      var returnValue = global_constants.SCORM_FALSE;

      if (this.checkState(checkTerminated, _classPrivateFieldGet(this, _error_codes).STORE_BEFORE_INIT, _classPrivateFieldGet(this, _error_codes).STORE_AFTER_TERM)) {
        if (checkTerminated) this.lastErrorCode = 0;

        try {
          returnValue = this.setCMIValue(CMIElement, value);
        } catch (e) {
          if (e instanceof _exceptions.ValidationError) {
            this.lastErrorCode = e.errorCode;
            returnValue = global_constants.SCORM_FALSE;
          } else {
            if (e.message) {
              console.error(e.message);
            } else {
              console.error(e);
            }

            this.throwSCORMError(_classPrivateFieldGet(this, _error_codes).GENERAL);
          }
        }

        this.processListeners(callbackName, CMIElement, value);
      }

      if (returnValue === undefined) {
        returnValue = global_constants.SCORM_FALSE;
      } // If we didn't have any errors while setting the data, go ahead and
      // schedule a commit, if autocommit is turned on


      if (String(this.lastErrorCode) === '0') {
        if (this.settings.autocommit && !_classPrivateFieldGet(this, _timeout)) {
          this.scheduleCommit(this.settings.autocommitSeconds * 1000);
        }
      }

      this.apiLog(callbackName, CMIElement, ': ' + value + ': result: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      this.clearSCORMError(returnValue);
      return returnValue;
    }
    /**
     * Orders LMS to store all content parameters
     * @param {string} callbackName
     * @param {boolean} checkTerminated
     * @return {string}
     */

  }, {
    key: "commit",
    value: function commit(callbackName, checkTerminated) {
      this.clearScheduledCommit();
      var returnValue = global_constants.SCORM_FALSE;

      if (this.checkState(checkTerminated, _classPrivateFieldGet(this, _error_codes).COMMIT_BEFORE_INIT, _classPrivateFieldGet(this, _error_codes).COMMIT_AFTER_TERM)) {
        var result = this.storeData(false);

        if (result.errorCode && result.errorCode > 0) {
          this.throwSCORMError(result.errorCode);
        }

        returnValue = result.result ? result.result : global_constants.SCORM_FALSE;
        this.apiLog(callbackName, 'HttpRequest', ' Result: ' + returnValue, global_constants.LOG_LEVEL_DEBUG);
        if (checkTerminated) this.lastErrorCode = 0;
        this.processListeners(callbackName);
      }

      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      this.clearSCORMError(returnValue);
      return returnValue;
    }
    /**
     * Returns last error code
     * @param {string} callbackName
     * @return {string}
     */

  }, {
    key: "getLastError",
    value: function getLastError(callbackName) {
      var returnValue = String(this.lastErrorCode);
      this.processListeners(callbackName);
      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      return returnValue;
    }
    /**
     * Returns the errorNumber error description
     *
     * @param {string} callbackName
     * @param {(string|number)} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "getErrorString",
    value: function getErrorString(callbackName, CMIErrorCode) {
      var returnValue = '';

      if (CMIErrorCode !== null && CMIErrorCode !== '') {
        returnValue = this.getLmsErrorMessageDetails(CMIErrorCode);
        this.processListeners(callbackName);
      }

      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      return returnValue;
    }
    /**
     * Returns a comprehensive description of the errorNumber error.
     *
     * @param {string} callbackName
     * @param {(string|number)} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "getDiagnostic",
    value: function getDiagnostic(callbackName, CMIErrorCode) {
      var returnValue = '';

      if (CMIErrorCode !== null && CMIErrorCode !== '') {
        returnValue = this.getLmsErrorMessageDetails(CMIErrorCode, true);
        this.processListeners(callbackName);
      }

      this.apiLog(callbackName, null, 'returned: ' + returnValue, global_constants.LOG_LEVEL_INFO);
      return returnValue;
    }
    /**
     * Checks the LMS state and ensures it has been initialized.
     *
     * @param {boolean} checkTerminated
     * @param {number} beforeInitError
     * @param {number} afterTermError
     * @return {boolean}
     */

  }, {
    key: "checkState",
    value: function checkState(checkTerminated, beforeInitError, afterTermError) {
      if (this.isNotInitialized()) {
        this.throwSCORMError(beforeInitError);
        return false;
      } else if (checkTerminated && this.isTerminated()) {
        this.throwSCORMError(afterTermError);
        return false;
      }

      return true;
    }
    /**
     * Logging for all SCORM actions
     *
     * @param {string} functionName
     * @param {string} CMIElement
     * @param {string} logMessage
     * @param {number}messageLevel
     */

  }, {
    key: "apiLog",
    value: function apiLog(functionName, CMIElement, logMessage, messageLevel) {
      logMessage = this.formatMessage(functionName, CMIElement, logMessage);

      if (messageLevel >= this.apiLogLevel) {
        switch (messageLevel) {
          case global_constants.LOG_LEVEL_ERROR:
            console.error(logMessage);
            break;

          case global_constants.LOG_LEVEL_WARNING:
            console.warn(logMessage);
            break;

          case global_constants.LOG_LEVEL_INFO:
            console.info(logMessage);
            break;

          case global_constants.LOG_LEVEL_DEBUG:
            if (console.debug) {
              console.debug(logMessage);
            } else {
              console.log(logMessage);
            }

            break;
        }
      }
    }
    /**
     * Formats the SCORM messages for easy reading
     *
     * @param {string} functionName
     * @param {string} CMIElement
     * @param {string} message
     * @return {string}
     */

  }, {
    key: "formatMessage",
    value: function formatMessage(functionName, CMIElement, message) {
      var baseLength = 20;
      var messageString = '';
      messageString += functionName;
      var fillChars = baseLength - messageString.length;

      for (var i = 0; i < fillChars; i++) {
        messageString += ' ';
      }

      messageString += ': ';

      if (CMIElement) {
        var CMIElementBaseLength = 70;
        messageString += CMIElement;
        fillChars = CMIElementBaseLength - messageString.length;

        for (var j = 0; j < fillChars; j++) {
          messageString += ' ';
        }
      }

      if (message) {
        messageString += message;
      }

      return messageString;
    }
    /**
     * Checks to see if {str} contains {tester}
     *
     * @param {string} str String to check against
     * @param {string} tester String to check for
     * @return {boolean}
     */

  }, {
    key: "stringMatches",
    value: function stringMatches(str, tester) {
      return str && tester && str.match(tester);
    }
    /**
     * Check to see if the specific object has the given property
     * @param {*} refObject
     * @param {string} attribute
     * @return {boolean}
     * @private
     */

  }, {
    key: "_checkObjectHasProperty",
    value: function _checkObjectHasProperty(refObject, attribute) {
      return Object.hasOwnProperty.call(refObject, attribute) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(refObject), attribute) || attribute in refObject;
    }
    /**
     * Returns the message that corresponds to errorNumber
     * APIs that inherit BaseAPI should override this function
     *
     * @param {(string|number)} _errorNumber
     * @param {boolean} _detail
     * @return {string}
     * @abstract
     */

  }, {
    key: "getLmsErrorMessageDetails",
    value: function getLmsErrorMessageDetails(_errorNumber, _detail) {
      throw new Error('The getLmsErrorMessageDetails method has not been implemented');
    }
    /**
     * Gets the value for the specific element.
     * APIs that inherit BaseAPI should override this function
     *
     * @param {string} _CMIElement
     * @return {string}
     * @abstract
     */

  }, {
    key: "getCMIValue",
    value: function getCMIValue(_CMIElement) {
      throw new Error('The getCMIValue method has not been implemented');
    }
    /**
     * Sets the value for the specific element.
     * APIs that inherit BaseAPI should override this function
     *
     * @param {string} _CMIElement
     * @param {any} _value
     * @return {string}
     * @abstract
     */

  }, {
    key: "setCMIValue",
    value: function setCMIValue(_CMIElement, _value) {
      throw new Error('The setCMIValue method has not been implemented');
    }
    /**
     * Shared API method to set a valid for a given element.
     *
     * @param {string} methodName
     * @param {boolean} scorm2004
     * @param {string} CMIElement
     * @param {*} value
     * @return {string}
     */

  }, {
    key: "_commonSetCMIValue",
    value: function _commonSetCMIValue(methodName, scorm2004, CMIElement, value) {
      if (!CMIElement || CMIElement === '') {
        return global_constants.SCORM_FALSE;
      }

      var structure = CMIElement.split('.');
      var refObject = this;
      var returnValue = global_constants.SCORM_FALSE;
      var foundFirstIndex = false;
      var invalidErrorMessage = "The data model element passed to ".concat(methodName, " (").concat(CMIElement, ") is not a valid SCORM data model element.");
      var invalidErrorCode = scorm2004 ? _classPrivateFieldGet(this, _error_codes).UNDEFINED_DATA_MODEL : _classPrivateFieldGet(this, _error_codes).GENERAL;

      for (var i = 0; i < structure.length; i++) {
        var attribute = structure[i];

        if (i === structure.length - 1) {
          if (scorm2004 && attribute.substr(0, 8) === '{target=' && typeof refObject._isTargetValid == 'function') {
            this.throwSCORMError(_classPrivateFieldGet(this, _error_codes).READ_ONLY_ELEMENT);
          } else if (!this._checkObjectHasProperty(refObject, attribute)) {
            this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
          } else {
            if (this.stringMatches(CMIElement, '\\.correct_responses\\.\\d')) {
              this.validateCorrectResponse(CMIElement, value);
            }

            if (!scorm2004 || this.lastErrorCode === 0) {
              refObject[attribute] = value;
              returnValue = global_constants.SCORM_TRUE;
            }
          }
        } else {
          refObject = refObject[attribute];

          if (!refObject) {
            this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
            break;
          }

          if (refObject instanceof _common.CMIArray) {
            var index = parseInt(structure[i + 1], 10); // SCO is trying to set an item on an array

            if (!isNaN(index)) {
              var item = refObject.childArray[index];

              if (item) {
                refObject = item;
                foundFirstIndex = true;
              } else {
                var newChild = this.getChildElement(CMIElement, value, foundFirstIndex);
                foundFirstIndex = true;

                if (!newChild) {
                  this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
                } else {
                  if (refObject.initialized) newChild.initialize();
                  refObject.childArray.push(newChild);
                  refObject = newChild;
                }
              } // Have to update i value to skip the array position


              i++;
            }
          }
        }
      }

      if (returnValue === global_constants.SCORM_FALSE) {
        this.apiLog(methodName, null, "There was an error setting the value for: ".concat(CMIElement, ", value of: ").concat(value), global_constants.LOG_LEVEL_WARNING);
      }

      return returnValue;
    }
    /**
     * Abstract method for validating that a response is correct.
     *
     * @param {string} _CMIElement
     * @param {*} _value
     */

  }, {
    key: "validateCorrectResponse",
    value: function validateCorrectResponse(_CMIElement, _value) {} // just a stub method

    /**
     * Gets or builds a new child element to add to the array.
     * APIs that inherit BaseAPI should override this method.
     *
     * @param {string} _CMIElement - unused
     * @param {*} _value - unused
     * @param {boolean} _foundFirstIndex - unused
     * @return {*}
     * @abstract
     */

  }, {
    key: "getChildElement",
    value: function getChildElement(_CMIElement, _value, _foundFirstIndex) {
      throw new Error('The getChildElement method has not been implemented');
    }
    /**
     * Gets a value from the CMI Object
     *
     * @param {string} methodName
     * @param {boolean} scorm2004
     * @param {string} CMIElement
     * @return {*}
     */

  }, {
    key: "_commonGetCMIValue",
    value: function _commonGetCMIValue(methodName, scorm2004, CMIElement) {
      if (!CMIElement || CMIElement === '') {
        return '';
      }

      var structure = CMIElement.split('.');
      var refObject = this;
      var attribute = null;
      var uninitializedErrorMessage = "The data model element passed to ".concat(methodName, " (").concat(CMIElement, ") has not been initialized.");
      var invalidErrorMessage = "The data model element passed to ".concat(methodName, " (").concat(CMIElement, ") is not a valid SCORM data model element.");
      var invalidErrorCode = scorm2004 ? _classPrivateFieldGet(this, _error_codes).UNDEFINED_DATA_MODEL : _classPrivateFieldGet(this, _error_codes).GENERAL;

      for (var i = 0; i < structure.length; i++) {
        attribute = structure[i];

        if (!scorm2004) {
          if (i === structure.length - 1) {
            if (!this._checkObjectHasProperty(refObject, attribute)) {
              this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
              return;
            }
          }
        } else {
          if (String(attribute).substr(0, 8) === '{target=' && typeof refObject._isTargetValid == 'function') {
            var target = String(attribute).substr(8, String(attribute).length - 9);
            return refObject._isTargetValid(target);
          } else if (!this._checkObjectHasProperty(refObject, attribute)) {
            this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
            return;
          }
        }

        refObject = refObject[attribute];

        if (refObject === undefined) {
          this.throwSCORMError(invalidErrorCode, invalidErrorMessage);
          break;
        }

        if (refObject instanceof _common.CMIArray) {
          var index = parseInt(structure[i + 1], 10); // SCO is trying to set an item on an array

          if (!isNaN(index)) {
            var item = refObject.childArray[index];

            if (item) {
              refObject = item;
            } else {
              this.throwSCORMError(_classPrivateFieldGet(this, _error_codes).VALUE_NOT_INITIALIZED, uninitializedErrorMessage);
              break;
            } // Have to update i value to skip the array position


            i++;
          }
        }
      }

      if (refObject === null || refObject === undefined) {
        if (!scorm2004) {
          if (attribute === '_children') {
            this.throwSCORMError(scorm12_error_codes.CHILDREN_ERROR);
          } else if (attribute === '_count') {
            this.throwSCORMError(scorm12_error_codes.COUNT_ERROR);
          }
        }
      } else {
        return refObject;
      }
    }
    /**
     * Returns true if the API's current state is STATE_INITIALIZED
     *
     * @return {boolean}
     */

  }, {
    key: "isInitialized",
    value: function isInitialized() {
      return this.currentState === global_constants.STATE_INITIALIZED;
    }
    /**
     * Returns true if the API's current state is STATE_NOT_INITIALIZED
     *
     * @return {boolean}
     */

  }, {
    key: "isNotInitialized",
    value: function isNotInitialized() {
      return this.currentState === global_constants.STATE_NOT_INITIALIZED;
    }
    /**
     * Returns true if the API's current state is STATE_TERMINATED
     *
     * @return {boolean}
     */

  }, {
    key: "isTerminated",
    value: function isTerminated() {
      return this.currentState === global_constants.STATE_TERMINATED;
    }
    /**
     * Provides a mechanism for attaching to a specific SCORM event
     *
     * @param {string} listenerName
     * @param {function} callback
     */

  }, {
    key: "on",
    value: function on(listenerName, callback) {
      if (!callback) return;
      var listenerFunctions = listenerName.split(' ');

      for (var i = 0; i < listenerFunctions.length; i++) {
        var listenerSplit = listenerFunctions[i].split('.');
        if (listenerSplit.length === 0) return;
        var functionName = listenerSplit[0];
        var CMIElement = null;

        if (listenerSplit.length > 1) {
          CMIElement = listenerName.replace(functionName + '.', '');
        }

        this.listenerArray.push({
          functionName: functionName,
          CMIElement: CMIElement,
          callback: callback
        });
      }
    }
    /**
     * Processes any 'on' listeners that have been created
     *
     * @param {string} functionName
     * @param {string} CMIElement
     * @param {*} value
     */

  }, {
    key: "processListeners",
    value: function processListeners(functionName, CMIElement, value) {
      for (var i = 0; i < this.listenerArray.length; i++) {
        var listener = this.listenerArray[i];
        var functionsMatch = listener.functionName === functionName;
        var listenerHasCMIElement = !!listener.CMIElement;
        var CMIElementsMatch = listener.CMIElement === CMIElement;

        if (functionsMatch && (!listenerHasCMIElement || CMIElementsMatch)) {
          listener.callback(CMIElement, value);
        }
      }
    }
    /**
     * Throws a SCORM error
     *
     * @param {number} errorNumber
     * @param {string} message
     */

  }, {
    key: "throwSCORMError",
    value: function throwSCORMError(errorNumber, message) {
      if (!message) {
        message = this.getLmsErrorMessageDetails(errorNumber);
      }

      this.apiLog('throwSCORMError', null, errorNumber + ': ' + message, global_constants.LOG_LEVEL_ERROR);
      this.lastErrorCode = String(errorNumber);
    }
    /**
     * Clears the last SCORM error code on success.
     *
     * @param {string} success
     */

  }, {
    key: "clearSCORMError",
    value: function clearSCORMError(success) {
      if (success !== undefined && success !== global_constants.SCORM_FALSE) {
        this.lastErrorCode = 0;
      }
    }
    /**
     * Attempts to store the data to the LMS, logs data if no LMS configured
     * APIs that inherit BaseAPI should override this function
     *
     * @param {boolean} _calculateTotalTime
     * @return {string}
     * @abstract
     */

  }, {
    key: "storeData",
    value: function storeData(_calculateTotalTime) {
      throw new Error('The storeData method has not been implemented');
    }
    /**
     * Load the CMI from a flattened JSON object
     * @param {object} json
     * @param {string} CMIElement
     */

  }, {
    key: "loadFromFlattenedJSON",
    value: function loadFromFlattenedJSON(json, CMIElement) {
      this.loadFromJSON((0, _utilities.unflatten)(json), CMIElement);
    }
    /**
     * Loads CMI data from a JSON object.
     *
     * @param {object} json
     * @param {string} CMIElement
     */

  }, {
    key: "loadFromJSON",
    value: function loadFromJSON(json, CMIElement) {
      if (!this.isNotInitialized()) {
        console.error('loadFromJSON can only be called before the call to lmsInitialize.');
        return;
      }

      CMIElement = CMIElement !== undefined ? CMIElement : 'cmi';
      this.startingData = json; // could this be refactored down to flatten(json) then setCMIValue on each?

      for (var key in json) {
        if ({}.hasOwnProperty.call(json, key) && json[key]) {
          var currentCMIElement = (CMIElement ? CMIElement + '.' : '') + key;
          var value = json[key];

          if (value['childArray']) {
            for (var i = 0; i < value['childArray'].length; i++) {
              this.loadFromJSON(value['childArray'][i], currentCMIElement + '.' + i);
            }
          } else if (value.constructor === Object) {
            this.loadFromJSON(value, currentCMIElement);
          } else {
            this.setCMIValue(currentCMIElement, value);
          }
        }
      }
    }
    /**
     * Render the CMI object to JSON for sending to an LMS.
     *
     * @return {string}
     */

  }, {
    key: "renderCMIToJSONString",
    value: function renderCMIToJSONString() {
      var cmi = this.cmi; // Do we want/need to return fields that have no set value?
      // return JSON.stringify({ cmi }, (k, v) => v === undefined ? null : v, 2);

      return JSON.stringify({
        cmi: cmi
      });
    }
    /**
     * Returns a JS object representing the current cmi
     * @return {object}
     */

  }, {
    key: "renderCMIToJSONObject",
    value: function renderCMIToJSONObject() {
      // Do we want/need to return fields that have no set value?
      // return JSON.stringify({ cmi }, (k, v) => v === undefined ? null : v, 2);
      return JSON.parse(this.renderCMIToJSONString());
    }
    /**
     * Render the cmi object to the proper format for LMS commit
     * APIs that inherit BaseAPI should override this function
     *
     * @param {boolean} _terminateCommit
     * @return {*}
     * @abstract
     */

  }, {
    key: "renderCommitCMI",
    value: function renderCommitCMI(_terminateCommit) {
      throw new Error('The storeData method has not been implemented');
    }
    /**
     * Send the request to the LMS
     * @param {string} url
     * @param {object|Array} params
     * @return {object}
     */

  }, {
    key: "processHttpRequest",
    value: function processHttpRequest(url, params) {
      var genericError = {
        'result': global_constants.SCORM_FALSE,
        'errorCode': _classPrivateFieldGet(this, _error_codes).GENERAL
      };
      var httpReq = new XMLHttpRequest();
      httpReq.open('POST', url, false);

      try {
        if (params instanceof Array) {
          httpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          httpReq.send(params.join('&'));
        } else {
          httpReq.setRequestHeader('Content-Type', this.settings.commitRequestDataType);
          httpReq.send(JSON.stringify(params));
        }
      } catch (e) {
        return genericError;
      }

      try {
        return JSON.parse(httpReq.responseText);
      } catch (e) {
        return genericError;
      }
    }
    /**
     * Throws a SCORM error
     *
     * @param {number} when - the number of milliseconds to wait before committing
     */

  }, {
    key: "scheduleCommit",
    value: function scheduleCommit(when) {
      _classPrivateFieldSet(this, _timeout, new ScheduledCommit(this, when));

      this.apiLog('scheduleCommit', '', 'scheduled', global_constants.LOG_LEVEL_DEBUG);
    }
    /**
     * Clears and cancels any currently scheduled commits
     */

  }, {
    key: "clearScheduledCommit",
    value: function clearScheduledCommit() {
      if (_classPrivateFieldGet(this, _timeout)) {
        _classPrivateFieldGet(this, _timeout).cancel();

        _classPrivateFieldSet(this, _timeout, null);

        this.apiLog('clearScheduledCommit', '', 'cleared', global_constants.LOG_LEVEL_DEBUG);
      }
    }
  }, {
    key: "settings",
    get: function get() {
      return _classPrivateFieldGet(this, _settings);
    }
    /**
     * Setter for #settings
     * @param {object} settings
     */
    ,
    set: function set(settings) {
      _classPrivateFieldSet(this, _settings, _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _settings)), settings));
    }
  }]);

  return BaseAPI;
}();
/**
 * Private class that wraps a timeout call to the commit() function
 */


exports["default"] = BaseAPI;

var _timeout = new WeakMap();

var _error_codes = new WeakMap();

var _settings = new WeakMap();

var ScheduledCommit = /*#__PURE__*/function () {
  /**
   * Constructor for ScheduledCommit
   * @param {BaseAPI} API
   * @param {number} when
   */
  function ScheduledCommit(API, when) {
    _classCallCheck(this, ScheduledCommit);

    _API.set(this, {
      writable: true,
      value: void 0
    });

    _cancelled.set(this, {
      writable: true,
      value: false
    });

    _timeout2.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _API, API);

    _classPrivateFieldSet(this, _timeout2, setTimeout(this.wrapper.bind(this), when));
  }
  /**
   * Cancel any currently scheduled commit
   */


  _createClass(ScheduledCommit, [{
    key: "cancel",
    value: function cancel() {
      _classPrivateFieldSet(this, _cancelled, true);

      if (_classPrivateFieldGet(this, _timeout2)) {
        clearTimeout(_classPrivateFieldGet(this, _timeout2));
      }
    }
    /**
     * Wrap the API commit call to check if the call has already been cancelled
     */

  }, {
    key: "wrapper",
    value: function wrapper() {
      if (!_classPrivateFieldGet(this, _cancelled)) {
        _classPrivateFieldGet(this, _API).commit();
      }
    }
  }]);

  return ScheduledCommit;
}();

var _API = new WeakMap();

var _cancelled = new WeakMap();

var _timeout2 = new WeakMap();

},{"./cmi/common":6,"./constants/api_constants":9,"./constants/error_codes":10,"./exceptions":14,"./utilities":16}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseAPI2 = _interopRequireDefault(require("./BaseAPI"));

var _scorm12_cmi = require("./cmi/scorm12_cmi");

var Utilities = _interopRequireWildcard(require("./utilities"));

var _api_constants = _interopRequireDefault(require("./constants/api_constants"));

var _error_codes = _interopRequireDefault(require("./constants/error_codes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var scorm12_constants = _api_constants["default"].scorm12;
var global_constants = _api_constants["default"].global;
var scorm12_error_codes = _error_codes["default"].scorm12;
/**
 * API class for SCORM 1.2
 */

var Scorm12API = /*#__PURE__*/function (_BaseAPI) {
  _inherits(Scorm12API, _BaseAPI);

  var _super = _createSuper(Scorm12API);

  /**
   * Constructor for SCORM 1.2 API
   * @param {object} settings
   */
  function Scorm12API(settings) {
    var _this;

    _classCallCheck(this, Scorm12API);

    var finalSettings = _objectSpread(_objectSpread({}, {
      mastery_override: false
    }), settings);

    _this = _super.call(this, scorm12_error_codes, finalSettings);
    _this.cmi = new _scorm12_cmi.CMI();
    _this.nav = new _scorm12_cmi.NAV(); // Rename functions to match 1.2 Spec and expose to modules

    _this.LMSInitialize = _this.lmsInitialize;
    _this.LMSFinish = _this.lmsFinish;
    _this.LMSGetValue = _this.lmsGetValue;
    _this.LMSSetValue = _this.lmsSetValue;
    _this.LMSCommit = _this.lmsCommit;
    _this.LMSGetLastError = _this.lmsGetLastError;
    _this.LMSGetErrorString = _this.lmsGetErrorString;
    _this.LMSGetDiagnostic = _this.lmsGetDiagnostic;
    return _this;
  }
  /**
   * lmsInitialize function from SCORM 1.2 Spec
   *
   * @return {string} bool
   */


  _createClass(Scorm12API, [{
    key: "lmsInitialize",
    value: function lmsInitialize() {
      this.cmi.initialize();
      return this.initialize('LMSInitialize', 'LMS was already initialized!', 'LMS is already finished!');
    }
    /**
     * LMSFinish function from SCORM 1.2 Spec
     *
     * @return {string} bool
     */

  }, {
    key: "lmsFinish",
    value: function lmsFinish() {
      var result = this.terminate('LMSFinish', false);

      if (result === global_constants.SCORM_TRUE) {
        if (this.nav.event !== '') {
          if (this.nav.event === 'continue') {
            this.processListeners('SequenceNext');
          } else {
            this.processListeners('SequencePrevious');
          }
        } else if (this.settings.autoProgress) {
          this.processListeners('SequenceNext');
        }
      }

      return result;
    }
    /**
     * LMSGetValue function from SCORM 1.2 Spec
     *
     * @param {string} CMIElement
     * @return {string}
     */

  }, {
    key: "lmsGetValue",
    value: function lmsGetValue(CMIElement) {
      return this.getValue('LMSGetValue', false, CMIElement);
    }
    /**
     * LMSSetValue function from SCORM 1.2 Spec
     *
     * @param {string} CMIElement
     * @param {*} value
     * @return {string}
     */

  }, {
    key: "lmsSetValue",
    value: function lmsSetValue(CMIElement, value) {
      return this.setValue('LMSSetValue', false, CMIElement, value);
    }
    /**
     * LMSCommit function from SCORM 1.2 Spec
     *
     * @return {string} bool
     */

  }, {
    key: "lmsCommit",
    value: function lmsCommit() {
      return this.commit('LMSCommit', false);
    }
    /**
     * LMSGetLastError function from SCORM 1.2 Spec
     *
     * @return {string}
     */

  }, {
    key: "lmsGetLastError",
    value: function lmsGetLastError() {
      return this.getLastError('LMSGetLastError');
    }
    /**
     * LMSGetErrorString function from SCORM 1.2 Spec
     *
     * @param {string} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "lmsGetErrorString",
    value: function lmsGetErrorString(CMIErrorCode) {
      return this.getErrorString('LMSGetErrorString', CMIErrorCode);
    }
    /**
     * LMSGetDiagnostic function from SCORM 1.2 Spec
     *
     * @param {string} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "lmsGetDiagnostic",
    value: function lmsGetDiagnostic(CMIErrorCode) {
      return this.getDiagnostic('LMSGetDiagnostic', CMIErrorCode);
    }
    /**
     * Sets a value on the CMI Object
     *
     * @param {string} CMIElement
     * @param {*} value
     * @return {string}
     */

  }, {
    key: "setCMIValue",
    value: function setCMIValue(CMIElement, value) {
      return this._commonSetCMIValue('LMSSetValue', false, CMIElement, value);
    }
    /**
     * Gets a value from the CMI Object
     *
     * @param {string} CMIElement
     * @return {*}
     */

  }, {
    key: "getCMIValue",
    value: function getCMIValue(CMIElement) {
      return this._commonGetCMIValue('getCMIValue', false, CMIElement);
    }
    /**
     * Gets or builds a new child element to add to the array.
     *
     * @param {string} CMIElement
     * @param {*} value
     * @param {boolean} foundFirstIndex
     * @return {object}
     */

  }, {
    key: "getChildElement",
    value: function getChildElement(CMIElement, value, foundFirstIndex) {
      var newChild;

      if (this.stringMatches(CMIElement, 'cmi\\.objectives\\.\\d')) {
        newChild = new _scorm12_cmi.CMIObjectivesObject();
      } else if (foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d\\.correct_responses\\.\\d')) {
        newChild = new _scorm12_cmi.CMIInteractionsCorrectResponsesObject();
      } else if (foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d\\.objectives\\.\\d')) {
        newChild = new _scorm12_cmi.CMIInteractionsObjectivesObject();
      } else if (!foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d')) {
        newChild = new _scorm12_cmi.CMIInteractionsObject();
      }

      return newChild;
    }
    /**
     * Validates Correct Response values
     *
     * @param {string} CMIElement
     * @param {*} value
     * @return {boolean}
     */

  }, {
    key: "validateCorrectResponse",
    value: function validateCorrectResponse(CMIElement, value) {
      return true;
    }
    /**
     * Returns the message that corresponds to errorNumber.
     *
     * @param {*} errorNumber
     * @param {boolean }detail
     * @return {string}
     */

  }, {
    key: "getLmsErrorMessageDetails",
    value: function getLmsErrorMessageDetails(errorNumber, detail) {
      var basicMessage = 'No Error';
      var detailMessage = 'No Error'; // Set error number to string since inconsistent from modules if string or number

      errorNumber = String(errorNumber);

      if (scorm12_constants.error_descriptions[errorNumber]) {
        basicMessage = scorm12_constants.error_descriptions[errorNumber].basicMessage;
        detailMessage = scorm12_constants.error_descriptions[errorNumber].detailMessage;
      }

      return detail ? detailMessage : basicMessage;
    }
    /**
     * Replace the whole API with another
     *
     * @param {Scorm12API} newAPI
     */

  }, {
    key: "replaceWithAnotherScormAPI",
    value: function replaceWithAnotherScormAPI(newAPI) {
      // Data Model
      this.cmi = newAPI.cmi;
    }
    /**
     * Render the cmi object to the proper format for LMS commit
     *
     * @param {boolean} terminateCommit
     * @return {object|Array}
     */

  }, {
    key: "renderCommitCMI",
    value: function renderCommitCMI(terminateCommit) {
      var cmiExport = this.renderCMIToJSONObject();

      if (terminateCommit) {
        cmiExport.cmi.core.total_time = this.cmi.getCurrentTotalTime();
      }

      var result = [];
      var flattened = Utilities.flatten(cmiExport);

      switch (this.settings.dataCommitFormat) {
        case 'flattened':
          return Utilities.flatten(cmiExport);

        case 'params':
          for (var item in flattened) {
            if ({}.hasOwnProperty.call(flattened, item)) {
              result.push("".concat(item, "=").concat(flattened[item]));
            }
          }

          return result;

        case 'json':
        default:
          return cmiExport;
      }
    }
    /**
     * Attempts to store the data to the LMS
     *
     * @param {boolean} terminateCommit
     * @return {string}
     */

  }, {
    key: "storeData",
    value: function storeData(terminateCommit) {
      if (terminateCommit) {
        var originalStatus = this.cmi.core.lesson_status;

        if (originalStatus === 'not attempted') {
          this.cmi.core.lesson_status = 'completed';
        }

        if (this.cmi.core.lesson_mode === 'normal') {
          if (this.cmi.core.credit === 'credit') {
            if (this.settings.mastery_override && this.cmi.student_data.mastery_score !== '' && this.cmi.core.score.raw !== '') {
              if (parseFloat(this.cmi.core.score.raw) >= parseFloat(this.cmi.student_data.mastery_score)) {
                this.cmi.core.lesson_status = 'passed';
              } else {
                this.cmi.core.lesson_status = 'failed';
              }
            }
          }
        } else if (this.cmi.core.lesson_mode === 'browse') {
          var _this$startingData, _this$startingData$cm, _this$startingData$cm2;

          if ((((_this$startingData = this.startingData) === null || _this$startingData === void 0 ? void 0 : (_this$startingData$cm = _this$startingData.cmi) === null || _this$startingData$cm === void 0 ? void 0 : (_this$startingData$cm2 = _this$startingData$cm.core) === null || _this$startingData$cm2 === void 0 ? void 0 : _this$startingData$cm2.lesson_status) || '') === '' && originalStatus === 'not attempted') {
            this.cmi.core.lesson_status = 'browsed';
          }
        }
      }

      var commitObject = this.renderCommitCMI(terminateCommit);

      if (this.settings.lmsCommitUrl) {
        if (this.apiLogLevel === global_constants.LOG_LEVEL_DEBUG) {
          console.debug('Commit (terminated: ' + (terminateCommit ? 'yes' : 'no') + '): ');
          console.debug(commitObject);
        }

        return this.processHttpRequest(this.settings.lmsCommitUrl, commitObject);
      } else {
        console.log('Commit (terminated: ' + (terminateCommit ? 'yes' : 'no') + '): ');
        console.log(commitObject);
        return global_constants.SCORM_TRUE;
      }
    }
  }]);

  return Scorm12API;
}(_BaseAPI2["default"]);

exports["default"] = Scorm12API;

},{"./BaseAPI":2,"./cmi/scorm12_cmi":7,"./constants/api_constants":9,"./constants/error_codes":10,"./utilities":16}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseAPI2 = _interopRequireDefault(require("./BaseAPI"));

var _scorm2004_cmi = require("./cmi/scorm2004_cmi");

var Utilities = _interopRequireWildcard(require("./utilities"));

var _api_constants = _interopRequireDefault(require("./constants/api_constants"));

var _error_codes = _interopRequireDefault(require("./constants/error_codes"));

var _response_constants = _interopRequireDefault(require("./constants/response_constants"));

var _language_constants = _interopRequireDefault(require("./constants/language_constants"));

var _regex = _interopRequireDefault(require("./constants/regex"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var scorm2004_constants = _api_constants["default"].scorm2004;
var global_constants = _api_constants["default"].global;
var scorm2004_error_codes = _error_codes["default"].scorm2004;
var correct_responses = _response_constants["default"].correct;
var scorm2004_regex = _regex["default"].scorm2004;
/**
 * API class for SCORM 2004
 */

var Scorm2004API = /*#__PURE__*/function (_BaseAPI) {
  _inherits(Scorm2004API, _BaseAPI);

  var _super = _createSuper(Scorm2004API);

  /**
   * Constructor for SCORM 2004 API
   * @param {object} settings
   */
  function Scorm2004API(settings) {
    var _this;

    _classCallCheck(this, Scorm2004API);

    var finalSettings = _objectSpread(_objectSpread({}, {
      mastery_override: false
    }), settings);

    _this = _super.call(this, scorm2004_error_codes, finalSettings);

    _version.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "checkDuplicatedPattern", function (correct_response, current_index, value) {
      var found = false;
      var count = correct_response._count;

      for (var i = 0; i < count && !found; i++) {
        if (i !== current_index && correct_response.childArray[i] === value) {
          found = true;
        }
      }

      return found;
    });

    _this.cmi = new _scorm2004_cmi.CMI();
    _this.adl = new _scorm2004_cmi.ADL(); // Rename functions to match 2004 Spec and expose to modules

    _this.Initialize = _this.lmsInitialize;
    _this.Terminate = _this.lmsTerminate;
    _this.GetValue = _this.lmsGetValue;
    _this.SetValue = _this.lmsSetValue;
    _this.Commit = _this.lmsCommit;
    _this.GetLastError = _this.lmsGetLastError;
    _this.GetErrorString = _this.lmsGetErrorString;
    _this.GetDiagnostic = _this.lmsGetDiagnostic;
    return _this;
  }
  /**
   * Getter for #version
   * @return {string}
   */


  _createClass(Scorm2004API, [{
    key: "lmsInitialize",

    /**
     * @return {string} bool
     */
    value: function lmsInitialize() {
      this.cmi.initialize();
      return this.initialize('Initialize');
    }
    /**
     * @return {string} bool
     */

  }, {
    key: "lmsTerminate",
    value: function lmsTerminate() {
      var result = this.terminate('Terminate', true);

      if (result === global_constants.SCORM_TRUE) {
        if (this.adl.nav.request !== '_none_') {
          switch (this.adl.nav.request) {
            case 'continue':
              this.processListeners('SequenceNext');
              break;

            case 'previous':
              this.processListeners('SequencePrevious');
              break;

            case 'choice':
              this.processListeners('SequenceChoice');
              break;

            case 'exit':
              this.processListeners('SequenceExit');
              break;

            case 'exitAll':
              this.processListeners('SequenceExitAll');
              break;

            case 'abandon':
              this.processListeners('SequenceAbandon');
              break;

            case 'abandonAll':
              this.processListeners('SequenceAbandonAll');
              break;
          }
        } else if (this.settings.autoProgress) {
          this.processListeners('SequenceNext');
        }
      }

      return result;
    }
    /**
     * @param {string} CMIElement
     * @return {string}
     */

  }, {
    key: "lmsGetValue",
    value: function lmsGetValue(CMIElement) {
      return this.getValue('GetValue', true, CMIElement);
    }
    /**
     * @param {string} CMIElement
     * @param {any} value
     * @return {string}
     */

  }, {
    key: "lmsSetValue",
    value: function lmsSetValue(CMIElement, value) {
      return this.setValue('SetValue', true, CMIElement, value);
    }
    /**
     * Orders LMS to store all content parameters
     *
     * @return {string} bool
     */

  }, {
    key: "lmsCommit",
    value: function lmsCommit() {
      return this.commit('Commit');
    }
    /**
     * Returns last error code
     *
     * @return {string}
     */

  }, {
    key: "lmsGetLastError",
    value: function lmsGetLastError() {
      return this.getLastError('GetLastError');
    }
    /**
     * Returns the errorNumber error description
     *
     * @param {(string|number)} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "lmsGetErrorString",
    value: function lmsGetErrorString(CMIErrorCode) {
      return this.getErrorString('GetErrorString', CMIErrorCode);
    }
    /**
     * Returns a comprehensive description of the errorNumber error.
     *
     * @param {(string|number)} CMIErrorCode
     * @return {string}
     */

  }, {
    key: "lmsGetDiagnostic",
    value: function lmsGetDiagnostic(CMIErrorCode) {
      return this.getDiagnostic('GetDiagnostic', CMIErrorCode);
    }
    /**
     * Sets a value on the CMI Object
     *
     * @param {string} CMIElement
     * @param {any} value
     * @return {string}
     */

  }, {
    key: "setCMIValue",
    value: function setCMIValue(CMIElement, value) {
      return this._commonSetCMIValue('SetValue', true, CMIElement, value);
    }
    /**
     * Gets or builds a new child element to add to the array.
     *
     * @param {string} CMIElement
     * @param {any} value
     * @param {boolean} foundFirstIndex
     * @return {any}
     */

  }, {
    key: "getChildElement",
    value: function getChildElement(CMIElement, value, foundFirstIndex) {
      var newChild;

      if (this.stringMatches(CMIElement, 'cmi\\.objectives\\.\\d')) {
        newChild = new _scorm2004_cmi.CMIObjectivesObject();
      } else if (foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d\\.correct_responses\\.\\d')) {
        var parts = CMIElement.split('.');
        var index = Number(parts[2]);
        var interaction = this.cmi.interactions.childArray[index];

        if (!interaction.type) {
          this.throwSCORMError(scorm2004_error_codes.DEPENDENCY_NOT_ESTABLISHED);
        } else {
          var interaction_type = interaction.type;
          var interaction_count = interaction.correct_responses._count;

          if (interaction_type === 'choice') {
            for (var i = 0; i < interaction_count && this.lastErrorCode === 0; i++) {
              var response = interaction.correct_responses.childArray[i];

              if (response.pattern === value) {
                this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE);
              }
            }
          }

          var response_type = correct_responses[interaction_type];

          if (response_type) {
            var nodes = [];

            if (response_type === null || response_type === void 0 ? void 0 : response_type.delimiter) {
              nodes = String(value).split(response_type.delimiter);
            } else {
              nodes[0] = value;
            }

            if (nodes.length > 0 && nodes.length <= response_type.max) {
              this.checkCorrectResponseValue(interaction_type, nodes, value);
            } else if (nodes.length > response_type.max) {
              this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE, 'Data Model Element Pattern Too Long');
            }
          } else {
            this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE, 'Incorrect Response Type: ' + interaction_type);
          }
        }

        if (this.lastErrorCode === 0) {
          newChild = new _scorm2004_cmi.CMIInteractionsCorrectResponsesObject();
        }
      } else if (foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d\\.objectives\\.\\d')) {
        newChild = new _scorm2004_cmi.CMIInteractionsObjectivesObject();
      } else if (!foundFirstIndex && this.stringMatches(CMIElement, 'cmi\\.interactions\\.\\d')) {
        newChild = new _scorm2004_cmi.CMIInteractionsObject();
      } else if (this.stringMatches(CMIElement, 'cmi\\.comments_from_learner\\.\\d')) {
        newChild = new _scorm2004_cmi.CMICommentsObject();
      } else if (this.stringMatches(CMIElement, 'cmi\\.comments_from_lms\\.\\d')) {
        newChild = new _scorm2004_cmi.CMICommentsObject(true);
      }

      return newChild;
    }
    /**
     * Validate correct response.
     * @param {string} CMIElement
     * @param {*} value
     */

  }, {
    key: "validateCorrectResponse",
    value: function validateCorrectResponse(CMIElement, value) {
      var parts = CMIElement.split('.');
      var index = Number(parts[2]);
      var pattern_index = Number(parts[4]);
      var interaction = this.cmi.interactions.childArray[index];
      var interaction_type = interaction.type;
      var interaction_count = interaction.correct_responses._count;

      if (interaction_type === 'choice') {
        for (var i = 0; i < interaction_count && this.lastErrorCode === 0; i++) {
          var response = interaction.correct_responses.childArray[i];

          if (response.pattern === value) {
            this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE);
          }
        }
      }

      var response_type = correct_responses[interaction_type];

      if (typeof response_type.limit === 'undefined' || interaction_count <= response_type.limit) {
        var nodes = [];

        if (response_type === null || response_type === void 0 ? void 0 : response_type.delimiter) {
          nodes = String(value).split(response_type.delimiter);
        } else {
          nodes[0] = value;
        }

        if (nodes.length > 0 && nodes.length <= response_type.max) {
          this.checkCorrectResponseValue(interaction_type, nodes, value);
        } else if (nodes.length > response_type.max) {
          this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE, 'Data Model Element Pattern Too Long');
        }

        if (this.lastErrorCode === 0 && (!response_type.duplicate || !this.checkDuplicatedPattern(interaction.correct_responses, pattern_index, value)) || this.lastErrorCode === 0 && value === '') {// do nothing, we want the inverse
        } else {
          if (this.lastErrorCode === 0) {
            this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE, 'Data Model Element Pattern Already Exists');
          }
        }
      } else {
        this.throwSCORMError(scorm2004_error_codes.GENERAL_SET_FAILURE, 'Data Model Element Collection Limit Reached');
      }
    }
    /**
     * Gets a value from the CMI Object
     *
     * @param {string} CMIElement
     * @return {*}
     */

  }, {
    key: "getCMIValue",
    value: function getCMIValue(CMIElement) {
      return this._commonGetCMIValue('GetValue', true, CMIElement);
    }
    /**
     * Returns the message that corresponds to errorNumber.
     *
     * @param {(string|number)} errorNumber
     * @param {boolean} detail
     * @return {string}
     */

  }, {
    key: "getLmsErrorMessageDetails",
    value: function getLmsErrorMessageDetails(errorNumber, detail) {
      var basicMessage = '';
      var detailMessage = ''; // Set error number to string since inconsistent from modules if string or number

      errorNumber = String(errorNumber);

      if (scorm2004_constants.error_descriptions[errorNumber]) {
        basicMessage = scorm2004_constants.error_descriptions[errorNumber].basicMessage;
        detailMessage = scorm2004_constants.error_descriptions[errorNumber].detailMessage;
      }

      return detail ? detailMessage : basicMessage;
    }
    /**
     * Check to see if a correct_response value has been duplicated
     * @param {CMIArray} correct_response
     * @param {number} current_index
     * @param {*} value
     * @return {boolean}
     */

  }, {
    key: "checkCorrectResponseValue",

    /**
     * Checks for a valid correct_response value
     * @param {string} interaction_type
     * @param {Array} nodes
     * @param {*} value
     */
    value: function checkCorrectResponseValue(interaction_type, nodes, value) {
      var response = correct_responses[interaction_type];
      var formatRegex = new RegExp(response.format);

      for (var i = 0; i < nodes.length && this.lastErrorCode === 0; i++) {
        if (interaction_type.match('^(fill-in|long-fill-in|matching|performance|sequencing)$')) {
          nodes[i] = this.removeCorrectResponsePrefixes(nodes[i]);
        }

        if (response === null || response === void 0 ? void 0 : response.delimiter2) {
          var values = nodes[i].split(response.delimiter2);

          if (values.length === 2) {
            var matches = values[0].match(formatRegex);

            if (!matches) {
              this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
            } else {
              if (!values[1].match(new RegExp(response.format2))) {
                this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
              }
            }
          } else {
            this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
          }
        } else {
          var _matches = nodes[i].match(formatRegex);

          if (!_matches && value !== '' || !_matches && interaction_type === 'true-false') {
            this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
          } else {
            if (interaction_type === 'numeric' && nodes.length > 1) {
              if (Number(nodes[0]) > Number(nodes[1])) {
                this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
              }
            } else {
              if (nodes[i] !== '' && response.unique) {
                for (var j = 0; j < i && this.lastErrorCode === 0; j++) {
                  if (nodes[i] === nodes[j]) {
                    this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
                  }
                }
              }
            }
          }
        }
      }
    }
    /**
     * Remove prefixes from correct_response
     * @param {string} node
     * @return {*}
     */

  }, {
    key: "removeCorrectResponsePrefixes",
    value: function removeCorrectResponsePrefixes(node) {
      var seenOrder = false;
      var seenCase = false;
      var seenLang = false;
      var prefixRegex = new RegExp('^({(lang|case_matters|order_matters)=([^}]+)})');
      var matches = node.match(prefixRegex);
      var langMatches = null;

      while (matches) {
        switch (matches[2]) {
          case 'lang':
            langMatches = node.match(scorm2004_regex.CMILangcr);

            if (langMatches) {
              var lang = langMatches[3];

              if (lang !== undefined && lang.length > 0) {
                if (_language_constants["default"][lang.toLowerCase()] === undefined) {
                  this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
                }
              }
            }

            seenLang = true;
            break;

          case 'case_matters':
            if (!seenLang && !seenOrder && !seenCase) {
              if (matches[3] !== 'true' && matches[3] !== 'false') {
                this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
              }
            }

            seenCase = true;
            break;

          case 'order_matters':
            if (!seenCase && !seenLang && !seenOrder) {
              if (matches[3] !== 'true' && matches[3] !== 'false') {
                this.throwSCORMError(scorm2004_error_codes.TYPE_MISMATCH);
              }
            }

            seenOrder = true;
            break;

          default:
            break;
        }

        node = node.substr(matches[1].length);
        matches = node.match(prefixRegex);
      }

      return node;
    }
    /**
     * Replace the whole API with another
     * @param {Scorm2004API} newAPI
     */

  }, {
    key: "replaceWithAnotherScormAPI",
    value: function replaceWithAnotherScormAPI(newAPI) {
      // Data Model
      this.cmi = newAPI.cmi;
      this.adl = newAPI.adl;
    }
    /**
     * Render the cmi object to the proper format for LMS commit
     *
     * @param {boolean} terminateCommit
     * @return {object|Array}
     */

  }, {
    key: "renderCommitCMI",
    value: function renderCommitCMI(terminateCommit) {
      var cmiExport = this.renderCMIToJSONObject();

      if (terminateCommit) {
        cmiExport.cmi.total_time = this.cmi.getCurrentTotalTime();
      }

      var result = [];
      var flattened = Utilities.flatten(cmiExport);

      switch (this.settings.dataCommitFormat) {
        case 'flattened':
          return Utilities.flatten(cmiExport);

        case 'params':
          for (var item in flattened) {
            if ({}.hasOwnProperty.call(flattened, item)) {
              result.push("".concat(item, "=").concat(flattened[item]));
            }
          }

          return result;

        case 'json':
        default:
          return cmiExport;
      }
    }
    /**
     * Attempts to store the data to the LMS
     *
     * @param {boolean} terminateCommit
     * @return {string}
     */

  }, {
    key: "storeData",
    value: function storeData(terminateCommit) {
      var _this$startingData, _this$startingData$ad, _this$startingData$ad2;

      if (terminateCommit) {
        if (this.cmi.mode === 'normal') {
          if (this.cmi.credit === 'credit') {
            if (this.cmi.completion_threshold && this.cmi.progress_measure) {
              if (this.cmi.progress_measure >= this.cmi.completion_threshold) {
                console.debug('Setting Completion Status: Completed');
                this.cmi.completion_status = 'completed';
              } else {
                console.debug('Setting Completion Status: Incomplete');
                this.cmi.completion_status = 'incomplete';
              }
            }

            if (this.cmi.scaled_passing_score && this.cmi.score.scaled) {
              if (this.cmi.score.scaled >= this.cmi.scaled_passing_score) {
                console.debug('Setting Success Status: Passed');
                this.cmi.success_status = 'passed';
              } else {
                console.debug('Setting Success Status: Failed');
                this.cmi.success_status = 'failed';
              }
            }
          }
        }
      }

      var navRequest = false;

      if (this.adl.nav.request !== ((_this$startingData = this.startingData) === null || _this$startingData === void 0 ? void 0 : (_this$startingData$ad = _this$startingData.adl) === null || _this$startingData$ad === void 0 ? void 0 : (_this$startingData$ad2 = _this$startingData$ad.nav) === null || _this$startingData$ad2 === void 0 ? void 0 : _this$startingData$ad2.request) && this.adl.nav.request !== '_none_') {
        this.adl.nav.request = encodeURIComponent(this.adl.nav.request);
        navRequest = true;
      }

      var commitObject = this.renderCommitCMI(terminateCommit);

      if (this.settings.lmsCommitUrl) {
        if (this.apiLogLevel === global_constants.LOG_LEVEL_DEBUG) {
          console.debug('Commit (terminated: ' + (terminateCommit ? 'yes' : 'no') + '): ');
          console.debug(commitObject);
        }

        var result = this.processHttpRequest(this.settings.lmsCommitUrl, commitObject); // check if this is a sequencing call, and then call the necessary JS

        if (navRequest && result.navRequest !== undefined && result.navRequest !== '') {
          Function("\"use strict\";(() => { ".concat(result.navRequest, " })()"))();
        }

        return result;
      } else {
        console.log('Commit (terminated: ' + (terminateCommit ? 'yes' : 'no') + '): ');
        console.log(commitObject);
        return global_constants.SCORM_TRUE;
      }
    }
  }, {
    key: "version",
    get: function get() {
      return _classPrivateFieldGet(this, _version);
    }
  }]);

  return Scorm2004API;
}(_BaseAPI2["default"]);

exports["default"] = Scorm2004API;

var _version = new WeakMap();

},{"./BaseAPI":2,"./cmi/scorm2004_cmi":8,"./constants/api_constants":9,"./constants/error_codes":10,"./constants/language_constants":11,"./constants/regex":12,"./constants/response_constants":13,"./utilities":16}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CMIEvaluationCommentsObject = exports.CMIAttemptRecordsObject = exports.CMIAttemptRecords = exports.CMITriesObject = exports.CMITries = exports.CMIPathsObject = exports.CMIPaths = exports.CMIStudentDemographics = exports.CMI = void 0;

var Scorm12CMI = _interopRequireWildcard(require("./scorm12_cmi"));

var _common = require("./common");

var _api_constants = _interopRequireDefault(require("../constants/api_constants"));

var _regex = _interopRequireDefault(require("../constants/regex"));

var _error_codes = _interopRequireDefault(require("../constants/error_codes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var aicc_constants = _api_constants["default"].aicc;
var aicc_regex = _regex["default"].aicc;
var scorm12_error_codes = _error_codes["default"].scorm12;
/**
 * CMI Class for AICC
 */

var CMI = /*#__PURE__*/function (_Scorm12CMI$CMI) {
  _inherits(CMI, _Scorm12CMI$CMI);

  var _super = _createSuper(CMI);

  /**
   * Constructor for AICC CMI object
   * @param {boolean} initialized
   */
  function CMI(initialized) {
    var _this;

    _classCallCheck(this, CMI);

    _this = _super.call(this, aicc_constants.cmi_children);
    if (initialized) _this.initialize();
    _this.student_preference = new AICCStudentPreferences();
    _this.student_data = new AICCCMIStudentData();
    _this.student_demographics = new CMIStudentDemographics();
    _this.evaluation = new CMIEvaluation();
    _this.paths = new CMIPaths();
    return _this;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMI, [{
    key: "initialize",
    value: function initialize() {
      var _this$student_prefere, _this$student_data, _this$student_demogra, _this$evaluation, _this$paths;

      _get(_getPrototypeOf(CMI.prototype), "initialize", this).call(this);

      (_this$student_prefere = this.student_preference) === null || _this$student_prefere === void 0 ? void 0 : _this$student_prefere.initialize();
      (_this$student_data = this.student_data) === null || _this$student_data === void 0 ? void 0 : _this$student_data.initialize();
      (_this$student_demogra = this.student_demographics) === null || _this$student_demogra === void 0 ? void 0 : _this$student_demogra.initialize();
      (_this$evaluation = this.evaluation) === null || _this$evaluation === void 0 ? void 0 : _this$evaluation.initialize();
      (_this$paths = this.paths) === null || _this$paths === void 0 ? void 0 : _this$paths.initialize();
    }
    /**
     * toJSON for cmi
     *
     * @return {
     *    {
     *      suspend_data: string,
     *      launch_data: string,
     *      comments: string,
     *      comments_from_lms: string,
     *      core: CMICore,
     *      objectives: CMIObjectives,
     *      student_data: CMIStudentData,
     *      student_preference: CMIStudentPreference,
     *      interactions: CMIInteractions,
     *      paths: CMIPaths
     *    }
     *  }
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'suspend_data': this.suspend_data,
        'launch_data': this.launch_data,
        'comments': this.comments,
        'comments_from_lms': this.comments_from_lms,
        'core': this.core,
        'objectives': this.objectives,
        'student_data': this.student_data,
        'student_preference': this.student_preference,
        'student_demographics': this.student_demographics,
        'interactions': this.interactions,
        'evaluation': this.evaluation,
        'paths': this.paths
      };
      delete this.jsonString;
      return result;
    }
  }]);

  return CMI;
}(Scorm12CMI.CMI);
/**
 * AICC Evaluation object
 */


exports.CMI = CMI;

var CMIEvaluation = /*#__PURE__*/function (_BaseCMI) {
  _inherits(CMIEvaluation, _BaseCMI);

  var _super2 = _createSuper(CMIEvaluation);

  /**
   * Constructor for AICC Evaluation object
   */
  function CMIEvaluation() {
    var _this2;

    _classCallCheck(this, CMIEvaluation);

    _this2 = _super2.call(this);
    _this2.comments = new CMIEvaluationComments();
    return _this2;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMIEvaluation, [{
    key: "initialize",
    value: function initialize() {
      var _this$comments;

      _get(_getPrototypeOf(CMIEvaluation.prototype), "initialize", this).call(this);

      (_this$comments = this.comments) === null || _this$comments === void 0 ? void 0 : _this$comments.initialize();
    }
    /**
     * toJSON for cmi.evaluation object
     * @return {{comments: CMIEvaluationComments}}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'comments': this.comments
      };
      delete this.jsonString;
      return result;
    }
  }]);

  return CMIEvaluation;
}(_common.BaseCMI);
/**
 * Class representing AICC's cmi.evaluation.comments object
 */


var CMIEvaluationComments = /*#__PURE__*/function (_CMIArray) {
  _inherits(CMIEvaluationComments, _CMIArray);

  var _super3 = _createSuper(CMIEvaluationComments);

  /**
   * Constructor for AICC Evaluation Comments object
   */
  function CMIEvaluationComments() {
    _classCallCheck(this, CMIEvaluationComments);

    return _super3.call(this, aicc_constants.comments_children, scorm12_error_codes.INVALID_SET_VALUE);
  }

  return CMIEvaluationComments;
}(_common.CMIArray);
/**
 * StudentPreferences class for AICC
 */


var AICCStudentPreferences = /*#__PURE__*/function (_Scorm12CMI$CMIStuden) {
  _inherits(AICCStudentPreferences, _Scorm12CMI$CMIStuden);

  var _super4 = _createSuper(AICCStudentPreferences);

  /**
   * Constructor for AICC Student Preferences object
   */
  function AICCStudentPreferences() {
    var _this3;

    _classCallCheck(this, AICCStudentPreferences);

    _this3 = _super4.call(this, aicc_constants.student_preference_children);

    _lesson_type.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _text_color.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _text_location.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _text_size.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _video.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _this3.windows = new _common.CMIArray({
      errorCode: scorm12_error_codes.INVALID_SET_VALUE,
      children: ''
    });
    return _this3;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(AICCStudentPreferences, [{
    key: "initialize",
    value: function initialize() {
      var _this$windows;

      _get(_getPrototypeOf(AICCStudentPreferences.prototype), "initialize", this).call(this);

      (_this$windows = this.windows) === null || _this$windows === void 0 ? void 0 : _this$windows.initialize();
    }
  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.student_preference
     *
     * @return {
     *    {
     *      audio: string,
     *      language: string,
     *      speed: string,
     *      text: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'audio': this.audio,
        'language': this.language,
        'lesson_type': this.lesson_type,
        'speed': this.speed,
        'text': this.text,
        'text_color': this.text_color,
        'text_location': this.text_location,
        'text_size': this.text_size,
        'video': this.video,
        'windows': this.windows
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "lesson_type",

    /**
     * Getter for #lesson_type
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _lesson_type);
    }
    /**
     * Setter for #lesson_type
     * @param {string} lesson_type
     */
    ,
    set: function set(lesson_type) {
      if ((0, Scorm12CMI.check12ValidFormat)(lesson_type, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _lesson_type, lesson_type);
      }
    }
    /**
     * Getter for #text_color
     * @return {string}
     */

  }, {
    key: "text_color",
    get: function get() {
      return _classPrivateFieldGet(this, _text_color);
    }
    /**
     * Setter for #text_color
     * @param {string} text_color
     */
    ,
    set: function set(text_color) {
      if ((0, Scorm12CMI.check12ValidFormat)(text_color, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _text_color, text_color);
      }
    }
    /**
     * Getter for #text_location
     * @return {string}
     */

  }, {
    key: "text_location",
    get: function get() {
      return _classPrivateFieldGet(this, _text_location);
    }
    /**
     * Setter for #text_location
     * @param {string} text_location
     */
    ,
    set: function set(text_location) {
      if ((0, Scorm12CMI.check12ValidFormat)(text_location, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _text_location, text_location);
      }
    }
    /**
     * Getter for #text_size
     * @return {string}
     */

  }, {
    key: "text_size",
    get: function get() {
      return _classPrivateFieldGet(this, _text_size);
    }
    /**
     * Setter for #text_size
     * @param {string} text_size
     */
    ,
    set: function set(text_size) {
      if ((0, Scorm12CMI.check12ValidFormat)(text_size, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _text_size, text_size);
      }
    }
    /**
     * Getter for #video
     * @return {string}
     */

  }, {
    key: "video",
    get: function get() {
      return _classPrivateFieldGet(this, _video);
    }
    /**
     * Setter for #video
     * @param {string} video
     */
    ,
    set: function set(video) {
      if ((0, Scorm12CMI.check12ValidFormat)(video, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _video, video);
      }
    }
  }]);

  return AICCStudentPreferences;
}(Scorm12CMI.CMIStudentPreference);
/**
 * StudentData class for AICC
 */


var _lesson_type = new WeakMap();

var _text_color = new WeakMap();

var _text_location = new WeakMap();

var _text_size = new WeakMap();

var _video = new WeakMap();

var AICCCMIStudentData = /*#__PURE__*/function (_Scorm12CMI$CMIStuden2) {
  _inherits(AICCCMIStudentData, _Scorm12CMI$CMIStuden2);

  var _super5 = _createSuper(AICCCMIStudentData);

  /**
   * Constructor for AICC StudentData object
   */
  function AICCCMIStudentData() {
    var _this4;

    _classCallCheck(this, AICCCMIStudentData);

    _this4 = _super5.call(this, aicc_constants.student_data_children);

    _tries_during_lesson.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _this4.tries = new CMITries();
    return _this4;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(AICCCMIStudentData, [{
    key: "initialize",
    value: function initialize() {
      var _this$tries;

      _get(_getPrototypeOf(AICCCMIStudentData.prototype), "initialize", this).call(this);

      (_this$tries = this.tries) === null || _this$tries === void 0 ? void 0 : _this$tries.initialize();
    }
  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.student_data object
     * @return {
     *    {
     *      mastery_score: string,
     *      max_time_allowed: string,
     *      time_limit_action: string,
     *      tries: CMITries
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'mastery_score': this.mastery_score,
        'max_time_allowed': this.max_time_allowed,
        'time_limit_action': this.time_limit_action,
        'tries': this.tries
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "tries_during_lesson",

    /**
     * Getter for tries_during_lesson
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _tries_during_lesson);
    }
    /**
     * Setter for #tries_during_lesson. Sets an error if trying to set after
     *  initialization.
     * @param {string} tries_during_lesson
     */
    ,
    set: function set(tries_during_lesson) {
      !this.initialized ? _classPrivateFieldSet(this, _tries_during_lesson, tries_during_lesson) : (0, Scorm12CMI.throwReadOnlyError)();
    }
  }]);

  return AICCCMIStudentData;
}(Scorm12CMI.CMIStudentData);
/**
 * Class representing the AICC cmi.student_demographics object
 */


var _tries_during_lesson = new WeakMap();

var CMIStudentDemographics = /*#__PURE__*/function (_BaseCMI2) {
  _inherits(CMIStudentDemographics, _BaseCMI2);

  var _super6 = _createSuper(CMIStudentDemographics);

  /**
   * Constructor for AICC StudentDemographics object
   */
  function CMIStudentDemographics() {
    var _this5;

    _classCallCheck(this, CMIStudentDemographics);

    _this5 = _super6.call(this);

    _children.set(_assertThisInitialized(_this5), {
      writable: true,
      value: aicc_constants.student_demographics_children
    });

    _city.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _class.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _company.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _country.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _experience.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _familiar_name.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _instructor_name.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _title.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _native_language.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _state.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _street_address.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _telephone.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _years_experience.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    return _this5;
  }

  _createClass(CMIStudentDemographics, [{
    key: "toJSON",

    /**
     * toJSON for cmi.student_demographics object
     * @return {
     *      {
     *        city: string,
     *        class: string,
     *        company: string,
     *        country: string,
     *        experience: string,
     *        familiar_name: string,
     *        instructor_name: string,
     *        title: string,
     *        native_language: string,
     *        state: string,
     *        street_address: string,
     *        telephone: string,
     *        years_experience: string
     *      }
     *    }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'city': this.city,
        'class': this["class"],
        'company': this.company,
        'country': this.country,
        'experience': this.experience,
        'familiar_name': this.familiar_name,
        'instructor_name': this.instructor_name,
        'title': this.title,
        'native_language': this.native_language,
        'state': this.state,
        'street_address': this.street_address,
        'telephone': this.telephone,
        'years_experience': this.years_experience
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "city",

    /**
     * Getter for city
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _city);
    }
    /**
     * Setter for #city. Sets an error if trying to set after
     *  initialization.
     * @param {string} city
     */
    ,
    set: function set(city) {
      !this.initialized ? _classPrivateFieldSet(this, _city, city) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for class
     * @return {string}
     */

  }, {
    key: "class",
    get: function get() {
      return _classPrivateFieldGet(this, _class);
    }
    /**
     * Setter for #class. Sets an error if trying to set after
     *  initialization.
     * @param {string} clazz
     */
    ,
    set: function set(clazz) {
      !this.initialized ? _classPrivateFieldSet(this, _class, clazz) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for company
     * @return {string}
     */

  }, {
    key: "company",
    get: function get() {
      return _classPrivateFieldGet(this, _company);
    }
    /**
     * Setter for #company. Sets an error if trying to set after
     *  initialization.
     * @param {string} company
     */
    ,
    set: function set(company) {
      !this.initialized ? _classPrivateFieldSet(this, _company, company) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for country
     * @return {string}
     */

  }, {
    key: "country",
    get: function get() {
      return _classPrivateFieldGet(this, _country);
    }
    /**
     * Setter for #country. Sets an error if trying to set after
     *  initialization.
     * @param {string} country
     */
    ,
    set: function set(country) {
      !this.initialized ? _classPrivateFieldSet(this, _country, country) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for experience
     * @return {string}
     */

  }, {
    key: "experience",
    get: function get() {
      return _classPrivateFieldGet(this, _experience);
    }
    /**
     * Setter for #experience. Sets an error if trying to set after
     *  initialization.
     * @param {string} experience
     */
    ,
    set: function set(experience) {
      !this.initialized ? _classPrivateFieldSet(this, _experience, experience) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for familiar_name
     * @return {string}
     */

  }, {
    key: "familiar_name",
    get: function get() {
      return _classPrivateFieldGet(this, _familiar_name);
    }
    /**
     * Setter for #familiar_name. Sets an error if trying to set after
     *  initialization.
     * @param {string} familiar_name
     */
    ,
    set: function set(familiar_name) {
      !this.initialized ? _classPrivateFieldSet(this, _familiar_name, familiar_name) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for instructor_name
     * @return {string}
     */

  }, {
    key: "instructor_name",
    get: function get() {
      return _classPrivateFieldGet(this, _instructor_name);
    }
    /**
     * Setter for #instructor_name. Sets an error if trying to set after
     *  initialization.
     * @param {string} instructor_name
     */
    ,
    set: function set(instructor_name) {
      !this.initialized ? _classPrivateFieldSet(this, _instructor_name, instructor_name) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for title
     * @return {string}
     */

  }, {
    key: "title",
    get: function get() {
      return _classPrivateFieldGet(this, _title);
    }
    /**
     * Setter for #title. Sets an error if trying to set after
     *  initialization.
     * @param {string} title
     */
    ,
    set: function set(title) {
      !this.initialized ? _classPrivateFieldSet(this, _title, title) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for native_language
     * @return {string}
     */

  }, {
    key: "native_language",
    get: function get() {
      return _classPrivateFieldGet(this, _native_language);
    }
    /**
     * Setter for #native_language. Sets an error if trying to set after
     *  initialization.
     * @param {string} native_language
     */
    ,
    set: function set(native_language) {
      !this.initialized ? _classPrivateFieldSet(this, _native_language, native_language) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for state
     * @return {string}
     */

  }, {
    key: "state",
    get: function get() {
      return _classPrivateFieldGet(this, _state);
    }
    /**
     * Setter for #state. Sets an error if trying to set after
     *  initialization.
     * @param {string} state
     */
    ,
    set: function set(state) {
      !this.initialized ? _classPrivateFieldSet(this, _state, state) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for street_address
     * @return {string}
     */

  }, {
    key: "street_address",
    get: function get() {
      return _classPrivateFieldGet(this, _street_address);
    }
    /**
     * Setter for #street_address. Sets an error if trying to set after
     *  initialization.
     * @param {string} street_address
     */
    ,
    set: function set(street_address) {
      !this.initialized ? _classPrivateFieldSet(this, _street_address, street_address) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for telephone
     * @return {string}
     */

  }, {
    key: "telephone",
    get: function get() {
      return _classPrivateFieldGet(this, _telephone);
    }
    /**
     * Setter for #telephone. Sets an error if trying to set after
     *  initialization.
     * @param {string} telephone
     */
    ,
    set: function set(telephone) {
      !this.initialized ? _classPrivateFieldSet(this, _telephone, telephone) : (0, Scorm12CMI.throwReadOnlyError)();
    }
    /**
     * Getter for years_experience
     * @return {string}
     */

  }, {
    key: "years_experience",
    get: function get() {
      return _classPrivateFieldGet(this, _years_experience);
    }
    /**
     * Setter for #years_experience. Sets an error if trying to set after
     *  initialization.
     * @param {string} years_experience
     */
    ,
    set: function set(years_experience) {
      !this.initialized ? _classPrivateFieldSet(this, _years_experience, years_experience) : (0, Scorm12CMI.throwReadOnlyError)();
    }
  }]);

  return CMIStudentDemographics;
}(_common.BaseCMI);
/**
 * Class representing the AICC cmi.paths object
 */


exports.CMIStudentDemographics = CMIStudentDemographics;

var _children = new WeakMap();

var _city = new WeakMap();

var _class = new WeakMap();

var _company = new WeakMap();

var _country = new WeakMap();

var _experience = new WeakMap();

var _familiar_name = new WeakMap();

var _instructor_name = new WeakMap();

var _title = new WeakMap();

var _native_language = new WeakMap();

var _state = new WeakMap();

var _street_address = new WeakMap();

var _telephone = new WeakMap();

var _years_experience = new WeakMap();

var CMIPaths = /*#__PURE__*/function (_CMIArray2) {
  _inherits(CMIPaths, _CMIArray2);

  var _super7 = _createSuper(CMIPaths);

  /**
   * Constructor for inline Paths Array class
   */
  function CMIPaths() {
    _classCallCheck(this, CMIPaths);

    return _super7.call(this, aicc_constants.paths_children);
  }

  return CMIPaths;
}(_common.CMIArray);
/**
 * Class for AICC Paths
 */


exports.CMIPaths = CMIPaths;

var CMIPathsObject = /*#__PURE__*/function (_BaseCMI3) {
  _inherits(CMIPathsObject, _BaseCMI3);

  var _super8 = _createSuper(CMIPathsObject);

  /**
   * Constructor for AICC Paths objects
   */
  function CMIPathsObject() {
    var _this6;

    _classCallCheck(this, CMIPathsObject);

    _this6 = _super8.call(this);

    _location_id.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _date.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _time.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _status.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _why_left.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _time_in_element.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    return _this6;
  }

  _createClass(CMIPathsObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.paths.n object
     * @return {
     *    {
     *      location_id: string,
     *      date: string,
     *      time: string,
     *      status: string,
     *      why_left: string,
     *      time_in_element: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'location_id': this.location_id,
        'date': this.date,
        'time': this.time,
        'status': this.status,
        'why_left': this.why_left,
        'time_in_element': this.time_in_element
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "location_id",

    /**
     * Getter for #location_id
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _location_id);
    }
    /**
     * Setter for #location_id
     * @param {string} location_id
     */
    ,
    set: function set(location_id) {
      if ((0, Scorm12CMI.check12ValidFormat)(location_id, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _location_id, location_id);
      }
    }
    /**
     * Getter for #date
     * @return {string}
     */

  }, {
    key: "date",
    get: function get() {
      return _classPrivateFieldGet(this, _date);
    }
    /**
     * Setter for #date
     * @param {string} date
     */
    ,
    set: function set(date) {
      if ((0, Scorm12CMI.check12ValidFormat)(date, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _date, date);
      }
    }
    /**
     * Getter for #time
     * @return {string}
     */

  }, {
    key: "time",
    get: function get() {
      return _classPrivateFieldGet(this, _time);
    }
    /**
     * Setter for #time
     * @param {string} time
     */
    ,
    set: function set(time) {
      if ((0, Scorm12CMI.check12ValidFormat)(time, aicc_regex.CMITime)) {
        _classPrivateFieldSet(this, _time, time);
      }
    }
    /**
     * Getter for #status
     * @return {string}
     */

  }, {
    key: "status",
    get: function get() {
      return _classPrivateFieldGet(this, _status);
    }
    /**
     * Setter for #status
     * @param {string} status
     */
    ,
    set: function set(status) {
      if ((0, Scorm12CMI.check12ValidFormat)(status, aicc_regex.CMIStatus2)) {
        _classPrivateFieldSet(this, _status, status);
      }
    }
    /**
     * Getter for #why_left
     * @return {string}
     */

  }, {
    key: "why_left",
    get: function get() {
      return _classPrivateFieldGet(this, _why_left);
    }
    /**
     * Setter for #why_left
     * @param {string} why_left
     */
    ,
    set: function set(why_left) {
      if ((0, Scorm12CMI.check12ValidFormat)(why_left, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _why_left, why_left);
      }
    }
    /**
     * Getter for #time_in_element
     * @return {string}
     */

  }, {
    key: "time_in_element",
    get: function get() {
      return _classPrivateFieldGet(this, _time_in_element);
    }
    /**
     * Setter for #time_in_element
     * @param {string} time_in_element
     */
    ,
    set: function set(time_in_element) {
      if ((0, Scorm12CMI.check12ValidFormat)(time_in_element, aicc_regex.CMITime)) {
        _classPrivateFieldSet(this, _time_in_element, time_in_element);
      }
    }
  }]);

  return CMIPathsObject;
}(_common.BaseCMI);
/**
 * Class representing the AICC cmi.student_data.tries object
 */


exports.CMIPathsObject = CMIPathsObject;

var _location_id = new WeakMap();

var _date = new WeakMap();

var _time = new WeakMap();

var _status = new WeakMap();

var _why_left = new WeakMap();

var _time_in_element = new WeakMap();

var CMITries = /*#__PURE__*/function (_CMIArray3) {
  _inherits(CMITries, _CMIArray3);

  var _super9 = _createSuper(CMITries);

  /**
   * Constructor for inline Tries Array class
   */
  function CMITries() {
    _classCallCheck(this, CMITries);

    return _super9.call(this, aicc_constants.tries_children);
  }

  return CMITries;
}(_common.CMIArray);
/**
 * Class for AICC Tries
 */


exports.CMITries = CMITries;

var CMITriesObject = /*#__PURE__*/function (_BaseCMI4) {
  _inherits(CMITriesObject, _BaseCMI4);

  var _super10 = _createSuper(CMITriesObject);

  /**
   * Constructor for AICC Tries object
   */
  function CMITriesObject() {
    var _this7;

    _classCallCheck(this, CMITriesObject);

    _this7 = _super10.call(this);

    _status2.set(_assertThisInitialized(_this7), {
      writable: true,
      value: ''
    });

    _time2.set(_assertThisInitialized(_this7), {
      writable: true,
      value: ''
    });

    _this7.score = new _common.CMIScore({
      score_children: aicc_constants.score_children,
      score_range: aicc_regex.score_range,
      invalidErrorCode: scorm12_error_codes.INVALID_SET_VALUE,
      invalidTypeCode: scorm12_error_codes.TYPE_MISMATCH,
      invalidRangeCode: scorm12_error_codes.VALUE_OUT_OF_RANGE
    });
    return _this7;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMITriesObject, [{
    key: "initialize",
    value: function initialize() {
      var _this$score;

      _get(_getPrototypeOf(CMITriesObject.prototype), "initialize", this).call(this);

      (_this$score = this.score) === null || _this$score === void 0 ? void 0 : _this$score.initialize();
    }
  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.student_data.tries.n object
     * @return {
     *    {
     *      status: string,
     *      time: string,
     *      score: CMIScore
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'status': this.status,
        'time': this.time,
        'score': this.score
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "status",

    /**
     * Getter for #status
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _status2);
    }
    /**
     * Setter for #status
     * @param {string} status
     */
    ,
    set: function set(status) {
      if ((0, Scorm12CMI.check12ValidFormat)(status, aicc_regex.CMIStatus2)) {
        _classPrivateFieldSet(this, _status2, status);
      }
    }
    /**
     * Getter for #time
     * @return {string}
     */

  }, {
    key: "time",
    get: function get() {
      return _classPrivateFieldGet(this, _time2);
    }
    /**
     * Setter for #time
     * @param {string} time
     */
    ,
    set: function set(time) {
      if ((0, Scorm12CMI.check12ValidFormat)(time, aicc_regex.CMITime)) {
        _classPrivateFieldSet(this, _time2, time);
      }
    }
  }]);

  return CMITriesObject;
}(_common.BaseCMI);
/**
 * Class for cmi.student_data.attempt_records array
 */


exports.CMITriesObject = CMITriesObject;

var _status2 = new WeakMap();

var _time2 = new WeakMap();

var CMIAttemptRecords = /*#__PURE__*/function (_CMIArray4) {
  _inherits(CMIAttemptRecords, _CMIArray4);

  var _super11 = _createSuper(CMIAttemptRecords);

  /**
   * Constructor for inline Tries Array class
   */
  function CMIAttemptRecords() {
    _classCallCheck(this, CMIAttemptRecords);

    return _super11.call(this, aicc_constants.attempt_records_children);
  }

  return CMIAttemptRecords;
}(_common.CMIArray);
/**
 * Class for AICC Attempt Records
 */


exports.CMIAttemptRecords = CMIAttemptRecords;

var CMIAttemptRecordsObject = /*#__PURE__*/function (_BaseCMI5) {
  _inherits(CMIAttemptRecordsObject, _BaseCMI5);

  var _super12 = _createSuper(CMIAttemptRecordsObject);

  /**
   * Constructor for AICC Attempt Records object
   */
  function CMIAttemptRecordsObject() {
    var _this8;

    _classCallCheck(this, CMIAttemptRecordsObject);

    _this8 = _super12.call(this);

    _lesson_status.set(_assertThisInitialized(_this8), {
      writable: true,
      value: ''
    });

    _this8.score = new _common.CMIScore({
      score_children: aicc_constants.score_children,
      score_range: aicc_regex.score_range,
      invalidErrorCode: scorm12_error_codes.INVALID_SET_VALUE,
      invalidTypeCode: scorm12_error_codes.TYPE_MISMATCH,
      invalidRangeCode: scorm12_error_codes.VALUE_OUT_OF_RANGE
    });
    return _this8;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMIAttemptRecordsObject, [{
    key: "initialize",
    value: function initialize() {
      var _this$score2;

      _get(_getPrototypeOf(CMIAttemptRecordsObject.prototype), "initialize", this).call(this);

      (_this$score2 = this.score) === null || _this$score2 === void 0 ? void 0 : _this$score2.initialize();
    }
  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.student_data.attempt_records.n object
     * @return {
     *    {
     *      status: string,
     *      time: string,
     *      score: CMIScore
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'lesson_status': this.lesson_status,
        'score': this.score
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "lesson_status",

    /**
     * Getter for #lesson_status
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _lesson_status);
    }
    /**
     * Setter for #lesson_status
     * @param {string} lesson_status
     */
    ,
    set: function set(lesson_status) {
      if ((0, Scorm12CMI.check12ValidFormat)(lesson_status, aicc_regex.CMIStatus2)) {
        _classPrivateFieldSet(this, _lesson_status, lesson_status);
      }
    }
  }]);

  return CMIAttemptRecordsObject;
}(_common.BaseCMI);
/**
 * Class for AICC Evaluation Comments
 */


exports.CMIAttemptRecordsObject = CMIAttemptRecordsObject;

var _lesson_status = new WeakMap();

var CMIEvaluationCommentsObject = /*#__PURE__*/function (_BaseCMI6) {
  _inherits(CMIEvaluationCommentsObject, _BaseCMI6);

  var _super13 = _createSuper(CMIEvaluationCommentsObject);

  /**
   * Constructor for Evaluation Comments
   */
  function CMIEvaluationCommentsObject() {
    var _this9;

    _classCallCheck(this, CMIEvaluationCommentsObject);

    _this9 = _super13.call(this);

    _content.set(_assertThisInitialized(_this9), {
      writable: true,
      value: ''
    });

    _location.set(_assertThisInitialized(_this9), {
      writable: true,
      value: ''
    });

    _time3.set(_assertThisInitialized(_this9), {
      writable: true,
      value: ''
    });

    return _this9;
  }

  _createClass(CMIEvaluationCommentsObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.evaulation.comments.n object
     * @return {
     *    {
     *      content: string,
     *      location: string,
     *      time: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'content': this.content,
        'location': this.location,
        'time': this.time
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "content",

    /**
     * Getter for #content
     * @return {string}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _content);
    }
    /**
     * Setter for #content
     * @param {string} content
     */
    ,
    set: function set(content) {
      if ((0, Scorm12CMI.check12ValidFormat)(content, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _content, content);
      }
    }
    /**
     * Getter for #location
     * @return {string}
     */

  }, {
    key: "location",
    get: function get() {
      return _classPrivateFieldGet(this, _location);
    }
    /**
     * Setter for #location
     * @param {string} location
     */
    ,
    set: function set(location) {
      if ((0, Scorm12CMI.check12ValidFormat)(location, aicc_regex.CMIString256)) {
        _classPrivateFieldSet(this, _location, location);
      }
    }
    /**
     * Getter for #time
     * @return {string}
     */

  }, {
    key: "time",
    get: function get() {
      return _classPrivateFieldGet(this, _time3);
    }
    /**
     * Setting for #time
     * @param {string} time
     */
    ,
    set: function set(time) {
      if ((0, Scorm12CMI.check12ValidFormat)(time, aicc_regex.CMITime)) {
        _classPrivateFieldSet(this, _time3, time);
      }
    }
  }]);

  return CMIEvaluationCommentsObject;
}(_common.BaseCMI);

exports.CMIEvaluationCommentsObject = CMIEvaluationCommentsObject;

var _content = new WeakMap();

var _location = new WeakMap();

var _time3 = new WeakMap();

},{"../constants/api_constants":9,"../constants/error_codes":10,"../constants/regex":12,"./common":6,"./scorm12_cmi":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidFormat = checkValidFormat;
exports.checkValidRange = checkValidRange;
exports.CMIArray = exports.CMIScore = exports.BaseCMI = void 0;

var _api_constants = _interopRequireDefault(require("../constants/api_constants"));

var _error_codes = _interopRequireDefault(require("../constants/error_codes"));

var _exceptions = require("../exceptions");

var _regex = _interopRequireDefault(require("../constants/regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var scorm12_constants = _api_constants["default"].scorm12;
var scorm12_regex = _regex["default"].scorm12;
var scorm12_error_codes = _error_codes["default"].scorm12;
/**
 * Check if the value matches the proper format. If not, throw proper error code.
 *
 * @param {string} value
 * @param {string} regexPattern
 * @param {number} errorCode
 * @param {boolean} allowEmptyString
 * @return {boolean}
 */

function checkValidFormat(value, regexPattern, errorCode, allowEmptyString) {
  var formatRegex = new RegExp(regexPattern);
  var matches = value.match(formatRegex);

  if (allowEmptyString && value === '') {
    return true;
  }

  if (value === undefined || !matches || matches[0] === '') {
    throw new _exceptions.ValidationError(errorCode);
  }

  return true;
}
/**
 * Check if the value matches the proper range. If not, throw proper error code.
 *
 * @param {*} value
 * @param {string} rangePattern
 * @param {number} errorCode
 * @return {boolean}
 */


function checkValidRange(value, rangePattern, errorCode) {
  var ranges = rangePattern.split('#');
  value = value * 1.0;

  if (value >= ranges[0]) {
    if (ranges[1] === '*' || value <= ranges[1]) {
      return true;
    } else {
      throw new _exceptions.ValidationError(errorCode);
    }
  } else {
    throw new _exceptions.ValidationError(errorCode);
  }
}
/**
 * Base class for API cmi objects
 */


var BaseCMI = /*#__PURE__*/function () {
  /**
   * Constructor for BaseCMI, just marks the class as abstract
   */
  function BaseCMI() {
    _classCallCheck(this, BaseCMI);

    _defineProperty(this, "jsonString", false);

    _initialized.set(this, {
      writable: true,
      value: false
    });

    if ((this instanceof BaseCMI ? this.constructor : void 0) === BaseCMI) {
      throw new TypeError('Cannot construct BaseCMI instances directly');
    }
  }
  /**
   * Getter for #initialized
   * @return {boolean}
   */


  _createClass(BaseCMI, [{
    key: "initialize",

    /**
     * Called when the API has been initialized after the CMI has been created
     */
    value: function initialize() {
      _classPrivateFieldSet(this, _initialized, true);
    }
  }, {
    key: "initialized",
    get: function get() {
      return _classPrivateFieldGet(this, _initialized);
    }
  }]);

  return BaseCMI;
}();
/**
 * Base class for cmi *.score objects
 */


exports.BaseCMI = BaseCMI;

var _initialized = new WeakMap();

var CMIScore = /*#__PURE__*/function (_BaseCMI) {
  _inherits(CMIScore, _BaseCMI);

  var _super = _createSuper(CMIScore);

  /**
   * Constructor for *.score
   * @param {string} score_children
   * @param {string} score_range
   * @param {string} max
   * @param {number} invalidErrorCode
   * @param {number} invalidTypeCode
   * @param {number} invalidRangeCode
   * @param {string} decimalRegex
   */
  function CMIScore(_ref) {
    var _this;

    var score_children = _ref.score_children,
        score_range = _ref.score_range,
        max = _ref.max,
        invalidErrorCode = _ref.invalidErrorCode,
        invalidTypeCode = _ref.invalidTypeCode,
        invalidRangeCode = _ref.invalidRangeCode,
        decimalRegex = _ref.decimalRegex;

    _classCallCheck(this, CMIScore);

    _this = _super.call(this);

    _children2.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _score_range.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _invalid_error_code.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _invalid_type_code.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _invalid_range_code.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _decimal_regex.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _raw.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _min.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _max.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _children2, score_children || scorm12_constants.score_children);

    _classPrivateFieldSet(_assertThisInitialized(_this), _score_range, !score_range ? false : scorm12_regex.score_range);

    _classPrivateFieldSet(_assertThisInitialized(_this), _max, max || max === '' ? max : '100');

    _classPrivateFieldSet(_assertThisInitialized(_this), _invalid_error_code, invalidErrorCode || scorm12_error_codes.INVALID_SET_VALUE);

    _classPrivateFieldSet(_assertThisInitialized(_this), _invalid_type_code, invalidTypeCode || scorm12_error_codes.TYPE_MISMATCH);

    _classPrivateFieldSet(_assertThisInitialized(_this), _invalid_range_code, invalidRangeCode || scorm12_error_codes.VALUE_OUT_OF_RANGE);

    _classPrivateFieldSet(_assertThisInitialized(_this), _decimal_regex, decimalRegex || scorm12_regex.CMIDecimal);

    return _this;
  }

  _createClass(CMIScore, [{
    key: "toJSON",

    /**
     * toJSON for *.score
     * @return {{min: string, max: string, raw: string}}
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'raw': this.raw,
        'min': this.min,
        'max': this.max
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",

    /**
     * Getter for _children
     * @return {string}
     * @private
     */
    get: function get() {
      return _classPrivateFieldGet(this, _children2);
    }
    /**
     * Setter for _children. Just throws an error.
     * @param {string} _children
     * @private
     */
    ,
    set: function set(_children) {
      throw new _exceptions.ValidationError(_classPrivateFieldGet(this, _invalid_error_code));
    }
    /**
     * Getter for #raw
     * @return {string}
     */

  }, {
    key: "raw",
    get: function get() {
      return _classPrivateFieldGet(this, _raw);
    }
    /**
     * Setter for #raw
     * @param {string} raw
     */
    ,
    set: function set(raw) {
      if (checkValidFormat(raw, _classPrivateFieldGet(this, _decimal_regex), _classPrivateFieldGet(this, _invalid_type_code)) && (!_classPrivateFieldGet(this, _score_range) || checkValidRange(raw, _classPrivateFieldGet(this, _score_range), _classPrivateFieldGet(this, _invalid_range_code)))) {
        _classPrivateFieldSet(this, _raw, raw);
      }
    }
    /**
     * Getter for #min
     * @return {string}
     */

  }, {
    key: "min",
    get: function get() {
      return _classPrivateFieldGet(this, _min);
    }
    /**
     * Setter for #min
     * @param {string} min
     */
    ,
    set: function set(min) {
      if (checkValidFormat(min, _classPrivateFieldGet(this, _decimal_regex), _classPrivateFieldGet(this, _invalid_type_code)) && (!_classPrivateFieldGet(this, _score_range) || checkValidRange(min, _classPrivateFieldGet(this, _score_range), _classPrivateFieldGet(this, _invalid_range_code)))) {
        _classPrivateFieldSet(this, _min, min);
      }
    }
    /**
     * Getter for #max
     * @return {string}
     */

  }, {
    key: "max",
    get: function get() {
      return _classPrivateFieldGet(this, _max);
    }
    /**
     * Setter for #max
     * @param {string} max
     */
    ,
    set: function set(max) {
      if (checkValidFormat(max, _classPrivateFieldGet(this, _decimal_regex), _classPrivateFieldGet(this, _invalid_type_code)) && (!_classPrivateFieldGet(this, _score_range) || checkValidRange(max, _classPrivateFieldGet(this, _score_range), _classPrivateFieldGet(this, _invalid_range_code)))) {
        _classPrivateFieldSet(this, _max, max);
      }
    }
  }]);

  return CMIScore;
}(BaseCMI);
/**
 * Base class for cmi *.n objects
 */


exports.CMIScore = CMIScore;

var _children2 = new WeakMap();

var _score_range = new WeakMap();

var _invalid_error_code = new WeakMap();

var _invalid_type_code = new WeakMap();

var _invalid_range_code = new WeakMap();

var _decimal_regex = new WeakMap();

var _raw = new WeakMap();

var _min = new WeakMap();

var _max = new WeakMap();

var CMIArray = /*#__PURE__*/function (_BaseCMI2) {
  _inherits(CMIArray, _BaseCMI2);

  var _super2 = _createSuper(CMIArray);

  /**
   * Constructor cmi *.n arrays
   * @param {string} children
   * @param {number} errorCode
   */
  function CMIArray(_ref2) {
    var _this2;

    var children = _ref2.children,
        errorCode = _ref2.errorCode;

    _classCallCheck(this, CMIArray);

    _this2 = _super2.call(this);

    _errorCode.set(_assertThisInitialized(_this2), {
      writable: true,
      value: void 0
    });

    _children3.set(_assertThisInitialized(_this2), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this2), _children3, children);

    _classPrivateFieldSet(_assertThisInitialized(_this2), _errorCode, errorCode);

    _this2.childArray = [];
    return _this2;
  }

  _createClass(CMIArray, [{
    key: "toJSON",

    /**
     * toJSON for *.n arrays
     * @return {object}
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {};

      for (var i = 0; i < this.childArray.length; i++) {
        result[i + ''] = this.childArray[i];
      }

      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",

    /**
     * Getter for _children
     * @return {*}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _children3);
    }
    /**
     * Setter for _children. Just throws an error.
     * @param {string} _children
     */
    ,
    set: function set(_children) {
      throw new _exceptions.ValidationError(_classPrivateFieldGet(this, _errorCode));
    }
    /**
     * Getter for _count
     * @return {number}
     */

  }, {
    key: "_count",
    get: function get() {
      return this.childArray.length;
    }
    /**
     * Setter for _count. Just throws an error.
     * @param {number} _count
     */
    ,
    set: function set(_count) {
      throw new _exceptions.ValidationError(_classPrivateFieldGet(this, _errorCode));
    }
  }]);

  return CMIArray;
}(BaseCMI);

exports.CMIArray = CMIArray;

var _errorCode = new WeakMap();

var _children3 = new WeakMap();

},{"../constants/api_constants":9,"../constants/error_codes":10,"../constants/regex":12,"../exceptions":14}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwReadOnlyError = throwReadOnlyError;
exports.throwWriteOnlyError = throwWriteOnlyError;
exports.check12ValidFormat = check12ValidFormat;
exports.check12ValidRange = check12ValidRange;
exports.NAV = exports.CMIInteractionsCorrectResponsesObject = exports.CMIInteractionsObjectivesObject = exports.CMIObjectivesObject = exports.CMIInteractionsObject = exports.CMIStudentPreference = exports.CMIStudentData = exports.CMI = void 0;

var _common = require("./common");

var _api_constants = _interopRequireDefault(require("../constants/api_constants"));

var _error_codes = _interopRequireDefault(require("../constants/error_codes"));

var _regex = _interopRequireDefault(require("../constants/regex"));

var _exceptions = require("../exceptions");

var Utilities = _interopRequireWildcard(require("../utilities"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var scorm12_constants = _api_constants["default"].scorm12;
var scorm12_regex = _regex["default"].scorm12;
var scorm12_error_codes = _error_codes["default"].scorm12;
/**
 * Helper method for throwing Read Only error
 */

function throwReadOnlyError() {
  throw new _exceptions.ValidationError(scorm12_error_codes.READ_ONLY_ELEMENT);
}
/**
 * Helper method for throwing Write Only error
 */


function throwWriteOnlyError() {
  throw new _exceptions.ValidationError(scorm12_error_codes.WRITE_ONLY_ELEMENT);
}
/**
 * Helper method for throwing Invalid Set error
 */


function throwInvalidValueError() {
  throw new _exceptions.ValidationError(scorm12_error_codes.INVALID_SET_VALUE);
}
/**
 * Helper method, no reason to have to pass the same error codes every time
 * @param {*} value
 * @param {string} regexPattern
 * @param {boolean} allowEmptyString
 * @return {boolean}
 */


function check12ValidFormat(value, regexPattern, allowEmptyString) {
  return (0, _common.checkValidFormat)(value, regexPattern, scorm12_error_codes.TYPE_MISMATCH, allowEmptyString);
}
/**
 * Helper method, no reason to have to pass the same error codes every time
 * @param {*} value
 * @param {string} rangePattern
 * @param {boolean} allowEmptyString
 * @return {boolean}
 */


function check12ValidRange(value, rangePattern, allowEmptyString) {
  return (0, _common.checkValidRange)(value, rangePattern, scorm12_error_codes.VALUE_OUT_OF_RANGE, allowEmptyString);
}
/**
 * Class representing the cmi object for SCORM 1.2
 */


var CMI = /*#__PURE__*/function (_BaseCMI) {
  _inherits(CMI, _BaseCMI);

  var _super = _createSuper(CMI);

  /**
   * Constructor for the SCORM 1.2 cmi object
   * @param {string} cmi_children
   * @param {(CMIStudentData|AICCCMIStudentData)} student_data
   * @param {boolean} initialized
   */
  function CMI(cmi_children, student_data, initialized) {
    var _this;

    _classCallCheck(this, CMI);

    _this = _super.call(this);

    _children2.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _version2.set(_assertThisInitialized(_this), {
      writable: true,
      value: '3.4'
    });

    _launch_data.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _comments.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _comments_from_lms.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _defineProperty(_assertThisInitialized(_this), "student_data", null);

    if (initialized) _this.initialize();

    _classPrivateFieldSet(_assertThisInitialized(_this), _children2, cmi_children ? cmi_children : scorm12_constants.cmi_children);

    _this.core = new CMICore();
    _this.objectives = new CMIObjectives();
    _this.student_data = student_data ? student_data : new CMIStudentData();
    _this.student_preference = new CMIStudentPreference();
    _this.interactions = new CMIInteractions();
    return _this;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMI, [{
    key: "initialize",
    value: function initialize() {
      var _this$core, _this$objectives, _this$student_data, _this$student_prefere, _this$interactions;

      _get(_getPrototypeOf(CMI.prototype), "initialize", this).call(this);

      (_this$core = this.core) === null || _this$core === void 0 ? void 0 : _this$core.initialize();
      (_this$objectives = this.objectives) === null || _this$objectives === void 0 ? void 0 : _this$objectives.initialize();
      (_this$student_data = this.student_data) === null || _this$student_data === void 0 ? void 0 : _this$student_data.initialize();
      (_this$student_prefere = this.student_preference) === null || _this$student_prefere === void 0 ? void 0 : _this$student_prefere.initialize();
      (_this$interactions = this.interactions) === null || _this$interactions === void 0 ? void 0 : _this$interactions.initialize();
    }
    /**
     * toJSON for cmi
     *
     * @return {
     *    {
     *      suspend_data: string,
     *      launch_data: string,
     *      comments: string,
     *      comments_from_lms: string,
     *      core: CMICore,
     *      objectives: CMIObjectives,
     *      student_data: CMIStudentData,
     *      student_preference: CMIStudentPreference,
     *      interactions: CMIInteractions
     *    }
     *  }
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'suspend_data': this.suspend_data,
        'launch_data': this.launch_data,
        'comments': this.comments,
        'comments_from_lms': this.comments_from_lms,
        'core': this.core,
        'objectives': this.objectives,
        'student_data': this.student_data,
        'student_preference': this.student_preference,
        'interactions': this.interactions
      };
      delete this.jsonString;
      return result;
    }
    /**
     * Getter for #_version
     * @return {string}
     */

  }, {
    key: "getCurrentTotalTime",

    /**
     * Adds the current session time to the existing total time.
     *
     * @return {string}
     */
    value: function getCurrentTotalTime() {
      return this.core.getCurrentTotalTime();
    }
  }, {
    key: "_version",
    get: function get() {
      return _classPrivateFieldGet(this, _version2);
    }
    /**
     * Setter for #_version. Just throws an error.
     * @param {string} _version
     */
    ,
    set: function set(_version) {
      throwInvalidValueError();
    }
    /**
     * Getter for #_children
     * @return {string}
     */

  }, {
    key: "_children",
    get: function get() {
      return _classPrivateFieldGet(this, _children2);
    }
    /**
     * Setter for #_version. Just throws an error.
     * @param {string} _children
     */
    ,
    set: function set(_children) {
      throwInvalidValueError();
    }
    /**
     * Getter for #suspend_data
     * @return {string}
     */

  }, {
    key: "suspend_data",
    get: function get() {
      var _this$core2;

      return (_this$core2 = this.core) === null || _this$core2 === void 0 ? void 0 : _this$core2.suspend_data;
    }
    /**
     * Setter for #suspend_data
     * @param {string} suspend_data
     */
    ,
    set: function set(suspend_data) {
      if (this.core) {
        this.core.suspend_data = suspend_data;
      }
    }
    /**
     * Getter for #launch_data
     * @return {string}
     */

  }, {
    key: "launch_data",
    get: function get() {
      return _classPrivateFieldGet(this, _launch_data);
    }
    /**
     * Setter for #launch_data. Can only be called before  initialization.
     * @param {string} launch_data
     */
    ,
    set: function set(launch_data) {
      !this.initialized ? _classPrivateFieldSet(this, _launch_data, launch_data) : throwReadOnlyError();
    }
    /**
     * Getter for #comments
     * @return {string}
     */

  }, {
    key: "comments",
    get: function get() {
      return _classPrivateFieldGet(this, _comments);
    }
    /**
     * Setter for #comments
     * @param {string} comments
     */
    ,
    set: function set(comments) {
      if (check12ValidFormat(comments, scorm12_regex.CMIString4096)) {
        _classPrivateFieldSet(this, _comments, comments);
      }
    }
    /**
     * Getter for #comments_from_lms
     * @return {string}
     */

  }, {
    key: "comments_from_lms",
    get: function get() {
      return _classPrivateFieldGet(this, _comments_from_lms);
    }
    /**
     * Setter for #comments_from_lms. Can only be called before  initialization.
     * @param {string} comments_from_lms
     */
    ,
    set: function set(comments_from_lms) {
      !this.initialized ? _classPrivateFieldSet(this, _comments_from_lms, comments_from_lms) : throwReadOnlyError();
    }
  }]);

  return CMI;
}(_common.BaseCMI);
/**
 * Class representing the cmi.core object
 * @extends BaseCMI
 */


exports.CMI = CMI;

var _children2 = new WeakMap();

var _version2 = new WeakMap();

var _launch_data = new WeakMap();

var _comments = new WeakMap();

var _comments_from_lms = new WeakMap();

var CMICore = /*#__PURE__*/function (_BaseCMI2) {
  _inherits(CMICore, _BaseCMI2);

  var _super2 = _createSuper(CMICore);

  /**
   * Constructor for cmi.core
   */
  function CMICore() {
    var _this2;

    _classCallCheck(this, CMICore);

    _this2 = _super2.call(this);

    _children3.set(_assertThisInitialized(_this2), {
      writable: true,
      value: scorm12_constants.core_children
    });

    _student_id.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _student_name.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _lesson_location.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _credit.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _lesson_status.set(_assertThisInitialized(_this2), {
      writable: true,
      value: 'not attempted'
    });

    _entry.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _total_time.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _lesson_mode.set(_assertThisInitialized(_this2), {
      writable: true,
      value: 'normal'
    });

    _exit.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _session_time.set(_assertThisInitialized(_this2), {
      writable: true,
      value: '00:00:00'
    });

    _suspend_data.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _this2.score = new _common.CMIScore({
      score_children: scorm12_constants.score_children,
      score_range: scorm12_regex.score_range,
      invalidErrorCode: scorm12_error_codes.INVALID_SET_VALUE,
      invalidTypeCode: scorm12_error_codes.TYPE_MISMATCH,
      invalidRangeCode: scorm12_error_codes.VALUE_OUT_OF_RANGE
    });
    return _this2;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMICore, [{
    key: "initialize",
    value: function initialize() {
      var _this$score;

      _get(_getPrototypeOf(CMICore.prototype), "initialize", this).call(this);

      (_this$score = this.score) === null || _this$score === void 0 ? void 0 : _this$score.initialize();
    }
  }, {
    key: "getCurrentTotalTime",

    /**
     * Adds the current session time to the existing total time.
     *
     * @return {string}
     */
    value: function getCurrentTotalTime() {
      return Utilities.addHHMMSSTimeStrings(_classPrivateFieldGet(this, _total_time), _classPrivateFieldGet(this, _session_time), new RegExp(scorm12_regex.CMITimespan));
    }
    /**
     * toJSON for cmi.core
     *
     * @return {
     *    {
     *      student_name: string,
     *      entry: string,
     *      exit: string,
     *      score: CMIScore,
     *      student_id: string,
     *      lesson_mode: string,
     *      lesson_location: string,
     *      lesson_status: string,
     *      credit: string,
     *      session_time: *
     *    }
     *  }
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'student_id': this.student_id,
        'student_name': this.student_name,
        'lesson_location': this.lesson_location,
        'credit': this.credit,
        'lesson_status': this.lesson_status,
        'entry': this.entry,
        'lesson_mode': this.lesson_mode,
        'exit': this.exit,
        'session_time': this.session_time,
        'score': this.score
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",

    /**
     * Getter for #_children
     * @return {string}
     * @private
     */
    get: function get() {
      return _classPrivateFieldGet(this, _children3);
    }
    /**
     * Setter for #_children. Just throws an error.
     * @param {string} _children
     * @private
     */
    ,
    set: function set(_children) {
      throwInvalidValueError();
    }
    /**
     * Getter for #student_id
     * @return {string}
     */

  }, {
    key: "student_id",
    get: function get() {
      return _classPrivateFieldGet(this, _student_id);
    }
    /**
     * Setter for #student_id. Can only be called before  initialization.
     * @param {string} student_id
     */
    ,
    set: function set(student_id) {
      !this.initialized ? _classPrivateFieldSet(this, _student_id, student_id) : throwReadOnlyError();
    }
    /**
     * Getter for #student_name
     * @return {string}
     */

  }, {
    key: "student_name",
    get: function get() {
      return _classPrivateFieldGet(this, _student_name);
    }
    /**
     * Setter for #student_name. Can only be called before  initialization.
     * @param {string} student_name
     */
    ,
    set: function set(student_name) {
      !this.initialized ? _classPrivateFieldSet(this, _student_name, student_name) : throwReadOnlyError();
    }
    /**
     * Getter for #lesson_location
     * @return {string}
     */

  }, {
    key: "lesson_location",
    get: function get() {
      return _classPrivateFieldGet(this, _lesson_location);
    }
    /**
     * Setter for #lesson_location
     * @param {string} lesson_location
     */
    ,
    set: function set(lesson_location) {
      if (check12ValidFormat(lesson_location, scorm12_regex.CMIString256, true)) {
        _classPrivateFieldSet(this, _lesson_location, lesson_location);
      }
    }
    /**
     * Getter for #credit
     * @return {string}
     */

  }, {
    key: "credit",
    get: function get() {
      return _classPrivateFieldGet(this, _credit);
    }
    /**
     * Setter for #credit. Can only be called before  initialization.
     * @param {string} credit
     */
    ,
    set: function set(credit) {
      !this.initialized ? _classPrivateFieldSet(this, _credit, credit) : throwReadOnlyError();
    }
    /**
     * Getter for #lesson_status
     * @return {string}
     */

  }, {
    key: "lesson_status",
    get: function get() {
      return _classPrivateFieldGet(this, _lesson_status);
    }
    /**
     * Setter for #lesson_status
     * @param {string} lesson_status
     */
    ,
    set: function set(lesson_status) {
      if (check12ValidFormat(lesson_status, scorm12_regex.CMIStatus)) {
        _classPrivateFieldSet(this, _lesson_status, lesson_status);
      }
    }
    /**
     * Getter for #entry
     * @return {string}
     */

  }, {
    key: "entry",
    get: function get() {
      return _classPrivateFieldGet(this, _entry);
    }
    /**
     * Setter for #entry. Can only be called before  initialization.
     * @param {string} entry
     */
    ,
    set: function set(entry) {
      !this.initialized ? _classPrivateFieldSet(this, _entry, entry) : throwReadOnlyError();
    }
    /**
     * Getter for #total_time
     * @return {string}
     */

  }, {
    key: "total_time",
    get: function get() {
      return _classPrivateFieldGet(this, _total_time);
    }
    /**
     * Setter for #total_time. Can only be called before  initialization.
     * @param {string} total_time
     */
    ,
    set: function set(total_time) {
      !this.initialized ? _classPrivateFieldSet(this, _total_time, total_time) : throwReadOnlyError();
    }
    /**
     * Getter for #lesson_mode
     * @return {string}
     */

  }, {
    key: "lesson_mode",
    get: function get() {
      return _classPrivateFieldGet(this, _lesson_mode);
    }
    /**
     * Setter for #lesson_mode. Can only be called before  initialization.
     * @param {string} lesson_mode
     */
    ,
    set: function set(lesson_mode) {
      !this.initialized ? _classPrivateFieldSet(this, _lesson_mode, lesson_mode) : throwReadOnlyError();
    }
    /**
     * Getter for #exit. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "exit",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _exit);
    }
    /**
     * Setter for #exit
     * @param {string} exit
     */
    ,
    set: function set(exit) {
      if (check12ValidFormat(exit, scorm12_regex.CMIExit, true)) {
        _classPrivateFieldSet(this, _exit, exit);
      }
    }
    /**
     * Getter for #session_time. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "session_time",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _session_time);
    }
    /**
     * Setter for #session_time
     * @param {string} session_time
     */
    ,
    set: function set(session_time) {
      if (check12ValidFormat(session_time, scorm12_regex.CMITimespan)) {
        _classPrivateFieldSet(this, _session_time, session_time);
      }
    }
    /**
     * Getter for #suspend_data
     * @return {string}
     */

  }, {
    key: "suspend_data",
    get: function get() {
      return _classPrivateFieldGet(this, _suspend_data);
    }
    /**
     * Setter for #suspend_data
     * @param {string} suspend_data
     */
    ,
    set: function set(suspend_data) {
      if (check12ValidFormat(suspend_data, scorm12_regex.CMIString4096, true)) {
        _classPrivateFieldSet(this, _suspend_data, suspend_data);
      }
    }
  }]);

  return CMICore;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.objectives object
 * @extends CMIArray
 */


var _children3 = new WeakMap();

var _student_id = new WeakMap();

var _student_name = new WeakMap();

var _lesson_location = new WeakMap();

var _credit = new WeakMap();

var _lesson_status = new WeakMap();

var _entry = new WeakMap();

var _total_time = new WeakMap();

var _lesson_mode = new WeakMap();

var _exit = new WeakMap();

var _session_time = new WeakMap();

var _suspend_data = new WeakMap();

var CMIObjectives = /*#__PURE__*/function (_CMIArray) {
  _inherits(CMIObjectives, _CMIArray);

  var _super3 = _createSuper(CMIObjectives);

  /**
   * Constructor for cmi.objectives
   */
  function CMIObjectives() {
    _classCallCheck(this, CMIObjectives);

    return _super3.call(this, {
      children: scorm12_constants.objectives_children,
      errorCode: scorm12_error_codes.INVALID_SET_VALUE
    });
  }

  return CMIObjectives;
}(_common.CMIArray);
/**
 * Class representing SCORM 1.2's cmi.student_data object
 * @extends BaseCMI
 */


var CMIStudentData = /*#__PURE__*/function (_BaseCMI3) {
  _inherits(CMIStudentData, _BaseCMI3);

  var _super4 = _createSuper(CMIStudentData);

  /**
   * Constructor for cmi.student_data
   * @param {string} student_data_children
   */
  function CMIStudentData(student_data_children) {
    var _this3;

    _classCallCheck(this, CMIStudentData);

    _this3 = _super4.call(this);

    _children4.set(_assertThisInitialized(_this3), {
      writable: true,
      value: void 0
    });

    _mastery_score.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _max_time_allowed.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _time_limit_action.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _classPrivateFieldSet(_assertThisInitialized(_this3), _children4, student_data_children ? student_data_children : scorm12_constants.student_data_children);

    return _this3;
  }
  /**
   * Getter for #_children
   * @return {*}
   * @private
   */


  _createClass(CMIStudentData, [{
    key: "toJSON",

    /**
     * toJSON for cmi.student_data
     *
     * @return {
     *    {
     *      max_time_allowed: string,
     *      time_limit_action: string,
     *      mastery_score: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'mastery_score': this.mastery_score,
        'max_time_allowed': this.max_time_allowed,
        'time_limit_action': this.time_limit_action
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",
    get: function get() {
      return _classPrivateFieldGet(this, _children4);
    }
    /**
     * Setter for #_children. Just throws an error.
     * @param {string} _children
     * @private
     */
    ,
    set: function set(_children) {
      throwInvalidValueError();
    }
    /**
     * Getter for #master_score
     * @return {string}
     */

  }, {
    key: "mastery_score",
    get: function get() {
      return _classPrivateFieldGet(this, _mastery_score);
    }
    /**
     * Setter for #master_score. Can only be called before  initialization.
     * @param {string} mastery_score
     */
    ,
    set: function set(mastery_score) {
      !this.initialized ? _classPrivateFieldSet(this, _mastery_score, mastery_score) : throwReadOnlyError();
    }
    /**
     * Getter for #max_time_allowed
     * @return {string}
     */

  }, {
    key: "max_time_allowed",
    get: function get() {
      return _classPrivateFieldGet(this, _max_time_allowed);
    }
    /**
     * Setter for #max_time_allowed. Can only be called before  initialization.
     * @param {string} max_time_allowed
     */
    ,
    set: function set(max_time_allowed) {
      !this.initialized ? _classPrivateFieldSet(this, _max_time_allowed, max_time_allowed) : throwReadOnlyError();
    }
    /**
     * Getter for #time_limit_action
     * @return {string}
     */

  }, {
    key: "time_limit_action",
    get: function get() {
      return _classPrivateFieldGet(this, _time_limit_action);
    }
    /**
     * Setter for #time_limit_action. Can only be called before  initialization.
     * @param {string} time_limit_action
     */
    ,
    set: function set(time_limit_action) {
      !this.initialized ? _classPrivateFieldSet(this, _time_limit_action, time_limit_action) : throwReadOnlyError();
    }
  }]);

  return CMIStudentData;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.student_preference object
 * @extends BaseCMI
 */


exports.CMIStudentData = CMIStudentData;

var _children4 = new WeakMap();

var _mastery_score = new WeakMap();

var _max_time_allowed = new WeakMap();

var _time_limit_action = new WeakMap();

var CMIStudentPreference = /*#__PURE__*/function (_BaseCMI4) {
  _inherits(CMIStudentPreference, _BaseCMI4);

  var _super5 = _createSuper(CMIStudentPreference);

  /**
   * Constructor for cmi.student_preference
   * @param {string} student_preference_children
   */
  function CMIStudentPreference(student_preference_children) {
    var _this4;

    _classCallCheck(this, CMIStudentPreference);

    _this4 = _super5.call(this);

    _children5.set(_assertThisInitialized(_this4), {
      writable: true,
      value: void 0
    });

    _audio.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _language.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _speed.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _text.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _classPrivateFieldSet(_assertThisInitialized(_this4), _children5, student_preference_children ? student_preference_children : scorm12_constants.student_preference_children);

    return _this4;
  }

  _createClass(CMIStudentPreference, [{
    key: "toJSON",

    /**
     * toJSON for cmi.student_preference
     *
     * @return {
     *    {
     *      audio: string,
     *      language: string,
     *      speed: string,
     *      text: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'audio': this.audio,
        'language': this.language,
        'speed': this.speed,
        'text': this.text
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",

    /**
     * Getter for #_children
     * @return {string}
     * @private
     */
    get: function get() {
      return _classPrivateFieldGet(this, _children5);
    }
    /**
     * Setter for #_children. Just throws an error.
     * @param {string} _children
     * @private
     */
    ,
    set: function set(_children) {
      throwInvalidValueError();
    }
    /**
     * Getter for #audio
     * @return {string}
     */

  }, {
    key: "audio",
    get: function get() {
      return _classPrivateFieldGet(this, _audio);
    }
    /**
     * Setter for #audio
     * @param {string} audio
     */
    ,
    set: function set(audio) {
      if (check12ValidFormat(audio, scorm12_regex.CMISInteger) && check12ValidRange(audio, scorm12_regex.audio_range)) {
        _classPrivateFieldSet(this, _audio, audio);
      }
    }
    /**
     * Getter for #language
     * @return {string}
     */

  }, {
    key: "language",
    get: function get() {
      return _classPrivateFieldGet(this, _language);
    }
    /**
     * Setter for #language
     * @param {string} language
     */
    ,
    set: function set(language) {
      if (check12ValidFormat(language, scorm12_regex.CMIString256)) {
        _classPrivateFieldSet(this, _language, language);
      }
    }
    /**
     * Getter for #speed
     * @return {string}
     */

  }, {
    key: "speed",
    get: function get() {
      return _classPrivateFieldGet(this, _speed);
    }
    /**
     * Setter for #speed
     * @param {string} speed
     */
    ,
    set: function set(speed) {
      if (check12ValidFormat(speed, scorm12_regex.CMISInteger) && check12ValidRange(speed, scorm12_regex.speed_range)) {
        _classPrivateFieldSet(this, _speed, speed);
      }
    }
    /**
     * Getter for #text
     * @return {string}
     */

  }, {
    key: "text",
    get: function get() {
      return _classPrivateFieldGet(this, _text);
    }
    /**
     * Setter for #text
     * @param {string} text
     */
    ,
    set: function set(text) {
      if (check12ValidFormat(text, scorm12_regex.CMISInteger) && check12ValidRange(text, scorm12_regex.text_range)) {
        _classPrivateFieldSet(this, _text, text);
      }
    }
  }]);

  return CMIStudentPreference;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.interactions object
 * @extends BaseCMI
 */


exports.CMIStudentPreference = CMIStudentPreference;

var _children5 = new WeakMap();

var _audio = new WeakMap();

var _language = new WeakMap();

var _speed = new WeakMap();

var _text = new WeakMap();

var CMIInteractions = /*#__PURE__*/function (_CMIArray2) {
  _inherits(CMIInteractions, _CMIArray2);

  var _super6 = _createSuper(CMIInteractions);

  /**
   * Constructor for cmi.interactions
   */
  function CMIInteractions() {
    _classCallCheck(this, CMIInteractions);

    return _super6.call(this, {
      children: scorm12_constants.interactions_children,
      errorCode: scorm12_error_codes.INVALID_SET_VALUE
    });
  }

  return CMIInteractions;
}(_common.CMIArray);
/**
 * Class representing SCORM 1.2's cmi.interactions.n object
 * @extends BaseCMI
 */


var CMIInteractionsObject = /*#__PURE__*/function (_BaseCMI5) {
  _inherits(CMIInteractionsObject, _BaseCMI5);

  var _super7 = _createSuper(CMIInteractionsObject);

  /**
   * Constructor for cmi.interactions.n object
   */
  function CMIInteractionsObject() {
    var _this5;

    _classCallCheck(this, CMIInteractionsObject);

    _this5 = _super7.call(this);

    _id.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _time.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _type.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _weighting.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _student_response.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _result.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _latency.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    _this5.objectives = new _common.CMIArray({
      errorCode: scorm12_error_codes.INVALID_SET_VALUE,
      children: scorm12_constants.objectives_children
    });
    _this5.correct_responses = new _common.CMIArray({
      errorCode: scorm12_error_codes.INVALID_SET_VALUE,
      children: scorm12_constants.correct_responses_children
    });
    return _this5;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMIInteractionsObject, [{
    key: "initialize",
    value: function initialize() {
      var _this$objectives2, _this$correct_respons;

      _get(_getPrototypeOf(CMIInteractionsObject.prototype), "initialize", this).call(this);

      (_this$objectives2 = this.objectives) === null || _this$objectives2 === void 0 ? void 0 : _this$objectives2.initialize();
      (_this$correct_respons = this.correct_responses) === null || _this$correct_respons === void 0 ? void 0 : _this$correct_respons.initialize();
    }
  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.interactions.n
     *
     * @return {
     *    {
     *      id: string,
     *      time: string,
     *      type: string,
     *      weighting: string,
     *      student_response: string,
     *      result: string,
     *      latency: string,
     *      objectives: CMIArray,
     *      correct_responses: CMIArray
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id,
        'time': this.time,
        'type': this.type,
        'weighting': this.weighting,
        'student_response': this.student_response,
        'result': this.result,
        'latency': this.latency,
        'objectives': this.objectives,
        'correct_responses': this.correct_responses
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",

    /**
     * Getter for #id. Should only be called during JSON export.
     * @return {*}
     */
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _id);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check12ValidFormat(id, scorm12_regex.CMIIdentifier)) {
        _classPrivateFieldSet(this, _id, id);
      }
    }
    /**
     * Getter for #time. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "time",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _time);
    }
    /**
     * Setter for #time
     * @param {string} time
     */
    ,
    set: function set(time) {
      if (check12ValidFormat(time, scorm12_regex.CMITime)) {
        _classPrivateFieldSet(this, _time, time);
      }
    }
    /**
     * Getter for #type. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "type",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _type);
    }
    /**
     * Setter for #type
     * @param {string} type
     */
    ,
    set: function set(type) {
      if (check12ValidFormat(type, scorm12_regex.CMIType)) {
        _classPrivateFieldSet(this, _type, type);
      }
    }
    /**
     * Getter for #weighting. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "weighting",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _weighting);
    }
    /**
     * Setter for #weighting
     * @param {string} weighting
     */
    ,
    set: function set(weighting) {
      if (check12ValidFormat(weighting, scorm12_regex.CMIDecimal) && check12ValidRange(weighting, scorm12_regex.weighting_range)) {
        _classPrivateFieldSet(this, _weighting, weighting);
      }
    }
    /**
     * Getter for #student_response. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "student_response",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _student_response);
    }
    /**
     * Setter for #student_response
     * @param {string} student_response
     */
    ,
    set: function set(student_response) {
      if (check12ValidFormat(student_response, scorm12_regex.CMIFeedback, true)) {
        _classPrivateFieldSet(this, _student_response, student_response);
      }
    }
    /**
     * Getter for #result. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "result",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _result);
    }
    /**
     * Setter for #result
     * @param {string} result
     */
    ,
    set: function set(result) {
      if (check12ValidFormat(result, scorm12_regex.CMIResult)) {
        _classPrivateFieldSet(this, _result, result);
      }
    }
    /**
     * Getter for #latency. Should only be called during JSON export.
     * @return {*}
     */

  }, {
    key: "latency",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _latency);
    }
    /**
     * Setter for #latency
     * @param {string} latency
     */
    ,
    set: function set(latency) {
      if (check12ValidFormat(latency, scorm12_regex.CMITimespan)) {
        _classPrivateFieldSet(this, _latency, latency);
      }
    }
  }]);

  return CMIInteractionsObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.objectives.n object
 * @extends BaseCMI
 */


exports.CMIInteractionsObject = CMIInteractionsObject;

var _id = new WeakMap();

var _time = new WeakMap();

var _type = new WeakMap();

var _weighting = new WeakMap();

var _student_response = new WeakMap();

var _result = new WeakMap();

var _latency = new WeakMap();

var CMIObjectivesObject = /*#__PURE__*/function (_BaseCMI6) {
  _inherits(CMIObjectivesObject, _BaseCMI6);

  var _super8 = _createSuper(CMIObjectivesObject);

  /**
   * Constructor for cmi.objectives.n
   */
  function CMIObjectivesObject() {
    var _this6;

    _classCallCheck(this, CMIObjectivesObject);

    _this6 = _super8.call(this);

    _id2.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _status.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _this6.score = new _common.CMIScore({
      score_children: scorm12_constants.score_children,
      score_range: scorm12_regex.score_range,
      invalidErrorCode: scorm12_error_codes.INVALID_SET_VALUE,
      invalidTypeCode: scorm12_error_codes.TYPE_MISMATCH,
      invalidRangeCode: scorm12_error_codes.VALUE_OUT_OF_RANGE
    });
    return _this6;
  }

  _createClass(CMIObjectivesObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.objectives.n
     * @return {
     *    {
     *      id: string,
     *      status: string,
     *      score: CMIScore
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id,
        'status': this.status,
        'score': this.score
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",

    /**
     * Getter for #id
     * @return {""}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _id2);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check12ValidFormat(id, scorm12_regex.CMIIdentifier)) {
        _classPrivateFieldSet(this, _id2, id);
      }
    }
    /**
     * Getter for #status
     * @return {""}
     */

  }, {
    key: "status",
    get: function get() {
      return _classPrivateFieldGet(this, _status);
    }
    /**
     * Setter for #status
     * @param {string} status
     */
    ,
    set: function set(status) {
      if (check12ValidFormat(status, scorm12_regex.CMIStatus2)) {
        _classPrivateFieldSet(this, _status, status);
      }
    }
  }]);

  return CMIObjectivesObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.interactions.n.objectives.n object
 * @extends BaseCMI
 */


exports.CMIObjectivesObject = CMIObjectivesObject;

var _id2 = new WeakMap();

var _status = new WeakMap();

var CMIInteractionsObjectivesObject = /*#__PURE__*/function (_BaseCMI7) {
  _inherits(CMIInteractionsObjectivesObject, _BaseCMI7);

  var _super9 = _createSuper(CMIInteractionsObjectivesObject);

  /**
   * Constructor for cmi.interactions.n.objectives.n
   */
  function CMIInteractionsObjectivesObject() {
    var _this7;

    _classCallCheck(this, CMIInteractionsObjectivesObject);

    _this7 = _super9.call(this);

    _id3.set(_assertThisInitialized(_this7), {
      writable: true,
      value: ''
    });

    return _this7;
  }

  _createClass(CMIInteractionsObjectivesObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.interactions.n.objectives.n
     * @return {
     *    {
     *      id: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",

    /**
     * Getter for #id
     * @return {""}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _id3);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check12ValidFormat(id, scorm12_regex.CMIIdentifier)) {
        _classPrivateFieldSet(this, _id3, id);
      }
    }
  }]);

  return CMIInteractionsObjectivesObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 1.2's cmi.interactions.correct_responses.n object
 * @extends BaseCMI
 */


exports.CMIInteractionsObjectivesObject = CMIInteractionsObjectivesObject;

var _id3 = new WeakMap();

var CMIInteractionsCorrectResponsesObject = /*#__PURE__*/function (_BaseCMI8) {
  _inherits(CMIInteractionsCorrectResponsesObject, _BaseCMI8);

  var _super10 = _createSuper(CMIInteractionsCorrectResponsesObject);

  /**
   * Constructor for cmi.interactions.correct_responses.n
   */
  function CMIInteractionsCorrectResponsesObject() {
    var _this8;

    _classCallCheck(this, CMIInteractionsCorrectResponsesObject);

    _this8 = _super10.call(this);

    _pattern.set(_assertThisInitialized(_this8), {
      writable: true,
      value: ''
    });

    return _this8;
  }

  _createClass(CMIInteractionsCorrectResponsesObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.interactions.correct_responses.n
     * @return {
     *    {
     *      pattern: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'pattern': this.pattern
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "pattern",

    /**
     * Getter for #pattern
     * @return {string}
     */
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _pattern);
    }
    /**
     * Setter for #pattern
     * @param {string} pattern
     */
    ,
    set: function set(pattern) {
      if (check12ValidFormat(pattern, scorm12_regex.CMIFeedback, true)) {
        _classPrivateFieldSet(this, _pattern, pattern);
      }
    }
  }]);

  return CMIInteractionsCorrectResponsesObject;
}(_common.BaseCMI);
/**
 * Class for AICC Navigation object
 */


exports.CMIInteractionsCorrectResponsesObject = CMIInteractionsCorrectResponsesObject;

var _pattern = new WeakMap();

var NAV = /*#__PURE__*/function (_BaseCMI9) {
  _inherits(NAV, _BaseCMI9);

  var _super11 = _createSuper(NAV);

  /**
   * Constructor for NAV object
   */
  function NAV() {
    var _this9;

    _classCallCheck(this, NAV);

    _this9 = _super11.call(this);

    _event.set(_assertThisInitialized(_this9), {
      writable: true,
      value: ''
    });

    return _this9;
  }

  _createClass(NAV, [{
    key: "toJSON",

    /**
     * toJSON for nav object
     * @return {
     *    {
     *      event: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'event': this.event
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "event",

    /**
     * Getter for #event
     * @return {string}
     */
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _event);
    }
    /**
     * Setter for #event
     * @param {string} event
     */
    ,
    set: function set(event) {
      if (check12ValidFormat(event, scorm12_regex.NAVEvent)) {
        _classPrivateFieldSet(this, _event, event);
      }
    }
  }]);

  return NAV;
}(_common.BaseCMI);

exports.NAV = NAV;

var _event = new WeakMap();

},{"../constants/api_constants":9,"../constants/error_codes":10,"../constants/regex":12,"../exceptions":14,"../utilities":16,"./common":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADL = exports.CMIInteractionsCorrectResponsesObject = exports.CMIInteractionsObjectivesObject = exports.CMICommentsObject = exports.CMIObjectivesObject = exports.CMIInteractionsObject = exports.CMI = void 0;

var _common = require("./common");

var _api_constants = _interopRequireDefault(require("../constants/api_constants"));

var _regex = _interopRequireDefault(require("../constants/regex"));

var _error_codes = _interopRequireDefault(require("../constants/error_codes"));

var _response_constants = _interopRequireDefault(require("../constants/response_constants"));

var _exceptions = require("../exceptions");

var Util = _interopRequireWildcard(require("../utilities"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var scorm2004_constants = _api_constants["default"].scorm2004;
var scorm2004_error_codes = _error_codes["default"].scorm2004;
var learner_responses = _response_constants["default"].learner;
var scorm2004_regex = _regex["default"].scorm2004;
/**
 * Helper method for throwing Read Only error
 */

function throwReadOnlyError() {
  throw new _exceptions.ValidationError(scorm2004_error_codes.READ_ONLY_ELEMENT);
}
/**
 * Helper method for throwing Write Only error
 */


function throwWriteOnlyError() {
  throw new _exceptions.ValidationError(scorm2004_error_codes.WRITE_ONLY_ELEMENT);
}
/**
 * Helper method for throwing Type Mismatch error
 */


function throwTypeMismatchError() {
  throw new _exceptions.ValidationError(scorm2004_error_codes.TYPE_MISMATCH);
}
/**
 * Helper method, no reason to have to pass the same error codes every time
 * @param {*} value
 * @param {string} regexPattern
 * @param {boolean} allowEmptyString
 * @return {boolean}
 */


function check2004ValidFormat(value, regexPattern, allowEmptyString) {
  return (0, _common.checkValidFormat)(value, regexPattern, scorm2004_error_codes.TYPE_MISMATCH, allowEmptyString);
}
/**
 * Helper method, no reason to have to pass the same error codes every time
 * @param {*} value
 * @param {string} rangePattern
 * @return {boolean}
 */


function check2004ValidRange(value, rangePattern) {
  return (0, _common.checkValidRange)(value, rangePattern, scorm2004_error_codes.VALUE_OUT_OF_RANGE);
}
/**
 * Class representing cmi object for SCORM 2004
 */


var CMI = /*#__PURE__*/function (_BaseCMI) {
  _inherits(CMI, _BaseCMI);

  var _super = _createSuper(CMI);

  /**
   * Constructor for the SCORM 2004 cmi object
   * @param {boolean} initialized
   */
  function CMI(initialized) {
    var _this;

    _classCallCheck(this, CMI);

    _this = _super.call(this);

    _version2.set(_assertThisInitialized(_this), {
      writable: true,
      value: '1.0'
    });

    _children2.set(_assertThisInitialized(_this), {
      writable: true,
      value: scorm2004_constants.cmi_children
    });

    _completion_status.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'unknown'
    });

    _completion_threshold.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _credit.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'credit'
    });

    _entry.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _exit.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _launch_data.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _learner_id.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _learner_name.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _location.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _max_time_allowed.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _mode.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'normal'
    });

    _progress_measure.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _scaled_passing_score.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _session_time.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'PT0H0M0S'
    });

    _success_status.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'unknown'
    });

    _suspend_data.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _time_limit_action.set(_assertThisInitialized(_this), {
      writable: true,
      value: 'continue,no message'
    });

    _total_time.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _this.learner_preference = new CMILearnerPreference();
    _this.score = new Scorm2004CMIScore();
    _this.comments_from_learner = new CMICommentsFromLearner();
    _this.comments_from_lms = new CMICommentsFromLMS();
    _this.interactions = new CMIInteractions();
    _this.objectives = new CMIObjectives();
    if (initialized) _this.initialize();
    return _this;
  }

  _createClass(CMI, [{
    key: "initialize",

    /**
     * Called when the API has been initialized after the CMI has been created
     */
    value: function initialize() {
      var _this$learner_prefere, _this$score, _this$comments_from_l, _this$comments_from_l2, _this$interactions, _this$objectives;

      _get(_getPrototypeOf(CMI.prototype), "initialize", this).call(this);

      (_this$learner_prefere = this.learner_preference) === null || _this$learner_prefere === void 0 ? void 0 : _this$learner_prefere.initialize();
      (_this$score = this.score) === null || _this$score === void 0 ? void 0 : _this$score.initialize();
      (_this$comments_from_l = this.comments_from_learner) === null || _this$comments_from_l === void 0 ? void 0 : _this$comments_from_l.initialize();
      (_this$comments_from_l2 = this.comments_from_lms) === null || _this$comments_from_l2 === void 0 ? void 0 : _this$comments_from_l2.initialize();
      (_this$interactions = this.interactions) === null || _this$interactions === void 0 ? void 0 : _this$interactions.initialize();
      (_this$objectives = this.objectives) === null || _this$objectives === void 0 ? void 0 : _this$objectives.initialize();
    }
    /**
     * Getter for #_version
     * @return {string}
     * @private
     */

  }, {
    key: "getCurrentTotalTime",

    /**
     * Adds the current session time to the existing total time.
     *
     * @return {string} ISO8601 Duration
     */
    value: function getCurrentTotalTime() {
      return Util.addTwoDurations(_classPrivateFieldGet(this, _total_time), _classPrivateFieldGet(this, _session_time), scorm2004_regex.CMITimespan);
    }
    /**
     * toJSON for cmi
     *
     * @return {
     *    {
     *      comments_from_learner: CMICommentsFromLearner,
     *      comments_from_lms: CMICommentsFromLMS,
     *      completion_status: string,
     *      completion_threshold: string,
     *      credit: string,
     *      entry: string,
     *      exit: string,
     *      interactions: CMIInteractions,
     *      launch_data: string,
     *      learner_id: string,
     *      learner_name: string,
     *      learner_preference: CMILearnerPreference,
     *      location: string,
     *      max_time_allowed: string,
     *      mode: string,
     *      objectives: CMIObjectives,
     *      progress_measure: string,
     *      scaled_passing_score: string,
     *      score: Scorm2004CMIScore,
     *      session_time: string,
     *      success_status: string,
     *      suspend_data: string,
     *      time_limit_action: string
     *    }
     *  }
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'comments_from_learner': this.comments_from_learner,
        'comments_from_lms': this.comments_from_lms,
        'completion_status': this.completion_status,
        'completion_threshold': this.completion_threshold,
        'credit': this.credit,
        'entry': this.entry,
        'exit': this.exit,
        'interactions': this.interactions,
        'launch_data': this.launch_data,
        'learner_id': this.learner_id,
        'learner_name': this.learner_name,
        'learner_preference': this.learner_preference,
        'location': this.location,
        'max_time_allowed': this.max_time_allowed,
        'mode': this.mode,
        'objectives': this.objectives,
        'progress_measure': this.progress_measure,
        'scaled_passing_score': this.scaled_passing_score,
        'score': this.score,
        'session_time': this.session_time,
        'success_status': this.success_status,
        'suspend_data': this.suspend_data,
        'time_limit_action': this.time_limit_action
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_version",
    get: function get() {
      return _classPrivateFieldGet(this, _version2);
    }
    /**
     * Setter for #_version. Just throws an error.
     * @param {string} _version
     * @private
     */
    ,
    set: function set(_version) {
      throwReadOnlyError();
    }
    /**
     * Getter for #_children
     * @return {string}
     * @private
     */

  }, {
    key: "_children",
    get: function get() {
      return _classPrivateFieldGet(this, _children2);
    }
    /**
     * Setter for #_children. Just throws an error.
     * @param {number} _children
     * @private
     */
    ,
    set: function set(_children) {
      throwReadOnlyError();
    }
    /**
     * Getter for #completion_status
     * @return {string}
     */

  }, {
    key: "completion_status",
    get: function get() {
      return _classPrivateFieldGet(this, _completion_status);
    }
    /**
     * Setter for #completion_status
     * @param {string} completion_status
     */
    ,
    set: function set(completion_status) {
      if (check2004ValidFormat(completion_status, scorm2004_regex.CMICStatus)) {
        _classPrivateFieldSet(this, _completion_status, completion_status);
      }
    }
    /**
     * Getter for #completion_threshold
     * @return {string}
     */

  }, {
    key: "completion_threshold",
    get: function get() {
      return _classPrivateFieldGet(this, _completion_threshold);
    }
    /**
     * Setter for #completion_threshold. Can only be called before  initialization.
     * @param {string} completion_threshold
     */
    ,
    set: function set(completion_threshold) {
      !this.initialized ? _classPrivateFieldSet(this, _completion_threshold, completion_threshold) : throwReadOnlyError();
    }
    /**
     * Setter for #credit
     * @return {string}
     */

  }, {
    key: "credit",
    get: function get() {
      return _classPrivateFieldGet(this, _credit);
    }
    /**
     * Setter for #credit. Can only be called before  initialization.
     * @param {string} credit
     */
    ,
    set: function set(credit) {
      !this.initialized ? _classPrivateFieldSet(this, _credit, credit) : throwReadOnlyError();
    }
    /**
     * Getter for #entry
     * @return {string}
     */

  }, {
    key: "entry",
    get: function get() {
      return _classPrivateFieldGet(this, _entry);
    }
    /**
     * Setter for #entry. Can only be called before  initialization.
     * @param {string} entry
     */
    ,
    set: function set(entry) {
      !this.initialized ? _classPrivateFieldSet(this, _entry, entry) : throwReadOnlyError();
    }
    /**
     * Getter for #exit. Should only be called during JSON export.
     * @return {string}
     */

  }, {
    key: "exit",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _exit);
    }
    /**
     * Getter for #exit
     * @param {string} exit
     */
    ,
    set: function set(exit) {
      if (check2004ValidFormat(exit, scorm2004_regex.CMIExit, true)) {
        _classPrivateFieldSet(this, _exit, exit);
      }
    }
    /**
     * Getter for #launch_data
     * @return {string}
     */

  }, {
    key: "launch_data",
    get: function get() {
      return _classPrivateFieldGet(this, _launch_data);
    }
    /**
     * Setter for #launch_data. Can only be called before  initialization.
     * @param {string} launch_data
     */
    ,
    set: function set(launch_data) {
      !this.initialized ? _classPrivateFieldSet(this, _launch_data, launch_data) : throwReadOnlyError();
    }
    /**
     * Getter for #learner_id
     * @return {string}
     */

  }, {
    key: "learner_id",
    get: function get() {
      return _classPrivateFieldGet(this, _learner_id);
    }
    /**
     * Setter for #learner_id. Can only be called before  initialization.
     * @param {string} learner_id
     */
    ,
    set: function set(learner_id) {
      !this.initialized ? _classPrivateFieldSet(this, _learner_id, learner_id) : throwReadOnlyError();
    }
    /**
     * Getter for #learner_name
     * @return {string}
     */

  }, {
    key: "learner_name",
    get: function get() {
      return _classPrivateFieldGet(this, _learner_name);
    }
    /**
     * Setter for #learner_name. Can only be called before  initialization.
     * @param {string} learner_name
     */
    ,
    set: function set(learner_name) {
      !this.initialized ? _classPrivateFieldSet(this, _learner_name, learner_name) : throwReadOnlyError();
    }
    /**
     * Getter for #location
     * @return {string}
     */

  }, {
    key: "location",
    get: function get() {
      return _classPrivateFieldGet(this, _location);
    }
    /**
     * Setter for #location
     * @param {string} location
     */
    ,
    set: function set(location) {
      if (check2004ValidFormat(location, scorm2004_regex.CMIString1000)) {
        _classPrivateFieldSet(this, _location, location);
      }
    }
    /**
     * Getter for #max_time_allowed
     * @return {string}
     */

  }, {
    key: "max_time_allowed",
    get: function get() {
      return _classPrivateFieldGet(this, _max_time_allowed);
    }
    /**
     * Setter for #max_time_allowed. Can only be called before  initialization.
     * @param {string} max_time_allowed
     */
    ,
    set: function set(max_time_allowed) {
      !this.initialized ? _classPrivateFieldSet(this, _max_time_allowed, max_time_allowed) : throwReadOnlyError();
    }
    /**
     * Getter for #mode
     * @return {string}
     */

  }, {
    key: "mode",
    get: function get() {
      return _classPrivateFieldGet(this, _mode);
    }
    /**
     * Setter for #mode. Can only be called before  initialization.
     * @param {string} mode
     */
    ,
    set: function set(mode) {
      !this.initialized ? _classPrivateFieldSet(this, _mode, mode) : throwReadOnlyError();
    }
    /**
     * Getter for #progress_measure
     * @return {string}
     */

  }, {
    key: "progress_measure",
    get: function get() {
      return _classPrivateFieldGet(this, _progress_measure);
    }
    /**
     * Setter for #progress_measure
     * @param {string} progress_measure
     */
    ,
    set: function set(progress_measure) {
      if (check2004ValidFormat(progress_measure, scorm2004_regex.CMIDecimal) && check2004ValidRange(progress_measure, scorm2004_regex.progress_range)) {
        _classPrivateFieldSet(this, _progress_measure, progress_measure);
      }
    }
    /**
     * Getter for #scaled_passing_score
     * @return {string}
     */

  }, {
    key: "scaled_passing_score",
    get: function get() {
      return _classPrivateFieldGet(this, _scaled_passing_score);
    }
    /**
     * Setter for #scaled_passing_score. Can only be called before  initialization.
     * @param {string} scaled_passing_score
     */
    ,
    set: function set(scaled_passing_score) {
      !this.initialized ? _classPrivateFieldSet(this, _scaled_passing_score, scaled_passing_score) : throwReadOnlyError();
    }
    /**
     * Getter for #session_time. Should only be called during JSON export.
     * @return {string}
     */

  }, {
    key: "session_time",
    get: function get() {
      return !this.jsonString ? throwWriteOnlyError() : _classPrivateFieldGet(this, _session_time);
    }
    /**
     * Setter for #session_time
     * @param {string} session_time
     */
    ,
    set: function set(session_time) {
      if (check2004ValidFormat(session_time, scorm2004_regex.CMITimespan)) {
        _classPrivateFieldSet(this, _session_time, session_time);
      }
    }
    /**
     * Getter for #success_status
     * @return {string}
     */

  }, {
    key: "success_status",
    get: function get() {
      return _classPrivateFieldGet(this, _success_status);
    }
    /**
     * Setter for #success_status
     * @param {string} success_status
     */
    ,
    set: function set(success_status) {
      if (check2004ValidFormat(success_status, scorm2004_regex.CMISStatus)) {
        _classPrivateFieldSet(this, _success_status, success_status);
      }
    }
    /**
     * Getter for #suspend_data
     * @return {string}
     */

  }, {
    key: "suspend_data",
    get: function get() {
      return _classPrivateFieldGet(this, _suspend_data);
    }
    /**
     * Setter for #suspend_data
     * @param {string} suspend_data
     */
    ,
    set: function set(suspend_data) {
      if (check2004ValidFormat(suspend_data, scorm2004_regex.CMIString64000, true)) {
        _classPrivateFieldSet(this, _suspend_data, suspend_data);
      }
    }
    /**
     * Getter for #time_limit_action
     * @return {string}
     */

  }, {
    key: "time_limit_action",
    get: function get() {
      return _classPrivateFieldGet(this, _time_limit_action);
    }
    /**
     * Setter for #time_limit_action. Can only be called before  initialization.
     * @param {string} time_limit_action
     */
    ,
    set: function set(time_limit_action) {
      !this.initialized ? _classPrivateFieldSet(this, _time_limit_action, time_limit_action) : throwReadOnlyError();
    }
    /**
     * Getter for #total_time
     * @return {string}
     */

  }, {
    key: "total_time",
    get: function get() {
      return _classPrivateFieldGet(this, _total_time);
    }
    /**
     * Setter for #total_time. Can only be called before  initialization.
     * @param {string} total_time
     */
    ,
    set: function set(total_time) {
      !this.initialized ? _classPrivateFieldSet(this, _total_time, total_time) : throwReadOnlyError();
    }
  }]);

  return CMI;
}(_common.BaseCMI);
/**
 * Class for SCORM 2004's cmi.learner_preference object
 */


exports.CMI = CMI;

var _version2 = new WeakMap();

var _children2 = new WeakMap();

var _completion_status = new WeakMap();

var _completion_threshold = new WeakMap();

var _credit = new WeakMap();

var _entry = new WeakMap();

var _exit = new WeakMap();

var _launch_data = new WeakMap();

var _learner_id = new WeakMap();

var _learner_name = new WeakMap();

var _location = new WeakMap();

var _max_time_allowed = new WeakMap();

var _mode = new WeakMap();

var _progress_measure = new WeakMap();

var _scaled_passing_score = new WeakMap();

var _session_time = new WeakMap();

var _success_status = new WeakMap();

var _suspend_data = new WeakMap();

var _time_limit_action = new WeakMap();

var _total_time = new WeakMap();

var CMILearnerPreference = /*#__PURE__*/function (_BaseCMI2) {
  _inherits(CMILearnerPreference, _BaseCMI2);

  var _super2 = _createSuper(CMILearnerPreference);

  /**
   * Constructor for cmi.learner_preference
   */
  function CMILearnerPreference() {
    var _this2;

    _classCallCheck(this, CMILearnerPreference);

    _this2 = _super2.call(this);

    _children3.set(_assertThisInitialized(_this2), {
      writable: true,
      value: scorm2004_constants.student_preference_children
    });

    _audio_level.set(_assertThisInitialized(_this2), {
      writable: true,
      value: '1'
    });

    _language.set(_assertThisInitialized(_this2), {
      writable: true,
      value: ''
    });

    _delivery_speed.set(_assertThisInitialized(_this2), {
      writable: true,
      value: '1'
    });

    _audio_captioning.set(_assertThisInitialized(_this2), {
      writable: true,
      value: '0'
    });

    return _this2;
  }
  /**
   * Getter for #_children
   * @return {string}
   * @private
   */


  _createClass(CMILearnerPreference, [{
    key: "toJSON",

    /**
     * toJSON for cmi.learner_preference
     *
     * @return {
     *    {
     *      audio_level: string,
     *      language: string,
     *      delivery_speed: string,
     *      audio_captioning: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'audio_level': this.audio_level,
        'language': this.language,
        'delivery_speed': this.delivery_speed,
        'audio_captioning': this.audio_captioning
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "_children",
    get: function get() {
      return _classPrivateFieldGet(this, _children3);
    }
    /**
     * Setter for #_children. Just throws an error.
     * @param {string} _children
     * @private
     */
    ,
    set: function set(_children) {
      throwReadOnlyError();
    }
    /**
     * Getter for #audio_level
     * @return {string}
     */

  }, {
    key: "audio_level",
    get: function get() {
      return _classPrivateFieldGet(this, _audio_level);
    }
    /**
     * Setter for #audio_level
     * @param {string} audio_level
     */
    ,
    set: function set(audio_level) {
      if (check2004ValidFormat(audio_level, scorm2004_regex.CMIDecimal) && check2004ValidRange(audio_level, scorm2004_regex.audio_range)) {
        _classPrivateFieldSet(this, _audio_level, audio_level);
      }
    }
    /**
     * Getter for #language
     * @return {string}
     */

  }, {
    key: "language",
    get: function get() {
      return _classPrivateFieldGet(this, _language);
    }
    /**
     * Setter for #language
     * @param {string} language
     */
    ,
    set: function set(language) {
      if (check2004ValidFormat(language, scorm2004_regex.CMILang)) {
        _classPrivateFieldSet(this, _language, language);
      }
    }
    /**
     * Getter for #delivery_speed
     * @return {string}
     */

  }, {
    key: "delivery_speed",
    get: function get() {
      return _classPrivateFieldGet(this, _delivery_speed);
    }
    /**
     * Setter for #delivery_speed
     * @param {string} delivery_speed
     */
    ,
    set: function set(delivery_speed) {
      if (check2004ValidFormat(delivery_speed, scorm2004_regex.CMIDecimal) && check2004ValidRange(delivery_speed, scorm2004_regex.speed_range)) {
        _classPrivateFieldSet(this, _delivery_speed, delivery_speed);
      }
    }
    /**
     * Getter for #audio_captioning
     * @return {string}
     */

  }, {
    key: "audio_captioning",
    get: function get() {
      return _classPrivateFieldGet(this, _audio_captioning);
    }
    /**
     * Setter for #audio_captioning
     * @param {string} audio_captioning
     */
    ,
    set: function set(audio_captioning) {
      if (check2004ValidFormat(audio_captioning, scorm2004_regex.CMISInteger) && check2004ValidRange(audio_captioning, scorm2004_regex.text_range)) {
        _classPrivateFieldSet(this, _audio_captioning, audio_captioning);
      }
    }
  }]);

  return CMILearnerPreference;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's cmi.interactions object
 */


var _children3 = new WeakMap();

var _audio_level = new WeakMap();

var _language = new WeakMap();

var _delivery_speed = new WeakMap();

var _audio_captioning = new WeakMap();

var CMIInteractions = /*#__PURE__*/function (_CMIArray) {
  _inherits(CMIInteractions, _CMIArray);

  var _super3 = _createSuper(CMIInteractions);

  /**
   * Constructor for cmi.objectives Array
   */
  function CMIInteractions() {
    _classCallCheck(this, CMIInteractions);

    return _super3.call(this, {
      children: scorm2004_constants.interactions_children,
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT
    });
  }

  return CMIInteractions;
}(_common.CMIArray);
/**
 * Class representing SCORM 2004's cmi.objectives object
 */


var CMIObjectives = /*#__PURE__*/function (_CMIArray2) {
  _inherits(CMIObjectives, _CMIArray2);

  var _super4 = _createSuper(CMIObjectives);

  /**
   * Constructor for cmi.objectives Array
   */
  function CMIObjectives() {
    _classCallCheck(this, CMIObjectives);

    return _super4.call(this, {
      children: scorm2004_constants.objectives_children,
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT
    });
  }

  return CMIObjectives;
}(_common.CMIArray);
/**
 * Class representing SCORM 2004's cmi.comments_from_lms object
 */


var CMICommentsFromLMS = /*#__PURE__*/function (_CMIArray3) {
  _inherits(CMICommentsFromLMS, _CMIArray3);

  var _super5 = _createSuper(CMICommentsFromLMS);

  /**
   * Constructor for cmi.comments_from_lms Array
   */
  function CMICommentsFromLMS() {
    _classCallCheck(this, CMICommentsFromLMS);

    return _super5.call(this, {
      children: scorm2004_constants.comments_children,
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT
    });
  }

  return CMICommentsFromLMS;
}(_common.CMIArray);
/**
 * Class representing SCORM 2004's cmi.comments_from_learner object
 */


var CMICommentsFromLearner = /*#__PURE__*/function (_CMIArray4) {
  _inherits(CMICommentsFromLearner, _CMIArray4);

  var _super6 = _createSuper(CMICommentsFromLearner);

  /**
   * Constructor for cmi.comments_from_learner Array
   */
  function CMICommentsFromLearner() {
    _classCallCheck(this, CMICommentsFromLearner);

    return _super6.call(this, {
      children: scorm2004_constants.comments_children,
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT
    });
  }

  return CMICommentsFromLearner;
}(_common.CMIArray);
/**
 * Class for SCORM 2004's cmi.interaction.n object
 */


var CMIInteractionsObject = /*#__PURE__*/function (_BaseCMI3) {
  _inherits(CMIInteractionsObject, _BaseCMI3);

  var _super7 = _createSuper(CMIInteractionsObject);

  /**
   * Constructor for cmi.interaction.n
   */
  function CMIInteractionsObject() {
    var _this3;

    _classCallCheck(this, CMIInteractionsObject);

    _this3 = _super7.call(this);

    _id.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _type.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _timestamp.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _weighting.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _learner_response.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _result.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _latency.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _description.set(_assertThisInitialized(_this3), {
      writable: true,
      value: ''
    });

    _this3.objectives = new _common.CMIArray({
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT,
      children: scorm2004_constants.objectives_children
    });
    _this3.correct_responses = new _common.CMIArray({
      errorCode: scorm2004_error_codes.READ_ONLY_ELEMENT,
      children: scorm2004_constants.correct_responses_children
    });
    return _this3;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMIInteractionsObject, [{
    key: "initialize",
    value: function initialize() {
      var _this$objectives2, _this$correct_respons;

      _get(_getPrototypeOf(CMIInteractionsObject.prototype), "initialize", this).call(this);

      (_this$objectives2 = this.objectives) === null || _this$objectives2 === void 0 ? void 0 : _this$objectives2.initialize();
      (_this$correct_respons = this.correct_responses) === null || _this$correct_respons === void 0 ? void 0 : _this$correct_respons.initialize();
    }
    /**
     * Getter for #id
     * @return {string}
     */

  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.interactions.n
     *
     * @return {
     *    {
     *      id: string,
     *      type: string,
     *      objectives: CMIArray,
     *      timestamp: string,
     *      correct_responses: CMIArray,
     *      weighting: string,
     *      learner_response: string,
     *      result: string,
     *      latency: string,
     *      description: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id,
        'type': this.type,
        'objectives': this.objectives,
        'timestamp': this.timestamp,
        'weighting': this.weighting,
        'learner_response': this.learner_response,
        'result': this.result,
        'latency': this.latency,
        'description': this.description,
        'correct_responses': this.correct_responses
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check2004ValidFormat(id, scorm2004_regex.CMILongIdentifier)) {
        _classPrivateFieldSet(this, _id, id);
      }
    }
    /**
     * Getter for #type
     * @return {string}
     */

  }, {
    key: "type",
    get: function get() {
      return _classPrivateFieldGet(this, _type);
    }
    /**
     * Setter for #type
     * @param {string} type
     */
    ,
    set: function set(type) {
      if (check2004ValidFormat(type, scorm2004_regex.CMIType)) {
        _classPrivateFieldSet(this, _type, type);
      }
    }
    /**
     * Getter for #timestamp
     * @return {string}
     */

  }, {
    key: "timestamp",
    get: function get() {
      return _classPrivateFieldGet(this, _timestamp);
    }
    /**
     * Setter for #timestamp
     * @param {string} timestamp
     */
    ,
    set: function set(timestamp) {
      if (check2004ValidFormat(timestamp, scorm2004_regex.CMITime)) {
        _classPrivateFieldSet(this, _timestamp, timestamp);
      }
    }
    /**
     * Getter for #weighting
     * @return {string}
     */

  }, {
    key: "weighting",
    get: function get() {
      return _classPrivateFieldGet(this, _weighting);
    }
    /**
     * Setter for #weighting
     * @param {string} weighting
     */
    ,
    set: function set(weighting) {
      if (check2004ValidFormat(weighting, scorm2004_regex.CMIDecimal)) {
        _classPrivateFieldSet(this, _weighting, weighting);
      }
    }
    /**
     * Getter for #learner_response
     * @return {string}
     */

  }, {
    key: "learner_response",
    get: function get() {
      return _classPrivateFieldGet(this, _learner_response);
    }
    /**
     * Setter for #learner_response. Does type validation to make sure response
     * matches SCORM 2004's spec
     * @param {string} learner_response
     */
    ,
    set: function set(learner_response) {
      if (typeof this.type === 'undefined') {
        throw new _exceptions.ValidationError(scorm2004_error_codes.DEPENDENCY_NOT_ESTABLISHED);
      } else {
        var nodes = [];
        var response_type = learner_responses[this.type];

        if (response_type) {
          if (response_type === null || response_type === void 0 ? void 0 : response_type.delimiter) {
            nodes = learner_response.split(response_type.delimiter);
          } else {
            nodes[0] = learner_response;
          }

          if (nodes.length > 0 && nodes.length <= response_type.max) {
            var formatRegex = new RegExp(response_type.format);

            for (var i = 0; i < nodes.length; i++) {
              if (response_type === null || response_type === void 0 ? void 0 : response_type.delimiter2) {
                var values = nodes[i].split(response_type.delimiter2);

                if (values.length === 2) {
                  if (!values[0].match(formatRegex)) {
                    throwTypeMismatchError();
                  } else {
                    if (!values[1].match(new RegExp(response_type.format2))) {
                      throwTypeMismatchError();
                    }
                  }
                } else {
                  throwTypeMismatchError();
                }
              } else {
                if (!nodes[i].match(formatRegex)) {
                  throwTypeMismatchError();
                } else {
                  if (nodes[i] !== '' && response_type.unique) {
                    for (var j = 0; j < i; j++) {
                      if (nodes[i] === nodes[j]) {
                        throwTypeMismatchError();
                      }
                    }
                  }
                }
              }
            }
          } else {
            throw new _exceptions.ValidationError(scorm2004_error_codes.GENERAL_SET_FAILURE);
          }
        } else {
          throw new _exceptions.ValidationError(scorm2004_error_codes.TYPE_MISMATCH);
        }
      }
    }
    /**
     * Getter for #result
     * @return {string}
     */

  }, {
    key: "result",
    get: function get() {
      return _classPrivateFieldGet(this, _result);
    }
    /**
     * Setter for #result
     * @param {string} result
     */
    ,
    set: function set(result) {
      if (check2004ValidFormat(result, scorm2004_regex.CMIResult)) {
        _classPrivateFieldSet(this, _result, result);
      }
    }
    /**
     * Getter for #latency
     * @return {string}
     */

  }, {
    key: "latency",
    get: function get() {
      return _classPrivateFieldGet(this, _latency);
    }
    /**
     * Setter for #latency
     * @param {string} latency
     */
    ,
    set: function set(latency) {
      if (check2004ValidFormat(latency, scorm2004_regex.CMITimespan)) {
        _classPrivateFieldSet(this, _latency, latency);
      }
    }
    /**
     * Getter for #description
     * @return {string}
     */

  }, {
    key: "description",
    get: function get() {
      return _classPrivateFieldGet(this, _description);
    }
    /**
     * Setter for #description
     * @param {string} description
     */
    ,
    set: function set(description) {
      if (check2004ValidFormat(description, scorm2004_regex.CMILangString250, true)) {
        _classPrivateFieldSet(this, _description, description);
      }
    }
  }]);

  return CMIInteractionsObject;
}(_common.BaseCMI);
/**
 * Class for SCORM 2004's cmi.objectives.n object
 */


exports.CMIInteractionsObject = CMIInteractionsObject;

var _id = new WeakMap();

var _type = new WeakMap();

var _timestamp = new WeakMap();

var _weighting = new WeakMap();

var _learner_response = new WeakMap();

var _result = new WeakMap();

var _latency = new WeakMap();

var _description = new WeakMap();

var CMIObjectivesObject = /*#__PURE__*/function (_BaseCMI4) {
  _inherits(CMIObjectivesObject, _BaseCMI4);

  var _super8 = _createSuper(CMIObjectivesObject);

  /**
   * Constructor for cmi.objectives.n
   */
  function CMIObjectivesObject() {
    var _this4;

    _classCallCheck(this, CMIObjectivesObject);

    _this4 = _super8.call(this);

    _id2.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _success_status2.set(_assertThisInitialized(_this4), {
      writable: true,
      value: 'unknown'
    });

    _completion_status2.set(_assertThisInitialized(_this4), {
      writable: true,
      value: 'unknown'
    });

    _progress_measure2.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _description2.set(_assertThisInitialized(_this4), {
      writable: true,
      value: ''
    });

    _this4.score = new Scorm2004CMIScore();
    return _this4;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(CMIObjectivesObject, [{
    key: "initialize",
    value: function initialize() {
      var _this$score2;

      _get(_getPrototypeOf(CMIObjectivesObject.prototype), "initialize", this).call(this);

      (_this$score2 = this.score) === null || _this$score2 === void 0 ? void 0 : _this$score2.initialize();
    }
    /**
     * Getter for #id
     * @return {string}
     */

  }, {
    key: "toJSON",

    /**
     * toJSON for cmi.objectives.n
     *
     * @return {
     *    {
     *      id: string,
     *      success_status: string,
     *      completion_status: string,
     *      progress_measure: string,
     *      description: string,
     *      score: Scorm2004CMIScore
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id,
        'success_status': this.success_status,
        'completion_status': this.completion_status,
        'progress_measure': this.progress_measure,
        'description': this.description,
        'score': this.score
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id2);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check2004ValidFormat(id, scorm2004_regex.CMILongIdentifier)) {
        _classPrivateFieldSet(this, _id2, id);
      }
    }
    /**
     * Getter for #success_status
     * @return {string}
     */

  }, {
    key: "success_status",
    get: function get() {
      return _classPrivateFieldGet(this, _success_status2);
    }
    /**
     * Setter for #success_status
     * @param {string} success_status
     */
    ,
    set: function set(success_status) {
      if (check2004ValidFormat(success_status, scorm2004_regex.CMISStatus)) {
        _classPrivateFieldSet(this, _success_status2, success_status);
      }
    }
    /**
     * Getter for #completion_status
     * @return {string}
     */

  }, {
    key: "completion_status",
    get: function get() {
      return _classPrivateFieldGet(this, _completion_status2);
    }
    /**
     * Setter for #completion_status
     * @param {string} completion_status
     */
    ,
    set: function set(completion_status) {
      if (check2004ValidFormat(completion_status, scorm2004_regex.CMICStatus)) {
        _classPrivateFieldSet(this, _completion_status2, completion_status);
      }
    }
    /**
     * Getter for #progress_measure
     * @return {string}
     */

  }, {
    key: "progress_measure",
    get: function get() {
      return _classPrivateFieldGet(this, _progress_measure2);
    }
    /**
     * Setter for #progress_measure
     * @param {string} progress_measure
     */
    ,
    set: function set(progress_measure) {
      if (check2004ValidFormat(progress_measure, scorm2004_regex.CMIDecimal) && check2004ValidRange(progress_measure, scorm2004_regex.progress_range)) {
        _classPrivateFieldSet(this, _progress_measure2, progress_measure);
      }
    }
    /**
     * Getter for #description
     * @return {string}
     */

  }, {
    key: "description",
    get: function get() {
      return _classPrivateFieldGet(this, _description2);
    }
    /**
     * Setter for #description
     * @param {string} description
     */
    ,
    set: function set(description) {
      if (check2004ValidFormat(description, scorm2004_regex.CMILangString250, true)) {
        _classPrivateFieldSet(this, _description2, description);
      }
    }
  }]);

  return CMIObjectivesObject;
}(_common.BaseCMI);
/**
 * Class for SCORM 2004's cmi *.score object
 */


exports.CMIObjectivesObject = CMIObjectivesObject;

var _id2 = new WeakMap();

var _success_status2 = new WeakMap();

var _completion_status2 = new WeakMap();

var _progress_measure2 = new WeakMap();

var _description2 = new WeakMap();

var Scorm2004CMIScore = /*#__PURE__*/function (_CMIScore) {
  _inherits(Scorm2004CMIScore, _CMIScore);

  var _super9 = _createSuper(Scorm2004CMIScore);

  /**
   * Constructor for cmi *.score
   */
  function Scorm2004CMIScore() {
    var _this5;

    _classCallCheck(this, Scorm2004CMIScore);

    _this5 = _super9.call(this, {
      score_children: scorm2004_constants.score_children,
      max: '',
      invalidErrorCode: scorm2004_error_codes.READ_ONLY_ELEMENT,
      invalidTypeCode: scorm2004_error_codes.TYPE_MISMATCH,
      invalidRangeCode: scorm2004_error_codes.VALUE_OUT_OF_RANGE,
      decimalRegex: scorm2004_regex.CMIDecimal
    });

    _scaled.set(_assertThisInitialized(_this5), {
      writable: true,
      value: ''
    });

    return _this5;
  }
  /**
   * Getter for #scaled
   * @return {string}
   */


  _createClass(Scorm2004CMIScore, [{
    key: "toJSON",

    /**
     * toJSON for cmi *.score
     *
     * @return {
     *    {
     *      scaled: string,
     *      raw: string,
     *      min: string,
     *      max: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'scaled': this.scaled,
        'raw': _get(_getPrototypeOf(Scorm2004CMIScore.prototype), "raw", this),
        'min': _get(_getPrototypeOf(Scorm2004CMIScore.prototype), "min", this),
        'max': _get(_getPrototypeOf(Scorm2004CMIScore.prototype), "max", this)
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "scaled",
    get: function get() {
      return _classPrivateFieldGet(this, _scaled);
    }
    /**
     * Setter for #scaled
     * @param {string} scaled
     */
    ,
    set: function set(scaled) {
      if (check2004ValidFormat(scaled, scorm2004_regex.CMIDecimal) && check2004ValidRange(scaled, scorm2004_regex.scaled_range)) {
        _classPrivateFieldSet(this, _scaled, scaled);
      }
    }
  }]);

  return Scorm2004CMIScore;
}(_common.CMIScore);
/**
 * Class representing SCORM 2004's cmi.comments_from_learner.n and cmi.comments_from_lms.n object
 */


var _scaled = new WeakMap();

var CMICommentsObject = /*#__PURE__*/function (_BaseCMI5) {
  _inherits(CMICommentsObject, _BaseCMI5);

  var _super10 = _createSuper(CMICommentsObject);

  /**
   * Constructor for cmi.comments_from_learner.n and cmi.comments_from_lms.n
   * @param {boolean} readOnlyAfterInit
   */
  function CMICommentsObject() {
    var _this6;

    var readOnlyAfterInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, CMICommentsObject);

    _this6 = _super10.call(this);

    _comment.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _location2.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _timestamp2.set(_assertThisInitialized(_this6), {
      writable: true,
      value: ''
    });

    _readOnlyAfterInit.set(_assertThisInitialized(_this6), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this6), _comment, '');

    _classPrivateFieldSet(_assertThisInitialized(_this6), _location2, '');

    _classPrivateFieldSet(_assertThisInitialized(_this6), _timestamp2, '');

    _classPrivateFieldSet(_assertThisInitialized(_this6), _readOnlyAfterInit, readOnlyAfterInit);

    return _this6;
  }
  /**
   * Getter for #comment
   * @return {string}
   */


  _createClass(CMICommentsObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.comments_from_learner.n object
     * @return {
     *    {
     *      comment: string,
     *      location: string,
     *      timestamp: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'comment': this.comment,
        'location': this.location,
        'timestamp': this.timestamp
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "comment",
    get: function get() {
      return _classPrivateFieldGet(this, _comment);
    }
    /**
     * Setter for #comment
     * @param {string} comment
     */
    ,
    set: function set(comment) {
      if (this.initialized && _classPrivateFieldGet(this, _readOnlyAfterInit)) {
        throwReadOnlyError();
      } else {
        if (check2004ValidFormat(comment, scorm2004_regex.CMILangString4000, true)) {
          _classPrivateFieldSet(this, _comment, comment);
        }
      }
    }
    /**
     * Getter for #location
     * @return {string}
     */

  }, {
    key: "location",
    get: function get() {
      return _classPrivateFieldGet(this, _location2);
    }
    /**
     * Setter for #location
     * @param {string} location
     */
    ,
    set: function set(location) {
      if (this.initialized && _classPrivateFieldGet(this, _readOnlyAfterInit)) {
        throwReadOnlyError();
      } else {
        if (check2004ValidFormat(location, scorm2004_regex.CMIString250)) {
          _classPrivateFieldSet(this, _location2, location);
        }
      }
    }
    /**
     * Getter for #timestamp
     * @return {string}
     */

  }, {
    key: "timestamp",
    get: function get() {
      return _classPrivateFieldGet(this, _timestamp2);
    }
    /**
     * Setter for #timestamp
     * @param {string} timestamp
     */
    ,
    set: function set(timestamp) {
      if (this.initialized && _classPrivateFieldGet(this, _readOnlyAfterInit)) {
        throwReadOnlyError();
      } else {
        if (check2004ValidFormat(timestamp, scorm2004_regex.CMITime)) {
          _classPrivateFieldSet(this, _timestamp2, timestamp);
        }
      }
    }
  }]);

  return CMICommentsObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's cmi.interactions.n.objectives.n object
 */


exports.CMICommentsObject = CMICommentsObject;

var _comment = new WeakMap();

var _location2 = new WeakMap();

var _timestamp2 = new WeakMap();

var _readOnlyAfterInit = new WeakMap();

var CMIInteractionsObjectivesObject = /*#__PURE__*/function (_BaseCMI6) {
  _inherits(CMIInteractionsObjectivesObject, _BaseCMI6);

  var _super11 = _createSuper(CMIInteractionsObjectivesObject);

  /**
   * Constructor for cmi.interactions.n.objectives.n
   */
  function CMIInteractionsObjectivesObject() {
    var _this7;

    _classCallCheck(this, CMIInteractionsObjectivesObject);

    _this7 = _super11.call(this);

    _id3.set(_assertThisInitialized(_this7), {
      writable: true,
      value: ''
    });

    return _this7;
  }
  /**
   * Getter for #id
   * @return {string}
   */


  _createClass(CMIInteractionsObjectivesObject, [{
    key: "toJSON",

    /**
     * toJSON for cmi.interactions.n.objectives.n
     * @return {
     *    {
     *      id: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'id': this.id
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "id",
    get: function get() {
      return _classPrivateFieldGet(this, _id3);
    }
    /**
     * Setter for #id
     * @param {string} id
     */
    ,
    set: function set(id) {
      if (check2004ValidFormat(id, scorm2004_regex.CMILongIdentifier)) {
        _classPrivateFieldSet(this, _id3, id);
      }
    }
  }]);

  return CMIInteractionsObjectivesObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's cmi.interactions.n.correct_responses.n object
 */


exports.CMIInteractionsObjectivesObject = CMIInteractionsObjectivesObject;

var _id3 = new WeakMap();

var CMIInteractionsCorrectResponsesObject = /*#__PURE__*/function (_BaseCMI7) {
  _inherits(CMIInteractionsCorrectResponsesObject, _BaseCMI7);

  var _super12 = _createSuper(CMIInteractionsCorrectResponsesObject);

  /**
   * Constructor for cmi.interactions.n.correct_responses.n
   */
  function CMIInteractionsCorrectResponsesObject() {
    var _this8;

    _classCallCheck(this, CMIInteractionsCorrectResponsesObject);

    _this8 = _super12.call(this);

    _pattern.set(_assertThisInitialized(_this8), {
      writable: true,
      value: ''
    });

    return _this8;
  }
  /**
   * Getter for #pattern
   * @return {string}
   */


  _createClass(CMIInteractionsCorrectResponsesObject, [{
    key: "toJSON",

    /**
     * toJSON cmi.interactions.n.correct_responses.n object
     * @return {
     *    {
     *      pattern: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'pattern': this.pattern
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "pattern",
    get: function get() {
      return _classPrivateFieldGet(this, _pattern);
    }
    /**
     * Setter for #pattern
     * @param {string} pattern
     */
    ,
    set: function set(pattern) {
      if (check2004ValidFormat(pattern, scorm2004_regex.CMIFeedback)) {
        _classPrivateFieldSet(this, _pattern, pattern);
      }
    }
  }]);

  return CMIInteractionsCorrectResponsesObject;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's adl object
 */


exports.CMIInteractionsCorrectResponsesObject = CMIInteractionsCorrectResponsesObject;

var _pattern = new WeakMap();

var ADL = /*#__PURE__*/function (_BaseCMI8) {
  _inherits(ADL, _BaseCMI8);

  var _super13 = _createSuper(ADL);

  /**
   * Constructor for adl
   */
  function ADL() {
    var _this9;

    _classCallCheck(this, ADL);

    _this9 = _super13.call(this);
    _this9.nav = new ADLNav();
    return _this9;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(ADL, [{
    key: "initialize",
    value: function initialize() {
      var _this$nav;

      _get(_getPrototypeOf(ADL.prototype), "initialize", this).call(this);

      (_this$nav = this.nav) === null || _this$nav === void 0 ? void 0 : _this$nav.initialize();
    }
    /**
     * toJSON for adl
     * @return {
     *    {
     *      nav: {
     *        request: string
     *      }
     *    }
     *  }
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'nav': this.nav
      };
      delete this.jsonString;
      return result;
    }
  }]);

  return ADL;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's adl.nav object
 */


exports.ADL = ADL;

var ADLNav = /*#__PURE__*/function (_BaseCMI9) {
  _inherits(ADLNav, _BaseCMI9);

  var _super14 = _createSuper(ADLNav);

  /**
   * Constructor for adl.nav
   */
  function ADLNav() {
    var _this10;

    _classCallCheck(this, ADLNav);

    _this10 = _super14.call(this);

    _request.set(_assertThisInitialized(_this10), {
      writable: true,
      value: '_none_'
    });

    _this10.request_valid = new ADLNavRequestValid();
    return _this10;
  }
  /**
   * Called when the API has been initialized after the CMI has been created
   */


  _createClass(ADLNav, [{
    key: "initialize",
    value: function initialize() {
      var _this$request_valid;

      _get(_getPrototypeOf(ADLNav.prototype), "initialize", this).call(this);

      (_this$request_valid = this.request_valid) === null || _this$request_valid === void 0 ? void 0 : _this$request_valid.initialize();
    }
    /**
     * Getter for #request
     * @return {string}
     */

  }, {
    key: "toJSON",

    /**
     * toJSON for adl.nav
     *
     * @return {
     *    {
     *      request: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'request': this.request
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "request",
    get: function get() {
      return _classPrivateFieldGet(this, _request);
    }
    /**
     * Setter for #request
     * @param {string} request
     */
    ,
    set: function set(request) {
      if (check2004ValidFormat(request, scorm2004_regex.NAVEvent)) {
        _classPrivateFieldSet(this, _request, request);
      }
    }
  }]);

  return ADLNav;
}(_common.BaseCMI);
/**
 * Class representing SCORM 2004's adl.nav.request_valid object
 */


var _request = new WeakMap();

var ADLNavRequestValid = /*#__PURE__*/function (_BaseCMI10) {
  _inherits(ADLNavRequestValid, _BaseCMI10);

  var _super15 = _createSuper(ADLNavRequestValid);

  /**
   * Constructor for adl.nav.request_valid
   */
  function ADLNavRequestValid() {
    var _temp, _temp2;

    var _this11;

    _classCallCheck(this, ADLNavRequestValid);

    _this11 = _super15.call(this);

    _continue.set(_assertThisInitialized(_this11), {
      writable: true,
      value: 'unknown'
    });

    _previous.set(_assertThisInitialized(_this11), {
      writable: true,
      value: 'unknown'
    });

    _defineProperty(_assertThisInitialized(_this11), "choice", (_temp = function _temp() {
      _classCallCheck(this, _temp);

      _defineProperty(this, "_isTargetValid", function (_target) {
        return 'unknown';
      });
    }, _temp));

    _defineProperty(_assertThisInitialized(_this11), "jump", (_temp2 = function _temp2() {
      _classCallCheck(this, _temp2);

      _defineProperty(this, "_isTargetValid", function (_target) {
        return 'unknown';
      });
    }, _temp2));

    return _this11;
  }
  /**
   * Getter for #continue
   * @return {string}
   */


  _createClass(ADLNavRequestValid, [{
    key: "toJSON",

    /**
     * toJSON for adl.nav.request_valid
     *
     * @return {
     *    {
     *      previous: string,
     *      continue: string
     *    }
     *  }
     */
    value: function toJSON() {
      this.jsonString = true;
      var result = {
        'previous': this.previous,
        'continue': this["continue"]
      };
      delete this.jsonString;
      return result;
    }
  }, {
    key: "continue",
    get: function get() {
      return _classPrivateFieldGet(this, _continue);
    }
    /**
     * Setter for #continue. Just throws an error.
     * @param {*} _
     */
    ,
    set: function set(_) {
      throwReadOnlyError();
    }
    /**
     * Getter for #previous
     * @return {string}
     */

  }, {
    key: "previous",
    get: function get() {
      return _classPrivateFieldGet(this, _previous);
    }
    /**
     * Setter for #previous. Just throws an error.
     * @param {*} _
     */
    ,
    set: function set(_) {
      throwReadOnlyError();
    }
  }]);

  return ADLNavRequestValid;
}(_common.BaseCMI);

var _continue = new WeakMap();

var _previous = new WeakMap();

},{"../constants/api_constants":9,"../constants/error_codes":10,"../constants/regex":12,"../constants/response_constants":13,"../exceptions":14,"../utilities":16,"./common":6}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var global = {
  SCORM_TRUE: 'true',
  SCORM_FALSE: 'false',
  STATE_NOT_INITIALIZED: 0,
  STATE_INITIALIZED: 1,
  STATE_TERMINATED: 2,
  LOG_LEVEL_DEBUG: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_WARNING: 3,
  LOG_LEVEL_ERROR: 4,
  LOG_LEVEL_NONE: 5
};
var scorm12 = {
  // Children lists
  cmi_children: 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions',
  core_children: 'student_id,student_name,lesson_location,credit,lesson_status,entry,score,total_time,lesson_mode,exit,session_time',
  score_children: 'raw,min,max',
  comments_children: 'content,location,time',
  objectives_children: 'id,score,status',
  correct_responses_children: 'pattern',
  student_data_children: 'mastery_score,max_time_allowed,time_limit_action',
  student_preference_children: 'audio,language,speed,text',
  interactions_children: 'id,objectives,time,type,correct_responses,weighting,student_response,result,latency',
  error_descriptions: {
    '101': {
      basicMessage: 'General Exception',
      detailMessage: 'No specific error code exists to describe the error. Use LMSGetDiagnostic for more information'
    },
    '201': {
      basicMessage: 'Invalid argument error',
      detailMessage: 'Indicates that an argument represents an invalid data model element or is otherwise incorrect.'
    },
    '202': {
      basicMessage: 'Element cannot have children',
      detailMessage: 'Indicates that LMSGetValue was called with a data model element name that ends in "_children" for a data model element that does not support the "_children" suffix.'
    },
    '203': {
      basicMessage: 'Element not an array - cannot have count',
      detailMessage: 'Indicates that LMSGetValue was called with a data model element name that ends in "_count" for a data model element that does not support the "_count" suffix.'
    },
    '301': {
      basicMessage: 'Not initialized',
      detailMessage: 'Indicates that an API call was made before the call to lmsInitialize.'
    },
    '401': {
      basicMessage: 'Not implemented error',
      detailMessage: 'The data model element indicated in a call to LMSGetValue or LMSSetValue is valid, but was not implemented by this LMS. SCORM 1.2 defines a set of data model elements as being optional for an LMS to implement.'
    },
    '402': {
      basicMessage: 'Invalid set value, element is a keyword',
      detailMessage: 'Indicates that LMSSetValue was called on a data model element that represents a keyword (elements that end in "_children" and "_count").'
    },
    '403': {
      basicMessage: 'Element is read only',
      detailMessage: 'LMSSetValue was called with a data model element that can only be read.'
    },
    '404': {
      basicMessage: 'Element is write only',
      detailMessage: 'LMSGetValue was called on a data model element that can only be written to.'
    },
    '405': {
      basicMessage: 'Incorrect Data Type',
      detailMessage: 'LMSSetValue was called with a value that is not consistent with the data format of the supplied data model element.'
    }
  }
};

var aicc = _objectSpread(_objectSpread({}, scorm12), {
  cmi_children: 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions,evaluation',
  student_preference_children: 'audio,language,lesson_type,speed,text,text_color,text_location,text_size,video,windows',
  student_data_children: 'attempt_number,tries,mastery_score,max_time_allowed,time_limit_action',
  student_demographics_children: 'city,class,company,country,experience,familiar_name,instructor_name,title,native_language,state,street_address,telephone,years_experience',
  tries_children: 'time,status,score',
  attempt_records_children: 'score,lesson_status',
  paths_children: 'location_id,date,time,status,why_left,time_in_element'
});

var scorm2004 = {
  // Children lists
  cmi_children: '_version,comments_from_learner,comments_from_lms,completion_status,credit,entry,exit,interactions,launch_data,learner_id,learner_name,learner_preference,location,max_time_allowed,mode,objectives,progress_measure,scaled_passing_score,score,session_time,success_status,suspend_data,time_limit_action,total_time',
  comments_children: 'comment,timestamp,location',
  score_children: 'max,raw,scaled,min',
  objectives_children: 'progress_measure,completion_status,success_status,description,score,id',
  correct_responses_children: 'pattern',
  student_data_children: 'mastery_score,max_time_allowed,time_limit_action',
  student_preference_children: 'audio_level,audio_captioning,delivery_speed,language',
  interactions_children: 'id,type,objectives,timestamp,correct_responses,weighting,learner_response,result,latency,description',
  error_descriptions: {
    '0': {
      basicMessage: 'No Error',
      detailMessage: 'No error occurred, the previous API call was successful.'
    },
    '101': {
      basicMessage: 'General Exception',
      detailMessage: 'No specific error code exists to describe the error. Use GetDiagnostic for more information.'
    },
    '102': {
      basicMessage: 'General Initialization Failure',
      detailMessage: 'Call to Initialize failed for an unknown reason.'
    },
    '103': {
      basicMessage: 'Already Initialized',
      detailMessage: 'Call to Initialize failed because Initialize was already called.'
    },
    '104': {
      basicMessage: 'Content Instance Terminated',
      detailMessage: 'Call to Initialize failed because Terminate was already called.'
    },
    '111': {
      basicMessage: 'General Termination Failure',
      detailMessage: 'Call to Terminate failed for an unknown reason.'
    },
    '112': {
      basicMessage: 'Termination Before Initialization',
      detailMessage: 'Call to Terminate failed because it was made before the call to Initialize.'
    },
    '113': {
      basicMessage: 'Termination After Termination',
      detailMessage: 'Call to Terminate failed because Terminate was already called.'
    },
    '122': {
      basicMessage: 'Retrieve Data Before Initialization',
      detailMessage: 'Call to GetValue failed because it was made before the call to Initialize.'
    },
    '123': {
      basicMessage: 'Retrieve Data After Termination',
      detailMessage: 'Call to GetValue failed because it was made after the call to Terminate.'
    },
    '132': {
      basicMessage: 'Store Data Before Initialization',
      detailMessage: 'Call to SetValue failed because it was made before the call to Initialize.'
    },
    '133': {
      basicMessage: 'Store Data After Termination',
      detailMessage: 'Call to SetValue failed because it was made after the call to Terminate.'
    },
    '142': {
      basicMessage: 'Commit Before Initialization',
      detailMessage: 'Call to Commit failed because it was made before the call to Initialize.'
    },
    '143': {
      basicMessage: 'Commit After Termination',
      detailMessage: 'Call to Commit failed because it was made after the call to Terminate.'
    },
    '201': {
      basicMessage: 'General Argument Error',
      detailMessage: 'An invalid argument was passed to an API method (usually indicates that Initialize, Commit or Terminate did not receive the expected empty string argument.'
    },
    '301': {
      basicMessage: 'General Get Failure',
      detailMessage: 'Indicates a failed GetValue call where no other specific error code is applicable. Use GetDiagnostic for more information.'
    },
    '351': {
      basicMessage: 'General Set Failure',
      detailMessage: 'Indicates a failed SetValue call where no other specific error code is applicable. Use GetDiagnostic for more information.'
    },
    '391': {
      basicMessage: 'General Commit Failure',
      detailMessage: 'Indicates a failed Commit call where no other specific error code is applicable. Use GetDiagnostic for more information.'
    },
    '401': {
      basicMessage: 'Undefined Data Model Element',
      detailMessage: 'The data model element name passed to GetValue or SetValue is not a valid SCORM data model element.'
    },
    '402': {
      basicMessage: 'Unimplemented Data Model Element',
      detailMessage: 'The data model element indicated in a call to GetValue or SetValue is valid, but was not implemented by this LMS. In SCORM 2004, this error would indicate an LMS that is not fully SCORM conformant.'
    },
    '403': {
      basicMessage: 'Data Model Element Value Not Initialized',
      detailMessage: 'Attempt to read a data model element that has not been initialized by the LMS or through a SetValue call. This error condition is often reached during normal execution of a SCO.'
    },
    '404': {
      basicMessage: 'Data Model Element Is Read Only',
      detailMessage: 'SetValue was called with a data model element that can only be read.'
    },
    '405': {
      basicMessage: 'Data Model Element Is Write Only',
      detailMessage: 'GetValue was called on a data model element that can only be written to.'
    },
    '406': {
      basicMessage: 'Data Model Element Type Mismatch',
      detailMessage: 'SetValue was called with a value that is not consistent with the data format of the supplied data model element.'
    },
    '407': {
      basicMessage: 'Data Model Element Value Out Of Range',
      detailMessage: 'The numeric value supplied to a SetValue call is outside of the numeric range allowed for the supplied data model element.'
    },
    '408': {
      basicMessage: 'Data Model Dependency Not Established',
      detailMessage: 'Some data model elements cannot be set until another data model element was set. This error condition indicates that the prerequisite element was not set before the dependent element.'
    }
  }
};
var APIConstants = {
  global: global,
  scorm12: scorm12,
  aicc: aicc,
  scorm2004: scorm2004
};
var _default = APIConstants;
exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var global = {
  GENERAL: 101,
  INITIALIZATION_FAILED: 101,
  INITIALIZED: 101,
  TERMINATED: 101,
  TERMINATION_FAILURE: 101,
  TERMINATION_BEFORE_INIT: 101,
  MULTIPLE_TERMINATION: 101,
  RETRIEVE_BEFORE_INIT: 101,
  RETRIEVE_AFTER_TERM: 101,
  STORE_BEFORE_INIT: 101,
  STORE_AFTER_TERM: 101,
  COMMIT_BEFORE_INIT: 101,
  COMMIT_AFTER_TERM: 101,
  ARGUMENT_ERROR: 101,
  CHILDREN_ERROR: 101,
  COUNT_ERROR: 101,
  GENERAL_GET_FAILURE: 101,
  GENERAL_SET_FAILURE: 101,
  GENERAL_COMMIT_FAILURE: 101,
  UNDEFINED_DATA_MODEL: 101,
  UNIMPLEMENTED_ELEMENT: 101,
  VALUE_NOT_INITIALIZED: 101,
  INVALID_SET_VALUE: 101,
  READ_ONLY_ELEMENT: 101,
  WRITE_ONLY_ELEMENT: 101,
  TYPE_MISMATCH: 101,
  VALUE_OUT_OF_RANGE: 101,
  DEPENDENCY_NOT_ESTABLISHED: 101
};

var scorm12 = _objectSpread(_objectSpread({}, global), {
  RETRIEVE_BEFORE_INIT: 301,
  STORE_BEFORE_INIT: 301,
  COMMIT_BEFORE_INIT: 301,
  ARGUMENT_ERROR: 201,
  CHILDREN_ERROR: 202,
  COUNT_ERROR: 203,
  UNDEFINED_DATA_MODEL: 401,
  UNIMPLEMENTED_ELEMENT: 401,
  VALUE_NOT_INITIALIZED: 301,
  INVALID_SET_VALUE: 402,
  READ_ONLY_ELEMENT: 403,
  WRITE_ONLY_ELEMENT: 404,
  TYPE_MISMATCH: 405,
  VALUE_OUT_OF_RANGE: 407,
  DEPENDENCY_NOT_ESTABLISHED: 408
});

var scorm2004 = _objectSpread(_objectSpread({}, global), {
  INITIALIZATION_FAILED: 102,
  INITIALIZED: 103,
  TERMINATED: 104,
  TERMINATION_FAILURE: 111,
  TERMINATION_BEFORE_INIT: 112,
  MULTIPLE_TERMINATIONS: 113,
  RETRIEVE_BEFORE_INIT: 122,
  RETRIEVE_AFTER_TERM: 123,
  STORE_BEFORE_INIT: 132,
  STORE_AFTER_TERM: 133,
  COMMIT_BEFORE_INIT: 142,
  COMMIT_AFTER_TERM: 143,
  ARGUMENT_ERROR: 201,
  GENERAL_GET_FAILURE: 301,
  GENERAL_SET_FAILURE: 351,
  GENERAL_COMMIT_FAILURE: 391,
  UNDEFINED_DATA_MODEL: 401,
  UNIMPLEMENTED_ELEMENT: 402,
  VALUE_NOT_INITIALIZED: 403,
  READ_ONLY_ELEMENT: 404,
  WRITE_ONLY_ELEMENT: 405,
  TYPE_MISMATCH: 406,
  VALUE_OUT_OF_RANGE: 407,
  DEPENDENCY_NOT_ESTABLISHED: 408
});

var ErrorCodes = {
  scorm12: scorm12,
  scorm2004: scorm2004
};
var _default = ErrorCodes;
exports["default"] = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ValidLanguages = {
  'aa': 'aa',
  'ab': 'ab',
  'ae': 'ae',
  'af': 'af',
  'ak': 'ak',
  'am': 'am',
  'an': 'an',
  'ar': 'ar',
  'as': 'as',
  'av': 'av',
  'ay': 'ay',
  'az': 'az',
  'ba': 'ba',
  'be': 'be',
  'bg': 'bg',
  'bh': 'bh',
  'bi': 'bi',
  'bm': 'bm',
  'bn': 'bn',
  'bo': 'bo',
  'br': 'br',
  'bs': 'bs',
  'ca': 'ca',
  'ce': 'ce',
  'ch': 'ch',
  'co': 'co',
  'cr': 'cr',
  'cs': 'cs',
  'cu': 'cu',
  'cv': 'cv',
  'cy': 'cy',
  'da': 'da',
  'de': 'de',
  'dv': 'dv',
  'dz': 'dz',
  'ee': 'ee',
  'el': 'el',
  'en': 'en',
  'eo': 'eo',
  'es': 'es',
  'et': 'et',
  'eu': 'eu',
  'fa': 'fa',
  'ff': 'ff',
  'fi': 'fi',
  'fj': 'fj',
  'fo': 'fo',
  'fr': 'fr',
  'fy': 'fy',
  'ga': 'ga',
  'gd': 'gd',
  'gl': 'gl',
  'gn': 'gn',
  'gu': 'gu',
  'gv': 'gv',
  'ha': 'ha',
  'he': 'he',
  'hi': 'hi',
  'ho': 'ho',
  'hr': 'hr',
  'ht': 'ht',
  'hu': 'hu',
  'hy': 'hy',
  'hz': 'hz',
  'ia': 'ia',
  'id': 'id',
  'ie': 'ie',
  'ig': 'ig',
  'ii': 'ii',
  'ik': 'ik',
  'io': 'io',
  'is': 'is',
  'it': 'it',
  'iu': 'iu',
  'ja': 'ja',
  'jv': 'jv',
  'ka': 'ka',
  'kg': 'kg',
  'ki': 'ki',
  'kj': 'kj',
  'kk': 'kk',
  'kl': 'kl',
  'km': 'km',
  'kn': 'kn',
  'ko': 'ko',
  'kr': 'kr',
  'ks': 'ks',
  'ku': 'ku',
  'kv': 'kv',
  'kw': 'kw',
  'ky': 'ky',
  'la': 'la',
  'lb': 'lb',
  'lg': 'lg',
  'li': 'li',
  'ln': 'ln',
  'lo': 'lo',
  'lt': 'lt',
  'lu': 'lu',
  'lv': 'lv',
  'mg': 'mg',
  'mh': 'mh',
  'mi': 'mi',
  'mk': 'mk',
  'ml': 'ml',
  'mn': 'mn',
  'mo': 'mo',
  'mr': 'mr',
  'ms': 'ms',
  'mt': 'mt',
  'my': 'my',
  'na': 'na',
  'nb': 'nb',
  'nd': 'nd',
  'ne': 'ne',
  'ng': 'ng',
  'nl': 'nl',
  'nn': 'nn',
  'no': 'no',
  'nr': 'nr',
  'nv': 'nv',
  'ny': 'ny',
  'oc': 'oc',
  'oj': 'oj',
  'om': 'om',
  'or': 'or',
  'os': 'os',
  'pa': 'pa',
  'pi': 'pi',
  'pl': 'pl',
  'ps': 'ps',
  'pt': 'pt',
  'qu': 'qu',
  'rm': 'rm',
  'rn': 'rn',
  'ro': 'ro',
  'ru': 'ru',
  'rw': 'rw',
  'sa': 'sa',
  'sc': 'sc',
  'sd': 'sd',
  'se': 'se',
  'sg': 'sg',
  'sh': 'sh',
  'si': 'si',
  'sk': 'sk',
  'sl': 'sl',
  'sm': 'sm',
  'sn': 'sn',
  'so': 'so',
  'sq': 'sq',
  'sr': 'sr',
  'ss': 'ss',
  'st': 'st',
  'su': 'su',
  'sv': 'sv',
  'sw': 'sw',
  'ta': 'ta',
  'te': 'te',
  'tg': 'tg',
  'th': 'th',
  'ti': 'ti',
  'tk': 'tk',
  'tl': 'tl',
  'tn': 'tn',
  'to': 'to',
  'tr': 'tr',
  'ts': 'ts',
  'tt': 'tt',
  'tw': 'tw',
  'ty': 'ty',
  'ug': 'ug',
  'uk': 'uk',
  'ur': 'ur',
  'uz': 'uz',
  've': 've',
  'vi': 'vi',
  'vo': 'vo',
  'wa': 'wa',
  'wo': 'wo',
  'xh': 'xh',
  'yi': 'yi',
  'yo': 'yo',
  'za': 'za',
  'zh': 'zh',
  'zu': 'zu',
  'aar': 'aar',
  'abk': 'abk',
  'ave': 'ave',
  'afr': 'afr',
  'aka': 'aka',
  'amh': 'amh',
  'arg': 'arg',
  'ara': 'ara',
  'asm': 'asm',
  'ava': 'ava',
  'aym': 'aym',
  'aze': 'aze',
  'bak': 'bak',
  'bel': 'bel',
  'bul': 'bul',
  'bih': 'bih',
  'bis': 'bis',
  'bam': 'bam',
  'ben': 'ben',
  'tib': 'tib',
  'bod': 'bod',
  'bre': 'bre',
  'bos': 'bos',
  'cat': 'cat',
  'che': 'che',
  'cha': 'cha',
  'cos': 'cos',
  'cre': 'cre',
  'cze': 'cze',
  'ces': 'ces',
  'chu': 'chu',
  'chv': 'chv',
  'wel': 'wel',
  'cym': 'cym',
  'dan': 'dan',
  'ger': 'ger',
  'deu': 'deu',
  'div': 'div',
  'dzo': 'dzo',
  'ewe': 'ewe',
  'gre': 'gre',
  'ell': 'ell',
  'eng': 'eng',
  'epo': 'epo',
  'spa': 'spa',
  'est': 'est',
  'baq': 'baq',
  'eus': 'eus',
  'per': 'per',
  'fas': 'fas',
  'ful': 'ful',
  'fin': 'fin',
  'fij': 'fij',
  'fao': 'fao',
  'fre': 'fre',
  'fra': 'fra',
  'fry': 'fry',
  'gle': 'gle',
  'gla': 'gla',
  'glg': 'glg',
  'grn': 'grn',
  'guj': 'guj',
  'glv': 'glv',
  'hau': 'hau',
  'heb': 'heb',
  'hin': 'hin',
  'hmo': 'hmo',
  'hrv': 'hrv',
  'hat': 'hat',
  'hun': 'hun',
  'arm': 'arm',
  'hye': 'hye',
  'her': 'her',
  'ina': 'ina',
  'ind': 'ind',
  'ile': 'ile',
  'ibo': 'ibo',
  'iii': 'iii',
  'ipk': 'ipk',
  'ido': 'ido',
  'ice': 'ice',
  'isl': 'isl',
  'ita': 'ita',
  'iku': 'iku',
  'jpn': 'jpn',
  'jav': 'jav',
  'geo': 'geo',
  'kat': 'kat',
  'kon': 'kon',
  'kik': 'kik',
  'kua': 'kua',
  'kaz': 'kaz',
  'kal': 'kal',
  'khm': 'khm',
  'kan': 'kan',
  'kor': 'kor',
  'kau': 'kau',
  'kas': 'kas',
  'kur': 'kur',
  'kom': 'kom',
  'cor': 'cor',
  'kir': 'kir',
  'lat': 'lat',
  'ltz': 'ltz',
  'lug': 'lug',
  'lim': 'lim',
  'lin': 'lin',
  'lao': 'lao',
  'lit': 'lit',
  'lub': 'lub',
  'lav': 'lav',
  'mlg': 'mlg',
  'mah': 'mah',
  'mao': 'mao',
  'mri': 'mri',
  'mac': 'mac',
  'mkd': 'mkd',
  'mal': 'mal',
  'mon': 'mon',
  'mol': 'mol',
  'mar': 'mar',
  'may': 'may',
  'msa': 'msa',
  'mlt': 'mlt',
  'bur': 'bur',
  'mya': 'mya',
  'nau': 'nau',
  'nob': 'nob',
  'nde': 'nde',
  'nep': 'nep',
  'ndo': 'ndo',
  'dut': 'dut',
  'nld': 'nld',
  'nno': 'nno',
  'nor': 'nor',
  'nbl': 'nbl',
  'nav': 'nav',
  'nya': 'nya',
  'oci': 'oci',
  'oji': 'oji',
  'orm': 'orm',
  'ori': 'ori',
  'oss': 'oss',
  'pan': 'pan',
  'pli': 'pli',
  'pol': 'pol',
  'pus': 'pus',
  'por': 'por',
  'que': 'que',
  'roh': 'roh',
  'run': 'run',
  'rum': 'rum',
  'ron': 'ron',
  'rus': 'rus',
  'kin': 'kin',
  'san': 'san',
  'srd': 'srd',
  'snd': 'snd',
  'sme': 'sme',
  'sag': 'sag',
  'slo': 'slo',
  'sin': 'sin',
  'slk': 'slk',
  'slv': 'slv',
  'smo': 'smo',
  'sna': 'sna',
  'som': 'som',
  'alb': 'alb',
  'sqi': 'sqi',
  'srp': 'srp',
  'ssw': 'ssw',
  'sot': 'sot',
  'sun': 'sun',
  'swe': 'swe',
  'swa': 'swa',
  'tam': 'tam',
  'tel': 'tel',
  'tgk': 'tgk',
  'tha': 'tha',
  'tir': 'tir',
  'tuk': 'tuk',
  'tgl': 'tgl',
  'tsn': 'tsn',
  'ton': 'ton',
  'tur': 'tur',
  'tso': 'tso',
  'tat': 'tat',
  'twi': 'twi',
  'tah': 'tah',
  'uig': 'uig',
  'ukr': 'ukr',
  'urd': 'urd',
  'uzb': 'uzb',
  'ven': 'ven',
  'vie': 'vie',
  'vol': 'vol',
  'wln': 'wln',
  'wol': 'wol',
  'xho': 'xho',
  'yid': 'yid',
  'yor': 'yor',
  'zha': 'zha',
  'chi': 'chi',
  'zho': 'zho',
  'zul': 'zul'
};
var _default = ValidLanguages;
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scorm12 = {
  CMIString256: '^.{0,255}$',
  CMIString4096: '^.{0,4096}$',
  CMITime: '^(?:[01]\\d|2[0123]):(?:[012345]\\d):(?:[012345]\\d)$',
  // eslint-disable-line
  CMITimespan: '^([0-9]{2,}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,2})?$',
  // eslint-disable-line
  CMIInteger: '^\\d+$',
  CMISInteger: '^-?([0-9]+)$',
  CMIDecimal: '^-?([0-9]{0,3})(\.[0-9]*)?$',
  // eslint-disable-line
  CMIIdentifier: "^[\\u0021-\\u007E]{0,255}$",
  CMIFeedback: '^.{0,255}$',
  // This must be redefined
  CMIIndex: '[._](\\d+).',
  // Vocabulary Data Type Definition
  CMIStatus: '^(passed|completed|failed|incomplete|browsed)$',
  CMIStatus2: '^(passed|completed|failed|incomplete|browsed|not attempted)$',
  CMIExit: '^(time-out|suspend|logout|)$',
  CMIType: '^(true-false|choice|fill-in|matching|performance|sequencing|likert|numeric)$',
  CMIResult: '^(correct|wrong|unanticipated|neutral|([0-9]{0,3})?(\\.[0-9]*)?)$',
  // eslint-disable-line
  NAVEvent: '^(previous|continue)$',
  // Data ranges
  score_range: '0#100',
  audio_range: '-1#100',
  speed_range: '-100#100',
  weighting_range: '-100#100',
  text_range: '-1#1'
};

var aicc = _objectSpread(_objectSpread({}, scorm12), {
  CMIIdentifier: '^\\w{1,255}$'
});

var scorm2004 = {
  CMIString200: "^[\\u0000-\\uFFFF]{0,200}$",
  CMIString250: "^[\\u0000-\\uFFFF]{0,250}$",
  CMIString1000: "^[\\u0000-\\uFFFF]{0,1000}$",
  CMIString4000: "^[\\u0000-\\uFFFF]{0,4000}$",
  CMIString64000: "^[\\u0000-\\uFFFF]{0,64000}$",
  CMILang: '^([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?$|^$',
  // eslint-disable-line
  CMILangString250: '^(\{lang=([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?\})?((?!\{.*$).{0,250}$)?$',
  // eslint-disable-line
  CMILangcr: '^((\{lang=([a-zA-Z]{2,3}|i|x)?(\-[a-zA-Z0-9\-]{2,8})?\}))(.*?)$',
  // eslint-disable-line
  CMILangString250cr: '^((\{lang=([a-zA-Z]{2,3}|i|x)?(\-[a-zA-Z0-9\-]{2,8})?\})?(.{0,250})?)?$',
  // eslint-disable-line
  CMILangString4000: '^(\{lang=([a-zA-Z]{2,3}|i|x)(\-[a-zA-Z0-9\-]{2,8})?\})?((?!\{.*$).{0,4000}$)?$',
  // eslint-disable-line
  CMITime: '^(19[7-9]{1}[0-9]{1}|20[0-2]{1}[0-9]{1}|203[0-8]{1})((-(0[1-9]{1}|1[0-2]{1}))((-(0[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1}))(T([0-1]{1}[0-9]{1}|2[0-3]{1})((:[0-5]{1}[0-9]{1})((:[0-5]{1}[0-9]{1})((\\.[0-9]{1,2})((Z|([+|-]([0-1]{1}[0-9]{1}|2[0-3]{1})))(:[0-5]{1}[0-9]{1})?)?)?)?)?)?)?)?$',
  CMITimespan: '^P(?:([.,\\d]+)Y)?(?:([.,\\d]+)M)?(?:([.,\\d]+)W)?(?:([.,\\d]+)D)?(?:T?(?:([.,\\d]+)H)?(?:([.,\\d]+)M)?(?:([.,\\d]+)S)?)?$',
  CMIInteger: '^\\d+$',
  CMISInteger: '^-?([0-9]+)$',
  CMIDecimal: '^-?([0-9]{1,5})(\\.[0-9]{1,18})?$',
  CMIIdentifier: '^\\S{1,250}[a-zA-Z0-9]$',
  CMIShortIdentifier: '^[\\w\\.\\-\\_]{1,250}$',
  // eslint-disable-line
  CMILongIdentifier: '^(?:(?!urn:)\\S{1,4000}|urn:[A-Za-z0-9-]{1,31}:\\S{1,4000}|.{1,4000})$',
  // need to re-examine this
  CMIFeedback: '^.*$',
  // This must be redefined
  CMIIndex: '[._](\\d+).',
  CMIIndexStore: '.N(\\d+).',
  // Vocabulary Data Type Definition
  CMICStatus: '^(completed|incomplete|not attempted|unknown)$',
  CMISStatus: '^(passed|failed|unknown)$',
  CMIExit: '^(time-out|suspend|logout|normal)$',
  CMIType: '^(true-false|choice|fill-in|long-fill-in|matching|performance|sequencing|likert|numeric|other)$',
  CMIResult: '^(correct|wrong|unanticipated|neutral|-?([0-9]{1,4})(\\.[0-9]{1,18})?)$',
  NAVEvent: '^(previous|continue|exit|exitAll|abandon|abandonAll|suspendAll|\{target=\\S{0,200}[a-zA-Z0-9]\}choice|jump)$',
  // eslint-disable-line
  NAVBoolean: '^(unknown|true|false$)',
  NAVTarget: '^(previous|continue|choice.{target=\\S{0,200}[a-zA-Z0-9]})$',
  // Data ranges
  scaled_range: '-1#1',
  audio_range: '0#*',
  speed_range: '0#*',
  text_range: '-1#1',
  progress_range: '0#1'
};
var Regex = {
  aicc: aicc,
  scorm12: scorm12,
  scorm2004: scorm2004
};
var _default = Regex;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regex = _interopRequireDefault(require("./regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scorm2004_regex = _regex["default"].scorm2004;
var learner = {
  'true-false': {
    format: '^true$|^false$',
    max: 1,
    delimiter: '',
    unique: false
  },
  'choice': {
    format: scorm2004_regex.CMIShortIdentifier,
    max: 36,
    delimiter: '[,]',
    unique: true
  },
  'fill-in': {
    format: scorm2004_regex.CMILangString250,
    max: 10,
    delimiter: '[,]',
    unique: false
  },
  'long-fill-in': {
    format: scorm2004_regex.CMILangString4000,
    max: 1,
    delimiter: '',
    unique: false
  },
  'matching': {
    format: scorm2004_regex.CMIShortIdentifier,
    format2: scorm2004_regex.CMIShortIdentifier,
    max: 36,
    delimiter: '[,]',
    delimiter2: '[.]',
    unique: false
  },
  'performance': {
    format: '^$|' + scorm2004_regex.CMIShortIdentifier,
    format2: scorm2004_regex.CMIDecimal + '|^$|' + scorm2004_regex.CMIShortIdentifier,
    max: 250,
    delimiter: '[,]',
    delimiter2: '[.]',
    unique: false
  },
  'sequencing': {
    format: scorm2004_regex.CMIShortIdentifier,
    max: 36,
    delimiter: '[,]',
    unique: false
  },
  'likert': {
    format: scorm2004_regex.CMIShortIdentifier,
    max: 1,
    delimiter: '',
    unique: false
  },
  'numeric': {
    format: scorm2004_regex.CMIDecimal,
    max: 1,
    delimiter: '',
    unique: false
  },
  'other': {
    format: scorm2004_regex.CMIString4000,
    max: 1,
    delimiter: '',
    unique: false
  }
};
var correct = {
  'true-false': {
    max: 1,
    delimiter: '',
    unique: false,
    duplicate: false,
    format: '^true$|^false$',
    limit: 1
  },
  'choice': {
    max: 36,
    delimiter: '[,]',
    unique: true,
    duplicate: false,
    format: scorm2004_regex.CMIShortIdentifier
  },
  'fill-in': {
    max: 10,
    delimiter: '[,]',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMILangString250cr
  },
  'long-fill-in': {
    max: 1,
    delimiter: '',
    unique: false,
    duplicate: true,
    format: scorm2004_regex.CMILangString4000
  },
  'matching': {
    max: 36,
    delimiter: '[,]',
    delimiter2: '[.]',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMIShortIdentifier,
    format2: scorm2004_regex.CMIShortIdentifier
  },
  'performance': {
    max: 250,
    delimiter: '[,]',
    delimiter2: '[.]',
    unique: false,
    duplicate: false,
    format: '^$|' + scorm2004_regex.CMIShortIdentifier,
    format2: scorm2004_regex.CMIDecimal + '|^$|' + scorm2004_regex.CMIShortIdentifier
  },
  'sequencing': {
    max: 36,
    delimiter: '[,]',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMIShortIdentifier
  },
  'likert': {
    max: 1,
    delimiter: '',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMIShortIdentifier,
    limit: 1
  },
  'numeric': {
    max: 2,
    delimiter: '[:]',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMIDecimal,
    limit: 1
  },
  'other': {
    max: 1,
    delimiter: '',
    unique: false,
    duplicate: false,
    format: scorm2004_regex.CMIString4000,
    limit: 1
  }
};
var Responses = {
  learner: learner,
  correct: correct
};
var _default = Responses;
exports["default"] = _default;

},{"./regex":12}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationError = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * Data Validation Exception
 */
var ValidationError = /*#__PURE__*/function (_Error) {
  _inherits(ValidationError, _Error);

  var _super = _createSuper(ValidationError);

  /**
   * Constructor to take in an error message and code
   * @param {number} errorCode
   */
  function ValidationError(errorCode) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _super.call(this, errorCode);

    _errorCode.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _errorCode, errorCode);

    return _this;
  }

  _createClass(ValidationError, [{
    key: "errorCode",

    /**
     * Getter for #errorCode
     * @return {number}
     */
    get: function get() {
      return _classPrivateFieldGet(this, _errorCode);
    }
    /**
     * Trying to override the default Error message
     * @return {string}
     */

  }, {
    key: "message",
    get: function get() {
      return _classPrivateFieldGet(this, _errorCode) + '';
    }
  }]);

  return ValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.ValidationError = ValidationError;

var _errorCode = new WeakMap();

},{}],15:[function(require,module,exports){
"use strict";

var _Scorm2004API = _interopRequireDefault(require("./Scorm2004API"));

var _Scorm12API = _interopRequireDefault(require("./Scorm12API"));

var _AICC = _interopRequireDefault(require("./AICC"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.Scorm12API = _Scorm12API["default"];
window.Scorm2004API = _Scorm2004API["default"];
window.AICC = _AICC["default"];

},{"./AICC":1,"./Scorm12API":3,"./Scorm2004API":4}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecondsAsHHMMSS = getSecondsAsHHMMSS;
exports.getSecondsAsISODuration = getSecondsAsISODuration;
exports.getTimeAsSeconds = getTimeAsSeconds;
exports.getDurationAsSeconds = getDurationAsSeconds;
exports.addTwoDurations = addTwoDurations;
exports.addHHMMSSTimeStrings = addHHMMSSTimeStrings;
exports.flatten = flatten;
exports.unflatten = unflatten;
exports.countDecimals = countDecimals;
exports.SECONDS_PER_DAY = exports.SECONDS_PER_HOUR = exports.SECONDS_PER_MINUTE = exports.SECONDS_PER_SECOND = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SECONDS_PER_SECOND = 1.0;
exports.SECONDS_PER_SECOND = SECONDS_PER_SECOND;
var SECONDS_PER_MINUTE = 60;
exports.SECONDS_PER_MINUTE = SECONDS_PER_MINUTE;
var SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
exports.SECONDS_PER_HOUR = SECONDS_PER_HOUR;
var SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;
exports.SECONDS_PER_DAY = SECONDS_PER_DAY;
var designations = [['D', SECONDS_PER_DAY], ['H', SECONDS_PER_HOUR], ['M', SECONDS_PER_MINUTE], ['S', SECONDS_PER_SECOND]];
/**
 * Converts a Number to a String of HH:MM:SS
 *
 * @param {Number} totalSeconds
 * @return {string}
 */

function getSecondsAsHHMMSS(totalSeconds) {
  // SCORM spec does not deal with negative durations, give zero back
  if (!totalSeconds || totalSeconds <= 0) {
    return '00:00:00';
  }

  var hours = Math.floor(totalSeconds / SECONDS_PER_HOUR);
  var dateObj = new Date(totalSeconds * 1000);
  var minutes = dateObj.getUTCMinutes(); // make sure we add any possible decimal value

  var seconds = dateObj.getSeconds();
  var ms = totalSeconds % 1.0;
  var msStr = '';

  if (countDecimals(ms) > 0) {
    if (countDecimals(ms) > 2) {
      msStr = ms.toFixed(2);
    } else {
      msStr = String(ms);
    }

    msStr = '.' + msStr.split('.')[1];
  }

  return (hours + ':' + minutes + ':' + seconds).replace(/\b\d\b/g, '0$&') + msStr;
}
/**
 * Calculate the number of seconds from ISO 8601 Duration
 *
 * @param {Number} seconds
 * @return {String}
 */


function getSecondsAsISODuration(seconds) {
  // SCORM spec does not deal with negative durations, give zero back
  if (!seconds || seconds <= 0) {
    return 'PT0S';
  }

  var duration = 'P';
  var remainder = seconds;
  designations.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        sign = _ref2[0],
        current_seconds = _ref2[1];

    var value = Math.floor(remainder / current_seconds);
    remainder = remainder % current_seconds;

    if (countDecimals(remainder) > 2) {
      remainder = Number(Number(remainder).toFixed(2));
    } // If we have anything left in the remainder, and we're currently adding
    // seconds to the duration, go ahead and add the decimal to the seconds


    if (sign === 'S' && remainder > 0) {
      value += remainder;
    }

    if (value) {
      if ((duration.indexOf('D') > 0 || sign === 'H' || sign === 'M' || sign === 'S') && duration.indexOf('T') === -1) {
        duration += 'T';
      }

      duration += "".concat(value).concat(sign);
    }
  });
  return duration;
}
/**
 * Calculate the number of seconds from HH:MM:SS.DDDDDD
 *
 * @param {string} timeString
 * @param {RegExp} timeRegex
 * @return {number}
 */


function getTimeAsSeconds(timeString, timeRegex) {
  if (!timeString || typeof timeString !== 'string' || !timeString.match(timeRegex)) {
    return 0;
  }

  var parts = timeString.split(':');
  var hours = Number(parts[0]);
  var minutes = Number(parts[1]);
  var seconds = Number(parts[2]);
  return hours * 3600 + minutes * 60 + seconds;
}
/**
 * Calculate the number of seconds from ISO 8601 Duration
 *
 * @param {string} duration
 * @param {RegExp} durationRegex
 * @return {number}
 */


function getDurationAsSeconds(duration, durationRegex) {
  if (!duration || !duration.match(durationRegex)) {
    return 0;
  }

  var _ref3 = new RegExp(durationRegex).exec(duration) || [],
      _ref4 = _slicedToArray(_ref3, 8),
      years = _ref4[1],
      months = _ref4[2],
      days = _ref4[4],
      hours = _ref4[5],
      minutes = _ref4[6],
      seconds = _ref4[7];

  var result = 0.0;
  result += Number(seconds) * 1.0 || 0.0;
  result += Number(minutes) * 60.0 || 0.0;
  result += Number(hours) * 3600.0 || 0.0;
  result += Number(days) * (60 * 60 * 24.0) || 0.0;
  result += Number(years) * (60 * 60 * 24 * 365.0) || 0.0;
  return result;
}
/**
 * Adds together two ISO8601 Duration strings
 *
 * @param {string} first
 * @param {string} second
 * @param {RegExp} durationRegex
 * @return {string}
 */


function addTwoDurations(first, second, durationRegex) {
  return getSecondsAsISODuration(getDurationAsSeconds(first, durationRegex) + getDurationAsSeconds(second, durationRegex));
}
/**
 * Add together two HH:MM:SS.DD strings
 *
 * @param {string} first
 * @param {string} second
 * @param {RegExp} timeRegex
 * @return {string}
 */


function addHHMMSSTimeStrings(first, second, timeRegex) {
  return getSecondsAsHHMMSS(getTimeAsSeconds(first, timeRegex) + getTimeAsSeconds(second, timeRegex));
}
/**
 * Flatten a JSON object down to string paths for each values
 * @param {object} data
 * @return {object}
 */


function flatten(data) {
  var result = {};
  /**
   * Recurse through the object
   * @param {*} cur
   * @param {*} prop
   */

  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], prop + '[' + i + ']');
        if (l === 0) result[prop] = [];
      }
    } else {
      var isEmpty = true;

      for (var p in cur) {
        if ({}.hasOwnProperty.call(cur, p)) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + '.' + p : p);
        }
      }

      if (isEmpty && prop) result[prop] = {};
    }
  }

  recurse(data, '');
  return result;
}
/**
 * Un-flatten a flat JSON object
 * @param {object} data
 * @return {object}
 */


function unflatten(data) {
  'use strict';

  if (Object(data) !== data || Array.isArray(data)) return data;
  var regex = /\.?([^.[\]]+)|\[(\d+)]/g;
  var result = {};

  for (var p in data) {
    if ({}.hasOwnProperty.call(data, p)) {
      var cur = result;
      var prop = '';
      var m = regex.exec(p);

      while (m) {
        cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
        prop = m[2] || m[1];
        m = regex.exec(p);
      }

      cur[prop] = data[p];
    }
  }

  return result[''] || result;
}
/**
 * Counts the number of decimal places
 * @param {number} num
 * @return {number}
 */


function countDecimals(num) {
  if (Math.floor(num) === num || String(num).indexOf('.') < 0) return 0;
  var parts = num.toString().split('.')[1];
  return parts.length || 0;
}

},{}]},{},[1,2,5,6,7,8,9,10,11,12,13,14,15,3,4,16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQUlDQy5qcyIsInNyYy9CYXNlQVBJLmpzIiwic3JjL1Njb3JtMTJBUEkuanMiLCJzcmMvU2Nvcm0yMDA0QVBJLmpzIiwic3JjL2NtaS9haWNjX2NtaS5qcyIsInNyYy9jbWkvY29tbW9uLmpzIiwic3JjL2NtaS9zY29ybTEyX2NtaS5qcyIsInNyYy9jbWkvc2Nvcm0yMDA0X2NtaS5qcyIsInNyYy9jb25zdGFudHMvYXBpX2NvbnN0YW50cy5qcyIsInNyYy9jb25zdGFudHMvZXJyb3JfY29kZXMuanMiLCJzcmMvY29uc3RhbnRzL2xhbmd1YWdlX2NvbnN0YW50cy5qcyIsInNyYy9jb25zdGFudHMvcmVnZXguanMiLCJzcmMvY29uc3RhbnRzL3Jlc3BvbnNlX2NvbnN0YW50cy5qcyIsInNyYy9leGNlcHRpb25zLmpzIiwic3JjL2V4cG9ydHMuanMiLCJzcmMvdXRpbGl0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0NBOztBQUNBOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCLEk7Ozs7O0FBQ25COzs7O0FBSUEsZ0JBQVksUUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4QixRQUFNLGFBQWEsbUNBQ2Q7QUFDRCxNQUFBLGdCQUFnQixFQUFFO0FBRGpCLEtBRGMsR0FHWCxRQUhXLENBQW5COztBQU1BLDhCQUFNLGFBQU47QUFFQSxVQUFLLEdBQUwsR0FBVyxJQUFJLGFBQUosRUFBWDtBQUNBLFVBQUssR0FBTCxHQUFXLElBQUksZ0JBQUosRUFBWDtBQVZ3QjtBQVd6QjtBQUVEOzs7Ozs7Ozs7Ozs7b0NBUWdCLFUsRUFBWSxLLEVBQU8sZSxFQUFpQjtBQUNsRCxVQUFJLFFBQVEsNkVBQXlCLFVBQXpCLEVBQXFDLEtBQXJDLEVBQTRDLGVBQTVDLENBQVo7O0FBRUEsVUFBSSxDQUFDLFFBQUwsRUFBZTtBQUNiLFlBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQStCLG1DQUEvQixDQUFKLEVBQXlFO0FBQ3ZFLFVBQUEsUUFBUSxHQUFHLElBQUkscUNBQUosRUFBWDtBQUNELFNBRkQsTUFFTyxJQUFJLEtBQUssYUFBTCxDQUFtQixVQUFuQixFQUNQLGtDQURPLENBQUosRUFDa0M7QUFDdkMsVUFBQSxRQUFRLEdBQUcsSUFBSSx3QkFBSixFQUFYO0FBQ0QsU0FITSxNQUdBLElBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQ1AsNENBRE8sQ0FBSixFQUM0QztBQUNqRCxVQUFBLFFBQVEsR0FBRyxJQUFJLGlDQUFKLEVBQVg7QUFDRDtBQUNGOztBQUVELGFBQU8sUUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OytDQUsyQixNLEVBQVE7QUFDakM7QUFDQSxXQUFLLEdBQUwsR0FBVyxNQUFNLENBQUMsR0FBbEI7QUFDQSxXQUFLLEdBQUwsR0FBVyxNQUFNLENBQUMsR0FBbEI7QUFDRDs7OztFQXJEK0IsdUI7Ozs7Ozs7Ozs7OztBQ1psQzs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixHQUFHLDBCQUFhLE1BQXRDO0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyx5QkFBVyxPQUF2QztBQUVBOzs7OztJQUlxQixPO0FBZW5COzs7Ozs7QUFNQSxtQkFBWSxXQUFaLEVBQXlCLFFBQXpCLEVBQW1DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBbEJ2QjtBQUNWLFFBQUEsVUFBVSxFQUFFLEtBREY7QUFFVixRQUFBLGlCQUFpQixFQUFFLEVBRlQ7QUFHVixRQUFBLFlBQVksRUFBRSxLQUhKO0FBSVYsUUFBQSxnQkFBZ0IsRUFBRSxNQUpSO0FBSWdCO0FBQzFCLFFBQUEscUJBQXFCLEVBQUUsZ0NBTGI7QUFNVixRQUFBLFlBQVksRUFBRSxLQU5KO0FBT1YsUUFBQSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7QUFQakI7QUFrQnVCOztBQUFBOztBQUFBOztBQUNqQyxRQUFJLDBEQUFlLE9BQW5CLEVBQTRCO0FBQzFCLFlBQU0sSUFBSSxTQUFKLENBQWMsNkNBQWQsQ0FBTjtBQUNEOztBQUNELFNBQUssWUFBTCxHQUFvQixnQkFBZ0IsQ0FBQyxxQkFBckM7QUFDQSxTQUFLLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxTQUFLLGFBQUwsR0FBcUIsRUFBckI7O0FBRUEsMENBQWdCLElBQWhCOztBQUNBLDhDQUFvQixXQUFwQjs7QUFFQSxTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsS0FBSyxRQUFMLENBQWMsUUFBakM7QUFDRDtBQUVEOzs7Ozs7Ozs7OzsrQkFRSSxZLEVBQ0EsaUIsRUFDQSxrQixFQUE2QjtBQUMvQixVQUFJLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFuQzs7QUFFQSxVQUFJLEtBQUssYUFBTCxFQUFKLEVBQTBCO0FBQ3hCLGFBQUssZUFBTCxDQUFxQiwwQ0FBa0IsV0FBdkMsRUFBb0QsaUJBQXBEO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBSyxZQUFMLEVBQUosRUFBeUI7QUFDOUIsYUFBSyxlQUFMLENBQXFCLDBDQUFrQixVQUF2QyxFQUFtRCxrQkFBbkQ7QUFDRCxPQUZNLE1BRUE7QUFDTCxhQUFLLFlBQUwsR0FBb0IsZ0JBQWdCLENBQUMsaUJBQXJDO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsUUFBQSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsVUFBL0I7QUFDQSxhQUFLLGdCQUFMLENBQXNCLFlBQXRCO0FBQ0Q7O0FBRUQsV0FBSyxNQUFMLENBQVksWUFBWixFQUEwQixJQUExQixFQUFnQyxlQUFlLFdBQS9DLEVBQ0ksZ0JBQWdCLENBQUMsY0FEckI7QUFFQSxXQUFLLGVBQUwsQ0FBcUIsV0FBckI7QUFFQSxhQUFPLFdBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQWdCQTs7Ozs7OzhCQU9JLFksRUFDQSxlLEVBQTBCO0FBQzVCLFVBQUksV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQW5DOztBQUVBLFVBQUksS0FBSyxVQUFMLENBQWdCLGVBQWhCLEVBQ0EsMENBQWtCLHVCQURsQixFQUVBLDBDQUFrQixvQkFGbEIsQ0FBSixFQUU2QztBQUMzQyxhQUFLLFlBQUwsR0FBb0IsZ0JBQWdCLENBQUMsZ0JBQXJDO0FBRUEsWUFBTSxNQUFNLEdBQUcsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFmOztBQUNBLFlBQUksTUFBTSxDQUFDLFNBQVAsSUFBb0IsTUFBTSxDQUFDLFNBQVAsR0FBbUIsQ0FBM0MsRUFBOEM7QUFDNUMsZUFBSyxlQUFMLENBQXFCLE1BQU0sQ0FBQyxTQUE1QjtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFQLEdBQ1YsTUFBTSxDQUFDLE1BREcsR0FDTSxnQkFBZ0IsQ0FBQyxXQURyQztBQUdBLFlBQUksZUFBSixFQUFxQixLQUFLLGFBQUwsR0FBcUIsQ0FBckI7QUFFckIsUUFBQSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsVUFBL0I7QUFDQSxhQUFLLGdCQUFMLENBQXNCLFlBQXRCO0FBQ0Q7O0FBRUQsV0FBSyxNQUFMLENBQVksWUFBWixFQUEwQixJQUExQixFQUFnQyxlQUFlLFdBQS9DLEVBQ0ksZ0JBQWdCLENBQUMsY0FEckI7QUFFQSxXQUFLLGVBQUwsQ0FBcUIsV0FBckI7QUFFQSxhQUFPLFdBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs2QkFTSSxZLEVBQ0EsZSxFQUNBLFUsRUFBb0I7QUFDdEIsVUFBSSxXQUFKOztBQUVBLFVBQUksS0FBSyxVQUFMLENBQWdCLGVBQWhCLEVBQ0EsMENBQWtCLG9CQURsQixFQUVBLDBDQUFrQixtQkFGbEIsQ0FBSixFQUU0QztBQUMxQyxZQUFJLGVBQUosRUFBcUIsS0FBSyxhQUFMLEdBQXFCLENBQXJCO0FBQ3JCLFFBQUEsV0FBVyxHQUFHLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUFkO0FBQ0EsYUFBSyxnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxVQUFwQztBQUNEOztBQUVELFdBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsVUFBMUIsRUFBc0MsaUJBQWlCLFdBQXZELEVBQ0ksZ0JBQWdCLENBQUMsY0FEckI7QUFFQSxXQUFLLGVBQUwsQ0FBcUIsV0FBckI7QUFFQSxhQUFPLFdBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7NkJBVUksWSxFQUNBLGUsRUFDQSxVLEVBQ0EsSyxFQUFPO0FBQ1QsVUFBSSxLQUFLLEtBQUssU0FBZCxFQUF5QjtBQUN2QixRQUFBLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsVUFBSSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBbkM7O0FBRUEsVUFBSSxLQUFLLFVBQUwsQ0FBZ0IsZUFBaEIsRUFBaUMsMENBQWtCLGlCQUFuRCxFQUNBLDBDQUFrQixnQkFEbEIsQ0FBSixFQUN5QztBQUN2QyxZQUFJLGVBQUosRUFBcUIsS0FBSyxhQUFMLEdBQXFCLENBQXJCOztBQUNyQixZQUFJO0FBQ0YsVUFBQSxXQUFXLEdBQUcsS0FBSyxXQUFMLENBQWlCLFVBQWpCLEVBQTZCLEtBQTdCLENBQWQ7QUFDRCxTQUZELENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixjQUFJLENBQUMsWUFBWSwyQkFBakIsRUFBa0M7QUFDaEMsaUJBQUssYUFBTCxHQUFxQixDQUFDLENBQUMsU0FBdkI7QUFDQSxZQUFBLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUEvQjtBQUNELFdBSEQsTUFHTztBQUNMLGdCQUFJLENBQUMsQ0FBQyxPQUFOLEVBQWU7QUFDYixjQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsQ0FBQyxDQUFDLE9BQWhCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsY0FBQSxPQUFPLENBQUMsS0FBUixDQUFjLENBQWQ7QUFDRDs7QUFDRCxpQkFBSyxlQUFMLENBQXFCLDBDQUFrQixPQUF2QztBQUNEO0FBQ0Y7O0FBQ0QsYUFBSyxnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxVQUFwQyxFQUFnRCxLQUFoRDtBQUNEOztBQUVELFVBQUksV0FBVyxLQUFLLFNBQXBCLEVBQStCO0FBQzdCLFFBQUEsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQS9CO0FBQ0QsT0E3QlEsQ0ErQlQ7QUFDQTs7O0FBQ0EsVUFBSSxNQUFNLENBQUMsS0FBSyxhQUFOLENBQU4sS0FBK0IsR0FBbkMsRUFBd0M7QUFDdEMsWUFBSSxLQUFLLFFBQUwsQ0FBYyxVQUFkLElBQTRCLHVCQUFDLElBQUQsV0FBaEMsRUFBZ0Q7QUFDOUMsZUFBSyxjQUFMLENBQW9CLEtBQUssUUFBTCxDQUFjLGlCQUFkLEdBQWtDLElBQXREO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLFVBQTFCLEVBQ0ksT0FBTyxLQUFQLEdBQWUsWUFBZixHQUE4QixXQURsQyxFQUVJLGdCQUFnQixDQUFDLGNBRnJCO0FBR0EsV0FBSyxlQUFMLENBQXFCLFdBQXJCO0FBRUEsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzJCQU9JLFksRUFDQSxlLEVBQTBCO0FBQzVCLFdBQUssb0JBQUw7QUFFQSxVQUFJLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFuQzs7QUFFQSxVQUFJLEtBQUssVUFBTCxDQUFnQixlQUFoQixFQUFpQywwQ0FBa0Isa0JBQW5ELEVBQ0EsMENBQWtCLGlCQURsQixDQUFKLEVBQzBDO0FBQ3hDLFlBQU0sTUFBTSxHQUFHLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBZjs7QUFDQSxZQUFJLE1BQU0sQ0FBQyxTQUFQLElBQW9CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLENBQTNDLEVBQThDO0FBQzVDLGVBQUssZUFBTCxDQUFxQixNQUFNLENBQUMsU0FBNUI7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBUCxHQUNWLE1BQU0sQ0FBQyxNQURHLEdBQ00sZ0JBQWdCLENBQUMsV0FEckM7QUFHQSxhQUFLLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLGFBQTFCLEVBQXlDLGNBQWMsV0FBdkQsRUFDSSxnQkFBZ0IsQ0FBQyxlQURyQjtBQUdBLFlBQUksZUFBSixFQUFxQixLQUFLLGFBQUwsR0FBcUIsQ0FBckI7QUFFckIsYUFBSyxnQkFBTCxDQUFzQixZQUF0QjtBQUNEOztBQUVELFdBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0MsZUFBZSxXQUEvQyxFQUNJLGdCQUFnQixDQUFDLGNBRHJCO0FBRUEsV0FBSyxlQUFMLENBQXFCLFdBQXJCO0FBRUEsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7aUNBS2EsWSxFQUFzQjtBQUNqQyxVQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxhQUFOLENBQTFCO0FBRUEsV0FBSyxnQkFBTCxDQUFzQixZQUF0QjtBQUVBLFdBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0MsZUFBZSxXQUEvQyxFQUNJLGdCQUFnQixDQUFDLGNBRHJCO0FBR0EsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzttQ0FPZSxZLEVBQXNCLFksRUFBYztBQUNqRCxVQUFJLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxVQUFJLFlBQVksS0FBSyxJQUFqQixJQUF5QixZQUFZLEtBQUssRUFBOUMsRUFBa0Q7QUFDaEQsUUFBQSxXQUFXLEdBQUcsS0FBSyx5QkFBTCxDQUErQixZQUEvQixDQUFkO0FBQ0EsYUFBSyxnQkFBTCxDQUFzQixZQUF0QjtBQUNEOztBQUVELFdBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0MsZUFBZSxXQUEvQyxFQUNJLGdCQUFnQixDQUFDLGNBRHJCO0FBR0EsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztrQ0FPYyxZLEVBQXNCLFksRUFBYztBQUNoRCxVQUFJLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxVQUFJLFlBQVksS0FBSyxJQUFqQixJQUF5QixZQUFZLEtBQUssRUFBOUMsRUFBa0Q7QUFDaEQsUUFBQSxXQUFXLEdBQUcsS0FBSyx5QkFBTCxDQUErQixZQUEvQixFQUE2QyxJQUE3QyxDQUFkO0FBQ0EsYUFBSyxnQkFBTCxDQUFzQixZQUF0QjtBQUNEOztBQUVELFdBQUssTUFBTCxDQUFZLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0MsZUFBZSxXQUEvQyxFQUNJLGdCQUFnQixDQUFDLGNBRHJCO0FBR0EsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7K0JBU0ksZSxFQUNBLGUsRUFDQSxjLEVBQXlCO0FBQzNCLFVBQUksS0FBSyxnQkFBTCxFQUFKLEVBQTZCO0FBQzNCLGFBQUssZUFBTCxDQUFxQixlQUFyQjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BSEQsTUFHTyxJQUFJLGVBQWUsSUFBSSxLQUFLLFlBQUwsRUFBdkIsRUFBNEM7QUFDakQsYUFBSyxlQUFMLENBQXFCLGNBQXJCO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7MkJBU0ksWSxFQUNBLFUsRUFDQSxVLEVBQ0EsWSxFQUFzQjtBQUN4QixNQUFBLFVBQVUsR0FBRyxLQUFLLGFBQUwsQ0FBbUIsWUFBbkIsRUFBaUMsVUFBakMsRUFBNkMsVUFBN0MsQ0FBYjs7QUFFQSxVQUFJLFlBQVksSUFBSSxLQUFLLFdBQXpCLEVBQXNDO0FBQ3BDLGdCQUFRLFlBQVI7QUFDRSxlQUFLLGdCQUFnQixDQUFDLGVBQXRCO0FBQ0UsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQ7QUFDQTs7QUFDRixlQUFLLGdCQUFnQixDQUFDLGlCQUF0QjtBQUNFLFlBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxVQUFiO0FBQ0E7O0FBQ0YsZUFBSyxnQkFBZ0IsQ0FBQyxjQUF0QjtBQUNFLFlBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxVQUFiO0FBQ0E7O0FBQ0YsZUFBSyxnQkFBZ0IsQ0FBQyxlQUF0QjtBQUNFLGdCQUFJLE9BQU8sQ0FBQyxLQUFaLEVBQW1CO0FBQ2pCLGNBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxVQUFkO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsY0FBQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVo7QUFDRDs7QUFDRDtBQWhCSjtBQWtCRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjLFksRUFBc0IsVSxFQUFvQixPLEVBQWlCO0FBQ3ZFLFVBQU0sVUFBVSxHQUFHLEVBQW5CO0FBQ0EsVUFBSSxhQUFhLEdBQUcsRUFBcEI7QUFFQSxNQUFBLGFBQWEsSUFBSSxZQUFqQjtBQUVBLFVBQUksU0FBUyxHQUFHLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBM0M7O0FBRUEsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxTQUFwQixFQUErQixDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQUEsYUFBYSxJQUFJLEdBQWpCO0FBQ0Q7O0FBRUQsTUFBQSxhQUFhLElBQUksSUFBakI7O0FBRUEsVUFBSSxVQUFKLEVBQWdCO0FBQ2QsWUFBTSxvQkFBb0IsR0FBRyxFQUE3QjtBQUVBLFFBQUEsYUFBYSxJQUFJLFVBQWpCO0FBRUEsUUFBQSxTQUFTLEdBQUcsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLE1BQWpEOztBQUVBLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsU0FBcEIsRUFBK0IsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxVQUFBLGFBQWEsSUFBSSxHQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFDWCxRQUFBLGFBQWEsSUFBSSxPQUFqQjtBQUNEOztBQUVELGFBQU8sYUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7a0NBT2MsRyxFQUFhLE0sRUFBZ0I7QUFDekMsYUFBTyxHQUFHLElBQUksTUFBUCxJQUFpQixHQUFHLENBQUMsS0FBSixDQUFVLE1BQVYsQ0FBeEI7QUFDRDtBQUVEOzs7Ozs7Ozs7OzRDQU93QixTLEVBQVcsUyxFQUFtQjtBQUNwRCxhQUFPLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQXRCLENBQTJCLFNBQTNCLEVBQXNDLFNBQXRDLEtBQ0gsTUFBTSxDQUFDLHdCQUFQLENBQ0ksTUFBTSxDQUFDLGNBQVAsQ0FBc0IsU0FBdEIsQ0FESixFQUNzQyxTQUR0QyxDQURHLElBR0YsU0FBUyxJQUFJLFNBSGxCO0FBSUQ7QUFFRDs7Ozs7Ozs7Ozs7OzhDQVMwQixZLEVBQWMsTyxFQUFTO0FBQy9DLFlBQU0sSUFBSSxLQUFKLENBQ0YsK0RBREUsQ0FBTjtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7O2dDQVFZLFcsRUFBYTtBQUN2QixZQUFNLElBQUksS0FBSixDQUFVLGlEQUFWLENBQU47QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Z0NBU1ksVyxFQUFhLE0sRUFBUTtBQUMvQixZQUFNLElBQUksS0FBSixDQUFVLGlEQUFWLENBQU47QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7dUNBVUksVSxFQUFvQixTLEVBQW9CLFUsRUFBWSxLLEVBQU87QUFDN0QsVUFBSSxDQUFDLFVBQUQsSUFBZSxVQUFVLEtBQUssRUFBbEMsRUFBc0M7QUFDcEMsZUFBTyxnQkFBZ0IsQ0FBQyxXQUF4QjtBQUNEOztBQUVELFVBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFYLENBQWlCLEdBQWpCLENBQWxCO0FBQ0EsVUFBSSxTQUFTLEdBQUcsSUFBaEI7QUFDQSxVQUFJLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFuQztBQUNBLFVBQUksZUFBZSxHQUFHLEtBQXRCO0FBRUEsVUFBTSxtQkFBbUIsOENBQXVDLFVBQXZDLGVBQXNELFVBQXRELCtDQUF6QjtBQUNBLFVBQU0sZ0JBQWdCLEdBQUcsU0FBUyxHQUM5QiwwQ0FBa0Isb0JBRFksR0FFOUIsMENBQWtCLE9BRnRCOztBQUlBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQTlCLEVBQXNDLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUQsQ0FBM0I7O0FBRUEsWUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQVYsR0FBbUIsQ0FBN0IsRUFBZ0M7QUFDOUIsY0FBSSxTQUFTLElBQUssU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsTUFBMkIsVUFBekMsSUFDQyxPQUFPLFNBQVMsQ0FBQyxjQUFqQixJQUFtQyxVQUR4QyxFQUNxRDtBQUNuRCxpQkFBSyxlQUFMLENBQXFCLDBDQUFrQixpQkFBdkM7QUFDRCxXQUhELE1BR08sSUFBSSxDQUFDLEtBQUssdUJBQUwsQ0FBNkIsU0FBN0IsRUFBd0MsU0FBeEMsQ0FBTCxFQUF5RDtBQUM5RCxpQkFBSyxlQUFMLENBQXFCLGdCQUFyQixFQUF1QyxtQkFBdkM7QUFDRCxXQUZNLE1BRUE7QUFDTCxnQkFBSSxLQUFLLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0IsNEJBQS9CLENBQUosRUFBa0U7QUFDaEUsbUJBQUssdUJBQUwsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBekM7QUFDRDs7QUFFRCxnQkFBSSxDQUFDLFNBQUQsSUFBYyxLQUFLLGFBQUwsS0FBdUIsQ0FBekMsRUFBNEM7QUFDMUMsY0FBQSxTQUFTLENBQUMsU0FBRCxDQUFULEdBQXVCLEtBQXZCO0FBQ0EsY0FBQSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsVUFBL0I7QUFDRDtBQUNGO0FBQ0YsU0FoQkQsTUFnQk87QUFDTCxVQUFBLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxjQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkLGlCQUFLLGVBQUwsQ0FBcUIsZ0JBQXJCLEVBQXVDLG1CQUF2QztBQUNBO0FBQ0Q7O0FBRUQsY0FBSSxTQUFTLFlBQVksZ0JBQXpCLEVBQW1DO0FBQ2pDLGdCQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQVYsRUFBbUIsRUFBbkIsQ0FBdEIsQ0FEaUMsQ0FHakM7O0FBQ0EsZ0JBQUksQ0FBQyxLQUFLLENBQUMsS0FBRCxDQUFWLEVBQW1CO0FBQ2pCLGtCQUFNLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVixDQUFxQixLQUFyQixDQUFiOztBQUVBLGtCQUFJLElBQUosRUFBVTtBQUNSLGdCQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0EsZ0JBQUEsZUFBZSxHQUFHLElBQWxCO0FBQ0QsZUFIRCxNQUdPO0FBQ0wsb0JBQU0sUUFBUSxHQUFHLEtBQUssZUFBTCxDQUFxQixVQUFyQixFQUFpQyxLQUFqQyxFQUNiLGVBRGEsQ0FBakI7QUFFQSxnQkFBQSxlQUFlLEdBQUcsSUFBbEI7O0FBRUEsb0JBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYix1QkFBSyxlQUFMLENBQXFCLGdCQUFyQixFQUF1QyxtQkFBdkM7QUFDRCxpQkFGRCxNQUVPO0FBQ0wsc0JBQUksU0FBUyxDQUFDLFdBQWQsRUFBMkIsUUFBUSxDQUFDLFVBQVQ7QUFFM0Isa0JBQUEsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsSUFBckIsQ0FBMEIsUUFBMUI7QUFDQSxrQkFBQSxTQUFTLEdBQUcsUUFBWjtBQUNEO0FBQ0YsZUFuQmdCLENBcUJqQjs7O0FBQ0EsY0FBQSxDQUFDO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsVUFBSSxXQUFXLEtBQUssZ0JBQWdCLENBQUMsV0FBckMsRUFBa0Q7QUFDaEQsYUFBSyxNQUFMLENBQVksVUFBWixFQUF3QixJQUF4QixzREFDaUQsVUFEakQseUJBQzBFLEtBRDFFLEdBRUksZ0JBQWdCLENBQUMsaUJBRnJCO0FBR0Q7O0FBRUQsYUFBTyxXQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzRDQU13QixXLEVBQWEsTSxFQUFRLENBRTVDLEMsQ0FEQzs7QUFHRjs7Ozs7Ozs7Ozs7OztvQ0FVZ0IsVyxFQUFhLE0sRUFBUSxnQixFQUFrQjtBQUNyRCxZQUFNLElBQUksS0FBSixDQUFVLHFEQUFWLENBQU47QUFDRDtBQUVEOzs7Ozs7Ozs7Ozt1Q0FRbUIsVSxFQUFvQixTLEVBQW9CLFUsRUFBWTtBQUNyRSxVQUFJLENBQUMsVUFBRCxJQUFlLFVBQVUsS0FBSyxFQUFsQyxFQUFzQztBQUNwQyxlQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBWCxDQUFpQixHQUFqQixDQUFsQjtBQUNBLFVBQUksU0FBUyxHQUFHLElBQWhCO0FBQ0EsVUFBSSxTQUFTLEdBQUcsSUFBaEI7QUFFQSxVQUFNLHlCQUF5Qiw4Q0FBdUMsVUFBdkMsZUFBc0QsVUFBdEQsZ0NBQS9CO0FBQ0EsVUFBTSxtQkFBbUIsOENBQXVDLFVBQXZDLGVBQXNELFVBQXRELCtDQUF6QjtBQUNBLFVBQU0sZ0JBQWdCLEdBQUcsU0FBUyxHQUM5QiwwQ0FBa0Isb0JBRFksR0FFOUIsMENBQWtCLE9BRnRCOztBQUlBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQTlCLEVBQXNDLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsUUFBQSxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUQsQ0FBckI7O0FBRUEsWUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDZCxjQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsTUFBVixHQUFtQixDQUE3QixFQUFnQztBQUM5QixnQkFBSSxDQUFDLEtBQUssdUJBQUwsQ0FBNkIsU0FBN0IsRUFBd0MsU0FBeEMsQ0FBTCxFQUF5RDtBQUN2RCxtQkFBSyxlQUFMLENBQXFCLGdCQUFyQixFQUF1QyxtQkFBdkM7QUFDQTtBQUNEO0FBQ0Y7QUFDRixTQVBELE1BT087QUFDTCxjQUFLLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0IsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsTUFBbUMsVUFBcEMsSUFDQyxPQUFPLFNBQVMsQ0FBQyxjQUFqQixJQUFtQyxVQUR4QyxFQUNxRDtBQUNuRCxnQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQUQsQ0FBTixDQUNYLE1BRFcsQ0FDSixDQURJLEVBQ0QsTUFBTSxDQUFDLFNBQUQsQ0FBTixDQUFrQixNQUFsQixHQUEyQixDQUQxQixDQUFmO0FBRUEsbUJBQU8sU0FBUyxDQUFDLGNBQVYsQ0FBeUIsTUFBekIsQ0FBUDtBQUNELFdBTEQsTUFLTyxJQUFJLENBQUMsS0FBSyx1QkFBTCxDQUE2QixTQUE3QixFQUF3QyxTQUF4QyxDQUFMLEVBQXlEO0FBQzlELGlCQUFLLGVBQUwsQ0FBcUIsZ0JBQXJCLEVBQXVDLG1CQUF2QztBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxRQUFBLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxZQUFJLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixlQUFLLGVBQUwsQ0FBcUIsZ0JBQXJCLEVBQXVDLG1CQUF2QztBQUNBO0FBQ0Q7O0FBRUQsWUFBSSxTQUFTLFlBQVksZ0JBQXpCLEVBQW1DO0FBQ2pDLGNBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBVixFQUFtQixFQUFuQixDQUF0QixDQURpQyxDQUdqQzs7QUFDQSxjQUFJLENBQUMsS0FBSyxDQUFDLEtBQUQsQ0FBVixFQUFtQjtBQUNqQixnQkFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVYsQ0FBcUIsS0FBckIsQ0FBYjs7QUFFQSxnQkFBSSxJQUFKLEVBQVU7QUFDUixjQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsbUJBQUssZUFBTCxDQUFxQiwwQ0FBa0IscUJBQXZDLEVBQ0kseUJBREo7QUFFQTtBQUNELGFBVGdCLENBV2pCOzs7QUFDQSxZQUFBLENBQUM7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsVUFBSSxTQUFTLEtBQUssSUFBZCxJQUFzQixTQUFTLEtBQUssU0FBeEMsRUFBbUQ7QUFDakQsWUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDZCxjQUFJLFNBQVMsS0FBSyxXQUFsQixFQUErQjtBQUM3QixpQkFBSyxlQUFMLENBQXFCLG1CQUFtQixDQUFDLGNBQXpDO0FBQ0QsV0FGRCxNQUVPLElBQUksU0FBUyxLQUFLLFFBQWxCLEVBQTRCO0FBQ2pDLGlCQUFLLGVBQUwsQ0FBcUIsbUJBQW1CLENBQUMsV0FBekM7QUFDRDtBQUNGO0FBQ0YsT0FSRCxNQVFPO0FBQ0wsZUFBTyxTQUFQO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OztvQ0FLZ0I7QUFDZCxhQUFPLEtBQUssWUFBTCxLQUFzQixnQkFBZ0IsQ0FBQyxpQkFBOUM7QUFDRDtBQUVEOzs7Ozs7Ozt1Q0FLbUI7QUFDakIsYUFBTyxLQUFLLFlBQUwsS0FBc0IsZ0JBQWdCLENBQUMscUJBQTlDO0FBQ0Q7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixhQUFPLEtBQUssWUFBTCxLQUFzQixnQkFBZ0IsQ0FBQyxnQkFBOUM7QUFDRDtBQUVEOzs7Ozs7Ozs7dUJBTUcsWSxFQUFzQixRLEVBQW9CO0FBQzNDLFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFFZixVQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxLQUFiLENBQW1CLEdBQW5CLENBQTFCOztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBdEMsRUFBOEMsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRCxZQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCLEtBQXJCLENBQTJCLEdBQTNCLENBQXRCO0FBQ0EsWUFBSSxhQUFhLENBQUMsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUVoQyxZQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBRCxDQUFsQztBQUVBLFlBQUksVUFBVSxHQUFHLElBQWpCOztBQUNBLFlBQUksYUFBYSxDQUFDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsVUFBQSxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsWUFBWSxHQUFHLEdBQXBDLEVBQXlDLEVBQXpDLENBQWI7QUFDRDs7QUFFRCxhQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0I7QUFDdEIsVUFBQSxZQUFZLEVBQUUsWUFEUTtBQUV0QixVQUFBLFVBQVUsRUFBRSxVQUZVO0FBR3RCLFVBQUEsUUFBUSxFQUFFO0FBSFksU0FBeEI7QUFLRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7cUNBT2lCLFksRUFBc0IsVSxFQUFvQixLLEVBQVk7QUFDckUsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxLQUFLLGFBQUwsQ0FBbUIsTUFBdkMsRUFBK0MsQ0FBQyxFQUFoRCxFQUFvRDtBQUNsRCxZQUFNLFFBQVEsR0FBRyxLQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBakI7QUFDQSxZQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsWUFBVCxLQUEwQixZQUFqRDtBQUNBLFlBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUF6QztBQUNBLFlBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFVBQVQsS0FBd0IsVUFBakQ7O0FBRUEsWUFBSSxjQUFjLEtBQUssQ0FBQyxxQkFBRCxJQUEwQixnQkFBL0IsQ0FBbEIsRUFBb0U7QUFDbEUsVUFBQSxRQUFRLENBQUMsUUFBVCxDQUFrQixVQUFsQixFQUE4QixLQUE5QjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7Ozs7Ozs7b0NBTWdCLFcsRUFBcUIsTyxFQUFpQjtBQUNwRCxVQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1osUUFBQSxPQUFPLEdBQUcsS0FBSyx5QkFBTCxDQUErQixXQUEvQixDQUFWO0FBQ0Q7O0FBRUQsV0FBSyxNQUFMLENBQVksaUJBQVosRUFBK0IsSUFBL0IsRUFBcUMsV0FBVyxHQUFHLElBQWQsR0FBcUIsT0FBMUQsRUFDSSxnQkFBZ0IsQ0FBQyxlQURyQjtBQUdBLFdBQUssYUFBTCxHQUFxQixNQUFNLENBQUMsV0FBRCxDQUEzQjtBQUNEO0FBRUQ7Ozs7Ozs7O29DQUtnQixPLEVBQWlCO0FBQy9CLFVBQUksT0FBTyxLQUFLLFNBQVosSUFBeUIsT0FBTyxLQUFLLGdCQUFnQixDQUFDLFdBQTFELEVBQXVFO0FBQ3JFLGFBQUssYUFBTCxHQUFxQixDQUFyQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7OEJBUVUsbUIsRUFBcUI7QUFDN0IsWUFBTSxJQUFJLEtBQUosQ0FDRiwrQ0FERSxDQUFOO0FBRUQ7QUFFRDs7Ozs7Ozs7MENBS3NCLEksRUFBTSxVLEVBQVk7QUFDdEMsV0FBSyxZQUFMLENBQWtCLDBCQUFVLElBQVYsQ0FBbEIsRUFBbUMsVUFBbkM7QUFDRDtBQUVEOzs7Ozs7Ozs7aUNBTWEsSSxFQUFNLFUsRUFBWTtBQUM3QixVQUFJLENBQUMsS0FBSyxnQkFBTCxFQUFMLEVBQThCO0FBQzVCLFFBQUEsT0FBTyxDQUFDLEtBQVIsQ0FDSSxtRUFESjtBQUVBO0FBQ0Q7O0FBRUQsTUFBQSxVQUFVLEdBQUcsVUFBVSxLQUFLLFNBQWYsR0FBMkIsVUFBM0IsR0FBd0MsS0FBckQ7QUFFQSxXQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0FUNkIsQ0FXN0I7O0FBQ0EsV0FBSyxJQUFNLEdBQVgsSUFBa0IsSUFBbEIsRUFBd0I7QUFDdEIsWUFBSSxHQUFHLGNBQUgsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsS0FBcUMsSUFBSSxDQUFDLEdBQUQsQ0FBN0MsRUFBb0Q7QUFDbEQsY0FBTSxpQkFBaUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsR0FBaEIsR0FBc0IsRUFBakMsSUFBdUMsR0FBakU7QUFDQSxjQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRCxDQUFsQjs7QUFFQSxjQUFJLEtBQUssQ0FBQyxZQUFELENBQVQsRUFBeUI7QUFDdkIsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQUQsQ0FBTCxDQUFvQixNQUF4QyxFQUFnRCxDQUFDLEVBQWpELEVBQXFEO0FBQ25ELG1CQUFLLFlBQUwsQ0FBa0IsS0FBSyxDQUFDLFlBQUQsQ0FBTCxDQUFvQixDQUFwQixDQUFsQixFQUNJLGlCQUFpQixHQUFHLEdBQXBCLEdBQTBCLENBRDlCO0FBRUQ7QUFDRixXQUxELE1BS08sSUFBSSxLQUFLLENBQUMsV0FBTixLQUFzQixNQUExQixFQUFrQztBQUN2QyxpQkFBSyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLGlCQUF6QjtBQUNELFdBRk0sTUFFQTtBQUNMLGlCQUFLLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DLEtBQXBDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFFRDs7Ozs7Ozs7NENBS3dCO0FBQ3RCLFVBQU0sR0FBRyxHQUFHLEtBQUssR0FBakIsQ0FEc0IsQ0FFdEI7QUFDQTs7QUFDQSxhQUFPLElBQUksQ0FBQyxTQUFMLENBQWU7QUFBQyxRQUFBLEdBQUcsRUFBSDtBQUFELE9BQWYsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7NENBSXdCO0FBQ3RCO0FBQ0E7QUFDQSxhQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxxQkFBTCxFQUFYLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0IsZ0IsRUFBa0I7QUFDaEMsWUFBTSxJQUFJLEtBQUosQ0FDRiwrQ0FERSxDQUFOO0FBRUQ7QUFFRDs7Ozs7Ozs7O3VDQU1tQixHLEVBQWEsTSxFQUFRO0FBQ3RDLFVBQU0sWUFBWSxHQUFHO0FBQ25CLGtCQUFVLGdCQUFnQixDQUFDLFdBRFI7QUFFbkIscUJBQWEsMENBQWtCO0FBRlosT0FBckI7QUFLQSxVQUFNLE9BQU8sR0FBRyxJQUFJLGNBQUosRUFBaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsTUFBYixFQUFxQixHQUFyQixFQUEwQixLQUExQjs7QUFDQSxVQUFJO0FBQ0YsWUFBSSxNQUFNLFlBQVksS0FBdEIsRUFBNkI7QUFDM0IsVUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsY0FBekIsRUFDSSxtQ0FESjtBQUVBLFVBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosQ0FBYjtBQUNELFNBSkQsTUFJTztBQUNMLFVBQUEsT0FBTyxDQUFDLGdCQUFSLENBQXlCLGNBQXpCLEVBQ0ksS0FBSyxRQUFMLENBQWMscUJBRGxCO0FBRUEsVUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFiO0FBQ0Q7QUFDRixPQVZELENBVUUsT0FBTyxDQUFQLEVBQVU7QUFDVixlQUFPLFlBQVA7QUFDRDs7QUFFRCxVQUFJO0FBQ0YsZUFBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sQ0FBQyxZQUFuQixDQUFQO0FBQ0QsT0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsZUFBTyxZQUFQO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OzttQ0FLZSxJLEVBQWM7QUFDM0IsNENBQWdCLElBQUksZUFBSixDQUFvQixJQUFwQixFQUEwQixJQUExQixDQUFoQjs7QUFDQSxXQUFLLE1BQUwsQ0FBWSxnQkFBWixFQUE4QixFQUE5QixFQUFrQyxXQUFsQyxFQUNJLGdCQUFnQixDQUFDLGVBRHJCO0FBRUQ7QUFFRDs7Ozs7OzJDQUd1QjtBQUNyQixnQ0FBSSxJQUFKLGFBQW1CO0FBQ2pCLDhDQUFjLE1BQWQ7O0FBQ0EsOENBQWdCLElBQWhCOztBQUNBLGFBQUssTUFBTCxDQUFZLHNCQUFaLEVBQW9DLEVBQXBDLEVBQXdDLFNBQXhDLEVBQ0ksZ0JBQWdCLENBQUMsZUFEckI7QUFFRDtBQUNGOzs7d0JBcDFCYztBQUNiLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJYSxRLEVBQWtCO0FBQzdCLG1HQUFxQixJQUFyQixlQUF3QyxRQUF4QztBQUNEOzs7OztBQTYwQkg7Ozs7Ozs7Ozs7Ozs7SUFHTSxlO0FBS0o7Ozs7O0FBS0EsMkJBQVksR0FBWixFQUFzQixJQUF0QixFQUFvQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQVJ2QjtBQVF1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDbEMsc0NBQVksR0FBWjs7QUFDQSwyQ0FBZ0IsVUFBVSxDQUFDLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxFQUEwQixJQUExQixDQUExQjtBQUNEO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCw4Q0FBa0IsSUFBbEI7O0FBQ0EsZ0NBQUksSUFBSixjQUFtQjtBQUNqQixRQUFBLFlBQVksdUJBQUMsSUFBRCxhQUFaO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OEJBR1U7QUFDUixVQUFJLHVCQUFDLElBQUQsYUFBSixFQUFzQjtBQUNwQiwwQ0FBVSxNQUFWO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5OEJIOztBQUNBOztBQU9BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGlCQUFpQixHQUFHLDBCQUFhLE9BQXZDO0FBQ0EsSUFBTSxnQkFBZ0IsR0FBRywwQkFBYSxNQUF0QztBQUNBLElBQU0sbUJBQW1CLEdBQUcsd0JBQVcsT0FBdkM7QUFFQTs7OztJQUdxQixVOzs7OztBQUNuQjs7OztBQUlBLHNCQUFZLFFBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsUUFBTSxhQUFhLG1DQUNkO0FBQ0QsTUFBQSxnQkFBZ0IsRUFBRTtBQURqQixLQURjLEdBR1gsUUFIVyxDQUFuQjs7QUFNQSw4QkFBTSxtQkFBTixFQUEyQixhQUEzQjtBQUVBLFVBQUssR0FBTCxHQUFXLElBQUksZ0JBQUosRUFBWDtBQUNBLFVBQUssR0FBTCxHQUFXLElBQUksZ0JBQUosRUFBWCxDQVZ3QixDQVl4Qjs7QUFDQSxVQUFLLGFBQUwsR0FBcUIsTUFBSyxhQUExQjtBQUNBLFVBQUssU0FBTCxHQUFpQixNQUFLLFNBQXRCO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBeEI7QUFDQSxVQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUF4QjtBQUNBLFVBQUssU0FBTCxHQUFpQixNQUFLLFNBQXRCO0FBQ0EsVUFBSyxlQUFMLEdBQXVCLE1BQUssZUFBNUI7QUFDQSxVQUFLLGlCQUFMLEdBQXlCLE1BQUssaUJBQTlCO0FBQ0EsVUFBSyxnQkFBTCxHQUF3QixNQUFLLGdCQUE3QjtBQXBCd0I7QUFxQnpCO0FBRUQ7Ozs7Ozs7OztvQ0FLZ0I7QUFDZCxXQUFLLEdBQUwsQ0FBUyxVQUFUO0FBQ0EsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsZUFBaEIsRUFBaUMsOEJBQWpDLEVBQ0gsMEJBREcsQ0FBUDtBQUVEO0FBRUQ7Ozs7Ozs7O2dDQUtZO0FBQ1YsVUFBTSxNQUFNLEdBQUcsS0FBSyxTQUFMLENBQWUsV0FBZixFQUE0QixLQUE1QixDQUFmOztBQUVBLFVBQUksTUFBTSxLQUFLLGdCQUFnQixDQUFDLFVBQWhDLEVBQTRDO0FBQzFDLFlBQUksS0FBSyxHQUFMLENBQVMsS0FBVCxLQUFtQixFQUF2QixFQUEyQjtBQUN6QixjQUFJLEtBQUssR0FBTCxDQUFTLEtBQVQsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakMsaUJBQUssZ0JBQUwsQ0FBc0IsY0FBdEI7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBSyxnQkFBTCxDQUFzQixrQkFBdEI7QUFDRDtBQUNGLFNBTkQsTUFNTyxJQUFJLEtBQUssUUFBTCxDQUFjLFlBQWxCLEVBQWdDO0FBQ3JDLGVBQUssZ0JBQUwsQ0FBc0IsY0FBdEI7QUFDRDtBQUNGOztBQUVELGFBQU8sTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztnQ0FNWSxVLEVBQVk7QUFDdEIsYUFBTyxLQUFLLFFBQUwsQ0FBYyxhQUFkLEVBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O2dDQU9ZLFUsRUFBWSxLLEVBQU87QUFDN0IsYUFBTyxLQUFLLFFBQUwsQ0FBYyxhQUFkLEVBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLEVBQWdELEtBQWhELENBQVA7QUFDRDtBQUVEOzs7Ozs7OztnQ0FLWTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBQVksV0FBWixFQUF5QixLQUF6QixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7c0NBS2tCO0FBQ2hCLGFBQU8sS0FBSyxZQUFMLENBQWtCLGlCQUFsQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O3NDQU1rQixZLEVBQWM7QUFDOUIsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsbUJBQXBCLEVBQXlDLFlBQXpDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7cUNBTWlCLFksRUFBYztBQUM3QixhQUFPLEtBQUssYUFBTCxDQUFtQixrQkFBbkIsRUFBdUMsWUFBdkMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1ksVSxFQUFZLEssRUFBTztBQUM3QixhQUFPLEtBQUssa0JBQUwsQ0FBd0IsYUFBeEIsRUFBdUMsS0FBdkMsRUFBOEMsVUFBOUMsRUFBMEQsS0FBMUQsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztnQ0FNWSxVLEVBQVk7QUFDdEIsYUFBTyxLQUFLLGtCQUFMLENBQXdCLGFBQXhCLEVBQXVDLEtBQXZDLEVBQThDLFVBQTlDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0IsVSxFQUFZLEssRUFBTyxlLEVBQWlCO0FBQ2xELFVBQUksUUFBSjs7QUFFQSxVQUFJLEtBQUssYUFBTCxDQUFtQixVQUFuQixFQUErQix3QkFBL0IsQ0FBSixFQUE4RDtBQUM1RCxRQUFBLFFBQVEsR0FBRyxJQUFJLGdDQUFKLEVBQVg7QUFDRCxPQUZELE1BRU8sSUFBSSxlQUFlLElBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQzFCLG9EQUQwQixDQUF2QixFQUNvRDtBQUN6RCxRQUFBLFFBQVEsR0FBRyxJQUFJLGtEQUFKLEVBQVg7QUFDRCxPQUhNLE1BR0EsSUFBSSxlQUFlLElBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQzFCLDZDQUQwQixDQUF2QixFQUM2QztBQUNsRCxRQUFBLFFBQVEsR0FBRyxJQUFJLDRDQUFKLEVBQVg7QUFDRCxPQUhNLE1BR0EsSUFBSSxDQUFDLGVBQUQsSUFDUCxLQUFLLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0IsMEJBQS9CLENBREcsRUFDeUQ7QUFDOUQsUUFBQSxRQUFRLEdBQUcsSUFBSSxrQ0FBSixFQUFYO0FBQ0Q7O0FBRUQsYUFBTyxRQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs0Q0FPd0IsVSxFQUFZLEssRUFBTztBQUN6QyxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzhDQU8wQixXLEVBQWEsTSxFQUFRO0FBQzdDLFVBQUksWUFBWSxHQUFHLFVBQW5CO0FBQ0EsVUFBSSxhQUFhLEdBQUcsVUFBcEIsQ0FGNkMsQ0FJN0M7O0FBQ0EsTUFBQSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQUQsQ0FBcEI7O0FBQ0EsVUFBSSxpQkFBaUIsQ0FBQyxrQkFBbEIsQ0FBcUMsV0FBckMsQ0FBSixFQUF1RDtBQUNyRCxRQUFBLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxrQkFBbEIsQ0FBcUMsV0FBckMsRUFBa0QsWUFBakU7QUFDQSxRQUFBLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBbEIsQ0FBcUMsV0FBckMsRUFBa0QsYUFBbEU7QUFDRDs7QUFFRCxhQUFPLE1BQU0sR0FBRyxhQUFILEdBQW1CLFlBQWhDO0FBQ0Q7QUFFRDs7Ozs7Ozs7K0NBSzJCLE0sRUFBUTtBQUNqQztBQUNBLFdBQUssR0FBTCxHQUFXLE1BQU0sQ0FBQyxHQUFsQjtBQUNEO0FBRUQ7Ozs7Ozs7OztvQ0FNZ0IsZSxFQUEwQjtBQUN4QyxVQUFNLFNBQVMsR0FBRyxLQUFLLHFCQUFMLEVBQWxCOztBQUVBLFVBQUksZUFBSixFQUFxQjtBQUNuQixRQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsSUFBZCxDQUFtQixVQUFuQixHQUFnQyxLQUFLLEdBQUwsQ0FBUyxtQkFBVCxFQUFoQztBQUNEOztBQUVELFVBQU0sTUFBTSxHQUFHLEVBQWY7QUFDQSxVQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBVixDQUFrQixTQUFsQixDQUFsQjs7QUFDQSxjQUFRLEtBQUssUUFBTCxDQUFjLGdCQUF0QjtBQUNFLGFBQUssV0FBTDtBQUNFLGlCQUFPLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFNBQWxCLENBQVA7O0FBQ0YsYUFBSyxRQUFMO0FBQ0UsZUFBSyxJQUFNLElBQVgsSUFBbUIsU0FBbkIsRUFBOEI7QUFDNUIsZ0JBQUksR0FBRyxjQUFILENBQWtCLElBQWxCLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDLENBQUosRUFBNkM7QUFDM0MsY0FBQSxNQUFNLENBQUMsSUFBUCxXQUFlLElBQWYsY0FBdUIsU0FBUyxDQUFDLElBQUQsQ0FBaEM7QUFDRDtBQUNGOztBQUNELGlCQUFPLE1BQVA7O0FBQ0YsYUFBSyxNQUFMO0FBQ0E7QUFDRSxpQkFBTyxTQUFQO0FBWko7QUFjRDtBQUVEOzs7Ozs7Ozs7OEJBTVUsZSxFQUEwQjtBQUNsQyxVQUFJLGVBQUosRUFBcUI7QUFDbkIsWUFBTSxjQUFjLEdBQUcsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQXJDOztBQUNBLFlBQUksY0FBYyxLQUFLLGVBQXZCLEVBQXdDO0FBQ3RDLGVBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxhQUFkLEdBQThCLFdBQTlCO0FBQ0Q7O0FBRUQsWUFBSSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxLQUE4QixRQUFsQyxFQUE0QztBQUMxQyxjQUFJLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxNQUFkLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDLGdCQUFJLEtBQUssUUFBTCxDQUFjLGdCQUFkLElBQ0EsS0FBSyxHQUFMLENBQVMsWUFBVCxDQUFzQixhQUF0QixLQUF3QyxFQUR4QyxJQUVBLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLEdBQXBCLEtBQTRCLEVBRmhDLEVBRW9DO0FBQ2xDLGtCQUFJLFVBQVUsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixHQUFyQixDQUFWLElBQ0EsVUFBVSxDQUFDLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsYUFBdkIsQ0FEZCxFQUNxRDtBQUNuRCxxQkFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsR0FBOEIsUUFBOUI7QUFDRCxlQUhELE1BR087QUFDTCxxQkFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsR0FBOEIsUUFBOUI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixTQWJELE1BYU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxLQUE4QixRQUFsQyxFQUE0QztBQUFBOztBQUNqRCxjQUFJLENBQUMsNEJBQUssWUFBTCxtR0FBbUIsR0FBbkIsMEdBQXdCLElBQXhCLGtGQUE4QixhQUE5QixLQUErQyxFQUFoRCxNQUF3RCxFQUF4RCxJQUNBLGNBQWMsS0FBSyxlQUR2QixFQUN3QztBQUN0QyxpQkFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsR0FBOEIsU0FBOUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBTSxZQUFZLEdBQUcsS0FBSyxlQUFMLENBQXFCLGVBQXJCLENBQXJCOztBQUVBLFVBQUksS0FBSyxRQUFMLENBQWMsWUFBbEIsRUFBZ0M7QUFDOUIsWUFBSSxLQUFLLFdBQUwsS0FBcUIsZ0JBQWdCLENBQUMsZUFBMUMsRUFBMkQ7QUFDekQsVUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLDBCQUNULGVBQWUsR0FBRyxLQUFILEdBQVcsSUFEakIsSUFDeUIsS0FEdkM7QUFFQSxVQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsWUFBZDtBQUNEOztBQUNELGVBQU8sS0FBSyxrQkFBTCxDQUF3QixLQUFLLFFBQUwsQ0FBYyxZQUF0QyxFQUFvRCxZQUFwRCxDQUFQO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsUUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDBCQUNQLGVBQWUsR0FBRyxLQUFILEdBQVcsSUFEbkIsSUFDMkIsS0FEdkM7QUFFQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNBLGVBQU8sZ0JBQWdCLENBQUMsVUFBeEI7QUFDRDtBQUNGOzs7O0VBblNxQyxvQjs7Ozs7Ozs7Ozs7O0FDbkJ4Qzs7QUFDQTs7QUFTQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLG1CQUFtQixHQUFHLDBCQUFhLFNBQXpDO0FBQ0EsSUFBTSxnQkFBZ0IsR0FBRywwQkFBYSxNQUF0QztBQUNBLElBQU0scUJBQXFCLEdBQUcsd0JBQVcsU0FBekM7QUFDQSxJQUFNLGlCQUFpQixHQUFHLCtCQUFVLE9BQXBDO0FBQ0EsSUFBTSxlQUFlLEdBQUcsa0JBQU0sU0FBOUI7QUFFQTs7OztJQUdxQixZOzs7OztBQUduQjs7OztBQUlBLHdCQUFZLFFBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsUUFBTSxhQUFhLG1DQUNkO0FBQ0QsTUFBQSxnQkFBZ0IsRUFBRTtBQURqQixLQURjLEdBR1gsUUFIVyxDQUFuQjs7QUFNQSw4QkFBTSxxQkFBTixFQUE2QixhQUE3Qjs7QUFQd0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkVBd1RELFVBQUMsZ0JBQUQsRUFBbUIsYUFBbkIsRUFBa0MsS0FBbEMsRUFBNEM7QUFDbkUsVUFBSSxLQUFLLEdBQUcsS0FBWjtBQUNBLFVBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQS9COztBQUNBLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsS0FBSixJQUFhLENBQUMsS0FBOUIsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFJLENBQUMsS0FBSyxhQUFOLElBQXVCLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLENBQTVCLE1BQW1DLEtBQTlELEVBQXFFO0FBQ25FLFVBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBUDtBQUNELEtBalV5Qjs7QUFTeEIsVUFBSyxHQUFMLEdBQVcsSUFBSSxrQkFBSixFQUFYO0FBQ0EsVUFBSyxHQUFMLEdBQVcsSUFBSSxrQkFBSixFQUFYLENBVndCLENBWXhCOztBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFLLGFBQXZCO0FBQ0EsVUFBSyxTQUFMLEdBQWlCLE1BQUssWUFBdEI7QUFDQSxVQUFLLFFBQUwsR0FBZ0IsTUFBSyxXQUFyQjtBQUNBLFVBQUssUUFBTCxHQUFnQixNQUFLLFdBQXJCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBSyxTQUFuQjtBQUNBLFVBQUssWUFBTCxHQUFvQixNQUFLLGVBQXpCO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLE1BQUssaUJBQTNCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssZ0JBQTFCO0FBcEJ3QjtBQXFCekI7QUFFRDs7Ozs7Ozs7O0FBUUE7OztvQ0FHZ0I7QUFDZCxXQUFLLEdBQUwsQ0FBUyxVQUFUO0FBQ0EsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBUDtBQUNEO0FBRUQ7Ozs7OzttQ0FHZTtBQUNiLFVBQU0sTUFBTSxHQUFHLEtBQUssU0FBTCxDQUFlLFdBQWYsRUFBNEIsSUFBNUIsQ0FBZjs7QUFFQSxVQUFJLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxVQUFoQyxFQUE0QztBQUMxQyxZQUFJLEtBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxPQUFiLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDLGtCQUFRLEtBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxPQUFyQjtBQUNFLGlCQUFLLFVBQUw7QUFDRSxtQkFBSyxnQkFBTCxDQUFzQixjQUF0QjtBQUNBOztBQUNGLGlCQUFLLFVBQUw7QUFDRSxtQkFBSyxnQkFBTCxDQUFzQixrQkFBdEI7QUFDQTs7QUFDRixpQkFBSyxRQUFMO0FBQ0UsbUJBQUssZ0JBQUwsQ0FBc0IsZ0JBQXRCO0FBQ0E7O0FBQ0YsaUJBQUssTUFBTDtBQUNFLG1CQUFLLGdCQUFMLENBQXNCLGNBQXRCO0FBQ0E7O0FBQ0YsaUJBQUssU0FBTDtBQUNFLG1CQUFLLGdCQUFMLENBQXNCLGlCQUF0QjtBQUNBOztBQUNGLGlCQUFLLFNBQUw7QUFDRSxtQkFBSyxnQkFBTCxDQUFzQixpQkFBdEI7QUFDQTs7QUFDRixpQkFBSyxZQUFMO0FBQ0UsbUJBQUssZ0JBQUwsQ0FBc0Isb0JBQXRCO0FBQ0E7QUFyQko7QUF1QkQsU0F4QkQsTUF3Qk8sSUFBSSxLQUFLLFFBQUwsQ0FBYyxZQUFsQixFQUFnQztBQUNyQyxlQUFLLGdCQUFMLENBQXNCLGNBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLE1BQVA7QUFDRDtBQUVEOzs7Ozs7O2dDQUlZLFUsRUFBWTtBQUN0QixhQUFPLEtBQUssUUFBTCxDQUFjLFVBQWQsRUFBMEIsSUFBMUIsRUFBZ0MsVUFBaEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O2dDQUtZLFUsRUFBWSxLLEVBQU87QUFDN0IsYUFBTyxLQUFLLFFBQUwsQ0FBYyxVQUFkLEVBQTBCLElBQTFCLEVBQWdDLFVBQWhDLEVBQTRDLEtBQTVDLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztnQ0FLWTtBQUNWLGFBQU8sS0FBSyxNQUFMLENBQVksUUFBWixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7c0NBS2tCO0FBQ2hCLGFBQU8sS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7c0NBTWtCLFksRUFBYztBQUM5QixhQUFPLEtBQUssY0FBTCxDQUFvQixnQkFBcEIsRUFBc0MsWUFBdEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztxQ0FNaUIsWSxFQUFjO0FBQzdCLGFBQU8sS0FBSyxhQUFMLENBQW1CLGVBQW5CLEVBQW9DLFlBQXBDLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7O2dDQU9ZLFUsRUFBWSxLLEVBQU87QUFDN0IsYUFBTyxLQUFLLGtCQUFMLENBQXdCLFVBQXhCLEVBQW9DLElBQXBDLEVBQTBDLFVBQTFDLEVBQXNELEtBQXRELENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztvQ0FRZ0IsVSxFQUFZLEssRUFBTyxlLEVBQWlCO0FBQ2xELFVBQUksUUFBSjs7QUFFQSxVQUFJLEtBQUssYUFBTCxDQUFtQixVQUFuQixFQUErQix3QkFBL0IsQ0FBSixFQUE4RDtBQUM1RCxRQUFBLFFBQVEsR0FBRyxJQUFJLGtDQUFKLEVBQVg7QUFDRCxPQUZELE1BRU8sSUFBSSxlQUFlLElBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQzFCLG9EQUQwQixDQUF2QixFQUNvRDtBQUN6RCxZQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBWCxDQUFpQixHQUFqQixDQUFkO0FBQ0EsWUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBcEI7QUFDQSxZQUFNLFdBQVcsR0FBRyxLQUFLLEdBQUwsQ0FBUyxZQUFULENBQXNCLFVBQXRCLENBQWlDLEtBQWpDLENBQXBCOztBQUNBLFlBQUksQ0FBQyxXQUFXLENBQUMsSUFBakIsRUFBdUI7QUFDckIsZUFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLDBCQUEzQztBQUNELFNBRkQsTUFFTztBQUNMLGNBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLElBQXJDO0FBQ0EsY0FBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsaUJBQVosQ0FBOEIsTUFBeEQ7O0FBQ0EsY0FBSSxnQkFBZ0IsS0FBSyxRQUF6QixFQUFtQztBQUNqQyxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxpQkFBSixJQUF5QixLQUFLLGFBQUwsS0FDekMsQ0FEQSxFQUNHLENBQUMsRUFESixFQUNRO0FBQ04sa0JBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxpQkFBWixDQUE4QixVQUE5QixDQUF5QyxDQUF6QyxDQUFqQjs7QUFDQSxrQkFBSSxRQUFRLENBQUMsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUM5QixxQkFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLG1CQUEzQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxjQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBRCxDQUF2Qzs7QUFDQSxjQUFJLGFBQUosRUFBbUI7QUFDakIsZ0JBQUksS0FBSyxHQUFHLEVBQVo7O0FBQ0EsZ0JBQUksYUFBSixhQUFJLGFBQUosdUJBQUksYUFBYSxDQUFFLFNBQW5CLEVBQThCO0FBQzVCLGNBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFELENBQU4sQ0FBYyxLQUFkLENBQW9CLGFBQWEsQ0FBQyxTQUFsQyxDQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsY0FBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsS0FBWDtBQUNEOztBQUVELGdCQUFJLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBZixJQUFvQixLQUFLLENBQUMsTUFBTixJQUFnQixhQUFhLENBQUMsR0FBdEQsRUFBMkQ7QUFDekQsbUJBQUsseUJBQUwsQ0FBK0IsZ0JBQS9CLEVBQWlELEtBQWpELEVBQXdELEtBQXhEO0FBQ0QsYUFGRCxNQUVPLElBQUksS0FBSyxDQUFDLE1BQU4sR0FBZSxhQUFhLENBQUMsR0FBakMsRUFBc0M7QUFDM0MsbUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxtQkFBM0MsRUFDSSxxQ0FESjtBQUVEO0FBQ0YsV0FkRCxNQWNPO0FBQ0wsaUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxtQkFBM0MsRUFDSSw4QkFBOEIsZ0JBRGxDO0FBRUQ7QUFDRjs7QUFDRCxZQUFJLEtBQUssYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QixVQUFBLFFBQVEsR0FBRyxJQUFJLG9EQUFKLEVBQVg7QUFDRDtBQUNGLE9BM0NNLE1BMkNBLElBQUksZUFBZSxJQUFJLEtBQUssYUFBTCxDQUFtQixVQUFuQixFQUMxQiw2Q0FEMEIsQ0FBdkIsRUFDNkM7QUFDbEQsUUFBQSxRQUFRLEdBQUcsSUFBSSw4Q0FBSixFQUFYO0FBQ0QsT0FITSxNQUdBLElBQUksQ0FBQyxlQUFELElBQ1AsS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQStCLDBCQUEvQixDQURHLEVBQ3lEO0FBQzlELFFBQUEsUUFBUSxHQUFHLElBQUksb0NBQUosRUFBWDtBQUNELE9BSE0sTUFHQSxJQUFJLEtBQUssYUFBTCxDQUFtQixVQUFuQixFQUNQLG1DQURPLENBQUosRUFDbUM7QUFDeEMsUUFBQSxRQUFRLEdBQUcsSUFBSSxnQ0FBSixFQUFYO0FBQ0QsT0FITSxNQUdBLElBQUksS0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQ1AsK0JBRE8sQ0FBSixFQUMrQjtBQUNwQyxRQUFBLFFBQVEsR0FBRyxJQUFJLGdDQUFKLENBQXNCLElBQXRCLENBQVg7QUFDRDs7QUFFRCxhQUFPLFFBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs0Q0FLd0IsVSxFQUFZLEssRUFBTztBQUN6QyxVQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBWCxDQUFpQixHQUFqQixDQUFkO0FBQ0EsVUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBcEI7QUFDQSxVQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUE1QjtBQUNBLFVBQU0sV0FBVyxHQUFHLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBaUMsS0FBakMsQ0FBcEI7QUFFQSxVQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFyQztBQUNBLFVBQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLGlCQUFaLENBQThCLE1BQXhEOztBQUNBLFVBQUksZ0JBQWdCLEtBQUssUUFBekIsRUFBbUM7QUFDakMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxpQkFBSixJQUF5QixLQUFLLGFBQUwsS0FBdUIsQ0FBaEUsRUFBbUUsQ0FBQyxFQUFwRSxFQUF3RTtBQUN0RSxjQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsaUJBQVosQ0FBOEIsVUFBOUIsQ0FBeUMsQ0FBekMsQ0FBakI7O0FBQ0EsY0FBSSxRQUFRLENBQUMsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUM5QixpQkFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLG1CQUEzQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBRCxDQUF2Qzs7QUFDQSxVQUFJLE9BQU8sYUFBYSxDQUFDLEtBQXJCLEtBQStCLFdBQS9CLElBQThDLGlCQUFpQixJQUMvRCxhQUFhLENBQUMsS0FEbEIsRUFDeUI7QUFDdkIsWUFBSSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxZQUFJLGFBQUosYUFBSSxhQUFKLHVCQUFJLGFBQWEsQ0FBRSxTQUFuQixFQUE4QjtBQUM1QixVQUFBLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBRCxDQUFOLENBQWMsS0FBZCxDQUFvQixhQUFhLENBQUMsU0FBbEMsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMLFVBQUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLEtBQVg7QUFDRDs7QUFFRCxZQUFJLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBZixJQUFvQixLQUFLLENBQUMsTUFBTixJQUFnQixhQUFhLENBQUMsR0FBdEQsRUFBMkQ7QUFDekQsZUFBSyx5QkFBTCxDQUErQixnQkFBL0IsRUFBaUQsS0FBakQsRUFBd0QsS0FBeEQ7QUFDRCxTQUZELE1BRU8sSUFBSSxLQUFLLENBQUMsTUFBTixHQUFlLGFBQWEsQ0FBQyxHQUFqQyxFQUFzQztBQUMzQyxlQUFLLGVBQUwsQ0FBcUIscUJBQXFCLENBQUMsbUJBQTNDLEVBQ0kscUNBREo7QUFFRDs7QUFFRCxZQUFJLEtBQUssYUFBTCxLQUF1QixDQUF2QixLQUNDLENBQUMsYUFBYSxDQUFDLFNBQWYsSUFDRyxDQUFDLEtBQUssc0JBQUwsQ0FBNEIsV0FBVyxDQUFDLGlCQUF4QyxFQUNHLGFBREgsRUFDa0IsS0FEbEIsQ0FGTCxLQUlDLEtBQUssYUFBTCxLQUF1QixDQUF2QixJQUE0QixLQUFLLEtBQUssRUFKM0MsRUFJZ0QsQ0FDOUM7QUFDRCxTQU5ELE1BTU87QUFDTCxjQUFJLEtBQUssYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QixpQkFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLG1CQUEzQyxFQUNJLDJDQURKO0FBRUQ7QUFDRjtBQUNGLE9BNUJELE1BNEJPO0FBQ0wsYUFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLG1CQUEzQyxFQUNJLDZDQURKO0FBRUQ7QUFDRjtBQUVEOzs7Ozs7Ozs7Z0NBTVksVSxFQUFZO0FBQ3RCLGFBQU8sS0FBSyxrQkFBTCxDQUF3QixVQUF4QixFQUFvQyxJQUFwQyxFQUEwQyxVQUExQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs4Q0FPMEIsVyxFQUFhLE0sRUFBUTtBQUM3QyxVQUFJLFlBQVksR0FBRyxFQUFuQjtBQUNBLFVBQUksYUFBYSxHQUFHLEVBQXBCLENBRjZDLENBSTdDOztBQUNBLE1BQUEsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFELENBQXBCOztBQUNBLFVBQUksbUJBQW1CLENBQUMsa0JBQXBCLENBQXVDLFdBQXZDLENBQUosRUFBeUQ7QUFDdkQsUUFBQSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsa0JBQXBCLENBQXVDLFdBQXZDLEVBQW9ELFlBQW5FO0FBQ0EsUUFBQSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsa0JBQXBCLENBQXVDLFdBQXZDLEVBQW9ELGFBQXBFO0FBQ0Q7O0FBRUQsYUFBTyxNQUFNLEdBQUcsYUFBSCxHQUFtQixZQUFoQztBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7OENBTTBCLGdCLEVBQWtCLEssRUFBTyxLLEVBQU87QUFDeEQsVUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsZ0JBQUQsQ0FBbEM7QUFDQSxVQUFNLFdBQVcsR0FBRyxJQUFJLE1BQUosQ0FBVyxRQUFRLENBQUMsTUFBcEIsQ0FBcEI7O0FBQ0EsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBVixJQUFvQixLQUFLLGFBQUwsS0FBdUIsQ0FBM0QsRUFBOEQsQ0FBQyxFQUEvRCxFQUFtRTtBQUNqRSxZQUFJLGdCQUFnQixDQUFDLEtBQWpCLENBQ0EsMERBREEsQ0FBSixFQUNpRTtBQUMvRCxVQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxLQUFLLDZCQUFMLENBQW1DLEtBQUssQ0FBQyxDQUFELENBQXhDLENBQVg7QUFDRDs7QUFFRCxZQUFJLFFBQUosYUFBSSxRQUFKLHVCQUFJLFFBQVEsQ0FBRSxVQUFkLEVBQTBCO0FBQ3hCLGNBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxLQUFULENBQWUsUUFBUSxDQUFDLFVBQXhCLENBQWY7O0FBQ0EsY0FBSSxNQUFNLENBQUMsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2QixnQkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FBaEI7O0FBQ0EsZ0JBQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixtQkFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLGFBQTNDO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsS0FBVixDQUFnQixJQUFJLE1BQUosQ0FBVyxRQUFRLENBQUMsT0FBcEIsQ0FBaEIsQ0FBTCxFQUFvRDtBQUNsRCxxQkFBSyxlQUFMLENBQXFCLHFCQUFxQixDQUFDLGFBQTNDO0FBQ0Q7QUFDRjtBQUNGLFdBVEQsTUFTTztBQUNMLGlCQUFLLGVBQUwsQ0FBcUIscUJBQXFCLENBQUMsYUFBM0M7QUFDRDtBQUNGLFNBZEQsTUFjTztBQUNMLGNBQU0sUUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxLQUFULENBQWUsV0FBZixDQUFoQjs7QUFDQSxjQUFLLENBQUMsUUFBRCxJQUFZLEtBQUssS0FBSyxFQUF2QixJQUNDLENBQUMsUUFBRCxJQUFZLGdCQUFnQixLQUFLLFlBRHRDLEVBQ3FEO0FBQ25ELGlCQUFLLGVBQUwsQ0FBcUIscUJBQXFCLENBQUMsYUFBM0M7QUFDRCxXQUhELE1BR087QUFDTCxnQkFBSSxnQkFBZ0IsS0FBSyxTQUFyQixJQUFrQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQXJELEVBQXdEO0FBQ3RELGtCQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQU4sR0FBbUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBN0IsRUFBeUM7QUFDdkMscUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxhQUEzQztBQUNEO0FBQ0YsYUFKRCxNQUlPO0FBQ0wsa0JBQUksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLEVBQWIsSUFBbUIsUUFBUSxDQUFDLE1BQWhDLEVBQXdDO0FBQ3RDLHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLENBQUosSUFBUyxLQUFLLGFBQUwsS0FBdUIsQ0FBaEQsRUFBbUQsQ0FBQyxFQUFwRCxFQUF3RDtBQUN0RCxzQkFBSSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsS0FBSyxDQUFDLENBQUQsQ0FBdEIsRUFBMkI7QUFDekIseUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxhQUEzQztBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFFRDs7Ozs7Ozs7a0RBSzhCLEksRUFBTTtBQUNsQyxVQUFJLFNBQVMsR0FBRyxLQUFoQjtBQUNBLFVBQUksUUFBUSxHQUFHLEtBQWY7QUFDQSxVQUFJLFFBQVEsR0FBRyxLQUFmO0FBRUEsVUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFKLENBQ2hCLGdEQURnQixDQUFwQjtBQUVBLFVBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsV0FBWCxDQUFkO0FBQ0EsVUFBSSxXQUFXLEdBQUcsSUFBbEI7O0FBQ0EsYUFBTyxPQUFQLEVBQWdCO0FBQ2QsZ0JBQVEsT0FBTyxDQUFDLENBQUQsQ0FBZjtBQUNFLGVBQUssTUFBTDtBQUNFLFlBQUEsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsZUFBZSxDQUFDLFNBQTNCLENBQWQ7O0FBQ0EsZ0JBQUksV0FBSixFQUFpQjtBQUNmLGtCQUFNLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUF4Qjs7QUFDQSxrQkFBSSxJQUFJLEtBQUssU0FBVCxJQUFzQixJQUFJLENBQUMsTUFBTCxHQUFjLENBQXhDLEVBQTJDO0FBQ3pDLG9CQUFJLCtCQUFlLElBQUksQ0FBQyxXQUFMLEVBQWYsTUFBdUMsU0FBM0MsRUFBc0Q7QUFDcEQsdUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxhQUEzQztBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxZQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0E7O0FBQ0YsZUFBSyxjQUFMO0FBQ0UsZ0JBQUksQ0FBQyxRQUFELElBQWEsQ0FBQyxTQUFkLElBQTJCLENBQUMsUUFBaEMsRUFBMEM7QUFDeEMsa0JBQUksT0FBTyxDQUFDLENBQUQsQ0FBUCxLQUFlLE1BQWYsSUFBeUIsT0FBTyxDQUFDLENBQUQsQ0FBUCxLQUFlLE9BQTVDLEVBQXFEO0FBQ25ELHFCQUFLLGVBQUwsQ0FBcUIscUJBQXFCLENBQUMsYUFBM0M7QUFDRDtBQUNGOztBQUVELFlBQUEsUUFBUSxHQUFHLElBQVg7QUFDQTs7QUFDRixlQUFLLGVBQUw7QUFDRSxnQkFBSSxDQUFDLFFBQUQsSUFBYSxDQUFDLFFBQWQsSUFBMEIsQ0FBQyxTQUEvQixFQUEwQztBQUN4QyxrQkFBSSxPQUFPLENBQUMsQ0FBRCxDQUFQLEtBQWUsTUFBZixJQUF5QixPQUFPLENBQUMsQ0FBRCxDQUFQLEtBQWUsT0FBNUMsRUFBcUQ7QUFDbkQscUJBQUssZUFBTCxDQUFxQixxQkFBcUIsQ0FBQyxhQUEzQztBQUNEO0FBQ0Y7O0FBRUQsWUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBOztBQUNGO0FBQ0U7QUFoQ0o7O0FBa0NBLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFMLENBQVksT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLE1BQXZCLENBQVA7QUFDQSxRQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLFdBQVgsQ0FBVjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7K0NBSTJCLE0sRUFBUTtBQUNqQztBQUNBLFdBQUssR0FBTCxHQUFXLE1BQU0sQ0FBQyxHQUFsQjtBQUNBLFdBQUssR0FBTCxHQUFXLE1BQU0sQ0FBQyxHQUFsQjtBQUNEO0FBRUQ7Ozs7Ozs7OztvQ0FNZ0IsZSxFQUEwQjtBQUN4QyxVQUFNLFNBQVMsR0FBRyxLQUFLLHFCQUFMLEVBQWxCOztBQUVBLFVBQUksZUFBSixFQUFxQjtBQUNuQixRQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsVUFBZCxHQUEyQixLQUFLLEdBQUwsQ0FBUyxtQkFBVCxFQUEzQjtBQUNEOztBQUVELFVBQU0sTUFBTSxHQUFHLEVBQWY7QUFDQSxVQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBVixDQUFrQixTQUFsQixDQUFsQjs7QUFDQSxjQUFRLEtBQUssUUFBTCxDQUFjLGdCQUF0QjtBQUNFLGFBQUssV0FBTDtBQUNFLGlCQUFPLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFNBQWxCLENBQVA7O0FBQ0YsYUFBSyxRQUFMO0FBQ0UsZUFBSyxJQUFNLElBQVgsSUFBbUIsU0FBbkIsRUFBOEI7QUFDNUIsZ0JBQUksR0FBRyxjQUFILENBQWtCLElBQWxCLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDLENBQUosRUFBNkM7QUFDM0MsY0FBQSxNQUFNLENBQUMsSUFBUCxXQUFlLElBQWYsY0FBdUIsU0FBUyxDQUFDLElBQUQsQ0FBaEM7QUFDRDtBQUNGOztBQUNELGlCQUFPLE1BQVA7O0FBQ0YsYUFBSyxNQUFMO0FBQ0E7QUFDRSxpQkFBTyxTQUFQO0FBWko7QUFjRDtBQUVEOzs7Ozs7Ozs7OEJBTVUsZSxFQUEwQjtBQUFBOztBQUNsQyxVQUFJLGVBQUosRUFBcUI7QUFDbkIsWUFBSSxLQUFLLEdBQUwsQ0FBUyxJQUFULEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCLGNBQUksS0FBSyxHQUFMLENBQVMsTUFBVCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxnQkFBSSxLQUFLLEdBQUwsQ0FBUyxvQkFBVCxJQUFpQyxLQUFLLEdBQUwsQ0FBUyxnQkFBOUMsRUFBZ0U7QUFDOUQsa0JBQUksS0FBSyxHQUFMLENBQVMsZ0JBQVQsSUFBNkIsS0FBSyxHQUFMLENBQVMsb0JBQTFDLEVBQWdFO0FBQzlELGdCQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsc0NBQWQ7QUFDQSxxQkFBSyxHQUFMLENBQVMsaUJBQVQsR0FBNkIsV0FBN0I7QUFDRCxlQUhELE1BR087QUFDTCxnQkFBQSxPQUFPLENBQUMsS0FBUixDQUFjLHVDQUFkO0FBQ0EscUJBQUssR0FBTCxDQUFTLGlCQUFULEdBQTZCLFlBQTdCO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxLQUFLLEdBQUwsQ0FBUyxvQkFBVCxJQUFpQyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsTUFBcEQsRUFBNEQ7QUFDMUQsa0JBQUksS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLE1BQWYsSUFBeUIsS0FBSyxHQUFMLENBQVMsb0JBQXRDLEVBQTREO0FBQzFELGdCQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsZ0NBQWQ7QUFDQSxxQkFBSyxHQUFMLENBQVMsY0FBVCxHQUEwQixRQUExQjtBQUNELGVBSEQsTUFHTztBQUNMLGdCQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsZ0NBQWQ7QUFDQSxxQkFBSyxHQUFMLENBQVMsY0FBVCxHQUEwQixRQUExQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsVUFBSSxVQUFVLEdBQUcsS0FBakI7O0FBQ0EsVUFBSSxLQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsT0FBYiw0QkFBMEIsS0FBSyxZQUEvQixnRkFBMEIsbUJBQW1CLEdBQTdDLG9GQUEwQixzQkFBd0IsR0FBbEQsMkRBQTBCLHVCQUE2QixPQUF2RCxLQUNBLEtBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxPQUFiLEtBQXlCLFFBRDdCLEVBQ3VDO0FBQ3JDLGFBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxPQUFiLEdBQXVCLGtCQUFrQixDQUFDLEtBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxPQUFkLENBQXpDO0FBQ0EsUUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNEOztBQUVELFVBQU0sWUFBWSxHQUFHLEtBQUssZUFBTCxDQUFxQixlQUFyQixDQUFyQjs7QUFFQSxVQUFJLEtBQUssUUFBTCxDQUFjLFlBQWxCLEVBQWdDO0FBQzlCLFlBQUksS0FBSyxXQUFMLEtBQXFCLGdCQUFnQixDQUFDLGVBQTFDLEVBQTJEO0FBQ3pELFVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYywwQkFDVCxlQUFlLEdBQUcsS0FBSCxHQUFXLElBRGpCLElBQ3lCLEtBRHZDO0FBRUEsVUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFlBQWQ7QUFDRDs7QUFDRCxZQUFNLE1BQU0sR0FBRyxLQUFLLGtCQUFMLENBQXdCLEtBQUssUUFBTCxDQUFjLFlBQXRDLEVBQ1gsWUFEVyxDQUFmLENBTjhCLENBUTlCOztBQUNBLFlBQUksVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFQLEtBQXNCLFNBQXBDLElBQ0EsTUFBTSxDQUFDLFVBQVAsS0FBc0IsRUFEMUIsRUFDOEI7QUFDNUIsVUFBQSxRQUFRLG1DQUEwQixNQUFNLENBQUMsVUFBakMsV0FBUjtBQUNEOztBQUNELGVBQU8sTUFBUDtBQUNELE9BZEQsTUFjTztBQUNMLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSwwQkFDUCxlQUFlLEdBQUcsS0FBSCxHQUFXLElBRG5CLElBQzJCLEtBRHZDO0FBRUEsUUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFDQSxlQUFPLGdCQUFnQixDQUFDLFVBQXhCO0FBQ0Q7QUFDRjs7O3dCQTNmYTtBQUNaLG1DQUFPLElBQVA7QUFDRDs7OztFQXBDdUMsb0I7Ozs7Ozs7Ozs7Ozs7O0FDM0IxQzs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGNBQWMsR0FBRywwQkFBYSxJQUFwQztBQUNBLElBQU0sVUFBVSxHQUFHLGtCQUFNLElBQXpCO0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyx3QkFBVyxPQUF2QztBQUVBOzs7O0lBR2EsRzs7Ozs7QUFDWDs7OztBQUlBLGVBQVksV0FBWixFQUFrQztBQUFBOztBQUFBOztBQUNoQyw4QkFBTSxjQUFjLENBQUMsWUFBckI7QUFFQSxRQUFJLFdBQUosRUFBaUIsTUFBSyxVQUFMO0FBRWpCLFVBQUssa0JBQUwsR0FBMEIsSUFBSSxzQkFBSixFQUExQjtBQUNBLFVBQUssWUFBTCxHQUFvQixJQUFJLGtCQUFKLEVBQXBCO0FBQ0EsVUFBSyxvQkFBTCxHQUE0QixJQUFJLHNCQUFKLEVBQTVCO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLElBQUksYUFBSixFQUFsQjtBQUNBLFVBQUssS0FBTCxHQUFhLElBQUksUUFBSixFQUFiO0FBVGdDO0FBVWpDO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSxvQ0FBSyxrQkFBTCxnRkFBeUIsVUFBekI7QUFDQSxpQ0FBSyxZQUFMLDBFQUFtQixVQUFuQjtBQUNBLG9DQUFLLG9CQUFMLGdGQUEyQixVQUEzQjtBQUNBLCtCQUFLLFVBQUwsc0VBQWlCLFVBQWpCO0FBQ0EsMEJBQUssS0FBTCw0REFBWSxVQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWtCUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2Isd0JBQWdCLEtBQUssWUFEUjtBQUViLHVCQUFlLEtBQUssV0FGUDtBQUdiLG9CQUFZLEtBQUssUUFISjtBQUliLDZCQUFxQixLQUFLLGlCQUpiO0FBS2IsZ0JBQVEsS0FBSyxJQUxBO0FBTWIsc0JBQWMsS0FBSyxVQU5OO0FBT2Isd0JBQWdCLEtBQUssWUFQUjtBQVFiLDhCQUFzQixLQUFLLGtCQVJkO0FBU2IsZ0NBQXdCLEtBQUssb0JBVGhCO0FBVWIsd0JBQWdCLEtBQUssWUFWUjtBQVdiLHNCQUFjLEtBQUssVUFYTjtBQVliLGlCQUFTLEtBQUs7QUFaRCxPQUFmO0FBY0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztFQWpFc0IsVUFBVSxDQUFDLEc7QUFvRXBDOzs7Ozs7O0lBR00sYTs7Ozs7QUFDSjs7O0FBR0EsMkJBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUVBLFdBQUssUUFBTCxHQUFnQixJQUFJLHFCQUFKLEVBQWhCO0FBSFk7QUFJYjtBQUVEOzs7Ozs7O2lDQUdhO0FBQUE7O0FBQ1g7O0FBQ0EsNkJBQUssUUFBTCxrRUFBZSxVQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs2QkFJUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2Isb0JBQVksS0FBSztBQURKLE9BQWY7QUFHQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0VBN0J5QixlO0FBZ0M1Qjs7Ozs7SUFHTSxxQjs7Ozs7QUFDSjs7O0FBR0EsbUNBQWM7QUFBQTs7QUFBQSw4QkFDTixjQUFjLENBQUMsaUJBRFQsRUFFUixtQkFBbUIsQ0FBQyxpQkFGWjtBQUdiOzs7RUFQaUMsZ0I7QUFVcEM7Ozs7O0lBR00sc0I7Ozs7O0FBQ0o7OztBQUdBLG9DQUFjO0FBQUE7O0FBQUE7O0FBQ1osZ0NBQU0sY0FBYyxDQUFDLDJCQUFyQjs7QUFEWTtBQUFBO0FBQUEsYUFpQkM7QUFqQkQ7O0FBQUE7QUFBQTtBQUFBLGFBa0JBO0FBbEJBOztBQUFBO0FBQUE7QUFBQSxhQW1CRztBQW5CSDs7QUFBQTtBQUFBO0FBQUEsYUFvQkQ7QUFwQkM7O0FBQUE7QUFBQTtBQUFBLGFBcUJMO0FBckJLOztBQUdaLFdBQUssT0FBTCxHQUFlLElBQUksZ0JBQUosQ0FBYTtBQUMxQixNQUFBLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxpQkFETDtBQUUxQixNQUFBLFFBQVEsRUFBRTtBQUZnQixLQUFiLENBQWY7QUFIWTtBQU9iO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSw0QkFBSyxPQUFMLGdFQUFjLFVBQWQ7QUFDRDs7OztBQWtHRDs7Ozs7Ozs7Ozs7OzZCQVlTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixpQkFBUyxLQUFLLEtBREQ7QUFFYixvQkFBWSxLQUFLLFFBRko7QUFHYix1QkFBZSxLQUFLLFdBSFA7QUFJYixpQkFBUyxLQUFLLEtBSkQ7QUFLYixnQkFBUSxLQUFLLElBTEE7QUFNYixzQkFBYyxLQUFLLFVBTk47QUFPYix5QkFBaUIsS0FBSyxhQVBUO0FBUWIscUJBQWEsS0FBSyxTQVJMO0FBU2IsaUJBQVMsS0FBSyxLQVREO0FBVWIsbUJBQVcsS0FBSztBQVZILE9BQWY7QUFZQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBdEhEOzs7O3dCQUkwQjtBQUN4QixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWdCLFcsRUFBcUI7QUFDbkMsVUFBSSxtQ0FBbUIsV0FBbkIsRUFBZ0MsVUFBVSxDQUFDLFlBQTNDLENBQUosRUFBOEQ7QUFDNUQsa0RBQW9CLFdBQXBCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUl5QjtBQUN2QixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWUsVSxFQUFvQjtBQUNqQyxVQUFJLG1DQUFtQixVQUFuQixFQUErQixVQUFVLENBQUMsWUFBMUMsQ0FBSixFQUE2RDtBQUMzRCxpREFBbUIsVUFBbkI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSTRCO0FBQzFCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJa0IsYSxFQUF1QjtBQUN2QyxVQUFJLG1DQUFtQixhQUFuQixFQUFrQyxVQUFVLENBQUMsWUFBN0MsQ0FBSixFQUFnRTtBQUM5RCxvREFBc0IsYUFBdEI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSXdCO0FBQ3RCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJYyxTLEVBQW1CO0FBQy9CLFVBQUksbUNBQW1CLFNBQW5CLEVBQThCLFVBQVUsQ0FBQyxZQUF6QyxDQUFKLEVBQTREO0FBQzFELGdEQUFrQixTQUFsQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJb0I7QUFDbEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlVLEssRUFBZTtBQUN2QixVQUFJLG1DQUFtQixLQUFuQixFQUEwQixVQUFVLENBQUMsWUFBckMsQ0FBSixFQUF3RDtBQUN0RCw0Q0FBYyxLQUFkO0FBQ0Q7QUFDRjs7OztFQW5Ia0MsVUFBVSxDQUFDLG9CO0FBb0poRDs7Ozs7Ozs7Ozs7Ozs7O0lBR00sa0I7Ozs7O0FBQ0o7OztBQUdBLGdDQUFjO0FBQUE7O0FBQUE7O0FBQ1osZ0NBQU0sY0FBYyxDQUFDLHFCQUFyQjs7QUFEWTtBQUFBO0FBQUEsYUFjUztBQWRUOztBQUdaLFdBQUssS0FBTCxHQUFhLElBQUksUUFBSixFQUFiO0FBSFk7QUFJYjtBQUVEOzs7Ozs7O2lDQUdhO0FBQUE7O0FBQ1g7O0FBQ0EsMEJBQUssS0FBTCw0REFBWSxVQUFaO0FBQ0Q7Ozs7QUF1QkQ7Ozs7Ozs7Ozs7OzZCQVdTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYix5QkFBaUIsS0FBSyxhQURUO0FBRWIsNEJBQW9CLEtBQUssZ0JBRlo7QUFHYiw2QkFBcUIsS0FBSyxpQkFIYjtBQUliLGlCQUFTLEtBQUs7QUFKRCxPQUFmO0FBTUEsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztBQXhDRDs7Ozt3QkFJMEI7QUFDeEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLd0IsbUIsRUFBcUI7QUFDM0MsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESix3QkFDZ0MsbUJBRGhDLElBRUksb0NBRko7QUFHRDs7OztFQXJDOEIsVUFBVSxDQUFDLGM7QUErRDVDOzs7Ozs7O0lBR2Esc0I7Ozs7O0FBQ1g7OztBQUdBLG9DQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBSUQsY0FBYyxDQUFDO0FBSmQ7O0FBQUE7QUFBQTtBQUFBLGFBS047QUFMTTs7QUFBQTtBQUFBO0FBQUEsYUFNTDtBQU5LOztBQUFBO0FBQUE7QUFBQSxhQU9IO0FBUEc7O0FBQUE7QUFBQTtBQUFBLGFBUUg7QUFSRzs7QUFBQTtBQUFBO0FBQUEsYUFTQTtBQVRBOztBQUFBO0FBQUE7QUFBQSxhQVVHO0FBVkg7O0FBQUE7QUFBQTtBQUFBLGFBV0s7QUFYTDs7QUFBQTtBQUFBO0FBQUEsYUFZTDtBQVpLOztBQUFBO0FBQUE7QUFBQSxhQWFLO0FBYkw7O0FBQUE7QUFBQTtBQUFBLGFBY0w7QUFkSzs7QUFBQTtBQUFBO0FBQUEsYUFlSTtBQWZKOztBQUFBO0FBQUE7QUFBQSxhQWdCRDtBQWhCQzs7QUFBQTtBQUFBO0FBQUEsYUFpQk07QUFqQk47O0FBQUE7QUFFYjs7Ozs7QUF3UUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW9CUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2IsZ0JBQVEsS0FBSyxJQURBO0FBRWIsaUJBQVMsYUFGSTtBQUdiLG1CQUFXLEtBQUssT0FISDtBQUliLG1CQUFXLEtBQUssT0FKSDtBQUtiLHNCQUFjLEtBQUssVUFMTjtBQU1iLHlCQUFpQixLQUFLLGFBTlQ7QUFPYiwyQkFBbUIsS0FBSyxlQVBYO0FBUWIsaUJBQVMsS0FBSyxLQVJEO0FBU2IsMkJBQW1CLEtBQUssZUFUWDtBQVViLGlCQUFTLEtBQUssS0FWRDtBQVdiLDBCQUFrQixLQUFLLGNBWFY7QUFZYixxQkFBYSxLQUFLLFNBWkw7QUFhYiw0QkFBb0IsS0FBSztBQWJaLE9BQWY7QUFlQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBOVJEOzs7O3dCQUlXO0FBQ1QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLUyxJLEVBQU07QUFDYixPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLFNBQ2lCLElBRGpCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlZO0FBQ1YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLVSxLLEVBQU87QUFDZixPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLFVBQ2tCLEtBRGxCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUljO0FBQ1osbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLWSxPLEVBQVM7QUFDbkIsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixZQUNvQixPQURwQixJQUVJLG9DQUZKO0FBR0Q7QUFFRDs7Ozs7Ozt3QkFJYztBQUNaLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0JBS1ksTyxFQUFTO0FBQ25CLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosWUFDb0IsT0FEcEIsSUFFSSxvQ0FGSjtBQUdEO0FBRUQ7Ozs7Ozs7d0JBSWlCO0FBQ2YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLZSxVLEVBQVk7QUFDekIsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixlQUN1QixVQUR2QixJQUVJLG9DQUZKO0FBR0Q7QUFFRDs7Ozs7Ozt3QkFJb0I7QUFDbEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLa0IsYSxFQUFlO0FBQy9CLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosa0JBQzBCLGFBRDFCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlzQjtBQUNwQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtvQixlLEVBQWlCO0FBQ25DLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosb0JBQzRCLGVBRDVCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlZO0FBQ1YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLVSxLLEVBQU87QUFDZixPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLFVBQ2tCLEtBRGxCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlzQjtBQUNwQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtvQixlLEVBQWlCO0FBQ25DLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosb0JBQzRCLGVBRDVCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlZO0FBQ1YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLVSxLLEVBQU87QUFDZixPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLFVBQ2tCLEtBRGxCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlxQjtBQUNuQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUttQixjLEVBQWdCO0FBQ2pDLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosbUJBQzJCLGNBRDNCLElBRUksb0NBRko7QUFHRDtBQUVEOzs7Ozs7O3dCQUlnQjtBQUNkLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0JBS2MsUyxFQUFXO0FBQ3ZCLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosY0FDc0IsU0FEdEIsSUFFSSxvQ0FGSjtBQUdEO0FBRUQ7Ozs7Ozs7d0JBSXVCO0FBQ3JCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0JBS3FCLGdCLEVBQWtCO0FBQ3JDLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREoscUJBQzZCLGdCQUQ3QixJQUVJLG9DQUZKO0FBR0Q7Ozs7RUE1UXlDLGU7QUF3VDVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdhLFE7Ozs7O0FBQ1g7OztBQUdBLHNCQUFjO0FBQUE7O0FBQUEsOEJBQ04sY0FBYyxDQUFDLGNBRFQ7QUFFYjs7O0VBTjJCLGdCO0FBUzlCOzs7Ozs7O0lBR2EsYzs7Ozs7QUFDWDs7O0FBR0EsNEJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUEsYUFJQztBQUpEOztBQUFBO0FBQUE7QUFBQSxhQUtOO0FBTE07O0FBQUE7QUFBQTtBQUFBLGFBTU47QUFOTTs7QUFBQTtBQUFBO0FBQUEsYUFPSjtBQVBJOztBQUFBO0FBQUE7QUFBQSxhQVFGO0FBUkU7O0FBQUE7QUFBQTtBQUFBLGFBU0s7QUFUTDs7QUFBQTtBQUViOzs7OztBQXFIRDs7Ozs7Ozs7Ozs7Ozs2QkFhUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2IsdUJBQWUsS0FBSyxXQURQO0FBRWIsZ0JBQVEsS0FBSyxJQUZBO0FBR2IsZ0JBQVEsS0FBSyxJQUhBO0FBSWIsa0JBQVUsS0FBSyxNQUpGO0FBS2Isb0JBQVksS0FBSyxRQUxKO0FBTWIsMkJBQW1CLEtBQUs7QUFOWCxPQUFmO0FBUUEsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztBQXJJRDs7Ozt3QkFJa0I7QUFDaEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlnQixXLEVBQWE7QUFDM0IsVUFBSSxtQ0FBbUIsV0FBbkIsRUFBZ0MsVUFBVSxDQUFDLFlBQTNDLENBQUosRUFBOEQ7QUFDNUQsa0RBQW9CLFdBQXBCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlXO0FBQ1QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlTLEksRUFBTTtBQUNiLFVBQUksbUNBQW1CLElBQW5CLEVBQXlCLFVBQVUsQ0FBQyxZQUFwQyxDQUFKLEVBQXVEO0FBQ3JELDJDQUFhLElBQWI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVMsSSxFQUFNO0FBQ2IsVUFBSSxtQ0FBbUIsSUFBbkIsRUFBeUIsVUFBVSxDQUFDLE9BQXBDLENBQUosRUFBa0Q7QUFDaEQsMkNBQWEsSUFBYjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJYTtBQUNYLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJVyxNLEVBQVE7QUFDakIsVUFBSSxtQ0FBbUIsTUFBbkIsRUFBMkIsVUFBVSxDQUFDLFVBQXRDLENBQUosRUFBdUQ7QUFDckQsNkNBQWUsTUFBZjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJZTtBQUNiLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJYSxRLEVBQVU7QUFDckIsVUFBSSxtQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVSxDQUFDLFlBQXhDLENBQUosRUFBMkQ7QUFDekQsK0NBQWlCLFFBQWpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlzQjtBQUNwQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSW9CLGUsRUFBaUI7QUFDbkMsVUFBSSxtQ0FBbUIsZUFBbkIsRUFBb0MsVUFBVSxDQUFDLE9BQS9DLENBQUosRUFBNkQ7QUFDM0Qsc0RBQXdCLGVBQXhCO0FBQ0Q7QUFDRjs7OztFQXpIaUMsZTtBQXVKcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYSxROzs7OztBQUNYOzs7QUFHQSxzQkFBYztBQUFBOztBQUFBLDhCQUNOLGNBQWMsQ0FBQyxjQURUO0FBRWI7OztFQU4yQixnQjtBQVM5Qjs7Ozs7OztJQUdhLGM7Ozs7O0FBQ1g7OztBQUdBLDRCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBcUJKO0FBckJJOztBQUFBO0FBQUE7QUFBQSxhQXNCTjtBQXRCTTs7QUFHWixXQUFLLEtBQUwsR0FBYSxJQUFJLGdCQUFKLENBQ1Q7QUFDRSxNQUFBLGNBQWMsRUFBRSxjQUFjLENBQUMsY0FEakM7QUFFRSxNQUFBLFdBQVcsRUFBRSxVQUFVLENBQUMsV0FGMUI7QUFHRSxNQUFBLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLGlCQUh4QztBQUlFLE1BQUEsZUFBZSxFQUFFLG1CQUFtQixDQUFDLGFBSnZDO0FBS0UsTUFBQSxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztBQUx4QyxLQURTLENBQWI7QUFIWTtBQVdiO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSwwQkFBSyxLQUFMLDREQUFZLFVBQVo7QUFDRDs7OztBQXlDRDs7Ozs7Ozs7Ozs2QkFVUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2Isa0JBQVUsS0FBSyxNQURGO0FBRWIsZ0JBQVEsS0FBSyxJQUZBO0FBR2IsaUJBQVMsS0FBSztBQUhELE9BQWY7QUFLQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBdkREOzs7O3dCQUlhO0FBQ1gsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlXLE0sRUFBUTtBQUNqQixVQUFJLG1DQUFtQixNQUFuQixFQUEyQixVQUFVLENBQUMsVUFBdEMsQ0FBSixFQUF1RDtBQUNyRCw4Q0FBZSxNQUFmO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlXO0FBQ1QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlTLEksRUFBTTtBQUNiLFVBQUksbUNBQW1CLElBQW5CLEVBQXlCLFVBQVUsQ0FBQyxPQUFwQyxDQUFKLEVBQWtEO0FBQ2hELDRDQUFhLElBQWI7QUFDRDtBQUNGOzs7O0VBOURpQyxlO0FBc0ZwQzs7Ozs7Ozs7Ozs7SUFHYSxpQjs7Ozs7QUFDWDs7O0FBR0EsK0JBQWM7QUFBQTs7QUFBQSwrQkFDTixjQUFjLENBQUMsd0JBRFQ7QUFFYjs7O0VBTm9DLGdCO0FBU3ZDOzs7Ozs7O0lBR2EsdUI7Ozs7O0FBQ1g7OztBQUdBLHFDQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBcUJHO0FBckJIOztBQUdaLFdBQUssS0FBTCxHQUFhLElBQUksZ0JBQUosQ0FDVDtBQUNFLE1BQUEsY0FBYyxFQUFFLGNBQWMsQ0FBQyxjQURqQztBQUVFLE1BQUEsV0FBVyxFQUFFLFVBQVUsQ0FBQyxXQUYxQjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsaUJBSHhDO0FBSUUsTUFBQSxlQUFlLEVBQUUsbUJBQW1CLENBQUMsYUFKdkM7QUFLRSxNQUFBLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBTHhDLEtBRFMsQ0FBYjtBQUhZO0FBV2I7QUFFRDs7Ozs7OztpQ0FHYTtBQUFBOztBQUNYOztBQUNBLDJCQUFLLEtBQUwsOERBQVksVUFBWjtBQUNEOzs7O0FBc0JEOzs7Ozs7Ozs7OzZCQVVTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYix5QkFBaUIsS0FBSyxhQURUO0FBRWIsaUJBQVMsS0FBSztBQUZELE9BQWY7QUFJQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBcENEOzs7O3dCQUlvQjtBQUNsQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWtCLGEsRUFBZTtBQUMvQixVQUFJLG1DQUFtQixhQUFuQixFQUFrQyxVQUFVLENBQUMsVUFBN0MsQ0FBSixFQUE4RDtBQUM1RCxvREFBc0IsYUFBdEI7QUFDRDtBQUNGOzs7O0VBM0MwQyxlO0FBa0U3Qzs7Ozs7Ozs7O0lBR2EsMkI7Ozs7O0FBQ1g7OztBQUdBLHlDQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBSUg7QUFKRzs7QUFBQTtBQUFBO0FBQUEsYUFLRjtBQUxFOztBQUFBO0FBQUE7QUFBQSxhQU1OO0FBTk07O0FBQUE7QUFFYjs7Ozs7QUE0REQ7Ozs7Ozs7Ozs7NkJBVVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLG1CQUFXLEtBQUssT0FESDtBQUViLG9CQUFZLEtBQUssUUFGSjtBQUdiLGdCQUFRLEtBQUs7QUFIQSxPQUFmO0FBS0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztBQXpFRDs7Ozt3QkFJYztBQUNaLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJWSxPLEVBQVM7QUFDbkIsVUFBSSxtQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVSxDQUFDLFlBQXZDLENBQUosRUFBMEQ7QUFDeEQsOENBQWdCLE9BQWhCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUllO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlhLFEsRUFBVTtBQUNyQixVQUFJLG1DQUFtQixRQUFuQixFQUE2QixVQUFVLENBQUMsWUFBeEMsQ0FBSixFQUEyRDtBQUN6RCwrQ0FBaUIsUUFBakI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVMsSSxFQUFNO0FBQ2IsVUFBSSxtQ0FBbUIsSUFBbkIsRUFBeUIsVUFBVSxDQUFDLE9BQXBDLENBQUosRUFBa0Q7QUFDaEQsNENBQWEsSUFBYjtBQUNEO0FBQ0Y7Ozs7RUFoRThDLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdi9CakQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsR0FBRywwQkFBYSxPQUF2QztBQUNBLElBQU0sYUFBYSxHQUFHLGtCQUFNLE9BQTVCO0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyx3QkFBVyxPQUF2QztBQUVBOzs7Ozs7Ozs7O0FBU08sU0FBUyxnQkFBVCxDQUNILEtBREcsRUFFSCxZQUZHLEVBR0gsU0FIRyxFQUlILGdCQUpHLEVBSXlCO0FBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBSixDQUFXLFlBQVgsQ0FBcEI7QUFDQSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLFdBQVosQ0FBaEI7O0FBQ0EsTUFBSSxnQkFBZ0IsSUFBSSxLQUFLLEtBQUssRUFBbEMsRUFBc0M7QUFDcEMsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSSxLQUFLLEtBQUssU0FBVixJQUF1QixDQUFDLE9BQXhCLElBQW1DLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxFQUF0RCxFQUEwRDtBQUN4RCxVQUFNLElBQUksMkJBQUosQ0FBb0IsU0FBcEIsQ0FBTjtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRTyxTQUFTLGVBQVQsQ0FDSCxLQURHLEVBQ1MsWUFEVCxFQUMrQixTQUQvQixFQUNrRDtBQUN2RCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBYixDQUFtQixHQUFuQixDQUFmO0FBQ0EsRUFBQSxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQWhCOztBQUNBLE1BQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFELENBQW5CLEVBQXdCO0FBQ3RCLFFBQUssTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLEdBQWYsSUFBd0IsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFELENBQTNDLEVBQWlEO0FBQy9DLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sSUFBSSwyQkFBSixDQUFvQixTQUFwQixDQUFOO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTCxVQUFNLElBQUksMkJBQUosQ0FBb0IsU0FBcEIsQ0FBTjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7SUFHYSxPO0FBSVg7OztBQUdBLHFCQUFjO0FBQUE7O0FBQUEsd0NBTkQsS0FNQzs7QUFBQTtBQUFBO0FBQUEsYUFMQztBQUtEOztBQUNaLFFBQUksMERBQWUsT0FBbkIsRUFBNEI7QUFDMUIsWUFBTSxJQUFJLFNBQUosQ0FBYyw2Q0FBZCxDQUFOO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7QUFRQTs7O2lDQUdhO0FBQ1gsZ0RBQW9CLElBQXBCO0FBQ0Q7Ozt3QkFUaUI7QUFDaEIsbUNBQU8sSUFBUDtBQUNEOzs7OztBQVVIOzs7Ozs7Ozs7SUFHYSxROzs7OztBQUNYOzs7Ozs7Ozs7O0FBVUEsMEJBU087QUFBQTs7QUFBQSxRQVBELGNBT0MsUUFQRCxjQU9DO0FBQUEsUUFORCxXQU1DLFFBTkQsV0FNQztBQUFBLFFBTEQsR0FLQyxRQUxELEdBS0M7QUFBQSxRQUpELGdCQUlDLFFBSkQsZ0JBSUM7QUFBQSxRQUhELGVBR0MsUUFIRCxlQUdDO0FBQUEsUUFGRCxnQkFFQyxRQUZELGdCQUVDO0FBQUEsUUFERCxZQUNDLFFBREQsWUFDQzs7QUFBQTs7QUFDTDs7QUFESztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUF1QkE7QUF2QkE7O0FBQUE7QUFBQTtBQUFBLGFBd0JBO0FBeEJBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdMLHFFQUFrQixjQUFjLElBQzVCLGlCQUFpQixDQUFDLGNBRHRCOztBQUVBLHVFQUFxQixDQUFDLFdBQUQsR0FBZSxLQUFmLEdBQXVCLGFBQWEsQ0FBQyxXQUExRDs7QUFDQSwrREFBYSxHQUFHLElBQUksR0FBRyxLQUFLLEVBQWhCLEdBQXNCLEdBQXRCLEdBQTRCLEtBQXhDOztBQUNBLDhFQUE0QixnQkFBZ0IsSUFDeEMsbUJBQW1CLENBQUMsaUJBRHhCOztBQUVBLDZFQUEyQixlQUFlLElBQ3RDLG1CQUFtQixDQUFDLGFBRHhCOztBQUVBLDhFQUE0QixnQkFBZ0IsSUFDeEMsbUJBQW1CLENBQUMsa0JBRHhCOztBQUVBLHlFQUF1QixZQUFZLElBQy9CLGFBQWEsQ0FBQyxVQURsQjs7QUFiSztBQWVOOzs7OztBQWdHRDs7Ozs2QkFJUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2IsZUFBTyxLQUFLLEdBREM7QUFFYixlQUFPLEtBQUssR0FGQztBQUdiLGVBQU8sS0FBSztBQUhDLE9BQWY7QUFLQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBakdEOzs7Ozt3QkFLZ0I7QUFDZCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtjLFMsRUFBVztBQUN2QixZQUFNLElBQUksMkJBQUosdUJBQW9CLElBQXBCLHVCQUFOO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJVTtBQUNSLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJUSxHLEVBQUs7QUFDWCxVQUFJLGdCQUFnQixDQUFDLEdBQUQsd0JBQU0sSUFBTix5Q0FDaEIsSUFEZ0Isc0JBQWhCLEtBRUMsdUJBQUMsSUFBRCxtQkFDRyxlQUFlLENBQUMsR0FBRCx3QkFBTSxJQUFOLHVDQUNYLElBRFcsdUJBSG5CLENBQUosRUFJeUM7QUFDdkMsMENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJVTtBQUNSLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJUSxHLEVBQUs7QUFDWCxVQUFJLGdCQUFnQixDQUFDLEdBQUQsd0JBQU0sSUFBTix5Q0FDaEIsSUFEZ0Isc0JBQWhCLEtBRUMsdUJBQUMsSUFBRCxtQkFDRyxlQUFlLENBQUMsR0FBRCx3QkFBTSxJQUFOLHVDQUNYLElBRFcsdUJBSG5CLENBQUosRUFJeUM7QUFDdkMsMENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJVTtBQUNSLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJUSxHLEVBQUs7QUFDWCxVQUFJLGdCQUFnQixDQUFDLEdBQUQsd0JBQU0sSUFBTix5Q0FDaEIsSUFEZ0Isc0JBQWhCLEtBRUMsdUJBQUMsSUFBRCxtQkFDRyxlQUFlLENBQUMsR0FBRCx3QkFBTSxJQUFOLHVDQUNYLElBRFcsdUJBSG5CLENBQUosRUFJeUM7QUFDdkMsMENBQVksR0FBWjtBQUNEO0FBQ0Y7Ozs7RUFqSTJCLE87QUFtSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2EsUTs7Ozs7QUFDWDs7Ozs7QUFLQSwyQkFBbUM7QUFBQTs7QUFBQSxRQUF0QixRQUFzQixTQUF0QixRQUFzQjtBQUFBLFFBQVosU0FBWSxTQUFaLFNBQVk7O0FBQUE7O0FBQ2pDOztBQURpQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFakMsc0VBQWtCLFFBQWxCOztBQUNBLHNFQUFrQixTQUFsQjs7QUFDQSxXQUFLLFVBQUwsR0FBa0IsRUFBbEI7QUFKaUM7QUFLbEM7Ozs7O0FBcUNEOzs7OzZCQUlTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEtBQUssVUFBTCxDQUFnQixNQUFwQyxFQUE0QyxDQUFDLEVBQTdDLEVBQWlEO0FBQy9DLFFBQUEsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQU4sR0FBaUIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQWpCO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztBQTVDRDs7Ozt3QkFJZ0I7QUFDZCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWMsUyxFQUFXO0FBQ3ZCLFlBQU0sSUFBSSwyQkFBSix1QkFBb0IsSUFBcEIsY0FBTjtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWE7QUFDWCxhQUFPLEtBQUssVUFBTCxDQUFnQixNQUF2QjtBQUNEO0FBRUQ7Ozs7O3NCQUlXLE0sRUFBUTtBQUNqQixZQUFNLElBQUksMkJBQUosdUJBQW9CLElBQXBCLGNBQU47QUFDRDs7OztFQTlDMkIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUDlCOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsR0FBRywwQkFBYSxPQUF2QztBQUNBLElBQU0sYUFBYSxHQUFHLGtCQUFNLE9BQTVCO0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyx3QkFBVyxPQUF2QztBQUVBOzs7O0FBR08sU0FBUyxrQkFBVCxHQUE4QjtBQUNuQyxRQUFNLElBQUksMkJBQUosQ0FBb0IsbUJBQW1CLENBQUMsaUJBQXhDLENBQU47QUFDRDtBQUVEOzs7OztBQUdPLFNBQVMsbUJBQVQsR0FBK0I7QUFDcEMsUUFBTSxJQUFJLDJCQUFKLENBQW9CLG1CQUFtQixDQUFDLGtCQUF4QyxDQUFOO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFTLHNCQUFULEdBQWtDO0FBQ2hDLFFBQU0sSUFBSSwyQkFBSixDQUFvQixtQkFBbUIsQ0FBQyxpQkFBeEMsQ0FBTjtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVMsa0JBQVQsQ0FDSCxLQURHLEVBRUgsWUFGRyxFQUdILGdCQUhHLEVBR3lCO0FBQzlCLFNBQU8sOEJBQWlCLEtBQWpCLEVBQXdCLFlBQXhCLEVBQ0gsbUJBQW1CLENBQUMsYUFEakIsRUFDZ0MsZ0JBRGhDLENBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7QUFPTyxTQUFTLGlCQUFULENBQ0gsS0FERyxFQUVILFlBRkcsRUFHSCxnQkFIRyxFQUd5QjtBQUM5QixTQUFPLDZCQUFnQixLQUFoQixFQUF1QixZQUF2QixFQUNILG1CQUFtQixDQUFDLGtCQURqQixFQUNxQyxnQkFEckMsQ0FBUDtBQUVEO0FBRUQ7Ozs7O0lBR2EsRzs7Ozs7QUFTWDs7Ozs7O0FBTUEsZUFBWSxZQUFaLEVBQTBCLFlBQTFCLEVBQXdDLFdBQXhDLEVBQThEO0FBQUE7O0FBQUE7O0FBQzVEOztBQUQ0RDtBQUFBO0FBQUEsYUFkakQ7QUFjaUQ7O0FBQUE7QUFBQTtBQUFBLGFBYmxEO0FBYWtEOztBQUFBO0FBQUE7QUFBQSxhQVovQztBQVkrQzs7QUFBQTtBQUFBO0FBQUEsYUFYbEQ7QUFXa0Q7O0FBQUE7QUFBQTtBQUFBLGFBVnpDO0FBVXlDOztBQUFBLG1FQVIvQyxJQVErQzs7QUFHNUQsUUFBSSxXQUFKLEVBQWlCLE1BQUssVUFBTDs7QUFFakIscUVBQWtCLFlBQVksR0FDMUIsWUFEMEIsR0FFMUIsaUJBQWlCLENBQUMsWUFGdEI7O0FBR0EsVUFBSyxJQUFMLEdBQVksSUFBSSxPQUFKLEVBQVo7QUFDQSxVQUFLLFVBQUwsR0FBa0IsSUFBSSxhQUFKLEVBQWxCO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLFlBQVksR0FBRyxZQUFILEdBQWtCLElBQUksY0FBSixFQUFsRDtBQUNBLFVBQUssa0JBQUwsR0FBMEIsSUFBSSxvQkFBSixFQUExQjtBQUNBLFVBQUssWUFBTCxHQUFvQixJQUFJLGVBQUosRUFBcEI7QUFaNEQ7QUFhN0Q7QUFFRDs7Ozs7OztpQ0FHYTtBQUFBOztBQUNYOztBQUNBLHlCQUFLLElBQUwsMERBQVcsVUFBWDtBQUNBLCtCQUFLLFVBQUwsc0VBQWlCLFVBQWpCO0FBQ0EsaUNBQUssWUFBTCwwRUFBbUIsVUFBbkI7QUFDQSxvQ0FBSyxrQkFBTCxnRkFBeUIsVUFBekI7QUFDQSxpQ0FBSyxZQUFMLDBFQUFtQixVQUFuQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWlCUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2Isd0JBQWdCLEtBQUssWUFEUjtBQUViLHVCQUFlLEtBQUssV0FGUDtBQUdiLG9CQUFZLEtBQUssUUFISjtBQUliLDZCQUFxQixLQUFLLGlCQUpiO0FBS2IsZ0JBQVEsS0FBSyxJQUxBO0FBTWIsc0JBQWMsS0FBSyxVQU5OO0FBT2Isd0JBQWdCLEtBQUssWUFQUjtBQVFiLDhCQUFzQixLQUFLLGtCQVJkO0FBU2Isd0JBQWdCLEtBQUs7QUFUUixPQUFmO0FBV0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDtBQUVEOzs7Ozs7OztBQXNHQTs7Ozs7MENBS3NCO0FBQ3BCLGFBQU8sS0FBSyxJQUFMLENBQVUsbUJBQVYsRUFBUDtBQUNEOzs7d0JBekdjO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlhLFEsRUFBVTtBQUNyQixNQUFBLHNCQUFzQjtBQUN2QjtBQUVEOzs7Ozs7O3dCQUlnQjtBQUNkLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJYyxTLEVBQVc7QUFDdkIsTUFBQSxzQkFBc0I7QUFDdkI7QUFFRDs7Ozs7Ozt3QkFJbUI7QUFBQTs7QUFDakIsNEJBQU8sS0FBSyxJQUFaLGdEQUFPLFlBQVcsWUFBbEI7QUFDRDtBQUVEOzs7OztzQkFJaUIsWSxFQUFjO0FBQzdCLFVBQUksS0FBSyxJQUFULEVBQWU7QUFDYixhQUFLLElBQUwsQ0FBVSxZQUFWLEdBQXlCLFlBQXpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlrQjtBQUNoQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWdCLFcsRUFBYTtBQUMzQixPQUFDLEtBQUssV0FBTix5QkFBb0IsSUFBcEIsZ0JBQXdDLFdBQXhDLElBQXNELGtCQUFrQixFQUF4RTtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWU7QUFDYixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWEsUSxFQUFVO0FBQ3JCLFVBQUksa0JBQWtCLENBQUMsUUFBRCxFQUFXLGFBQWEsQ0FBQyxhQUF6QixDQUF0QixFQUErRDtBQUM3RCwrQ0FBaUIsUUFBakI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSXdCO0FBQ3RCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJc0IsaUIsRUFBbUI7QUFDdkMsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixzQkFDOEIsaUJBRDlCLElBRUksa0JBQWtCLEVBRnRCO0FBR0Q7Ozs7RUFoTHNCLGU7QUE0THpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTSxPOzs7OztBQUNKOzs7QUFHQSxxQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQXFCRCxpQkFBaUIsQ0FBQztBQXJCakI7O0FBQUE7QUFBQTtBQUFBLGFBc0JBO0FBdEJBOztBQUFBO0FBQUE7QUFBQSxhQXVCRTtBQXZCRjs7QUFBQTtBQUFBO0FBQUEsYUF3Qks7QUF4Qkw7O0FBQUE7QUFBQTtBQUFBLGFBeUJKO0FBekJJOztBQUFBO0FBQUE7QUFBQSxhQTBCRztBQTFCSDs7QUFBQTtBQUFBO0FBQUEsYUEyQkw7QUEzQks7O0FBQUE7QUFBQTtBQUFBLGFBNEJBO0FBNUJBOztBQUFBO0FBQUE7QUFBQSxhQTZCQztBQTdCRDs7QUFBQTtBQUFBO0FBQUEsYUE4Qk47QUE5Qk07O0FBQUE7QUFBQTtBQUFBLGFBK0JFO0FBL0JGOztBQUFBO0FBQUE7QUFBQSxhQWdDRTtBQWhDRjs7QUFHWixXQUFLLEtBQUwsR0FBYSxJQUFJLGdCQUFKLENBQ1Q7QUFDRSxNQUFBLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxjQURwQztBQUVFLE1BQUEsV0FBVyxFQUFFLGFBQWEsQ0FBQyxXQUY3QjtBQUdFLE1BQUEsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsaUJBSHhDO0FBSUUsTUFBQSxlQUFlLEVBQUUsbUJBQW1CLENBQUMsYUFKdkM7QUFLRSxNQUFBLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBTHhDLEtBRFMsQ0FBYjtBQUhZO0FBV2I7QUFFRDs7Ozs7OztpQ0FHYTtBQUFBOztBQUNYOztBQUNBLDBCQUFLLEtBQUwsNERBQVksVUFBWjtBQUNEOzs7O0FBNk5EOzs7OzswQ0FLc0I7QUFDcEIsYUFBTyxTQUFTLENBQUMsb0JBQVYsdUJBQ0gsSUFERyxzQ0FFSCxJQUZHLGtCQUdILElBQUksTUFBSixDQUFXLGFBQWEsQ0FBQyxXQUF6QixDQUhHLENBQVA7QUFLRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBa0JTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixzQkFBYyxLQUFLLFVBRE47QUFFYix3QkFBZ0IsS0FBSyxZQUZSO0FBR2IsMkJBQW1CLEtBQUssZUFIWDtBQUliLGtCQUFVLEtBQUssTUFKRjtBQUtiLHlCQUFpQixLQUFLLGFBTFQ7QUFNYixpQkFBUyxLQUFLLEtBTkQ7QUFPYix1QkFBZSxLQUFLLFdBUFA7QUFRYixnQkFBUSxLQUFLLElBUkE7QUFTYix3QkFBZ0IsS0FBSyxZQVRSO0FBVWIsaUJBQVMsS0FBSztBQVZELE9BQWY7QUFZQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBN1BEOzs7Ozt3QkFLZ0I7QUFDZCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtjLFMsRUFBVztBQUN2QixNQUFBLHNCQUFzQjtBQUN2QjtBQUVEOzs7Ozs7O3dCQUlpQjtBQUNmLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJZSxVLEVBQVk7QUFDekIsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLGVBQXVDLFVBQXZDLElBQW9ELGtCQUFrQixFQUF0RTtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSW1CO0FBQ2pCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJaUIsWSxFQUFjO0FBQzdCLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREosaUJBQ3lCLFlBRHpCLElBRUksa0JBQWtCLEVBRnRCO0FBR0Q7QUFFRDs7Ozs7Ozt3QkFJc0I7QUFDcEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlvQixlLEVBQWlCO0FBQ25DLFVBQUksa0JBQWtCLENBQUMsZUFBRCxFQUFrQixhQUFhLENBQUMsWUFBaEMsRUFBOEMsSUFBOUMsQ0FBdEIsRUFBMkU7QUFDekUsc0RBQXdCLGVBQXhCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlhO0FBQ1gsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlXLE0sRUFBUTtBQUNqQixPQUFDLEtBQUssV0FBTix5QkFBb0IsSUFBcEIsV0FBbUMsTUFBbkMsSUFBNEMsa0JBQWtCLEVBQTlEO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJb0I7QUFDbEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlrQixhLEVBQWU7QUFDL0IsVUFBSSxrQkFBa0IsQ0FBQyxhQUFELEVBQWdCLGFBQWEsQ0FBQyxTQUE5QixDQUF0QixFQUFnRTtBQUM5RCxvREFBc0IsYUFBdEI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSVk7QUFDVixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVUsSyxFQUFPO0FBQ2YsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLFVBQWtDLEtBQWxDLElBQTBDLGtCQUFrQixFQUE1RDtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWlCO0FBQ2YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUllLFUsRUFBWTtBQUN6QixPQUFDLEtBQUssV0FBTix5QkFBb0IsSUFBcEIsZUFBdUMsVUFBdkMsSUFBb0Qsa0JBQWtCLEVBQXRFO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJa0I7QUFDaEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlnQixXLEVBQWE7QUFDM0IsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLGdCQUF3QyxXQUF4QyxJQUFzRCxrQkFBa0IsRUFBeEU7QUFDRDtBQUVEOzs7Ozs7O3dCQUlXO0FBQ1QsYUFBUSxDQUFDLEtBQUssVUFBUCxHQUFxQixtQkFBbUIsRUFBeEMseUJBQTZDLElBQTdDLFFBQVA7QUFDRDtBQUVEOzs7OztzQkFJUyxJLEVBQU07QUFDYixVQUFJLGtCQUFrQixDQUFDLElBQUQsRUFBTyxhQUFhLENBQUMsT0FBckIsRUFBOEIsSUFBOUIsQ0FBdEIsRUFBMkQ7QUFDekQsMkNBQWEsSUFBYjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJbUI7QUFDakIsYUFBUSxDQUFDLEtBQUssVUFBUCxHQUFxQixtQkFBbUIsRUFBeEMseUJBQTZDLElBQTdDLGdCQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWlCLFksRUFBYztBQUM3QixVQUFJLGtCQUFrQixDQUFDLFlBQUQsRUFBZSxhQUFhLENBQUMsV0FBN0IsQ0FBdEIsRUFBaUU7QUFDL0QsbURBQXFCLFlBQXJCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUltQjtBQUNqQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWlCLFksRUFBYztBQUM3QixVQUFJLGtCQUFrQixDQUFDLFlBQUQsRUFBZSxhQUFhLENBQUMsYUFBN0IsRUFBNEMsSUFBNUMsQ0FBdEIsRUFBeUU7QUFDdkUsbURBQXFCLFlBQXJCO0FBQ0Q7QUFDRjs7OztFQWxQbUIsZTtBQXNTdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNLGE7Ozs7O0FBQ0o7OztBQUdBLDJCQUFjO0FBQUE7O0FBQUEsOEJBQ047QUFDSixNQUFBLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxtQkFEeEI7QUFFSixNQUFBLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztBQUYzQixLQURNO0FBS2I7OztFQVR5QixnQjtBQVk1Qjs7Ozs7O0lBSWEsYzs7Ozs7QUFNWDs7OztBQUlBLDBCQUFZLHFCQUFaLEVBQW1DO0FBQUE7O0FBQUE7O0FBQ2pDOztBQURpQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFSbEI7QUFRa0I7O0FBQUE7QUFBQTtBQUFBLGFBUGY7QUFPZTs7QUFBQTtBQUFBO0FBQUEsYUFOZDtBQU1jOztBQUdqQyxzRUFBa0IscUJBQXFCLEdBQ25DLHFCQURtQyxHQUVuQyxpQkFBaUIsQ0FBQyxxQkFGdEI7O0FBSGlDO0FBTWxDO0FBRUQ7Ozs7Ozs7Ozs7QUF3RUE7Ozs7Ozs7Ozs7OzZCQVdTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYix5QkFBaUIsS0FBSyxhQURUO0FBRWIsNEJBQW9CLEtBQUssZ0JBRlo7QUFHYiw2QkFBcUIsS0FBSztBQUhiLE9BQWY7QUFLQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7d0JBdkZlO0FBQ2QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7OztzQkFLYyxTLEVBQVc7QUFDdkIsTUFBQSxzQkFBc0I7QUFDdkI7QUFFRDs7Ozs7Ozt3QkFJb0I7QUFDbEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlrQixhLEVBQWU7QUFDL0IsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixrQkFDMEIsYUFEMUIsSUFFSSxrQkFBa0IsRUFGdEI7QUFHRDtBQUVEOzs7Ozs7O3dCQUl1QjtBQUNyQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSXFCLGdCLEVBQWtCO0FBQ3JDLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREoscUJBQzZCLGdCQUQ3QixJQUVJLGtCQUFrQixFQUZ0QjtBQUdEO0FBRUQ7Ozs7Ozs7d0JBSXdCO0FBQ3RCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJc0IsaUIsRUFBbUI7QUFDdkMsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixzQkFDOEIsaUJBRDlCLElBRUksa0JBQWtCLEVBRnRCO0FBR0Q7Ozs7RUF4RmlDLGU7QUFpSHBDOzs7Ozs7Ozs7Ozs7Ozs7O0lBSWEsb0I7Ozs7O0FBR1g7Ozs7QUFJQSxnQ0FBWSwyQkFBWixFQUF5QztBQUFBOztBQUFBOztBQUN2Qzs7QUFEdUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBUWhDO0FBUmdDOztBQUFBO0FBQUE7QUFBQSxhQVM3QjtBQVQ2Qjs7QUFBQTtBQUFBO0FBQUEsYUFVaEM7QUFWZ0M7O0FBQUE7QUFBQTtBQUFBLGFBV2pDO0FBWGlDOztBQUd2QyxzRUFBa0IsMkJBQTJCLEdBQ3pDLDJCQUR5QyxHQUV6QyxpQkFBaUIsQ0FBQywyQkFGdEI7O0FBSHVDO0FBTXhDOzs7OztBQW9HRDs7Ozs7Ozs7Ozs7OzZCQVlTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixpQkFBUyxLQUFLLEtBREQ7QUFFYixvQkFBWSxLQUFLLFFBRko7QUFHYixpQkFBUyxLQUFLLEtBSEQ7QUFJYixnQkFBUSxLQUFLO0FBSkEsT0FBZjtBQU1BLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozs7QUFuSEQ7Ozs7O3dCQUtnQjtBQUNkLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0JBS2MsUyxFQUFXO0FBQ3ZCLE1BQUEsc0JBQXNCO0FBQ3ZCO0FBRUQ7Ozs7Ozs7d0JBSVk7QUFDVixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVUsSyxFQUFPO0FBQ2YsVUFBSSxrQkFBa0IsQ0FBQyxLQUFELEVBQVEsYUFBYSxDQUFDLFdBQXRCLENBQWxCLElBQ0EsaUJBQWlCLENBQUMsS0FBRCxFQUFRLGFBQWEsQ0FBQyxXQUF0QixDQURyQixFQUN5RDtBQUN2RCw0Q0FBYyxLQUFkO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUllO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlhLFEsRUFBVTtBQUNyQixVQUFJLGtCQUFrQixDQUFDLFFBQUQsRUFBVyxhQUFhLENBQUMsWUFBekIsQ0FBdEIsRUFBOEQ7QUFDNUQsK0NBQWlCLFFBQWpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlZO0FBQ1YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlVLEssRUFBTztBQUNmLFVBQUksa0JBQWtCLENBQUMsS0FBRCxFQUFRLGFBQWEsQ0FBQyxXQUF0QixDQUFsQixJQUNBLGlCQUFpQixDQUFDLEtBQUQsRUFBUSxhQUFhLENBQUMsV0FBdEIsQ0FEckIsRUFDeUQ7QUFDdkQsNENBQWMsS0FBZDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJVztBQUNULG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJUyxJLEVBQU07QUFDYixVQUFJLGtCQUFrQixDQUFDLElBQUQsRUFBTyxhQUFhLENBQUMsV0FBckIsQ0FBbEIsSUFDQSxpQkFBaUIsQ0FBQyxJQUFELEVBQU8sYUFBYSxDQUFDLFVBQXJCLENBRHJCLEVBQ3VEO0FBQ3JELDJDQUFhLElBQWI7QUFDRDtBQUNGOzs7O0VBL0d1QyxlO0FBMEkxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU0sZTs7Ozs7QUFDSjs7O0FBR0EsNkJBQWM7QUFBQTs7QUFBQSw4QkFDTjtBQUNKLE1BQUEsUUFBUSxFQUFFLGlCQUFpQixDQUFDLHFCQUR4QjtBQUVKLE1BQUEsU0FBUyxFQUFFLG1CQUFtQixDQUFDO0FBRjNCLEtBRE07QUFLYjs7O0VBVDJCLGdCO0FBWTlCOzs7Ozs7SUFJYSxxQjs7Ozs7QUFDWDs7O0FBR0EsbUNBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUEsYUFzQlI7QUF0QlE7O0FBQUE7QUFBQTtBQUFBLGFBdUJOO0FBdkJNOztBQUFBO0FBQUE7QUFBQSxhQXdCTjtBQXhCTTs7QUFBQTtBQUFBO0FBQUEsYUF5QkQ7QUF6QkM7O0FBQUE7QUFBQTtBQUFBLGFBMEJNO0FBMUJOOztBQUFBO0FBQUE7QUFBQSxhQTJCSjtBQTNCSTs7QUFBQTtBQUFBO0FBQUEsYUE0Qkg7QUE1Qkc7O0FBR1osV0FBSyxVQUFMLEdBQWtCLElBQUksZ0JBQUosQ0FBYTtBQUM3QixNQUFBLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxpQkFERjtBQUU3QixNQUFBLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztBQUZDLEtBQWIsQ0FBbEI7QUFJQSxXQUFLLGlCQUFMLEdBQXlCLElBQUksZ0JBQUosQ0FBYTtBQUNwQyxNQUFBLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxpQkFESztBQUVwQyxNQUFBLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztBQUZRLEtBQWIsQ0FBekI7QUFQWTtBQVdiO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSxnQ0FBSyxVQUFMLHdFQUFpQixVQUFqQjtBQUNBLG9DQUFLLGlCQUFMLGdGQUF3QixVQUF4QjtBQUNEOzs7O0FBMklEOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFpQlM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLGNBQU0sS0FBSyxFQURFO0FBRWIsZ0JBQVEsS0FBSyxJQUZBO0FBR2IsZ0JBQVEsS0FBSyxJQUhBO0FBSWIscUJBQWEsS0FBSyxTQUpMO0FBS2IsNEJBQW9CLEtBQUssZ0JBTFo7QUFNYixrQkFBVSxLQUFLLE1BTkY7QUFPYixtQkFBVyxLQUFLLE9BUEg7QUFRYixzQkFBYyxLQUFLLFVBUk47QUFTYiw2QkFBcUIsS0FBSztBQVRiLE9BQWY7QUFXQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBaktEOzs7O3dCQUlTO0FBQ1AsYUFBUSxDQUFDLEtBQUssVUFBUCxHQUFxQixtQkFBbUIsRUFBeEMseUJBQTZDLElBQTdDLE1BQVA7QUFDRDtBQUVEOzs7OztzQkFJTyxFLEVBQUk7QUFDVCxVQUFJLGtCQUFrQixDQUFDLEVBQUQsRUFBSyxhQUFhLENBQUMsYUFBbkIsQ0FBdEIsRUFBeUQ7QUFDdkQseUNBQVcsRUFBWDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJVztBQUNULGFBQVEsQ0FBQyxLQUFLLFVBQVAsR0FBcUIsbUJBQW1CLEVBQXhDLHlCQUE2QyxJQUE3QyxRQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVMsSSxFQUFNO0FBQ2IsVUFBSSxrQkFBa0IsQ0FBQyxJQUFELEVBQU8sYUFBYSxDQUFDLE9BQXJCLENBQXRCLEVBQXFEO0FBQ25ELDJDQUFhLElBQWI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxhQUFRLENBQUMsS0FBSyxVQUFQLEdBQXFCLG1CQUFtQixFQUF4Qyx5QkFBNkMsSUFBN0MsUUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlTLEksRUFBTTtBQUNiLFVBQUksa0JBQWtCLENBQUMsSUFBRCxFQUFPLGFBQWEsQ0FBQyxPQUFyQixDQUF0QixFQUFxRDtBQUNuRCwyQ0FBYSxJQUFiO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlnQjtBQUNkLGFBQVEsQ0FBQyxLQUFLLFVBQVAsR0FDSCxtQkFBbUIsRUFEaEIseUJBRUgsSUFGRyxhQUFQO0FBR0Q7QUFFRDs7Ozs7c0JBSWMsUyxFQUFXO0FBQ3ZCLFVBQUksa0JBQWtCLENBQUMsU0FBRCxFQUFZLGFBQWEsQ0FBQyxVQUExQixDQUFsQixJQUNBLGlCQUFpQixDQUFDLFNBQUQsRUFBWSxhQUFhLENBQUMsZUFBMUIsQ0FEckIsRUFDaUU7QUFDL0QsZ0RBQWtCLFNBQWxCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUl1QjtBQUNyQixhQUFRLENBQUMsS0FBSyxVQUFQLEdBQXFCLG1CQUFtQixFQUF4Qyx5QkFBNkMsSUFBN0Msb0JBQVA7QUFDRDtBQUVEOzs7OztzQkFJcUIsZ0IsRUFBa0I7QUFDckMsVUFBSSxrQkFBa0IsQ0FBQyxnQkFBRCxFQUFtQixhQUFhLENBQUMsV0FBakMsRUFBOEMsSUFBOUMsQ0FBdEIsRUFBMkU7QUFDekUsdURBQXlCLGdCQUF6QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJYTtBQUNYLGFBQVEsQ0FBQyxLQUFLLFVBQVAsR0FBcUIsbUJBQW1CLEVBQXhDLHlCQUE2QyxJQUE3QyxVQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVcsTSxFQUFRO0FBQ2pCLFVBQUksa0JBQWtCLENBQUMsTUFBRCxFQUFTLGFBQWEsQ0FBQyxTQUF2QixDQUF0QixFQUF5RDtBQUN2RCw2Q0FBZSxNQUFmO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUljO0FBQ1osYUFBUSxDQUFDLEtBQUssVUFBUCxHQUFxQixtQkFBbUIsRUFBeEMseUJBQTZDLElBQTdDLFdBQVA7QUFDRDtBQUVEOzs7OztzQkFJWSxPLEVBQVM7QUFDbkIsVUFBSSxrQkFBa0IsQ0FBQyxPQUFELEVBQVUsYUFBYSxDQUFDLFdBQXhCLENBQXRCLEVBQTREO0FBQzFELDhDQUFnQixPQUFoQjtBQUNEO0FBQ0Y7Ozs7RUFqS3dDLGU7QUFzTTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWEsbUI7Ozs7O0FBQ1g7OztBQUdBLGlDQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBYVI7QUFiUTs7QUFBQTtBQUFBO0FBQUEsYUFjSjtBQWRJOztBQUdaLFdBQUssS0FBTCxHQUFhLElBQUksZ0JBQUosQ0FDVDtBQUNFLE1BQUEsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGNBRHBDO0FBRUUsTUFBQSxXQUFXLEVBQUUsYUFBYSxDQUFDLFdBRjdCO0FBR0UsTUFBQSxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxpQkFIeEM7QUFJRSxNQUFBLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxhQUp2QztBQUtFLE1BQUEsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFMeEMsS0FEUyxDQUFiO0FBSFk7QUFXYjs7Ozs7QUF5Q0Q7Ozs7Ozs7Ozs7NkJBVVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLGNBQU0sS0FBSyxFQURFO0FBRWIsa0JBQVUsS0FBSyxNQUZGO0FBR2IsaUJBQVMsS0FBSztBQUhELE9BQWY7QUFLQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7O0FBdkREOzs7O3dCQUlTO0FBQ1AsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlPLEUsRUFBSTtBQUNULFVBQUksa0JBQWtCLENBQUMsRUFBRCxFQUFLLGFBQWEsQ0FBQyxhQUFuQixDQUF0QixFQUF5RDtBQUN2RCwwQ0FBVyxFQUFYO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlhO0FBQ1gsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlXLE0sRUFBUTtBQUNqQixVQUFJLGtCQUFrQixDQUFDLE1BQUQsRUFBUyxhQUFhLENBQUMsVUFBdkIsQ0FBdEIsRUFBMEQ7QUFDeEQsNkNBQWUsTUFBZjtBQUNEO0FBQ0Y7Ozs7RUF0RHNDLGU7QUE4RXpDOzs7Ozs7Ozs7Ozs7SUFJYSwrQjs7Ozs7QUFDWDs7O0FBR0EsNkNBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUEsYUFJUjtBQUpROztBQUFBO0FBRWI7Ozs7O0FBc0JEOzs7Ozs7Ozs2QkFRUztBQUNQLFdBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU0sTUFBTSxHQUFHO0FBQ2IsY0FBTSxLQUFLO0FBREUsT0FBZjtBQUdBLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozs7QUFqQ0Q7Ozs7d0JBSVM7QUFDUCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSU8sRSxFQUFJO0FBQ1QsVUFBSSxrQkFBa0IsQ0FBQyxFQUFELEVBQUssYUFBYSxDQUFDLGFBQW5CLENBQXRCLEVBQXlEO0FBQ3ZELDBDQUFXLEVBQVg7QUFDRDtBQUNGOzs7O0VBMUJrRCxlO0FBOENyRDs7Ozs7Ozs7OztJQUlhLHFDOzs7OztBQUNYOzs7QUFHQSxtREFBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQUlIO0FBSkc7O0FBQUE7QUFFYjs7Ozs7QUFzQkQ7Ozs7Ozs7OzZCQVFTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixtQkFBVyxLQUFLO0FBREgsT0FBZjtBQUdBLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozs7QUFqQ0Q7Ozs7d0JBSWM7QUFDWixhQUFRLENBQUMsS0FBSyxVQUFQLEdBQXFCLG1CQUFtQixFQUF4Qyx5QkFBNkMsSUFBN0MsV0FBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlZLE8sRUFBUztBQUNuQixVQUFJLGtCQUFrQixDQUFDLE9BQUQsRUFBVSxhQUFhLENBQUMsV0FBeEIsRUFBcUMsSUFBckMsQ0FBdEIsRUFBa0U7QUFDaEUsOENBQWdCLE9BQWhCO0FBQ0Q7QUFDRjs7OztFQTFCd0QsZTtBQThDM0Q7Ozs7Ozs7OztJQUdhLEc7Ozs7O0FBQ1g7OztBQUdBLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBSUw7QUFKSzs7QUFBQTtBQUViOzs7OztBQXNCRDs7Ozs7Ozs7NkJBUVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLGlCQUFTLEtBQUs7QUFERCxPQUFmO0FBR0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztBQWpDRDs7Ozt3QkFJWTtBQUNWLGFBQVEsQ0FBQyxLQUFLLFVBQVAsR0FBcUIsbUJBQW1CLEVBQXhDLHlCQUE2QyxJQUE3QyxTQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVUsSyxFQUFPO0FBQ2YsVUFBSSxrQkFBa0IsQ0FBQyxLQUFELEVBQVEsYUFBYSxDQUFDLFFBQXRCLENBQXRCLEVBQXVEO0FBQ3JELDRDQUFjLEtBQWQ7QUFDRDtBQUNGOzs7O0VBMUJzQixlOzs7Ozs7Ozs7Ozs7OztBQ250Q3pCOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsR0FBRywwQkFBYSxTQUF6QztBQUNBLElBQU0scUJBQXFCLEdBQUcsd0JBQVcsU0FBekM7QUFDQSxJQUFNLGlCQUFpQixHQUFHLCtCQUFVLE9BQXBDO0FBRUEsSUFBTSxlQUFlLEdBQUcsa0JBQU0sU0FBOUI7QUFFQTs7OztBQUdBLFNBQVMsa0JBQVQsR0FBOEI7QUFDNUIsUUFBTSxJQUFJLDJCQUFKLENBQW9CLHFCQUFxQixDQUFDLGlCQUExQyxDQUFOO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFTLG1CQUFULEdBQStCO0FBQzdCLFFBQU0sSUFBSSwyQkFBSixDQUFvQixxQkFBcUIsQ0FBQyxrQkFBMUMsQ0FBTjtBQUNEO0FBRUQ7Ozs7O0FBR0EsU0FBUyxzQkFBVCxHQUFrQztBQUNoQyxRQUFNLElBQUksMkJBQUosQ0FBb0IscUJBQXFCLENBQUMsYUFBMUMsQ0FBTjtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVMsb0JBQVQsQ0FDSSxLQURKLEVBRUksWUFGSixFQUdJLGdCQUhKLEVBR2dDO0FBQzlCLFNBQU8sOEJBQWlCLEtBQWpCLEVBQXdCLFlBQXhCLEVBQ0gscUJBQXFCLENBQUMsYUFEbkIsRUFDa0MsZ0JBRGxDLENBQVA7QUFFRDtBQUVEOzs7Ozs7OztBQU1BLFNBQVMsbUJBQVQsQ0FBNkIsS0FBN0IsRUFBeUMsWUFBekMsRUFBK0Q7QUFDN0QsU0FBTyw2QkFBZ0IsS0FBaEIsRUFBdUIsWUFBdkIsRUFDSCxxQkFBcUIsQ0FBQyxrQkFEbkIsQ0FBUDtBQUVEO0FBRUQ7Ozs7O0lBR2EsRzs7Ozs7QUFDWDs7OztBQUlBLGVBQVksV0FBWixFQUFrQztBQUFBOztBQUFBOztBQUNoQzs7QUFEZ0M7QUFBQTtBQUFBLGFBYXRCO0FBYnNCOztBQUFBO0FBQUE7QUFBQSxhQWNyQixtQkFBbUIsQ0FBQztBQWRDOztBQUFBO0FBQUE7QUFBQSxhQWViO0FBZmE7O0FBQUE7QUFBQTtBQUFBLGFBZ0JWO0FBaEJVOztBQUFBO0FBQUE7QUFBQSxhQWlCeEI7QUFqQndCOztBQUFBO0FBQUE7QUFBQSxhQWtCekI7QUFsQnlCOztBQUFBO0FBQUE7QUFBQSxhQW1CMUI7QUFuQjBCOztBQUFBO0FBQUE7QUFBQSxhQW9CbkI7QUFwQm1COztBQUFBO0FBQUE7QUFBQSxhQXFCcEI7QUFyQm9COztBQUFBO0FBQUE7QUFBQSxhQXNCbEI7QUF0QmtCOztBQUFBO0FBQUE7QUFBQSxhQXVCdEI7QUF2QnNCOztBQUFBO0FBQUE7QUFBQSxhQXdCZDtBQXhCYzs7QUFBQTtBQUFBO0FBQUEsYUF5QjFCO0FBekIwQjs7QUFBQTtBQUFBO0FBQUEsYUEwQmQ7QUExQmM7O0FBQUE7QUFBQTtBQUFBLGFBMkJWO0FBM0JVOztBQUFBO0FBQUE7QUFBQSxhQTRCbEI7QUE1QmtCOztBQUFBO0FBQUE7QUFBQSxhQTZCaEI7QUE3QmdCOztBQUFBO0FBQUE7QUFBQSxhQThCbEI7QUE5QmtCOztBQUFBO0FBQUE7QUFBQSxhQStCYjtBQS9CYTs7QUFBQTtBQUFBO0FBQUEsYUFnQ3BCO0FBaENvQjs7QUFHaEMsVUFBSyxrQkFBTCxHQUEwQixJQUFJLG9CQUFKLEVBQTFCO0FBQ0EsVUFBSyxLQUFMLEdBQWEsSUFBSSxpQkFBSixFQUFiO0FBQ0EsVUFBSyxxQkFBTCxHQUE2QixJQUFJLHNCQUFKLEVBQTdCO0FBQ0EsVUFBSyxpQkFBTCxHQUF5QixJQUFJLGtCQUFKLEVBQXpCO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLElBQUksZUFBSixFQUFwQjtBQUNBLFVBQUssVUFBTCxHQUFrQixJQUFJLGFBQUosRUFBbEI7QUFFQSxRQUFJLFdBQUosRUFBaUIsTUFBSyxVQUFMO0FBVmU7QUFXakM7Ozs7O0FBdUJEOzs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSxvQ0FBSyxrQkFBTCxnRkFBeUIsVUFBekI7QUFDQSwwQkFBSyxLQUFMLDREQUFZLFVBQVo7QUFDQSxvQ0FBSyxxQkFBTCxnRkFBNEIsVUFBNUI7QUFDQSxxQ0FBSyxpQkFBTCxrRkFBd0IsVUFBeEI7QUFDQSxpQ0FBSyxZQUFMLDBFQUFtQixVQUFuQjtBQUNBLCtCQUFLLFVBQUwsc0VBQWlCLFVBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBNlZBOzs7OzswQ0FLc0I7QUFDcEIsYUFBTyxJQUFJLENBQUMsZUFBTCx1QkFDSCxJQURHLHNDQUVILElBRkcsa0JBR0gsZUFBZSxDQUFDLFdBSGIsQ0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBK0JTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixpQ0FBeUIsS0FBSyxxQkFEakI7QUFFYiw2QkFBcUIsS0FBSyxpQkFGYjtBQUdiLDZCQUFxQixLQUFLLGlCQUhiO0FBSWIsZ0NBQXdCLEtBQUssb0JBSmhCO0FBS2Isa0JBQVUsS0FBSyxNQUxGO0FBTWIsaUJBQVMsS0FBSyxLQU5EO0FBT2IsZ0JBQVEsS0FBSyxJQVBBO0FBUWIsd0JBQWdCLEtBQUssWUFSUjtBQVNiLHVCQUFlLEtBQUssV0FUUDtBQVViLHNCQUFjLEtBQUssVUFWTjtBQVdiLHdCQUFnQixLQUFLLFlBWFI7QUFZYiw4QkFBc0IsS0FBSyxrQkFaZDtBQWFiLG9CQUFZLEtBQUssUUFiSjtBQWNiLDRCQUFvQixLQUFLLGdCQWRaO0FBZWIsZ0JBQVEsS0FBSyxJQWZBO0FBZ0JiLHNCQUFjLEtBQUssVUFoQk47QUFpQmIsNEJBQW9CLEtBQUssZ0JBakJaO0FBa0JiLGdDQUF3QixLQUFLLG9CQWxCaEI7QUFtQmIsaUJBQVMsS0FBSyxLQW5CRDtBQW9CYix3QkFBZ0IsS0FBSyxZQXBCUjtBQXFCYiwwQkFBa0IsS0FBSyxjQXJCVjtBQXNCYix3QkFBZ0IsS0FBSyxZQXRCUjtBQXVCYiw2QkFBcUIsS0FBSztBQXZCYixPQUFmO0FBeUJBLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozt3QkFqYWM7QUFDYixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUthLFEsRUFBVTtBQUNyQixNQUFBLGtCQUFrQjtBQUNuQjtBQUVEOzs7Ozs7Ozt3QkFLZ0I7QUFDZCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtjLFMsRUFBVztBQUN2QixNQUFBLGtCQUFrQjtBQUNuQjtBQUVEOzs7Ozs7O3dCQUl3QjtBQUN0QixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSXNCLGlCLEVBQW1CO0FBQ3ZDLFVBQUksb0JBQW9CLENBQUMsaUJBQUQsRUFBb0IsZUFBZSxDQUFDLFVBQXBDLENBQXhCLEVBQXlFO0FBQ3ZFLHdEQUEwQixpQkFBMUI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSTJCO0FBQ3pCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJeUIsb0IsRUFBc0I7QUFDN0MsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESix5QkFDaUMsb0JBRGpDLElBRUksa0JBQWtCLEVBRnRCO0FBR0Q7QUFFRDs7Ozs7Ozt3QkFJYTtBQUNYLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJVyxNLEVBQVE7QUFDakIsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLFdBQW1DLE1BQW5DLElBQTRDLGtCQUFrQixFQUE5RDtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSVk7QUFDVixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVUsSyxFQUFPO0FBQ2YsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLFVBQWtDLEtBQWxDLElBQTBDLGtCQUFrQixFQUE1RDtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxhQUFRLENBQUMsS0FBSyxVQUFQLEdBQXFCLG1CQUFtQixFQUF4Qyx5QkFBNkMsSUFBN0MsUUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlTLEksRUFBTTtBQUNiLFVBQUksb0JBQW9CLENBQUMsSUFBRCxFQUFPLGVBQWUsQ0FBQyxPQUF2QixFQUFnQyxJQUFoQyxDQUF4QixFQUErRDtBQUM3RCwyQ0FBYSxJQUFiO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlrQjtBQUNoQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWdCLFcsRUFBYTtBQUMzQixPQUFDLEtBQUssV0FBTix5QkFBb0IsSUFBcEIsZ0JBQXdDLFdBQXhDLElBQXNELGtCQUFrQixFQUF4RTtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWlCO0FBQ2YsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUllLFUsRUFBWTtBQUN6QixPQUFDLEtBQUssV0FBTix5QkFBb0IsSUFBcEIsZUFBdUMsVUFBdkMsSUFBb0Qsa0JBQWtCLEVBQXRFO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJbUI7QUFDakIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlpQixZLEVBQWM7QUFDN0IsT0FBQyxLQUFLLFdBQU4seUJBQ0ksSUFESixpQkFDeUIsWUFEekIsSUFFSSxrQkFBa0IsRUFGdEI7QUFHRDtBQUVEOzs7Ozs7O3dCQUllO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlhLFEsRUFBVTtBQUNyQixVQUFJLG9CQUFvQixDQUFDLFFBQUQsRUFBVyxlQUFlLENBQUMsYUFBM0IsQ0FBeEIsRUFBbUU7QUFDakUsK0NBQWlCLFFBQWpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUl1QjtBQUNyQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSXFCLGdCLEVBQWtCO0FBQ3JDLE9BQUMsS0FBSyxXQUFOLHlCQUNJLElBREoscUJBQzZCLGdCQUQ3QixJQUVJLGtCQUFrQixFQUZ0QjtBQUdEO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVMsSSxFQUFNO0FBQ2IsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLFNBQWlDLElBQWpDLElBQXdDLGtCQUFrQixFQUExRDtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSXVCO0FBQ3JCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJcUIsZ0IsRUFBa0I7QUFDckMsVUFBSSxvQkFBb0IsQ0FBQyxnQkFBRCxFQUFtQixlQUFlLENBQUMsVUFBbkMsQ0FBcEIsSUFDQSxtQkFBbUIsQ0FBQyxnQkFBRCxFQUFtQixlQUFlLENBQUMsY0FBbkMsQ0FEdkIsRUFDMkU7QUFDekUsdURBQXlCLGdCQUF6QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJMkI7QUFDekIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUl5QixvQixFQUFzQjtBQUM3QyxPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLHlCQUNpQyxvQkFEakMsSUFFSSxrQkFBa0IsRUFGdEI7QUFHRDtBQUVEOzs7Ozs7O3dCQUltQjtBQUNqQixhQUFRLENBQUMsS0FBSyxVQUFQLEdBQXFCLG1CQUFtQixFQUF4Qyx5QkFBNkMsSUFBN0MsZ0JBQVA7QUFDRDtBQUVEOzs7OztzQkFJaUIsWSxFQUFjO0FBQzdCLFVBQUksb0JBQW9CLENBQUMsWUFBRCxFQUFlLGVBQWUsQ0FBQyxXQUEvQixDQUF4QixFQUFxRTtBQUNuRSxtREFBcUIsWUFBckI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSXFCO0FBQ25CLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJbUIsYyxFQUFnQjtBQUNqQyxVQUFJLG9CQUFvQixDQUFDLGNBQUQsRUFBaUIsZUFBZSxDQUFDLFVBQWpDLENBQXhCLEVBQXNFO0FBQ3BFLHFEQUF1QixjQUF2QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJbUI7QUFDakIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlpQixZLEVBQWM7QUFDN0IsVUFBSSxvQkFBb0IsQ0FBQyxZQUFELEVBQWUsZUFBZSxDQUFDLGNBQS9CLEVBQStDLElBQS9DLENBQXhCLEVBQThFO0FBQzVFLG1EQUFxQixZQUFyQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJd0I7QUFDdEIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlzQixpQixFQUFtQjtBQUN2QyxPQUFDLEtBQUssV0FBTix5QkFDSSxJQURKLHNCQUM4QixpQkFEOUIsSUFFSSxrQkFBa0IsRUFGdEI7QUFHRDtBQUVEOzs7Ozs7O3dCQUlpQjtBQUNmLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJZSxVLEVBQVk7QUFDekIsT0FBQyxLQUFLLFdBQU4seUJBQW9CLElBQXBCLGVBQXVDLFVBQXZDLElBQW9ELGtCQUFrQixFQUF0RTtBQUNEOzs7O0VBL1lzQixlO0FBNmR6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTSxvQjs7Ozs7QUFPSjs7O0FBR0Esa0NBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWTtBQUFBO0FBQUEsYUFURCxtQkFBbUIsQ0FBQztBQVNuQjs7QUFBQTtBQUFBO0FBQUEsYUFSQztBQVFEOztBQUFBO0FBQUE7QUFBQSxhQVBGO0FBT0U7O0FBQUE7QUFBQTtBQUFBLGFBTkk7QUFNSjs7QUFBQTtBQUFBO0FBQUEsYUFMTTtBQUtOOztBQUFBO0FBRWI7QUFFRDs7Ozs7Ozs7OztBQTZGQTs7Ozs7Ozs7Ozs7OzZCQVlTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYix1QkFBZSxLQUFLLFdBRFA7QUFFYixvQkFBWSxLQUFLLFFBRko7QUFHYiwwQkFBa0IsS0FBSyxjQUhWO0FBSWIsNEJBQW9CLEtBQUs7QUFKWixPQUFmO0FBTUEsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQTlHZTtBQUNkLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7c0JBS2MsUyxFQUFXO0FBQ3ZCLE1BQUEsa0JBQWtCO0FBQ25CO0FBRUQ7Ozs7Ozs7d0JBSWtCO0FBQ2hCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJZ0IsVyxFQUFhO0FBQzNCLFVBQUksb0JBQW9CLENBQUMsV0FBRCxFQUFjLGVBQWUsQ0FBQyxVQUE5QixDQUFwQixJQUNBLG1CQUFtQixDQUFDLFdBQUQsRUFBYyxlQUFlLENBQUMsV0FBOUIsQ0FEdkIsRUFDbUU7QUFDakUsa0RBQW9CLFdBQXBCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUllO0FBQ2IsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlhLFEsRUFBVTtBQUNyQixVQUFJLG9CQUFvQixDQUFDLFFBQUQsRUFBVyxlQUFlLENBQUMsT0FBM0IsQ0FBeEIsRUFBNkQ7QUFDM0QsK0NBQWlCLFFBQWpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlxQjtBQUNuQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSW1CLGMsRUFBZ0I7QUFDakMsVUFBSSxvQkFBb0IsQ0FBQyxjQUFELEVBQWlCLGVBQWUsQ0FBQyxVQUFqQyxDQUFwQixJQUNBLG1CQUFtQixDQUFDLGNBQUQsRUFBaUIsZUFBZSxDQUFDLFdBQWpDLENBRHZCLEVBQ3NFO0FBQ3BFLHFEQUF1QixjQUF2QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJdUI7QUFDckIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlxQixnQixFQUFrQjtBQUNyQyxVQUFJLG9CQUFvQixDQUFDLGdCQUFELEVBQW1CLGVBQWUsQ0FBQyxXQUFuQyxDQUFwQixJQUNBLG1CQUFtQixDQUFDLGdCQUFELEVBQW1CLGVBQWUsQ0FBQyxVQUFuQyxDQUR2QixFQUN1RTtBQUNyRSx1REFBeUIsZ0JBQXpCO0FBQ0Q7QUFDRjs7OztFQXpHZ0MsZTtBQW9JbkM7Ozs7Ozs7Ozs7Ozs7OztJQUdNLGU7Ozs7O0FBQ0o7OztBQUdBLDZCQUFjO0FBQUE7O0FBQUEsOEJBQ047QUFDSixNQUFBLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxxQkFEMUI7QUFFSixNQUFBLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQztBQUY3QixLQURNO0FBS2I7OztFQVQyQixnQjtBQVk5Qjs7Ozs7SUFHTSxhOzs7OztBQUNKOzs7QUFHQSwyQkFBYztBQUFBOztBQUFBLDhCQUNOO0FBQ0osTUFBQSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsbUJBRDFCO0FBRUosTUFBQSxTQUFTLEVBQUUscUJBQXFCLENBQUM7QUFGN0IsS0FETTtBQUtiOzs7RUFUeUIsZ0I7QUFZNUI7Ozs7O0lBR00sa0I7Ozs7O0FBQ0o7OztBQUdBLGdDQUFjO0FBQUE7O0FBQUEsOEJBQ047QUFDSixNQUFBLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxpQkFEMUI7QUFFSixNQUFBLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQztBQUY3QixLQURNO0FBS2I7OztFQVQ4QixnQjtBQVlqQzs7Ozs7SUFHTSxzQjs7Ozs7QUFDSjs7O0FBR0Esb0NBQWM7QUFBQTs7QUFBQSw4QkFDTjtBQUNKLE1BQUEsUUFBUSxFQUFFLG1CQUFtQixDQUFDLGlCQUQxQjtBQUVKLE1BQUEsU0FBUyxFQUFFLHFCQUFxQixDQUFDO0FBRjdCLEtBRE07QUFLYjs7O0VBVGtDLGdCO0FBWXJDOzs7OztJQUdhLHFCOzs7OztBQVVYOzs7QUFHQSxtQ0FBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQVpSO0FBWVE7O0FBQUE7QUFBQTtBQUFBLGFBWE47QUFXTTs7QUFBQTtBQUFBO0FBQUEsYUFWRDtBQVVDOztBQUFBO0FBQUE7QUFBQSxhQVREO0FBU0M7O0FBQUE7QUFBQTtBQUFBLGFBUk07QUFRTjs7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQU9JOztBQUFBO0FBQUE7QUFBQSxhQU5IO0FBTUc7O0FBQUE7QUFBQTtBQUFBLGFBTEM7QUFLRDs7QUFHWixXQUFLLFVBQUwsR0FBa0IsSUFBSSxnQkFBSixDQUFhO0FBQzdCLE1BQUEsU0FBUyxFQUFFLHFCQUFxQixDQUFDLGlCQURKO0FBRTdCLE1BQUEsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0FBRkQsS0FBYixDQUFsQjtBQUlBLFdBQUssaUJBQUwsR0FBeUIsSUFBSSxnQkFBSixDQUFhO0FBQ3BDLE1BQUEsU0FBUyxFQUFFLHFCQUFxQixDQUFDLGlCQURHO0FBRXBDLE1BQUEsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0FBRk0sS0FBYixDQUF6QjtBQVBZO0FBV2I7QUFFRDs7Ozs7OztpQ0FHYTtBQUFBOztBQUNYOztBQUNBLGdDQUFLLFVBQUwsd0VBQWlCLFVBQWpCO0FBQ0Esb0NBQUssaUJBQUwsZ0ZBQXdCLFVBQXhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFnTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFrQlM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLGNBQU0sS0FBSyxFQURFO0FBRWIsZ0JBQVEsS0FBSyxJQUZBO0FBR2Isc0JBQWMsS0FBSyxVQUhOO0FBSWIscUJBQWEsS0FBSyxTQUpMO0FBS2IscUJBQWEsS0FBSyxTQUxMO0FBTWIsNEJBQW9CLEtBQUssZ0JBTlo7QUFPYixrQkFBVSxLQUFLLE1BUEY7QUFRYixtQkFBVyxLQUFLLE9BUkg7QUFTYix1QkFBZSxLQUFLLFdBVFA7QUFVYiw2QkFBcUIsS0FBSztBQVZiLE9BQWY7QUFZQSxhQUFPLEtBQUssVUFBWjtBQUNBLGFBQU8sTUFBUDtBQUNEOzs7d0JBOU5RO0FBQ1AsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlPLEUsRUFBSTtBQUNULFVBQUksb0JBQW9CLENBQUMsRUFBRCxFQUFLLGVBQWUsQ0FBQyxpQkFBckIsQ0FBeEIsRUFBaUU7QUFDL0QseUNBQVcsRUFBWDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJVztBQUNULG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJUyxJLEVBQU07QUFDYixVQUFJLG9CQUFvQixDQUFDLElBQUQsRUFBTyxlQUFlLENBQUMsT0FBdkIsQ0FBeEIsRUFBeUQ7QUFDdkQsMkNBQWEsSUFBYjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJZ0I7QUFDZCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWMsUyxFQUFXO0FBQ3ZCLFVBQUksb0JBQW9CLENBQUMsU0FBRCxFQUFZLGVBQWUsQ0FBQyxPQUE1QixDQUF4QixFQUE4RDtBQUM1RCxnREFBa0IsU0FBbEI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSWdCO0FBQ2QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUljLFMsRUFBVztBQUN2QixVQUFJLG9CQUFvQixDQUFDLFNBQUQsRUFBWSxlQUFlLENBQUMsVUFBNUIsQ0FBeEIsRUFBaUU7QUFDL0QsZ0RBQWtCLFNBQWxCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUl1QjtBQUNyQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7O3NCQUtxQixnQixFQUFrQjtBQUNyQyxVQUFJLE9BQU8sS0FBSyxJQUFaLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDLGNBQU0sSUFBSSwyQkFBSixDQUNGLHFCQUFxQixDQUFDLDBCQURwQixDQUFOO0FBRUQsT0FIRCxNQUdPO0FBQ0wsWUFBSSxLQUFLLEdBQUcsRUFBWjtBQUNBLFlBQU0sYUFBYSxHQUFHLGlCQUFpQixDQUFDLEtBQUssSUFBTixDQUF2Qzs7QUFDQSxZQUFJLGFBQUosRUFBbUI7QUFDakIsY0FBSSxhQUFKLGFBQUksYUFBSix1QkFBSSxhQUFhLENBQUUsU0FBbkIsRUFBOEI7QUFDNUIsWUFBQSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBakIsQ0FBdUIsYUFBYSxDQUFDLFNBQXJDLENBQVI7QUFDRCxXQUZELE1BRU87QUFDTCxZQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxnQkFBWDtBQUNEOztBQUVELGNBQUssS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFoQixJQUF1QixLQUFLLENBQUMsTUFBTixJQUFnQixhQUFhLENBQUMsR0FBekQsRUFBK0Q7QUFDN0QsZ0JBQU0sV0FBVyxHQUFHLElBQUksTUFBSixDQUFXLGFBQWEsQ0FBQyxNQUF6QixDQUFwQjs7QUFDQSxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBMUIsRUFBa0MsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxrQkFBSSxhQUFKLGFBQUksYUFBSix1QkFBSSxhQUFhLENBQUUsVUFBbkIsRUFBK0I7QUFDN0Isb0JBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxLQUFULENBQWUsYUFBYSxDQUFDLFVBQTdCLENBQWY7O0FBQ0Esb0JBQUksTUFBTSxDQUFDLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsc0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsS0FBVixDQUFnQixXQUFoQixDQUFMLEVBQW1DO0FBQ2pDLG9CQUFBLHNCQUFzQjtBQUN2QixtQkFGRCxNQUVPO0FBQ0wsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsS0FBVixDQUFnQixJQUFJLE1BQUosQ0FBVyxhQUFhLENBQUMsT0FBekIsQ0FBaEIsQ0FBTCxFQUF5RDtBQUN2RCxzQkFBQSxzQkFBc0I7QUFDdkI7QUFDRjtBQUNGLGlCQVJELE1BUU87QUFDTCxrQkFBQSxzQkFBc0I7QUFDdkI7QUFDRixlQWJELE1BYU87QUFDTCxvQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxLQUFULENBQWUsV0FBZixDQUFMLEVBQWtDO0FBQ2hDLGtCQUFBLHNCQUFzQjtBQUN2QixpQkFGRCxNQUVPO0FBQ0wsc0JBQUksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLEVBQWIsSUFBbUIsYUFBYSxDQUFDLE1BQXJDLEVBQTZDO0FBQzNDLHlCQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLENBQXBCLEVBQXVCLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsMEJBQUksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLEtBQUssQ0FBQyxDQUFELENBQXRCLEVBQTJCO0FBQ3pCLHdCQUFBLHNCQUFzQjtBQUN2QjtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRixXQTlCRCxNQThCTztBQUNMLGtCQUFNLElBQUksMkJBQUosQ0FBb0IscUJBQXFCLENBQUMsbUJBQTFDLENBQU47QUFDRDtBQUNGLFNBeENELE1Bd0NPO0FBQ0wsZ0JBQU0sSUFBSSwyQkFBSixDQUFvQixxQkFBcUIsQ0FBQyxhQUExQyxDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSWE7QUFDWCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSVcsTSxFQUFRO0FBQ2pCLFVBQUksb0JBQW9CLENBQUMsTUFBRCxFQUFTLGVBQWUsQ0FBQyxTQUF6QixDQUF4QixFQUE2RDtBQUMzRCw2Q0FBZSxNQUFmO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUljO0FBQ1osbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlZLE8sRUFBUztBQUNuQixVQUFJLG9CQUFvQixDQUFDLE9BQUQsRUFBVSxlQUFlLENBQUMsV0FBMUIsQ0FBeEIsRUFBZ0U7QUFDOUQsOENBQWdCLE9BQWhCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlrQjtBQUNoQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWdCLFcsRUFBYTtBQUMzQixVQUFJLG9CQUFvQixDQUFDLFdBQUQsRUFBYyxlQUFlLENBQUMsZ0JBQTlCLEVBQWdELElBQWhELENBQXhCLEVBQStFO0FBQzdFLGtEQUFvQixXQUFwQjtBQUNEO0FBQ0Y7Ozs7RUFqT3dDLGU7QUF3UTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdhLG1COzs7OztBQU9YOzs7QUFHQSxpQ0FBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQVRSO0FBU1E7O0FBQUE7QUFBQTtBQUFBLGFBUkk7QUFRSjs7QUFBQTtBQUFBO0FBQUEsYUFQTztBQU9QOztBQUFBO0FBQUE7QUFBQSxhQU5NO0FBTU47O0FBQUE7QUFBQTtBQUFBLGFBTEM7QUFLRDs7QUFHWixXQUFLLEtBQUwsR0FBYSxJQUFJLGlCQUFKLEVBQWI7QUFIWTtBQUliO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSwyQkFBSyxLQUFMLDhEQUFZLFVBQVo7QUFDRDtBQUVEOzs7Ozs7OztBQTJGQTs7Ozs7Ozs7Ozs7Ozs7NkJBY1M7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLGNBQU0sS0FBSyxFQURFO0FBRWIsMEJBQWtCLEtBQUssY0FGVjtBQUdiLDZCQUFxQixLQUFLLGlCQUhiO0FBSWIsNEJBQW9CLEtBQUssZ0JBSlo7QUFLYix1QkFBZSxLQUFLLFdBTFA7QUFNYixpQkFBUyxLQUFLO0FBTkQsT0FBZjtBQVFBLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozt3QkFqSFE7QUFDUCxtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSU8sRSxFQUFJO0FBQ1QsVUFBSSxvQkFBb0IsQ0FBQyxFQUFELEVBQUssZUFBZSxDQUFDLGlCQUFyQixDQUF4QixFQUFpRTtBQUMvRCwwQ0FBVyxFQUFYO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlxQjtBQUNuQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSW1CLGMsRUFBZ0I7QUFDakMsVUFBSSxvQkFBb0IsQ0FBQyxjQUFELEVBQWlCLGVBQWUsQ0FBQyxVQUFqQyxDQUF4QixFQUFzRTtBQUNwRSxzREFBdUIsY0FBdkI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSXdCO0FBQ3RCLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJc0IsaUIsRUFBbUI7QUFDdkMsVUFBSSxvQkFBb0IsQ0FBQyxpQkFBRCxFQUFvQixlQUFlLENBQUMsVUFBcEMsQ0FBeEIsRUFBeUU7QUFDdkUseURBQTBCLGlCQUExQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozt3QkFJdUI7QUFDckIsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUlxQixnQixFQUFrQjtBQUNyQyxVQUFJLG9CQUFvQixDQUFDLGdCQUFELEVBQW1CLGVBQWUsQ0FBQyxVQUFuQyxDQUFwQixJQUNBLG1CQUFtQixDQUFDLGdCQUFELEVBQW1CLGVBQWUsQ0FBQyxjQUFuQyxDQUR2QixFQUMyRTtBQUN6RSx3REFBeUIsZ0JBQXpCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3dCQUlrQjtBQUNoQixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWdCLFcsRUFBYTtBQUMzQixVQUFJLG9CQUFvQixDQUFDLFdBQUQsRUFBYyxlQUFlLENBQUMsZ0JBQTlCLEVBQWdELElBQWhELENBQXhCLEVBQStFO0FBQzdFLG1EQUFvQixXQUFwQjtBQUNEO0FBQ0Y7Ozs7RUFqSHNDLGU7QUFnSnpDOzs7Ozs7Ozs7Ozs7Ozs7OztJQUdNLGlCOzs7OztBQUdKOzs7QUFHQSwrQkFBYztBQUFBOztBQUFBOztBQUNaLGdDQUNJO0FBQ0UsTUFBQSxjQUFjLEVBQUUsbUJBQW1CLENBQUMsY0FEdEM7QUFFRSxNQUFBLEdBQUcsRUFBRSxFQUZQO0FBR0UsTUFBQSxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQyxpQkFIMUM7QUFJRSxNQUFBLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxhQUp6QztBQUtFLE1BQUEsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUMsa0JBTDFDO0FBTUUsTUFBQSxZQUFZLEVBQUUsZUFBZSxDQUFDO0FBTmhDLEtBREo7O0FBRFk7QUFBQTtBQUFBLGFBTEo7QUFLSTs7QUFBQTtBQVViO0FBRUQ7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7OzZCQVlTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixrQkFBVSxLQUFLLE1BREY7QUFFYiw4RUFGYTtBQUdiLDhFQUhhO0FBSWI7QUFKYSxPQUFmO0FBTUEsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQXJDWTtBQUNYLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJVyxNLEVBQVE7QUFDakIsVUFBSSxvQkFBb0IsQ0FBQyxNQUFELEVBQVMsZUFBZSxDQUFDLFVBQXpCLENBQXBCLElBQ0EsbUJBQW1CLENBQUMsTUFBRCxFQUFTLGVBQWUsQ0FBQyxZQUF6QixDQUR2QixFQUMrRDtBQUM3RCw2Q0FBZSxNQUFmO0FBQ0Q7QUFDRjs7OztFQW5DNkIsZ0I7QUE4RGhDOzs7Ozs7O0lBR2EsaUI7Ozs7O0FBTVg7Ozs7QUFJQSwrQkFBdUM7QUFBQTs7QUFBQSxRQUEzQixpQkFBMkIsdUVBQVAsS0FBTzs7QUFBQTs7QUFDckM7O0FBRHFDO0FBQUE7QUFBQSxhQVQ1QjtBQVM0Qjs7QUFBQTtBQUFBO0FBQUEsYUFSM0I7QUFRMkI7O0FBQUE7QUFBQTtBQUFBLGFBUDFCO0FBTzBCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVyQyxvRUFBZ0IsRUFBaEI7O0FBQ0Esc0VBQWlCLEVBQWpCOztBQUNBLHVFQUFrQixFQUFsQjs7QUFDQSw4RUFBMEIsaUJBQTFCOztBQUxxQztBQU10QztBQUVEOzs7Ozs7Ozs7QUFrRUE7Ozs7Ozs7Ozs7NkJBVVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLG1CQUFXLEtBQUssT0FESDtBQUViLG9CQUFZLEtBQUssUUFGSjtBQUdiLHFCQUFhLEtBQUs7QUFITCxPQUFmO0FBS0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQWpGYTtBQUNaLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJWSxPLEVBQVM7QUFDbkIsVUFBSSxLQUFLLFdBQUwsMEJBQW9CLElBQXBCLHFCQUFKLEVBQWlEO0FBQy9DLFFBQUEsa0JBQWtCO0FBQ25CLE9BRkQsTUFFTztBQUNMLFlBQUksb0JBQW9CLENBQUMsT0FBRCxFQUFVLGVBQWUsQ0FBQyxpQkFBMUIsRUFBNkMsSUFBN0MsQ0FBeEIsRUFBNEU7QUFDMUUsZ0RBQWdCLE9BQWhCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSWU7QUFDYixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWEsUSxFQUFVO0FBQ3JCLFVBQUksS0FBSyxXQUFMLDBCQUFvQixJQUFwQixxQkFBSixFQUFpRDtBQUMvQyxRQUFBLGtCQUFrQjtBQUNuQixPQUZELE1BRU87QUFDTCxZQUFJLG9CQUFvQixDQUFDLFFBQUQsRUFBVyxlQUFlLENBQUMsWUFBM0IsQ0FBeEIsRUFBa0U7QUFDaEUsa0RBQWlCLFFBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7d0JBSWdCO0FBQ2QsbUNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7O3NCQUljLFMsRUFBVztBQUN2QixVQUFJLEtBQUssV0FBTCwwQkFBb0IsSUFBcEIscUJBQUosRUFBaUQ7QUFDL0MsUUFBQSxrQkFBa0I7QUFDbkIsT0FGRCxNQUVPO0FBQ0wsWUFBSSxvQkFBb0IsQ0FBQyxTQUFELEVBQVksZUFBZSxDQUFDLE9BQTVCLENBQXhCLEVBQThEO0FBQzVELG1EQUFrQixTQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7OztFQWxGb0MsZTtBQTBHdkM7Ozs7Ozs7Ozs7Ozs7OztJQUdhLCtCOzs7OztBQUdYOzs7QUFHQSw2Q0FBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQUxSO0FBS1E7O0FBQUE7QUFFYjtBQUVEOzs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7OzZCQVFTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixjQUFNLEtBQUs7QUFERSxPQUFmO0FBR0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQTdCUTtBQUNQLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJTyxFLEVBQUk7QUFDVCxVQUFJLG9CQUFvQixDQUFDLEVBQUQsRUFBSyxlQUFlLENBQUMsaUJBQXJCLENBQXhCLEVBQWlFO0FBQy9ELDBDQUFXLEVBQVg7QUFDRDtBQUNGOzs7O0VBMUJrRCxlO0FBOENyRDs7Ozs7Ozs7O0lBR2EscUM7Ozs7O0FBR1g7OztBQUdBLG1EQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFk7QUFBQTtBQUFBLGFBTEg7QUFLRzs7QUFBQTtBQUViO0FBRUQ7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7NkJBUVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLG1CQUFXLEtBQUs7QUFESCxPQUFmO0FBR0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQTdCYTtBQUNaLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJWSxPLEVBQVM7QUFDbkIsVUFBSSxvQkFBb0IsQ0FBQyxPQUFELEVBQVUsZUFBZSxDQUFDLFdBQTFCLENBQXhCLEVBQWdFO0FBQzlELDhDQUFnQixPQUFoQjtBQUNEO0FBQ0Y7Ozs7RUExQndELGU7QUE4QzNEOzs7Ozs7Ozs7SUFHYSxHOzs7OztBQUNYOzs7QUFHQSxpQkFBYztBQUFBOztBQUFBOztBQUNaO0FBRUEsV0FBSyxHQUFMLEdBQVcsSUFBSSxNQUFKLEVBQVg7QUFIWTtBQUliO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSx3QkFBSyxHQUFMLHdEQUFVLFVBQVY7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OzZCQVVTO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBTSxNQUFNLEdBQUc7QUFDYixlQUFPLEtBQUs7QUFEQyxPQUFmO0FBR0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7OztFQW5Dc0IsZTtBQXNDekI7Ozs7Ozs7SUFHTSxNOzs7OztBQUdKOzs7QUFHQSxvQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQUxIO0FBS0c7O0FBR1osWUFBSyxhQUFMLEdBQXFCLElBQUksa0JBQUosRUFBckI7QUFIWTtBQUliO0FBRUQ7Ozs7Ozs7aUNBR2E7QUFBQTs7QUFDWDs7QUFDQSxrQ0FBSyxhQUFMLDRFQUFvQixVQUFwQjtBQUNEO0FBRUQ7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7NkJBU1M7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLG1CQUFXLEtBQUs7QUFESCxPQUFmO0FBR0EsYUFBTyxLQUFLLFVBQVo7QUFDQSxhQUFPLE1BQVA7QUFDRDs7O3dCQTlCYTtBQUNaLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJWSxPLEVBQVM7QUFDbkIsVUFBSSxvQkFBb0IsQ0FBQyxPQUFELEVBQVUsZUFBZSxDQUFDLFFBQTFCLENBQXhCLEVBQTZEO0FBQzNELDhDQUFnQixPQUFoQjtBQUNEO0FBQ0Y7Ozs7RUFwQ2tCLGU7QUF5RHJCOzs7Ozs7O0lBR00sa0I7Ozs7O0FBb0JKOzs7QUFHQSxnQ0FBYztBQUFBOztBQUFBOztBQUFBOztBQUNaOztBQURZO0FBQUE7QUFBQSxhQXRCRjtBQXNCRTs7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFxQkU7O0FBQUE7QUFBQTs7QUFBQSw4Q0FkSyxVQUFDLE9BQUQ7QUFBQSxlQUFhLFNBQWI7QUFBQSxPQWNMO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSw4Q0FOSyxVQUFDLE9BQUQ7QUFBQSxlQUFhLFNBQWI7QUFBQSxPQU1MO0FBQUE7O0FBQUE7QUFFYjtBQUVEOzs7Ozs7Ozs7QUFnQ0E7Ozs7Ozs7Ozs7NkJBVVM7QUFDUCxXQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFNLE1BQU0sR0FBRztBQUNiLG9CQUFZLEtBQUssUUFESjtBQUViLG9CQUFZO0FBRkMsT0FBZjtBQUlBLGFBQU8sS0FBSyxVQUFaO0FBQ0EsYUFBTyxNQUFQO0FBQ0Q7Ozt3QkE5Q2M7QUFDYixtQ0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7c0JBSWEsQyxFQUFHO0FBQ2QsTUFBQSxrQkFBa0I7QUFDbkI7QUFFRDs7Ozs7Ozt3QkFJZTtBQUNiLG1DQUFPLElBQVA7QUFDRDtBQUVEOzs7OztzQkFJYSxDLEVBQUc7QUFDZCxNQUFBLGtCQUFrQjtBQUNuQjs7OztFQXpEOEIsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzL0NqQyxJQUFNLE1BQU0sR0FBRztBQUNiLEVBQUEsVUFBVSxFQUFFLE1BREM7QUFFYixFQUFBLFdBQVcsRUFBRSxPQUZBO0FBR2IsRUFBQSxxQkFBcUIsRUFBRSxDQUhWO0FBSWIsRUFBQSxpQkFBaUIsRUFBRSxDQUpOO0FBS2IsRUFBQSxnQkFBZ0IsRUFBRSxDQUxMO0FBTWIsRUFBQSxlQUFlLEVBQUUsQ0FOSjtBQU9iLEVBQUEsY0FBYyxFQUFFLENBUEg7QUFRYixFQUFBLGlCQUFpQixFQUFFLENBUk47QUFTYixFQUFBLGVBQWUsRUFBRSxDQVRKO0FBVWIsRUFBQSxjQUFjLEVBQUU7QUFWSCxDQUFmO0FBYUEsSUFBTSxPQUFPLEdBQUc7QUFDZDtBQUNBLEVBQUEsWUFBWSxFQUFFLGdHQUZBO0FBR2QsRUFBQSxhQUFhLEVBQUUsbUhBSEQ7QUFJZCxFQUFBLGNBQWMsRUFBRSxhQUpGO0FBS2QsRUFBQSxpQkFBaUIsRUFBRSx1QkFMTDtBQU1kLEVBQUEsbUJBQW1CLEVBQUUsaUJBTlA7QUFPZCxFQUFBLDBCQUEwQixFQUFFLFNBUGQ7QUFRZCxFQUFBLHFCQUFxQixFQUFFLGtEQVJUO0FBU2QsRUFBQSwyQkFBMkIsRUFBRSwyQkFUZjtBQVVkLEVBQUEscUJBQXFCLEVBQUUscUZBVlQ7QUFZZCxFQUFBLGtCQUFrQixFQUFFO0FBQ2xCLFdBQU87QUFDTCxNQUFBLFlBQVksRUFBRSxtQkFEVDtBQUVMLE1BQUEsYUFBYSxFQUFFO0FBRlYsS0FEVztBQUtsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsd0JBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBTFc7QUFTbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLDhCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQVRXO0FBYWxCLFdBQU87QUFDTCxNQUFBLFlBQVksRUFBRSwwQ0FEVDtBQUVMLE1BQUEsYUFBYSxFQUFFO0FBRlYsS0FiVztBQWlCbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLGlCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQWpCVztBQXFCbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHVCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQXJCVztBQXlCbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHlDQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQXpCVztBQTZCbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHNCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQTdCVztBQWlDbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHVCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQWpDVztBQXFDbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHFCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVjtBQXJDVztBQVpOLENBQWhCOztBQXdEQSxJQUFNLElBQUksbUNBQ0wsT0FESyxHQUNPO0FBQ2IsRUFBQSxZQUFZLEVBQUUsMkdBREQ7QUFFYixFQUFBLDJCQUEyQixFQUFFLHdGQUZoQjtBQUdiLEVBQUEscUJBQXFCLEVBQUUsdUVBSFY7QUFJYixFQUFBLDZCQUE2QixFQUFFLDJJQUpsQjtBQUtiLEVBQUEsY0FBYyxFQUFFLG1CQUxIO0FBTWIsRUFBQSx3QkFBd0IsRUFBRSxxQkFOYjtBQU9iLEVBQUEsY0FBYyxFQUFFO0FBUEgsQ0FEUCxDQUFWOztBQVlBLElBQU0sU0FBUyxHQUFHO0FBQ2hCO0FBQ0EsRUFBQSxZQUFZLEVBQUUsc1RBRkU7QUFHaEIsRUFBQSxpQkFBaUIsRUFBRSw0QkFISDtBQUloQixFQUFBLGNBQWMsRUFBRSxvQkFKQTtBQUtoQixFQUFBLG1CQUFtQixFQUFFLHdFQUxMO0FBTWhCLEVBQUEsMEJBQTBCLEVBQUUsU0FOWjtBQU9oQixFQUFBLHFCQUFxQixFQUFFLGtEQVBQO0FBUWhCLEVBQUEsMkJBQTJCLEVBQUUsc0RBUmI7QUFTaEIsRUFBQSxxQkFBcUIsRUFBRSxzR0FUUDtBQVdoQixFQUFBLGtCQUFrQixFQUFFO0FBQ2xCLFNBQUs7QUFDSCxNQUFBLFlBQVksRUFBRSxVQURYO0FBRUgsTUFBQSxhQUFhLEVBQUU7QUFGWixLQURhO0FBS2xCLFdBQU87QUFDTCxNQUFBLFlBQVksRUFBRSxtQkFEVDtBQUVMLE1BQUEsYUFBYSxFQUFFO0FBRlYsS0FMVztBQVNsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsZ0NBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBVFc7QUFhbEIsV0FBTztBQUNMLE1BQUEsWUFBWSxFQUFFLHFCQURUO0FBRUwsTUFBQSxhQUFhLEVBQUU7QUFGVixLQWJXO0FBaUJsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsNkJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBakJXO0FBcUJsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsNkJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBckJXO0FBeUJsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsbUNBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBekJXO0FBNkJsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsK0JBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBN0JXO0FBaUNsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUscUNBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBakNXO0FBcUNsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsaUNBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBckNXO0FBeUNsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsa0NBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBekNXO0FBNkNsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsOEJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBN0NXO0FBaURsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsOEJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBakRXO0FBcURsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsMEJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBckRXO0FBeURsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsd0JBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBekRXO0FBNkRsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUscUJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBN0RXO0FBaUVsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUscUJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBakVXO0FBcUVsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsd0JBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBckVXO0FBeUVsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsOEJBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBekVXO0FBNkVsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsa0NBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBN0VXO0FBaUZsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsMENBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBakZXO0FBcUZsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVBQUUsaUNBRFQ7QUFFTCxNQUFBLGFBQWEsRUFBRTtBQUZWLEtBckZXO0FBeUZsQixXQUFPO0FBQ0wsTUFBQSxZQUFZLEVB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TUFBVjtBQUNBLFVBQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxVQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLENBQVgsQ0FBUjs7QUFDQSxhQUFPLENBQVAsRUFBVTtBQUNSLFFBQUEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFELENBQUgsS0FBYyxHQUFHLENBQUMsSUFBRCxDQUFILEdBQWEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQVAsR0FBWSxFQUF2QyxDQUFOO0FBQ0EsUUFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRLENBQUMsQ0FBQyxDQUFELENBQWhCO0FBQ0EsUUFBQSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxDQUFYLENBQUo7QUFDRDs7QUFDRCxNQUFBLEdBQUcsQ0FBQyxJQUFELENBQUgsR0FBWSxJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxNQUFNLENBQUMsRUFBRCxDQUFOLElBQWMsTUFBckI7QUFDRDtBQUVEOzs7Ozs7O0FBS08sU0FBUyxhQUFULENBQXVCLEdBQXZCLEVBQW9DO0FBQ3pDLE1BQUksSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLE1BQW9CLEdBQXBCLElBQTJCLE1BQU0sQ0FBQyxHQUFELENBQU4sQ0FBWSxPQUFaLENBQW9CLEdBQXBCLElBQTJCLENBQTFELEVBQTZELE9BQU8sQ0FBUDtBQUM3RCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBSixHQUFlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBZDtBQUNBLFNBQU8sS0FBSyxDQUFDLE1BQU4sSUFBZ0IsQ0FBdkI7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEBmbG93XG5pbXBvcnQgU2Nvcm0xMkFQSSBmcm9tICcuL1Njb3JtMTJBUEknO1xuaW1wb3J0IHtcbiAgQ01JLFxuICBDTUlBdHRlbXB0UmVjb3Jkc09iamVjdCxcbiAgQ01JRXZhbHVhdGlvbkNvbW1lbnRzT2JqZWN0LFxuICBDTUlUcmllc09iamVjdCxcbn0gZnJvbSAnLi9jbWkvYWljY19jbWknO1xuaW1wb3J0IHtOQVZ9IGZyb20gJy4vY21pL3Njb3JtMTJfY21pJztcblxuLyoqXG4gKiBUaGUgQUlDQyBBUEkgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUlDQyBleHRlbmRzIFNjb3JtMTJBUEkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIEFJQ0MgQVBJIG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiB7fSkge1xuICAgIGNvbnN0IGZpbmFsU2V0dGluZ3MgPSB7XG4gICAgICAuLi57XG4gICAgICAgIG1hc3Rlcnlfb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgfSwgLi4uc2V0dGluZ3MsXG4gICAgfTtcblxuICAgIHN1cGVyKGZpbmFsU2V0dGluZ3MpO1xuXG4gICAgdGhpcy5jbWkgPSBuZXcgQ01JKCk7XG4gICAgdGhpcy5uYXYgPSBuZXcgTkFWKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvciBidWlsZHMgYSBuZXcgY2hpbGQgZWxlbWVudCB0byBhZGQgdG8gdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBmb3VuZEZpcnN0SW5kZXhcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2hpbGRFbGVtZW50KENNSUVsZW1lbnQsIHZhbHVlLCBmb3VuZEZpcnN0SW5kZXgpIHtcbiAgICBsZXQgbmV3Q2hpbGQgPSBzdXBlci5nZXRDaGlsZEVsZW1lbnQoQ01JRWxlbWVudCwgdmFsdWUsIGZvdW5kRmlyc3RJbmRleCk7XG5cbiAgICBpZiAoIW5ld0NoaWxkKSB7XG4gICAgICBpZiAodGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsICdjbWlcXFxcLmV2YWx1YXRpb25cXFxcLmNvbW1lbnRzXFxcXC5cXFxcZCcpKSB7XG4gICAgICAgIG5ld0NoaWxkID0gbmV3IENNSUV2YWx1YXRpb25Db21tZW50c09iamVjdCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ01hdGNoZXMoQ01JRWxlbWVudCxcbiAgICAgICAgICAnY21pXFxcXC5zdHVkZW50X2RhdGFcXFxcLnRyaWVzXFxcXC5cXFxcZCcpKSB7XG4gICAgICAgIG5ld0NoaWxkID0gbmV3IENNSVRyaWVzT2JqZWN0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LFxuICAgICAgICAgICdjbWlcXFxcLnN0dWRlbnRfZGF0YVxcXFwuYXR0ZW1wdF9yZWNvcmRzXFxcXC5cXFxcZCcpKSB7XG4gICAgICAgIG5ld0NoaWxkID0gbmV3IENNSUF0dGVtcHRSZWNvcmRzT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIHdob2xlIEFQSSB3aXRoIGFub3RoZXJcbiAgICpcbiAgICogQHBhcmFtIHtBSUNDfSBuZXdBUElcbiAgICovXG4gIHJlcGxhY2VXaXRoQW5vdGhlclNjb3JtQVBJKG5ld0FQSSkge1xuICAgIC8vIERhdGEgTW9kZWxcbiAgICB0aGlzLmNtaSA9IG5ld0FQSS5jbWk7XG4gICAgdGhpcy5uYXYgPSBuZXdBUEkubmF2O1xuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHtDTUlBcnJheX0gZnJvbSAnLi9jbWkvY29tbW9uJztcbmltcG9ydCB7VmFsaWRhdGlvbkVycm9yfSBmcm9tICcuL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IEVycm9yQ29kZXMgZnJvbSAnLi9jb25zdGFudHMvZXJyb3JfY29kZXMnO1xuaW1wb3J0IEFQSUNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cy9hcGlfY29uc3RhbnRzJztcbmltcG9ydCB7dW5mbGF0dGVufSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IGdsb2JhbF9jb25zdGFudHMgPSBBUElDb25zdGFudHMuZ2xvYmFsO1xuY29uc3Qgc2Nvcm0xMl9lcnJvcl9jb2RlcyA9IEVycm9yQ29kZXMuc2Nvcm0xMjtcblxuLyoqXG4gKiBCYXNlIEFQSSBjbGFzcyBmb3IgQUlDQywgU0NPUk0gMS4yLCBhbmQgU0NPUk0gMjAwNC4gU2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAqIGFic3RyYWN0LCBhbmQgbmV2ZXIgaW5pdGlhbGl6ZWQgb24gaXQncyBvd24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VBUEkge1xuICAjdGltZW91dDtcbiAgI2Vycm9yX2NvZGVzO1xuICAjc2V0dGluZ3MgPSB7XG4gICAgYXV0b2NvbW1pdDogZmFsc2UsXG4gICAgYXV0b2NvbW1pdFNlY29uZHM6IDYwLFxuICAgIGxtc0NvbW1pdFVybDogZmFsc2UsXG4gICAgZGF0YUNvbW1pdEZvcm1hdDogJ2pzb24nLCAvLyB2YWxpZCBmb3JtYXRzIGFyZSAnanNvbicgb3IgJ2ZsYXR0ZW5lZCcsICdwYXJhbXMnXG4gICAgY29tbWl0UmVxdWVzdERhdGFUeXBlOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcbiAgICBhdXRvUHJvZ3Jlc3M6IGZhbHNlLFxuICAgIGxvZ0xldmVsOiBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9FUlJPUixcbiAgfTtcbiAgY21pO1xuICBzdGFydGluZ0RhdGE6IHt9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQmFzZSBBUEkgY2xhc3MuIFNldHMgc29tZSBzaGFyZWQgQVBJIGZpZWxkcywgYXMgd2VsbCBhc1xuICAgKiBzZXRzIHVwIG9wdGlvbnMgZm9yIHRoZSBBUEkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcl9jb2Rlc1xuICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVycm9yX2NvZGVzLCBzZXR0aW5ncykge1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBCYXNlQVBJKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IEJhc2VBUEkgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gZ2xvYmFsX2NvbnN0YW50cy5TVEFURV9OT1RfSU5JVElBTElaRUQ7XG4gICAgdGhpcy5sYXN0RXJyb3JDb2RlID0gMDtcbiAgICB0aGlzLmxpc3RlbmVyQXJyYXkgPSBbXTtcblxuICAgIHRoaXMuI3RpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuI2Vycm9yX2NvZGVzID0gZXJyb3JfY29kZXM7XG5cbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5hcGlMb2dMZXZlbCA9IHRoaXMuc2V0dGluZ3MubG9nTGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgQVBJXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFja05hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxpemVNZXNzYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtaW5hdGlvbk1lc3NhZ2VcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgaW5pdGlhbGl6ZShcbiAgICAgIGNhbGxiYWNrTmFtZTogU3RyaW5nLFxuICAgICAgaW5pdGlhbGl6ZU1lc3NhZ2U/OiBTdHJpbmcsXG4gICAgICB0ZXJtaW5hdGlvbk1lc3NhZ2U/OiBTdHJpbmcpIHtcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuXG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLnRocm93U0NPUk1FcnJvcih0aGlzLiNlcnJvcl9jb2Rlcy5JTklUSUFMSVpFRCwgaW5pdGlhbGl6ZU1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Rlcm1pbmF0ZWQoKSkge1xuICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IodGhpcy4jZXJyb3JfY29kZXMuVEVSTUlOQVRFRCwgdGVybWluYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBnbG9iYWxfY29uc3RhbnRzLlNUQVRFX0lOSVRJQUxJWkVEO1xuICAgICAgdGhpcy5sYXN0RXJyb3JDb2RlID0gMDtcbiAgICAgIHJldHVyblZhbHVlID0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9UUlVFO1xuICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKGNhbGxiYWNrTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hcGlMb2coY2FsbGJhY2tOYW1lLCBudWxsLCAncmV0dXJuZWQ6ICcgKyByZXR1cm5WYWx1ZSxcbiAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfSU5GTyk7XG4gICAgdGhpcy5jbGVhclNDT1JNRXJyb3IocmV0dXJuVmFsdWUpO1xuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3NldHRpbmdzXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIGdldCBzZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjc2V0dGluZ3NcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gICAqL1xuICBzZXQgc2V0dGluZ3Moc2V0dGluZ3M6IE9iamVjdCkge1xuICAgIHRoaXMuI3NldHRpbmdzID0gey4uLnRoaXMuI3NldHRpbmdzLCAuLi5zZXR0aW5nc307XG4gIH1cblxuICAvKipcbiAgICogVGVybWluYXRlcyB0aGUgY3VycmVudCBydW4gb2YgdGhlIEFQSVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tOYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tUZXJtaW5hdGVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRlcm1pbmF0ZShcbiAgICAgIGNhbGxiYWNrTmFtZTogU3RyaW5nLFxuICAgICAgY2hlY2tUZXJtaW5hdGVkOiBib29sZWFuKSB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9GQUxTRTtcblxuICAgIGlmICh0aGlzLmNoZWNrU3RhdGUoY2hlY2tUZXJtaW5hdGVkLFxuICAgICAgICB0aGlzLiNlcnJvcl9jb2Rlcy5URVJNSU5BVElPTl9CRUZPUkVfSU5JVCxcbiAgICAgICAgdGhpcy4jZXJyb3JfY29kZXMuTVVMVElQTEVfVEVSTUlOQVRJT04pKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGdsb2JhbF9jb25zdGFudHMuU1RBVEVfVEVSTUlOQVRFRDtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zdG9yZURhdGEodHJ1ZSk7XG4gICAgICBpZiAocmVzdWx0LmVycm9yQ29kZSAmJiByZXN1bHQuZXJyb3JDb2RlID4gMCkge1xuICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihyZXN1bHQuZXJyb3JDb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVyblZhbHVlID0gcmVzdWx0LnJlc3VsdCA/XG4gICAgICAgICAgcmVzdWx0LnJlc3VsdCA6IGdsb2JhbF9jb25zdGFudHMuU0NPUk1fRkFMU0U7XG5cbiAgICAgIGlmIChjaGVja1Rlcm1pbmF0ZWQpIHRoaXMubGFzdEVycm9yQ29kZSA9IDA7XG5cbiAgICAgIHJldHVyblZhbHVlID0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9UUlVFO1xuICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKGNhbGxiYWNrTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hcGlMb2coY2FsbGJhY2tOYW1lLCBudWxsLCAncmV0dXJuZWQ6ICcgKyByZXR1cm5WYWx1ZSxcbiAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfSU5GTyk7XG4gICAgdGhpcy5jbGVhclNDT1JNRXJyb3IocmV0dXJuVmFsdWUpO1xuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIENNSUVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFja05hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBjaGVja1Rlcm1pbmF0ZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0VmFsdWUoXG4gICAgICBjYWxsYmFja05hbWU6IFN0cmluZyxcbiAgICAgIGNoZWNrVGVybWluYXRlZDogYm9vbGVhbixcbiAgICAgIENNSUVsZW1lbnQ6IFN0cmluZykge1xuICAgIGxldCByZXR1cm5WYWx1ZTtcblxuICAgIGlmICh0aGlzLmNoZWNrU3RhdGUoY2hlY2tUZXJtaW5hdGVkLFxuICAgICAgICB0aGlzLiNlcnJvcl9jb2Rlcy5SRVRSSUVWRV9CRUZPUkVfSU5JVCxcbiAgICAgICAgdGhpcy4jZXJyb3JfY29kZXMuUkVUUklFVkVfQUZURVJfVEVSTSkpIHtcbiAgICAgIGlmIChjaGVja1Rlcm1pbmF0ZWQpIHRoaXMubGFzdEVycm9yQ29kZSA9IDA7XG4gICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuZ2V0Q01JVmFsdWUoQ01JRWxlbWVudCk7XG4gICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoY2FsbGJhY2tOYW1lLCBDTUlFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmFwaUxvZyhjYWxsYmFja05hbWUsIENNSUVsZW1lbnQsICc6IHJldHVybmVkOiAnICsgcmV0dXJuVmFsdWUsXG4gICAgICAgIGdsb2JhbF9jb25zdGFudHMuTE9HX0xFVkVMX0lORk8pO1xuICAgIHRoaXMuY2xlYXJTQ09STUVycm9yKHJldHVyblZhbHVlKTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgQ01JRWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrTmFtZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrVGVybWluYXRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFZhbHVlKFxuICAgICAgY2FsbGJhY2tOYW1lOiBTdHJpbmcsXG4gICAgICBjaGVja1Rlcm1pbmF0ZWQ6IGJvb2xlYW4sXG4gICAgICBDTUlFbGVtZW50LFxuICAgICAgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICBsZXQgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tTdGF0ZShjaGVja1Rlcm1pbmF0ZWQsIHRoaXMuI2Vycm9yX2NvZGVzLlNUT1JFX0JFRk9SRV9JTklULFxuICAgICAgICB0aGlzLiNlcnJvcl9jb2Rlcy5TVE9SRV9BRlRFUl9URVJNKSkge1xuICAgICAgaWYgKGNoZWNrVGVybWluYXRlZCkgdGhpcy5sYXN0RXJyb3JDb2RlID0gMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5zZXRDTUlWYWx1ZShDTUlFbGVtZW50LCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgVmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgdGhpcy5sYXN0RXJyb3JDb2RlID0gZS5lcnJvckNvZGU7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IodGhpcy4jZXJyb3JfY29kZXMuR0VORVJBTCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHJvY2Vzc0xpc3RlbmVycyhjYWxsYmFja05hbWUsIENNSUVsZW1lbnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGRpZG4ndCBoYXZlIGFueSBlcnJvcnMgd2hpbGUgc2V0dGluZyB0aGUgZGF0YSwgZ28gYWhlYWQgYW5kXG4gICAgLy8gc2NoZWR1bGUgYSBjb21taXQsIGlmIGF1dG9jb21taXQgaXMgdHVybmVkIG9uXG4gICAgaWYgKFN0cmluZyh0aGlzLmxhc3RFcnJvckNvZGUpID09PSAnMCcpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9jb21taXQgJiYgIXRoaXMuI3RpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZUNvbW1pdCh0aGlzLnNldHRpbmdzLmF1dG9jb21taXRTZWNvbmRzICogMTAwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcGlMb2coY2FsbGJhY2tOYW1lLCBDTUlFbGVtZW50LFxuICAgICAgICAnOiAnICsgdmFsdWUgKyAnOiByZXN1bHQ6ICcgKyByZXR1cm5WYWx1ZSxcbiAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfSU5GTyk7XG4gICAgdGhpcy5jbGVhclNDT1JNRXJyb3IocmV0dXJuVmFsdWUpO1xuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZGVycyBMTVMgdG8gc3RvcmUgYWxsIGNvbnRlbnQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tOYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tUZXJtaW5hdGVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGNvbW1pdChcbiAgICAgIGNhbGxiYWNrTmFtZTogU3RyaW5nLFxuICAgICAgY2hlY2tUZXJtaW5hdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5jbGVhclNjaGVkdWxlZENvbW1pdCgpO1xuXG4gICAgbGV0IHJldHVyblZhbHVlID0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9GQUxTRTtcblxuICAgIGlmICh0aGlzLmNoZWNrU3RhdGUoY2hlY2tUZXJtaW5hdGVkLCB0aGlzLiNlcnJvcl9jb2Rlcy5DT01NSVRfQkVGT1JFX0lOSVQsXG4gICAgICAgIHRoaXMuI2Vycm9yX2NvZGVzLkNPTU1JVF9BRlRFUl9URVJNKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zdG9yZURhdGEoZmFsc2UpO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvckNvZGUgJiYgcmVzdWx0LmVycm9yQ29kZSA+IDApIHtcbiAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IocmVzdWx0LmVycm9yQ29kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm5WYWx1ZSA9IHJlc3VsdC5yZXN1bHQgP1xuICAgICAgICAgIHJlc3VsdC5yZXN1bHQgOiBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuXG4gICAgICB0aGlzLmFwaUxvZyhjYWxsYmFja05hbWUsICdIdHRwUmVxdWVzdCcsICcgUmVzdWx0OiAnICsgcmV0dXJuVmFsdWUsXG4gICAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfREVCVUcpO1xuXG4gICAgICBpZiAoY2hlY2tUZXJtaW5hdGVkKSB0aGlzLmxhc3RFcnJvckNvZGUgPSAwO1xuXG4gICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoY2FsbGJhY2tOYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwaUxvZyhjYWxsYmFja05hbWUsIG51bGwsICdyZXR1cm5lZDogJyArIHJldHVyblZhbHVlLFxuICAgICAgICBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9JTkZPKTtcbiAgICB0aGlzLmNsZWFyU0NPUk1FcnJvcihyZXR1cm5WYWx1ZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsYXN0IGVycm9yIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrTmFtZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRMYXN0RXJyb3IoY2FsbGJhY2tOYW1lOiBTdHJpbmcpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IFN0cmluZyh0aGlzLmxhc3RFcnJvckNvZGUpO1xuXG4gICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKGNhbGxiYWNrTmFtZSk7XG5cbiAgICB0aGlzLmFwaUxvZyhjYWxsYmFja05hbWUsIG51bGwsICdyZXR1cm5lZDogJyArIHJldHVyblZhbHVlLFxuICAgICAgICBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9JTkZPKTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcnJvck51bWJlciBlcnJvciBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tOYW1lXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBDTUlFcnJvckNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RXJyb3JTdHJpbmcoY2FsbGJhY2tOYW1lOiBTdHJpbmcsIENNSUVycm9yQ29kZSkge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9ICcnO1xuXG4gICAgaWYgKENNSUVycm9yQ29kZSAhPT0gbnVsbCAmJiBDTUlFcnJvckNvZGUgIT09ICcnKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuZ2V0TG1zRXJyb3JNZXNzYWdlRGV0YWlscyhDTUlFcnJvckNvZGUpO1xuICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKGNhbGxiYWNrTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hcGlMb2coY2FsbGJhY2tOYW1lLCBudWxsLCAncmV0dXJuZWQ6ICcgKyByZXR1cm5WYWx1ZSxcbiAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfSU5GTyk7XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNvbXByZWhlbnNpdmUgZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yTnVtYmVyIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tOYW1lXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBDTUlFcnJvckNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RGlhZ25vc3RpYyhjYWxsYmFja05hbWU6IFN0cmluZywgQ01JRXJyb3JDb2RlKSB7XG4gICAgbGV0IHJldHVyblZhbHVlID0gJyc7XG5cbiAgICBpZiAoQ01JRXJyb3JDb2RlICE9PSBudWxsICYmIENNSUVycm9yQ29kZSAhPT0gJycpIHtcbiAgICAgIHJldHVyblZhbHVlID0gdGhpcy5nZXRMbXNFcnJvck1lc3NhZ2VEZXRhaWxzKENNSUVycm9yQ29kZSwgdHJ1ZSk7XG4gICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoY2FsbGJhY2tOYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwaUxvZyhjYWxsYmFja05hbWUsIG51bGwsICdyZXR1cm5lZDogJyArIHJldHVyblZhbHVlLFxuICAgICAgICBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9JTkZPKTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIExNUyBzdGF0ZSBhbmQgZW5zdXJlcyBpdCBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBjaGVja1Rlcm1pbmF0ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJlZm9yZUluaXRFcnJvclxuICAgKiBAcGFyYW0ge251bWJlcn0gYWZ0ZXJUZXJtRXJyb3JcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNoZWNrU3RhdGUoXG4gICAgICBjaGVja1Rlcm1pbmF0ZWQ6IGJvb2xlYW4sXG4gICAgICBiZWZvcmVJbml0RXJyb3I6IG51bWJlcixcbiAgICAgIGFmdGVyVGVybUVycm9yPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNOb3RJbml0aWFsaXplZCgpKSB7XG4gICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihiZWZvcmVJbml0RXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY2hlY2tUZXJtaW5hdGVkICYmIHRoaXMuaXNUZXJtaW5hdGVkKCkpIHtcbiAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKGFmdGVyVGVybUVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dnaW5nIGZvciBhbGwgU0NPUk0gYWN0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2dNZXNzYWdlXG4gICAqIEBwYXJhbSB7bnVtYmVyfW1lc3NhZ2VMZXZlbFxuICAgKi9cbiAgYXBpTG9nKFxuICAgICAgZnVuY3Rpb25OYW1lOiBTdHJpbmcsXG4gICAgICBDTUlFbGVtZW50OiBTdHJpbmcsXG4gICAgICBsb2dNZXNzYWdlOiBTdHJpbmcsXG4gICAgICBtZXNzYWdlTGV2ZWw6IG51bWJlcikge1xuICAgIGxvZ01lc3NhZ2UgPSB0aGlzLmZvcm1hdE1lc3NhZ2UoZnVuY3Rpb25OYW1lLCBDTUlFbGVtZW50LCBsb2dNZXNzYWdlKTtcblxuICAgIGlmIChtZXNzYWdlTGV2ZWwgPj0gdGhpcy5hcGlMb2dMZXZlbCkge1xuICAgICAgc3dpdGNoIChtZXNzYWdlTGV2ZWwpIHtcbiAgICAgICAgY2FzZSBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9FUlJPUjpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGdsb2JhbF9jb25zdGFudHMuTE9HX0xFVkVMX1dBUk5JTkc6XG4gICAgICAgICAgY29uc29sZS53YXJuKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGdsb2JhbF9jb25zdGFudHMuTE9HX0xFVkVMX0lORk86XG4gICAgICAgICAgY29uc29sZS5pbmZvKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGdsb2JhbF9jb25zdGFudHMuTE9HX0xFVkVMX0RFQlVHOlxuICAgICAgICAgIGlmIChjb25zb2xlLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIFNDT1JNIG1lc3NhZ2VzIGZvciBlYXN5IHJlYWRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRNZXNzYWdlKGZ1bmN0aW9uTmFtZTogU3RyaW5nLCBDTUlFbGVtZW50OiBTdHJpbmcsIG1lc3NhZ2U6IFN0cmluZykge1xuICAgIGNvbnN0IGJhc2VMZW5ndGggPSAyMDtcbiAgICBsZXQgbWVzc2FnZVN0cmluZyA9ICcnO1xuXG4gICAgbWVzc2FnZVN0cmluZyArPSBmdW5jdGlvbk5hbWU7XG5cbiAgICBsZXQgZmlsbENoYXJzID0gYmFzZUxlbmd0aCAtIG1lc3NhZ2VTdHJpbmcubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsQ2hhcnM7IGkrKykge1xuICAgICAgbWVzc2FnZVN0cmluZyArPSAnICc7XG4gICAgfVxuXG4gICAgbWVzc2FnZVN0cmluZyArPSAnOiAnO1xuXG4gICAgaWYgKENNSUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IENNSUVsZW1lbnRCYXNlTGVuZ3RoID0gNzA7XG5cbiAgICAgIG1lc3NhZ2VTdHJpbmcgKz0gQ01JRWxlbWVudDtcblxuICAgICAgZmlsbENoYXJzID0gQ01JRWxlbWVudEJhc2VMZW5ndGggLSBtZXNzYWdlU3RyaW5nLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWxsQ2hhcnM7IGorKykge1xuICAgICAgICBtZXNzYWdlU3RyaW5nICs9ICcgJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgbWVzc2FnZVN0cmluZyArPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYge3N0cn0gY29udGFpbnMge3Rlc3Rlcn1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gY2hlY2sgYWdhaW5zdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVzdGVyIFN0cmluZyB0byBjaGVjayBmb3JcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0cmluZ01hdGNoZXMoc3RyOiBTdHJpbmcsIHRlc3RlcjogU3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ciAmJiB0ZXN0ZXIgJiYgc3RyLm1hdGNoKHRlc3Rlcik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBzcGVjaWZpYyBvYmplY3QgaGFzIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICAgKiBAcGFyYW0geyp9IHJlZk9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hlY2tPYmplY3RIYXNQcm9wZXJ0eShyZWZPYmplY3QsIGF0dHJpYnV0ZTogU3RyaW5nKSB7XG4gICAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlZk9iamVjdCwgYXR0cmlidXRlKSB8fFxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHJlZk9iamVjdCksIGF0dHJpYnV0ZSkgfHxcbiAgICAgICAgKGF0dHJpYnV0ZSBpbiByZWZPYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1lc3NhZ2UgdGhhdCBjb3JyZXNwb25kcyB0byBlcnJvck51bWJlclxuICAgKiBBUElzIHRoYXQgaW5oZXJpdCBCYXNlQVBJIHNob3VsZCBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBfZXJyb3JOdW1iZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBfZGV0YWlsXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRMbXNFcnJvck1lc3NhZ2VEZXRhaWxzKF9lcnJvck51bWJlciwgX2RldGFpbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBnZXRMbXNFcnJvck1lc3NhZ2VEZXRhaWxzIG1ldGhvZCBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBmb3IgdGhlIHNwZWNpZmljIGVsZW1lbnQuXG4gICAqIEFQSXMgdGhhdCBpbmhlcml0IEJhc2VBUEkgc2hvdWxkIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IF9DTUlFbGVtZW50XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRDTUlWYWx1ZShfQ01JRWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdldENNSVZhbHVlIG1ldGhvZCBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBmb3IgdGhlIHNwZWNpZmljIGVsZW1lbnQuXG4gICAqIEFQSXMgdGhhdCBpbmhlcml0IEJhc2VBUEkgc2hvdWxkIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IF9DTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7YW55fSBfdmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHNldENNSVZhbHVlKF9DTUlFbGVtZW50LCBfdmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzZXRDTUlWYWx1ZSBtZXRob2QgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVkIEFQSSBtZXRob2QgdG8gc2V0IGEgdmFsaWQgZm9yIGEgZ2l2ZW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBzY29ybTIwMDRcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfY29tbW9uU2V0Q01JVmFsdWUoXG4gICAgICBtZXRob2ROYW1lOiBTdHJpbmcsIHNjb3JtMjAwNDogYm9vbGVhbiwgQ01JRWxlbWVudCwgdmFsdWUpIHtcbiAgICBpZiAoIUNNSUVsZW1lbnQgfHwgQ01JRWxlbWVudCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cnVjdHVyZSA9IENNSUVsZW1lbnQuc3BsaXQoJy4nKTtcbiAgICBsZXQgcmVmT2JqZWN0ID0gdGhpcztcbiAgICBsZXQgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFO1xuICAgIGxldCBmb3VuZEZpcnN0SW5kZXggPSBmYWxzZTtcblxuICAgIGNvbnN0IGludmFsaWRFcnJvck1lc3NhZ2UgPSBgVGhlIGRhdGEgbW9kZWwgZWxlbWVudCBwYXNzZWQgdG8gJHttZXRob2ROYW1lfSAoJHtDTUlFbGVtZW50fSkgaXMgbm90IGEgdmFsaWQgU0NPUk0gZGF0YSBtb2RlbCBlbGVtZW50LmA7XG4gICAgY29uc3QgaW52YWxpZEVycm9yQ29kZSA9IHNjb3JtMjAwNCA/XG4gICAgICAgIHRoaXMuI2Vycm9yX2NvZGVzLlVOREVGSU5FRF9EQVRBX01PREVMIDpcbiAgICAgICAgdGhpcy4jZXJyb3JfY29kZXMuR0VORVJBTDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RydWN0dXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGUgPSBzdHJ1Y3R1cmVbaV07XG5cbiAgICAgIGlmIChpID09PSBzdHJ1Y3R1cmUubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoc2Nvcm0yMDA0ICYmIChhdHRyaWJ1dGUuc3Vic3RyKDAsIDgpID09PSAne3RhcmdldD0nKSAmJlxuICAgICAgICAgICAgKHR5cGVvZiByZWZPYmplY3QuX2lzVGFyZ2V0VmFsaWQgPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcih0aGlzLiNlcnJvcl9jb2Rlcy5SRUFEX09OTFlfRUxFTUVOVCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoZWNrT2JqZWN0SGFzUHJvcGVydHkocmVmT2JqZWN0LCBhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IoaW52YWxpZEVycm9yQ29kZSwgaW52YWxpZEVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LCAnXFxcXC5jb3JyZWN0X3Jlc3BvbnNlc1xcXFwuXFxcXGQnKSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvcnJlY3RSZXNwb25zZShDTUlFbGVtZW50LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzY29ybTIwMDQgfHwgdGhpcy5sYXN0RXJyb3JDb2RlID09PSAwKSB7XG4gICAgICAgICAgICByZWZPYmplY3RbYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX1RSVUU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWZPYmplY3QgPSByZWZPYmplY3RbYXR0cmlidXRlXTtcbiAgICAgICAgaWYgKCFyZWZPYmplY3QpIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihpbnZhbGlkRXJyb3JDb2RlLCBpbnZhbGlkRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWZPYmplY3QgaW5zdGFuY2VvZiBDTUlBcnJheSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc3RydWN0dXJlW2kgKyAxXSwgMTApO1xuXG4gICAgICAgICAgLy8gU0NPIGlzIHRyeWluZyB0byBzZXQgYW4gaXRlbSBvbiBhbiBhcnJheVxuICAgICAgICAgIGlmICghaXNOYU4oaW5kZXgpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcmVmT2JqZWN0LmNoaWxkQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICByZWZPYmplY3QgPSBpdGVtO1xuICAgICAgICAgICAgICBmb3VuZEZpcnN0SW5kZXggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSB0aGlzLmdldENoaWxkRWxlbWVudChDTUlFbGVtZW50LCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGZvdW5kRmlyc3RJbmRleCk7XG4gICAgICAgICAgICAgIGZvdW5kRmlyc3RJbmRleCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKCFuZXdDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKGludmFsaWRFcnJvckNvZGUsIGludmFsaWRFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyZWZPYmplY3QuaW5pdGlhbGl6ZWQpIG5ld0NoaWxkLmluaXRpYWxpemUoKTtcblxuICAgICAgICAgICAgICAgIHJlZk9iamVjdC5jaGlsZEFycmF5LnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlZk9iamVjdCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhhdmUgdG8gdXBkYXRlIGkgdmFsdWUgdG8gc2tpcCB0aGUgYXJyYXkgcG9zaXRpb25cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IGdsb2JhbF9jb25zdGFudHMuU0NPUk1fRkFMU0UpIHtcbiAgICAgIHRoaXMuYXBpTG9nKG1ldGhvZE5hbWUsIG51bGwsXG4gICAgICAgICAgYFRoZXJlIHdhcyBhbiBlcnJvciBzZXR0aW5nIHRoZSB2YWx1ZSBmb3I6ICR7Q01JRWxlbWVudH0sIHZhbHVlIG9mOiAke3ZhbHVlfWAsXG4gICAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfV0FSTklORyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCBmb3IgdmFsaWRhdGluZyB0aGF0IGEgcmVzcG9uc2UgaXMgY29ycmVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IF9DTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gX3ZhbHVlXG4gICAqL1xuICB2YWxpZGF0ZUNvcnJlY3RSZXNwb25zZShfQ01JRWxlbWVudCwgX3ZhbHVlKSB7XG4gICAgLy8ganVzdCBhIHN0dWIgbWV0aG9kXG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvciBidWlsZHMgYSBuZXcgY2hpbGQgZWxlbWVudCB0byBhZGQgdG8gdGhlIGFycmF5LlxuICAgKiBBUElzIHRoYXQgaW5oZXJpdCBCYXNlQVBJIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IF9DTUlFbGVtZW50IC0gdW51c2VkXG4gICAqIEBwYXJhbSB7Kn0gX3ZhbHVlIC0gdW51c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gX2ZvdW5kRmlyc3RJbmRleCAtIHVudXNlZFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGdldENoaWxkRWxlbWVudChfQ01JRWxlbWVudCwgX3ZhbHVlLCBfZm91bmRGaXJzdEluZGV4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZ2V0Q2hpbGRFbGVtZW50IG1ldGhvZCBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFsdWUgZnJvbSB0aGUgQ01JIE9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3JtMjAwNFxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgX2NvbW1vbkdldENNSVZhbHVlKG1ldGhvZE5hbWU6IFN0cmluZywgc2Nvcm0yMDA0OiBib29sZWFuLCBDTUlFbGVtZW50KSB7XG4gICAgaWYgKCFDTUlFbGVtZW50IHx8IENNSUVsZW1lbnQgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RydWN0dXJlID0gQ01JRWxlbWVudC5zcGxpdCgnLicpO1xuICAgIGxldCByZWZPYmplY3QgPSB0aGlzO1xuICAgIGxldCBhdHRyaWJ1dGUgPSBudWxsO1xuXG4gICAgY29uc3QgdW5pbml0aWFsaXplZEVycm9yTWVzc2FnZSA9IGBUaGUgZGF0YSBtb2RlbCBlbGVtZW50IHBhc3NlZCB0byAke21ldGhvZE5hbWV9ICgke0NNSUVsZW1lbnR9KSBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQuYDtcbiAgICBjb25zdCBpbnZhbGlkRXJyb3JNZXNzYWdlID0gYFRoZSBkYXRhIG1vZGVsIGVsZW1lbnQgcGFzc2VkIHRvICR7bWV0aG9kTmFtZX0gKCR7Q01JRWxlbWVudH0pIGlzIG5vdCBhIHZhbGlkIFNDT1JNIGRhdGEgbW9kZWwgZWxlbWVudC5gO1xuICAgIGNvbnN0IGludmFsaWRFcnJvckNvZGUgPSBzY29ybTIwMDQgP1xuICAgICAgICB0aGlzLiNlcnJvcl9jb2Rlcy5VTkRFRklORURfREFUQV9NT0RFTCA6XG4gICAgICAgIHRoaXMuI2Vycm9yX2NvZGVzLkdFTkVSQUw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cnVjdHVyZS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cmlidXRlID0gc3RydWN0dXJlW2ldO1xuXG4gICAgICBpZiAoIXNjb3JtMjAwNCkge1xuICAgICAgICBpZiAoaSA9PT0gc3RydWN0dXJlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrT2JqZWN0SGFzUHJvcGVydHkocmVmT2JqZWN0LCBhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihpbnZhbGlkRXJyb3JDb2RlLCBpbnZhbGlkRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoU3RyaW5nKGF0dHJpYnV0ZSkuc3Vic3RyKDAsIDgpID09PSAne3RhcmdldD0nKSAmJlxuICAgICAgICAgICAgKHR5cGVvZiByZWZPYmplY3QuX2lzVGFyZ2V0VmFsaWQgPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBTdHJpbmcoYXR0cmlidXRlKS5cbiAgICAgICAgICAgICAgc3Vic3RyKDgsIFN0cmluZyhhdHRyaWJ1dGUpLmxlbmd0aCAtIDkpO1xuICAgICAgICAgIHJldHVybiByZWZPYmplY3QuX2lzVGFyZ2V0VmFsaWQodGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hlY2tPYmplY3RIYXNQcm9wZXJ0eShyZWZPYmplY3QsIGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihpbnZhbGlkRXJyb3JDb2RlLCBpbnZhbGlkRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVmT2JqZWN0ID0gcmVmT2JqZWN0W2F0dHJpYnV0ZV07XG4gICAgICBpZiAocmVmT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IoaW52YWxpZEVycm9yQ29kZSwgaW52YWxpZEVycm9yTWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmT2JqZWN0IGluc3RhbmNlb2YgQ01JQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzdHJ1Y3R1cmVbaSArIDFdLCAxMCk7XG5cbiAgICAgICAgLy8gU0NPIGlzIHRyeWluZyB0byBzZXQgYW4gaXRlbSBvbiBhbiBhcnJheVxuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZWZPYmplY3QuY2hpbGRBcnJheVtpbmRleF07XG5cbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgcmVmT2JqZWN0ID0gaXRlbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3IodGhpcy4jZXJyb3JfY29kZXMuVkFMVUVfTk9UX0lOSVRJQUxJWkVELFxuICAgICAgICAgICAgICAgIHVuaW5pdGlhbGl6ZWRFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGF2ZSB0byB1cGRhdGUgaSB2YWx1ZSB0byBza2lwIHRoZSBhcnJheSBwb3NpdGlvblxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZPYmplY3QgPT09IG51bGwgfHwgcmVmT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghc2Nvcm0yMDA0KSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09ICdfY2hpbGRyZW4nKSB7XG4gICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3Ioc2Nvcm0xMl9lcnJvcl9jb2Rlcy5DSElMRFJFTl9FUlJPUik7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSAnX2NvdW50Jykge1xuICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMTJfZXJyb3JfY29kZXMuQ09VTlRfRVJST1IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZWZPYmplY3Q7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgQVBJJ3MgY3VycmVudCBzdGF0ZSBpcyBTVEFURV9JTklUSUFMSVpFRFxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPT09IGdsb2JhbF9jb25zdGFudHMuU1RBVEVfSU5JVElBTElaRUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBBUEkncyBjdXJyZW50IHN0YXRlIGlzIFNUQVRFX05PVF9JTklUSUFMSVpFRFxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNOb3RJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPT09IGdsb2JhbF9jb25zdGFudHMuU1RBVEVfTk9UX0lOSVRJQUxJWkVEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgQVBJJ3MgY3VycmVudCBzdGF0ZSBpcyBTVEFURV9URVJNSU5BVEVEXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1Rlcm1pbmF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID09PSBnbG9iYWxfY29uc3RhbnRzLlNUQVRFX1RFUk1JTkFURUQ7XG4gIH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIGF0dGFjaGluZyB0byBhIHNwZWNpZmljIFNDT1JNIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaXN0ZW5lck5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uKGxpc3RlbmVyTmFtZTogU3RyaW5nLCBjYWxsYmFjazogZnVuY3Rpb24pIHtcbiAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm47XG5cbiAgICBjb25zdCBsaXN0ZW5lckZ1bmN0aW9ucyA9IGxpc3RlbmVyTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJGdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyU3BsaXQgPSBsaXN0ZW5lckZ1bmN0aW9uc1tpXS5zcGxpdCgnLicpO1xuICAgICAgaWYgKGxpc3RlbmVyU3BsaXQubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IGxpc3RlbmVyU3BsaXRbMF07XG5cbiAgICAgIGxldCBDTUlFbGVtZW50ID0gbnVsbDtcbiAgICAgIGlmIChsaXN0ZW5lclNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgQ01JRWxlbWVudCA9IGxpc3RlbmVyTmFtZS5yZXBsYWNlKGZ1bmN0aW9uTmFtZSArICcuJywgJycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVyQXJyYXkucHVzaCh7XG4gICAgICAgIGZ1bmN0aW9uTmFtZTogZnVuY3Rpb25OYW1lLFxuICAgICAgICBDTUlFbGVtZW50OiBDTUlFbGVtZW50LFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGFueSAnb24nIGxpc3RlbmVycyB0aGF0IGhhdmUgYmVlbiBjcmVhdGVkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgcHJvY2Vzc0xpc3RlbmVycyhmdW5jdGlvbk5hbWU6IFN0cmluZywgQ01JRWxlbWVudDogU3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lckFycmF5W2ldO1xuICAgICAgY29uc3QgZnVuY3Rpb25zTWF0Y2ggPSBsaXN0ZW5lci5mdW5jdGlvbk5hbWUgPT09IGZ1bmN0aW9uTmFtZTtcbiAgICAgIGNvbnN0IGxpc3RlbmVySGFzQ01JRWxlbWVudCA9ICEhbGlzdGVuZXIuQ01JRWxlbWVudDtcbiAgICAgIGNvbnN0IENNSUVsZW1lbnRzTWF0Y2ggPSBsaXN0ZW5lci5DTUlFbGVtZW50ID09PSBDTUlFbGVtZW50O1xuXG4gICAgICBpZiAoZnVuY3Rpb25zTWF0Y2ggJiYgKCFsaXN0ZW5lckhhc0NNSUVsZW1lbnQgfHwgQ01JRWxlbWVudHNNYXRjaCkpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soQ01JRWxlbWVudCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBTQ09STSBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZXJyb3JOdW1iZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIHRocm93U0NPUk1FcnJvcihlcnJvck51bWJlcjogbnVtYmVyLCBtZXNzYWdlOiBTdHJpbmcpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldExtc0Vycm9yTWVzc2FnZURldGFpbHMoZXJyb3JOdW1iZXIpO1xuICAgIH1cblxuICAgIHRoaXMuYXBpTG9nKCd0aHJvd1NDT1JNRXJyb3InLCBudWxsLCBlcnJvck51bWJlciArICc6ICcgKyBtZXNzYWdlLFxuICAgICAgICBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9FUlJPUik7XG5cbiAgICB0aGlzLmxhc3RFcnJvckNvZGUgPSBTdHJpbmcoZXJyb3JOdW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgbGFzdCBTQ09STSBlcnJvciBjb2RlIG9uIHN1Y2Nlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWNjZXNzXG4gICAqL1xuICBjbGVhclNDT1JNRXJyb3Ioc3VjY2VzczogU3RyaW5nKSB7XG4gICAgaWYgKHN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiBzdWNjZXNzICE9PSBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX0ZBTFNFKSB7XG4gICAgICB0aGlzLmxhc3RFcnJvckNvZGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBzdG9yZSB0aGUgZGF0YSB0byB0aGUgTE1TLCBsb2dzIGRhdGEgaWYgbm8gTE1TIGNvbmZpZ3VyZWRcbiAgICogQVBJcyB0aGF0IGluaGVyaXQgQmFzZUFQSSBzaG91bGQgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IF9jYWxjdWxhdGVUb3RhbFRpbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHN0b3JlRGF0YShfY2FsY3VsYXRlVG90YWxUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHN0b3JlRGF0YSBtZXRob2QgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgQ01JIGZyb20gYSBmbGF0dGVuZWQgSlNPTiBvYmplY3RcbiAgICogQHBhcmFtIHtvYmplY3R9IGpzb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICovXG4gIGxvYWRGcm9tRmxhdHRlbmVkSlNPTihqc29uLCBDTUlFbGVtZW50KSB7XG4gICAgdGhpcy5sb2FkRnJvbUpTT04odW5mbGF0dGVuKGpzb24pLCBDTUlFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBDTUkgZGF0YSBmcm9tIGEgSlNPTiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqL1xuICBsb2FkRnJvbUpTT04oanNvbiwgQ01JRWxlbWVudCkge1xuICAgIGlmICghdGhpcy5pc05vdEluaXRpYWxpemVkKCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ2xvYWRGcm9tSlNPTiBjYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlIHRoZSBjYWxsIHRvIGxtc0luaXRpYWxpemUuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQ01JRWxlbWVudCA9IENNSUVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IENNSUVsZW1lbnQgOiAnY21pJztcblxuICAgIHRoaXMuc3RhcnRpbmdEYXRhID0ganNvbjtcblxuICAgIC8vIGNvdWxkIHRoaXMgYmUgcmVmYWN0b3JlZCBkb3duIHRvIGZsYXR0ZW4oanNvbikgdGhlbiBzZXRDTUlWYWx1ZSBvbiBlYWNoP1xuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb24pIHtcbiAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGpzb24sIGtleSkgJiYganNvbltrZXldKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDTUlFbGVtZW50ID0gKENNSUVsZW1lbnQgPyBDTUlFbGVtZW50ICsgJy4nIDogJycpICsga2V5O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25ba2V5XTtcblxuICAgICAgICBpZiAodmFsdWVbJ2NoaWxkQXJyYXknXSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVbJ2NoaWxkQXJyYXknXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sb2FkRnJvbUpTT04odmFsdWVbJ2NoaWxkQXJyYXknXVtpXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q01JRWxlbWVudCArICcuJyArIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgdGhpcy5sb2FkRnJvbUpTT04odmFsdWUsIGN1cnJlbnRDTUlFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldENNSVZhbHVlKGN1cnJlbnRDTUlFbGVtZW50LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBDTUkgb2JqZWN0IHRvIEpTT04gZm9yIHNlbmRpbmcgdG8gYW4gTE1TLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXJDTUlUb0pTT05TdHJpbmcoKSB7XG4gICAgY29uc3QgY21pID0gdGhpcy5jbWk7XG4gICAgLy8gRG8gd2Ugd2FudC9uZWVkIHRvIHJldHVybiBmaWVsZHMgdGhhdCBoYXZlIG5vIHNldCB2YWx1ZT9cbiAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeyBjbWkgfSwgKGssIHYpID0+IHYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2LCAyKTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe2NtaX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKUyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGNtaVxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqL1xuICByZW5kZXJDTUlUb0pTT05PYmplY3QoKSB7XG4gICAgLy8gRG8gd2Ugd2FudC9uZWVkIHRvIHJldHVybiBmaWVsZHMgdGhhdCBoYXZlIG5vIHNldCB2YWx1ZT9cbiAgICAvLyByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeyBjbWkgfSwgKGssIHYpID0+IHYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2LCAyKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnJlbmRlckNNSVRvSlNPTlN0cmluZygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGNtaSBvYmplY3QgdG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIExNUyBjb21taXRcbiAgICogQVBJcyB0aGF0IGluaGVyaXQgQmFzZUFQSSBzaG91bGQgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IF90ZXJtaW5hdGVDb21taXRcbiAgICogQHJldHVybiB7Kn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICByZW5kZXJDb21taXRDTUkoX3Rlcm1pbmF0ZUNvbW1pdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBzdG9yZURhdGEgbWV0aG9kIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIHJlcXVlc3QgdG8gdGhlIExNU1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fEFycmF5fSBwYXJhbXNcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgcHJvY2Vzc0h0dHBSZXF1ZXN0KHVybDogU3RyaW5nLCBwYXJhbXMpIHtcbiAgICBjb25zdCBnZW5lcmljRXJyb3IgPSB7XG4gICAgICAncmVzdWx0JzogZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9GQUxTRSxcbiAgICAgICdlcnJvckNvZGUnOiB0aGlzLiNlcnJvcl9jb2Rlcy5HRU5FUkFMLFxuICAgIH07XG5cbiAgICBjb25zdCBodHRwUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgaHR0cFJlcS5vcGVuKCdQT1NUJywgdXJsLCBmYWxzZSk7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBodHRwUmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIGh0dHBSZXEuc2VuZChwYXJhbXMuam9pbignJicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBSZXEuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJyxcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29tbWl0UmVxdWVzdERhdGFUeXBlKTtcbiAgICAgICAgaHR0cFJlcS5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBnZW5lcmljRXJyb3I7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGh0dHBSZXEucmVzcG9uc2VUZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZ2VuZXJpY0Vycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBTQ09STSBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gd2hlbiAtIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGNvbW1pdHRpbmdcbiAgICovXG4gIHNjaGVkdWxlQ29tbWl0KHdoZW46IG51bWJlcikge1xuICAgIHRoaXMuI3RpbWVvdXQgPSBuZXcgU2NoZWR1bGVkQ29tbWl0KHRoaXMsIHdoZW4pO1xuICAgIHRoaXMuYXBpTG9nKCdzY2hlZHVsZUNvbW1pdCcsICcnLCAnc2NoZWR1bGVkJyxcbiAgICAgICAgZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfREVCVUcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbmQgY2FuY2VscyBhbnkgY3VycmVudGx5IHNjaGVkdWxlZCBjb21taXRzXG4gICAqL1xuICBjbGVhclNjaGVkdWxlZENvbW1pdCgpIHtcbiAgICBpZiAodGhpcy4jdGltZW91dCkge1xuICAgICAgdGhpcy4jdGltZW91dC5jYW5jZWwoKTtcbiAgICAgIHRoaXMuI3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5hcGlMb2coJ2NsZWFyU2NoZWR1bGVkQ29tbWl0JywgJycsICdjbGVhcmVkJyxcbiAgICAgICAgICBnbG9iYWxfY29uc3RhbnRzLkxPR19MRVZFTF9ERUJVRyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0aGF0IHdyYXBzIGEgdGltZW91dCBjYWxsIHRvIHRoZSBjb21taXQoKSBmdW5jdGlvblxuICovXG5jbGFzcyBTY2hlZHVsZWRDb21taXQge1xuICAjQVBJO1xuICAjY2FuY2VsbGVkID0gZmFsc2U7XG4gICN0aW1lb3V0O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgU2NoZWR1bGVkQ29tbWl0XG4gICAqIEBwYXJhbSB7QmFzZUFQSX0gQVBJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihBUEk6IGFueSwgd2hlbjogbnVtYmVyKSB7XG4gICAgdGhpcy4jQVBJID0gQVBJO1xuICAgIHRoaXMuI3RpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMud3JhcHBlci5iaW5kKHRoaXMpLCB3aGVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgYW55IGN1cnJlbnRseSBzY2hlZHVsZWQgY29tbWl0XG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy4jY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy4jdGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuI3RpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwIHRoZSBBUEkgY29tbWl0IGNhbGwgdG8gY2hlY2sgaWYgdGhlIGNhbGwgaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICovXG4gIHdyYXBwZXIoKSB7XG4gICAgaWYgKCF0aGlzLiNjYW5jZWxsZWQpIHtcbiAgICAgIHRoaXMuI0FQSS5jb21taXQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgQmFzZUFQSSBmcm9tICcuL0Jhc2VBUEknO1xuaW1wb3J0IHtcbiAgQ01JLFxuICBDTUlJbnRlcmFjdGlvbnNDb3JyZWN0UmVzcG9uc2VzT2JqZWN0LFxuICBDTUlJbnRlcmFjdGlvbnNPYmplY3QsXG4gIENNSUludGVyYWN0aW9uc09iamVjdGl2ZXNPYmplY3QsXG4gIENNSU9iamVjdGl2ZXNPYmplY3QsIE5BVixcbn0gZnJvbSAnLi9jbWkvc2Nvcm0xMl9jbWknO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCBBUElDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMvYXBpX2NvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb2RlcyBmcm9tICcuL2NvbnN0YW50cy9lcnJvcl9jb2Rlcyc7XG5cbmNvbnN0IHNjb3JtMTJfY29uc3RhbnRzID0gQVBJQ29uc3RhbnRzLnNjb3JtMTI7XG5jb25zdCBnbG9iYWxfY29uc3RhbnRzID0gQVBJQ29uc3RhbnRzLmdsb2JhbDtcbmNvbnN0IHNjb3JtMTJfZXJyb3JfY29kZXMgPSBFcnJvckNvZGVzLnNjb3JtMTI7XG5cbi8qKlxuICogQVBJIGNsYXNzIGZvciBTQ09STSAxLjJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nvcm0xMkFQSSBleHRlbmRzIEJhc2VBUEkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIFNDT1JNIDEuMiBBUElcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczoge30pIHtcbiAgICBjb25zdCBmaW5hbFNldHRpbmdzID0ge1xuICAgICAgLi4ue1xuICAgICAgICBtYXN0ZXJ5X292ZXJyaWRlOiBmYWxzZSxcbiAgICAgIH0sIC4uLnNldHRpbmdzLFxuICAgIH07XG5cbiAgICBzdXBlcihzY29ybTEyX2Vycm9yX2NvZGVzLCBmaW5hbFNldHRpbmdzKTtcblxuICAgIHRoaXMuY21pID0gbmV3IENNSSgpO1xuICAgIHRoaXMubmF2ID0gbmV3IE5BVigpO1xuXG4gICAgLy8gUmVuYW1lIGZ1bmN0aW9ucyB0byBtYXRjaCAxLjIgU3BlYyBhbmQgZXhwb3NlIHRvIG1vZHVsZXNcbiAgICB0aGlzLkxNU0luaXRpYWxpemUgPSB0aGlzLmxtc0luaXRpYWxpemU7XG4gICAgdGhpcy5MTVNGaW5pc2ggPSB0aGlzLmxtc0ZpbmlzaDtcbiAgICB0aGlzLkxNU0dldFZhbHVlID0gdGhpcy5sbXNHZXRWYWx1ZTtcbiAgICB0aGlzLkxNU1NldFZhbHVlID0gdGhpcy5sbXNTZXRWYWx1ZTtcbiAgICB0aGlzLkxNU0NvbW1pdCA9IHRoaXMubG1zQ29tbWl0O1xuICAgIHRoaXMuTE1TR2V0TGFzdEVycm9yID0gdGhpcy5sbXNHZXRMYXN0RXJyb3I7XG4gICAgdGhpcy5MTVNHZXRFcnJvclN0cmluZyA9IHRoaXMubG1zR2V0RXJyb3JTdHJpbmc7XG4gICAgdGhpcy5MTVNHZXREaWFnbm9zdGljID0gdGhpcy5sbXNHZXREaWFnbm9zdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIGxtc0luaXRpYWxpemUgZnVuY3Rpb24gZnJvbSBTQ09STSAxLjIgU3BlY1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGJvb2xcbiAgICovXG4gIGxtc0luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jbWkuaW5pdGlhbGl6ZSgpO1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpemUoJ0xNU0luaXRpYWxpemUnLCAnTE1TIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkIScsXG4gICAgICAgICdMTVMgaXMgYWxyZWFkeSBmaW5pc2hlZCEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMTVNGaW5pc2ggZnVuY3Rpb24gZnJvbSBTQ09STSAxLjIgU3BlY1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGJvb2xcbiAgICovXG4gIGxtc0ZpbmlzaCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnRlcm1pbmF0ZSgnTE1TRmluaXNoJywgZmFsc2UpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9UUlVFKSB7XG4gICAgICBpZiAodGhpcy5uYXYuZXZlbnQgIT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdi5ldmVudCA9PT0gJ2NvbnRpbnVlJykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc0xpc3RlbmVycygnU2VxdWVuY2VOZXh0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKCdTZXF1ZW5jZVByZXZpb3VzJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKCdTZXF1ZW5jZU5leHQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIExNU0dldFZhbHVlIGZ1bmN0aW9uIGZyb20gU0NPUk0gMS4yIFNwZWNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG1zR2V0VmFsdWUoQ01JRWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdMTVNHZXRWYWx1ZScsIGZhbHNlLCBDTUlFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMTVNTZXRWYWx1ZSBmdW5jdGlvbiBmcm9tIFNDT1JNIDEuMiBTcGVjXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG1zU2V0VmFsdWUoQ01JRWxlbWVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSgnTE1TU2V0VmFsdWUnLCBmYWxzZSwgQ01JRWxlbWVudCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExNU0NvbW1pdCBmdW5jdGlvbiBmcm9tIFNDT1JNIDEuMiBTcGVjXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gYm9vbFxuICAgKi9cbiAgbG1zQ29tbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbW1pdCgnTE1TQ29tbWl0JywgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIExNU0dldExhc3RFcnJvciBmdW5jdGlvbiBmcm9tIFNDT1JNIDEuMiBTcGVjXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGxtc0dldExhc3RFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMYXN0RXJyb3IoJ0xNU0dldExhc3RFcnJvcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIExNU0dldEVycm9yU3RyaW5nIGZ1bmN0aW9uIGZyb20gU0NPUk0gMS4yIFNwZWNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVycm9yQ29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsbXNHZXRFcnJvclN0cmluZyhDTUlFcnJvckNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFcnJvclN0cmluZygnTE1TR2V0RXJyb3JTdHJpbmcnLCBDTUlFcnJvckNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExNU0dldERpYWdub3N0aWMgZnVuY3Rpb24gZnJvbSBTQ09STSAxLjIgU3BlY1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRXJyb3JDb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGxtc0dldERpYWdub3N0aWMoQ01JRXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlhZ25vc3RpYygnTE1TR2V0RGlhZ25vc3RpYycsIENNSUVycm9yQ29kZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlIG9uIHRoZSBDTUkgT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q01JVmFsdWUoQ01JRWxlbWVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbW9uU2V0Q01JVmFsdWUoJ0xNU1NldFZhbHVlJywgZmFsc2UsIENNSUVsZW1lbnQsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFsdWUgZnJvbSB0aGUgQ01JIE9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0Q01JVmFsdWUoQ01JRWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tb25HZXRDTUlWYWx1ZSgnZ2V0Q01JVmFsdWUnLCBmYWxzZSwgQ01JRWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvciBidWlsZHMgYSBuZXcgY2hpbGQgZWxlbWVudCB0byBhZGQgdG8gdGhlIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm91bmRGaXJzdEluZGV4XG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICovXG4gIGdldENoaWxkRWxlbWVudChDTUlFbGVtZW50LCB2YWx1ZSwgZm91bmRGaXJzdEluZGV4KSB7XG4gICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgaWYgKHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LCAnY21pXFxcXC5vYmplY3RpdmVzXFxcXC5cXFxcZCcpKSB7XG4gICAgICBuZXdDaGlsZCA9IG5ldyBDTUlPYmplY3RpdmVzT2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0SW5kZXggJiYgdGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsXG4gICAgICAgICdjbWlcXFxcLmludGVyYWN0aW9uc1xcXFwuXFxcXGRcXFxcLmNvcnJlY3RfcmVzcG9uc2VzXFxcXC5cXFxcZCcpKSB7XG4gICAgICBuZXdDaGlsZCA9IG5ldyBDTUlJbnRlcmFjdGlvbnNDb3JyZWN0UmVzcG9uc2VzT2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0SW5kZXggJiYgdGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsXG4gICAgICAgICdjbWlcXFxcLmludGVyYWN0aW9uc1xcXFwuXFxcXGRcXFxcLm9iamVjdGl2ZXNcXFxcLlxcXFxkJykpIHtcbiAgICAgIG5ld0NoaWxkID0gbmV3IENNSUludGVyYWN0aW9uc09iamVjdGl2ZXNPYmplY3QoKTtcbiAgICB9IGVsc2UgaWYgKCFmb3VuZEZpcnN0SW5kZXggJiZcbiAgICAgICAgdGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsICdjbWlcXFxcLmludGVyYWN0aW9uc1xcXFwuXFxcXGQnKSkge1xuICAgICAgbmV3Q2hpbGQgPSBuZXcgQ01JSW50ZXJhY3Rpb25zT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBDb3JyZWN0IFJlc3BvbnNlIHZhbHVlc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB2YWxpZGF0ZUNvcnJlY3RSZXNwb25zZShDTUlFbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1lc3NhZ2UgdGhhdCBjb3JyZXNwb25kcyB0byBlcnJvck51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBlcnJvck51bWJlclxuICAgKiBAcGFyYW0ge2Jvb2xlYW4gfWRldGFpbFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRMbXNFcnJvck1lc3NhZ2VEZXRhaWxzKGVycm9yTnVtYmVyLCBkZXRhaWwpIHtcbiAgICBsZXQgYmFzaWNNZXNzYWdlID0gJ05vIEVycm9yJztcbiAgICBsZXQgZGV0YWlsTWVzc2FnZSA9ICdObyBFcnJvcic7XG5cbiAgICAvLyBTZXQgZXJyb3IgbnVtYmVyIHRvIHN0cmluZyBzaW5jZSBpbmNvbnNpc3RlbnQgZnJvbSBtb2R1bGVzIGlmIHN0cmluZyBvciBudW1iZXJcbiAgICBlcnJvck51bWJlciA9IFN0cmluZyhlcnJvck51bWJlcik7XG4gICAgaWYgKHNjb3JtMTJfY29uc3RhbnRzLmVycm9yX2Rlc2NyaXB0aW9uc1tlcnJvck51bWJlcl0pIHtcbiAgICAgIGJhc2ljTWVzc2FnZSA9IHNjb3JtMTJfY29uc3RhbnRzLmVycm9yX2Rlc2NyaXB0aW9uc1tlcnJvck51bWJlcl0uYmFzaWNNZXNzYWdlO1xuICAgICAgZGV0YWlsTWVzc2FnZSA9IHNjb3JtMTJfY29uc3RhbnRzLmVycm9yX2Rlc2NyaXB0aW9uc1tlcnJvck51bWJlcl0uZGV0YWlsTWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGV0YWlsID8gZGV0YWlsTWVzc2FnZSA6IGJhc2ljTWVzc2FnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSB3aG9sZSBBUEkgd2l0aCBhbm90aGVyXG4gICAqXG4gICAqIEBwYXJhbSB7U2Nvcm0xMkFQSX0gbmV3QVBJXG4gICAqL1xuICByZXBsYWNlV2l0aEFub3RoZXJTY29ybUFQSShuZXdBUEkpIHtcbiAgICAvLyBEYXRhIE1vZGVsXG4gICAgdGhpcy5jbWkgPSBuZXdBUEkuY21pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgY21pIG9iamVjdCB0byB0aGUgcHJvcGVyIGZvcm1hdCBmb3IgTE1TIGNvbW1pdFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRlcm1pbmF0ZUNvbW1pdFxuICAgKiBAcmV0dXJuIHtvYmplY3R8QXJyYXl9XG4gICAqL1xuICByZW5kZXJDb21taXRDTUkodGVybWluYXRlQ29tbWl0OiBib29sZWFuKSB7XG4gICAgY29uc3QgY21pRXhwb3J0ID0gdGhpcy5yZW5kZXJDTUlUb0pTT05PYmplY3QoKTtcblxuICAgIGlmICh0ZXJtaW5hdGVDb21taXQpIHtcbiAgICAgIGNtaUV4cG9ydC5jbWkuY29yZS50b3RhbF90aW1lID0gdGhpcy5jbWkuZ2V0Q3VycmVudFRvdGFsVGltZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IFV0aWxpdGllcy5mbGF0dGVuKGNtaUV4cG9ydCk7XG4gICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLmRhdGFDb21taXRGb3JtYXQpIHtcbiAgICAgIGNhc2UgJ2ZsYXR0ZW5lZCc6XG4gICAgICAgIHJldHVybiBVdGlsaXRpZXMuZmxhdHRlbihjbWlFeHBvcnQpO1xuICAgICAgY2FzZSAncGFyYW1zJzpcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIGZsYXR0ZW5lZCkge1xuICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZsYXR0ZW5lZCwgaXRlbSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2l0ZW19PSR7ZmxhdHRlbmVkW2l0ZW1dfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgY2FzZSAnanNvbic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY21pRXhwb3J0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBzdG9yZSB0aGUgZGF0YSB0byB0aGUgTE1TXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdGVybWluYXRlQ29tbWl0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0b3JlRGF0YSh0ZXJtaW5hdGVDb21taXQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGVybWluYXRlQ29tbWl0KSB7XG4gICAgICBjb25zdCBvcmlnaW5hbFN0YXR1cyA9IHRoaXMuY21pLmNvcmUubGVzc29uX3N0YXR1cztcbiAgICAgIGlmIChvcmlnaW5hbFN0YXR1cyA9PT0gJ25vdCBhdHRlbXB0ZWQnKSB7XG4gICAgICAgIHRoaXMuY21pLmNvcmUubGVzc29uX3N0YXR1cyA9ICdjb21wbGV0ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbWkuY29yZS5sZXNzb25fbW9kZSA9PT0gJ25vcm1hbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuY21pLmNvcmUuY3JlZGl0ID09PSAnY3JlZGl0Jykge1xuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1hc3Rlcnlfb3ZlcnJpZGUgJiZcbiAgICAgICAgICAgICAgdGhpcy5jbWkuc3R1ZGVudF9kYXRhLm1hc3Rlcnlfc2NvcmUgIT09ICcnICYmXG4gICAgICAgICAgICAgIHRoaXMuY21pLmNvcmUuc2NvcmUucmF3ICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQodGhpcy5jbWkuY29yZS5zY29yZS5yYXcpID49XG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLmNtaS5zdHVkZW50X2RhdGEubWFzdGVyeV9zY29yZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbWkuY29yZS5sZXNzb25fc3RhdHVzID0gJ3Bhc3NlZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNtaS5jb3JlLmxlc3Nvbl9zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jbWkuY29yZS5sZXNzb25fbW9kZSA9PT0gJ2Jyb3dzZScpIHtcbiAgICAgICAgaWYgKCh0aGlzLnN0YXJ0aW5nRGF0YT8uY21pPy5jb3JlPy5sZXNzb25fc3RhdHVzIHx8ICcnKSA9PT0gJycgJiZcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhdHVzID09PSAnbm90IGF0dGVtcHRlZCcpIHtcbiAgICAgICAgICB0aGlzLmNtaS5jb3JlLmxlc3Nvbl9zdGF0dXMgPSAnYnJvd3NlZCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21taXRPYmplY3QgPSB0aGlzLnJlbmRlckNvbW1pdENNSSh0ZXJtaW5hdGVDb21taXQpO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubG1zQ29tbWl0VXJsKSB7XG4gICAgICBpZiAodGhpcy5hcGlMb2dMZXZlbCA9PT0gZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnQ29tbWl0ICh0ZXJtaW5hdGVkOiAnICtcbiAgICAgICAgICAgICh0ZXJtaW5hdGVDb21taXQgPyAneWVzJyA6ICdubycpICsgJyk6ICcpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKGNvbW1pdE9iamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzSHR0cFJlcXVlc3QodGhpcy5zZXR0aW5ncy5sbXNDb21taXRVcmwsIGNvbW1pdE9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb21taXQgKHRlcm1pbmF0ZWQ6ICcgK1xuICAgICAgICAgICh0ZXJtaW5hdGVDb21taXQgPyAneWVzJyA6ICdubycpICsgJyk6ICcpO1xuICAgICAgY29uc29sZS5sb2coY29tbWl0T2JqZWN0KTtcbiAgICAgIHJldHVybiBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX1RSVUU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBAZmxvd1xuaW1wb3J0IEJhc2VBUEkgZnJvbSAnLi9CYXNlQVBJJztcbmltcG9ydCB7XG4gIEFETCxcbiAgQ01JLFxuICBDTUlDb21tZW50c09iamVjdCxcbiAgQ01JSW50ZXJhY3Rpb25zQ29ycmVjdFJlc3BvbnNlc09iamVjdCxcbiAgQ01JSW50ZXJhY3Rpb25zT2JqZWN0LFxuICBDTUlJbnRlcmFjdGlvbnNPYmplY3RpdmVzT2JqZWN0LFxuICBDTUlPYmplY3RpdmVzT2JqZWN0LFxufSBmcm9tICcuL2NtaS9zY29ybTIwMDRfY21pJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuL3V0aWxpdGllcyc7XG5pbXBvcnQgQVBJQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzL2FwaV9jb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29kZXMgZnJvbSAnLi9jb25zdGFudHMvZXJyb3JfY29kZXMnO1xuaW1wb3J0IFJlc3BvbnNlcyBmcm9tICcuL2NvbnN0YW50cy9yZXNwb25zZV9jb25zdGFudHMnO1xuaW1wb3J0IFZhbGlkTGFuZ3VhZ2VzIGZyb20gJy4vY29uc3RhbnRzL2xhbmd1YWdlX2NvbnN0YW50cyc7XG5pbXBvcnQgUmVnZXggZnJvbSAnLi9jb25zdGFudHMvcmVnZXgnO1xuXG5jb25zdCBzY29ybTIwMDRfY29uc3RhbnRzID0gQVBJQ29uc3RhbnRzLnNjb3JtMjAwNDtcbmNvbnN0IGdsb2JhbF9jb25zdGFudHMgPSBBUElDb25zdGFudHMuZ2xvYmFsO1xuY29uc3Qgc2Nvcm0yMDA0X2Vycm9yX2NvZGVzID0gRXJyb3JDb2Rlcy5zY29ybTIwMDQ7XG5jb25zdCBjb3JyZWN0X3Jlc3BvbnNlcyA9IFJlc3BvbnNlcy5jb3JyZWN0O1xuY29uc3Qgc2Nvcm0yMDA0X3JlZ2V4ID0gUmVnZXguc2Nvcm0yMDA0O1xuXG4vKipcbiAqIEFQSSBjbGFzcyBmb3IgU0NPUk0gMjAwNFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29ybTIwMDRBUEkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgI3ZlcnNpb246ICcxLjAnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgU0NPUk0gMjAwNCBBUElcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzZXR0aW5nczoge30pIHtcbiAgICBjb25zdCBmaW5hbFNldHRpbmdzID0ge1xuICAgICAgLi4ue1xuICAgICAgICBtYXN0ZXJ5X292ZXJyaWRlOiBmYWxzZSxcbiAgICAgIH0sIC4uLnNldHRpbmdzLFxuICAgIH07XG5cbiAgICBzdXBlcihzY29ybTIwMDRfZXJyb3JfY29kZXMsIGZpbmFsU2V0dGluZ3MpO1xuXG4gICAgdGhpcy5jbWkgPSBuZXcgQ01JKCk7XG4gICAgdGhpcy5hZGwgPSBuZXcgQURMKCk7XG5cbiAgICAvLyBSZW5hbWUgZnVuY3Rpb25zIHRvIG1hdGNoIDIwMDQgU3BlYyBhbmQgZXhwb3NlIHRvIG1vZHVsZXNcbiAgICB0aGlzLkluaXRpYWxpemUgPSB0aGlzLmxtc0luaXRpYWxpemU7XG4gICAgdGhpcy5UZXJtaW5hdGUgPSB0aGlzLmxtc1Rlcm1pbmF0ZTtcbiAgICB0aGlzLkdldFZhbHVlID0gdGhpcy5sbXNHZXRWYWx1ZTtcbiAgICB0aGlzLlNldFZhbHVlID0gdGhpcy5sbXNTZXRWYWx1ZTtcbiAgICB0aGlzLkNvbW1pdCA9IHRoaXMubG1zQ29tbWl0O1xuICAgIHRoaXMuR2V0TGFzdEVycm9yID0gdGhpcy5sbXNHZXRMYXN0RXJyb3I7XG4gICAgdGhpcy5HZXRFcnJvclN0cmluZyA9IHRoaXMubG1zR2V0RXJyb3JTdHJpbmc7XG4gICAgdGhpcy5HZXREaWFnbm9zdGljID0gdGhpcy5sbXNHZXREaWFnbm9zdGljO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3ZlcnNpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZlcnNpb247XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBib29sXG4gICAqL1xuICBsbXNJbml0aWFsaXplKCkge1xuICAgIHRoaXMuY21pLmluaXRpYWxpemUoKTtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplKCdJbml0aWFsaXplJyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBib29sXG4gICAqL1xuICBsbXNUZXJtaW5hdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy50ZXJtaW5hdGUoJ1Rlcm1pbmF0ZScsIHRydWUpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gZ2xvYmFsX2NvbnN0YW50cy5TQ09STV9UUlVFKSB7XG4gICAgICBpZiAodGhpcy5hZGwubmF2LnJlcXVlc3QgIT09ICdfbm9uZV8nKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5hZGwubmF2LnJlcXVlc3QpIHtcbiAgICAgICAgICBjYXNlICdjb250aW51ZSc6XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoJ1NlcXVlbmNlTmV4dCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKCdTZXF1ZW5jZVByZXZpb3VzJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaG9pY2UnOlxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKCdTZXF1ZW5jZUNob2ljZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXhpdCc6XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoJ1NlcXVlbmNlRXhpdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXhpdEFsbCc6XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoJ1NlcXVlbmNlRXhpdEFsbCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWJhbmRvbic6XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoJ1NlcXVlbmNlQWJhbmRvbicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWJhbmRvbkFsbCc6XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0ZW5lcnMoJ1NlcXVlbmNlQWJhbmRvbkFsbCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzTGlzdGVuZXJzKCdTZXF1ZW5jZU5leHQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGxtc0dldFZhbHVlKENNSUVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnR2V0VmFsdWUnLCB0cnVlLCBDTUlFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG1zU2V0VmFsdWUoQ01JRWxlbWVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSgnU2V0VmFsdWUnLCB0cnVlLCBDTUlFbGVtZW50LCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogT3JkZXJzIExNUyB0byBzdG9yZSBhbGwgY29udGVudCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gYm9vbFxuICAgKi9cbiAgbG1zQ29tbWl0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbW1pdCgnQ29tbWl0Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsYXN0IGVycm9yIGNvZGVcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG1zR2V0TGFzdEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldExhc3RFcnJvcignR2V0TGFzdEVycm9yJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXJyb3JOdW1iZXIgZXJyb3IgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IENNSUVycm9yQ29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsbXNHZXRFcnJvclN0cmluZyhDTUlFcnJvckNvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFcnJvclN0cmluZygnR2V0RXJyb3JTdHJpbmcnLCBDTUlFcnJvckNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb21wcmVoZW5zaXZlIGRlc2NyaXB0aW9uIG9mIHRoZSBlcnJvck51bWJlciBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IENNSUVycm9yQ29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsbXNHZXREaWFnbm9zdGljKENNSUVycm9yQ29kZSkge1xuICAgIHJldHVybiB0aGlzLmdldERpYWdub3N0aWMoJ0dldERpYWdub3N0aWMnLCBDTUlFcnJvckNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZSBvbiB0aGUgQ01JIE9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gQ01JRWxlbWVudFxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q01JVmFsdWUoQ01JRWxlbWVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbW9uU2V0Q01JVmFsdWUoJ1NldFZhbHVlJywgdHJ1ZSwgQ01JRWxlbWVudCwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgb3IgYnVpbGRzIGEgbmV3IGNoaWxkIGVsZW1lbnQgdG8gYWRkIHRvIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm91bmRGaXJzdEluZGV4XG4gICAqIEByZXR1cm4ge2FueX1cbiAgICovXG4gIGdldENoaWxkRWxlbWVudChDTUlFbGVtZW50LCB2YWx1ZSwgZm91bmRGaXJzdEluZGV4KSB7XG4gICAgbGV0IG5ld0NoaWxkO1xuXG4gICAgaWYgKHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LCAnY21pXFxcXC5vYmplY3RpdmVzXFxcXC5cXFxcZCcpKSB7XG4gICAgICBuZXdDaGlsZCA9IG5ldyBDTUlPYmplY3RpdmVzT2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0SW5kZXggJiYgdGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsXG4gICAgICAgICdjbWlcXFxcLmludGVyYWN0aW9uc1xcXFwuXFxcXGRcXFxcLmNvcnJlY3RfcmVzcG9uc2VzXFxcXC5cXFxcZCcpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IENNSUVsZW1lbnQuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHBhcnRzWzJdKTtcbiAgICAgIGNvbnN0IGludGVyYWN0aW9uID0gdGhpcy5jbWkuaW50ZXJhY3Rpb25zLmNoaWxkQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKCFpbnRlcmFjdGlvbi50eXBlKSB7XG4gICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5ERVBFTkRFTkNZX05PVF9FU1RBQkxJU0hFRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvbl90eXBlID0gaW50ZXJhY3Rpb24udHlwZTtcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25fY291bnQgPSBpbnRlcmFjdGlvbi5jb3JyZWN0X3Jlc3BvbnNlcy5fY291bnQ7XG4gICAgICAgIGlmIChpbnRlcmFjdGlvbl90eXBlID09PSAnY2hvaWNlJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJhY3Rpb25fY291bnQgJiYgdGhpcy5sYXN0RXJyb3JDb2RlID09PVxuICAgICAgICAgIDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBpbnRlcmFjdGlvbi5jb3JyZWN0X3Jlc3BvbnNlcy5jaGlsZEFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnBhdHRlcm4gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5HRU5FUkFMX1NFVF9GQUlMVVJFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZV90eXBlID0gY29ycmVjdF9yZXNwb25zZXNbaW50ZXJhY3Rpb25fdHlwZV07XG4gICAgICAgIGlmIChyZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgbGV0IG5vZGVzID0gW107XG4gICAgICAgICAgaWYgKHJlc3BvbnNlX3R5cGU/LmRlbGltaXRlcikge1xuICAgICAgICAgICAgbm9kZXMgPSBTdHJpbmcodmFsdWUpLnNwbGl0KHJlc3BvbnNlX3R5cGUuZGVsaW1pdGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZXNbMF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID4gMCAmJiBub2Rlcy5sZW5ndGggPD0gcmVzcG9uc2VfdHlwZS5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0UmVzcG9uc2VWYWx1ZShpbnRlcmFjdGlvbl90eXBlLCBub2RlcywgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoID4gcmVzcG9uc2VfdHlwZS5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5HRU5FUkFMX1NFVF9GQUlMVVJFLFxuICAgICAgICAgICAgICAgICdEYXRhIE1vZGVsIEVsZW1lbnQgUGF0dGVybiBUb28gTG9uZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuR0VORVJBTF9TRVRfRkFJTFVSRSxcbiAgICAgICAgICAgICAgJ0luY29ycmVjdCBSZXNwb25zZSBUeXBlOiAnICsgaW50ZXJhY3Rpb25fdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxhc3RFcnJvckNvZGUgPT09IDApIHtcbiAgICAgICAgbmV3Q2hpbGQgPSBuZXcgQ01JSW50ZXJhY3Rpb25zQ29ycmVjdFJlc3BvbnNlc09iamVjdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdEluZGV4ICYmIHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LFxuICAgICAgICAnY21pXFxcXC5pbnRlcmFjdGlvbnNcXFxcLlxcXFxkXFxcXC5vYmplY3RpdmVzXFxcXC5cXFxcZCcpKSB7XG4gICAgICBuZXdDaGlsZCA9IG5ldyBDTUlJbnRlcmFjdGlvbnNPYmplY3RpdmVzT2JqZWN0KCk7XG4gICAgfSBlbHNlIGlmICghZm91bmRGaXJzdEluZGV4ICYmXG4gICAgICAgIHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LCAnY21pXFxcXC5pbnRlcmFjdGlvbnNcXFxcLlxcXFxkJykpIHtcbiAgICAgIG5ld0NoaWxkID0gbmV3IENNSUludGVyYWN0aW9uc09iamVjdCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdNYXRjaGVzKENNSUVsZW1lbnQsXG4gICAgICAgICdjbWlcXFxcLmNvbW1lbnRzX2Zyb21fbGVhcm5lclxcXFwuXFxcXGQnKSkge1xuICAgICAgbmV3Q2hpbGQgPSBuZXcgQ01JQ29tbWVudHNPYmplY3QoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nTWF0Y2hlcyhDTUlFbGVtZW50LFxuICAgICAgICAnY21pXFxcXC5jb21tZW50c19mcm9tX2xtc1xcXFwuXFxcXGQnKSkge1xuICAgICAgbmV3Q2hpbGQgPSBuZXcgQ01JQ29tbWVudHNPYmplY3QodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGNvcnJlY3QgcmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBDTUlFbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIHZhbGlkYXRlQ29ycmVjdFJlc3BvbnNlKENNSUVsZW1lbnQsIHZhbHVlKSB7XG4gICAgY29uc3QgcGFydHMgPSBDTUlFbGVtZW50LnNwbGl0KCcuJyk7XG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIocGFydHNbMl0pO1xuICAgIGNvbnN0IHBhdHRlcm5faW5kZXggPSBOdW1iZXIocGFydHNbNF0pO1xuICAgIGNvbnN0IGludGVyYWN0aW9uID0gdGhpcy5jbWkuaW50ZXJhY3Rpb25zLmNoaWxkQXJyYXlbaW5kZXhdO1xuXG4gICAgY29uc3QgaW50ZXJhY3Rpb25fdHlwZSA9IGludGVyYWN0aW9uLnR5cGU7XG4gICAgY29uc3QgaW50ZXJhY3Rpb25fY291bnQgPSBpbnRlcmFjdGlvbi5jb3JyZWN0X3Jlc3BvbnNlcy5fY291bnQ7XG4gICAgaWYgKGludGVyYWN0aW9uX3R5cGUgPT09ICdjaG9pY2UnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyYWN0aW9uX2NvdW50ICYmIHRoaXMubGFzdEVycm9yQ29kZSA9PT0gMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gaW50ZXJhY3Rpb24uY29ycmVjdF9yZXNwb25zZXMuY2hpbGRBcnJheVtpXTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnBhdHRlcm4gPT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLkdFTkVSQUxfU0VUX0ZBSUxVUkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VfdHlwZSA9IGNvcnJlY3RfcmVzcG9uc2VzW2ludGVyYWN0aW9uX3R5cGVdO1xuICAgIGlmICh0eXBlb2YgcmVzcG9uc2VfdHlwZS5saW1pdCA9PT0gJ3VuZGVmaW5lZCcgfHwgaW50ZXJhY3Rpb25fY291bnQgPD1cbiAgICAgICAgcmVzcG9uc2VfdHlwZS5saW1pdCkge1xuICAgICAgbGV0IG5vZGVzID0gW107XG4gICAgICBpZiAocmVzcG9uc2VfdHlwZT8uZGVsaW1pdGVyKSB7XG4gICAgICAgIG5vZGVzID0gU3RyaW5nKHZhbHVlKS5zcGxpdChyZXNwb25zZV90eXBlLmRlbGltaXRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlc1swXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZXMubGVuZ3RoID4gMCAmJiBub2Rlcy5sZW5ndGggPD0gcmVzcG9uc2VfdHlwZS5tYXgpIHtcbiAgICAgICAgdGhpcy5jaGVja0NvcnJlY3RSZXNwb25zZVZhbHVlKGludGVyYWN0aW9uX3R5cGUsIG5vZGVzLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCA+IHJlc3BvbnNlX3R5cGUubWF4KSB7XG4gICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5HRU5FUkFMX1NFVF9GQUlMVVJFLFxuICAgICAgICAgICAgJ0RhdGEgTW9kZWwgRWxlbWVudCBQYXR0ZXJuIFRvbyBMb25nJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhc3RFcnJvckNvZGUgPT09IDAgJiZcbiAgICAgICAgICAoIXJlc3BvbnNlX3R5cGUuZHVwbGljYXRlIHx8XG4gICAgICAgICAgICAgICF0aGlzLmNoZWNrRHVwbGljYXRlZFBhdHRlcm4oaW50ZXJhY3Rpb24uY29ycmVjdF9yZXNwb25zZXMsXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuX2luZGV4LCB2YWx1ZSkpIHx8XG4gICAgICAgICAgKHRoaXMubGFzdEVycm9yQ29kZSA9PT0gMCAmJiB2YWx1ZSA9PT0gJycpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmcsIHdlIHdhbnQgdGhlIGludmVyc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RFcnJvckNvZGUgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuR0VORVJBTF9TRVRfRkFJTFVSRSxcbiAgICAgICAgICAgICAgJ0RhdGEgTW9kZWwgRWxlbWVudCBQYXR0ZXJuIEFscmVhZHkgRXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLkdFTkVSQUxfU0VUX0ZBSUxVUkUsXG4gICAgICAgICAgJ0RhdGEgTW9kZWwgRWxlbWVudCBDb2xsZWN0aW9uIExpbWl0IFJlYWNoZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlIGZyb20gdGhlIENNSSBPYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IENNSUVsZW1lbnRcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldENNSVZhbHVlKENNSUVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbW9uR2V0Q01JVmFsdWUoJ0dldFZhbHVlJywgdHJ1ZSwgQ01JRWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWVzc2FnZSB0aGF0IGNvcnJlc3BvbmRzIHRvIGVycm9yTnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gZXJyb3JOdW1iZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBkZXRhaWxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TG1zRXJyb3JNZXNzYWdlRGV0YWlscyhlcnJvck51bWJlciwgZGV0YWlsKSB7XG4gICAgbGV0IGJhc2ljTWVzc2FnZSA9ICcnO1xuICAgIGxldCBkZXRhaWxNZXNzYWdlID0gJyc7XG5cbiAgICAvLyBTZXQgZXJyb3IgbnVtYmVyIHRvIHN0cmluZyBzaW5jZSBpbmNvbnNpc3RlbnQgZnJvbSBtb2R1bGVzIGlmIHN0cmluZyBvciBudW1iZXJcbiAgICBlcnJvck51bWJlciA9IFN0cmluZyhlcnJvck51bWJlcik7XG4gICAgaWYgKHNjb3JtMjAwNF9jb25zdGFudHMuZXJyb3JfZGVzY3JpcHRpb25zW2Vycm9yTnVtYmVyXSkge1xuICAgICAgYmFzaWNNZXNzYWdlID0gc2Nvcm0yMDA0X2NvbnN0YW50cy5lcnJvcl9kZXNjcmlwdGlvbnNbZXJyb3JOdW1iZXJdLmJhc2ljTWVzc2FnZTtcbiAgICAgIGRldGFpbE1lc3NhZ2UgPSBzY29ybTIwMDRfY29uc3RhbnRzLmVycm9yX2Rlc2NyaXB0aW9uc1tlcnJvck51bWJlcl0uZGV0YWlsTWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGV0YWlsID8gZGV0YWlsTWVzc2FnZSA6IGJhc2ljTWVzc2FnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0byBzZWUgaWYgYSBjb3JyZWN0X3Jlc3BvbnNlIHZhbHVlIGhhcyBiZWVuIGR1cGxpY2F0ZWRcbiAgICogQHBhcmFtIHtDTUlBcnJheX0gY29ycmVjdF9yZXNwb25zZVxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudF9pbmRleFxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBjaGVja0R1cGxpY2F0ZWRQYXR0ZXJuID0gKGNvcnJlY3RfcmVzcG9uc2UsIGN1cnJlbnRfaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgY29uc3QgY291bnQgPSBjb3JyZWN0X3Jlc3BvbnNlLl9jb3VudDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmICFmb3VuZDsgaSsrKSB7XG4gICAgICBpZiAoaSAhPT0gY3VycmVudF9pbmRleCAmJiBjb3JyZWN0X3Jlc3BvbnNlLmNoaWxkQXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIGEgdmFsaWQgY29ycmVjdF9yZXNwb25zZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW50ZXJhY3Rpb25fdHlwZVxuICAgKiBAcGFyYW0ge0FycmF5fSBub2Rlc1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBjaGVja0NvcnJlY3RSZXNwb25zZVZhbHVlKGludGVyYWN0aW9uX3R5cGUsIG5vZGVzLCB2YWx1ZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY29ycmVjdF9yZXNwb25zZXNbaW50ZXJhY3Rpb25fdHlwZV07XG4gICAgY29uc3QgZm9ybWF0UmVnZXggPSBuZXcgUmVnRXhwKHJlc3BvbnNlLmZvcm1hdCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGggJiYgdGhpcy5sYXN0RXJyb3JDb2RlID09PSAwOyBpKyspIHtcbiAgICAgIGlmIChpbnRlcmFjdGlvbl90eXBlLm1hdGNoKFxuICAgICAgICAgICdeKGZpbGwtaW58bG9uZy1maWxsLWlufG1hdGNoaW5nfHBlcmZvcm1hbmNlfHNlcXVlbmNpbmcpJCcpKSB7XG4gICAgICAgIG5vZGVzW2ldID0gdGhpcy5yZW1vdmVDb3JyZWN0UmVzcG9uc2VQcmVmaXhlcyhub2Rlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNwb25zZT8uZGVsaW1pdGVyMikge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBub2Rlc1tpXS5zcGxpdChyZXNwb25zZS5kZWxpbWl0ZXIyKTtcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWVzWzBdLm1hdGNoKGZvcm1hdFJlZ2V4KTtcbiAgICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5UWVBFX01JU01BVENIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZXNbMV0ubWF0Y2gobmV3IFJlZ0V4cChyZXNwb25zZS5mb3JtYXQyKSkpIHtcbiAgICAgICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBub2Rlc1tpXS5tYXRjaChmb3JtYXRSZWdleCk7XG4gICAgICAgIGlmICgoIW1hdGNoZXMgJiYgdmFsdWUgIT09ICcnKSB8fFxuICAgICAgICAgICAgKCFtYXRjaGVzICYmIGludGVyYWN0aW9uX3R5cGUgPT09ICd0cnVlLWZhbHNlJykpIHtcbiAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGludGVyYWN0aW9uX3R5cGUgPT09ICdudW1lcmljJyAmJiBub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKG5vZGVzWzBdKSA+IE51bWJlcihub2Rlc1sxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy50aHJvd1NDT1JNRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobm9kZXNbaV0gIT09ICcnICYmIHJlc3BvbnNlLnVuaXF1ZSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGkgJiYgdGhpcy5sYXN0RXJyb3JDb2RlID09PSAwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZXNbaV0gPT09IG5vZGVzW2pdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBwcmVmaXhlcyBmcm9tIGNvcnJlY3RfcmVzcG9uc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5vZGVcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIHJlbW92ZUNvcnJlY3RSZXNwb25zZVByZWZpeGVzKG5vZGUpIHtcbiAgICBsZXQgc2Vlbk9yZGVyID0gZmFsc2U7XG4gICAgbGV0IHNlZW5DYXNlID0gZmFsc2U7XG4gICAgbGV0IHNlZW5MYW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICdeKHsobGFuZ3xjYXNlX21hdHRlcnN8b3JkZXJfbWF0dGVycyk9KFtefV0rKX0pJyk7XG4gICAgbGV0IG1hdGNoZXMgPSBub2RlLm1hdGNoKHByZWZpeFJlZ2V4KTtcbiAgICBsZXQgbGFuZ01hdGNoZXMgPSBudWxsO1xuICAgIHdoaWxlIChtYXRjaGVzKSB7XG4gICAgICBzd2l0Y2ggKG1hdGNoZXNbMl0pIHtcbiAgICAgICAgY2FzZSAnbGFuZyc6XG4gICAgICAgICAgbGFuZ01hdGNoZXMgPSBub2RlLm1hdGNoKHNjb3JtMjAwNF9yZWdleC5DTUlMYW5nY3IpO1xuICAgICAgICAgIGlmIChsYW5nTWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgbGFuZyA9IGxhbmdNYXRjaGVzWzNdO1xuICAgICAgICAgICAgaWYgKGxhbmcgIT09IHVuZGVmaW5lZCAmJiBsYW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKFZhbGlkTGFuZ3VhZ2VzW2xhbmcudG9Mb3dlckNhc2UoKV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5UWVBFX01JU01BVENIKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWVuTGFuZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Nhc2VfbWF0dGVycyc6XG4gICAgICAgICAgaWYgKCFzZWVuTGFuZyAmJiAhc2Vlbk9yZGVyICYmICFzZWVuQ2FzZSkge1xuICAgICAgICAgICAgaWYgKG1hdGNoZXNbM10gIT09ICd0cnVlJyAmJiBtYXRjaGVzWzNdICE9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgIHRoaXMudGhyb3dTQ09STUVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5UWVBFX01JU01BVENIKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWVuQ2FzZSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29yZGVyX21hdHRlcnMnOlxuICAgICAgICAgIGlmICghc2VlbkNhc2UgJiYgIXNlZW5MYW5nICYmICFzZWVuT3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzWzNdICE9PSAndHJ1ZScgJiYgbWF0Y2hlc1szXSAhPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICB0aGlzLnRocm93U0NPUk1FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2Vlbk9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnN1YnN0cihtYXRjaGVzWzFdLmxlbmd0aCk7XG4gICAgICBtYXRjaGVzID0gbm9kZS5tYXRjaChwcmVmaXhSZWdleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgd2hvbGUgQVBJIHdpdGggYW5vdGhlclxuICAgKiBAcGFyYW0ge1Njb3JtMjAwNEFQSX0gbmV3QVBJXG4gICAqL1xuICByZXBsYWNlV2l0aEFub3RoZXJTY29ybUFQSShuZXdBUEkpIHtcbiAgICAvLyBEYXRhIE1vZGVsXG4gICAgdGhpcy5jbWkgPSBuZXdBUEkuY21pO1xuICAgIHRoaXMuYWRsID0gbmV3QVBJLmFkbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGNtaSBvYmplY3QgdG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIExNUyBjb21taXRcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSB0ZXJtaW5hdGVDb21taXRcbiAgICogQHJldHVybiB7b2JqZWN0fEFycmF5fVxuICAgKi9cbiAgcmVuZGVyQ29tbWl0Q01JKHRlcm1pbmF0ZUNvbW1pdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNtaUV4cG9ydCA9IHRoaXMucmVuZGVyQ01JVG9KU09OT2JqZWN0KCk7XG5cbiAgICBpZiAodGVybWluYXRlQ29tbWl0KSB7XG4gICAgICBjbWlFeHBvcnQuY21pLnRvdGFsX3RpbWUgPSB0aGlzLmNtaS5nZXRDdXJyZW50VG90YWxUaW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgZmxhdHRlbmVkID0gVXRpbGl0aWVzLmZsYXR0ZW4oY21pRXhwb3J0KTtcbiAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MuZGF0YUNvbW1pdEZvcm1hdCkge1xuICAgICAgY2FzZSAnZmxhdHRlbmVkJzpcbiAgICAgICAgcmV0dXJuIFV0aWxpdGllcy5mbGF0dGVuKGNtaUV4cG9ydCk7XG4gICAgICBjYXNlICdwYXJhbXMnOlxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gZmxhdHRlbmVkKSB7XG4gICAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoZmxhdHRlbmVkLCBpdGVtKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7aXRlbX09JHtmbGF0dGVuZWRbaXRlbV19YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjbWlFeHBvcnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHN0b3JlIHRoZSBkYXRhIHRvIHRoZSBMTVNcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSB0ZXJtaW5hdGVDb21taXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RvcmVEYXRhKHRlcm1pbmF0ZUNvbW1pdDogYm9vbGVhbikge1xuICAgIGlmICh0ZXJtaW5hdGVDb21taXQpIHtcbiAgICAgIGlmICh0aGlzLmNtaS5tb2RlID09PSAnbm9ybWFsJykge1xuICAgICAgICBpZiAodGhpcy5jbWkuY3JlZGl0ID09PSAnY3JlZGl0Jykge1xuICAgICAgICAgIGlmICh0aGlzLmNtaS5jb21wbGV0aW9uX3RocmVzaG9sZCAmJiB0aGlzLmNtaS5wcm9ncmVzc19tZWFzdXJlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbWkucHJvZ3Jlc3NfbWVhc3VyZSA+PSB0aGlzLmNtaS5jb21wbGV0aW9uX3RocmVzaG9sZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdTZXR0aW5nIENvbXBsZXRpb24gU3RhdHVzOiBDb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgdGhpcy5jbWkuY29tcGxldGlvbl9zdGF0dXMgPSAnY29tcGxldGVkJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1NldHRpbmcgQ29tcGxldGlvbiBTdGF0dXM6IEluY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgdGhpcy5jbWkuY29tcGxldGlvbl9zdGF0dXMgPSAnaW5jb21wbGV0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNtaS5zY2FsZWRfcGFzc2luZ19zY29yZSAmJiB0aGlzLmNtaS5zY29yZS5zY2FsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNtaS5zY29yZS5zY2FsZWQgPj0gdGhpcy5jbWkuc2NhbGVkX3Bhc3Npbmdfc2NvcmUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnU2V0dGluZyBTdWNjZXNzIFN0YXR1czogUGFzc2VkJyk7XG4gICAgICAgICAgICAgIHRoaXMuY21pLnN1Y2Nlc3Nfc3RhdHVzID0gJ3Bhc3NlZCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdTZXR0aW5nIFN1Y2Nlc3MgU3RhdHVzOiBGYWlsZWQnKTtcbiAgICAgICAgICAgICAgdGhpcy5jbWkuc3VjY2Vzc19zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmF2UmVxdWVzdCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmFkbC5uYXYucmVxdWVzdCAhPT0gKHRoaXMuc3RhcnRpbmdEYXRhPy5hZGw/Lm5hdj8ucmVxdWVzdCkgJiZcbiAgICAgICAgdGhpcy5hZGwubmF2LnJlcXVlc3QgIT09ICdfbm9uZV8nKSB7XG4gICAgICB0aGlzLmFkbC5uYXYucmVxdWVzdCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmFkbC5uYXYucmVxdWVzdCk7XG4gICAgICBuYXZSZXF1ZXN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21taXRPYmplY3QgPSB0aGlzLnJlbmRlckNvbW1pdENNSSh0ZXJtaW5hdGVDb21taXQpO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubG1zQ29tbWl0VXJsKSB7XG4gICAgICBpZiAodGhpcy5hcGlMb2dMZXZlbCA9PT0gZ2xvYmFsX2NvbnN0YW50cy5MT0dfTEVWRUxfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnQ29tbWl0ICh0ZXJtaW5hdGVkOiAnICtcbiAgICAgICAgICAgICh0ZXJtaW5hdGVDb21taXQgPyAneWVzJyA6ICdubycpICsgJyk6ICcpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKGNvbW1pdE9iamVjdCk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb2Nlc3NIdHRwUmVxdWVzdCh0aGlzLnNldHRpbmdzLmxtc0NvbW1pdFVybCxcbiAgICAgICAgICBjb21taXRPYmplY3QpO1xuICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBhIHNlcXVlbmNpbmcgY2FsbCwgYW5kIHRoZW4gY2FsbCB0aGUgbmVjZXNzYXJ5IEpTXG4gICAgICBpZiAobmF2UmVxdWVzdCAmJiByZXN1bHQubmF2UmVxdWVzdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcmVzdWx0Lm5hdlJlcXVlc3QgIT09ICcnKSB7XG4gICAgICAgIEZ1bmN0aW9uKGBcInVzZSBzdHJpY3RcIjsoKCkgPT4geyAke3Jlc3VsdC5uYXZSZXF1ZXN0fSB9KSgpYCkoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb21taXQgKHRlcm1pbmF0ZWQ6ICcgK1xuICAgICAgICAgICh0ZXJtaW5hdGVDb21taXQgPyAneWVzJyA6ICdubycpICsgJyk6ICcpO1xuICAgICAgY29uc29sZS5sb2coY29tbWl0T2JqZWN0KTtcbiAgICAgIHJldHVybiBnbG9iYWxfY29uc3RhbnRzLlNDT1JNX1RSVUU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBTY29ybTEyQ01JIGZyb20gJy4vc2Nvcm0xMl9jbWknO1xuaW1wb3J0IHtCYXNlQ01JLCBDTUlBcnJheSwgQ01JU2NvcmV9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBBUElDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzL2FwaV9jb25zdGFudHMnO1xuaW1wb3J0IFJlZ2V4IGZyb20gJy4uL2NvbnN0YW50cy9yZWdleCc7XG5pbXBvcnQgRXJyb3JDb2RlcyBmcm9tICcuLi9jb25zdGFudHMvZXJyb3JfY29kZXMnO1xuaW1wb3J0IHtcbiAgY2hlY2sxMlZhbGlkRm9ybWF0LFxuICB0aHJvd1JlYWRPbmx5RXJyb3IsXG59IGZyb20gJy4vc2Nvcm0xMl9jbWknO1xuXG5jb25zdCBhaWNjX2NvbnN0YW50cyA9IEFQSUNvbnN0YW50cy5haWNjO1xuY29uc3QgYWljY19yZWdleCA9IFJlZ2V4LmFpY2M7XG5jb25zdCBzY29ybTEyX2Vycm9yX2NvZGVzID0gRXJyb3JDb2Rlcy5zY29ybTEyO1xuXG4vKipcbiAqIENNSSBDbGFzcyBmb3IgQUlDQ1xuICovXG5leHBvcnQgY2xhc3MgQ01JIGV4dGVuZHMgU2Nvcm0xMkNNSS5DTUkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIEFJQ0MgQ01JIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRpYWxpemVkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsaXplZDogYm9vbGVhbikge1xuICAgIHN1cGVyKGFpY2NfY29uc3RhbnRzLmNtaV9jaGlsZHJlbik7XG5cbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXG4gICAgdGhpcy5zdHVkZW50X3ByZWZlcmVuY2UgPSBuZXcgQUlDQ1N0dWRlbnRQcmVmZXJlbmNlcygpO1xuICAgIHRoaXMuc3R1ZGVudF9kYXRhID0gbmV3IEFJQ0NDTUlTdHVkZW50RGF0YSgpO1xuICAgIHRoaXMuc3R1ZGVudF9kZW1vZ3JhcGhpY3MgPSBuZXcgQ01JU3R1ZGVudERlbW9ncmFwaGljcygpO1xuICAgIHRoaXMuZXZhbHVhdGlvbiA9IG5ldyBDTUlFdmFsdWF0aW9uKCk7XG4gICAgdGhpcy5wYXRocyA9IG5ldyBDTUlQYXRocygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnN0dWRlbnRfcHJlZmVyZW5jZT8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuc3R1ZGVudF9kYXRhPy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5zdHVkZW50X2RlbW9ncmFwaGljcz8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuZXZhbHVhdGlvbj8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMucGF0aHM/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaVxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIHN1c3BlbmRfZGF0YTogc3RyaW5nLFxuICAgKiAgICAgIGxhdW5jaF9kYXRhOiBzdHJpbmcsXG4gICAqICAgICAgY29tbWVudHM6IHN0cmluZyxcbiAgICogICAgICBjb21tZW50c19mcm9tX2xtczogc3RyaW5nLFxuICAgKiAgICAgIGNvcmU6IENNSUNvcmUsXG4gICAqICAgICAgb2JqZWN0aXZlczogQ01JT2JqZWN0aXZlcyxcbiAgICogICAgICBzdHVkZW50X2RhdGE6IENNSVN0dWRlbnREYXRhLFxuICAgKiAgICAgIHN0dWRlbnRfcHJlZmVyZW5jZTogQ01JU3R1ZGVudFByZWZlcmVuY2UsXG4gICAqICAgICAgaW50ZXJhY3Rpb25zOiBDTUlJbnRlcmFjdGlvbnMsXG4gICAqICAgICAgcGF0aHM6IENNSVBhdGhzXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdzdXNwZW5kX2RhdGEnOiB0aGlzLnN1c3BlbmRfZGF0YSxcbiAgICAgICdsYXVuY2hfZGF0YSc6IHRoaXMubGF1bmNoX2RhdGEsXG4gICAgICAnY29tbWVudHMnOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgJ2NvbW1lbnRzX2Zyb21fbG1zJzogdGhpcy5jb21tZW50c19mcm9tX2xtcyxcbiAgICAgICdjb3JlJzogdGhpcy5jb3JlLFxuICAgICAgJ29iamVjdGl2ZXMnOiB0aGlzLm9iamVjdGl2ZXMsXG4gICAgICAnc3R1ZGVudF9kYXRhJzogdGhpcy5zdHVkZW50X2RhdGEsXG4gICAgICAnc3R1ZGVudF9wcmVmZXJlbmNlJzogdGhpcy5zdHVkZW50X3ByZWZlcmVuY2UsXG4gICAgICAnc3R1ZGVudF9kZW1vZ3JhcGhpY3MnOiB0aGlzLnN0dWRlbnRfZGVtb2dyYXBoaWNzLFxuICAgICAgJ2ludGVyYWN0aW9ucyc6IHRoaXMuaW50ZXJhY3Rpb25zLFxuICAgICAgJ2V2YWx1YXRpb24nOiB0aGlzLmV2YWx1YXRpb24sXG4gICAgICAncGF0aHMnOiB0aGlzLnBhdGhzLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQUlDQyBFdmFsdWF0aW9uIG9iamVjdFxuICovXG5jbGFzcyBDTUlFdmFsdWF0aW9uIGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQUlDQyBFdmFsdWF0aW9uIG9iamVjdFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY29tbWVudHMgPSBuZXcgQ01JRXZhbHVhdGlvbkNvbW1lbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIEFQSSBoYXMgYmVlbiBpbml0aWFsaXplZCBhZnRlciB0aGUgQ01JIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29tbWVudHM/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5ldmFsdWF0aW9uIG9iamVjdFxuICAgKiBAcmV0dXJuIHt7Y29tbWVudHM6IENNSUV2YWx1YXRpb25Db21tZW50c319XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnY29tbWVudHMnOiB0aGlzLmNvbW1lbnRzLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIEFJQ0MncyBjbWkuZXZhbHVhdGlvbi5jb21tZW50cyBvYmplY3RcbiAqL1xuY2xhc3MgQ01JRXZhbHVhdGlvbkNvbW1lbnRzIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIEFJQ0MgRXZhbHVhdGlvbiBDb21tZW50cyBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGFpY2NfY29uc3RhbnRzLmNvbW1lbnRzX2NoaWxkcmVuLFxuICAgICAgICBzY29ybTEyX2Vycm9yX2NvZGVzLklOVkFMSURfU0VUX1ZBTFVFKTtcbiAgfVxufVxuXG4vKipcbiAqIFN0dWRlbnRQcmVmZXJlbmNlcyBjbGFzcyBmb3IgQUlDQ1xuICovXG5jbGFzcyBBSUNDU3R1ZGVudFByZWZlcmVuY2VzIGV4dGVuZHMgU2Nvcm0xMkNNSS5DTUlTdHVkZW50UHJlZmVyZW5jZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQUlDQyBTdHVkZW50IFByZWZlcmVuY2VzIG9iamVjdFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoYWljY19jb25zdGFudHMuc3R1ZGVudF9wcmVmZXJlbmNlX2NoaWxkcmVuKTtcblxuICAgIHRoaXMud2luZG93cyA9IG5ldyBDTUlBcnJheSh7XG4gICAgICBlcnJvckNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUsXG4gICAgICBjaGlsZHJlbjogJycsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIEFQSSBoYXMgYmVlbiBpbml0aWFsaXplZCBhZnRlciB0aGUgQ01JIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMud2luZG93cz8uaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgI2xlc3Nvbl90eXBlID0gJyc7XG4gICN0ZXh0X2NvbG9yID0gJyc7XG4gICN0ZXh0X2xvY2F0aW9uID0gJyc7XG4gICN0ZXh0X3NpemUgPSAnJztcbiAgI3ZpZGVvID0gJyc7XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2xlc3Nvbl90eXBlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBsZXNzb25fdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiNsZXNzb25fdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsZXNzb25fdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGVzc29uX3R5cGVcbiAgICovXG4gIHNldCBsZXNzb25fdHlwZShsZXNzb25fdHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChsZXNzb25fdHlwZSwgYWljY19yZWdleC5DTUlTdHJpbmcyNTYpKSB7XG4gICAgICB0aGlzLiNsZXNzb25fdHlwZSA9IGxlc3Nvbl90eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0ZXh0X2NvbG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0ZXh0X2NvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuI3RleHRfY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGV4dF9jb2xvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dF9jb2xvclxuICAgKi9cbiAgc2V0IHRleHRfY29sb3IodGV4dF9jb2xvcjogc3RyaW5nKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh0ZXh0X2NvbG9yLCBhaWNjX3JlZ2V4LkNNSVN0cmluZzI1NikpIHtcbiAgICAgIHRoaXMuI3RleHRfY29sb3IgPSB0ZXh0X2NvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0ZXh0X2xvY2F0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0ZXh0X2xvY2F0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuI3RleHRfbG9jYXRpb247XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGV4dF9sb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dF9sb2NhdGlvblxuICAgKi9cbiAgc2V0IHRleHRfbG9jYXRpb24odGV4dF9sb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh0ZXh0X2xvY2F0aW9uLCBhaWNjX3JlZ2V4LkNNSVN0cmluZzI1NikpIHtcbiAgICAgIHRoaXMuI3RleHRfbG9jYXRpb24gPSB0ZXh0X2xvY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0ZXh0X3NpemVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRleHRfc2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiN0ZXh0X3NpemU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGV4dF9zaXplXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0X3NpemVcbiAgICovXG4gIHNldCB0ZXh0X3NpemUodGV4dF9zaXplOiBzdHJpbmcpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHRleHRfc2l6ZSwgYWljY19yZWdleC5DTUlTdHJpbmcyNTYpKSB7XG4gICAgICB0aGlzLiN0ZXh0X3NpemUgPSB0ZXh0X3NpemU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3ZpZGVvXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB2aWRlbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLiN2aWRlbztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN2aWRlb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmlkZW9cbiAgICovXG4gIHNldCB2aWRlbyh2aWRlbzogc3RyaW5nKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh2aWRlbywgYWljY19yZWdleC5DTUlTdHJpbmcyNTYpKSB7XG4gICAgICB0aGlzLiN2aWRlbyA9IHZpZGVvO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5zdHVkZW50X3ByZWZlcmVuY2VcbiAgICpcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBhdWRpbzogc3RyaW5nLFxuICAgKiAgICAgIGxhbmd1YWdlOiBzdHJpbmcsXG4gICAqICAgICAgc3BlZWQ6IHN0cmluZyxcbiAgICogICAgICB0ZXh0OiBzdHJpbmdcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ2F1ZGlvJzogdGhpcy5hdWRpbyxcbiAgICAgICdsYW5ndWFnZSc6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICAnbGVzc29uX3R5cGUnOiB0aGlzLmxlc3Nvbl90eXBlLFxuICAgICAgJ3NwZWVkJzogdGhpcy5zcGVlZCxcbiAgICAgICd0ZXh0JzogdGhpcy50ZXh0LFxuICAgICAgJ3RleHRfY29sb3InOiB0aGlzLnRleHRfY29sb3IsXG4gICAgICAndGV4dF9sb2NhdGlvbic6IHRoaXMudGV4dF9sb2NhdGlvbixcbiAgICAgICd0ZXh0X3NpemUnOiB0aGlzLnRleHRfc2l6ZSxcbiAgICAgICd2aWRlbyc6IHRoaXMudmlkZW8sXG4gICAgICAnd2luZG93cyc6IHRoaXMud2luZG93cyxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIFN0dWRlbnREYXRhIGNsYXNzIGZvciBBSUNDXG4gKi9cbmNsYXNzIEFJQ0NDTUlTdHVkZW50RGF0YSBleHRlbmRzIFNjb3JtMTJDTUkuQ01JU3R1ZGVudERhdGEge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIEFJQ0MgU3R1ZGVudERhdGEgb2JqZWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihhaWNjX2NvbnN0YW50cy5zdHVkZW50X2RhdGFfY2hpbGRyZW4pO1xuXG4gICAgdGhpcy50cmllcyA9IG5ldyBDTUlUcmllcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnRyaWVzPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAjdHJpZXNfZHVyaW5nX2xlc3NvbiA9ICcnO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRyaWVzX2R1cmluZ19sZXNzb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRyaWVzX2R1cmluZ19sZXNzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RyaWVzX2R1cmluZ19sZXNzb247XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdHJpZXNfZHVyaW5nX2xlc3Nvbi4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyaWVzX2R1cmluZ19sZXNzb25cbiAgICovXG4gIHNldCB0cmllc19kdXJpbmdfbGVzc29uKHRyaWVzX2R1cmluZ19sZXNzb24pIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI3RyaWVzX2R1cmluZ19sZXNzb24gPSB0cmllc19kdXJpbmdfbGVzc29uIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWkuc3R1ZGVudF9kYXRhIG9iamVjdFxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIG1hc3Rlcnlfc2NvcmU6IHN0cmluZyxcbiAgICogICAgICBtYXhfdGltZV9hbGxvd2VkOiBzdHJpbmcsXG4gICAqICAgICAgdGltZV9saW1pdF9hY3Rpb246IHN0cmluZyxcbiAgICogICAgICB0cmllczogQ01JVHJpZXNcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ21hc3Rlcnlfc2NvcmUnOiB0aGlzLm1hc3Rlcnlfc2NvcmUsXG4gICAgICAnbWF4X3RpbWVfYWxsb3dlZCc6IHRoaXMubWF4X3RpbWVfYWxsb3dlZCxcbiAgICAgICd0aW1lX2xpbWl0X2FjdGlvbic6IHRoaXMudGltZV9saW1pdF9hY3Rpb24sXG4gICAgICAndHJpZXMnOiB0aGlzLnRyaWVzLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBBSUNDIGNtaS5zdHVkZW50X2RlbW9ncmFwaGljcyBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVN0dWRlbnREZW1vZ3JhcGhpY3MgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBBSUNDIFN0dWRlbnREZW1vZ3JhcGhpY3Mgb2JqZWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgI19jaGlsZHJlbiA9IGFpY2NfY29uc3RhbnRzLnN0dWRlbnRfZGVtb2dyYXBoaWNzX2NoaWxkcmVuO1xuICAjY2l0eSA9ICcnO1xuICAjY2xhc3MgPSAnJztcbiAgI2NvbXBhbnkgPSAnJztcbiAgI2NvdW50cnkgPSAnJztcbiAgI2V4cGVyaWVuY2UgPSAnJztcbiAgI2ZhbWlsaWFyX25hbWUgPSAnJztcbiAgI2luc3RydWN0b3JfbmFtZSA9ICcnO1xuICAjdGl0bGUgPSAnJztcbiAgI25hdGl2ZV9sYW5ndWFnZSA9ICcnO1xuICAjc3RhdGUgPSAnJztcbiAgI3N0cmVldF9hZGRyZXNzID0gJyc7XG4gICN0ZWxlcGhvbmUgPSAnJztcbiAgI3llYXJzX2V4cGVyaWVuY2UgPSAnJztcblxuICAvKipcbiAgICogR2V0dGVyIGZvciBjaXR5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNjaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NpdHkuIFNldHMgYW4gZXJyb3IgaWYgdHJ5aW5nIHRvIHNldCBhZnRlclxuICAgKiAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaXR5XG4gICAqL1xuICBzZXQgY2l0eShjaXR5KSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiNjaXR5ID0gY2l0eSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgY2xhc3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLiNjbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNjbGFzcy4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXp6XG4gICAqL1xuICBzZXQgY2xhc3MoY2xhenopIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI2NsYXNzID0gY2xhenogOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIGNvbXBhbnlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGNvbXBhbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbXBhbnk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY29tcGFueS4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBhbnlcbiAgICovXG4gIHNldCBjb21wYW55KGNvbXBhbnkpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI2NvbXBhbnkgPSBjb21wYW55IDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciBjb3VudHJ5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLiNjb3VudHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NvdW50cnkuIFNldHMgYW4gZXJyb3IgaWYgdHJ5aW5nIHRvIHNldCBhZnRlclxuICAgKiAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5XG4gICAqL1xuICBzZXQgY291bnRyeShjb3VudHJ5KSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiNjb3VudHJ5ID0gY291bnRyeSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgZXhwZXJpZW5jZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZXhwZXJpZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZXhwZXJpZW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNleHBlcmllbmNlLiBTZXRzIGFuIGVycm9yIGlmIHRyeWluZyB0byBzZXQgYWZ0ZXJcbiAgICogIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZXJpZW5jZVxuICAgKi9cbiAgc2V0IGV4cGVyaWVuY2UoZXhwZXJpZW5jZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jZXhwZXJpZW5jZSA9IGV4cGVyaWVuY2UgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIGZhbWlsaWFyX25hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGZhbWlsaWFyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2ZhbWlsaWFyX25hbWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjZmFtaWxpYXJfbmFtZS4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZhbWlsaWFyX25hbWVcbiAgICovXG4gIHNldCBmYW1pbGlhcl9uYW1lKGZhbWlsaWFyX25hbWUpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI2ZhbWlsaWFyX25hbWUgPSBmYW1pbGlhcl9uYW1lIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciBpbnN0cnVjdG9yX25hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGluc3RydWN0b3JfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jaW5zdHJ1Y3Rvcl9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2luc3RydWN0b3JfbmFtZS4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGluc3RydWN0b3JfbmFtZVxuICAgKi9cbiAgc2V0IGluc3RydWN0b3JfbmFtZShpbnN0cnVjdG9yX25hbWUpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI2luc3RydWN0b3JfbmFtZSA9IGluc3RydWN0b3JfbmFtZSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGl0bGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0aXRsZS4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gICAqL1xuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGUgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIG5hdGl2ZV9sYW5ndWFnZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbmF0aXZlX2xhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLiNuYXRpdmVfbGFuZ3VhZ2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjbmF0aXZlX2xhbmd1YWdlLiBTZXRzIGFuIGVycm9yIGlmIHRyeWluZyB0byBzZXQgYWZ0ZXJcbiAgICogIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlX2xhbmd1YWdlXG4gICAqL1xuICBzZXQgbmF0aXZlX2xhbmd1YWdlKG5hdGl2ZV9sYW5ndWFnZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jbmF0aXZlX2xhbmd1YWdlID0gbmF0aXZlX2xhbmd1YWdlIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciBzdGF0ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0YXRlLiBTZXRzIGFuIGVycm9yIGlmIHRyeWluZyB0byBzZXQgYWZ0ZXJcbiAgICogIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVcbiAgICovXG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jc3RhdGUgPSBzdGF0ZSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3Igc3RyZWV0X2FkZHJlc3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHN0cmVldF9hZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHJlZXRfYWRkcmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNzdHJlZXRfYWRkcmVzcy4gU2V0cyBhbiBlcnJvciBpZiB0cnlpbmcgdG8gc2V0IGFmdGVyXG4gICAqICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmVldF9hZGRyZXNzXG4gICAqL1xuICBzZXQgc3RyZWV0X2FkZHJlc3Moc3RyZWV0X2FkZHJlc3MpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI3N0cmVldF9hZGRyZXNzID0gc3RyZWV0X2FkZHJlc3MgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRlbGVwaG9uZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGVsZXBob25lKCkge1xuICAgIHJldHVybiB0aGlzLiN0ZWxlcGhvbmU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGVsZXBob25lLiBTZXRzIGFuIGVycm9yIGlmIHRyeWluZyB0byBzZXQgYWZ0ZXJcbiAgICogIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVsZXBob25lXG4gICAqL1xuICBzZXQgdGVsZXBob25lKHRlbGVwaG9uZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jdGVsZXBob25lID0gdGVsZXBob25lIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB5ZWFyc19leHBlcmllbmNlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB5ZWFyc19leHBlcmllbmNlKCkge1xuICAgIHJldHVybiB0aGlzLiN5ZWFyc19leHBlcmllbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3llYXJzX2V4cGVyaWVuY2UuIFNldHMgYW4gZXJyb3IgaWYgdHJ5aW5nIHRvIHNldCBhZnRlclxuICAgKiAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB5ZWFyc19leHBlcmllbmNlXG4gICAqL1xuICBzZXQgeWVhcnNfZXhwZXJpZW5jZSh5ZWFyc19leHBlcmllbmNlKSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiN5ZWFyc19leHBlcmllbmNlID0geWVhcnNfZXhwZXJpZW5jZSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLnN0dWRlbnRfZGVtb2dyYXBoaWNzIG9iamVjdFxuICAgKiBAcmV0dXJuIHtcbiAgICogICAgICB7XG4gICAqICAgICAgICBjaXR5OiBzdHJpbmcsXG4gICAqICAgICAgICBjbGFzczogc3RyaW5nLFxuICAgKiAgICAgICAgY29tcGFueTogc3RyaW5nLFxuICAgKiAgICAgICAgY291bnRyeTogc3RyaW5nLFxuICAgKiAgICAgICAgZXhwZXJpZW5jZTogc3RyaW5nLFxuICAgKiAgICAgICAgZmFtaWxpYXJfbmFtZTogc3RyaW5nLFxuICAgKiAgICAgICAgaW5zdHJ1Y3Rvcl9uYW1lOiBzdHJpbmcsXG4gICAqICAgICAgICB0aXRsZTogc3RyaW5nLFxuICAgKiAgICAgICAgbmF0aXZlX2xhbmd1YWdlOiBzdHJpbmcsXG4gICAqICAgICAgICBzdGF0ZTogc3RyaW5nLFxuICAgKiAgICAgICAgc3RyZWV0X2FkZHJlc3M6IHN0cmluZyxcbiAgICogICAgICAgIHRlbGVwaG9uZTogc3RyaW5nLFxuICAgKiAgICAgICAgeWVhcnNfZXhwZXJpZW5jZTogc3RyaW5nXG4gICAqICAgICAgfVxuICAgKiAgICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnY2l0eSc6IHRoaXMuY2l0eSxcbiAgICAgICdjbGFzcyc6IHRoaXMuY2xhc3MsXG4gICAgICAnY29tcGFueSc6IHRoaXMuY29tcGFueSxcbiAgICAgICdjb3VudHJ5JzogdGhpcy5jb3VudHJ5LFxuICAgICAgJ2V4cGVyaWVuY2UnOiB0aGlzLmV4cGVyaWVuY2UsXG4gICAgICAnZmFtaWxpYXJfbmFtZSc6IHRoaXMuZmFtaWxpYXJfbmFtZSxcbiAgICAgICdpbnN0cnVjdG9yX25hbWUnOiB0aGlzLmluc3RydWN0b3JfbmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMudGl0bGUsXG4gICAgICAnbmF0aXZlX2xhbmd1YWdlJzogdGhpcy5uYXRpdmVfbGFuZ3VhZ2UsXG4gICAgICAnc3RhdGUnOiB0aGlzLnN0YXRlLFxuICAgICAgJ3N0cmVldF9hZGRyZXNzJzogdGhpcy5zdHJlZXRfYWRkcmVzcyxcbiAgICAgICd0ZWxlcGhvbmUnOiB0aGlzLnRlbGVwaG9uZSxcbiAgICAgICd5ZWFyc19leHBlcmllbmNlJzogdGhpcy55ZWFyc19leHBlcmllbmNlLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBBSUNDIGNtaS5wYXRocyBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVBhdGhzIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGlubGluZSBQYXRocyBBcnJheSBjbGFzc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoYWljY19jb25zdGFudHMucGF0aHNfY2hpbGRyZW4pO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIEFJQ0MgUGF0aHNcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVBhdGhzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQUlDQyBQYXRocyBvYmplY3RzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgI2xvY2F0aW9uX2lkID0gJyc7XG4gICNkYXRlID0gJyc7XG4gICN0aW1lID0gJyc7XG4gICNzdGF0dXMgPSAnJztcbiAgI3doeV9sZWZ0ID0gJyc7XG4gICN0aW1lX2luX2VsZW1lbnQgPSAnJztcblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbG9jYXRpb25faWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2F0aW9uX2lkKCkge1xuICAgIHJldHVybiB0aGlzLiNsb2NhdGlvbl9pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsb2NhdGlvbl9pZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25faWRcbiAgICovXG4gIHNldCBsb2NhdGlvbl9pZChsb2NhdGlvbl9pZCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQobG9jYXRpb25faWQsIGFpY2NfcmVnZXguQ01JU3RyaW5nMjU2KSkge1xuICAgICAgdGhpcy4jbG9jYXRpb25faWQgPSBsb2NhdGlvbl9pZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjZGF0ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlXG4gICAqL1xuICBzZXQgZGF0ZShkYXRlKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChkYXRlLCBhaWNjX3JlZ2V4LkNNSVN0cmluZzI1NikpIHtcbiAgICAgIHRoaXMuI2RhdGUgPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0aW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLiN0aW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3RpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWVcbiAgICovXG4gIHNldCB0aW1lKHRpbWUpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHRpbWUsIGFpY2NfcmVnZXguQ01JVGltZSkpIHtcbiAgICAgIHRoaXMuI3RpbWUgPSB0aW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzdGF0dXNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0YXR1c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAqL1xuICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoc3RhdHVzLCBhaWNjX3JlZ2V4LkNNSVN0YXR1czIpKSB7XG4gICAgICB0aGlzLiNzdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3doeV9sZWZ0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB3aHlfbGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy4jd2h5X2xlZnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjd2h5X2xlZnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdoeV9sZWZ0XG4gICAqL1xuICBzZXQgd2h5X2xlZnQod2h5X2xlZnQpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHdoeV9sZWZ0LCBhaWNjX3JlZ2V4LkNNSVN0cmluZzI1NikpIHtcbiAgICAgIHRoaXMuI3doeV9sZWZ0ID0gd2h5X2xlZnQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3RpbWVfaW5fZWxlbWVudFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGltZV9pbl9lbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiN0aW1lX2luX2VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGltZV9pbl9lbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lX2luX2VsZW1lbnRcbiAgICovXG4gIHNldCB0aW1lX2luX2VsZW1lbnQodGltZV9pbl9lbGVtZW50KSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh0aW1lX2luX2VsZW1lbnQsIGFpY2NfcmVnZXguQ01JVGltZSkpIHtcbiAgICAgIHRoaXMuI3RpbWVfaW5fZWxlbWVudCA9IHRpbWVfaW5fZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWkucGF0aHMubiBvYmplY3RcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBsb2NhdGlvbl9pZDogc3RyaW5nLFxuICAgKiAgICAgIGRhdGU6IHN0cmluZyxcbiAgICogICAgICB0aW1lOiBzdHJpbmcsXG4gICAqICAgICAgc3RhdHVzOiBzdHJpbmcsXG4gICAqICAgICAgd2h5X2xlZnQ6IHN0cmluZyxcbiAgICogICAgICB0aW1lX2luX2VsZW1lbnQ6IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnbG9jYXRpb25faWQnOiB0aGlzLmxvY2F0aW9uX2lkLFxuICAgICAgJ2RhdGUnOiB0aGlzLmRhdGUsXG4gICAgICAndGltZSc6IHRoaXMudGltZSxcbiAgICAgICdzdGF0dXMnOiB0aGlzLnN0YXR1cyxcbiAgICAgICd3aHlfbGVmdCc6IHRoaXMud2h5X2xlZnQsXG4gICAgICAndGltZV9pbl9lbGVtZW50JzogdGhpcy50aW1lX2luX2VsZW1lbnQsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIEFJQ0MgY21pLnN0dWRlbnRfZGF0YS50cmllcyBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVRyaWVzIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGlubGluZSBUcmllcyBBcnJheSBjbGFzc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoYWljY19jb25zdGFudHMudHJpZXNfY2hpbGRyZW4pO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIEFJQ0MgVHJpZXNcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVRyaWVzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQUlDQyBUcmllcyBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IENNSVNjb3JlKFxuICAgICAgICB7XG4gICAgICAgICAgc2NvcmVfY2hpbGRyZW46IGFpY2NfY29uc3RhbnRzLnNjb3JlX2NoaWxkcmVuLFxuICAgICAgICAgIHNjb3JlX3JhbmdlOiBhaWNjX3JlZ2V4LnNjb3JlX3JhbmdlLFxuICAgICAgICAgIGludmFsaWRFcnJvckNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUsXG4gICAgICAgICAgaW52YWxpZFR5cGVDb2RlOiBzY29ybTEyX2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gsXG4gICAgICAgICAgaW52YWxpZFJhbmdlQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5WQUxVRV9PVVRfT0ZfUkFOR0UsXG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnNjb3JlPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAjc3RhdHVzID0gJyc7XG4gICN0aW1lID0gJyc7XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3N0YXR1c1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjc3RhdHVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICovXG4gIHNldCBzdGF0dXMoc3RhdHVzKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChzdGF0dXMsIGFpY2NfcmVnZXguQ01JU3RhdHVzMikpIHtcbiAgICAgIHRoaXMuI3N0YXR1cyA9IHN0YXR1cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gICAqL1xuICBzZXQgdGltZSh0aW1lKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh0aW1lLCBhaWNjX3JlZ2V4LkNNSVRpbWUpKSB7XG4gICAgICB0aGlzLiN0aW1lID0gdGltZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWkuc3R1ZGVudF9kYXRhLnRyaWVzLm4gb2JqZWN0XG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgc3RhdHVzOiBzdHJpbmcsXG4gICAqICAgICAgdGltZTogc3RyaW5nLFxuICAgKiAgICAgIHNjb3JlOiBDTUlTY29yZVxuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnc3RhdHVzJzogdGhpcy5zdGF0dXMsXG4gICAgICAndGltZSc6IHRoaXMudGltZSxcbiAgICAgICdzY29yZSc6IHRoaXMuc2NvcmUsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgY21pLnN0dWRlbnRfZGF0YS5hdHRlbXB0X3JlY29yZHMgYXJyYXlcbiAqL1xuZXhwb3J0IGNsYXNzIENNSUF0dGVtcHRSZWNvcmRzIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGlubGluZSBUcmllcyBBcnJheSBjbGFzc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoYWljY19jb25zdGFudHMuYXR0ZW1wdF9yZWNvcmRzX2NoaWxkcmVuKTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIGZvciBBSUNDIEF0dGVtcHQgUmVjb3Jkc1xuICovXG5leHBvcnQgY2xhc3MgQ01JQXR0ZW1wdFJlY29yZHNPYmplY3QgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBBSUNDIEF0dGVtcHQgUmVjb3JkcyBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IENNSVNjb3JlKFxuICAgICAgICB7XG4gICAgICAgICAgc2NvcmVfY2hpbGRyZW46IGFpY2NfY29uc3RhbnRzLnNjb3JlX2NoaWxkcmVuLFxuICAgICAgICAgIHNjb3JlX3JhbmdlOiBhaWNjX3JlZ2V4LnNjb3JlX3JhbmdlLFxuICAgICAgICAgIGludmFsaWRFcnJvckNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUsXG4gICAgICAgICAgaW52YWxpZFR5cGVDb2RlOiBzY29ybTEyX2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gsXG4gICAgICAgICAgaW52YWxpZFJhbmdlQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5WQUxVRV9PVVRfT0ZfUkFOR0UsXG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnNjb3JlPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAjbGVzc29uX3N0YXR1cyA9ICcnO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsZXNzb25fc3RhdHVzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBsZXNzb25fc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLiNsZXNzb25fc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xlc3Nvbl9zdGF0dXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxlc3Nvbl9zdGF0dXNcbiAgICovXG4gIHNldCBsZXNzb25fc3RhdHVzKGxlc3Nvbl9zdGF0dXMpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KGxlc3Nvbl9zdGF0dXMsIGFpY2NfcmVnZXguQ01JU3RhdHVzMikpIHtcbiAgICAgIHRoaXMuI2xlc3Nvbl9zdGF0dXMgPSBsZXNzb25fc3RhdHVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5zdHVkZW50X2RhdGEuYXR0ZW1wdF9yZWNvcmRzLm4gb2JqZWN0XG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgc3RhdHVzOiBzdHJpbmcsXG4gICAqICAgICAgdGltZTogc3RyaW5nLFxuICAgKiAgICAgIHNjb3JlOiBDTUlTY29yZVxuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnbGVzc29uX3N0YXR1cyc6IHRoaXMubGVzc29uX3N0YXR1cyxcbiAgICAgICdzY29yZSc6IHRoaXMuc2NvcmUsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgQUlDQyBFdmFsdWF0aW9uIENvbW1lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlFdmFsdWF0aW9uQ29tbWVudHNPYmplY3QgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBFdmFsdWF0aW9uIENvbW1lbnRzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgI2NvbnRlbnQgPSAnJztcbiAgI2xvY2F0aW9uID0gJyc7XG4gICN0aW1lID0gJyc7XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2NvbnRlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbnRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY29udGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0IGNvbnRlbnQoY29udGVudCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoY29udGVudCwgYWljY19yZWdleC5DTUlTdHJpbmcyNTYpKSB7XG4gICAgICB0aGlzLiNjb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbG9jYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNsb2NhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAgICovXG4gIHNldCBsb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQobG9jYXRpb24sIGFpY2NfcmVnZXguQ01JU3RyaW5nMjU2KSkge1xuICAgICAgdGhpcy4jbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0aW5nIGZvciAjdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGltZVxuICAgKi9cbiAgc2V0IHRpbWUodGltZSkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQodGltZSwgYWljY19yZWdleC5DTUlUaW1lKSkge1xuICAgICAgdGhpcy4jdGltZSA9IHRpbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLmV2YXVsYXRpb24uY29tbWVudHMubiBvYmplY3RcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBjb250ZW50OiBzdHJpbmcsXG4gICAqICAgICAgbG9jYXRpb246IHN0cmluZyxcbiAgICogICAgICB0aW1lOiBzdHJpbmdcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ2NvbnRlbnQnOiB0aGlzLmNvbnRlbnQsXG4gICAgICAnbG9jYXRpb24nOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgJ3RpbWUnOiB0aGlzLnRpbWUsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQgQVBJQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cy9hcGlfY29uc3RhbnRzJztcbmltcG9ydCBFcnJvckNvZGVzIGZyb20gJy4uL2NvbnN0YW50cy9lcnJvcl9jb2Rlcyc7XG5pbXBvcnQge1ZhbGlkYXRpb25FcnJvcn0gZnJvbSAnLi4vZXhjZXB0aW9ucyc7XG5pbXBvcnQgUmVnZXggZnJvbSAnLi4vY29uc3RhbnRzL3JlZ2V4JztcblxuY29uc3Qgc2Nvcm0xMl9jb25zdGFudHMgPSBBUElDb25zdGFudHMuc2Nvcm0xMjtcbmNvbnN0IHNjb3JtMTJfcmVnZXggPSBSZWdleC5zY29ybTEyO1xuY29uc3Qgc2Nvcm0xMl9lcnJvcl9jb2RlcyA9IEVycm9yQ29kZXMuc2Nvcm0xMjtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgbWF0Y2hlcyB0aGUgcHJvcGVyIGZvcm1hdC4gSWYgbm90LCB0aHJvdyBwcm9wZXIgZXJyb3IgY29kZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdleFBhdHRlcm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWxsb3dFbXB0eVN0cmluZ1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRGb3JtYXQoXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICByZWdleFBhdHRlcm46IFN0cmluZyxcbiAgICBlcnJvckNvZGU6IG51bWJlcixcbiAgICBhbGxvd0VtcHR5U3RyaW5nPzogYm9vbGVhbikge1xuICBjb25zdCBmb3JtYXRSZWdleCA9IG5ldyBSZWdFeHAocmVnZXhQYXR0ZXJuKTtcbiAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZvcm1hdFJlZ2V4KTtcbiAgaWYgKGFsbG93RW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgIW1hdGNoZXMgfHwgbWF0Y2hlc1swXSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGVycm9yQ29kZSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIG1hdGNoZXMgdGhlIHByb3BlciByYW5nZS4gSWYgbm90LCB0aHJvdyBwcm9wZXIgZXJyb3IgY29kZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VQYXR0ZXJuXG4gKiBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tWYWxpZFJhbmdlKFxuICAgIHZhbHVlOiBhbnksIHJhbmdlUGF0dGVybjogU3RyaW5nLCBlcnJvckNvZGU6IG51bWJlcikge1xuICBjb25zdCByYW5nZXMgPSByYW5nZVBhdHRlcm4uc3BsaXQoJyMnKTtcbiAgdmFsdWUgPSB2YWx1ZSAqIDEuMDtcbiAgaWYgKHZhbHVlID49IHJhbmdlc1swXSkge1xuICAgIGlmICgocmFuZ2VzWzFdID09PSAnKicpIHx8ICh2YWx1ZSA8PSByYW5nZXNbMV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihlcnJvckNvZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKGVycm9yQ29kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBBUEkgY21pIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VDTUkge1xuICBqc29uU3RyaW5nID0gZmFsc2U7XG4gICNpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgQmFzZUNNSSwganVzdCBtYXJrcyB0aGUgY2xhc3MgYXMgYWJzdHJhY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBCYXNlQ01JKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IEJhc2VDTUkgaW5zdGFuY2VzIGRpcmVjdGx5Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2luaXRpYWxpemVkXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2luaXRpYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuI2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNtaSAqLnNjb3JlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVNjb3JlIGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgKi5zY29yZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcmVfY2hpbGRyZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3JlX3JhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGludmFsaWRFcnJvckNvZGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGludmFsaWRUeXBlQ29kZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW52YWxpZFJhbmdlQ29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVjaW1hbFJlZ2V4XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHtcbiAgICAgICAgc2NvcmVfY2hpbGRyZW4sXG4gICAgICAgIHNjb3JlX3JhbmdlLFxuICAgICAgICBtYXgsXG4gICAgICAgIGludmFsaWRFcnJvckNvZGUsXG4gICAgICAgIGludmFsaWRUeXBlQ29kZSxcbiAgICAgICAgaW52YWxpZFJhbmdlQ29kZSxcbiAgICAgICAgZGVjaW1hbFJlZ2V4LFxuICAgICAgfSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLiNfY2hpbGRyZW4gPSBzY29yZV9jaGlsZHJlbiB8fFxuICAgICAgICBzY29ybTEyX2NvbnN0YW50cy5zY29yZV9jaGlsZHJlbjtcbiAgICB0aGlzLiNfc2NvcmVfcmFuZ2UgPSAhc2NvcmVfcmFuZ2UgPyBmYWxzZSA6IHNjb3JtMTJfcmVnZXguc2NvcmVfcmFuZ2U7XG4gICAgdGhpcy4jbWF4ID0gKG1heCB8fCBtYXggPT09ICcnKSA/IG1heCA6ICcxMDAnO1xuICAgIHRoaXMuI19pbnZhbGlkX2Vycm9yX2NvZGUgPSBpbnZhbGlkRXJyb3JDb2RlIHx8XG4gICAgICAgIHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUU7XG4gICAgdGhpcy4jX2ludmFsaWRfdHlwZV9jb2RlID0gaW52YWxpZFR5cGVDb2RlIHx8XG4gICAgICAgIHNjb3JtMTJfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSDtcbiAgICB0aGlzLiNfaW52YWxpZF9yYW5nZV9jb2RlID0gaW52YWxpZFJhbmdlQ29kZSB8fFxuICAgICAgICBzY29ybTEyX2Vycm9yX2NvZGVzLlZBTFVFX09VVF9PRl9SQU5HRTtcbiAgICB0aGlzLiNfZGVjaW1hbF9yZWdleCA9IGRlY2ltYWxSZWdleCB8fFxuICAgICAgICBzY29ybTEyX3JlZ2V4LkNNSURlY2ltYWw7XG4gIH1cblxuICAjX2NoaWxkcmVuO1xuICAjX3Njb3JlX3JhbmdlO1xuICAjX2ludmFsaWRfZXJyb3JfY29kZTtcbiAgI19pbnZhbGlkX3R5cGVfY29kZTtcbiAgI19pbnZhbGlkX3JhbmdlX2NvZGU7XG4gICNfZGVjaW1hbF9yZWdleDtcbiAgI3JhdyA9ICcnO1xuICAjbWluID0gJyc7XG4gICNtYXg7XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgX2NoaWxkcmVuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI19jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIF9jaGlsZHJlbi4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBfY2hpbGRyZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldCBfY2hpbGRyZW4oX2NoaWxkcmVuKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcih0aGlzLiNfaW52YWxpZF9lcnJvcl9jb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNyYXdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHJhdygpIHtcbiAgICByZXR1cm4gdGhpcy4jcmF3O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3Jhd1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcmF3XG4gICAqL1xuICBzZXQgcmF3KHJhdykge1xuICAgIGlmIChjaGVja1ZhbGlkRm9ybWF0KHJhdywgdGhpcy4jX2RlY2ltYWxfcmVnZXgsXG4gICAgICAgIHRoaXMuI19pbnZhbGlkX3R5cGVfY29kZSkgJiZcbiAgICAgICAgKCF0aGlzLiNfc2NvcmVfcmFuZ2UgfHxcbiAgICAgICAgICAgIGNoZWNrVmFsaWRSYW5nZShyYXcsIHRoaXMuI19zY29yZV9yYW5nZSxcbiAgICAgICAgICAgICAgICB0aGlzLiNfaW52YWxpZF9yYW5nZV9jb2RlKSkpIHtcbiAgICAgIHRoaXMuI3JhdyA9IHJhdztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbWluXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBtaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI21pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNtaW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pblxuICAgKi9cbiAgc2V0IG1pbihtaW4pIHtcbiAgICBpZiAoY2hlY2tWYWxpZEZvcm1hdChtaW4sIHRoaXMuI19kZWNpbWFsX3JlZ2V4LFxuICAgICAgICB0aGlzLiNfaW52YWxpZF90eXBlX2NvZGUpICYmXG4gICAgICAgICghdGhpcy4jX3Njb3JlX3JhbmdlIHx8XG4gICAgICAgICAgICBjaGVja1ZhbGlkUmFuZ2UobWluLCB0aGlzLiNfc2NvcmVfcmFuZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy4jX2ludmFsaWRfcmFuZ2VfY29kZSkpKSB7XG4gICAgICB0aGlzLiNtaW4gPSBtaW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI21heFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbWF4KCkge1xuICAgIHJldHVybiB0aGlzLiNtYXg7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjbWF4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXhcbiAgICovXG4gIHNldCBtYXgobWF4KSB7XG4gICAgaWYgKGNoZWNrVmFsaWRGb3JtYXQobWF4LCB0aGlzLiNfZGVjaW1hbF9yZWdleCxcbiAgICAgICAgdGhpcy4jX2ludmFsaWRfdHlwZV9jb2RlKSAmJlxuICAgICAgICAoIXRoaXMuI19zY29yZV9yYW5nZSB8fFxuICAgICAgICAgICAgY2hlY2tWYWxpZFJhbmdlKG1heCwgdGhpcy4jX3Njb3JlX3JhbmdlLFxuICAgICAgICAgICAgICAgIHRoaXMuI19pbnZhbGlkX3JhbmdlX2NvZGUpKSkge1xuICAgICAgdGhpcy4jbWF4ID0gbWF4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yICouc2NvcmVcbiAgICogQHJldHVybiB7e21pbjogc3RyaW5nLCBtYXg6IHN0cmluZywgcmF3OiBzdHJpbmd9fVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3Jhdyc6IHRoaXMucmF3LFxuICAgICAgJ21pbic6IHRoaXMubWluLFxuICAgICAgJ21heCc6IHRoaXMubWF4LFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY21pICoubiBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlBcnJheSBleHRlbmRzIEJhc2VDTUkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgY21pICoubiBhcnJheXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaWxkcmVuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHtjaGlsZHJlbiwgZXJyb3JDb2RlfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4jX2NoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgdGhpcy4jZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuY2hpbGRBcnJheSA9IFtdO1xuICB9XG5cbiAgI2Vycm9yQ29kZTtcbiAgI19jaGlsZHJlbjtcblxuICAvKipcbiAgICogR2V0dGVyIGZvciBfY2hpbGRyZW5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCBfY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI19jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIF9jaGlsZHJlbi4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBfY2hpbGRyZW5cbiAgICovXG4gIHNldCBfY2hpbGRyZW4oX2NoaWxkcmVuKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcih0aGlzLiNlcnJvckNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgX2NvdW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBfY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRBcnJheS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciBfY291bnQuIEp1c3QgdGhyb3dzIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge251bWJlcn0gX2NvdW50XG4gICAqL1xuICBzZXQgX2NvdW50KF9jb3VudCkge1xuICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IodGhpcy4jZXJyb3JDb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yICoubiBhcnJheXNcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpICsgJyddID0gdGhpcy5jaGlsZEFycmF5W2ldO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQge1xuICBCYXNlQ01JLFxuICBjaGVja1ZhbGlkRm9ybWF0LFxuICBjaGVja1ZhbGlkUmFuZ2UsXG4gIENNSUFycmF5LFxuICBDTUlTY29yZSxcbn0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IEFQSUNvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMvYXBpX2NvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb2RlcyBmcm9tICcuLi9jb25zdGFudHMvZXJyb3JfY29kZXMnO1xuaW1wb3J0IFJlZ2V4IGZyb20gJy4uL2NvbnN0YW50cy9yZWdleCc7XG5pbXBvcnQge1ZhbGlkYXRpb25FcnJvcn0gZnJvbSAnLi4vZXhjZXB0aW9ucyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY29uc3Qgc2Nvcm0xMl9jb25zdGFudHMgPSBBUElDb25zdGFudHMuc2Nvcm0xMjtcbmNvbnN0IHNjb3JtMTJfcmVnZXggPSBSZWdleC5zY29ybTEyO1xuY29uc3Qgc2Nvcm0xMl9lcnJvcl9jb2RlcyA9IEVycm9yQ29kZXMuc2Nvcm0xMjtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciB0aHJvd2luZyBSZWFkIE9ubHkgZXJyb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93UmVhZE9ubHlFcnJvcigpIHtcbiAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihzY29ybTEyX2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5UKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciB0aHJvd2luZyBXcml0ZSBPbmx5IGVycm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1dyaXRlT25seUVycm9yKCkge1xuICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHNjb3JtMTJfZXJyb3JfY29kZXMuV1JJVEVfT05MWV9FTEVNRU5UKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciB0aHJvd2luZyBJbnZhbGlkIFNldCBlcnJvclxuICovXG5mdW5jdGlvbiB0aHJvd0ludmFsaWRWYWx1ZUVycm9yKCkge1xuICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUpO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QsIG5vIHJlYXNvbiB0byBoYXZlIHRvIHBhc3MgdGhlIHNhbWUgZXJyb3IgY29kZXMgZXZlcnkgdGltZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ2V4UGF0dGVyblxuICogQHBhcmFtIHtib29sZWFufSBhbGxvd0VtcHR5U3RyaW5nXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sxMlZhbGlkRm9ybWF0KFxuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgcmVnZXhQYXR0ZXJuOiBTdHJpbmcsXG4gICAgYWxsb3dFbXB0eVN0cmluZz86IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGNoZWNrVmFsaWRGb3JtYXQodmFsdWUsIHJlZ2V4UGF0dGVybixcbiAgICAgIHNjb3JtMTJfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCwgYWxsb3dFbXB0eVN0cmluZyk7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCwgbm8gcmVhc29uIHRvIGhhdmUgdG8gcGFzcyB0aGUgc2FtZSBlcnJvciBjb2RlcyBldmVyeSB0aW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmFuZ2VQYXR0ZXJuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGFsbG93RW1wdHlTdHJpbmdcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjazEyVmFsaWRSYW5nZShcbiAgICB2YWx1ZTogYW55LFxuICAgIHJhbmdlUGF0dGVybjogU3RyaW5nLFxuICAgIGFsbG93RW1wdHlTdHJpbmc/OiBib29sZWFuKSB7XG4gIHJldHVybiBjaGVja1ZhbGlkUmFuZ2UodmFsdWUsIHJhbmdlUGF0dGVybixcbiAgICAgIHNjb3JtMTJfZXJyb3JfY29kZXMuVkFMVUVfT1VUX09GX1JBTkdFLCBhbGxvd0VtcHR5U3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIGNtaSBvYmplY3QgZm9yIFNDT1JNIDEuMlxuICovXG5leHBvcnQgY2xhc3MgQ01JIGV4dGVuZHMgQmFzZUNNSSB7XG4gICNfY2hpbGRyZW4gPSAnJztcbiAgI192ZXJzaW9uID0gJzMuNCc7XG4gICNsYXVuY2hfZGF0YSA9ICcnO1xuICAjY29tbWVudHMgPSAnJztcbiAgI2NvbW1lbnRzX2Zyb21fbG1zID0gJyc7XG5cbiAgc3R1ZGVudF9kYXRhID0gbnVsbDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIHRoZSBTQ09STSAxLjIgY21pIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY21pX2NoaWxkcmVuXG4gICAqIEBwYXJhbSB7KENNSVN0dWRlbnREYXRhfEFJQ0NDTUlTdHVkZW50RGF0YSl9IHN0dWRlbnRfZGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRpYWxpemVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjbWlfY2hpbGRyZW4sIHN0dWRlbnRfZGF0YSwgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKGluaXRpYWxpemVkKSB0aGlzLmluaXRpYWxpemUoKTtcblxuICAgIHRoaXMuI19jaGlsZHJlbiA9IGNtaV9jaGlsZHJlbiA/XG4gICAgICAgIGNtaV9jaGlsZHJlbiA6XG4gICAgICAgIHNjb3JtMTJfY29uc3RhbnRzLmNtaV9jaGlsZHJlbjtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ01JQ29yZSgpO1xuICAgIHRoaXMub2JqZWN0aXZlcyA9IG5ldyBDTUlPYmplY3RpdmVzKCk7XG4gICAgdGhpcy5zdHVkZW50X2RhdGEgPSBzdHVkZW50X2RhdGEgPyBzdHVkZW50X2RhdGEgOiBuZXcgQ01JU3R1ZGVudERhdGEoKTtcbiAgICB0aGlzLnN0dWRlbnRfcHJlZmVyZW5jZSA9IG5ldyBDTUlTdHVkZW50UHJlZmVyZW5jZSgpO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25zID0gbmV3IENNSUludGVyYWN0aW9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmNvcmU/LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9iamVjdGl2ZXM/LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnN0dWRlbnRfZGF0YT8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuc3R1ZGVudF9wcmVmZXJlbmNlPy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5pbnRlcmFjdGlvbnM/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaVxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIHN1c3BlbmRfZGF0YTogc3RyaW5nLFxuICAgKiAgICAgIGxhdW5jaF9kYXRhOiBzdHJpbmcsXG4gICAqICAgICAgY29tbWVudHM6IHN0cmluZyxcbiAgICogICAgICBjb21tZW50c19mcm9tX2xtczogc3RyaW5nLFxuICAgKiAgICAgIGNvcmU6IENNSUNvcmUsXG4gICAqICAgICAgb2JqZWN0aXZlczogQ01JT2JqZWN0aXZlcyxcbiAgICogICAgICBzdHVkZW50X2RhdGE6IENNSVN0dWRlbnREYXRhLFxuICAgKiAgICAgIHN0dWRlbnRfcHJlZmVyZW5jZTogQ01JU3R1ZGVudFByZWZlcmVuY2UsXG4gICAqICAgICAgaW50ZXJhY3Rpb25zOiBDTUlJbnRlcmFjdGlvbnNcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3N1c3BlbmRfZGF0YSc6IHRoaXMuc3VzcGVuZF9kYXRhLFxuICAgICAgJ2xhdW5jaF9kYXRhJzogdGhpcy5sYXVuY2hfZGF0YSxcbiAgICAgICdjb21tZW50cyc6IHRoaXMuY29tbWVudHMsXG4gICAgICAnY29tbWVudHNfZnJvbV9sbXMnOiB0aGlzLmNvbW1lbnRzX2Zyb21fbG1zLFxuICAgICAgJ2NvcmUnOiB0aGlzLmNvcmUsXG4gICAgICAnb2JqZWN0aXZlcyc6IHRoaXMub2JqZWN0aXZlcyxcbiAgICAgICdzdHVkZW50X2RhdGEnOiB0aGlzLnN0dWRlbnRfZGF0YSxcbiAgICAgICdzdHVkZW50X3ByZWZlcmVuY2UnOiB0aGlzLnN0dWRlbnRfcHJlZmVyZW5jZSxcbiAgICAgICdpbnRlcmFjdGlvbnMnOiB0aGlzLmludGVyYWN0aW9ucyxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNfdmVyc2lvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgX3ZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI192ZXJzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI192ZXJzaW9uLiBKdXN0IHRocm93cyBhbiBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IF92ZXJzaW9uXG4gICAqL1xuICBzZXQgX3ZlcnNpb24oX3ZlcnNpb24pIHtcbiAgICB0aHJvd0ludmFsaWRWYWx1ZUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjX2NoaWxkcmVuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBfY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI19jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNfdmVyc2lvbi4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBfY2hpbGRyZW5cbiAgICovXG4gIHNldCBfY2hpbGRyZW4oX2NoaWxkcmVuKSB7XG4gICAgdGhyb3dJbnZhbGlkVmFsdWVFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3N1c3BlbmRfZGF0YVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgc3VzcGVuZF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmNvcmU/LnN1c3BlbmRfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNzdXNwZW5kX2RhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1c3BlbmRfZGF0YVxuICAgKi9cbiAgc2V0IHN1c3BlbmRfZGF0YShzdXNwZW5kX2RhdGEpIHtcbiAgICBpZiAodGhpcy5jb3JlKSB7XG4gICAgICB0aGlzLmNvcmUuc3VzcGVuZF9kYXRhID0gc3VzcGVuZF9kYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsYXVuY2hfZGF0YVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGF1bmNoX2RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xhdW5jaF9kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xhdW5jaF9kYXRhLiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhdW5jaF9kYXRhXG4gICAqL1xuICBzZXQgbGF1bmNoX2RhdGEobGF1bmNoX2RhdGEpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI2xhdW5jaF9kYXRhID0gbGF1bmNoX2RhdGEgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNjb21tZW50c1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgY29tbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbW1lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NvbW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c1xuICAgKi9cbiAgc2V0IGNvbW1lbnRzKGNvbW1lbnRzKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChjb21tZW50cywgc2Nvcm0xMl9yZWdleC5DTUlTdHJpbmc0MDk2KSkge1xuICAgICAgdGhpcy4jY29tbWVudHMgPSBjb21tZW50cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjY29tbWVudHNfZnJvbV9sbXNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGNvbW1lbnRzX2Zyb21fbG1zKCkge1xuICAgIHJldHVybiB0aGlzLiNjb21tZW50c19mcm9tX2xtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNjb21tZW50c19mcm9tX2xtcy4gQ2FuIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c19mcm9tX2xtc1xuICAgKi9cbiAgc2V0IGNvbW1lbnRzX2Zyb21fbG1zKGNvbW1lbnRzX2Zyb21fbG1zKSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiNjb21tZW50c19mcm9tX2xtcyA9IGNvbW1lbnRzX2Zyb21fbG1zIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgY3VycmVudCBzZXNzaW9uIHRpbWUgdG8gdGhlIGV4aXN0aW5nIHRvdGFsIHRpbWUuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEN1cnJlbnRUb3RhbFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5nZXRDdXJyZW50VG90YWxUaW1lKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIGNtaS5jb3JlIG9iamVjdFxuICogQGV4dGVuZHMgQmFzZUNNSVxuICovXG5jbGFzcyBDTUlDb3JlIGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmNvcmVcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IENNSVNjb3JlKFxuICAgICAgICB7XG4gICAgICAgICAgc2NvcmVfY2hpbGRyZW46IHNjb3JtMTJfY29uc3RhbnRzLnNjb3JlX2NoaWxkcmVuLFxuICAgICAgICAgIHNjb3JlX3JhbmdlOiBzY29ybTEyX3JlZ2V4LnNjb3JlX3JhbmdlLFxuICAgICAgICAgIGludmFsaWRFcnJvckNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUsXG4gICAgICAgICAgaW52YWxpZFR5cGVDb2RlOiBzY29ybTEyX2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gsXG4gICAgICAgICAgaW52YWxpZFJhbmdlQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5WQUxVRV9PVVRfT0ZfUkFOR0UsXG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnNjb3JlPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAjX2NoaWxkcmVuID0gc2Nvcm0xMl9jb25zdGFudHMuY29yZV9jaGlsZHJlbjtcbiAgI3N0dWRlbnRfaWQgPSAnJztcbiAgI3N0dWRlbnRfbmFtZSA9ICcnO1xuICAjbGVzc29uX2xvY2F0aW9uID0gJyc7XG4gICNjcmVkaXQgPSAnJztcbiAgI2xlc3Nvbl9zdGF0dXMgPSAnbm90IGF0dGVtcHRlZCc7XG4gICNlbnRyeSA9ICcnO1xuICAjdG90YWxfdGltZSA9ICcnO1xuICAjbGVzc29uX21vZGUgPSAnbm9ybWFsJztcbiAgI2V4aXQgPSAnJztcbiAgI3Nlc3Npb25fdGltZSA9ICcwMDowMDowMCc7XG4gICNzdXNwZW5kX2RhdGEgPSAnJztcblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjX2NoaWxkcmVuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI19jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNfY2hpbGRyZW4uIEp1c3QgdGhyb3dzIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gX2NoaWxkcmVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXQgX2NoaWxkcmVuKF9jaGlsZHJlbikge1xuICAgIHRocm93SW52YWxpZFZhbHVlRXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzdHVkZW50X2lkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBzdHVkZW50X2lkKCkge1xuICAgIHJldHVybiB0aGlzLiNzdHVkZW50X2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0dWRlbnRfaWQuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3R1ZGVudF9pZFxuICAgKi9cbiAgc2V0IHN0dWRlbnRfaWQoc3R1ZGVudF9pZCkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID8gdGhpcy4jc3R1ZGVudF9pZCA9IHN0dWRlbnRfaWQgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzdHVkZW50X25hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHN0dWRlbnRfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3R1ZGVudF9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0dWRlbnRfbmFtZS4gQ2FuIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHVkZW50X25hbWVcbiAgICovXG4gIHNldCBzdHVkZW50X25hbWUoc3R1ZGVudF9uYW1lKSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiNzdHVkZW50X25hbWUgPSBzdHVkZW50X25hbWUgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsZXNzb25fbG9jYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxlc3Nvbl9sb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVzc29uX2xvY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xlc3Nvbl9sb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGVzc29uX2xvY2F0aW9uXG4gICAqL1xuICBzZXQgbGVzc29uX2xvY2F0aW9uKGxlc3Nvbl9sb2NhdGlvbikge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQobGVzc29uX2xvY2F0aW9uLCBzY29ybTEyX3JlZ2V4LkNNSVN0cmluZzI1NiwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuI2xlc3Nvbl9sb2NhdGlvbiA9IGxlc3Nvbl9sb2NhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjY3JlZGl0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjcmVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NyZWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNjcmVkaXQuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3JlZGl0XG4gICAqL1xuICBzZXQgY3JlZGl0KGNyZWRpdCkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID8gdGhpcy4jY3JlZGl0ID0gY3JlZGl0IDogdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGVzc29uX3N0YXR1c1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGVzc29uX3N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVzc29uX3N0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsZXNzb25fc3RhdHVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsZXNzb25fc3RhdHVzXG4gICAqL1xuICBzZXQgbGVzc29uX3N0YXR1cyhsZXNzb25fc3RhdHVzKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChsZXNzb25fc3RhdHVzLCBzY29ybTEyX3JlZ2V4LkNNSVN0YXR1cykpIHtcbiAgICAgIHRoaXMuI2xlc3Nvbl9zdGF0dXMgPSBsZXNzb25fc3RhdHVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNlbnRyeVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VudHJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2VudHJ5LiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVudHJ5XG4gICAqL1xuICBzZXQgZW50cnkoZW50cnkpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI2VudHJ5ID0gZW50cnkgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0b3RhbF90aW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0b3RhbF90aW1lKCkge1xuICAgIHJldHVybiB0aGlzLiN0b3RhbF90aW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3RvdGFsX3RpbWUuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG90YWxfdGltZVxuICAgKi9cbiAgc2V0IHRvdGFsX3RpbWUodG90YWxfdGltZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID8gdGhpcy4jdG90YWxfdGltZSA9IHRvdGFsX3RpbWUgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsZXNzb25fbW9kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGVzc29uX21vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlc3Nvbl9tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xlc3Nvbl9tb2RlLiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxlc3Nvbl9tb2RlXG4gICAqL1xuICBzZXQgbGVzc29uX21vZGUobGVzc29uX21vZGUpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI2xlc3Nvbl9tb2RlID0gbGVzc29uX21vZGUgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNleGl0LiBTaG91bGQgb25seSBiZSBjYWxsZWQgZHVyaW5nIEpTT04gZXhwb3J0LlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0IGV4aXQoKSB7XG4gICAgcmV0dXJuICghdGhpcy5qc29uU3RyaW5nKSA/IHRocm93V3JpdGVPbmx5RXJyb3IoKSA6IHRoaXMuI2V4aXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjZXhpdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhpdFxuICAgKi9cbiAgc2V0IGV4aXQoZXhpdCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoZXhpdCwgc2Nvcm0xMl9yZWdleC5DTUlFeGl0LCB0cnVlKSkge1xuICAgICAgdGhpcy4jZXhpdCA9IGV4aXQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3Nlc3Npb25fdGltZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGR1cmluZyBKU09OIGV4cG9ydC5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCBzZXNzaW9uX3RpbWUoKSB7XG4gICAgcmV0dXJuICghdGhpcy5qc29uU3RyaW5nKSA/IHRocm93V3JpdGVPbmx5RXJyb3IoKSA6IHRoaXMuI3Nlc3Npb25fdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNzZXNzaW9uX3RpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlc3Npb25fdGltZVxuICAgKi9cbiAgc2V0IHNlc3Npb25fdGltZShzZXNzaW9uX3RpbWUpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHNlc3Npb25fdGltZSwgc2Nvcm0xMl9yZWdleC5DTUlUaW1lc3BhbikpIHtcbiAgICAgIHRoaXMuI3Nlc3Npb25fdGltZSA9IHNlc3Npb25fdGltZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjc3VzcGVuZF9kYXRhXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBzdXNwZW5kX2RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N1c3BlbmRfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNzdXNwZW5kX2RhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1c3BlbmRfZGF0YVxuICAgKi9cbiAgc2V0IHN1c3BlbmRfZGF0YShzdXNwZW5kX2RhdGEpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHN1c3BlbmRfZGF0YSwgc2Nvcm0xMl9yZWdleC5DTUlTdHJpbmc0MDk2LCB0cnVlKSkge1xuICAgICAgdGhpcy4jc3VzcGVuZF9kYXRhID0gc3VzcGVuZF9kYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBjdXJyZW50IHNlc3Npb24gdGltZSB0byB0aGUgZXhpc3RpbmcgdG90YWwgdGltZS5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0Q3VycmVudFRvdGFsVGltZSgpIHtcbiAgICByZXR1cm4gVXRpbGl0aWVzLmFkZEhITU1TU1RpbWVTdHJpbmdzKFxuICAgICAgICB0aGlzLiN0b3RhbF90aW1lLFxuICAgICAgICB0aGlzLiNzZXNzaW9uX3RpbWUsXG4gICAgICAgIG5ldyBSZWdFeHAoc2Nvcm0xMl9yZWdleC5DTUlUaW1lc3BhbiksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5jb3JlXG4gICAqXG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgc3R1ZGVudF9uYW1lOiBzdHJpbmcsXG4gICAqICAgICAgZW50cnk6IHN0cmluZyxcbiAgICogICAgICBleGl0OiBzdHJpbmcsXG4gICAqICAgICAgc2NvcmU6IENNSVNjb3JlLFxuICAgKiAgICAgIHN0dWRlbnRfaWQ6IHN0cmluZyxcbiAgICogICAgICBsZXNzb25fbW9kZTogc3RyaW5nLFxuICAgKiAgICAgIGxlc3Nvbl9sb2NhdGlvbjogc3RyaW5nLFxuICAgKiAgICAgIGxlc3Nvbl9zdGF0dXM6IHN0cmluZyxcbiAgICogICAgICBjcmVkaXQ6IHN0cmluZyxcbiAgICogICAgICBzZXNzaW9uX3RpbWU6ICpcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3N0dWRlbnRfaWQnOiB0aGlzLnN0dWRlbnRfaWQsXG4gICAgICAnc3R1ZGVudF9uYW1lJzogdGhpcy5zdHVkZW50X25hbWUsXG4gICAgICAnbGVzc29uX2xvY2F0aW9uJzogdGhpcy5sZXNzb25fbG9jYXRpb24sXG4gICAgICAnY3JlZGl0JzogdGhpcy5jcmVkaXQsXG4gICAgICAnbGVzc29uX3N0YXR1cyc6IHRoaXMubGVzc29uX3N0YXR1cyxcbiAgICAgICdlbnRyeSc6IHRoaXMuZW50cnksXG4gICAgICAnbGVzc29uX21vZGUnOiB0aGlzLmxlc3Nvbl9tb2RlLFxuICAgICAgJ2V4aXQnOiB0aGlzLmV4aXQsXG4gICAgICAnc2Vzc2lvbl90aW1lJzogdGhpcy5zZXNzaW9uX3RpbWUsXG4gICAgICAnc2NvcmUnOiB0aGlzLnNjb3JlLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIFNDT1JNIDEuMidzIGNtaS5vYmplY3RpdmVzIG9iamVjdFxuICogQGV4dGVuZHMgQ01JQXJyYXlcbiAqL1xuY2xhc3MgQ01JT2JqZWN0aXZlcyBleHRlbmRzIENNSUFycmF5IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBjbWkub2JqZWN0aXZlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2hpbGRyZW46IHNjb3JtMTJfY29uc3RhbnRzLm9iamVjdGl2ZXNfY2hpbGRyZW4sXG4gICAgICBlcnJvckNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuSU5WQUxJRF9TRVRfVkFMVUUsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMS4yJ3MgY21pLnN0dWRlbnRfZGF0YSBvYmplY3RcbiAqIEBleHRlbmRzIEJhc2VDTUlcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVN0dWRlbnREYXRhIGV4dGVuZHMgQmFzZUNNSSB7XG4gICNfY2hpbGRyZW47XG4gICNtYXN0ZXJ5X3Njb3JlID0gJyc7XG4gICNtYXhfdGltZV9hbGxvd2VkID0gJyc7XG4gICN0aW1lX2xpbWl0X2FjdGlvbiA9ICcnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLnN0dWRlbnRfZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3R1ZGVudF9kYXRhX2NoaWxkcmVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdHVkZW50X2RhdGFfY2hpbGRyZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy4jX2NoaWxkcmVuID0gc3R1ZGVudF9kYXRhX2NoaWxkcmVuID9cbiAgICAgICAgc3R1ZGVudF9kYXRhX2NoaWxkcmVuIDpcbiAgICAgICAgc2Nvcm0xMl9jb25zdGFudHMuc3R1ZGVudF9kYXRhX2NoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI19jaGlsZHJlblxuICAgKiBAcmV0dXJuIHsqfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IF9jaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jX2NoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI19jaGlsZHJlbi4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBfY2hpbGRyZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldCBfY2hpbGRyZW4oX2NoaWxkcmVuKSB7XG4gICAgdGhyb3dJbnZhbGlkVmFsdWVFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI21hc3Rlcl9zY29yZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbWFzdGVyeV9zY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbWFzdGVyeV9zY29yZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNtYXN0ZXJfc2NvcmUuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFzdGVyeV9zY29yZVxuICAgKi9cbiAgc2V0IG1hc3Rlcnlfc2NvcmUobWFzdGVyeV9zY29yZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jbWFzdGVyeV9zY29yZSA9IG1hc3Rlcnlfc2NvcmUgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNtYXhfdGltZV9hbGxvd2VkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBtYXhfdGltZV9hbGxvd2VkKCkge1xuICAgIHJldHVybiB0aGlzLiNtYXhfdGltZV9hbGxvd2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI21heF90aW1lX2FsbG93ZWQuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF4X3RpbWVfYWxsb3dlZFxuICAgKi9cbiAgc2V0IG1heF90aW1lX2FsbG93ZWQobWF4X3RpbWVfYWxsb3dlZCkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jbWF4X3RpbWVfYWxsb3dlZCA9IG1heF90aW1lX2FsbG93ZWQgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0aW1lX2xpbWl0X2FjdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGltZV9saW1pdF9hY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbWVfbGltaXRfYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3RpbWVfbGltaXRfYWN0aW9uLiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWVfbGltaXRfYWN0aW9uXG4gICAqL1xuICBzZXQgdGltZV9saW1pdF9hY3Rpb24odGltZV9saW1pdF9hY3Rpb24pIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/XG4gICAgICAgIHRoaXMuI3RpbWVfbGltaXRfYWN0aW9uID0gdGltZV9saW1pdF9hY3Rpb24gOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5zdHVkZW50X2RhdGFcbiAgICpcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBtYXhfdGltZV9hbGxvd2VkOiBzdHJpbmcsXG4gICAqICAgICAgdGltZV9saW1pdF9hY3Rpb246IHN0cmluZyxcbiAgICogICAgICBtYXN0ZXJ5X3Njb3JlOiBzdHJpbmdcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ21hc3Rlcnlfc2NvcmUnOiB0aGlzLm1hc3Rlcnlfc2NvcmUsXG4gICAgICAnbWF4X3RpbWVfYWxsb3dlZCc6IHRoaXMubWF4X3RpbWVfYWxsb3dlZCxcbiAgICAgICd0aW1lX2xpbWl0X2FjdGlvbic6IHRoaXMudGltZV9saW1pdF9hY3Rpb24sXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMS4yJ3MgY21pLnN0dWRlbnRfcHJlZmVyZW5jZSBvYmplY3RcbiAqIEBleHRlbmRzIEJhc2VDTUlcbiAqL1xuZXhwb3J0IGNsYXNzIENNSVN0dWRlbnRQcmVmZXJlbmNlIGV4dGVuZHMgQmFzZUNNSSB7XG4gICNfY2hpbGRyZW47XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBjbWkuc3R1ZGVudF9wcmVmZXJlbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHVkZW50X3ByZWZlcmVuY2VfY2hpbGRyZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0dWRlbnRfcHJlZmVyZW5jZV9jaGlsZHJlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLiNfY2hpbGRyZW4gPSBzdHVkZW50X3ByZWZlcmVuY2VfY2hpbGRyZW4gP1xuICAgICAgICBzdHVkZW50X3ByZWZlcmVuY2VfY2hpbGRyZW4gOlxuICAgICAgICBzY29ybTEyX2NvbnN0YW50cy5zdHVkZW50X3ByZWZlcmVuY2VfY2hpbGRyZW47XG4gIH1cblxuICAjYXVkaW8gPSAnJztcbiAgI2xhbmd1YWdlID0gJyc7XG4gICNzcGVlZCA9ICcnO1xuICAjdGV4dCA9ICcnO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNfY2hpbGRyZW5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IF9jaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy4jX2NoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI19jaGlsZHJlbi4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBfY2hpbGRyZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldCBfY2hpbGRyZW4oX2NoaWxkcmVuKSB7XG4gICAgdGhyb3dJbnZhbGlkVmFsdWVFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2F1ZGlvXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBhdWRpbygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXVkaW87XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjYXVkaW9cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvXG4gICAqL1xuICBzZXQgYXVkaW8oYXVkaW8pIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KGF1ZGlvLCBzY29ybTEyX3JlZ2V4LkNNSVNJbnRlZ2VyKSAmJlxuICAgICAgICBjaGVjazEyVmFsaWRSYW5nZShhdWRpbywgc2Nvcm0xMl9yZWdleC5hdWRpb19yYW5nZSkpIHtcbiAgICAgIHRoaXMuI2F1ZGlvID0gYXVkaW87XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2xhbmd1YWdlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBsYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGFuZ3VhZ2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjbGFuZ3VhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAqL1xuICBzZXQgbGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KGxhbmd1YWdlLCBzY29ybTEyX3JlZ2V4LkNNSVN0cmluZzI1NikpIHtcbiAgICAgIHRoaXMuI2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3NwZWVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjc3BlZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNwZWVkXG4gICAqL1xuICBzZXQgc3BlZWQoc3BlZWQpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHNwZWVkLCBzY29ybTEyX3JlZ2V4LkNNSVNJbnRlZ2VyKSAmJlxuICAgICAgICBjaGVjazEyVmFsaWRSYW5nZShzcGVlZCwgc2Nvcm0xMl9yZWdleC5zcGVlZF9yYW5nZSkpIHtcbiAgICAgIHRoaXMuI3NwZWVkID0gc3BlZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3RleHRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RleHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQodGV4dCwgc2Nvcm0xMl9yZWdleC5DTUlTSW50ZWdlcikgJiZcbiAgICAgICAgY2hlY2sxMlZhbGlkUmFuZ2UodGV4dCwgc2Nvcm0xMl9yZWdleC50ZXh0X3JhbmdlKSkge1xuICAgICAgdGhpcy4jdGV4dCA9IHRleHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLnN0dWRlbnRfcHJlZmVyZW5jZVxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIGF1ZGlvOiBzdHJpbmcsXG4gICAqICAgICAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICogICAgICBzcGVlZDogc3RyaW5nLFxuICAgKiAgICAgIHRleHQ6IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnYXVkaW8nOiB0aGlzLmF1ZGlvLFxuICAgICAgJ2xhbmd1YWdlJzogdGhpcy5sYW5ndWFnZSxcbiAgICAgICdzcGVlZCc6IHRoaXMuc3BlZWQsXG4gICAgICAndGV4dCc6IHRoaXMudGV4dCxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAxLjIncyBjbWkuaW50ZXJhY3Rpb25zIG9iamVjdFxuICogQGV4dGVuZHMgQmFzZUNNSVxuICovXG5jbGFzcyBDTUlJbnRlcmFjdGlvbnMgZXh0ZW5kcyBDTUlBcnJheSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmludGVyYWN0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2hpbGRyZW46IHNjb3JtMTJfY29uc3RhbnRzLmludGVyYWN0aW9uc19jaGlsZHJlbixcbiAgICAgIGVycm9yQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5JTlZBTElEX1NFVF9WQUxVRSxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAxLjIncyBjbWkuaW50ZXJhY3Rpb25zLm4gb2JqZWN0XG4gKiBAZXh0ZW5kcyBCYXNlQ01JXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlJbnRlcmFjdGlvbnNPYmplY3QgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBjbWkuaW50ZXJhY3Rpb25zLm4gb2JqZWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vYmplY3RpdmVzID0gbmV3IENNSUFycmF5KHtcbiAgICAgIGVycm9yQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5JTlZBTElEX1NFVF9WQUxVRSxcbiAgICAgIGNoaWxkcmVuOiBzY29ybTEyX2NvbnN0YW50cy5vYmplY3RpdmVzX2NoaWxkcmVuLFxuICAgIH0pO1xuICAgIHRoaXMuY29ycmVjdF9yZXNwb25zZXMgPSBuZXcgQ01JQXJyYXkoe1xuICAgICAgZXJyb3JDb2RlOiBzY29ybTEyX2Vycm9yX2NvZGVzLklOVkFMSURfU0VUX1ZBTFVFLFxuICAgICAgY2hpbGRyZW46IHNjb3JtMTJfY29uc3RhbnRzLmNvcnJlY3RfcmVzcG9uc2VzX2NoaWxkcmVuLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLm9iamVjdGl2ZXM/LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmNvcnJlY3RfcmVzcG9uc2VzPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAjaWQgPSAnJztcbiAgI3RpbWUgPSAnJztcbiAgI3R5cGUgPSAnJztcbiAgI3dlaWdodGluZyA9ICcnO1xuICAjc3R1ZGVudF9yZXNwb25zZSA9ICcnO1xuICAjcmVzdWx0ID0gJyc7XG4gICNsYXRlbmN5ID0gJyc7XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2lkLiBTaG91bGQgb25seSBiZSBjYWxsZWQgZHVyaW5nIEpTT04gZXhwb3J0LlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiNpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIHNldCBpZChpZCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoaWQsIHNjb3JtMTJfcmVnZXguQ01JSWRlbnRpZmllcikpIHtcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3RpbWUuIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBkdXJpbmcgSlNPTiBleHBvcnQuXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQgdGltZSgpIHtcbiAgICByZXR1cm4gKCF0aGlzLmpzb25TdHJpbmcpID8gdGhyb3dXcml0ZU9ubHlFcnJvcigpIDogdGhpcy4jdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gICAqL1xuICBzZXQgdGltZSh0aW1lKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh0aW1lLCBzY29ybTEyX3JlZ2V4LkNNSVRpbWUpKSB7XG4gICAgICB0aGlzLiN0aW1lID0gdGltZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdHlwZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGR1cmluZyBKU09OIGV4cG9ydC5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiN0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3R5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICovXG4gIHNldCB0eXBlKHR5cGUpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHR5cGUsIHNjb3JtMTJfcmVnZXguQ01JVHlwZSkpIHtcbiAgICAgIHRoaXMuI3R5cGUgPSB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN3ZWlnaHRpbmcuIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBkdXJpbmcgSlNPTiBleHBvcnQuXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQgd2VpZ2h0aW5nKCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgP1xuICAgICAgICB0aHJvd1dyaXRlT25seUVycm9yKCkgOlxuICAgICAgICB0aGlzLiN3ZWlnaHRpbmc7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjd2VpZ2h0aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3ZWlnaHRpbmdcbiAgICovXG4gIHNldCB3ZWlnaHRpbmcod2VpZ2h0aW5nKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdCh3ZWlnaHRpbmcsIHNjb3JtMTJfcmVnZXguQ01JRGVjaW1hbCkgJiZcbiAgICAgICAgY2hlY2sxMlZhbGlkUmFuZ2Uod2VpZ2h0aW5nLCBzY29ybTEyX3JlZ2V4LndlaWdodGluZ19yYW5nZSkpIHtcbiAgICAgIHRoaXMuI3dlaWdodGluZyA9IHdlaWdodGluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjc3R1ZGVudF9yZXNwb25zZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGR1cmluZyBKU09OIGV4cG9ydC5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCBzdHVkZW50X3Jlc3BvbnNlKCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiNzdHVkZW50X3Jlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0dWRlbnRfcmVzcG9uc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0dWRlbnRfcmVzcG9uc2VcbiAgICovXG4gIHNldCBzdHVkZW50X3Jlc3BvbnNlKHN0dWRlbnRfcmVzcG9uc2UpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KHN0dWRlbnRfcmVzcG9uc2UsIHNjb3JtMTJfcmVnZXguQ01JRmVlZGJhY2ssIHRydWUpKSB7XG4gICAgICB0aGlzLiNzdHVkZW50X3Jlc3BvbnNlID0gc3R1ZGVudF9yZXNwb25zZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcmVzdWx0LiBTaG91bGQgb25seSBiZSBjYWxsZWQgZHVyaW5nIEpTT04gZXhwb3J0LlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gKCF0aGlzLmpzb25TdHJpbmcpID8gdGhyb3dXcml0ZU9ubHlFcnJvcigpIDogdGhpcy4jcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3Jlc3VsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzdWx0XG4gICAqL1xuICBzZXQgcmVzdWx0KHJlc3VsdCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQocmVzdWx0LCBzY29ybTEyX3JlZ2V4LkNNSVJlc3VsdCkpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGF0ZW5jeS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGR1cmluZyBKU09OIGV4cG9ydC5cbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCBsYXRlbmN5KCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiNsYXRlbmN5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xhdGVuY3lcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGVuY3lcbiAgICovXG4gIHNldCBsYXRlbmN5KGxhdGVuY3kpIHtcbiAgICBpZiAoY2hlY2sxMlZhbGlkRm9ybWF0KGxhdGVuY3ksIHNjb3JtMTJfcmVnZXguQ01JVGltZXNwYW4pKSB7XG4gICAgICB0aGlzLiNsYXRlbmN5ID0gbGF0ZW5jeTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWkuaW50ZXJhY3Rpb25zLm5cbiAgICpcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBpZDogc3RyaW5nLFxuICAgKiAgICAgIHRpbWU6IHN0cmluZyxcbiAgICogICAgICB0eXBlOiBzdHJpbmcsXG4gICAqICAgICAgd2VpZ2h0aW5nOiBzdHJpbmcsXG4gICAqICAgICAgc3R1ZGVudF9yZXNwb25zZTogc3RyaW5nLFxuICAgKiAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgKiAgICAgIGxhdGVuY3k6IHN0cmluZyxcbiAgICogICAgICBvYmplY3RpdmVzOiBDTUlBcnJheSxcbiAgICogICAgICBjb3JyZWN0X3Jlc3BvbnNlczogQ01JQXJyYXlcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ2lkJzogdGhpcy5pZCxcbiAgICAgICd0aW1lJzogdGhpcy50aW1lLFxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXG4gICAgICAnd2VpZ2h0aW5nJzogdGhpcy53ZWlnaHRpbmcsXG4gICAgICAnc3R1ZGVudF9yZXNwb25zZSc6IHRoaXMuc3R1ZGVudF9yZXNwb25zZSxcbiAgICAgICdyZXN1bHQnOiB0aGlzLnJlc3VsdCxcbiAgICAgICdsYXRlbmN5JzogdGhpcy5sYXRlbmN5LFxuICAgICAgJ29iamVjdGl2ZXMnOiB0aGlzLm9iamVjdGl2ZXMsXG4gICAgICAnY29ycmVjdF9yZXNwb25zZXMnOiB0aGlzLmNvcnJlY3RfcmVzcG9uc2VzLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIFNDT1JNIDEuMidzIGNtaS5vYmplY3RpdmVzLm4gb2JqZWN0XG4gKiBAZXh0ZW5kcyBCYXNlQ01JXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlPYmplY3RpdmVzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLm9iamVjdGl2ZXMublxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NvcmUgPSBuZXcgQ01JU2NvcmUoXG4gICAgICAgIHtcbiAgICAgICAgICBzY29yZV9jaGlsZHJlbjogc2Nvcm0xMl9jb25zdGFudHMuc2NvcmVfY2hpbGRyZW4sXG4gICAgICAgICAgc2NvcmVfcmFuZ2U6IHNjb3JtMTJfcmVnZXguc2NvcmVfcmFuZ2UsXG4gICAgICAgICAgaW52YWxpZEVycm9yQ29kZTogc2Nvcm0xMl9lcnJvcl9jb2Rlcy5JTlZBTElEX1NFVF9WQUxVRSxcbiAgICAgICAgICBpbnZhbGlkVHlwZUNvZGU6IHNjb3JtMTJfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCxcbiAgICAgICAgICBpbnZhbGlkUmFuZ2VDb2RlOiBzY29ybTEyX2Vycm9yX2NvZGVzLlZBTFVFX09VVF9PRl9SQU5HRSxcbiAgICAgICAgfSk7XG4gIH1cblxuICAjaWQgPSAnJztcbiAgI3N0YXR1cyA9ICcnO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNpZFxuICAgKiBAcmV0dXJuIHtcIlwifVxuICAgKi9cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIHNldCBpZChpZCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoaWQsIHNjb3JtMTJfcmVnZXguQ01JSWRlbnRpZmllcikpIHtcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3N0YXR1c1xuICAgKiBAcmV0dXJuIHtcIlwifVxuICAgKi9cbiAgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N0YXR1c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAqL1xuICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoc3RhdHVzLCBzY29ybTEyX3JlZ2V4LkNNSVN0YXR1czIpKSB7XG4gICAgICB0aGlzLiNzdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLm9iamVjdGl2ZXMublxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIGlkOiBzdHJpbmcsXG4gICAqICAgICAgc3RhdHVzOiBzdHJpbmcsXG4gICAqICAgICAgc2NvcmU6IENNSVNjb3JlXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdpZCc6IHRoaXMuaWQsXG4gICAgICAnc3RhdHVzJzogdGhpcy5zdGF0dXMsXG4gICAgICAnc2NvcmUnOiB0aGlzLnNjb3JlLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIFNDT1JNIDEuMidzIGNtaS5pbnRlcmFjdGlvbnMubi5vYmplY3RpdmVzLm4gb2JqZWN0XG4gKiBAZXh0ZW5kcyBCYXNlQ01JXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlJbnRlcmFjdGlvbnNPYmplY3RpdmVzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmludGVyYWN0aW9ucy5uLm9iamVjdGl2ZXMublxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gICNpZCA9ICcnO1xuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNpZFxuICAgKiBAcmV0dXJuIHtcIlwifVxuICAgKi9cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIHNldCBpZChpZCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoaWQsIHNjb3JtMTJfcmVnZXguQ01JSWRlbnRpZmllcikpIHtcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLmludGVyYWN0aW9ucy5uLm9iamVjdGl2ZXMublxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIGlkOiBzdHJpbmdcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ2lkJzogdGhpcy5pZCxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAxLjIncyBjbWkuaW50ZXJhY3Rpb25zLmNvcnJlY3RfcmVzcG9uc2VzLm4gb2JqZWN0XG4gKiBAZXh0ZW5kcyBCYXNlQ01JXG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlJbnRlcmFjdGlvbnNDb3JyZWN0UmVzcG9uc2VzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmludGVyYWN0aW9ucy5jb3JyZWN0X3Jlc3BvbnNlcy5uXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgI3BhdHRlcm4gPSAnJztcblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcGF0dGVyblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gKCF0aGlzLmpzb25TdHJpbmcpID8gdGhyb3dXcml0ZU9ubHlFcnJvcigpIDogdGhpcy4jcGF0dGVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNwYXR0ZXJuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gICAqL1xuICBzZXQgcGF0dGVybihwYXR0ZXJuKSB7XG4gICAgaWYgKGNoZWNrMTJWYWxpZEZvcm1hdChwYXR0ZXJuLCBzY29ybTEyX3JlZ2V4LkNNSUZlZWRiYWNrLCB0cnVlKSkge1xuICAgICAgdGhpcy4jcGF0dGVybiA9IHBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLmludGVyYWN0aW9ucy5jb3JyZWN0X3Jlc3BvbnNlcy5uXG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgcGF0dGVybjogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdwYXR0ZXJuJzogdGhpcy5wYXR0ZXJuLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIEFJQ0MgTmF2aWdhdGlvbiBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIE5BViBleHRlbmRzIEJhc2VDTUkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIE5BViBvYmplY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAjZXZlbnQgPSAnJztcblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjZXZlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGV2ZW50KCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiNldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICovXG4gIHNldCBldmVudChldmVudCkge1xuICAgIGlmIChjaGVjazEyVmFsaWRGb3JtYXQoZXZlbnQsIHNjb3JtMTJfcmVnZXguTkFWRXZlbnQpKSB7XG4gICAgICB0aGlzLiNldmVudCA9IGV2ZW50O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIG5hdiBvYmplY3RcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBldmVudDogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdldmVudCc6IHRoaXMuZXZlbnQsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5pbXBvcnQge1xuICBCYXNlQ01JLFxuICBjaGVja1ZhbGlkRm9ybWF0LFxuICBjaGVja1ZhbGlkUmFuZ2UsXG4gIENNSUFycmF5LFxuICBDTUlTY29yZSxcbn0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IEFQSUNvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMvYXBpX2NvbnN0YW50cyc7XG5pbXBvcnQgUmVnZXggZnJvbSAnLi4vY29uc3RhbnRzL3JlZ2V4JztcbmltcG9ydCBFcnJvckNvZGVzIGZyb20gJy4uL2NvbnN0YW50cy9lcnJvcl9jb2Rlcyc7XG5pbXBvcnQgUmVzcG9uc2VzIGZyb20gJy4uL2NvbnN0YW50cy9yZXNwb25zZV9jb25zdGFudHMnO1xuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3J9IGZyb20gJy4uL2V4Y2VwdGlvbnMnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jb25zdCBzY29ybTIwMDRfY29uc3RhbnRzID0gQVBJQ29uc3RhbnRzLnNjb3JtMjAwNDtcbmNvbnN0IHNjb3JtMjAwNF9lcnJvcl9jb2RlcyA9IEVycm9yQ29kZXMuc2Nvcm0yMDA0O1xuY29uc3QgbGVhcm5lcl9yZXNwb25zZXMgPSBSZXNwb25zZXMubGVhcm5lcjtcblxuY29uc3Qgc2Nvcm0yMDA0X3JlZ2V4ID0gUmVnZXguc2Nvcm0yMDA0O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHRocm93aW5nIFJlYWQgT25seSBlcnJvclxuICovXG5mdW5jdGlvbiB0aHJvd1JlYWRPbmx5RXJyb3IoKSB7XG4gIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5UKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciB0aHJvd2luZyBXcml0ZSBPbmx5IGVycm9yXG4gKi9cbmZ1bmN0aW9uIHRocm93V3JpdGVPbmx5RXJyb3IoKSB7XG4gIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3Ioc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLldSSVRFX09OTFlfRUxFTUVOVCk7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCBmb3IgdGhyb3dpbmcgVHlwZSBNaXNtYXRjaCBlcnJvclxuICovXG5mdW5jdGlvbiB0aHJvd1R5cGVNaXNtYXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5UWVBFX01JU01BVENIKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kLCBubyByZWFzb24gdG8gaGF2ZSB0byBwYXNzIHRoZSBzYW1lIGVycm9yIGNvZGVzIGV2ZXJ5IHRpbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdleFBhdHRlcm5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWxsb3dFbXB0eVN0cmluZ1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hlY2syMDA0VmFsaWRGb3JtYXQoXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICByZWdleFBhdHRlcm46IFN0cmluZyxcbiAgICBhbGxvd0VtcHR5U3RyaW5nPzogYm9vbGVhbikge1xuICByZXR1cm4gY2hlY2tWYWxpZEZvcm1hdCh2YWx1ZSwgcmVnZXhQYXR0ZXJuLFxuICAgICAgc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gsIGFsbG93RW1wdHlTdHJpbmcpO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QsIG5vIHJlYXNvbiB0byBoYXZlIHRvIHBhc3MgdGhlIHNhbWUgZXJyb3IgY29kZXMgZXZlcnkgdGltZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlUGF0dGVyblxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hlY2syMDA0VmFsaWRSYW5nZSh2YWx1ZTogYW55LCByYW5nZVBhdHRlcm46IFN0cmluZykge1xuICByZXR1cm4gY2hlY2tWYWxpZFJhbmdlKHZhbHVlLCByYW5nZVBhdHRlcm4sXG4gICAgICBzY29ybTIwMDRfZXJyb3JfY29kZXMuVkFMVUVfT1VUX09GX1JBTkdFKTtcbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgY21pIG9iamVjdCBmb3IgU0NPUk0gMjAwNFxuICovXG5leHBvcnQgY2xhc3MgQ01JIGV4dGVuZHMgQmFzZUNNSSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFNDT1JNIDIwMDQgY21pIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRpYWxpemVkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsaXplZDogYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmxlYXJuZXJfcHJlZmVyZW5jZSA9IG5ldyBDTUlMZWFybmVyUHJlZmVyZW5jZSgpO1xuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2Nvcm0yMDA0Q01JU2NvcmUoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2Zyb21fbGVhcm5lciA9IG5ldyBDTUlDb21tZW50c0Zyb21MZWFybmVyKCk7XG4gICAgdGhpcy5jb21tZW50c19mcm9tX2xtcyA9IG5ldyBDTUlDb21tZW50c0Zyb21MTVMoKTtcbiAgICB0aGlzLmludGVyYWN0aW9ucyA9IG5ldyBDTUlJbnRlcmFjdGlvbnMoKTtcbiAgICB0aGlzLm9iamVjdGl2ZXMgPSBuZXcgQ01JT2JqZWN0aXZlcygpO1xuXG4gICAgaWYgKGluaXRpYWxpemVkKSB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gICNfdmVyc2lvbiA9ICcxLjAnO1xuICAjX2NoaWxkcmVuID0gc2Nvcm0yMDA0X2NvbnN0YW50cy5jbWlfY2hpbGRyZW47XG4gICNjb21wbGV0aW9uX3N0YXR1cyA9ICd1bmtub3duJztcbiAgI2NvbXBsZXRpb25fdGhyZXNob2xkID0gJyc7XG4gICNjcmVkaXQgPSAnY3JlZGl0JztcbiAgI2VudHJ5ID0gJyc7XG4gICNleGl0ID0gJyc7XG4gICNsYXVuY2hfZGF0YSA9ICcnO1xuICAjbGVhcm5lcl9pZCA9ICcnO1xuICAjbGVhcm5lcl9uYW1lID0gJyc7XG4gICNsb2NhdGlvbiA9ICcnO1xuICAjbWF4X3RpbWVfYWxsb3dlZCA9ICcnO1xuICAjbW9kZSA9ICdub3JtYWwnO1xuICAjcHJvZ3Jlc3NfbWVhc3VyZSA9ICcnO1xuICAjc2NhbGVkX3Bhc3Npbmdfc2NvcmUgPSAnJztcbiAgI3Nlc3Npb25fdGltZSA9ICdQVDBIME0wUyc7XG4gICNzdWNjZXNzX3N0YXR1cyA9ICd1bmtub3duJztcbiAgI3N1c3BlbmRfZGF0YSA9ICcnO1xuICAjdGltZV9saW1pdF9hY3Rpb24gPSAnY29udGludWUsbm8gbWVzc2FnZSc7XG4gICN0b3RhbF90aW1lID0gJyc7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBBUEkgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYWZ0ZXIgdGhlIENNSSBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmxlYXJuZXJfcHJlZmVyZW5jZT8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuc2NvcmU/LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmNvbW1lbnRzX2Zyb21fbGVhcm5lcj8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29tbWVudHNfZnJvbV9sbXM/LmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmludGVyYWN0aW9ucz8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMub2JqZWN0aXZlcz8uaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI192ZXJzaW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jX3ZlcnNpb247XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjX3ZlcnNpb24uIEp1c3QgdGhyb3dzIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gX3ZlcnNpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldCBfdmVyc2lvbihfdmVyc2lvbikge1xuICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI19jaGlsZHJlblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXQgX2NoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLiNfY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjX2NoaWxkcmVuLiBKdXN0IHRocm93cyBhbiBlcnJvci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IF9jaGlsZHJlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0IF9jaGlsZHJlbihfY2hpbGRyZW4pIHtcbiAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNjb21wbGV0aW9uX3N0YXR1c1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgY29tcGxldGlvbl9zdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRpb25fc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NvbXBsZXRpb25fc3RhdHVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wbGV0aW9uX3N0YXR1c1xuICAgKi9cbiAgc2V0IGNvbXBsZXRpb25fc3RhdHVzKGNvbXBsZXRpb25fc3RhdHVzKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGNvbXBsZXRpb25fc3RhdHVzLCBzY29ybTIwMDRfcmVnZXguQ01JQ1N0YXR1cykpIHtcbiAgICAgIHRoaXMuI2NvbXBsZXRpb25fc3RhdHVzID0gY29tcGxldGlvbl9zdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2NvbXBsZXRpb25fdGhyZXNob2xkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjb21wbGV0aW9uX3RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29tcGxldGlvbl90aHJlc2hvbGQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY29tcGxldGlvbl90aHJlc2hvbGQuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcGxldGlvbl90aHJlc2hvbGRcbiAgICovXG4gIHNldCBjb21wbGV0aW9uX3RocmVzaG9sZChjb21wbGV0aW9uX3RocmVzaG9sZCkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jY29tcGxldGlvbl90aHJlc2hvbGQgPSBjb21wbGV0aW9uX3RocmVzaG9sZCA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NyZWRpdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgY3JlZGl0KCkge1xuICAgIHJldHVybiB0aGlzLiNjcmVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY3JlZGl0LiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNyZWRpdFxuICAgKi9cbiAgc2V0IGNyZWRpdChjcmVkaXQpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI2NyZWRpdCA9IGNyZWRpdCA6IHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2VudHJ5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBlbnRyeSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZW50cnk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjZW50cnkuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW50cnlcbiAgICovXG4gIHNldCBlbnRyeShlbnRyeSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID8gdGhpcy4jZW50cnkgPSBlbnRyeSA6IHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2V4aXQuIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBkdXJpbmcgSlNPTiBleHBvcnQuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBleGl0KCkge1xuICAgIHJldHVybiAoIXRoaXMuanNvblN0cmluZykgPyB0aHJvd1dyaXRlT25seUVycm9yKCkgOiB0aGlzLiNleGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2V4aXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4aXRcbiAgICovXG4gIHNldCBleGl0KGV4aXQpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQoZXhpdCwgc2Nvcm0yMDA0X3JlZ2V4LkNNSUV4aXQsIHRydWUpKSB7XG4gICAgICB0aGlzLiNleGl0ID0gZXhpdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGF1bmNoX2RhdGFcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxhdW5jaF9kYXRhKCkge1xuICAgIHJldHVybiB0aGlzLiNsYXVuY2hfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsYXVuY2hfZGF0YS4gQ2FuIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXVuY2hfZGF0YVxuICAgKi9cbiAgc2V0IGxhdW5jaF9kYXRhKGxhdW5jaF9kYXRhKSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgPyB0aGlzLiNsYXVuY2hfZGF0YSA9IGxhdW5jaF9kYXRhIDogdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGVhcm5lcl9pZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGVhcm5lcl9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVhcm5lcl9pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsZWFybmVyX2lkLiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxlYXJuZXJfaWRcbiAgICovXG4gIHNldCBsZWFybmVyX2lkKGxlYXJuZXJfaWQpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI2xlYXJuZXJfaWQgPSBsZWFybmVyX2lkIDogdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGVhcm5lcl9uYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBsZWFybmVyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlYXJuZXJfbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsZWFybmVyX25hbWUuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGVhcm5lcl9uYW1lXG4gICAqL1xuICBzZXQgbGVhcm5lcl9uYW1lKGxlYXJuZXJfbmFtZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jbGVhcm5lcl9uYW1lID0gbGVhcm5lcl9uYW1lIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbG9jYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNsb2NhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAgICovXG4gIHNldCBsb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChsb2NhdGlvbiwgc2Nvcm0yMDA0X3JlZ2V4LkNNSVN0cmluZzEwMDApKSB7XG4gICAgICB0aGlzLiNsb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNtYXhfdGltZV9hbGxvd2VkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBtYXhfdGltZV9hbGxvd2VkKCkge1xuICAgIHJldHVybiB0aGlzLiNtYXhfdGltZV9hbGxvd2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI21heF90aW1lX2FsbG93ZWQuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF4X3RpbWVfYWxsb3dlZFxuICAgKi9cbiAgc2V0IG1heF90aW1lX2FsbG93ZWQobWF4X3RpbWVfYWxsb3dlZCkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jbWF4X3RpbWVfYWxsb3dlZCA9IG1heF90aW1lX2FsbG93ZWQgOlxuICAgICAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNtb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLiNtb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI21vZGUuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZVxuICAgKi9cbiAgc2V0IG1vZGUobW9kZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID8gdGhpcy4jbW9kZSA9IG1vZGUgOiB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNwcm9ncmVzc19tZWFzdXJlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBwcm9ncmVzc19tZWFzdXJlKCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9ncmVzc19tZWFzdXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3Byb2dyZXNzX21lYXN1cmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2dyZXNzX21lYXN1cmVcbiAgICovXG4gIHNldCBwcm9ncmVzc19tZWFzdXJlKHByb2dyZXNzX21lYXN1cmUpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQocHJvZ3Jlc3NfbWVhc3VyZSwgc2Nvcm0yMDA0X3JlZ2V4LkNNSURlY2ltYWwpICYmXG4gICAgICAgIGNoZWNrMjAwNFZhbGlkUmFuZ2UocHJvZ3Jlc3NfbWVhc3VyZSwgc2Nvcm0yMDA0X3JlZ2V4LnByb2dyZXNzX3JhbmdlKSkge1xuICAgICAgdGhpcy4jcHJvZ3Jlc3NfbWVhc3VyZSA9IHByb2dyZXNzX21lYXN1cmU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3NjYWxlZF9wYXNzaW5nX3Njb3JlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBzY2FsZWRfcGFzc2luZ19zY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2NhbGVkX3Bhc3Npbmdfc2NvcmU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjc2NhbGVkX3Bhc3Npbmdfc2NvcmUuIENhbiBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgIGluaXRpYWxpemF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NhbGVkX3Bhc3Npbmdfc2NvcmVcbiAgICovXG4gIHNldCBzY2FsZWRfcGFzc2luZ19zY29yZShzY2FsZWRfcGFzc2luZ19zY29yZSkge1xuICAgICF0aGlzLmluaXRpYWxpemVkID9cbiAgICAgICAgdGhpcy4jc2NhbGVkX3Bhc3Npbmdfc2NvcmUgPSBzY2FsZWRfcGFzc2luZ19zY29yZSA6XG4gICAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3Nlc3Npb25fdGltZS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGR1cmluZyBKU09OIGV4cG9ydC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHNlc3Npb25fdGltZSgpIHtcbiAgICByZXR1cm4gKCF0aGlzLmpzb25TdHJpbmcpID8gdGhyb3dXcml0ZU9ubHlFcnJvcigpIDogdGhpcy4jc2Vzc2lvbl90aW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3Nlc3Npb25fdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2Vzc2lvbl90aW1lXG4gICAqL1xuICBzZXQgc2Vzc2lvbl90aW1lKHNlc3Npb25fdGltZSkge1xuICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChzZXNzaW9uX3RpbWUsIHNjb3JtMjAwNF9yZWdleC5DTUlUaW1lc3BhbikpIHtcbiAgICAgIHRoaXMuI3Nlc3Npb25fdGltZSA9IHNlc3Npb25fdGltZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjc3VjY2Vzc19zdGF0dXNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHN1Y2Nlc3Nfc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLiNzdWNjZXNzX3N0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNzdWNjZXNzX3N0YXR1c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3VjY2Vzc19zdGF0dXNcbiAgICovXG4gIHNldCBzdWNjZXNzX3N0YXR1cyhzdWNjZXNzX3N0YXR1cykge1xuICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChzdWNjZXNzX3N0YXR1cywgc2Nvcm0yMDA0X3JlZ2V4LkNNSVNTdGF0dXMpKSB7XG4gICAgICB0aGlzLiNzdWNjZXNzX3N0YXR1cyA9IHN1Y2Nlc3Nfc3RhdHVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzdXNwZW5kX2RhdGFcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHN1c3BlbmRfZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy4jc3VzcGVuZF9kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N1c3BlbmRfZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3VzcGVuZF9kYXRhXG4gICAqL1xuICBzZXQgc3VzcGVuZF9kYXRhKHN1c3BlbmRfZGF0YSkge1xuICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChzdXNwZW5kX2RhdGEsIHNjb3JtMjAwNF9yZWdleC5DTUlTdHJpbmc2NDAwMCwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuI3N1c3BlbmRfZGF0YSA9IHN1c3BlbmRfZGF0YTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdGltZV9saW1pdF9hY3Rpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHRpbWVfbGltaXRfYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiN0aW1lX2xpbWl0X2FjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0aW1lX2xpbWl0X2FjdGlvbi4gQ2FuIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSAgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lX2xpbWl0X2FjdGlvblxuICAgKi9cbiAgc2V0IHRpbWVfbGltaXRfYWN0aW9uKHRpbWVfbGltaXRfYWN0aW9uKSB7XG4gICAgIXRoaXMuaW5pdGlhbGl6ZWQgP1xuICAgICAgICB0aGlzLiN0aW1lX2xpbWl0X2FjdGlvbiA9IHRpbWVfbGltaXRfYWN0aW9uIDpcbiAgICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdG90YWxfdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdG90YWxfdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdG90YWxfdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0b3RhbF90aW1lLiBDYW4gb25seSBiZSBjYWxsZWQgYmVmb3JlICBpbml0aWFsaXphdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvdGFsX3RpbWVcbiAgICovXG4gIHNldCB0b3RhbF90aW1lKHRvdGFsX3RpbWUpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCA/IHRoaXMuI3RvdGFsX3RpbWUgPSB0b3RhbF90aW1lIDogdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgY3VycmVudCBzZXNzaW9uIHRpbWUgdG8gdGhlIGV4aXN0aW5nIHRvdGFsIHRpbWUuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gSVNPODYwMSBEdXJhdGlvblxuICAgKi9cbiAgZ2V0Q3VycmVudFRvdGFsVGltZSgpIHtcbiAgICByZXR1cm4gVXRpbC5hZGRUd29EdXJhdGlvbnMoXG4gICAgICAgIHRoaXMuI3RvdGFsX3RpbWUsXG4gICAgICAgIHRoaXMuI3Nlc3Npb25fdGltZSxcbiAgICAgICAgc2Nvcm0yMDA0X3JlZ2V4LkNNSVRpbWVzcGFuLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWlcbiAgICpcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBjb21tZW50c19mcm9tX2xlYXJuZXI6IENNSUNvbW1lbnRzRnJvbUxlYXJuZXIsXG4gICAqICAgICAgY29tbWVudHNfZnJvbV9sbXM6IENNSUNvbW1lbnRzRnJvbUxNUyxcbiAgICogICAgICBjb21wbGV0aW9uX3N0YXR1czogc3RyaW5nLFxuICAgKiAgICAgIGNvbXBsZXRpb25fdGhyZXNob2xkOiBzdHJpbmcsXG4gICAqICAgICAgY3JlZGl0OiBzdHJpbmcsXG4gICAqICAgICAgZW50cnk6IHN0cmluZyxcbiAgICogICAgICBleGl0OiBzdHJpbmcsXG4gICAqICAgICAgaW50ZXJhY3Rpb25zOiBDTUlJbnRlcmFjdGlvbnMsXG4gICAqICAgICAgbGF1bmNoX2RhdGE6IHN0cmluZyxcbiAgICogICAgICBsZWFybmVyX2lkOiBzdHJpbmcsXG4gICAqICAgICAgbGVhcm5lcl9uYW1lOiBzdHJpbmcsXG4gICAqICAgICAgbGVhcm5lcl9wcmVmZXJlbmNlOiBDTUlMZWFybmVyUHJlZmVyZW5jZSxcbiAgICogICAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgKiAgICAgIG1heF90aW1lX2FsbG93ZWQ6IHN0cmluZyxcbiAgICogICAgICBtb2RlOiBzdHJpbmcsXG4gICAqICAgICAgb2JqZWN0aXZlczogQ01JT2JqZWN0aXZlcyxcbiAgICogICAgICBwcm9ncmVzc19tZWFzdXJlOiBzdHJpbmcsXG4gICAqICAgICAgc2NhbGVkX3Bhc3Npbmdfc2NvcmU6IHN0cmluZyxcbiAgICogICAgICBzY29yZTogU2Nvcm0yMDA0Q01JU2NvcmUsXG4gICAqICAgICAgc2Vzc2lvbl90aW1lOiBzdHJpbmcsXG4gICAqICAgICAgc3VjY2Vzc19zdGF0dXM6IHN0cmluZyxcbiAgICogICAgICBzdXNwZW5kX2RhdGE6IHN0cmluZyxcbiAgICogICAgICB0aW1lX2xpbWl0X2FjdGlvbjogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdjb21tZW50c19mcm9tX2xlYXJuZXInOiB0aGlzLmNvbW1lbnRzX2Zyb21fbGVhcm5lcixcbiAgICAgICdjb21tZW50c19mcm9tX2xtcyc6IHRoaXMuY29tbWVudHNfZnJvbV9sbXMsXG4gICAgICAnY29tcGxldGlvbl9zdGF0dXMnOiB0aGlzLmNvbXBsZXRpb25fc3RhdHVzLFxuICAgICAgJ2NvbXBsZXRpb25fdGhyZXNob2xkJzogdGhpcy5jb21wbGV0aW9uX3RocmVzaG9sZCxcbiAgICAgICdjcmVkaXQnOiB0aGlzLmNyZWRpdCxcbiAgICAgICdlbnRyeSc6IHRoaXMuZW50cnksXG4gICAgICAnZXhpdCc6IHRoaXMuZXhpdCxcbiAgICAgICdpbnRlcmFjdGlvbnMnOiB0aGlzLmludGVyYWN0aW9ucyxcbiAgICAgICdsYXVuY2hfZGF0YSc6IHRoaXMubGF1bmNoX2RhdGEsXG4gICAgICAnbGVhcm5lcl9pZCc6IHRoaXMubGVhcm5lcl9pZCxcbiAgICAgICdsZWFybmVyX25hbWUnOiB0aGlzLmxlYXJuZXJfbmFtZSxcbiAgICAgICdsZWFybmVyX3ByZWZlcmVuY2UnOiB0aGlzLmxlYXJuZXJfcHJlZmVyZW5jZSxcbiAgICAgICdsb2NhdGlvbic6IHRoaXMubG9jYXRpb24sXG4gICAgICAnbWF4X3RpbWVfYWxsb3dlZCc6IHRoaXMubWF4X3RpbWVfYWxsb3dlZCxcbiAgICAgICdtb2RlJzogdGhpcy5tb2RlLFxuICAgICAgJ29iamVjdGl2ZXMnOiB0aGlzLm9iamVjdGl2ZXMsXG4gICAgICAncHJvZ3Jlc3NfbWVhc3VyZSc6IHRoaXMucHJvZ3Jlc3NfbWVhc3VyZSxcbiAgICAgICdzY2FsZWRfcGFzc2luZ19zY29yZSc6IHRoaXMuc2NhbGVkX3Bhc3Npbmdfc2NvcmUsXG4gICAgICAnc2NvcmUnOiB0aGlzLnNjb3JlLFxuICAgICAgJ3Nlc3Npb25fdGltZSc6IHRoaXMuc2Vzc2lvbl90aW1lLFxuICAgICAgJ3N1Y2Nlc3Nfc3RhdHVzJzogdGhpcy5zdWNjZXNzX3N0YXR1cyxcbiAgICAgICdzdXNwZW5kX2RhdGEnOiB0aGlzLnN1c3BlbmRfZGF0YSxcbiAgICAgICd0aW1lX2xpbWl0X2FjdGlvbic6IHRoaXMudGltZV9saW1pdF9hY3Rpb24sXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgU0NPUk0gMjAwNCdzIGNtaS5sZWFybmVyX3ByZWZlcmVuY2Ugb2JqZWN0XG4gKi9cbmNsYXNzIENNSUxlYXJuZXJQcmVmZXJlbmNlIGV4dGVuZHMgQmFzZUNNSSB7XG4gICNfY2hpbGRyZW4gPSBzY29ybTIwMDRfY29uc3RhbnRzLnN0dWRlbnRfcHJlZmVyZW5jZV9jaGlsZHJlbjtcbiAgI2F1ZGlvX2xldmVsID0gJzEnO1xuICAjbGFuZ3VhZ2UgPSAnJztcbiAgI2RlbGl2ZXJ5X3NwZWVkID0gJzEnO1xuICAjYXVkaW9fY2FwdGlvbmluZyA9ICcwJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5sZWFybmVyX3ByZWZlcmVuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjX2NoaWxkcmVuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuI19jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNfY2hpbGRyZW4uIEp1c3QgdGhyb3dzIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gX2NoaWxkcmVuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXQgX2NoaWxkcmVuKF9jaGlsZHJlbikge1xuICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2F1ZGlvX2xldmVsXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBhdWRpb19sZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYXVkaW9fbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjYXVkaW9fbGV2ZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvX2xldmVsXG4gICAqL1xuICBzZXQgYXVkaW9fbGV2ZWwoYXVkaW9fbGV2ZWwpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQoYXVkaW9fbGV2ZWwsIHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsKSAmJlxuICAgICAgICBjaGVjazIwMDRWYWxpZFJhbmdlKGF1ZGlvX2xldmVsLCBzY29ybTIwMDRfcmVnZXguYXVkaW9fcmFuZ2UpKSB7XG4gICAgICB0aGlzLiNhdWRpb19sZXZlbCA9IGF1ZGlvX2xldmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsYW5ndWFnZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xhbmd1YWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xhbmd1YWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICAgKi9cbiAgc2V0IGxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGxhbmd1YWdlLCBzY29ybTIwMDRfcmVnZXguQ01JTGFuZykpIHtcbiAgICAgIHRoaXMuI2xhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2RlbGl2ZXJ5X3NwZWVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBkZWxpdmVyeV9zcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGVsaXZlcnlfc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjZGVsaXZlcnlfc3BlZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlbGl2ZXJ5X3NwZWVkXG4gICAqL1xuICBzZXQgZGVsaXZlcnlfc3BlZWQoZGVsaXZlcnlfc3BlZWQpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQoZGVsaXZlcnlfc3BlZWQsIHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsKSAmJlxuICAgICAgICBjaGVjazIwMDRWYWxpZFJhbmdlKGRlbGl2ZXJ5X3NwZWVkLCBzY29ybTIwMDRfcmVnZXguc3BlZWRfcmFuZ2UpKSB7XG4gICAgICB0aGlzLiNkZWxpdmVyeV9zcGVlZCA9IGRlbGl2ZXJ5X3NwZWVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNhdWRpb19jYXB0aW9uaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBhdWRpb19jYXB0aW9uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiNhdWRpb19jYXB0aW9uaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2F1ZGlvX2NhcHRpb25pbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1ZGlvX2NhcHRpb25pbmdcbiAgICovXG4gIHNldCBhdWRpb19jYXB0aW9uaW5nKGF1ZGlvX2NhcHRpb25pbmcpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQoYXVkaW9fY2FwdGlvbmluZywgc2Nvcm0yMDA0X3JlZ2V4LkNNSVNJbnRlZ2VyKSAmJlxuICAgICAgICBjaGVjazIwMDRWYWxpZFJhbmdlKGF1ZGlvX2NhcHRpb25pbmcsIHNjb3JtMjAwNF9yZWdleC50ZXh0X3JhbmdlKSkge1xuICAgICAgdGhpcy4jYXVkaW9fY2FwdGlvbmluZyA9IGF1ZGlvX2NhcHRpb25pbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLmxlYXJuZXJfcHJlZmVyZW5jZVxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIGF1ZGlvX2xldmVsOiBzdHJpbmcsXG4gICAqICAgICAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgICogICAgICBkZWxpdmVyeV9zcGVlZDogc3RyaW5nLFxuICAgKiAgICAgIGF1ZGlvX2NhcHRpb25pbmc6IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnYXVkaW9fbGV2ZWwnOiB0aGlzLmF1ZGlvX2xldmVsLFxuICAgICAgJ2xhbmd1YWdlJzogdGhpcy5sYW5ndWFnZSxcbiAgICAgICdkZWxpdmVyeV9zcGVlZCc6IHRoaXMuZGVsaXZlcnlfc3BlZWQsXG4gICAgICAnYXVkaW9fY2FwdGlvbmluZyc6IHRoaXMuYXVkaW9fY2FwdGlvbmluZyxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAyMDA0J3MgY21pLmludGVyYWN0aW9ucyBvYmplY3RcbiAqL1xuY2xhc3MgQ01JSW50ZXJhY3Rpb25zIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5vYmplY3RpdmVzIEFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjaGlsZHJlbjogc2Nvcm0yMDA0X2NvbnN0YW50cy5pbnRlcmFjdGlvbnNfY2hpbGRyZW4sXG4gICAgICBlcnJvckNvZGU6IHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5SRUFEX09OTFlfRUxFTUVOVCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAyMDA0J3MgY21pLm9iamVjdGl2ZXMgb2JqZWN0XG4gKi9cbmNsYXNzIENNSU9iamVjdGl2ZXMgZXh0ZW5kcyBDTUlBcnJheSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLm9iamVjdGl2ZXMgQXJyYXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNoaWxkcmVuOiBzY29ybTIwMDRfY29uc3RhbnRzLm9iamVjdGl2ZXNfY2hpbGRyZW4sXG4gICAgICBlcnJvckNvZGU6IHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5SRUFEX09OTFlfRUxFTUVOVCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAyMDA0J3MgY21pLmNvbW1lbnRzX2Zyb21fbG1zIG9iamVjdFxuICovXG5jbGFzcyBDTUlDb21tZW50c0Zyb21MTVMgZXh0ZW5kcyBDTUlBcnJheSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmNvbW1lbnRzX2Zyb21fbG1zIEFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjaGlsZHJlbjogc2Nvcm0yMDA0X2NvbnN0YW50cy5jb21tZW50c19jaGlsZHJlbixcbiAgICAgIGVycm9yQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5ULFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIFNDT1JNIDIwMDQncyBjbWkuY29tbWVudHNfZnJvbV9sZWFybmVyIG9iamVjdFxuICovXG5jbGFzcyBDTUlDb21tZW50c0Zyb21MZWFybmVyIGV4dGVuZHMgQ01JQXJyYXkge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5jb21tZW50c19mcm9tX2xlYXJuZXIgQXJyYXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNoaWxkcmVuOiBzY29ybTIwMDRfY29uc3RhbnRzLmNvbW1lbnRzX2NoaWxkcmVuLFxuICAgICAgZXJyb3JDb2RlOiBzY29ybTIwMDRfZXJyb3JfY29kZXMuUkVBRF9PTkxZX0VMRU1FTlQsXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyBmb3IgU0NPUk0gMjAwNCdzIGNtaS5pbnRlcmFjdGlvbi5uIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgQ01JSW50ZXJhY3Rpb25zT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gICNpZCA9ICcnO1xuICAjdHlwZSA9ICcnO1xuICAjdGltZXN0YW1wID0gJyc7XG4gICN3ZWlnaHRpbmcgPSAnJztcbiAgI2xlYXJuZXJfcmVzcG9uc2UgPSAnJztcbiAgI3Jlc3VsdCA9ICcnO1xuICAjbGF0ZW5jeSA9ICcnO1xuICAjZGVzY3JpcHRpb24gPSAnJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5pbnRlcmFjdGlvbi5uXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vYmplY3RpdmVzID0gbmV3IENNSUFycmF5KHtcbiAgICAgIGVycm9yQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5ULFxuICAgICAgY2hpbGRyZW46IHNjb3JtMjAwNF9jb25zdGFudHMub2JqZWN0aXZlc19jaGlsZHJlbixcbiAgICB9KTtcbiAgICB0aGlzLmNvcnJlY3RfcmVzcG9uc2VzID0gbmV3IENNSUFycmF5KHtcbiAgICAgIGVycm9yQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5ULFxuICAgICAgY2hpbGRyZW46IHNjb3JtMjAwNF9jb25zdGFudHMuY29ycmVjdF9yZXNwb25zZXNfY2hpbGRyZW4sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIEFQSSBoYXMgYmVlbiBpbml0aWFsaXplZCBhZnRlciB0aGUgQ01JIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMub2JqZWN0aXZlcz8uaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29ycmVjdF9yZXNwb25zZXM/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2lkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgc2V0IGlkKGlkKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGlkLCBzY29ybTIwMDRfcmVnZXguQ01JTG9uZ0lkZW50aWZpZXIpKSB7XG4gICAgICB0aGlzLiNpZCA9IGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICN0eXBlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3R5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICovXG4gIHNldCB0eXBlKHR5cGUpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQodHlwZSwgc2Nvcm0yMDA0X3JlZ2V4LkNNSVR5cGUpKSB7XG4gICAgICB0aGlzLiN0eXBlID0gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjdGltZXN0YW1wXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB0aW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpbWVzdGFtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN0aW1lc3RhbXBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWVzdGFtcFxuICAgKi9cbiAgc2V0IHRpbWVzdGFtcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQodGltZXN0YW1wLCBzY29ybTIwMDRfcmVnZXguQ01JVGltZSkpIHtcbiAgICAgIHRoaXMuI3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjd2VpZ2h0aW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWlnaHRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3dlaWdodGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICN3ZWlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdlaWdodGluZ1xuICAgKi9cbiAgc2V0IHdlaWdodGluZyh3ZWlnaHRpbmcpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQod2VpZ2h0aW5nLCBzY29ybTIwMDRfcmVnZXguQ01JRGVjaW1hbCkpIHtcbiAgICAgIHRoaXMuI3dlaWdodGluZyA9IHdlaWdodGluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGVhcm5lcl9yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGVhcm5lcl9yZXNwb25zZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVhcm5lcl9yZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsZWFybmVyX3Jlc3BvbnNlLiBEb2VzIHR5cGUgdmFsaWRhdGlvbiB0byBtYWtlIHN1cmUgcmVzcG9uc2VcbiAgICogbWF0Y2hlcyBTQ09STSAyMDA0J3Mgc3BlY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbGVhcm5lcl9yZXNwb25zZVxuICAgKi9cbiAgc2V0IGxlYXJuZXJfcmVzcG9uc2UobGVhcm5lcl9yZXNwb25zZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihcbiAgICAgICAgICBzY29ybTIwMDRfZXJyb3JfY29kZXMuREVQRU5ERU5DWV9OT1RfRVNUQUJMSVNIRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlX3R5cGUgPSBsZWFybmVyX3Jlc3BvbnNlc1t0aGlzLnR5cGVdO1xuICAgICAgaWYgKHJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlX3R5cGU/LmRlbGltaXRlcikge1xuICAgICAgICAgIG5vZGVzID0gbGVhcm5lcl9yZXNwb25zZS5zcGxpdChyZXNwb25zZV90eXBlLmRlbGltaXRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZXNbMF0gPSBsZWFybmVyX3Jlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChub2Rlcy5sZW5ndGggPiAwKSAmJiAobm9kZXMubGVuZ3RoIDw9IHJlc3BvbnNlX3R5cGUubWF4KSkge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdFJlZ2V4ID0gbmV3IFJlZ0V4cChyZXNwb25zZV90eXBlLmZvcm1hdCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlX3R5cGU/LmRlbGltaXRlcjIpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gbm9kZXNbaV0uc3BsaXQocmVzcG9uc2VfdHlwZS5kZWxpbWl0ZXIyKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc1swXS5tYXRjaChmb3JtYXRSZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93VHlwZU1pc21hdGNoRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNbMV0ubWF0Y2gobmV3IFJlZ0V4cChyZXNwb25zZV90eXBlLmZvcm1hdDIpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd1R5cGVNaXNtYXRjaEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93VHlwZU1pc21hdGNoRXJyb3IoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFub2Rlc1tpXS5tYXRjaChmb3JtYXRSZWdleCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvd1R5cGVNaXNtYXRjaEVycm9yKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldICE9PSAnJyAmJiByZXNwb25zZV90eXBlLnVuaXF1ZSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldID09PSBub2Rlc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93VHlwZU1pc21hdGNoRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKHNjb3JtMjAwNF9lcnJvcl9jb2Rlcy5HRU5FUkFMX1NFVF9GQUlMVVJFKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihzY29ybTIwMDRfZXJyb3JfY29kZXMuVFlQRV9NSVNNQVRDSCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3Jlc3VsdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgcmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLiNyZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXN1bHRcbiAgICovXG4gIHNldCByZXN1bHQocmVzdWx0KSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KHJlc3VsdCwgc2Nvcm0yMDA0X3JlZ2V4LkNNSVJlc3VsdCkpIHtcbiAgICAgIHRoaXMuI3Jlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjbGF0ZW5jeVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbGF0ZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGF0ZW5jeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNsYXRlbmN5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRlbmN5XG4gICAqL1xuICBzZXQgbGF0ZW5jeShsYXRlbmN5KSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGxhdGVuY3ksIHNjb3JtMjAwNF9yZWdleC5DTUlUaW1lc3BhbikpIHtcbiAgICAgIHRoaXMuI2xhdGVuY3kgPSBsYXRlbmN5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNkZXNjcmlwdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGRlc2NyaXB0aW9uLCBzY29ybTIwMDRfcmVnZXguQ01JTGFuZ1N0cmluZzI1MCwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLmludGVyYWN0aW9ucy5uXG4gICAqXG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgaWQ6IHN0cmluZyxcbiAgICogICAgICB0eXBlOiBzdHJpbmcsXG4gICAqICAgICAgb2JqZWN0aXZlczogQ01JQXJyYXksXG4gICAqICAgICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAqICAgICAgY29ycmVjdF9yZXNwb25zZXM6IENNSUFycmF5LFxuICAgKiAgICAgIHdlaWdodGluZzogc3RyaW5nLFxuICAgKiAgICAgIGxlYXJuZXJfcmVzcG9uc2U6IHN0cmluZyxcbiAgICogICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICogICAgICBsYXRlbmN5OiBzdHJpbmcsXG4gICAqICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnaWQnOiB0aGlzLmlkLFxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXG4gICAgICAnb2JqZWN0aXZlcyc6IHRoaXMub2JqZWN0aXZlcyxcbiAgICAgICd0aW1lc3RhbXAnOiB0aGlzLnRpbWVzdGFtcCxcbiAgICAgICd3ZWlnaHRpbmcnOiB0aGlzLndlaWdodGluZyxcbiAgICAgICdsZWFybmVyX3Jlc3BvbnNlJzogdGhpcy5sZWFybmVyX3Jlc3BvbnNlLFxuICAgICAgJ3Jlc3VsdCc6IHRoaXMucmVzdWx0LFxuICAgICAgJ2xhdGVuY3knOiB0aGlzLmxhdGVuY3ksXG4gICAgICAnZGVzY3JpcHRpb24nOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgJ2NvcnJlY3RfcmVzcG9uc2VzJzogdGhpcy5jb3JyZWN0X3Jlc3BvbnNlcyxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIGZvciBTQ09STSAyMDA0J3MgY21pLm9iamVjdGl2ZXMubiBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENNSU9iamVjdGl2ZXNPYmplY3QgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgI2lkID0gJyc7XG4gICNzdWNjZXNzX3N0YXR1cyA9ICd1bmtub3duJztcbiAgI2NvbXBsZXRpb25fc3RhdHVzID0gJ3Vua25vd24nO1xuICAjcHJvZ3Jlc3NfbWVhc3VyZSA9ICcnO1xuICAjZGVzY3JpcHRpb24gPSAnJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5vYmplY3RpdmVzLm5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JtMjAwNENNSVNjb3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIEFQSSBoYXMgYmVlbiBpbml0aWFsaXplZCBhZnRlciB0aGUgQ01JIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuc2NvcmU/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2lkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgc2V0IGlkKGlkKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGlkLCBzY29ybTIwMDRfcmVnZXguQ01JTG9uZ0lkZW50aWZpZXIpKSB7XG4gICAgICB0aGlzLiNpZCA9IGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzdWNjZXNzX3N0YXR1c1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgc3VjY2Vzc19zdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N1Y2Nlc3Nfc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3N1Y2Nlc3Nfc3RhdHVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWNjZXNzX3N0YXR1c1xuICAgKi9cbiAgc2V0IHN1Y2Nlc3Nfc3RhdHVzKHN1Y2Nlc3Nfc3RhdHVzKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KHN1Y2Nlc3Nfc3RhdHVzLCBzY29ybTIwMDRfcmVnZXguQ01JU1N0YXR1cykpIHtcbiAgICAgIHRoaXMuI3N1Y2Nlc3Nfc3RhdHVzID0gc3VjY2Vzc19zdGF0dXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2NvbXBsZXRpb25fc3RhdHVzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjb21wbGV0aW9uX3N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy4jY29tcGxldGlvbl9zdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY29tcGxldGlvbl9zdGF0dXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBsZXRpb25fc3RhdHVzXG4gICAqL1xuICBzZXQgY29tcGxldGlvbl9zdGF0dXMoY29tcGxldGlvbl9zdGF0dXMpIHtcbiAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQoY29tcGxldGlvbl9zdGF0dXMsIHNjb3JtMjAwNF9yZWdleC5DTUlDU3RhdHVzKSkge1xuICAgICAgdGhpcy4jY29tcGxldGlvbl9zdGF0dXMgPSBjb21wbGV0aW9uX3N0YXR1cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcHJvZ3Jlc3NfbWVhc3VyZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgcHJvZ3Jlc3NfbWVhc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJvZ3Jlc3NfbWVhc3VyZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNwcm9ncmVzc19tZWFzdXJlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9ncmVzc19tZWFzdXJlXG4gICAqL1xuICBzZXQgcHJvZ3Jlc3NfbWVhc3VyZShwcm9ncmVzc19tZWFzdXJlKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KHByb2dyZXNzX21lYXN1cmUsIHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsKSAmJlxuICAgICAgICBjaGVjazIwMDRWYWxpZFJhbmdlKHByb2dyZXNzX21lYXN1cmUsIHNjb3JtMjAwNF9yZWdleC5wcm9ncmVzc19yYW5nZSkpIHtcbiAgICAgIHRoaXMuI3Byb2dyZXNzX21lYXN1cmUgPSBwcm9ncmVzc19tZWFzdXJlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNkZXNjcmlwdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGRlc2NyaXB0aW9uLCBzY29ybTIwMDRfcmVnZXguQ01JTGFuZ1N0cmluZzI1MCwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvSlNPTiBmb3IgY21pLm9iamVjdGl2ZXMublxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIGlkOiBzdHJpbmcsXG4gICAqICAgICAgc3VjY2Vzc19zdGF0dXM6IHN0cmluZyxcbiAgICogICAgICBjb21wbGV0aW9uX3N0YXR1czogc3RyaW5nLFxuICAgKiAgICAgIHByb2dyZXNzX21lYXN1cmU6IHN0cmluZyxcbiAgICogICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgKiAgICAgIHNjb3JlOiBTY29ybTIwMDRDTUlTY29yZVxuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnaWQnOiB0aGlzLmlkLFxuICAgICAgJ3N1Y2Nlc3Nfc3RhdHVzJzogdGhpcy5zdWNjZXNzX3N0YXR1cyxcbiAgICAgICdjb21wbGV0aW9uX3N0YXR1cyc6IHRoaXMuY29tcGxldGlvbl9zdGF0dXMsXG4gICAgICAncHJvZ3Jlc3NfbWVhc3VyZSc6IHRoaXMucHJvZ3Jlc3NfbWVhc3VyZSxcbiAgICAgICdkZXNjcmlwdGlvbic6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAnc2NvcmUnOiB0aGlzLnNjb3JlLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIFNDT1JNIDIwMDQncyBjbWkgKi5zY29yZSBvYmplY3RcbiAqL1xuY2xhc3MgU2Nvcm0yMDA0Q01JU2NvcmUgZXh0ZW5kcyBDTUlTY29yZSB7XG4gICNzY2FsZWQgPSAnJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaSAqLnNjb3JlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgICAge1xuICAgICAgICAgIHNjb3JlX2NoaWxkcmVuOiBzY29ybTIwMDRfY29uc3RhbnRzLnNjb3JlX2NoaWxkcmVuLFxuICAgICAgICAgIG1heDogJycsXG4gICAgICAgICAgaW52YWxpZEVycm9yQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlJFQURfT05MWV9FTEVNRU5ULFxuICAgICAgICAgIGludmFsaWRUeXBlQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlRZUEVfTUlTTUFUQ0gsXG4gICAgICAgICAgaW52YWxpZFJhbmdlQ29kZTogc2Nvcm0yMDA0X2Vycm9yX2NvZGVzLlZBTFVFX09VVF9PRl9SQU5HRSxcbiAgICAgICAgICBkZWNpbWFsUmVnZXg6IHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsLFxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNzY2FsZWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHNjYWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2NhbGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI3NjYWxlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NhbGVkXG4gICAqL1xuICBzZXQgc2NhbGVkKHNjYWxlZCkge1xuICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChzY2FsZWQsIHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsKSAmJlxuICAgICAgICBjaGVjazIwMDRWYWxpZFJhbmdlKHNjYWxlZCwgc2Nvcm0yMDA0X3JlZ2V4LnNjYWxlZF9yYW5nZSkpIHtcbiAgICAgIHRoaXMuI3NjYWxlZCA9IHNjYWxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdG9KU09OIGZvciBjbWkgKi5zY29yZVxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIHNjYWxlZDogc3RyaW5nLFxuICAgKiAgICAgIHJhdzogc3RyaW5nLFxuICAgKiAgICAgIG1pbjogc3RyaW5nLFxuICAgKiAgICAgIG1heDogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdzY2FsZWQnOiB0aGlzLnNjYWxlZCxcbiAgICAgICdyYXcnOiBzdXBlci5yYXcsXG4gICAgICAnbWluJzogc3VwZXIubWluLFxuICAgICAgJ21heCc6IHN1cGVyLm1heCxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBTQ09STSAyMDA0J3MgY21pLmNvbW1lbnRzX2Zyb21fbGVhcm5lci5uIGFuZCBjbWkuY29tbWVudHNfZnJvbV9sbXMubiBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENNSUNvbW1lbnRzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gICNjb21tZW50ID0gJyc7XG4gICNsb2NhdGlvbiA9ICcnO1xuICAjdGltZXN0YW1wID0gJyc7XG4gICNyZWFkT25seUFmdGVySW5pdDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGNtaS5jb21tZW50c19mcm9tX2xlYXJuZXIubiBhbmQgY21pLmNvbW1lbnRzX2Zyb21fbG1zLm5cbiAgICogQHBhcmFtIHtib29sZWFufSByZWFkT25seUFmdGVySW5pdFxuICAgKi9cbiAgY29uc3RydWN0b3IocmVhZE9ubHlBZnRlckluaXQgPSBmYWxzZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy4jY29tbWVudCA9ICcnO1xuICAgIHRoaXMuI2xvY2F0aW9uID0gJyc7XG4gICAgdGhpcy4jdGltZXN0YW1wID0gJyc7XG4gICAgdGhpcy4jcmVhZE9ubHlBZnRlckluaXQgPSByZWFkT25seUFmdGVySW5pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNjb21tZW50XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNjb21tZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2NvbW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRcbiAgICovXG4gIHNldCBjb21tZW50KGNvbW1lbnQpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLiNyZWFkT25seUFmdGVySW5pdCkge1xuICAgICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGVjazIwMDRWYWxpZEZvcm1hdChjb21tZW50LCBzY29ybTIwMDRfcmVnZXguQ01JTGFuZ1N0cmluZzQwMDAsIHRydWUpKSB7XG4gICAgICAgIHRoaXMuI2NvbW1lbnQgPSBjb21tZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xvY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2xvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICAgKi9cbiAgc2V0IGxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy4jcmVhZE9ubHlBZnRlckluaXQpIHtcbiAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQobG9jYXRpb24sIHNjb3JtMjAwNF9yZWdleC5DTUlTdHJpbmcyNTApKSB7XG4gICAgICAgIHRoaXMuI2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI3RpbWVzdGFtcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLiN0aW1lc3RhbXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjdGltZXN0YW1wXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lc3RhbXBcbiAgICovXG4gIHNldCB0aW1lc3RhbXAodGltZXN0YW1wKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy4jcmVhZE9ubHlBZnRlckluaXQpIHtcbiAgICAgIHRocm93UmVhZE9ubHlFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hlY2syMDA0VmFsaWRGb3JtYXQodGltZXN0YW1wLCBzY29ybTIwMDRfcmVnZXguQ01JVGltZSkpIHtcbiAgICAgICAgdGhpcy4jdGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5jb21tZW50c19mcm9tX2xlYXJuZXIubiBvYmplY3RcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBjb21tZW50OiBzdHJpbmcsXG4gICAqICAgICAgbG9jYXRpb246IHN0cmluZyxcbiAgICogICAgICB0aW1lc3RhbXA6IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnY29tbWVudCc6IHRoaXMuY29tbWVudCxcbiAgICAgICdsb2NhdGlvbic6IHRoaXMubG9jYXRpb24sXG4gICAgICAndGltZXN0YW1wJzogdGhpcy50aW1lc3RhbXAsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMjAwNCdzIGNtaS5pbnRlcmFjdGlvbnMubi5vYmplY3RpdmVzLm4gb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDTUlJbnRlcmFjdGlvbnNPYmplY3RpdmVzT2JqZWN0IGV4dGVuZHMgQmFzZUNNSSB7XG4gICNpZCA9ICcnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmludGVyYWN0aW9ucy5uLm9iamVjdGl2ZXMublxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yICNpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgI2lkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgc2V0IGlkKGlkKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KGlkLCBzY29ybTIwMDRfcmVnZXguQ01JTG9uZ0lkZW50aWZpZXIpKSB7XG4gICAgICB0aGlzLiNpZCA9IGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGNtaS5pbnRlcmFjdGlvbnMubi5vYmplY3RpdmVzLm5cbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICBpZDogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdpZCc6IHRoaXMuaWQsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMjAwNCdzIGNtaS5pbnRlcmFjdGlvbnMubi5jb3JyZWN0X3Jlc3BvbnNlcy5uIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgQ01JSW50ZXJhY3Rpb25zQ29ycmVjdFJlc3BvbnNlc09iamVjdCBleHRlbmRzIEJhc2VDTUkge1xuICAjcGF0dGVybiA9ICcnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgY21pLmludGVyYWN0aW9ucy5uLmNvcnJlY3RfcmVzcG9uc2VzLm5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcGF0dGVyblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy4jcGF0dGVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNwYXR0ZXJuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gICAqL1xuICBzZXQgcGF0dGVybihwYXR0ZXJuKSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KHBhdHRlcm4sIHNjb3JtMjAwNF9yZWdleC5DTUlGZWVkYmFjaykpIHtcbiAgICAgIHRoaXMuI3BhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gY21pLmludGVyYWN0aW9ucy5uLmNvcnJlY3RfcmVzcG9uc2VzLm4gb2JqZWN0XG4gICAqIEByZXR1cm4ge1xuICAgKiAgICB7XG4gICAqICAgICAgcGF0dGVybjogc3RyaW5nXG4gICAqICAgIH1cbiAgICogIH1cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICB0aGlzLmpzb25TdHJpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICdwYXR0ZXJuJzogdGhpcy5wYXR0ZXJuLFxuICAgIH07XG4gICAgZGVsZXRlIHRoaXMuanNvblN0cmluZztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIFNDT1JNIDIwMDQncyBhZGwgb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBREwgZXh0ZW5kcyBCYXNlQ01JIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBhZGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm5hdiA9IG5ldyBBRExOYXYoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgQVBJIGhhcyBiZWVuIGluaXRpYWxpemVkIGFmdGVyIHRoZSBDTUkgaGFzIGJlZW4gY3JlYXRlZFxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5uYXY/LmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGFkbFxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIG5hdjoge1xuICAgKiAgICAgICAgcmVxdWVzdDogc3RyaW5nXG4gICAqICAgICAgfVxuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnbmF2JzogdGhpcy5uYXYsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMjAwNCdzIGFkbC5uYXYgb2JqZWN0XG4gKi9cbmNsYXNzIEFETE5hdiBleHRlbmRzIEJhc2VDTUkge1xuICAjcmVxdWVzdCA9ICdfbm9uZV8nO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYWRsLm5hdlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVxdWVzdF92YWxpZCA9IG5ldyBBRExOYXZSZXF1ZXN0VmFsaWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgQVBJIGhhcyBiZWVuIGluaXRpYWxpemVkIGFmdGVyIHRoZSBDTUkgaGFzIGJlZW4gY3JlYXRlZFxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5yZXF1ZXN0X3ZhbGlkPy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcmVxdWVzdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgcmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy4jcmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNyZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0XG4gICAqL1xuICBzZXQgcmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgaWYgKGNoZWNrMjAwNFZhbGlkRm9ybWF0KHJlcXVlc3QsIHNjb3JtMjAwNF9yZWdleC5OQVZFdmVudCkpIHtcbiAgICAgIHRoaXMuI3JlcXVlc3QgPSByZXF1ZXN0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGFkbC5uYXZcbiAgICpcbiAgICogQHJldHVybiB7XG4gICAqICAgIHtcbiAgICogICAgICByZXF1ZXN0OiBzdHJpbmdcbiAgICogICAgfVxuICAgKiAgfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHRoaXMuanNvblN0cmluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3JlcXVlc3QnOiB0aGlzLnJlcXVlc3QsXG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5qc29uU3RyaW5nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgU0NPUk0gMjAwNCdzIGFkbC5uYXYucmVxdWVzdF92YWxpZCBvYmplY3RcbiAqL1xuY2xhc3MgQURMTmF2UmVxdWVzdFZhbGlkIGV4dGVuZHMgQmFzZUNNSSB7XG4gICNjb250aW51ZSA9ICd1bmtub3duJztcbiAgI3ByZXZpb3VzID0gJ3Vua25vd24nO1xuICBjaG9pY2UgPSBjbGFzcyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGFyZ2V0IGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHsqfSBfdGFyZ2V0XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIF9pc1RhcmdldFZhbGlkID0gKF90YXJnZXQpID0+ICd1bmtub3duJztcbiAgfTtcbiAganVtcCA9IGNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0YXJnZXQgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0geyp9IF90YXJnZXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgX2lzVGFyZ2V0VmFsaWQgPSAoX3RhcmdldCkgPT4gJ3Vua25vd24nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYWRsLm5hdi5yZXF1ZXN0X3ZhbGlkXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgI2NvbnRpbnVlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBjb250aW51ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jY29udGludWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciAjY29udGludWUuIEp1c3QgdGhyb3dzIGFuIGVycm9yLlxuICAgKiBAcGFyYW0geyp9IF9cbiAgICovXG4gIHNldCBjb250aW51ZShfKSB7XG4gICAgdGhyb3dSZWFkT25seUVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjcHJldmlvdXNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHByZXZpb3VzKCkge1xuICAgIHJldHVybiB0aGlzLiNwcmV2aW91cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yICNwcmV2aW91cy4gSnVzdCB0aHJvd3MgYW4gZXJyb3IuXG4gICAqIEBwYXJhbSB7Kn0gX1xuICAgKi9cbiAgc2V0IHByZXZpb3VzKF8pIHtcbiAgICB0aHJvd1JlYWRPbmx5RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0pTT04gZm9yIGFkbC5uYXYucmVxdWVzdF92YWxpZFxuICAgKlxuICAgKiBAcmV0dXJuIHtcbiAgICogICAge1xuICAgKiAgICAgIHByZXZpb3VzOiBzdHJpbmcsXG4gICAqICAgICAgY29udGludWU6IHN0cmluZ1xuICAgKiAgICB9XG4gICAqICB9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgdGhpcy5qc29uU3RyaW5nID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAncHJldmlvdXMnOiB0aGlzLnByZXZpb3VzLFxuICAgICAgJ2NvbnRpbnVlJzogdGhpcy5jb250aW51ZSxcbiAgICB9O1xuICAgIGRlbGV0ZSB0aGlzLmpzb25TdHJpbmc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuY29uc3QgZ2xvYmFsID0ge1xuICBTQ09STV9UUlVFOiAndHJ1ZScsXG4gIFNDT1JNX0ZBTFNFOiAnZmFsc2UnLFxuICBTVEFURV9OT1RfSU5JVElBTElaRUQ6IDAsXG4gIFNUQVRFX0lOSVRJQUxJWkVEOiAxLFxuICBTVEFURV9URVJNSU5BVEVEOiAyLFxuICBMT0dfTEVWRUxfREVCVUc6IDEsXG4gIExPR19MRVZFTF9JTkZPOiAyLFxuICBMT0dfTEVWRUxfV0FSTklORzogMyxcbiAgTE9HX0xFVkVMX0VSUk9SOiA0LFxuICBMT0dfTEVWRUxfTk9ORTogNSxcbn07XG5cbmNvbnN0IHNjb3JtMTIgPSB7XG4gIC8vIENoaWxkcmVuIGxpc3RzXG4gIGNtaV9jaGlsZHJlbjogJ2NvcmUsc3VzcGVuZF9kYXRhLGxhdW5jaF9kYXRhLGNvbW1lbnRzLG9iamVjdGl2ZXMsc3R1ZGVudF9kYXRhLHN0dWRlbnRfcHJlZmVyZW5jZSxpbnRlcmFjdGlvbnMnLFxuICBjb3JlX2NoaWxkcmVuOiAnc3R1ZGVudF9pZCxzdHVkZW50X25hbWUsbGVzc29uX2xvY2F0aW9uLGNyZWRpdCxsZXNzb25fc3RhdHVzLGVudHJ5LHNjb3JlLHRvdGFsX3RpbWUsbGVzc29uX21vZGUsZXhpdCxzZXNzaW9uX3RpbWUnLFxuICBzY29yZV9jaGlsZHJlbjogJ3JhdyxtaW4sbWF4JyxcbiAgY29tbWVudHNfY2hpbGRyZW46ICdjb250ZW50LGxvY2F0aW9uLHRpbWUnLFxuICBvYmplY3RpdmVzX2NoaWxkcmVuOiAnaWQsc2NvcmUsc3RhdHVzJyxcbiAgY29ycmVjdF9yZXNwb25zZXNfY2hpbGRyZW46ICdwYXR0ZXJuJyxcbiAgc3R1ZGVudF9kYXRhX2NoaWxkcmVuOiAnbWFzdGVyeV9zY29yZSxtYXhfdGltZV9hbGxvd2VkLHRpbWVfbGltaXRfYWN0aW9uJyxcbiAgc3R1ZGVudF9wcmVmZXJlbmNlX2NoaWxkcmVuOiAnYXVkaW8sbGFuZ3VhZ2Usc3BlZWQsdGV4dCcsXG4gIGludGVyYWN0aW9uc19jaGlsZHJlbjogJ2lkLG9iamVjdGl2ZXMsdGltZSx0eXBlLGNvcnJlY3RfcmVzcG9uc2VzLHdlaWdodGluZyxzdHVkZW50X3Jlc3BvbnNlLHJlc3VsdCxsYXRlbmN5JyxcblxuICBlcnJvcl9kZXNjcmlwdGlvbnM6IHtcbiAgICAnMTAxJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnR2VuZXJhbCBFeGNlcHRpb24nLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ05vIHNwZWNpZmljIGVycm9yIGNvZGUgZXhpc3RzIHRvIGRlc2NyaWJlIHRoZSBlcnJvci4gVXNlIExNU0dldERpYWdub3N0aWMgZm9yIG1vcmUgaW5mb3JtYXRpb24nLFxuICAgIH0sXG4gICAgJzIwMSc6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0ludmFsaWQgYXJndW1lbnQgZXJyb3InLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0luZGljYXRlcyB0aGF0IGFuIGFyZ3VtZW50IHJlcHJlc2VudHMgYW4gaW52YWxpZCBkYXRhIG1vZGVsIGVsZW1lbnQgb3IgaXMgb3RoZXJ3aXNlIGluY29ycmVjdC4nLFxuICAgIH0sXG4gICAgJzIwMic6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0VsZW1lbnQgY2Fubm90IGhhdmUgY2hpbGRyZW4nLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0luZGljYXRlcyB0aGF0IExNU0dldFZhbHVlIHdhcyBjYWxsZWQgd2l0aCBhIGRhdGEgbW9kZWwgZWxlbWVudCBuYW1lIHRoYXQgZW5kcyBpbiBcIl9jaGlsZHJlblwiIGZvciBhIGRhdGEgbW9kZWwgZWxlbWVudCB0aGF0IGRvZXMgbm90IHN1cHBvcnQgdGhlIFwiX2NoaWxkcmVuXCIgc3VmZml4LicsXG4gICAgfSxcbiAgICAnMjAzJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnRWxlbWVudCBub3QgYW4gYXJyYXkgLSBjYW5ub3QgaGF2ZSBjb3VudCcsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnSW5kaWNhdGVzIHRoYXQgTE1TR2V0VmFsdWUgd2FzIGNhbGxlZCB3aXRoIGEgZGF0YSBtb2RlbCBlbGVtZW50IG5hbWUgdGhhdCBlbmRzIGluIFwiX2NvdW50XCIgZm9yIGEgZGF0YSBtb2RlbCBlbGVtZW50IHRoYXQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgXCJfY291bnRcIiBzdWZmaXguJyxcbiAgICB9LFxuICAgICczMDEnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdOb3QgaW5pdGlhbGl6ZWQnLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0luZGljYXRlcyB0aGF0IGFuIEFQSSBjYWxsIHdhcyBtYWRlIGJlZm9yZSB0aGUgY2FsbCB0byBsbXNJbml0aWFsaXplLicsXG4gICAgfSxcbiAgICAnNDAxJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnTm90IGltcGxlbWVudGVkIGVycm9yJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdUaGUgZGF0YSBtb2RlbCBlbGVtZW50IGluZGljYXRlZCBpbiBhIGNhbGwgdG8gTE1TR2V0VmFsdWUgb3IgTE1TU2V0VmFsdWUgaXMgdmFsaWQsIGJ1dCB3YXMgbm90IGltcGxlbWVudGVkIGJ5IHRoaXMgTE1TLiBTQ09STSAxLjIgZGVmaW5lcyBhIHNldCBvZiBkYXRhIG1vZGVsIGVsZW1lbnRzIGFzIGJlaW5nIG9wdGlvbmFsIGZvciBhbiBMTVMgdG8gaW1wbGVtZW50LicsXG4gICAgfSxcbiAgICAnNDAyJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnSW52YWxpZCBzZXQgdmFsdWUsIGVsZW1lbnQgaXMgYSBrZXl3b3JkJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdJbmRpY2F0ZXMgdGhhdCBMTVNTZXRWYWx1ZSB3YXMgY2FsbGVkIG9uIGEgZGF0YSBtb2RlbCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyBhIGtleXdvcmQgKGVsZW1lbnRzIHRoYXQgZW5kIGluIFwiX2NoaWxkcmVuXCIgYW5kIFwiX2NvdW50XCIpLicsXG4gICAgfSxcbiAgICAnNDAzJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnRWxlbWVudCBpcyByZWFkIG9ubHknLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0xNU1NldFZhbHVlIHdhcyBjYWxsZWQgd2l0aCBhIGRhdGEgbW9kZWwgZWxlbWVudCB0aGF0IGNhbiBvbmx5IGJlIHJlYWQuJyxcbiAgICB9LFxuICAgICc0MDQnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdFbGVtZW50IGlzIHdyaXRlIG9ubHknLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0xNU0dldFZhbHVlIHdhcyBjYWxsZWQgb24gYSBkYXRhIG1vZGVsIGVsZW1lbnQgdGhhdCBjYW4gb25seSBiZSB3cml0dGVuIHRvLicsXG4gICAgfSxcbiAgICAnNDA1Jzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnSW5jb3JyZWN0IERhdGEgVHlwZScsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnTE1TU2V0VmFsdWUgd2FzIGNhbGxlZCB3aXRoIGEgdmFsdWUgdGhhdCBpcyBub3QgY29uc2lzdGVudCB3aXRoIHRoZSBkYXRhIGZvcm1hdCBvZiB0aGUgc3VwcGxpZWQgZGF0YSBtb2RlbCBlbGVtZW50LicsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGFpY2MgPSB7XG4gIC4uLnNjb3JtMTIsIC4uLntcbiAgICBjbWlfY2hpbGRyZW46ICdjb3JlLHN1c3BlbmRfZGF0YSxsYXVuY2hfZGF0YSxjb21tZW50cyxvYmplY3RpdmVzLHN0dWRlbnRfZGF0YSxzdHVkZW50X3ByZWZlcmVuY2UsaW50ZXJhY3Rpb25zLGV2YWx1YXRpb24nLFxuICAgIHN0dWRlbnRfcHJlZmVyZW5jZV9jaGlsZHJlbjogJ2F1ZGlvLGxhbmd1YWdlLGxlc3Nvbl90eXBlLHNwZWVkLHRleHQsdGV4dF9jb2xvcix0ZXh0X2xvY2F0aW9uLHRleHRfc2l6ZSx2aWRlbyx3aW5kb3dzJyxcbiAgICBzdHVkZW50X2RhdGFfY2hpbGRyZW46ICdhdHRlbXB0X251bWJlcix0cmllcyxtYXN0ZXJ5X3Njb3JlLG1heF90aW1lX2FsbG93ZWQsdGltZV9saW1pdF9hY3Rpb24nLFxuICAgIHN0dWRlbnRfZGVtb2dyYXBoaWNzX2NoaWxkcmVuOiAnY2l0eSxjbGFzcyxjb21wYW55LGNvdW50cnksZXhwZXJpZW5jZSxmYW1pbGlhcl9uYW1lLGluc3RydWN0b3JfbmFtZSx0aXRsZSxuYXRpdmVfbGFuZ3VhZ2Usc3RhdGUsc3RyZWV0X2FkZHJlc3MsdGVsZXBob25lLHllYXJzX2V4cGVyaWVuY2UnLFxuICAgIHRyaWVzX2NoaWxkcmVuOiAndGltZSxzdGF0dXMsc2NvcmUnLFxuICAgIGF0dGVtcHRfcmVjb3Jkc19jaGlsZHJlbjogJ3Njb3JlLGxlc3Nvbl9zdGF0dXMnLFxuICAgIHBhdGhzX2NoaWxkcmVuOiAnbG9jYXRpb25faWQsZGF0ZSx0aW1lLHN0YXR1cyx3aHlfbGVmdCx0aW1lX2luX2VsZW1lbnQnLFxuICB9LFxufTtcblxuY29uc3Qgc2Nvcm0yMDA0ID0ge1xuICAvLyBDaGlsZHJlbiBsaXN0c1xuICBjbWlfY2hpbGRyZW46ICdfdmVyc2lvbixjb21tZW50c19mcm9tX2xlYXJuZXIsY29tbWVudHNfZnJvbV9sbXMsY29tcGxldGlvbl9zdGF0dXMsY3JlZGl0LGVudHJ5LGV4aXQsaW50ZXJhY3Rpb25zLGxhdW5jaF9kYXRhLGxlYXJuZXJfaWQsbGVhcm5lcl9uYW1lLGxlYXJuZXJfcHJlZmVyZW5jZSxsb2NhdGlvbixtYXhfdGltZV9hbGxvd2VkLG1vZGUsb2JqZWN0aXZlcyxwcm9ncmVzc19tZWFzdXJlLHNjYWxlZF9wYXNzaW5nX3Njb3JlLHNjb3JlLHNlc3Npb25fdGltZSxzdWNjZXNzX3N0YXR1cyxzdXNwZW5kX2RhdGEsdGltZV9saW1pdF9hY3Rpb24sdG90YWxfdGltZScsXG4gIGNvbW1lbnRzX2NoaWxkcmVuOiAnY29tbWVudCx0aW1lc3RhbXAsbG9jYXRpb24nLFxuICBzY29yZV9jaGlsZHJlbjogJ21heCxyYXcsc2NhbGVkLG1pbicsXG4gIG9iamVjdGl2ZXNfY2hpbGRyZW46ICdwcm9ncmVzc19tZWFzdXJlLGNvbXBsZXRpb25fc3RhdHVzLHN1Y2Nlc3Nfc3RhdHVzLGRlc2NyaXB0aW9uLHNjb3JlLGlkJyxcbiAgY29ycmVjdF9yZXNwb25zZXNfY2hpbGRyZW46ICdwYXR0ZXJuJyxcbiAgc3R1ZGVudF9kYXRhX2NoaWxkcmVuOiAnbWFzdGVyeV9zY29yZSxtYXhfdGltZV9hbGxvd2VkLHRpbWVfbGltaXRfYWN0aW9uJyxcbiAgc3R1ZGVudF9wcmVmZXJlbmNlX2NoaWxkcmVuOiAnYXVkaW9fbGV2ZWwsYXVkaW9fY2FwdGlvbmluZyxkZWxpdmVyeV9zcGVlZCxsYW5ndWFnZScsXG4gIGludGVyYWN0aW9uc19jaGlsZHJlbjogJ2lkLHR5cGUsb2JqZWN0aXZlcyx0aW1lc3RhbXAsY29ycmVjdF9yZXNwb25zZXMsd2VpZ2h0aW5nLGxlYXJuZXJfcmVzcG9uc2UscmVzdWx0LGxhdGVuY3ksZGVzY3JpcHRpb24nLFxuXG4gIGVycm9yX2Rlc2NyaXB0aW9uczoge1xuICAgICcwJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnTm8gRXJyb3InLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ05vIGVycm9yIG9jY3VycmVkLCB0aGUgcHJldmlvdXMgQVBJIGNhbGwgd2FzIHN1Y2Nlc3NmdWwuJyxcbiAgICB9LFxuICAgICcxMDEnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdHZW5lcmFsIEV4Y2VwdGlvbicsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnTm8gc3BlY2lmaWMgZXJyb3IgY29kZSBleGlzdHMgdG8gZGVzY3JpYmUgdGhlIGVycm9yLiBVc2UgR2V0RGlhZ25vc3RpYyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgIH0sXG4gICAgJzEwMic6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0dlbmVyYWwgSW5pdGlhbGl6YXRpb24gRmFpbHVyZScsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnQ2FsbCB0byBJbml0aWFsaXplIGZhaWxlZCBmb3IgYW4gdW5rbm93biByZWFzb24uJyxcbiAgICB9LFxuICAgICcxMDMnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdBbHJlYWR5IEluaXRpYWxpemVkJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIEluaXRpYWxpemUgZmFpbGVkIGJlY2F1c2UgSW5pdGlhbGl6ZSB3YXMgYWxyZWFkeSBjYWxsZWQuJyxcbiAgICB9LFxuICAgICcxMDQnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdDb250ZW50IEluc3RhbmNlIFRlcm1pbmF0ZWQnLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0NhbGwgdG8gSW5pdGlhbGl6ZSBmYWlsZWQgYmVjYXVzZSBUZXJtaW5hdGUgd2FzIGFscmVhZHkgY2FsbGVkLicsXG4gICAgfSxcbiAgICAnMTExJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnR2VuZXJhbCBUZXJtaW5hdGlvbiBGYWlsdXJlJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIFRlcm1pbmF0ZSBmYWlsZWQgZm9yIGFuIHVua25vd24gcmVhc29uLicsXG4gICAgfSxcbiAgICAnMTEyJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnVGVybWluYXRpb24gQmVmb3JlIEluaXRpYWxpemF0aW9uJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIFRlcm1pbmF0ZSBmYWlsZWQgYmVjYXVzZSBpdCB3YXMgbWFkZSBiZWZvcmUgdGhlIGNhbGwgdG8gSW5pdGlhbGl6ZS4nLFxuICAgIH0sXG4gICAgJzExMyc6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ1Rlcm1pbmF0aW9uIEFmdGVyIFRlcm1pbmF0aW9uJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIFRlcm1pbmF0ZSBmYWlsZWQgYmVjYXVzZSBUZXJtaW5hdGUgd2FzIGFscmVhZHkgY2FsbGVkLicsXG4gICAgfSxcbiAgICAnMTIyJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnUmV0cmlldmUgRGF0YSBCZWZvcmUgSW5pdGlhbGl6YXRpb24nLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0NhbGwgdG8gR2V0VmFsdWUgZmFpbGVkIGJlY2F1c2UgaXQgd2FzIG1hZGUgYmVmb3JlIHRoZSBjYWxsIHRvIEluaXRpYWxpemUuJyxcbiAgICB9LFxuICAgICcxMjMnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdSZXRyaWV2ZSBEYXRhIEFmdGVyIFRlcm1pbmF0aW9uJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIEdldFZhbHVlIGZhaWxlZCBiZWNhdXNlIGl0IHdhcyBtYWRlIGFmdGVyIHRoZSBjYWxsIHRvIFRlcm1pbmF0ZS4nLFxuICAgIH0sXG4gICAgJzEzMic6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ1N0b3JlIERhdGEgQmVmb3JlIEluaXRpYWxpemF0aW9uJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIFNldFZhbHVlIGZhaWxlZCBiZWNhdXNlIGl0IHdhcyBtYWRlIGJlZm9yZSB0aGUgY2FsbCB0byBJbml0aWFsaXplLicsXG4gICAgfSxcbiAgICAnMTMzJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnU3RvcmUgRGF0YSBBZnRlciBUZXJtaW5hdGlvbicsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnQ2FsbCB0byBTZXRWYWx1ZSBmYWlsZWQgYmVjYXVzZSBpdCB3YXMgbWFkZSBhZnRlciB0aGUgY2FsbCB0byBUZXJtaW5hdGUuJyxcbiAgICB9LFxuICAgICcxNDInOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdDb21taXQgQmVmb3JlIEluaXRpYWxpemF0aW9uJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdDYWxsIHRvIENvbW1pdCBmYWlsZWQgYmVjYXVzZSBpdCB3YXMgbWFkZSBiZWZvcmUgdGhlIGNhbGwgdG8gSW5pdGlhbGl6ZS4nLFxuICAgIH0sXG4gICAgJzE0Myc6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0NvbW1pdCBBZnRlciBUZXJtaW5hdGlvbicsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnQ2FsbCB0byBDb21taXQgZmFpbGVkIGJlY2F1c2UgaXQgd2FzIG1hZGUgYWZ0ZXIgdGhlIGNhbGwgdG8gVGVybWluYXRlLicsXG4gICAgfSxcbiAgICAnMjAxJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnR2VuZXJhbCBBcmd1bWVudCBFcnJvcicsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnQW4gaW52YWxpZCBhcmd1bWVudCB3YXMgcGFzc2VkIHRvIGFuIEFQSSBtZXRob2QgKHVzdWFsbHkgaW5kaWNhdGVzIHRoYXQgSW5pdGlhbGl6ZSwgQ29tbWl0IG9yIFRlcm1pbmF0ZSBkaWQgbm90IHJlY2VpdmUgdGhlIGV4cGVjdGVkIGVtcHR5IHN0cmluZyBhcmd1bWVudC4nLFxuICAgIH0sXG4gICAgJzMwMSc6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0dlbmVyYWwgR2V0IEZhaWx1cmUnLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0luZGljYXRlcyBhIGZhaWxlZCBHZXRWYWx1ZSBjYWxsIHdoZXJlIG5vIG90aGVyIHNwZWNpZmljIGVycm9yIGNvZGUgaXMgYXBwbGljYWJsZS4gVXNlIEdldERpYWdub3N0aWMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyxcbiAgICB9LFxuICAgICczNTEnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdHZW5lcmFsIFNldCBGYWlsdXJlJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdJbmRpY2F0ZXMgYSBmYWlsZWQgU2V0VmFsdWUgY2FsbCB3aGVyZSBubyBvdGhlciBzcGVjaWZpYyBlcnJvciBjb2RlIGlzIGFwcGxpY2FibGUuIFVzZSBHZXREaWFnbm9zdGljIGZvciBtb3JlIGluZm9ybWF0aW9uLicsXG4gICAgfSxcbiAgICAnMzkxJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnR2VuZXJhbCBDb21taXQgRmFpbHVyZScsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnSW5kaWNhdGVzIGEgZmFpbGVkIENvbW1pdCBjYWxsIHdoZXJlIG5vIG90aGVyIHNwZWNpZmljIGVycm9yIGNvZGUgaXMgYXBwbGljYWJsZS4gVXNlIEdldERpYWdub3N0aWMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJyxcbiAgICB9LFxuICAgICc0MDEnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdVbmRlZmluZWQgRGF0YSBNb2RlbCBFbGVtZW50JyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdUaGUgZGF0YSBtb2RlbCBlbGVtZW50IG5hbWUgcGFzc2VkIHRvIEdldFZhbHVlIG9yIFNldFZhbHVlIGlzIG5vdCBhIHZhbGlkIFNDT1JNIGRhdGEgbW9kZWwgZWxlbWVudC4nLFxuICAgIH0sXG4gICAgJzQwMic6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ1VuaW1wbGVtZW50ZWQgRGF0YSBNb2RlbCBFbGVtZW50JyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdUaGUgZGF0YSBtb2RlbCBlbGVtZW50IGluZGljYXRlZCBpbiBhIGNhbGwgdG8gR2V0VmFsdWUgb3IgU2V0VmFsdWUgaXMgdmFsaWQsIGJ1dCB3YXMgbm90IGltcGxlbWVudGVkIGJ5IHRoaXMgTE1TLiBJbiBTQ09STSAyMDA0LCB0aGlzIGVycm9yIHdvdWxkIGluZGljYXRlIGFuIExNUyB0aGF0IGlzIG5vdCBmdWxseSBTQ09STSBjb25mb3JtYW50LicsXG4gICAgfSxcbiAgICAnNDAzJzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnRGF0YSBNb2RlbCBFbGVtZW50IFZhbHVlIE5vdCBJbml0aWFsaXplZCcsXG4gICAgICBkZXRhaWxNZXNzYWdlOiAnQXR0ZW1wdCB0byByZWFkIGEgZGF0YSBtb2RlbCBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIGJ5IHRoZSBMTVMgb3IgdGhyb3VnaCBhIFNldFZhbHVlIGNhbGwuIFRoaXMgZXJyb3IgY29uZGl0aW9uIGlzIG9mdGVuIHJlYWNoZWQgZHVyaW5nIG5vcm1hbCBleGVjdXRpb24gb2YgYSBTQ08uJyxcbiAgICB9LFxuICAgICc0MDQnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdEYXRhIE1vZGVsIEVsZW1lbnQgSXMgUmVhZCBPbmx5JyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdTZXRWYWx1ZSB3YXMgY2FsbGVkIHdpdGggYSBkYXRhIG1vZGVsIGVsZW1lbnQgdGhhdCBjYW4gb25seSBiZSByZWFkLicsXG4gICAgfSxcbiAgICAnNDA1Jzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnRGF0YSBNb2RlbCBFbGVtZW50IElzIFdyaXRlIE9ubHknLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ0dldFZhbHVlIHdhcyBjYWxsZWQgb24gYSBkYXRhIG1vZGVsIGVsZW1lbnQgdGhhdCBjYW4gb25seSBiZSB3cml0dGVuIHRvLicsXG4gICAgfSxcbiAgICAnNDA2Jzoge1xuICAgICAgYmFzaWNNZXNzYWdlOiAnRGF0YSBNb2RlbCBFbGVtZW50IFR5cGUgTWlzbWF0Y2gnLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ1NldFZhbHVlIHdhcyBjYWxsZWQgd2l0aCBhIHZhbHVlIHRoYXQgaXMgbm90IGNvbnNpc3RlbnQgd2l0aCB0aGUgZGF0YSBmb3JtYXQgb2YgdGhlIHN1cHBsaWVkIGRhdGEgbW9kZWwgZWxlbWVudC4nLFxuICAgIH0sXG4gICAgJzQwNyc6IHtcbiAgICAgIGJhc2ljTWVzc2FnZTogJ0RhdGEgTW9kZWwgRWxlbWVudCBWYWx1ZSBPdXQgT2YgUmFuZ2UnLFxuICAgICAgZGV0YWlsTWVzc2FnZTogJ1RoZSBudW1lcmljIHZhbHVlIHN1cHBsaWVkIHRvIGEgU2V0VmFsdWUgY2FsbCBpcyBvdXRzaWRlIG9mIHRoZSBudW1lcmljIHJhbmdlIGFsbG93ZWQgZm9yIHRoZSBzdXBwbGllZCBkYXRhIG1vZGVsIGVsZW1lbnQuJyxcbiAgICB9LFxuICAgICc0MDgnOiB7XG4gICAgICBiYXNpY01lc3NhZ2U6ICdEYXRhIE1vZGVsIERlcGVuZGVuY3kgTm90IEVzdGFibGlzaGVkJyxcbiAgICAgIGRldGFpbE1lc3NhZ2U6ICdTb21lIGRhdGEgbW9kZWwgZWxlbWVudHMgY2Fubm90IGJlIHNldCB1bnRpbCBhbm90aGVyIGRhdGEgbW9kZWwgZWxlbWVudCB3YXMgc2V0LiBUaGlzIGVycm9yIGNvbmRpdGlvbiBpbmRpY2F0ZXMgdGhhdCB0aGUgcHJlcmVxdWlzaXRlIGVsZW1lbnQgd2FzIG5vdCBzZXQgYmVmb3JlIHRoZSBkZXBlbmRlbnQgZWxlbWVudC4nLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBBUElDb25zdGFudHMgPSB7XG4gIGdsb2JhbDogZ2xvYmFsLFxuICBzY29ybTEyOiBzY29ybTEyLFxuICBhaWNjOiBhaWNjLFxuICBzY29ybTIwMDQ6IHNjb3JtMjAwNCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUNvbnN0YW50cztcbiIsIi8vIEBmbG93XG5jb25zdCBnbG9iYWwgPSB7XG4gIEdFTkVSQUw6IDEwMSxcbiAgSU5JVElBTElaQVRJT05fRkFJTEVEOiAxMDEsXG4gIElOSVRJQUxJWkVEOiAxMDEsXG4gIFRFUk1JTkFURUQ6IDEwMSxcbiAgVEVSTUlOQVRJT05fRkFJTFVSRTogMTAxLFxuICBURVJNSU5BVElPTl9CRUZPUkVfSU5JVDogMTAxLFxuICBNVUxUSVBMRV9URVJNSU5BVElPTjogMTAxLFxuICBSRVRSSUVWRV9CRUZPUkVfSU5JVDogMTAxLFxuICBSRVRSSUVWRV9BRlRFUl9URVJNOiAxMDEsXG4gIFNUT1JFX0JFRk9SRV9JTklUOiAxMDEsXG4gIFNUT1JFX0FGVEVSX1RFUk06IDEwMSxcbiAgQ09NTUlUX0JFRk9SRV9JTklUOiAxMDEsXG4gIENPTU1JVF9BRlRFUl9URVJNOiAxMDEsXG4gIEFSR1VNRU5UX0VSUk9SOiAxMDEsXG4gIENISUxEUkVOX0VSUk9SOiAxMDEsXG4gIENPVU5UX0VSUk9SOiAxMDEsXG4gIEdFTkVSQUxfR0VUX0ZBSUxVUkU6IDEwMSxcbiAgR0VORVJBTF9TRVRfRkFJTFVSRTogMTAxLFxuICBHRU5FUkFMX0NPTU1JVF9GQUlMVVJFOiAxMDEsXG4gIFVOREVGSU5FRF9EQVRBX01PREVMOiAxMDEsXG4gIFVOSU1QTEVNRU5URURfRUxFTUVOVDogMTAxLFxuICBWQUxVRV9OT1RfSU5JVElBTElaRUQ6IDEwMSxcbiAgSU5WQUxJRF9TRVRfVkFMVUU6IDEwMSxcbiAgUkVBRF9PTkxZX0VMRU1FTlQ6IDEwMSxcbiAgV1JJVEVfT05MWV9FTEVNRU5UOiAxMDEsXG4gIFRZUEVfTUlTTUFUQ0g6IDEwMSxcbiAgVkFMVUVfT1VUX09GX1JBTkdFOiAxMDEsXG4gIERFUEVOREVOQ1lfTk9UX0VTVEFCTElTSEVEOiAxMDEsXG59O1xuXG5jb25zdCBzY29ybTEyID0ge1xuICAuLi5nbG9iYWwsIC4uLntcbiAgICBSRVRSSUVWRV9CRUZPUkVfSU5JVDogMzAxLFxuICAgIFNUT1JFX0JFRk9SRV9JTklUOiAzMDEsXG4gICAgQ09NTUlUX0JFRk9SRV9JTklUOiAzMDEsXG4gICAgQVJHVU1FTlRfRVJST1I6IDIwMSxcbiAgICBDSElMRFJFTl9FUlJPUjogMjAyLFxuICAgIENPVU5UX0VSUk9SOiAyMDMsXG4gICAgVU5ERUZJTkVEX0RBVEFfTU9ERUw6IDQwMSxcbiAgICBVTklNUExFTUVOVEVEX0VMRU1FTlQ6IDQwMSxcbiAgICBWQUxVRV9OT1RfSU5JVElBTElaRUQ6IDMwMSxcbiAgICBJTlZBTElEX1NFVF9WQUxVRTogNDAyLFxuICAgIFJFQURfT05MWV9FTEVNRU5UOiA0MDMsXG4gICAgV1JJVEVfT05MWV9FTEVNRU5UOiA0MDQsXG4gICAgVFlQRV9NSVNNQVRDSDogNDA1LFxuICAgIFZBTFVFX09VVF9PRl9SQU5HRTogNDA3LFxuICAgIERFUEVOREVOQ1lfTk9UX0VTVEFCTElTSEVEOiA0MDgsXG4gIH0sXG59O1xuXG5jb25zdCBzY29ybTIwMDQgPSB7XG4gIC4uLmdsb2JhbCwgLi4ue1xuICAgIElOSVRJQUxJWkFUSU9OX0ZBSUxFRDogMTAyLFxuICAgIElOSVRJQUxJWkVEOiAxMDMsXG4gICAgVEVSTUlOQVRFRDogMTA0LFxuICAgIFRFUk1JTkFUSU9OX0ZBSUxVUkU6IDExMSxcbiAgICBURVJNSU5BVElPTl9CRUZPUkVfSU5JVDogMTEyLFxuICAgIE1VTFRJUExFX1RFUk1JTkFUSU9OUzogMTEzLFxuICAgIFJFVFJJRVZFX0JFRk9SRV9JTklUOiAxMjIsXG4gICAgUkVUUklFVkVfQUZURVJfVEVSTTogMTIzLFxuICAgIFNUT1JFX0JFRk9SRV9JTklUOiAxMzIsXG4gICAgU1RPUkVfQUZURVJfVEVSTTogMTMzLFxuICAgIENPTU1JVF9CRUZPUkVfSU5JVDogMTQyLFxuICAgIENPTU1JVF9BRlRFUl9URVJNOiAxNDMsXG4gICAgQVJHVU1FTlRfRVJST1I6IDIwMSxcbiAgICBHRU5FUkFMX0dFVF9GQUlMVVJFOiAzMDEsXG4gICAgR0VORVJBTF9TRVRfRkFJTFVSRTogMzUxLFxuICAgIEdFTkVSQUxfQ09NTUlUX0ZBSUxVUkU6IDM5MSxcbiAgICBVTkRFRklORURfREFUQV9NT0RFTDogNDAxLFxuICAgIFVOSU1QTEVNRU5URURfRUxFTUVOVDogNDAyLFxuICAgIFZBTFVFX05PVF9JTklUSUFMSVpFRDogNDAzLFxuICAgIFJFQURfT05MWV9FTEVNRU5UOiA0MDQsXG4gICAgV1JJVEVfT05MWV9FTEVNRU5UOiA0MDUsXG4gICAgVFlQRV9NSVNNQVRDSDogNDA2LFxuICAgIFZBTFVFX09VVF9PRl9SQU5HRTogNDA3LFxuICAgIERFUEVOREVOQ1lfTk9UX0VTVEFCTElTSEVEOiA0MDgsXG4gIH0sXG59O1xuXG5jb25zdCBFcnJvckNvZGVzID0ge1xuICBzY29ybTEyOiBzY29ybTEyLFxuICBzY29ybTIwMDQ6IHNjb3JtMjAwNCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQ29kZXM7XG4iLCJjb25zdCBWYWxpZExhbmd1YWdlcyA9IHtcbiAgJ2FhJzogJ2FhJywgJ2FiJzogJ2FiJywgJ2FlJzogJ2FlJywgJ2FmJzogJ2FmJywgJ2FrJzogJ2FrJywgJ2FtJzogJ2FtJyxcbiAgJ2FuJzogJ2FuJywgJ2FyJzogJ2FyJywgJ2FzJzogJ2FzJywgJ2F2JzogJ2F2JywgJ2F5JzogJ2F5JywgJ2F6JzogJ2F6JyxcbiAgJ2JhJzogJ2JhJywgJ2JlJzogJ2JlJywgJ2JnJzogJ2JnJywgJ2JoJzogJ2JoJywgJ2JpJzogJ2JpJywgJ2JtJzogJ2JtJyxcbiAgJ2JuJzogJ2JuJywgJ2JvJzogJ2JvJywgJ2JyJzogJ2JyJywgJ2JzJzogJ2JzJywgJ2NhJzogJ2NhJywgJ2NlJzogJ2NlJyxcbiAgJ2NoJzogJ2NoJywgJ2NvJzogJ2NvJywgJ2NyJzogJ2NyJywgJ2NzJzogJ2NzJywgJ2N1JzogJ2N1JywgJ2N2JzogJ2N2JyxcbiAgJ2N5JzogJ2N5JywgJ2RhJzogJ2RhJywgJ2RlJzogJ2RlJywgJ2R2JzogJ2R2JywgJ2R6JzogJ2R6JywgJ2VlJzogJ2VlJyxcbiAgJ2VsJzogJ2VsJywgJ2VuJzogJ2VuJywgJ2VvJzogJ2VvJywgJ2VzJzogJ2VzJywgJ2V0JzogJ2V0JywgJ2V1JzogJ2V1JyxcbiAgJ2ZhJzogJ2ZhJywgJ2ZmJzogJ2ZmJywgJ2ZpJzogJ2ZpJywgJ2ZqJzogJ2ZqJywgJ2ZvJzogJ2ZvJywgJ2ZyJzogJ2ZyJyxcbiAgJ2Z5JzogJ2Z5JywgJ2dhJzogJ2dhJywgJ2dkJzogJ2dkJywgJ2dsJzogJ2dsJywgJ2duJzogJ2duJywgJ2d1JzogJ2d1JyxcbiAgJ2d2JzogJ2d2JywgJ2hhJzogJ2hhJywgJ2hlJzogJ2hlJywgJ2hpJzogJ2hpJywgJ2hvJzogJ2hvJywgJ2hyJzogJ2hyJyxcbiAgJ2h0JzogJ2h0JywgJ2h1JzogJ2h1JywgJ2h5JzogJ2h5JywgJ2h6JzogJ2h6JywgJ2lhJzogJ2lhJywgJ2lkJzogJ2lkJyxcbiAgJ2llJzogJ2llJywgJ2lnJzogJ2lnJywgJ2lpJzogJ2lpJywgJ2lrJzogJ2lrJywgJ2lvJzogJ2lvJywgJ2lzJzogJ2lzJyxcbiAgJ2l0JzogJ2l0JywgJ2l1JzogJ2l1JywgJ2phJzogJ2phJywgJ2p2JzogJ2p2JywgJ2thJzogJ2thJywgJ2tnJzogJ2tnJyxcbiAgJ2tpJzogJ2tpJywgJ2tqJzogJ2tqJywgJ2trJzogJ2trJywgJ2tsJzogJ2tsJywgJ2ttJzogJ2ttJywgJ2tuJzogJ2tuJyxcbiAgJ2tvJzogJ2tvJywgJ2tyJzogJ2tyJywgJ2tzJzogJ2tzJywgJ2t1JzogJ2t1JywgJ2t2JzogJ2t2JywgJ2t3JzogJ2t3JyxcbiAgJ2t5JzogJ2t5JywgJ2xhJzogJ2xhJywgJ2xiJzogJ2xiJywgJ2xnJzogJ2xnJywgJ2xpJzogJ2xpJywgJ2xuJzogJ2xuJyxcbiAgJ2xvJzogJ2xvJywgJ2x0JzogJ2x0JywgJ2x1JzogJ2x1JywgJ2x2JzogJ2x2JywgJ21nJzogJ21nJywgJ21oJzogJ21oJyxcbiAgJ21pJzogJ21pJywgJ21rJzogJ21rJywgJ21sJzogJ21sJywgJ21uJzogJ21uJywgJ21vJzogJ21vJywgJ21yJzogJ21yJyxcbiAgJ21zJzogJ21zJywgJ210JzogJ210JywgJ215JzogJ215JywgJ25hJzogJ25hJywgJ25iJzogJ25iJywgJ25kJzogJ25kJyxcbiAgJ25lJzogJ25lJywgJ25nJzogJ25nJywgJ25sJzogJ25sJywgJ25uJzogJ25uJywgJ25vJzogJ25vJywgJ25yJzogJ25yJyxcbiAgJ252JzogJ252JywgJ255JzogJ255JywgJ29jJzogJ29jJywgJ29qJzogJ29qJywgJ29tJzogJ29tJywgJ29yJzogJ29yJyxcbiAgJ29zJzogJ29zJywgJ3BhJzogJ3BhJywgJ3BpJzogJ3BpJywgJ3BsJzogJ3BsJywgJ3BzJzogJ3BzJywgJ3B0JzogJ3B0JyxcbiAgJ3F1JzogJ3F1JywgJ3JtJzogJ3JtJywgJ3JuJzogJ3JuJywgJ3JvJzogJ3JvJywgJ3J1JzogJ3J1JywgJ3J3JzogJ3J3JyxcbiAgJ3NhJzogJ3NhJywgJ3NjJzogJ3NjJywgJ3NkJzogJ3NkJywgJ3NlJzogJ3NlJywgJ3NnJzogJ3NnJywgJ3NoJzogJ3NoJyxcbiAgJ3NpJzogJ3NpJywgJ3NrJzogJ3NrJywgJ3NsJzogJ3NsJywgJ3NtJzogJ3NtJywgJ3NuJzogJ3NuJywgJ3NvJzogJ3NvJyxcbiAgJ3NxJzogJ3NxJywgJ3NyJzogJ3NyJywgJ3NzJzogJ3NzJywgJ3N0JzogJ3N0JywgJ3N1JzogJ3N1JywgJ3N2JzogJ3N2JyxcbiAgJ3N3JzogJ3N3JywgJ3RhJzogJ3RhJywgJ3RlJzogJ3RlJywgJ3RnJzogJ3RnJywgJ3RoJzogJ3RoJywgJ3RpJzogJ3RpJyxcbiAgJ3RrJzogJ3RrJywgJ3RsJzogJ3RsJywgJ3RuJzogJ3RuJywgJ3RvJzogJ3RvJywgJ3RyJzogJ3RyJywgJ3RzJzogJ3RzJyxcbiAgJ3R0JzogJ3R0JywgJ3R3JzogJ3R3JywgJ3R5JzogJ3R5JywgJ3VnJzogJ3VnJywgJ3VrJzogJ3VrJywgJ3VyJzogJ3VyJyxcbiAgJ3V6JzogJ3V6JywgJ3ZlJzogJ3ZlJywgJ3ZpJzogJ3ZpJywgJ3ZvJzogJ3ZvJywgJ3dhJzogJ3dhJywgJ3dvJzogJ3dvJyxcbiAgJ3hoJzogJ3hoJywgJ3lpJzogJ3lpJywgJ3lvJzogJ3lvJywgJ3phJzogJ3phJywgJ3poJzogJ3poJywgJ3p1JzogJ3p1JyxcbiAgJ2Fhcic6ICdhYXInLCAnYWJrJzogJ2FiaycsICdhdmUnOiAnYXZlJywgJ2Fmcic6ICdhZnInLCAnYWthJzogJ2FrYScsXG4gICdhbWgnOiAnYW1oJywgJ2FyZyc6ICdhcmcnLCAnYXJhJzogJ2FyYScsICdhc20nOiAnYXNtJywgJ2F2YSc6ICdhdmEnLFxuICAnYXltJzogJ2F5bScsICdhemUnOiAnYXplJywgJ2Jhayc6ICdiYWsnLCAnYmVsJzogJ2JlbCcsICdidWwnOiAnYnVsJyxcbiAgJ2JpaCc6ICdiaWgnLCAnYmlzJzogJ2JpcycsICdiYW0nOiAnYmFtJywgJ2Jlbic6ICdiZW4nLCAndGliJzogJ3RpYicsXG4gICdib2QnOiAnYm9kJywgJ2JyZSc6ICdicmUnLCAnYm9zJzogJ2JvcycsICdjYXQnOiAnY2F0JywgJ2NoZSc6ICdjaGUnLFxuICAnY2hhJzogJ2NoYScsICdjb3MnOiAnY29zJywgJ2NyZSc6ICdjcmUnLCAnY3plJzogJ2N6ZScsICdjZXMnOiAnY2VzJyxcbiAgJ2NodSc6ICdjaHUnLCAnY2h2JzogJ2NodicsICd3ZWwnOiAnd2VsJywgJ2N5bSc6ICdjeW0nLCAnZGFuJzogJ2RhbicsXG4gICdnZXInOiAnZ2VyJywgJ2RldSc6ICdkZXUnLCAnZGl2JzogJ2RpdicsICdkem8nOiAnZHpvJywgJ2V3ZSc6ICdld2UnLFxuICAnZ3JlJzogJ2dyZScsICdlbGwnOiAnZWxsJywgJ2VuZyc6ICdlbmcnLCAnZXBvJzogJ2VwbycsICdzcGEnOiAnc3BhJyxcbiAgJ2VzdCc6ICdlc3QnLCAnYmFxJzogJ2JhcScsICdldXMnOiAnZXVzJywgJ3Blcic6ICdwZXInLCAnZmFzJzogJ2ZhcycsXG4gICdmdWwnOiAnZnVsJywgJ2Zpbic6ICdmaW4nLCAnZmlqJzogJ2ZpaicsICdmYW8nOiAnZmFvJywgJ2ZyZSc6ICdmcmUnLFxuICAnZnJhJzogJ2ZyYScsICdmcnknOiAnZnJ5JywgJ2dsZSc6ICdnbGUnLCAnZ2xhJzogJ2dsYScsICdnbGcnOiAnZ2xnJyxcbiAgJ2dybic6ICdncm4nLCAnZ3VqJzogJ2d1aicsICdnbHYnOiAnZ2x2JywgJ2hhdSc6ICdoYXUnLCAnaGViJzogJ2hlYicsXG4gICdoaW4nOiAnaGluJywgJ2htbyc6ICdobW8nLCAnaHJ2JzogJ2hydicsICdoYXQnOiAnaGF0JywgJ2h1bic6ICdodW4nLFxuICAnYXJtJzogJ2FybScsICdoeWUnOiAnaHllJywgJ2hlcic6ICdoZXInLCAnaW5hJzogJ2luYScsICdpbmQnOiAnaW5kJyxcbiAgJ2lsZSc6ICdpbGUnLCAnaWJvJzogJ2libycsICdpaWknOiAnaWlpJywgJ2lwayc6ICdpcGsnLCAnaWRvJzogJ2lkbycsXG4gICdpY2UnOiAnaWNlJywgJ2lzbCc6ICdpc2wnLCAnaXRhJzogJ2l0YScsICdpa3UnOiAnaWt1JywgJ2pwbic6ICdqcG4nLFxuICAnamF2JzogJ2phdicsICdnZW8nOiAnZ2VvJywgJ2thdCc6ICdrYXQnLCAna29uJzogJ2tvbicsICdraWsnOiAna2lrJyxcbiAgJ2t1YSc6ICdrdWEnLCAna2F6JzogJ2theicsICdrYWwnOiAna2FsJywgJ2tobSc6ICdraG0nLCAna2FuJzogJ2thbicsXG4gICdrb3InOiAna29yJywgJ2thdSc6ICdrYXUnLCAna2FzJzogJ2thcycsICdrdXInOiAna3VyJywgJ2tvbSc6ICdrb20nLFxuICAnY29yJzogJ2NvcicsICdraXInOiAna2lyJywgJ2xhdCc6ICdsYXQnLCAnbHR6JzogJ2x0eicsICdsdWcnOiAnbHVnJyxcbiAgJ2xpbSc6ICdsaW0nLCAnbGluJzogJ2xpbicsICdsYW8nOiAnbGFvJywgJ2xpdCc6ICdsaXQnLCAnbHViJzogJ2x1YicsXG4gICdsYXYnOiAnbGF2JywgJ21sZyc6ICdtbGcnLCAnbWFoJzogJ21haCcsICdtYW8nOiAnbWFvJywgJ21yaSc6ICdtcmknLFxuICAnbWFjJzogJ21hYycsICdta2QnOiAnbWtkJywgJ21hbCc6ICdtYWwnLCAnbW9uJzogJ21vbicsICdtb2wnOiAnbW9sJyxcbiAgJ21hcic6ICdtYXInLCAnbWF5JzogJ21heScsICdtc2EnOiAnbXNhJywgJ21sdCc6ICdtbHQnLCAnYnVyJzogJ2J1cicsXG4gICdteWEnOiAnbXlhJywgJ25hdSc6ICduYXUnLCAnbm9iJzogJ25vYicsICduZGUnOiAnbmRlJywgJ25lcCc6ICduZXAnLFxuICAnbmRvJzogJ25kbycsICdkdXQnOiAnZHV0JywgJ25sZCc6ICdubGQnLCAnbm5vJzogJ25ubycsICdub3InOiAnbm9yJyxcbiAgJ25ibCc6ICduYmwnLCAnbmF2JzogJ25hdicsICdueWEnOiAnbnlhJywgJ29jaSc6ICdvY2knLCAnb2ppJzogJ29qaScsXG4gICdvcm0nOiAnb3JtJywgJ29yaSc6ICdvcmknLCAnb3NzJzogJ29zcycsICdwYW4nOiAncGFuJywgJ3BsaSc6ICdwbGknLFxuICAncG9sJzogJ3BvbCcsICdwdXMnOiAncHVzJywgJ3Bvcic6ICdwb3InLCAncXVlJzogJ3F1ZScsICdyb2gnOiAncm9oJyxcbiAgJ3J1bic6ICdydW4nLCAncnVtJzogJ3J1bScsICdyb24nOiAncm9uJywgJ3J1cyc6ICdydXMnLCAna2luJzogJ2tpbicsXG4gICdzYW4nOiAnc2FuJywgJ3NyZCc6ICdzcmQnLCAnc25kJzogJ3NuZCcsICdzbWUnOiAnc21lJywgJ3NhZyc6ICdzYWcnLFxuICAnc2xvJzogJ3NsbycsICdzaW4nOiAnc2luJywgJ3Nsayc6ICdzbGsnLCAnc2x2JzogJ3NsdicsICdzbW8nOiAnc21vJyxcbiAgJ3NuYSc6ICdzbmEnLCAnc29tJzogJ3NvbScsICdhbGInOiAnYWxiJywgJ3NxaSc6ICdzcWknLCAnc3JwJzogJ3NycCcsXG4gICdzc3cnOiAnc3N3JywgJ3NvdCc6ICdzb3QnLCAnc3VuJzogJ3N1bicsICdzd2UnOiAnc3dlJywgJ3N3YSc6ICdzd2EnLFxuICAndGFtJzogJ3RhbScsICd0ZWwnOiAndGVsJywgJ3Rnayc6ICd0Z2snLCAndGhhJzogJ3RoYScsICd0aXInOiAndGlyJyxcbiAgJ3R1ayc6ICd0dWsnLCAndGdsJzogJ3RnbCcsICd0c24nOiAndHNuJywgJ3Rvbic6ICd0b24nLCAndHVyJzogJ3R1cicsXG4gICd0c28nOiAndHNvJywgJ3RhdCc6ICd0YXQnLCAndHdpJzogJ3R3aScsICd0YWgnOiAndGFoJywgJ3VpZyc6ICd1aWcnLFxuICAndWtyJzogJ3VrcicsICd1cmQnOiAndXJkJywgJ3V6Yic6ICd1emInLCAndmVuJzogJ3ZlbicsICd2aWUnOiAndmllJyxcbiAgJ3ZvbCc6ICd2b2wnLCAnd2xuJzogJ3dsbicsICd3b2wnOiAnd29sJywgJ3hobyc6ICd4aG8nLCAneWlkJzogJ3lpZCcsXG4gICd5b3InOiAneW9yJywgJ3poYSc6ICd6aGEnLCAnY2hpJzogJ2NoaScsICd6aG8nOiAnemhvJywgJ3p1bCc6ICd6dWwnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRMYW5ndWFnZXM7XG4iLCIvLyBAZmxvd1xuXG5jb25zdCBzY29ybTEyID0ge1xuICBDTUlTdHJpbmcyNTY6ICdeLnswLDI1NX0kJyxcbiAgQ01JU3RyaW5nNDA5NjogJ14uezAsNDA5Nn0kJyxcbiAgQ01JVGltZTogJ14oPzpbMDFdXFxcXGR8MlswMTIzXSk6KD86WzAxMjM0NV1cXFxcZCk6KD86WzAxMjM0NV1cXFxcZCkkJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBDTUlUaW1lc3BhbjogJ14oWzAtOV17Mix9KTooWzAtOV17Mn0pOihbMC05XXsyfSkoXFwuWzAtOV17MSwyfSk/JCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgQ01JSW50ZWdlcjogJ15cXFxcZCskJyxcbiAgQ01JU0ludGVnZXI6ICdeLT8oWzAtOV0rKSQnLFxuICBDTUlEZWNpbWFsOiAnXi0/KFswLTldezAsM30pKFxcLlswLTldKik/JCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgQ01JSWRlbnRpZmllcjogJ15bXFxcXHUwMDIxLVxcXFx1MDA3RV17MCwyNTV9JCcsXG4gIENNSUZlZWRiYWNrOiAnXi57MCwyNTV9JCcsIC8vIFRoaXMgbXVzdCBiZSByZWRlZmluZWRcbiAgQ01JSW5kZXg6ICdbLl9dKFxcXFxkKykuJyxcblxuICAvLyBWb2NhYnVsYXJ5IERhdGEgVHlwZSBEZWZpbml0aW9uXG4gIENNSVN0YXR1czogJ14ocGFzc2VkfGNvbXBsZXRlZHxmYWlsZWR8aW5jb21wbGV0ZXxicm93c2VkKSQnLFxuICBDTUlTdGF0dXMyOiAnXihwYXNzZWR8Y29tcGxldGVkfGZhaWxlZHxpbmNvbXBsZXRlfGJyb3dzZWR8bm90IGF0dGVtcHRlZCkkJyxcbiAgQ01JRXhpdDogJ14odGltZS1vdXR8c3VzcGVuZHxsb2dvdXR8KSQnLFxuICBDTUlUeXBlOiAnXih0cnVlLWZhbHNlfGNob2ljZXxmaWxsLWlufG1hdGNoaW5nfHBlcmZvcm1hbmNlfHNlcXVlbmNpbmd8bGlrZXJ0fG51bWVyaWMpJCcsXG4gIENNSVJlc3VsdDogJ14oY29ycmVjdHx3cm9uZ3x1bmFudGljaXBhdGVkfG5ldXRyYWx8KFswLTldezAsM30pPyhcXFxcLlswLTldKik/KSQnLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIE5BVkV2ZW50OiAnXihwcmV2aW91c3xjb250aW51ZSkkJyxcblxuICAvLyBEYXRhIHJhbmdlc1xuICBzY29yZV9yYW5nZTogJzAjMTAwJyxcbiAgYXVkaW9fcmFuZ2U6ICctMSMxMDAnLFxuICBzcGVlZF9yYW5nZTogJy0xMDAjMTAwJyxcbiAgd2VpZ2h0aW5nX3JhbmdlOiAnLTEwMCMxMDAnLFxuICB0ZXh0X3JhbmdlOiAnLTEjMScsXG59O1xuXG5jb25zdCBhaWNjID0ge1xuICAuLi5zY29ybTEyLCAuLi57XG4gICAgQ01JSWRlbnRpZmllcjogJ15cXFxcd3sxLDI1NX0kJyxcbiAgfSxcbn07XG5cbmNvbnN0IHNjb3JtMjAwNCA9IHtcbiAgQ01JU3RyaW5nMjAwOiAnXltcXFxcdTAwMDAtXFxcXHVGRkZGXXswLDIwMH0kJyxcbiAgQ01JU3RyaW5nMjUwOiAnXltcXFxcdTAwMDAtXFxcXHVGRkZGXXswLDI1MH0kJyxcbiAgQ01JU3RyaW5nMTAwMDogJ15bXFxcXHUwMDAwLVxcXFx1RkZGRl17MCwxMDAwfSQnLFxuICBDTUlTdHJpbmc0MDAwOiAnXltcXFxcdTAwMDAtXFxcXHVGRkZGXXswLDQwMDB9JCcsXG4gIENNSVN0cmluZzY0MDAwOiAnXltcXFxcdTAwMDAtXFxcXHVGRkZGXXswLDY0MDAwfSQnLFxuICBDTUlMYW5nOiAnXihbYS16QS1aXXsyLDN9fGl8eCkoXFwtW2EtekEtWjAtOVxcLV17Miw4fSk/JHxeJCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgQ01JTGFuZ1N0cmluZzI1MDogJ14oXFx7bGFuZz0oW2EtekEtWl17MiwzfXxpfHgpKFxcLVthLXpBLVowLTlcXC1dezIsOH0pP1xcfSk/KCg/IVxcey4qJCkuezAsMjUwfSQpPyQnLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIENNSUxhbmdjcjogJ14oKFxce2xhbmc9KFthLXpBLVpdezIsM318aXx4KT8oXFwtW2EtekEtWjAtOVxcLV17Miw4fSk/XFx9KSkoLio/KSQnLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIENNSUxhbmdTdHJpbmcyNTBjcjogJ14oKFxce2xhbmc9KFthLXpBLVpdezIsM318aXx4KT8oXFwtW2EtekEtWjAtOVxcLV17Miw4fSk/XFx9KT8oLnswLDI1MH0pPyk/JCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgQ01JTGFuZ1N0cmluZzQwMDA6ICdeKFxce2xhbmc9KFthLXpBLVpdezIsM318aXx4KShcXC1bYS16QS1aMC05XFwtXXsyLDh9KT9cXH0pPygoPyFcXHsuKiQpLnswLDQwMDB9JCk/JCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgQ01JVGltZTogJ14oMTlbNy05XXsxfVswLTldezF9fDIwWzAtMl17MX1bMC05XXsxfXwyMDNbMC04XXsxfSkoKC0oMFsxLTldezF9fDFbMC0yXXsxfSkpKCgtKDBbMS05XXsxfXxbMS0yXXsxfVswLTldezF9fDNbMC0xXXsxfSkpKFQoWzAtMV17MX1bMC05XXsxfXwyWzAtM117MX0pKCg6WzAtNV17MX1bMC05XXsxfSkoKDpbMC01XXsxfVswLTldezF9KSgoXFxcXC5bMC05XXsxLDJ9KSgoWnwoWyt8LV0oWzAtMV17MX1bMC05XXsxfXwyWzAtM117MX0pKSkoOlswLTVdezF9WzAtOV17MX0pPyk/KT8pPyk/KT8pPyk/JCcsXG4gIENNSVRpbWVzcGFuOiAnXlAoPzooWy4sXFxcXGRdKylZKT8oPzooWy4sXFxcXGRdKylNKT8oPzooWy4sXFxcXGRdKylXKT8oPzooWy4sXFxcXGRdKylEKT8oPzpUPyg/OihbLixcXFxcZF0rKUgpPyg/OihbLixcXFxcZF0rKU0pPyg/OihbLixcXFxcZF0rKVMpPyk/JCcsXG4gIENNSUludGVnZXI6ICdeXFxcXGQrJCcsXG4gIENNSVNJbnRlZ2VyOiAnXi0/KFswLTldKykkJyxcbiAgQ01JRGVjaW1hbDogJ14tPyhbMC05XXsxLDV9KShcXFxcLlswLTldezEsMTh9KT8kJyxcbiAgQ01JSWRlbnRpZmllcjogJ15cXFxcU3sxLDI1MH1bYS16QS1aMC05XSQnLFxuICBDTUlTaG9ydElkZW50aWZpZXI6ICdeW1xcXFx3XFxcXC5cXFxcLVxcXFxfXXsxLDI1MH0kJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBDTUlMb25nSWRlbnRpZmllcjogJ14oPzooPyF1cm46KVxcXFxTezEsNDAwMH18dXJuOltBLVphLXowLTktXXsxLDMxfTpcXFxcU3sxLDQwMDB9fC57MSw0MDAwfSkkJywgLy8gbmVlZCB0byByZS1leGFtaW5lIHRoaXNcbiAgQ01JRmVlZGJhY2s6ICdeLiokJywgLy8gVGhpcyBtdXN0IGJlIHJlZGVmaW5lZFxuICBDTUlJbmRleDogJ1suX10oXFxcXGQrKS4nLFxuICBDTUlJbmRleFN0b3JlOiAnLk4oXFxcXGQrKS4nLFxuXG4gIC8vIFZvY2FidWxhcnkgRGF0YSBUeXBlIERlZmluaXRpb25cbiAgQ01JQ1N0YXR1czogJ14oY29tcGxldGVkfGluY29tcGxldGV8bm90IGF0dGVtcHRlZHx1bmtub3duKSQnLFxuICBDTUlTU3RhdHVzOiAnXihwYXNzZWR8ZmFpbGVkfHVua25vd24pJCcsXG4gIENNSUV4aXQ6ICdeKHRpbWUtb3V0fHN1c3BlbmR8bG9nb3V0fG5vcm1hbCkkJyxcbiAgQ01JVHlwZTogJ14odHJ1ZS1mYWxzZXxjaG9pY2V8ZmlsbC1pbnxsb25nLWZpbGwtaW58bWF0Y2hpbmd8cGVyZm9ybWFuY2V8c2VxdWVuY2luZ3xsaWtlcnR8bnVtZXJpY3xvdGhlcikkJyxcbiAgQ01JUmVzdWx0OiAnXihjb3JyZWN0fHdyb25nfHVuYW50aWNpcGF0ZWR8bmV1dHJhbHwtPyhbMC05XXsxLDR9KShcXFxcLlswLTldezEsMTh9KT8pJCcsXG4gIE5BVkV2ZW50OiAnXihwcmV2aW91c3xjb250aW51ZXxleGl0fGV4aXRBbGx8YWJhbmRvbnxhYmFuZG9uQWxsfHN1c3BlbmRBbGx8XFx7dGFyZ2V0PVxcXFxTezAsMjAwfVthLXpBLVowLTldXFx9Y2hvaWNlfGp1bXApJCcsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgTkFWQm9vbGVhbjogJ14odW5rbm93bnx0cnVlfGZhbHNlJCknLFxuICBOQVZUYXJnZXQ6ICdeKHByZXZpb3VzfGNvbnRpbnVlfGNob2ljZS57dGFyZ2V0PVxcXFxTezAsMjAwfVthLXpBLVowLTldfSkkJyxcblxuICAvLyBEYXRhIHJhbmdlc1xuICBzY2FsZWRfcmFuZ2U6ICctMSMxJyxcbiAgYXVkaW9fcmFuZ2U6ICcwIyonLFxuICBzcGVlZF9yYW5nZTogJzAjKicsXG4gIHRleHRfcmFuZ2U6ICctMSMxJyxcbiAgcHJvZ3Jlc3NfcmFuZ2U6ICcwIzEnLFxufTtcblxuY29uc3QgUmVnZXggPSB7XG4gIGFpY2M6IGFpY2MsXG4gIHNjb3JtMTI6IHNjb3JtMTIsXG4gIHNjb3JtMjAwNDogc2Nvcm0yMDA0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnZXg7XG4iLCIvLyBAZmxvd1xuaW1wb3J0IFJlZ2V4IGZyb20gJy4vcmVnZXgnO1xuXG5jb25zdCBzY29ybTIwMDRfcmVnZXggPSBSZWdleC5zY29ybTIwMDQ7XG5cbmNvbnN0IGxlYXJuZXIgPSB7XG4gICd0cnVlLWZhbHNlJzoge1xuICAgIGZvcm1hdDogJ150cnVlJHxeZmFsc2UkJyxcbiAgICBtYXg6IDEsXG4gICAgZGVsaW1pdGVyOiAnJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICB9LFxuICAnY2hvaWNlJzoge1xuICAgIGZvcm1hdDogc2Nvcm0yMDA0X3JlZ2V4LkNNSVNob3J0SWRlbnRpZmllcixcbiAgICBtYXg6IDM2LFxuICAgIGRlbGltaXRlcjogJ1ssXScsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICAnZmlsbC1pbic6IHtcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlMYW5nU3RyaW5nMjUwLFxuICAgIG1heDogMTAsXG4gICAgZGVsaW1pdGVyOiAnWyxdJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICB9LFxuICAnbG9uZy1maWxsLWluJzoge1xuICAgIGZvcm1hdDogc2Nvcm0yMDA0X3JlZ2V4LkNNSUxhbmdTdHJpbmc0MDAwLFxuICAgIG1heDogMSxcbiAgICBkZWxpbWl0ZXI6ICcnLFxuICAgIHVuaXF1ZTogZmFsc2UsXG4gIH0sXG4gICdtYXRjaGluZyc6IHtcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlTaG9ydElkZW50aWZpZXIsXG4gICAgZm9ybWF0Mjogc2Nvcm0yMDA0X3JlZ2V4LkNNSVNob3J0SWRlbnRpZmllcixcbiAgICBtYXg6IDM2LFxuICAgIGRlbGltaXRlcjogJ1ssXScsXG4gICAgZGVsaW1pdGVyMjogJ1suXScsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgfSxcbiAgJ3BlcmZvcm1hbmNlJzoge1xuICAgIGZvcm1hdDogJ14kfCcgKyBzY29ybTIwMDRfcmVnZXguQ01JU2hvcnRJZGVudGlmaWVyLFxuICAgIGZvcm1hdDI6IHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsICsgJ3xeJHwnICtcbiAgICAgICAgc2Nvcm0yMDA0X3JlZ2V4LkNNSVNob3J0SWRlbnRpZmllcixcbiAgICBtYXg6IDI1MCxcbiAgICBkZWxpbWl0ZXI6ICdbLF0nLFxuICAgIGRlbGltaXRlcjI6ICdbLl0nLFxuICAgIHVuaXF1ZTogZmFsc2UsXG4gIH0sXG4gICdzZXF1ZW5jaW5nJzoge1xuICAgIGZvcm1hdDogc2Nvcm0yMDA0X3JlZ2V4LkNNSVNob3J0SWRlbnRpZmllcixcbiAgICBtYXg6IDM2LFxuICAgIGRlbGltaXRlcjogJ1ssXScsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgfSxcbiAgJ2xpa2VydCc6IHtcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlTaG9ydElkZW50aWZpZXIsXG4gICAgbWF4OiAxLFxuICAgIGRlbGltaXRlcjogJycsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgfSxcbiAgJ251bWVyaWMnOiB7XG4gICAgZm9ybWF0OiBzY29ybTIwMDRfcmVnZXguQ01JRGVjaW1hbCxcbiAgICBtYXg6IDEsXG4gICAgZGVsaW1pdGVyOiAnJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICB9LFxuICAnb3RoZXInOiB7XG4gICAgZm9ybWF0OiBzY29ybTIwMDRfcmVnZXguQ01JU3RyaW5nNDAwMCxcbiAgICBtYXg6IDEsXG4gICAgZGVsaW1pdGVyOiAnJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICB9LFxufTtcblxuY29uc3QgY29ycmVjdCA9IHtcbiAgJ3RydWUtZmFsc2UnOiB7XG4gICAgbWF4OiAxLFxuICAgIGRlbGltaXRlcjogJycsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgICBkdXBsaWNhdGU6IGZhbHNlLFxuICAgIGZvcm1hdDogJ150cnVlJHxeZmFsc2UkJyxcbiAgICBsaW1pdDogMSxcbiAgfSxcbiAgJ2Nob2ljZSc6IHtcbiAgICBtYXg6IDM2LFxuICAgIGRlbGltaXRlcjogJ1ssXScsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgZm9ybWF0OiBzY29ybTIwMDRfcmVnZXguQ01JU2hvcnRJZGVudGlmaWVyLFxuICB9LFxuICAnZmlsbC1pbic6IHtcbiAgICBtYXg6IDEwLFxuICAgIGRlbGltaXRlcjogJ1ssXScsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgICBkdXBsaWNhdGU6IGZhbHNlLFxuICAgIGZvcm1hdDogc2Nvcm0yMDA0X3JlZ2V4LkNNSUxhbmdTdHJpbmcyNTBjcixcbiAgfSxcbiAgJ2xvbmctZmlsbC1pbic6IHtcbiAgICBtYXg6IDEsXG4gICAgZGVsaW1pdGVyOiAnJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICAgIGR1cGxpY2F0ZTogdHJ1ZSxcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlMYW5nU3RyaW5nNDAwMCxcbiAgfSxcbiAgJ21hdGNoaW5nJzoge1xuICAgIG1heDogMzYsXG4gICAgZGVsaW1pdGVyOiAnWyxdJyxcbiAgICBkZWxpbWl0ZXIyOiAnWy5dJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgZm9ybWF0OiBzY29ybTIwMDRfcmVnZXguQ01JU2hvcnRJZGVudGlmaWVyLFxuICAgIGZvcm1hdDI6IHNjb3JtMjAwNF9yZWdleC5DTUlTaG9ydElkZW50aWZpZXIsXG4gIH0sXG4gICdwZXJmb3JtYW5jZSc6IHtcbiAgICBtYXg6IDI1MCxcbiAgICBkZWxpbWl0ZXI6ICdbLF0nLFxuICAgIGRlbGltaXRlcjI6ICdbLl0nLFxuICAgIHVuaXF1ZTogZmFsc2UsXG4gICAgZHVwbGljYXRlOiBmYWxzZSxcbiAgICBmb3JtYXQ6ICdeJHwnICsgc2Nvcm0yMDA0X3JlZ2V4LkNNSVNob3J0SWRlbnRpZmllcixcbiAgICBmb3JtYXQyOiBzY29ybTIwMDRfcmVnZXguQ01JRGVjaW1hbCArICd8XiR8JyArXG4gICAgICAgIHNjb3JtMjAwNF9yZWdleC5DTUlTaG9ydElkZW50aWZpZXIsXG4gIH0sXG4gICdzZXF1ZW5jaW5nJzoge1xuICAgIG1heDogMzYsXG4gICAgZGVsaW1pdGVyOiAnWyxdJyxcbiAgICB1bmlxdWU6IGZhbHNlLFxuICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgZm9ybWF0OiBzY29ybTIwMDRfcmVnZXguQ01JU2hvcnRJZGVudGlmaWVyLFxuICB9LFxuICAnbGlrZXJ0Jzoge1xuICAgIG1heDogMSxcbiAgICBkZWxpbWl0ZXI6ICcnLFxuICAgIHVuaXF1ZTogZmFsc2UsXG4gICAgZHVwbGljYXRlOiBmYWxzZSxcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlTaG9ydElkZW50aWZpZXIsXG4gICAgbGltaXQ6IDEsXG4gIH0sXG4gICdudW1lcmljJzoge1xuICAgIG1heDogMixcbiAgICBkZWxpbWl0ZXI6ICdbOl0nLFxuICAgIHVuaXF1ZTogZmFsc2UsXG4gICAgZHVwbGljYXRlOiBmYWxzZSxcbiAgICBmb3JtYXQ6IHNjb3JtMjAwNF9yZWdleC5DTUlEZWNpbWFsLFxuICAgIGxpbWl0OiAxLFxuICB9LFxuICAnb3RoZXInOiB7XG4gICAgbWF4OiAxLFxuICAgIGRlbGltaXRlcjogJycsXG4gICAgdW5pcXVlOiBmYWxzZSxcbiAgICBkdXBsaWNhdGU6IGZhbHNlLFxuICAgIGZvcm1hdDogc2Nvcm0yMDA0X3JlZ2V4LkNNSVN0cmluZzQwMDAsXG4gICAgbGltaXQ6IDEsXG4gIH0sXG59O1xuXG5jb25zdCBSZXNwb25zZXMgPSB7XG4gIGxlYXJuZXI6IGxlYXJuZXIsXG4gIGNvcnJlY3Q6IGNvcnJlY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZXM7XG4iLCIvLyBAZmxvd1xuXG4vKipcbiAqIERhdGEgVmFsaWRhdGlvbiBFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHRvIHRha2UgaW4gYW4gZXJyb3IgbWVzc2FnZSBhbmQgY29kZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZXJyb3JDb2RlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IG51bWJlcikge1xuICAgIHN1cGVyKGVycm9yQ29kZSk7XG4gICAgdGhpcy4jZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICB9XG5cbiAgI2Vycm9yQ29kZTtcblxuICAvKipcbiAgICogR2V0dGVyIGZvciAjZXJyb3JDb2RlXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBlcnJvckNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Vycm9yQ29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnlpbmcgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgRXJyb3IgbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZXJyb3JDb2RlICsgJyc7XG4gIH1cbn1cbiIsImltcG9ydCBTY29ybTIwMDRBUEkgZnJvbSAnLi9TY29ybTIwMDRBUEknO1xuaW1wb3J0IFNjb3JtMTJBUEkgZnJvbSAnLi9TY29ybTEyQVBJJztcbmltcG9ydCBBSUNDIGZyb20gJy4vQUlDQyc7XG5cbndpbmRvdy5TY29ybTEyQVBJID0gU2Nvcm0xMkFQSTtcbndpbmRvdy5TY29ybTIwMDRBUEkgPSBTY29ybTIwMDRBUEk7XG53aW5kb3cuQUlDQyA9IEFJQ0M7XG4iLCIvLyBAZmxvd1xuZXhwb3J0IGNvbnN0IFNFQ09ORFNfUEVSX1NFQ09ORCA9IDEuMDtcbmV4cG9ydCBjb25zdCBTRUNPTkRTX1BFUl9NSU5VVEUgPSA2MDtcbmV4cG9ydCBjb25zdCBTRUNPTkRTX1BFUl9IT1VSID0gNjAgKiBTRUNPTkRTX1BFUl9NSU5VVEU7XG5leHBvcnQgY29uc3QgU0VDT05EU19QRVJfREFZID0gMjQgKiBTRUNPTkRTX1BFUl9IT1VSO1xuXG5jb25zdCBkZXNpZ25hdGlvbnMgPSBbXG4gIFsnRCcsIFNFQ09ORFNfUEVSX0RBWV0sXG4gIFsnSCcsIFNFQ09ORFNfUEVSX0hPVVJdLFxuICBbJ00nLCBTRUNPTkRTX1BFUl9NSU5VVEVdLFxuICBbJ1MnLCBTRUNPTkRTX1BFUl9TRUNPTkRdLFxuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIE51bWJlciB0byBhIFN0cmluZyBvZiBISDpNTTpTU1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFNlY29uZHNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHNBc0hITU1TUyh0b3RhbFNlY29uZHM6IE51bWJlcikge1xuICAvLyBTQ09STSBzcGVjIGRvZXMgbm90IGRlYWwgd2l0aCBuZWdhdGl2ZSBkdXJhdGlvbnMsIGdpdmUgemVybyBiYWNrXG4gIGlmICghdG90YWxTZWNvbmRzIHx8IHRvdGFsU2Vjb25kcyA8PSAwKSB7XG4gICAgcmV0dXJuICcwMDowMDowMCc7XG4gIH1cblxuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gU0VDT05EU19QRVJfSE9VUik7XG5cbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKHRvdGFsU2Vjb25kcyAqIDEwMDApO1xuICBjb25zdCBtaW51dGVzID0gZGF0ZU9iai5nZXRVVENNaW51dGVzKCk7XG4gIC8vIG1ha2Ugc3VyZSB3ZSBhZGQgYW55IHBvc3NpYmxlIGRlY2ltYWwgdmFsdWVcbiAgY29uc3Qgc2Vjb25kcyA9IGRhdGVPYmouZ2V0U2Vjb25kcygpO1xuICBjb25zdCBtcyA9IHRvdGFsU2Vjb25kcyAlIDEuMDtcbiAgbGV0IG1zU3RyID0gJyc7XG4gIGlmIChjb3VudERlY2ltYWxzKG1zKSA+IDApIHtcbiAgICBpZiAoY291bnREZWNpbWFscyhtcykgPiAyKSB7XG4gICAgICBtc1N0ciA9IG1zLnRvRml4ZWQoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zU3RyID0gU3RyaW5nKG1zKTtcbiAgICB9XG4gICAgbXNTdHIgPSAnLicgKyBtc1N0ci5zcGxpdCgnLicpWzFdO1xuICB9XG5cbiAgcmV0dXJuIChob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzKS5yZXBsYWNlKC9cXGJcXGRcXGIvZyxcbiAgICAgICcwJCYnKSArIG1zU3RyO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgZnJvbSBJU08gODYwMSBEdXJhdGlvblxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWNvbmRzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRzQXNJU09EdXJhdGlvbihzZWNvbmRzOiBOdW1iZXIpIHtcbiAgLy8gU0NPUk0gc3BlYyBkb2VzIG5vdCBkZWFsIHdpdGggbmVnYXRpdmUgZHVyYXRpb25zLCBnaXZlIHplcm8gYmFja1xuICBpZiAoIXNlY29uZHMgfHwgc2Vjb25kcyA8PSAwKSB7XG4gICAgcmV0dXJuICdQVDBTJztcbiAgfVxuXG4gIGxldCBkdXJhdGlvbiA9ICdQJztcbiAgbGV0IHJlbWFpbmRlciA9IHNlY29uZHM7XG5cbiAgZGVzaWduYXRpb25zLmZvckVhY2goKFtzaWduLCBjdXJyZW50X3NlY29uZHNdKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5mbG9vcihyZW1haW5kZXIgLyBjdXJyZW50X3NlY29uZHMpO1xuXG4gICAgcmVtYWluZGVyID0gcmVtYWluZGVyICUgY3VycmVudF9zZWNvbmRzO1xuICAgIGlmIChjb3VudERlY2ltYWxzKHJlbWFpbmRlcikgPiAyKSB7XG4gICAgICByZW1haW5kZXIgPSBOdW1iZXIoTnVtYmVyKHJlbWFpbmRlcikudG9GaXhlZCgyKSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGhhdmUgYW55dGhpbmcgbGVmdCBpbiB0aGUgcmVtYWluZGVyLCBhbmQgd2UncmUgY3VycmVudGx5IGFkZGluZ1xuICAgIC8vIHNlY29uZHMgdG8gdGhlIGR1cmF0aW9uLCBnbyBhaGVhZCBhbmQgYWRkIHRoZSBkZWNpbWFsIHRvIHRoZSBzZWNvbmRzXG4gICAgaWYgKHNpZ24gPT09ICdTJyAmJiByZW1haW5kZXIgPiAwKSB7XG4gICAgICB2YWx1ZSArPSByZW1haW5kZXI7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoKGR1cmF0aW9uLmluZGV4T2YoJ0QnKSA+IDAgfHxcbiAgICAgICAgICBzaWduID09PSAnSCcgfHwgc2lnbiA9PT0gJ00nIHx8IHNpZ24gPT09ICdTJykgJiZcbiAgICAgICAgICBkdXJhdGlvbi5pbmRleE9mKCdUJykgPT09IC0xKSB7XG4gICAgICAgIGR1cmF0aW9uICs9ICdUJztcbiAgICAgIH1cbiAgICAgIGR1cmF0aW9uICs9IGAke3ZhbHVlfSR7c2lnbn1gO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGR1cmF0aW9uO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgZnJvbSBISDpNTTpTUy5ERERERERcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZVN0cmluZ1xuICogQHBhcmFtIHtSZWdFeHB9IHRpbWVSZWdleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUFzU2Vjb25kcyh0aW1lU3RyaW5nOiBTdHJpbmcsIHRpbWVSZWdleDogUmVnRXhwKSB7XG4gIGlmICghdGltZVN0cmluZyB8fCB0eXBlb2YgdGltZVN0cmluZyAhPT0gJ3N0cmluZycgfHxcbiAgICAgICF0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBwYXJ0cyA9IHRpbWVTdHJpbmcuc3BsaXQoJzonKTtcbiAgY29uc3QgaG91cnMgPSBOdW1iZXIocGFydHNbMF0pO1xuICBjb25zdCBtaW51dGVzID0gTnVtYmVyKHBhcnRzWzFdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IE51bWJlcihwYXJ0c1syXSk7XG4gIHJldHVybiAoaG91cnMgKiAzNjAwKSArIChtaW51dGVzICogNjApICsgc2Vjb25kcztcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIGZyb20gSVNPIDg2MDEgRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb25cbiAqIEBwYXJhbSB7UmVnRXhwfSBkdXJhdGlvblJlZ2V4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREdXJhdGlvbkFzU2Vjb25kcyhkdXJhdGlvbjogU3RyaW5nLCBkdXJhdGlvblJlZ2V4OiBSZWdFeHApIHtcbiAgaWYgKCFkdXJhdGlvbiB8fCAhZHVyYXRpb24ubWF0Y2goZHVyYXRpb25SZWdleCkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNvbnN0IFssIHllYXJzLCBtb250aHMsICwgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdID0gbmV3IFJlZ0V4cChcbiAgICAgIGR1cmF0aW9uUmVnZXgpLmV4ZWMoZHVyYXRpb24pIHx8IFtdO1xuXG4gIGxldCByZXN1bHQgPSAwLjA7XG5cbiAgcmVzdWx0ICs9IChOdW1iZXIoc2Vjb25kcykgKiAxLjAgfHwgMC4wKTtcbiAgcmVzdWx0ICs9IChOdW1iZXIobWludXRlcykgKiA2MC4wIHx8IDAuMCk7XG4gIHJlc3VsdCArPSAoTnVtYmVyKGhvdXJzKSAqIDM2MDAuMCB8fCAwLjApO1xuICByZXN1bHQgKz0gKE51bWJlcihkYXlzKSAqICg2MCAqIDYwICogMjQuMCkgfHwgMC4wKTtcbiAgcmVzdWx0ICs9IChOdW1iZXIoeWVhcnMpICogKDYwICogNjAgKiAyNCAqIDM2NS4wKSB8fCAwLjApO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQWRkcyB0b2dldGhlciB0d28gSVNPODYwMSBEdXJhdGlvbiBzdHJpbmdzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpcnN0XG4gKiBAcGFyYW0ge3N0cmluZ30gc2Vjb25kXG4gKiBAcGFyYW0ge1JlZ0V4cH0gZHVyYXRpb25SZWdleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVHdvRHVyYXRpb25zKFxuICAgIGZpcnN0OiBTdHJpbmcsXG4gICAgc2Vjb25kOiBTdHJpbmcsXG4gICAgZHVyYXRpb25SZWdleDogUmVnRXhwKSB7XG4gIHJldHVybiBnZXRTZWNvbmRzQXNJU09EdXJhdGlvbihcbiAgICAgIGdldER1cmF0aW9uQXNTZWNvbmRzKGZpcnN0LCBkdXJhdGlvblJlZ2V4KSArXG4gICAgICBnZXREdXJhdGlvbkFzU2Vjb25kcyhzZWNvbmQsIGR1cmF0aW9uUmVnZXgpLFxuICApO1xufVxuXG4vKipcbiAqIEFkZCB0b2dldGhlciB0d28gSEg6TU06U1MuREQgc3RyaW5nc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaXJzdFxuICogQHBhcmFtIHtzdHJpbmd9IHNlY29uZFxuICogQHBhcmFtIHtSZWdFeHB9IHRpbWVSZWdleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkSEhNTVNTVGltZVN0cmluZ3MoXG4gICAgZmlyc3Q6IFN0cmluZyxcbiAgICBzZWNvbmQ6IFN0cmluZyxcbiAgICB0aW1lUmVnZXg6IFJlZ0V4cCkge1xuICByZXR1cm4gZ2V0U2Vjb25kc0FzSEhNTVNTKFxuICAgICAgZ2V0VGltZUFzU2Vjb25kcyhmaXJzdCwgdGltZVJlZ2V4KSArXG4gICAgICBnZXRUaW1lQXNTZWNvbmRzKFxuICAgICAgICAgIHNlY29uZCwgdGltZVJlZ2V4KSxcbiAgKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgSlNPTiBvYmplY3QgZG93biB0byBzdHJpbmcgcGF0aHMgZm9yIGVhY2ggdmFsdWVzXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihkYXRhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIC8qKlxuICAgKiBSZWN1cnNlIHRocm91Z2ggdGhlIG9iamVjdFxuICAgKiBAcGFyYW0geyp9IGN1clxuICAgKiBAcGFyYW0geyp9IHByb3BcbiAgICovXG4gIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyLCBwcm9wKSB7XG4gICAgaWYgKE9iamVjdChjdXIpICE9PSBjdXIpIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IGN1cjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjdXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJlY3Vyc2UoY3VyW2ldLCBwcm9wICsgJ1snICsgaSArICddJyk7XG4gICAgICAgIGlmIChsID09PSAwKSByZXN1bHRbcHJvcF0gPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xuICAgICAgZm9yIChjb25zdCBwIGluIGN1cikge1xuICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChjdXIsIHApKSB7XG4gICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gcHJvcCArICcuJyArIHAgOiBwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRW1wdHkgJiYgcHJvcCkgcmVzdWx0W3Byb3BdID0ge307XG4gICAgfVxuICB9XG5cbiAgcmVjdXJzZShkYXRhLCAnJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVW4tZmxhdHRlbiBhIGZsYXQgSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmZsYXR0ZW4oZGF0YSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmIChPYmplY3QoZGF0YSkgIT09IGRhdGEgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuIGRhdGE7XG4gIGNvbnN0IHJlZ2V4ID0gL1xcLj8oW14uW1xcXV0rKXxcXFsoXFxkKyldL2c7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IHAgaW4gZGF0YSkge1xuICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIHApKSB7XG4gICAgICBsZXQgY3VyID0gcmVzdWx0O1xuICAgICAgbGV0IHByb3AgPSAnJztcbiAgICAgIGxldCBtID0gcmVnZXguZXhlYyhwKTtcbiAgICAgIHdoaWxlIChtKSB7XG4gICAgICAgIGN1ciA9IGN1cltwcm9wXSB8fCAoY3VyW3Byb3BdID0gKG1bMl0gPyBbXSA6IHt9KSk7XG4gICAgICAgIHByb3AgPSBtWzJdIHx8IG1bMV07XG4gICAgICAgIG0gPSByZWdleC5leGVjKHApO1xuICAgICAgfVxuICAgICAgY3VyW3Byb3BdID0gZGF0YVtwXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFsnJ10gfHwgcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50cyB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudERlY2ltYWxzKG51bTogbnVtYmVyKSB7XG4gIGlmIChNYXRoLmZsb29yKG51bSkgPT09IG51bSB8fCBTdHJpbmcobnVtKS5pbmRleE9mKCcuJykgPCAwKSByZXR1cm4gMDtcbiAgY29uc3QgcGFydHMgPSBudW0udG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdO1xuICByZXR1cm4gcGFydHMubGVuZ3RoIHx8IDA7XG59XG4iXX0=
