import { ClockCircleFilled, DollarOutlined, FallOutlined, RiseOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography, Flex } from 'antd'

const { Text, Title } = Typography

const Statistic = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={{ span: 6 }} sm={{ span: 12 }}  xs={{ span: 24 }}>
        <Card
          style={{ borderColor: "#c0c0c0", height: '100%' }}
          styles={{ body: {
            height: '100%',
            padding: 12
          }}}
        >
          <Flex style={{ height: '100%' }}>
            <Flex flex={1} justify="space-between" vertical>
              <Text strong style={{ color: '#555666' }}>Total Supplier</Text>
              <Title level={3} style={{ margin: 0 }}>1,869</Title>
              <Text type="success">
                <RiseOutlined /> +8% vs Last Year
              </Text>
            </Flex>
            <Flex>
              <TeamOutlined style={{ color: '#888999', fontSize: 36 }} />
            </Flex>
          </Flex>
        </Card>
      </Col>

      <Col lg={{ span: 6 }} sm={{ span: 12 }}  xs={{ span: 24 }}>
        <Card
          style={{ borderColor: "#c0c0c0", height: '100%' }}
          styles={{ body: {
            height: '100%',
            padding: 12
          }}}
        >
          <Flex style={{ height: '100%' }}>
            <Flex flex={1} justify="space-between" vertical>
              <Text strong style={{ color: '#555666' }}>New Supplier</Text>
              <Title level={3} style={{ margin: 0 }}>27</Title>
              <Text type="success">
                <RiseOutlined /> +1% vs Last Year
              </Text>
            </Flex>
            <Flex>
              <UsergroupAddOutlined style={{ color: '#888999', fontSize: 36 }} />
            </Flex>
          </Flex>
        </Card>
      </Col>

      <Col lg={{ span: 6 }} sm={{ span: 12 }}  xs={{ span: 24 }}>
        <Card
          style={{ borderColor: "#c0c0c0", height: '100%' }}
          styles={{ body: {
            height: '100%',
            padding: 12
          }}}
        >
          <Flex style={{ height: '100%' }}>
            <Flex flex={1} justify="space-between" vertical>
              <Text strong style={{ color: '#555666' }}>Avg Cost per Supplier</Text>
              <Title level={3} style={{ margin: 0 }}>Rp 320,3 Mn</Title>
              <Text type="danger">
                <FallOutlined /> -1% vs last year
              </Text>
            </Flex>
            <Flex>
              <DollarOutlined style={{ color: '#888999', fontSize: 32 }} />
            </Flex>
          </Flex>
        </Card>
      </Col>

      <Col lg={{ span: 6 }} sm={{ span: 12 }}  xs={{ span: 24 }}>
        <Card
          style={{ borderColor: "#c0c0c0", height: '100%' }}
          styles={{ body: {
            height: '100%',
            padding: 12
          }}}
        >
          <Flex style={{ height: '100%' }}>
            <Flex flex={1} justify="space-between" vertical>
              <Text strong style={{ color: '#555666' }}>Blocked Supplier</Text>
              <Title level={3} style={{ margin: 0 }}>31</Title>
              <Text type="success">
                <RiseOutlined /> +4% vs last year
              </Text>
            </Flex>
            <Flex>
              <ClockCircleFilled style={{ color: '#888999', fontSize: 32 }} />
            </Flex>
          </Flex>
        </Card>
      </Col>
    </Row>
  )
}

export default Statistic
