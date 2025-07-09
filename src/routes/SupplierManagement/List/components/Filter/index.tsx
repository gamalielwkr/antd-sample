import { ExportOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Select } from 'antd'

const OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'In Progress', value: 'in_progress' },
  { label: 'Blocked', value: 'blocked' },
]

const Filter = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col flex="auto">
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Input placeholder="Search Customer" prefix={<SearchOutlined />} />
          </Col>
          <Col span={12}>
            <Select defaultValue={OPTIONS[0].value} options={OPTIONS} popupMatchSelectWidth={false} />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row gutter={[8, 8]}>
          <Col>
            <Button icon={<ExportOutlined />}>Export</Button>
          </Col>
          <Col>
            <Button icon={<ExportOutlined />} type="text" />
          </Col>
          <Col>
            <Button icon={<MenuOutlined />} style={{ color: "#1677ff" }} type="text" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Filter
