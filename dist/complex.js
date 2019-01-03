"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ComplexDonut = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./complex.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rotateAngle = 0;

var ComplexDonut =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComplexDonut, _React$Component);

  function ComplexDonut(props) {
    var _this;

    _classCallCheck(this, ComplexDonut);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComplexDonut).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadTimeout", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "total", function (values) {
      return values.reduce(function (acc, _ref) {
        var value = _ref.value;
        return acc + value;
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "percent", function (value, total) {
      return value / total;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transforms", function () {
      var rotations = [];
      var textCoords = [];
      var _this$props = _this.props,
          startAngle = _this$props.startAngle,
          segments = _this$props.segments;

      var total = _this.total(segments);

      rotateAngle = startAngle;

      _this.sortValues(segments).forEach(function (_ref2) {
        var value = _ref2.value;
        var data = rotateAngle;

        var percent = _this.percent(value, total);

        var _this$textCoordinates = _this.textCoordinates(value, rotateAngle),
            x = _this$textCoordinates.x,
            y = _this$textCoordinates.y;

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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sortValues", function (values) {
      return values.sort(function (a, b) {
        return b.value - a.value;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "circumference", function (radius) {
      return 2 * Math.PI * radius;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "degreesToRadians", function (angle) {
      return angle * (Math.PI / 180);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "strokeDashOffset", function (value, circumference) {
      var diff = _this.percent(value, _this.state.total) * circumference;
      return circumference - diff;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "textCoordinates", function (value, angleOffset) {
      var _this$props2 = _this.props,
          size = _this$props2.size,
          radius = _this$props2.radius,
          segments = _this$props2.segments;

      var total = _this.total(segments);

      var angle = _this.percent(value, total) * 360 / 2 + angleOffset;

      var radians = _this.degreesToRadians(angle);

      return {
        x: radius * Math.cos(radians) + size / 2,
        y: radius * Math.sin(radians) + size / 2
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var _this$props3 = _this.props,
          segments = _this$props3.segments,
          size = _this$props3.size;
      var _this$state = _this.state,
          total = _this$state.total,
          _this$state$transform = _this$state.transforms,
          rotations = _this$state$transform.rotations,
          textCoords = _this$state$transform.textCoords;

      _this.setState({
        segments: _this.sortValues(segments).map(function (_ref3, i) {
          var value = _ref3.value,
              color = _ref3.color;
          return {
            value: value,
            color: color,
            percent: _this.percent(value, total),
            rotate: "rotate(".concat(rotations[i], ", ").concat(size / 2, ", ").concat(size / 2, ")"),
            textCoords: textCoords[i]
          };
        })
      });

      _this.loadTimeout = setTimeout(function () {
        _this.setState({
          isLoaded: true
        });
      }, 100);
    });

    _this.state = {
      total: _this.total(props.segments),
      segments: [],
      transforms: _this.transforms(),
      isLoaded: false
    };
    return _this;
  }

  _createClass(ComplexDonut, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimeout(this.loadTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          size = _this$props4.size,
          radius = _this$props4.radius,
          thickness = _this$props4.thickness,
          className = _this$props4.className,
          circleProps = _this$props4.circleProps,
          textProps = _this$props4.textProps;
      var halfSize = size / 2;
      var circumference = this.circumference(radius);
      return _react.default.createElement("div", {
        className: "donut-complex".concat(this.state.isLoaded ? ' donut-complex--loaded ' : ' ').concat(className)
      }, _react.default.createElement("svg", {
        height: size,
        width: size,
        viewBox: "0 0 ".concat(size, " ").concat(size)
      }, this.state.segments.map(function (segment, i) {
        return _react.default.createElement("g", {
          key: i
        }, _react.default.createElement("circle", _extends({}, circleProps, {
          r: radius,
          cx: halfSize,
          cy: halfSize,
          transform: segment.rotate,
          stroke: segment.color,
          strokeWidth: thickness,
          strokeDasharray: circumference,
          strokeDashoffset: _this2.strokeDashOffset(segment.value, circumference)
        })), _react.default.createElement("text", _extends({}, textProps, {
          x: segment.textCoords.x,
          y: segment.textCoords.y,
          dy: "3px",
          textAnchor: "middle"
        }), "".concat(Math.round(segment.percent * 100), "%")));
      })));
    }
  }]);

  return ComplexDonut;
}(_react.default.Component);

exports.ComplexDonut = ComplexDonut;
ComplexDonut.propTypes = {
  size: _propTypes.default.number.isRequired,
  radius: _propTypes.default.number.isRequired,
  segments: _propTypes.default.arrayOf(_propTypes.default.shape({
    color: _propTypes.default.string,
    value: _propTypes.default.number
  })).isRequired,
  thickness: _propTypes.default.number.isRequired,
  startAngle: _propTypes.default.number,
  className: _propTypes.default.string,
  circleProps: _propTypes.default.object,
  textProps: _propTypes.default.object
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
exports.default = _default;