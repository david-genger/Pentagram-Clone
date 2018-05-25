import App from './App'
import Header from './Header'

export default ({ children }) => (
  <App>
    <Header />
    <main style={{background: "lightblue"}} >
    {children}
    </main>
  </App>
)