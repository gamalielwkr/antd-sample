import { Checkbox, Table, type TableProps } from 'antd'

interface IData {
  active: boolean
  groupName: string
  value: string
}

const DATA: IData[] = [
  {
    active: true,
    groupName: 'Industry',
    value: 'Manufacture',
  },
  {
    active: true,
    groupName: 'Telkom Group',
    value: 'Non Telkom Group',
  },
]

const columns: TableProps<IData>['columns'] = [
  {
    title: '#',
    render: (_, __, index) => index + 1,
  },
  {
    title: 'Group Name',
    dataIndex: 'groupName',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Active',
    dataIndex: 'active',
    render: (value) => <Checkbox defaultChecked={value} />,
  },
]

const TabGroups = () => {
  return (
    <Table<IData> columns={columns} dataSource={DATA} scroll={{ x: 'max-content' }} />
  )
}

export default TabGroups
