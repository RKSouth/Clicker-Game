import './App.css';
import Nav from "./components/nav"
import ClickItem from './components/clickitem';

function App() {
  return (
    <div>
      <Nav />
      
      <ClickItem />
    </div>
    
  );
}


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
   
    );
  }

 }


export default App;
