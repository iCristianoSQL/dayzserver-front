import { ToastAlert } from "./components/ToastAlert"
import { GlobalStyle } from "./styles/global"
import NavigationRoutes from "./routes"


function App() {
  return (
    <>
      <NavigationRoutes />
      <GlobalStyle/>
      <ToastAlert/>
    </>
  )
}

export default App
