"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _ChevronDown = _interopRequireDefault(require("../../icon/ChevronDown"));
var _ChevronUp = _interopRequireDefault(require("../../icon/ChevronUp"));
var _MenuListItem = _interopRequireDefault(require("./MenuListItem"));
var _MenuPopupItem = _interopRequireDefault(require("./MenuPopupItem"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GroupMenu = props => {
  const [open, setOpen] = (0, _react.useState)(false);
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const isOpenPopup = Boolean(anchorEl);
  const {
    item,
    visible
  } = props;
  const {
    title,
    icon
  } = item;
  const menus = item.list || [];
  const onClick = () => setOpen(!open);
  const onAnchorEl = event => setAnchorEl(event.currentTarget);
  const onClose = () => onClose();
  if (visible) {
    const content = menus.map((it, i) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuListItem.default, {
        item: it
      }, i);
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(View, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(ListButton, {
        onClick: onClick,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          children: icon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
          primary: title
        }), open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronDown.default, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronUp.default, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
        in: open,
        timeout: "auto",
        unmountOnExit: true,
        children: content
      })]
    });
  }
  const content = menus.map((it, i) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuPopupItem.default, {
      item: it,
      onClose: onClose
    }, i);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ListButton, {
      onClick: onAnchorEl,
      "aria-controls": isOpenPopup ? title : undefined,
      "aria-haspopup": "true",
      "aria-expanded": isOpenPopup ? 'true' : undefined,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        children: icon
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Menu, {
      id: title,
      anchorEl: anchorEl,
      open: isOpenPopup,
      onClose: onClose,
      MenuListProps: {
        'aria-labelledby': title
      },
      children: content
    })]
  });
};
const View = (0, _material.styled)('div')({
  width: '100%',
  'svg': {
    width: '24px',
    height: '24px'
  }
});
const ListButton = (0, _material.styled)(_material.ListItemButton)({
  width: '100%',
  padding: '8px 0px'
});
const Icon = (0, _material.styled)(_material.ListItemIcon)({
  minWidth: '40px'
});
var _default = exports.default = GroupMenu;