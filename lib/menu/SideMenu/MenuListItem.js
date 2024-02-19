"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
const MenuItem = props => {
  const {
    item = {}
  } = props;
  const {
    title,
    link
  } = item;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
    component: "div",
    disablePadding: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemButton, {
      sx: {
        pl: 4
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Link, {
        href: link,
        children: title
      })
    })
  });
};
const Link = (0, _material.styled)('a')({
  width: '100%',
  color: 'white',
  textDecoration: 'none'
});
var _default = exports.default = MenuItem;