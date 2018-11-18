

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = Label;

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  const labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[`${props.type}Label`] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue,
    ),
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired,
};
module.exports = exports.default;
// # sourceMappingURL=label.js.map
