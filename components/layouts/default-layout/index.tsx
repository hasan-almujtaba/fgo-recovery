import { Header } from 'components/header'
import { Layout } from 'types'

export const DefaultLayout = ({ children }: Layout) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
