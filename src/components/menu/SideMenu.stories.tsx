import { Meta, StoryObj } from "@storybook/react"
import BaseSideMenu from "./SideMenu"
import DasboardIcon from "../../icons/DasboardIcon"
import ReportIcon from "../../icons/ReportIcon"
import Fullfill from "../../icons/Fullfill"
import Marketing from "../../icons/Marketing"
import CustomerIcon from "../../icons/CustomerIcon"
import ProviderIcon from "../../icons/ProviderIcon"
import Issue from "../../icons/Issue"
import Admin from "../../icons/Admin"
import Setting from "../../icons/Setting"

export default {
  title: "Components/Menu",
  component: BaseSideMenu,
} as Meta<typeof BaseSideMenu>

type Story = StoryObj<typeof BaseSideMenu>;

const menus = [
  {
    title: 'Dashboard',
    icon: <DasboardIcon />,
    roles: ['monitoring_dashboard_view_all', 'appointment_edit_all'],
    list: [
      {
        title: 'Consultation Monitoring',
        link: '/consultation-monitoring',
        roles: ['monitoring_dashboard_view_all'],
      },
      {
        title: 'Appointment',
        link: '/appointment',
        roles: ['appointment_edit_all'],
      },
      {
        title: 'Schedule',
        link: '/schedule',
        roles: ['appointment_edit_all'],
      }
    ]
  },
  {
    title: 'Report',
    icon: <ReportIcon />,
    roles: ['finance_report_view_all', 'sale_report_view_all', 'transaction_report_view_all'],
    list: [
      {
        title: 'Finance report',
        link: `/finance-report`,
        roles: ['finance_report_view_all'],
      },
      {
        title: 'Sale report',
        link: '/sale-report',
        roles: ['sale_report_view_all'],
      },
      {
        title: 'Transaction report',
        link: '/transaction-report',
        roles: ['transaction_report_view_all'],
      },
      {
        title: 'FDA report',
        link: '/fda-report',
        roles: ['sale_report_view_all'],
      }
    ]
  },
  {
    title: 'Fulfillment',
    icon: <Fullfill />,
    roles: ['order_edit_all', 'order_view_intervention', 'inventory_view_all', 'inventory_view_store'],
    list: [
      {
        title: 'Order',
        link: '/order',
        roles: ['order_edit_all', 'order_view_intervention'],
      },
      {
        title: 'Inventory',
        link: '/inventory',
        roles: ['inventory_view_all', 'inventory_view_store'],
      }
    ]
  },
  {
    title: 'Marketing',
    icon: <Marketing />,
    roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all', 'coupon_code_view_all', 'coupon_code_edit_all'],
    list: [
      {
        title: 'Coupon monitoring',
        link: '/home/marketing/coupon',
        roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all'],
      },
      {
        title: 'Coupon upload',
        link: '/home/marketing/importer',
        roles: ['coupon_code_view_all', 'coupon_code_edit_all'],
      },
      {
        title: 'Insurance calculation',
        link: '/home/marketing/insurance',
        roles: [],
        isTest: true
      },
      {
        title: 'Banner management',
        link: '/home/marketing/banner',
        roles: [],
        isTest: true
      }
    ]
  },
  {
    title: 'Catalog',
    icon: <Marketing />,
    roles: ['campaign_monitoring_view_all', 'campaign_monitoring_edit_all', 'coupon_code_view_all', 'coupon_code_edit_all'],
    isTest: true,
    list: [
      {
        title: 'Categories',
        link: '/home/catalog/category',
        roles: [],
      },
      {
        title: 'Campaigns',
        link: '/home/catalog/campaign',
        roles: [],
      },
      {
        title: 'Deep link',
        link: '/home/catalog/deep-link',
        roles: [],
      }
    ]
  },
  {
    title: 'Customer management',
    icon: <CustomerIcon />,
    roles: ['user_management_view_all'],
    list: [
      {
        title: 'Customer profile',
        link: '/customer',
        roles: [],
      }
    ]
  },
  {
    title: 'Provider management',
    icon: <ProviderIcon />,
    roles: ['provider_view'],
    minActive: ['doctors_profile', 'pharmacist_profile', 'alliedhealths_profile'],
    list: [
      {
        title: 'Doctor profile',
        link: '/home/provider-management/doctors_profile',
        roles: [],
        active: ['doctors_profile'],
      },
      {
        title: 'Pharmacist profile',
        link: '/home/provider-management/pharmacist_profile',
        roles: [],
        active: ['pharmacist_profile'],
      },
      {
        title: 'Allied health profile',
        link: '/home/provider-management/alliedhealths_profile',
        roles: [],
        active: ['alliedhealths_profile'],
      },
      {
        title: 'Instant Timetable',
        link: '/home/provider-management/schedule',
        roles: [],
      }
    ]
  },
  {
    title: 'Refund management',
    icon: <Issue />,
    roles: ['refund_management_view', 'refund_management_edit'],
    minActive: ['refund_management'],
    list: [
      {
        title: 'Refund management',
        link: '/refund-management',
        roles: [],
        active: ['refund_management'],
      }
    ]
  },
  {
    title: 'Admin',
    icon: <Admin />,
    roles: ['product_edit_all', 'product_view_all', 'store_edit_all', 'store_view_all'],
    minActive: [],
    list: [
      {
        title: 'Store',
        link: '/store',
        roles: ['store_edit_all', 'store_view_all'],
        active: [],
      },
      {
        title: 'Product',
        link: '/product',
        roles: ['product_edit_all', 'product_view_all'],
        active: [],
      }
    ]
  },
  {
    title: 'Settings',
    icon: <Setting />,
    roles: ['operating_hours_view_all', 'operating_hours_edit_all', 'master_data_all'],
    minActive: ['master-data-provider'],
    list: [
      {
        title: 'Operating hours',
        link: '/home/setting/operating-hours',
        roles: ['operating_hours_view_all', 'operating_hours_edit_all'],
        active: [],
      },
      {
        title: 'Master data for provider',
        link: '/home/setting/master-data-provider',
        roles: ['master_data_all'],
        active: ['master-data-provider'],
      },
      {
        title: 'Master data for teleconsult',
        link: '/home/setting/master-data-teleconsult',
        roles: ['master_data_all'],
        active: ['master-data-teleconsult'],
      }
    ]
  },
]

export const SideMenu: Story = {
  args: {
    menus,
    visible: true,
    username: 'admin@admin.com',
    role: 'Admin',
    version: '1.0.0'
  },
};