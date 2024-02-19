"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _SideMenu = _interopRequireDefault(require("../menu/SideMenu"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Layout = props => {
  const [visible, setVisible] = (0, _react.useState)(true);
  const {
    username,
    role,
    version,
    children
  } = props;
  (0, _react.useEffect)(() => {
    const value = localStorage.getItem('bedee_menu');
    const v = value === 'none' ? false : true;
    setVisible(v);
  }, []);
  const onVisible = () => {
    const v = !visible;
    localStorage.setItem('bedee_menu', v ? 'display' : 'none');
    setVisible(v);
  };
  const width = visible ? '280px' : '55px';
  const padding = visible ? '16px 16px 0px 296px' : '16px 16px 0px 71px';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(MenuView, {
      style: {
        width
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SideMenu.default, {
        visible: visible,
        username: username,
        role: role,
        version: version,
        onVisible: onVisible
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(BodyView, {
      style: {
        padding
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ContentView, {
        children: children
      })
    })]
  });
};
const View = (0, _material.styled)('div')({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap'
});
const MenuView = (0, _material.styled)('div')({
  display: 'block',
  width: '280px'
});
const BodyView = (0, _material.styled)('div')({
  display: 'block',
  width: '100%',
  minHeight: '100vh',
  padding: '16px 16px 0px 296px',
  backgroundColor: '#F7F8F9'
});
const ContentView = (0, _material.styled)('div')({
  display: 'block',
  width: '100%'
});
var _default = exports.default = Layout;