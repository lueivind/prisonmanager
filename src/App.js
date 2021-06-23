import './App.css';
import Prison from "./components/Prison"
import Testing from "./components/pages/Testing"
import NotFound from "./components/pages/NotFound"

// routing
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faAngleDoubleDown)

function App() {
  return (
    <Router>
      <div className="container">
        <div style={{ color: "#b0b0b0", fontSize: "0.9em", marginLeft: "0.1em" }}>version. 00-006</div>

        <Switch>
          {/* Home */}
          <Route exact path="/" component={Prison}></Route>
          {/* Testing */}
          {/* <Route exact path="/testing" component={Testing}></Route> */}
          {/* 404, Not Found */}
          <Route component={NotFound}></Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;




