import React, { Component } from 'react';
import './App.css';

import { Button, Card, CardContent, Typography } from '@mui/material';

import GetQuotes from './components/GetQuotes';

class App extends Component {
  state = {
    quote: '',
    author: '',
  };

  componentDidMount = () => {
    this.getQuotes();
  };

  getQuotes = () => {
    GetQuotes().then((data) => {
      this.setState({
        quote: data.content,
        author: data.author,
      });
      console.log('data:', data);
    });
  };

  handleClick = () => {
    this.getQuotes();
  };

  render() {
    return (
      <div className="app">
        <Typography variant="h2" color="#fff">
          Random Quote App
        </Typography>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" paragraph={true}>
              {this.state.quote}
            </Typography>
            <Typography className="margin-top" color="textSecondary">
              {this.state.author}
            </Typography>
            <hr />
            <Button
              className="margin-top"
              color="primary"
              variant="outlined"
              onClick={() => this.handleClick()}
            >
              Click for Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
