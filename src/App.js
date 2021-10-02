import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';
import PostDetails from './Components/PostDetail/PostDetails';

function App() {
  const activeStyle={
    fontWeight: "bold",
    color: "red"
  }
  return (
    <div className="App">
      <Router>
      
        <NavLink to='/home' activeStyle={activeStyle}>Home</NavLink>
        <NavLink to='/friends' activeStyle={activeStyle}>Friends</NavLink>
        <NavLink exact to='/about' activeStyle={activeStyle}>About US</NavLink>

        <NavLink exact to='/about/culture' activeStyle={activeStyle}>Culture</NavLink>
        <Switch>

        <Route exact path='/'>
            <Home/>
          </Route>



          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/posts'>
            <Home/>
          </Route>

          <Route path='/friends'>
            <Friends/>
          </Route>

          <Route exact path='/about'>
            <About/>
          </Route>

          <Route exact path='/about/culture'>
            <Culture/>
          </Route>



          <Route path='/friend/:friendId'>
            <FriendDetail/>
          </Route>
          <Route path='/post/:postId'>
            <PostDetails/>
          </Route>


          <Route path='*'>
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
