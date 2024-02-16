"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _BedeeLogo = _interopRequireDefault(require("../../icon/BedeeLogo"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Header = props => {
  const {
    visible,
    username,
    role,
    onVisible
  } = props;
  const style = visible ? {} : {
    display: 'none'
  };
  const logo = visible ? {} : {
    width: '24px',
    height: '24px'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(LogoSection, {
      onClick: onVisible,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Logo, {
        style: logo,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BedeeLogo.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(BrandName, {
        style: style,
        children: "Bedee"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(User, {
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Username, {
        children: username || ''
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(RoleName, {
        children: role || ''
      })]
    })]
  });
};
const View = (0, _material.styled)('div')({
  width: '100%',
  paddingBottom: '24px',
  borderBottom: '1px solid #CDE7F6'
});
const LogoSection = (0, _material.styled)('div')({
  width: '100%',
  fontWeight: 700,
  fontSize: '27px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer',
  marginBottom: '8px'
});
const Logo = (0, _material.styled)('div')({
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  backgroundColor: 'white'
});
const BrandName = (0, _material.styled)('div')({
  width: '75%'
});
const User = (0, _material.styled)('div')({
  width: '100%'
});
const Username = (0, _material.styled)('div')({
  width: '100%'
});
const RoleName = (0, _material.styled)('div')({
  width: '100%',
  paddingTop: '8px',
  fontWeight: 700,
  color: 'white'
});
var _default = exports.default = Header;