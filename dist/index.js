"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Donut = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SIZE = 34;
var PREFIX = 'donut';
var halfSize = SIZE / 2;
var circleProps = {
  cx: halfSize,
  cy: halfSize,
  r: halfSize - 1
};

var getClassName = function getClassName(p, c) {
  return "".concat(p).concat(c);
};

var renderProgress = function renderProgress(progress) {
  return _react.default.createElement("strong", null, progress);
};

var Donut = function Donut(_ref) {
  var _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$onRender = _ref.onRender,
      onRender = _ref$onRender === void 0 ? renderProgress : _ref$onRender,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? PREFIX : _ref$prefix;
  return _react.default.createElement("div", {
    className: getClassName(prefix, progress < 0 ? ' is--negative' : '')
  }, _react.default.createElement("svg", {
    className: getClassName(prefix, '__canvas'),
    width: SIZE,
    height: SIZE,
    viewBox: "0 0 ".concat(SIZE, " ").concat(SIZE),
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("circle", _extends({
    className: getClassName(prefix, '__frame')
  }, circleProps)), _react.default.createElement("circle", _extends({
    className: getClassName(prefix, '__circle'),
    strokeDasharray: "".concat(Math.abs(progress), " 100")
  }, circleProps))), typeof onRender === 'function' && _react.default.createElement("div", {
    className: getClassName(prefix, '__text')
  }, onRender(progress)));
};

exports.Donut = Donut;
Donut.propTypes = {
  progress: _propTypes.default.number,
  onRender: _propTypes.default.func,
  prefix: _propTypes.default.string
};
Donut.defaultProps = {
  progress: 0,
  onRender: renderProgress,
  prefix: PREFIX
};
var _default = Donut;
exports.default = _default;