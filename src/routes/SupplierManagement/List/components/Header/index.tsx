import { UserAddOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'

import useModal from '@/hooks/useModal'
import ModalNewSupplier from '../Modal/NewSupplier'

const { Title } = Typography

const Header = () => {
  const modalNewSupplier = useModal()

  return (
    <>
      <Row align="middle">
        <Col flex="auto">
          <Title level={4} style={{ marginBottom: 0 }}>Supplier List</Title>
        </Col>
        <Col>
          <Button icon={<UserAddOutlined />} onClick={modalNewSupplier.open} type="primary">New Supplier</Button>
        </Col>
      </Row>

      <ModalNewSupplier {...modalNewSupplier} />
    </>
  )
}

export default Header