import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <h1>RegisterLayout</h1>
      {children}
    </div>
  )
}
