import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/*<Header /> */}
      <main className="grow">
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  )
}

export default MainLayout