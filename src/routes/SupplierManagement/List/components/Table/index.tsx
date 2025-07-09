import { Space, Table as AntTable, type TableProps, Typography } from 'antd'

const { Text } = Typography

interface IData {
  abbreviation: string
  address: string
  avatar: string
  contact: string
  id: string
  name: string
  nickName: string
  status: string
}

const DATA: IData[] = [
  {
    abbreviation: 'STRM',
    address: 'Jakarta, Indonesia',
    avatar: 'https://place-hold.it/100',
    contact: 'Albert Einstein',
    id: '61000012',
    name: 'PT Setroom Indonesia',
    nickName: 'Setroom',
    status: 'Active'
  },
  {
    abbreviation: 'SKSK',
    address: 'Bandung, Indonesia',
    avatar: 'https://place-hold.it/100',
    contact: 'James Lee',
    id: '41000013',
    name: 'PT Suka Suka',
    nickName: 'Sukasuka',
    status: 'In Progress'
  },
  {
    abbreviation: 'SKSK',
    address: 'Denpasar, Indonesia',
    avatar: 'https://place-hold.it/100',
    contact: 'James Lee',
    id: '41000013',
    name: 'PT Angin Ribut',
    nickName: 'Angin',
    status: 'Blocked'
  },
]

const columns: TableProps<IData>['columns'] = [
  {
    title: '#',
    render: (_, __, index) => index + 1,
  },
  {
    title: 'Name',
    dataIndex: 'id',
    render: (_, record) => {
      return (
        <Space align="center">
          <div style={{ textAlign: 'center' }}>
            <div>
              <img height={16} src={record.avatar} />
            </div>
            <div>{record.abbreviation}</div>
          </div>
          <div>
            <div>{record.name}</div>
            <Space>
              <Text style={{ color: "#1677ff" }} underline>{record.id}</Text>
              <span>[{record.nickName}]</span>
            </Space>
          </div>
        </Space>
      )
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
]

const Table = () => {
  return (
    <AntTable<IData> columns={columns} dataSource={DATA} />
  )
}

export default Table
