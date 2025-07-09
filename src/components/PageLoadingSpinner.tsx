import { Spin } from 'antd'

export default function PageLoadingSpinner() {
  return (
    <div style={{ 
      alignItems: 'center', 
      display: 'flex', 
      justifyContent: 'center', 
      minHeight: '200px' 
    }}>
      <Spin size="large" />
    </div>
  )
}
