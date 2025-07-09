import { Col, Flex, Form, Input, Modal, Row, Tabs } from 'antd'

import type useModal from '@/hooks/useModal'
import TabAddress from './TabAddress'
import TabContacts from './TabContacts'
import TabGroups from './TabGroups'

const ModalNewSupplier = ({ close, isOpen }: ReturnType<typeof useModal>) => {
  return (
    <Modal
      closable
      onCancel={close}
      okText="Save"
      open={isOpen}
      title="New Supplier"
      width={640}
    >
      <Form layout="vertical">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Flex align="center" justify="center" style={{ border: "1px solid #c0c0c0", borderRadius: 8, height: '100%' }}>
                  Logo
                </Flex>
              </Col>
              <Col span={18}>
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                  <Input placeholder="Supplier Name" />
                </Form.Item>
                <Form.Item label="Nick Name" name="nick_name" rules={[{ required: true }]}>
                  <Input placeholder="Supplier Nick Name" />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Tabs>
              <Tabs.TabPane key="address" tab="Address">
                <TabAddress />
              </Tabs.TabPane>
              <Tabs.TabPane key="contacts" tab="Contacts">
                <TabContacts />
              </Tabs.TabPane>
              <Tabs.TabPane key="groups" tab="Groups">
                <TabGroups />
              </Tabs.TabPane>
              <Tabs.TabPane key="material-list" tab="Material List">
                Material List
              </Tabs.TabPane>
              <Tabs.TabPane key="others" tab="Others">
                Others
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default ModalNewSupplier