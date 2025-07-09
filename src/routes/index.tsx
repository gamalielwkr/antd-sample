import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import PageLazyLoad from '@/components/PageLazyLoad'
import PageNotFound from '@/components/PageNotFound'
import {
  PATH_DASHBOARD,
  PATH_FUNNEL_MANAGEMENT,
  PATH_SUPPLIER_MANAGEMENT,
  PATH_SUPPLIER_MANAGEMENT_LIST,
  PATH_SUPPLIER_MANAGEMENT_REVIEW_APPROVALS,
  PATH_SUPPLIER_MANAGEMENT_CONFIGURATIONS,
} from '@/constants/web-url'
import DashboardLayout from '@/layouts/DashboardLayout'


const Dashboard = lazy(() => import('./Dashboard'))
const FunnelManagement = lazy(() => import('./FunnelManagement'))
const SupplierDashboard = lazy(() => import('./SupplierManagement/Dashboard'))
const SupplierList = lazy(() => import('./SupplierManagement/List'))
const ReviewApprovals = lazy(() => import('./SupplierManagement/ReviewApprovals'))
const Configurations = lazy(() => import('./SupplierManagement/Configurations'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to={PATH_DASHBOARD} replace /> },
      { path: PATH_DASHBOARD, element: PageLazyLoad(Dashboard) },
      { path: PATH_FUNNEL_MANAGEMENT, element: PageLazyLoad(FunnelManagement) },
      { path: PATH_SUPPLIER_MANAGEMENT, element: PageLazyLoad(SupplierDashboard) },
      { path: PATH_SUPPLIER_MANAGEMENT_LIST, element: PageLazyLoad(SupplierList) },
      { path: PATH_SUPPLIER_MANAGEMENT_REVIEW_APPROVALS, element: PageLazyLoad(ReviewApprovals) },
      { path: PATH_SUPPLIER_MANAGEMENT_CONFIGURATIONS, element: PageLazyLoad(Configurations) },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes
