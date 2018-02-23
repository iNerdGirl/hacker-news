import React, {Component} from 'react';
import Sitenavbar from './Components/Sitenavbar'
import Card from './Components/Card';
import './App.css'
import Footer from './Components/Footer';

class NewStories extends Component {
  constructor(props){
    super(props);
    this.state= {
      stories: []
    }
  }

  componentDidMount() {
    const topStoriesUri = "https://hacker-news.firebaseio.com/v0/newstories.json";
    const storyUriBase = "https://hacker-news.firebaseio.com/v0/item/";

    fetch(topStoriesUri)
      .then(data => data.json())
      .then(data => data.map(id => {
          const uri = `${storyUriBase}${id}.json`;
          return fetch(uri).then(d => d.json());
        }))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({ stories }));
  }
  render() {
    let views = <div>Loading...</div>;
    const { stories } = this.state;
    if (stories && stories.length > 0) {
      views = stories.map(s => {
        return (
        <Card key={s.id} stories={s}/>
      )});
    }
    return(
      <div className="App">
        <Sitenavbar />
        <h1>New Stories</h1>
        {views}
        <Footer />
      </div>
    );
  }
}

export default NewStories;