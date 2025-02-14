"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _payment = _interopRequireDefault(require("payment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactCreditCards = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactCreditCards, _React$Component);

  var _super = _createSuper(ReactCreditCards);

  function ReactCreditCards(props) {
    var _this;

    _classCallCheck(this, ReactCreditCards);

    _this = _super.call(this, props);

    _this.setCards();

    return _this;
  }

  _createClass(ReactCreditCards, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          acceptedCards = _this$props.acceptedCards,
          callback = _this$props.callback,
          number = _this$props.number;

      if (prevProps.number !== number) {
        /* istanbul ignore else */
        if (typeof callback === 'function') {
          callback(this.options, _payment.default.fns.validateCardNumber(number));
        }
      }

      if (prevProps.acceptedCards.toString() !== acceptedCards.toString()) {
        this.setCards();
      }
    }
  }, {
    key: "issuer",
    get: function get() {
      var _this$props2 = this.props,
          issuer = _this$props2.issuer,
          preview = _this$props2.preview;
      return preview && issuer ? issuer.toLowerCase() : this.options.issuer;
    }
  }, {
    key: "number",
    get: function get() {
      var _this$props3 = this.props,
          number = _this$props3.number,
          preview = _this$props3.preview;
      var maxLength = preview ? 19 : this.options.maxLength;
      var nextNumber = typeof number === 'number' ? number.toString() : number.replace(/[A-Za-z]| /g, '');

      if (isNaN(parseInt(nextNumber, 10)) && !preview) {
        nextNumber = '';
      }

      if (maxLength > 16) {
        maxLength = nextNumber.length <= 16 ? 16 : maxLength;
      }

      if (nextNumber.length > maxLength) {
        nextNumber = nextNumber.slice(0, maxLength);
      }

      while (nextNumber.length < maxLength) {
        nextNumber += '•';
      }

      if (['amex', 'dinersclub'].indexOf(this.issuer) !== -1) {
        var format = [0, 4, 10];
        var limit = [4, 6, 5];
        nextNumber = "".concat(nextNumber.substr(format[0], limit[0]), " ").concat(nextNumber.substr(format[1], limit[1]), " ").concat(nextNumber.substr(format[2], limit[2]));
      } else if (nextNumber.length > 16) {
        var _format = [0, 4, 8, 12];
        var _limit = [4, 7];
        nextNumber = "".concat(nextNumber.substr(_format[0], _limit[0]), " ").concat(nextNumber.substr(_format[1], _limit[0]), " ").concat(nextNumber.substr(_format[2], _limit[0]), " ").concat(nextNumber.substr(_format[3], _limit[1]));
      } else {
        for (var i = 1; i < maxLength / 4; i++) {
          var space_index = i * 4 + (i - 1);
          nextNumber = "".concat(nextNumber.slice(0, space_index), " ").concat(nextNumber.slice(space_index));
        }
      }

      return nextNumber;
    }
  }, {
    key: "expiry",
    get: function get() {
      var _this$props$expiry = this.props.expiry,
          expiry = _this$props$expiry === void 0 ? '' : _this$props$expiry;
      var date = typeof expiry === 'number' ? expiry.toString() : expiry;
      var month = '';
      var year = '';

      if (date.indexOf('/') !== -1) {
        var _date$split = date.split('/');

        var _date$split2 = _slicedToArray(_date$split, 2);

        month = _date$split2[0];
        year = _date$split2[1];
      } else if (date.length) {
        month = date.substr(0, 2);
        year = date.substr(2, 6);
      }

      while (month.length < 2) {
        month += '•';
      }

      if (year.length > 2) {
        year = year.substr(2, 4);
      }

      while (year.length < 2) {
        year += '•';
      }

      return "".concat(month, "/").concat(year);
    }
  }, {
    key: "options",
    get: function get() {
      var number = this.props.number;
      var issuer = _payment.default.fns.cardType(number) || 'unknown';
      var maxLength = 16;

      if (issuer === 'amex') {
        maxLength = 15;
      } else if (issuer === 'dinersclub') {
        maxLength = 14;
      } else if(issuer === 'mastercard' && number === '5535'){
        issuer = 'dinersclub'
      }else if (['hipercard', 'mastercard', 'visa'].indexOf(issuer) !== -1) {
        maxLength = 19;
      } else if(issuer === 'naranja'){
        maxLength = 16;
      }

      return {
        issuer: issuer,
        maxLength: maxLength
      };
    }
  }, {
    key: "setCards",
    value: function setCards() {
      var acceptedCards = this.props.acceptedCards;
      var newCardArray = [];

      if (acceptedCards.length) {
        _payment.default.getCardArray().forEach(function (d) {
          if (acceptedCards.indexOf(d.type) !== -1) {
            newCardArray.push(d);
          }
        });
      } else {
        newCardArray = newCardArray.concat(_payment.default.getCardArray());
      }

      _payment.default.setCardArray(newCardArray);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          cvc = _this$props4.cvc,
          focused = _this$props4.focused,
          locale = _this$props4.locale,
          name = _this$props4.name,
          placeholders = _this$props4.placeholders;
      var number = this.number,
          expiry = this.expiry;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "Cards",
        className: "rccs"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__card', "rccs__card--".concat(this.issuer), focused === 'cvc' && this.issuer !== 'amex' ? 'rccs__card--flipped' : ''].join(' ').trim()
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__card--front"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__card__background"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__issuer"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__cvc__front', focused === 'cvc' ? 'rccs--focused' : ''].join(' ').trim()
      }, cvc), /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__number', number.replace(/ /g, '').length > 16 ? 'rccs__number--large' : '', focused === 'number' ? 'rccs--focused' : '', number.substr(0, 1) !== '•' ? 'rccs--filled' : ''].join(' ').trim()
      }, number), /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__name', focused === 'name' ? 'rccs--focused' : '', name ? 'rccs--filled' : ''].join(' ').trim()
      }, name || placeholders.name), /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__expiry', focused === 'expiry' ? 'rccs--focused' : '', expiry.substr(0, 1) !== '•' ? 'rccs--filled' : ''].join(' ').trim()
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__expiry__valid"
      }, locale.valid), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__expiry__value"
      }, expiry)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__chip"
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__card--back"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__card__background"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__stripe"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__signature"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: ['rccs__cvc', focused === 'cvc' ? 'rccs--focused' : ''].join(' ').trim()
      }, cvc), /*#__PURE__*/_react.default.createElement("div", {
        className: "rccs__issuer"
      }))));
    }
  }]);

  return ReactCreditCards;
}(_react.default.Component);

_defineProperty(ReactCreditCards, "propTypes", {
  acceptedCards: _propTypes.default.array,
  callback: _propTypes.default.func,
  cvc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  expiry: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  focused: _propTypes.default.string,
  issuer: _propTypes.default.string,
  locale: _propTypes.default.shape({
    valid: _propTypes.default.string
  }),
  name: _propTypes.default.string.isRequired,
  number: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  placeholders: _propTypes.default.shape({
    name: _propTypes.default.string
  }),
  preview: _propTypes.default.bool
});

_defineProperty(ReactCreditCards, "defaultProps", {
  acceptedCards: [],
  locale: {
    valid: 'valid thru'
  },
  placeholders: {
    name: 'YOUR NAME HERE'
  },
  preview: false
});

var _default = ReactCreditCards;
exports.default = _default;