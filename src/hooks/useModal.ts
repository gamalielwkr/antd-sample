import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  const open = () => setIsOpen(true)

  return { close, isOpen, open }
}

export default useModal
