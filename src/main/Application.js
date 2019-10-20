import React from 'react';

import './Application.css';

import { fetchArticle } from './web/article/ArticleService';
import Article from './components/article/Article';

class Application extends React.Component {
  state = {
    data: {},
    isLoading: true
  };

  componentDidMount() {
    fetchArticle("https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8")
    .then(data => this.setState({ data, isLoading: false }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          ARTICLE
        </header>
        <main className="App-body">
          {!this.state.isLoading && <Article article={this.state.data} />}
        </main>
      </div>
    );
  }
}

export default Application;
