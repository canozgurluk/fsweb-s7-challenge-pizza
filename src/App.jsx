
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Header from './components/Header'
import OrderForm from './components/OrderForm'

function App(){
 return(
  <Switch>
    <Route exact path="/">
    <Header/>
    <OrderForm/>  
    </Route >
    <Route exact path="/order-pizza">
    
    </Route>
    <Route exact path="/success">
            
    </Route>
  </Switch>
 )
 
}

export default App
