import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
