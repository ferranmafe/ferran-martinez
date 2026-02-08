import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

type Props = {
  children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <Header/>
        <div className='flex justify-center'>
        <div className='w-screen max-w-[1352px]'>
          {children}
        </div>
        </div>
      <Footer />
    </>
  )
}