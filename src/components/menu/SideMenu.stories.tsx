import { Meta, StoryObj } from "@storybook/react"
import BaseSideMenu, { Menu } from "./SideMenu"

export default {
  title: "Components/Menu",
  component: BaseSideMenu,
} as Meta<typeof BaseSideMenu>

type Story = StoryObj<typeof BaseSideMenu>;


const menus = [
  {
    title: "Dashboard",
    icon: "DashboardIcon",
    permission: [
      {
        code: "consultation_monitoring",
        view: true,
      },
      {
        code: "appointment",
        view: true,
      },
      {
        code: "schedule",
        view: true,
      },
    ],
    list: [
      {
        title: "Consultation Monitoring",
        active: "consultation_monitoring",
        status: "active",
        link: "/fulfillment-web/consultation-monitoring",
        permission: [
          {
            code: "consultation_monitoring",
            view: true,
          },
        ],
      },
      {
        title: "Appointment",
        active: "appointment",
        status: "active",
        link: "/fulfillment-web/appointment",
        permission: [
          {
            code: "appointment",
            view: true,
          },
        ],
      },
      {
        title: "Schedule",
        active: "schedule",
        status: "active",
        link: "/fulfillment-web/schedule",
        permission: [
          {
            code: "schedule",
            view: true,
          },
        ],
      },
    ],
  },
  {
    title: "Report",
    icon: "ChartPie",
    permission: [
      {
        code: "finance_report",
        view: true,
      },
      {
        code: "sale_report",
        view: true,
      },
      {
        code: "transaction_report",
        view: true,
      },
      {
        code: "fda_report",
        view: true,
      },
    ],
    list: [
      {
        title: "Finance report",
        active: "finance_report",
        status: "active",
        link: "/fulfillment-web/finance-report",
        permission: [
          {
            code: "finance_report",
            view: true,
          },
        ],
      },
      {
        title: "Sale report",
        active: "sale_report",
        status: "active",
        link: "/fulfillment-web/sale-report",
        permission: [
          {
            code: "sale_report",
            view: true,
          },
        ],
      },
      {
        title: "Transaction report",
        active: "transaction_report",
        status: "active",
        link: "/fulfillment-web/transaction-report",
        permission: [
          {
            code: "transaction_report",
            view: true,
          },
        ],
      },
      {
        title: "FDA report",
        active: "fda_report",
        status: "active",
        link: "/fulfillment-web/fda-report",
        permission: [
          {
            code: "fda_report",
            view: true,
          },
        ],
      },
    ],
  },
  {
    title: "Fulfillment",
    icon: "ShoppingCart",
    permission: [
      {
        code: "order",
        view: true,
      },
      {
        code: "inventory",
        view: true,
      },
    ],
    list: [
      {
        title: "Order",
        active: "order",
        status: "active",
        link: "/fulfillment-web/order",
        permission: [
          {
            code: "order",
            view: true,
          },
        ],
      },
      {
        title: "Inventory",
        active: "inventory",
        status: "active",
        link: "/fulfillment-web/inventory",
        permission: [
          {
            code: "inventory",
            view: true,
          },
        ],
      },
    ],
  },
  {
    title: "Marketing",
    icon: "Marketing",
    permission: [
      {
        code: "coupon_monitoring",
        view: true,
      },
      {
        code: "coupon_upload",
        edit: true,
      },
      {
        code: "banner",
        view: true,
      },
      {
        code: "deeplink",
        view: true,
      },
    ],
    list: [
      {
        title: "Coupon monitoring",
        link: "/admin-provider-portal/home/marketing/coupon",
        permission: [
          {
            code: "coupon_monitoring",
            view: true,
          },
        ],
        active: "coupon",
        status: "active",
      },
      {
        title: "Coupon upload",
        link: "/admin-provider-portal/home/marketing/importer",
        permission: [
          {
            code: "coupon_upload",
            edit: true,
          },
        ],
        active: "importer",
        status: "active",
      },
      {
        title: "Banner management",
        link: "/admin-provider-portal/home/marketing/banner",
        permission: [
          {
            code: "banner",
            view: true,
          },
        ],
        active: "banner",
        status: "active",
      },
      {
        title: "Deeplink management",
        link: "/admin-provider-portal/home/marketing/deeplink",
        permission: [
          {
            code: "deeplink",
            view: true,
          },
        ],
        active: "deeplink",
        status: "active",
      },
    ],
  },
  {
    title: "Customer management",
    icon: "CustomerIcon",
    permission: [
      {
        code: "customer",
        view: true,
      },
      {
        code: "customer_detail",
        view: true,
      },
    ],
    list: [
      {
        title: "Customer profile",
        link: "/fulfillment-web/customer",
        permission: [
          {
            code: "customer",
            view: true,
          },
          {
            code: "customer_detail",
            view: true,
          },
        ],
        status: "active",
      },
    ],
  },
  {
    title: "Investigation management",
    icon: "Lab",
    permission: [
      {
        code: "lab_result_transaction",
        view: true,
      },
    ],
    list: [
      {
        title: "Lab result transaction",
        link: "/admin-provider-portal/home/investigation-management/lab-result-transaction",
        permission: [
          {
            code: "lab_result_transaction",
            view: true,
          },
        ],
        active: "lab-result-transaction",
        status: "active",
      },
    ],
  },
  {
    title: "Provider management",
    icon: "ProviderIcon",
    permission: [
      {
        code: "provider_doctor",
        view: true,
      },
      {
        code: "provider_pharmacist",
        view: true,
      },
      {
        code: "provider_ah",
        view: true,
      },
      {
        code: "timetable",
        view: true,
      },
    ],
    minActive: ["doctors_profile", "pharmacist_profile", "alliedhealths_profile"],
    list: [
      {
        title: "Doctor profile",
        link: "/admin-provider-portal/home/provider-management/doctors_profile",
        permission: [
          {
            code: "provider_doctor",
            view: true,
          },
        ],
        active: "doctors_profile",
        status: "active",
      },
      {
        title: "Pharmacist profile",
        link: "/admin-provider-portal/home/provider-management/pharmacist_profile",
        permission: [
          {
            code: "provider_pharmacist",
            view: true,
          },
        ],
        active: "pharmacist_profile",
        status: "active",
      },
      {
        title: "Allied health profile",
        link: "/admin-provider-portal/home/provider-management/alliedhealths_profile",
        permission: [
          {
            code: "provider_ah",
            view: true,
          },
        ],
        active: "alliedhealths_profile",
        status: "active",
      },
      {
        title: "Instant Timetable",
        link: "/admin-provider-portal/home/provider-management/schedule",
        permission: [
          {
            code: "timetable",
            view: true,
          },
        ],
        status: "active",
      },
    ],
  },
  {
    title: "Refund management",
    icon: "ClipboardList",
    permission: [
      {
        code: "refund",
        view: true,
      },
    ],
    minActive: ["refund_management"],
    list: [
      {
        title: "Refund management",
        link: "/fulfillment-web/refund-management",
        permission: [
          {
            code: "refund",
            view: true,
          },
        ],
        active: "refund_management",
        status: "active",
      },
    ],
  },
  {
    title: "Admin",
    icon: "Admin",
    permission: [
      {
        code: "store",
        view: true,
      },
      {
        code: "product",
        view: true,
      },
    ],
    minActive: [],
    list: [
      {
        title: "Store",
        link: "/fulfillment-web/store",
        permission: [
          {
            code: "store",
            view: true,
          },
        ],
        active: "store",
        status: "active",
      },
      {
        title: "Product",
        link: "/fulfillment-web/product",
        permission: [
          {
            code: "product",
            view: true,
          },
        ],
        active: "product",
        status: "active",
      },
      {
        title: "Category",
        link: "/fulfillment-web/category",
        permission: [
          {
            code: "category",
            view: true,
          },
        ],
        active: "category",
        status: "active",
      },
    ],
  },
  {
    title: "Settings",
    icon: "Setting",
    permission: [
      {
        code: "role",
        view: true,
      },
      {
        code: "operating_hours",
        view: true,
      },
      {
        code: "master_data_provider",
        view: true,
      },
      {
        code: "master_data_tc",
        view: true,
      },
    ],
    minActive: ["master-data-provider"],
    list: [
      {
        title: "Role management",
        active: "role-management",
        status: "active",
        link: "/admin-provider-portal/home/setting/role-management",
        permission: [
          {
            code: "role",
            view: true,
          },
        ],
      },
      {
        title: "Operating hours",
        active: "operating-hours",
        status: "active",
        link: "/admin-provider-portal/home/setting/operating-hours",
        permission: [
          {
            code: "operating_hours",
            view: true,
          },
        ],
      },
      {
        title: "Master data for provider",
        active: "master-data-provider",
        status: "active",
        link: "/admin-provider-portal/home/setting/master-data-provider",
        permission: [
          {
            code: "master_data_provider",
            view: true,
          },
        ],
      },
      {
        title: "Master data for teleconsult",
        active: "master-data-teleconsult",
        status: "active",
        link: "/admin-provider-portal/home/setting/master-data-teleconsult",
        permission: [
          {
            code: "master_data_tc",
            view: true,
          },
        ],
      },
    ],
  },
  {
    title: "None sub menu",
    icon: "DasboardIcon",
    active: "sale_report_test",
    status: "active",
    link: "/fulfillment-web/sale-report",
    permission: [
      {
        code: "sale_report",
        view: true,
      },
    ],
  },
] as Menu[];

export const SideMenu: Story = {
  args: {
    menus,
    visible: true,
    username: 'admin@admin.com',
    role: 'Admin',
    version: '1.0.0',
    lastLoginDate: '13/6/2024',
    lastLoginTime: '13:37:28',
    activeKey: 'master-data-teleconsult'
  },
};