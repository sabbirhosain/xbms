import { json } from 'react-router-dom'
import { useContextProvider } from '../../ContextApi/ContextApi'
import Layout from '../../Layout/Layout'
import "./Dashboard.css"

const Dashboard = () => {
  const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContextProvider()
  return (
    <Layout title={"Dashboard"}>
      <h3>DashBoard</h3>
      <pre>
        {
          JSON.stringify(accessToken, null, 4)
        }{
          JSON.stringify(refreshToken, null, 4)
        }
      </pre>
    </Layout>
  )
}

export default Dashboard