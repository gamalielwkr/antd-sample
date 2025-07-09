import {
  AppstoreOutlined,
  ExportOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import {
  PATH_DASHBOARD,
  PATH_FUNNEL_MANAGEMENT,
  PATH_SUPPLIER_MANAGEMENT,
  PATH_SUPPLIER_MANAGEMENT_CONFIGURATIONS,
  PATH_SUPPLIER_MANAGEMENT_LIST,
  PATH_SUPPLIER_MANAGEMENT_REVIEW_APPROVALS
} from './web-url'

interface MenuItem {
  child?: MenuItem[]
  icon?: React.ReactNode
  key: string
  label: string
  path: string
}

const menu: MenuItem[] = [
  {
    icon: <AppstoreOutlined />,
    key: 'dashboard',
    label: 'Dashboard',
    path: PATH_DASHBOARD
  },
  {
    child: [
      {
        key: 'supplier-management-dashboard',
        label: 'Dashboard',
        path: PATH_SUPPLIER_MANAGEMENT
      },
      {
        key: 'supplier-management-list',
        label: 'Supplier List',
        path: PATH_SUPPLIER_MANAGEMENT_LIST
      },
      {
        key: 'supplier-management-review-approvals',
        label: 'Review & Approvals',
        path: PATH_SUPPLIER_MANAGEMENT_REVIEW_APPROVALS
      },
      {
        key: 'supplier-management-configurations',
        label: 'Configurations',
        path: PATH_SUPPLIER_MANAGEMENT_CONFIGURATIONS
      }
    ],
    icon: <TeamOutlined />,
    key: 'supplier-management',
    label: 'Supplier Management',
    path: PATH_SUPPLIER_MANAGEMENT
  },
  {
    icon: <ExportOutlined />,
    key: 'funnel-management',
    label: 'Funnel Management',
    path: PATH_FUNNEL_MANAGEMENT
  }
]

export default menu
