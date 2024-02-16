"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
const MenuPopupItem = props => {
  const {
    item = {}
  } = props;
  const {
    title,
    link
  } = item;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, {
      href: link,
      children: title
    })
  });
};
const Link = (0, _material.styled)('a')({
  width: '100%',
  color: '#1E6AF6',
  textDecoration: 'none'
});
var _default = exports.default = MenuPopupItem;