import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BasicCal from './BasicCal.js'
import SimpleForm from './SimpleForm'
import NavSimple from './NavSimple';
import EventView from './EventView'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <div>
        <Router>
            <NavSimple/>
            <br></br>

            <Route path="/calendar" component={BasicCal}></Route>

            <Route path="/create" component={SimpleForm}></Route>

            <Route path="/event/:id" component={EventView}></Route>
        </Router>
      </div>
    </Container>

  )
}

export default App;
