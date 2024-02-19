"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _DasboardIcon = _interopRequireDefault(require("../../icon/DasboardIcon"));
var _ReportIcon = _interopRequireDefault(require("../../icon/ReportIcon"));
var _Fullfill = _interopRequireDefault(require("../../icon/Fullfill"));
var _CustomerIcon = _interopRequireDefault(require("../../icon/CustomerIcon"));
var _Marketing = _interopRequireDefault(require("../../icon/Marketing"));
var _ProviderIcon = _interopRequireDefault(require("../../icon/ProviderIcon"));
var _Issue = _interopRequireDefault(require("../../icon/Issue"));
var _Admin = _interopRequireDefault(require("../../icon/Admin"));
var _Setting = _interopRequireDefault(require("../../icon/Setting"));
var _LogOut = _interopRequireDefault(require("../../icon/LogOut"));
var _Header = _interopRequireDefault(require("./Header"));
var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SideMenu = props => {
  const {
    visible,
    username,
    role,
    version,
    onLogout,
    onVisible
  } = props;
  const content = Menus.map((it, i) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuGroup.default, {
      item: it,
      visible: visible
    }, i);
  });
  const style = visible ? {} : {
    display: 'none'
  };
  const width = visible ? '280px' : '55px';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(View, {
    style: {
      width
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Padding, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
        visible: visible,
        username: username,
        role: role,
        version: version,
        onVisible: onVisible
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuContent, {
        children: content
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Footer, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(Logout, {
          onClick: onLogout,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LogOut.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(LogoutText, {
            style: style,
            children: "Logout"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Version, {
          style: style,
          children: version || ''
        })]
      })]
    })
  });
};
const View = (0, _material.styled)('div')({
  width: '280px',
  height: '100vh',
  color: 'white',
  background: 'linear-gradient(175.42deg, #6C9EFF 3.15%, #3977EB 53.9%, #0056F3 95.95%)',
  position: 'fixed',
  top: 0,
  left: 0
});
const Padding = (0, _material.styled)('div')({
  padding: '16px'
});
const MenuContent = (0, _material.styled)('div')({
  height: 'calc(100vh - 220px)',
  overflow: 'scroll'
});
const Footer = (0, _material.styled)('div')({
  width: 'calc(100% - 18px)',
  paddingTop: '8px'
});
const Logout = (0, _material.styled)('div')({
  width: '100%',
  paddingBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  cursor: 'pointer'
});
const LogoutText = (0, _material.styled)('div')({
  width: '100%'
});
const Version = (0, _material.styled)('div')({
  width: '100%',
  fontSize: '14px'
});
const Menus = [{
  title: 'Dashboard',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DasboardIcon.default, {}),
  roles: ['monitoring_dashboard_view_all', 'appointment_edit_all'],
  list: [{
    title: 'Consultation Monitoring',
    link: '/consultation-monitoring',
    roles: ['monitoring_dashboard_view_all']
  }, {
    title: 'Appointment',
    link: '/appointment',
    roles: ['appointment_edit_all']
  }, {
    title: 'Schedule',
    link: '/schedule',
    roles: ['appointment_edit_all']
  }]
}, {
  title: 'Report',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ReportIcon.default, {}),
  roles: ['finance_report_view_all', 'sale_report_view_all', 'transaction_report_view_all'],
  list: [{
    title: 'Finance report',
    link: "/finance-report",
    roles: ['finance_report_view_all']
  }, {
    title: 'Sale report',
    link: '/sale-report',
    roles: ['sale_report_view_all']
  }, {
    title: 'Transaction report',
    link: '/transaction-report',
    roles: ['transaction_report_view_all']
  }, {
    title: 'FDA report',
    link: '/fda-report',
    roles: ['sale_report_view_all']
  }]
}, {
  title: 'Fulfillment',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fullfill.default, {}),
  roles: ['order_edit_all', 'order_view_intervention', 'inventory_view_all', 'inventory_view_store'],
  list: [{
    title: 'Order',
    link: '/order',
    roles: ['order_edit_all', 'order_view_intervention']
  }, {
    title: 'Inventory',
    link: '/inventory',
    roles: ['inventory_view_all', 'inventory_view_store']
  }]
}, {
  title: 'Marketing',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Marketing.default, {}),
  roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all', 'coupon_code_view_all', 'coupon_code_edit_all'],
  list: [{
    title: 'Coupon monitoring',
    link: '/home/marketing/coupon',
    roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all']
  }, {
    title: 'Coupon upload',
    link: '/home/marketing/importer',
    roles: ['coupon_code_view_all', 'coupon_code_edit_all']
  }, {
    title: 'Insurance calculation',
    link: '/home/marketing/insurance',
    roles: [],
    isTest: true
  }, {
    title: 'Banner management',
    link: '/home/marketing/banner',
    roles: [],
    isTest: true
  }]
}, {
  title: 'Catalog',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Marketing.default, {}),
  roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all', 'coupon_code_view_all', 'coupon_code_edit_all'],
  isTest: true,
  list: [{
    title: 'Categories',
    link: '/home/catalog/category',
    roles: []
  }, {
    title: 'Campaigns',
    link: '/home/catalog/campaign',
    roles: []
  }, {
    title: 'Deep link',
    link: '/home/catalog/deep-link',
    roles: []
  }]
}, {
  title: 'Customer management',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomerIcon.default, {}),
  roles: ['user_management_view_all'],
  list: [{
    title: 'Customer profile',
    link: '/customer',
    roles: []
  }]
}, {
  title: 'Provider management',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProviderIcon.default, {}),
  roles: ['provider_view'],
  minActive: ['doctors_profile', 'pharmacist_profile', 'alliedhealths_profile'],
  list: [{
    title: 'Doctor profile',
    link: '/home/provider-management/doctors_profile',
    roles: [],
    active: ['doctors_profile']
  }, {
    title: 'Pharmacist profile',
    link: '/home/provider-management/pharmacist_profile',
    roles: [],
    active: ['pharmacist_profile']
  }, {
    title: 'Allied health profile',
    link: '/home/provider-management/alliedhealths_profile',
    roles: [],
    active: ['alliedhealths_profile']
  }, {
    title: 'Instant Timetable',
    link: '/home/provider-management/schedule',
    roles: []
  }]
}, {
  title: 'Refund management',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Issue.default, {}),
  roles: ['refund_management_view', 'refund_management_edit'],
  minActive: ['refund_management'],
  list: [{
    title: 'Refund management',
    link: '/refund-management',
    roles: [],
    active: ['refund_management']
  }]
}, {
  title: 'Admin',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Admin.default, {}),
  roles: ['product_edit_all', 'product_view_all', 'store_edit_all', 'store_view_all'],
  minActive: [],
  list: [{
    title: 'Store',
    link: '/store',
    roles: ['store_edit_all', 'store_view_all'],
    active: []
  }, {
    title: 'Product',
    link: '/product',
    roles: ['product_edit_all', 'product_view_all'],
    active: []
  }]
}, {
  title: 'Settings',
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Setting.default, {}),
  roles: ['operating_hours_view_all', 'operating_hours_edit_all', 'master_data_all'],
  minActive: ['master-data-provider'],
  list: [{
    title: 'Operating hours',
    link: '/home/setting/operating-hours',
    roles: ['operating_hours_view_all', 'operating_hours_edit_all'],
    active: []
  }, {
    title: 'Master data for provider',
    link: '/home/setting/master-data-provider',
    roles: ['master_data_all'],
    active: ['master-data-provider']
  }, {
    title: 'Master data for teleconsult',
    link: '/home/setting/master-data-teleconsult',
    roles: ['master_data_all'],
    active: ['master-data-teleconsult']
  }]
}];
var _default = exports.default = SideMenu;