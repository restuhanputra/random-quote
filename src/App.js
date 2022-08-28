import React, { Component } from 'react';
import './App.css';

import { Button, Card, CardContent, Typography } from '@mui/material';

import GetQuotes from './components/GetQuotes';

class App extends Component {
  state = {
    quote: '',
    author: '',
  };

  componentDidMount() {
    GetQuotes().then((data) => {
      // JSON.stringify() - convert an object to json
      // JSON.parse() - convert json to an object
      // console.log(data);
      // console.log(JSON.parse(data)); // kaerna mengunakan axios jadi sudah di responsenya json

      this.setState({
        quote: data.content,
        author: data.author,
      });
    });
  }

  handleClick = () => {
    GetQuotes().then((data) => {
      // JSON.stringify() - convert an object to json
      // JSON.parse() - convert json to an object
      // console.log(data);
      // console.log(JSON.parse(data)); // kaerna mengunakan axios jadi sudah di responsenya json

      this.setState({
        quote: data.content,
        author: data.author,
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Typography variant="h2" color="#fff">
          Random Quote App
        </Typography>
        <Card className="card">
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
        </Card>
      </div>
    );
  }
}

export default App;
