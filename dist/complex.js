"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ComplexDonut = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./complex.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var rotateAngle = 0;

var getTotal = function getTotal(values) {
  return values.reduce(function (acc, _ref) {
    var value = _ref.value;
    return acc + value;
  }, 0);
};

var getPercent = function getPercent(value, total) {
  return value / total;
};

var sortValues = function sortValues(values) {
  return values.sort(function (a, b) {
    return b.value - a.value;
  });
};

var getCircumference = function getCircumference(radius) {
  return 2 * Math.PI * radius;
};

var convertDegreesToRadians = function convertDegreesToRadians(angle) {
  return angle * (Math.PI / 180);
};

var ComplexDonut = function ComplexDonut(props) {
  var loadTimeout;
  var total = getTotal(props.segments);

  var getTextCoordinates = function getTextCoordinates(value, angleOffset) {
    var size = props.size,
        radius = props.radius,
        segments = props.segments;
    var total = getTotal(segments);
    var angle = getPercent(value, total) * 360 / 2 + angleOffset;
    var radians = convertDegreesToRadians(angle);
    return {
      x: radius * Math.cos(radians) + size / 2,
      y: radius * Math.sin(radians) + size / 2
    };
  };

  var getTransforms = function getTransforms() {
    var rotations = [];
    var textCoords = [];
    var startAngle = props.startAngle,
        segments = props.segments;
    var total = getTotal(segments);
    rotateAngle = startAngle;
    sortValues(segments).forEach(function (_ref2) {
      var value = _ref2.value;
      var data = rotateAngle;
      var percent = getPercent(value, total);

      var _getTextCoordinates = getTextCoordinates(value, rotateAngle),
          x = _getTextCoordinates.x,
          y = _getTextCoordinates.y;

      rotations.push(data);
      textCoords.push({
        x: x,
        y: y
      });
      var result = rotations[rotations.length - 1] || startAngle;
      rotateAngle = percent * 360 + result;
    });
    return {
      rotations: rotations,
      textCoords: textCoords
    };
  };

  var getStrokeDashOffset = function getStrokeDashOffset(value, circumference) {
    var diff = getPercent(value, total) * circumference;
    return circumference - diff;
  };

  var _React$useState = _react["default"].useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      segments = _React$useState2[0],
      setSegments = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isLoaded = _React$useState4[0],
      setIsLoaded = _React$useState4[1];

  _react["default"].useEffect(function () {
    var segments = props.segments,
        size = props.size;

    var _getTransforms = getTransforms(),
        rotations = _getTransforms.rotations,
        textCoords = _getTransforms.textCoords;

    setSegments(sortValues(segments).map(function (_ref3, i) {
      var value = _ref3.value,
          color = _ref3.color;
      return {
        value: value,
        color: color,
        percent: getPercent(value, total),
        rotate: "rotate(".concat(rotations[i], ", ").concat(size / 2, ", ").concat(size / 2, ")"),
        textCoords: textCoords[i]
      };
    }));
    loadTimeout = setTimeout(function () {
      setIsLoaded(true);
    }, 100);
    return function () {
      clearTimeout(loadTimeout);
    };
  }, []);

  var size = props.size,
      radius = props.radius,
      thickness = props.thickness,
      className = props.className,
      circleProps = props.circleProps,
      textProps = props.textProps;
  var halfSize = size / 2;
  var circumference = getCircumference(radius);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "donut-complex".concat(isLoaded ? ' donut-complex--loaded ' : ' ').concat(className)
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    height: size,
    width: size,
    viewBox: "0 0 ".concat(size, " ").concat(size)
  }, segments.map(function (segment, i) {
    return /*#__PURE__*/_react["default"].createElement("g", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("circle", _extends({}, circleProps, {
      r: radius,
      cx: halfSize,
      cy: halfSize,
      transform: segment.rotate,
      stroke: segment.color,
      strokeWidth: thickness,
      strokeDasharray: circumference,
      strokeDashoffset: getStrokeDashOffset(segment.value, circumference)
    })), /*#__PURE__*/_react["default"].createElement("text", _extends({}, textProps, {
      x: segment.textCoords.x,
      y: segment.textCoords.y,
      dy: "3px",
      textAnchor: "middle"
    }), "".concat(Math.round(segment.percent * 100), "%")));
  })));
};

exports.ComplexDonut = ComplexDonut;
ComplexDonut.propTypes = {
  size: _propTypes["default"].number.isRequired,
  radius: _propTypes["default"].number.isRequired,
  segments: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    color: _propTypes["default"].string,
    value: _propTypes["default"].number
  })).isRequired,
  thickness: _propTypes["default"].number.isRequired,
  startAngle: _propTypes["default"].number,
  className: _propTypes["default"].string,
  circleProps: _propTypes["default"].object,
  textProps: _propTypes["default"].object
};
ComplexDonut.defaultProps = {
  size: 160,
  radius: 60,
  segments: [],
  thickness: 30,
  startAngle: -90,
  className: '',
  circleProps: {},
  textProps: {}
};
var _default = ComplexDonut;
exports["default"] = _default;