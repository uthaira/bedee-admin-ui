"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _layout = require("./layout");
var _jsxRuntime = require("react/jsx-runtime");
const App = () => {
  const username = 'Admin@bedee.com';
  const role = 'Super Admin';
  const version = '1.2.5';
  const onLogout = () => {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layout.AdminLayout, {
    username: username,
    role: role,
    version: version,
    onLogout: onLogout,
    children: "Bedee Admin UI"
  });
};
var _default = exports.default = App;