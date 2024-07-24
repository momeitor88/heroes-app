import { Outlet } from "react-router-dom"
import { Layout } from "../../../layout/components/Layout"

export const Root = () => {
  return (
    <Layout>
        <Outlet />
    </Layout>
  )
}

