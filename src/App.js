import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './blogDetails';
import NotFound from './NotFound';
import Firetut from './New';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/firetut'>
            <Firetut/>
          </Route>
          <Route path='/blog/:id'>
            <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div> 
    </div>
    </Router>
  );
}

export default App;
