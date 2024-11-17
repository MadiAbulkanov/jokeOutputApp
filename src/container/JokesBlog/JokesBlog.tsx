import Button from '../../UI/Button/Button';
import DisplayingValues from '../../components/DisplayingValues/DisplayingValues';
import './JokesBlog.css';
import { Component } from 'react';

const URL = "https://api.chucknorris.io/jokes/random";

class JokesBlog extends Component {
  state = {
    value: [],
    loading: false,
  }

  gettingItem = async () => {
    this.setState({ loading: true });
    const promises = [];

    for (let i = 0; i < 5; i++) {
      promises.push(fetch(URL));
    }

    const response = await Promise.all(promises);
    const posts = await Promise.all(response.map((respons) => respons.json()));
    const postValue = posts.map((post) => post.value);

    this.setState({ value: postValue, loading: false });
  }

  render() {

    return (
      <div className='container'>
        <Button onClick={this.gettingItem}>Joke output</Button>
        <div className='wraper'>
          {this.state.loading
            ? <h2>Loading.....</h2>
            : this.state.value.map((value, index) => (
              <DisplayingValues key={index} value={value} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default JokesBlog;