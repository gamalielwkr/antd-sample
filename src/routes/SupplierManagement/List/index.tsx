import { Col, Row } from 'antd'

import Filter from './components/Filter'
import Header from './components/Header'
import Statistic from './components/Statistic'
import Table from './components/Table'

const SupplierManagementList = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Header />
      </Col>

      <Col span={24}>
        <Statistic />
      </Col>

      <Col span={24}>
        <Filter />
      </Col>

      <Col span={24}>
        <Table />
      </Col>
    </Row>
  )
}

export default SupplierManagementList
