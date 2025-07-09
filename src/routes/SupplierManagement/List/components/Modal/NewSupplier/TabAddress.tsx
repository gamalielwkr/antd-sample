import { Radio, Table, type TableProps } from 'antd'

interface IData {
  address: string
  main: boolean
  name: string
}

const DATA: IData[] = [
  {
    address: 'Fatmawati Raya St, 123',
    main: true,
    name: 'Head Office',
  },
  {
    address: 'Ciawi, 99',
    main: false,
    name: 'Branch Office',
  },
]

const columns: TableProps<IData>['columns'] = [
  {
    title: '#',
    render: (_, __, index) => index + 1,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Main',
    dataIndex: 'main',
    render: (value) => <Radio defaultChecked={value} />,
  },
]

const TabAddress = () => {
  return (
    <Table<IData> columns={columns} dataSource={DATA} scroll={{ x: 'max-content' }} />
  )
}

export default TabAddress
