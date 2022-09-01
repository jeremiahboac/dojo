import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/dojo">
              <Home />
            </Route>
            <Route path="/dojo/create">
              <Create />
            </Route>
            <Route path="/dojo/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
