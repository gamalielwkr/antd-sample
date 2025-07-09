import { Radio, Table, type TableProps } from 'antd'

interface IData {
  email: string
  jobPosition: string
  main: boolean
  mobile: string
  name: string
  phone: string
}

const DATA: IData[] = [
  {
    email: 'einstein@gmail.com',
    jobPosition: 'CEO',
    main: true,
    mobile: '0811234567',
    name: 'Albert',
    phone: '021.123456'
  },
  {
    email: 'newton@gmail.com',
    jobPosition: 'Mgr Proc',
    main: false,
    mobile: '0811765432',
    name: 'Isaac',
    phone: '021.654321'
  },
]

const columns: TableProps<IData>['columns'] = [
  {
    title: '#',
    render: (value, record, index) => index + 1,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Job Position',
    dataIndex: 'jobPosition',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Main',
    dataIndex: 'main',
    fixed: 'right',
    render: (value) => <Radio defaultChecked={value} />,
  },
]

const TabContacts = () => {
  return (
    <Table<IData> columns={columns} dataSource={DATA} scroll={{ x: 'max-content' }} />
  )
}

export default TabContacts
