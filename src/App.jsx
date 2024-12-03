import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/Store'

function App() {


  return (
    <>
    <Provider store={appStore}>
    <Header/>
    <Outlet></Outlet>
    </Provider>
      
    </>
  )
}

export default App
