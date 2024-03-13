
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import Success from './components/Success'

function App(){
 return(
  <Switch>  
    <Route exact path="/">
    <Home/>
    </Route >
    <Route exact path="/order-pizza">
    <Header/>
    <OrderForm/>
    </Route>
    <Route exact path="/success">
      <Success/>    
    </Route>
  </Switch>
 )
 
}

export default App
