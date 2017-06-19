import React from "react";
import Quotes from "./children/Quotes";
import Form from "./children/Form";
import Nav from "./children/Nav";
import Footer from "./children/Footer";
import API from "../utils/API.js";

// very basic component to get started
class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      saved: [],
      quote: []
    }
    this.setQuote = this.setQuote.bind(this);
  }


  componentDidMount() {
    API.getQuotes().then((data) => {
      this.setState({ saved: data.data });
    });
  }


  componentDidUpdate(prevProps, nextProps) {
    if (prevProps.quote != nextProps.quote) {
      API.saveQuote(this.state.quote).then((data) => {
        API.getQuotes().then((data) => {
          this.setState({ saved: data.data, quote: "" });
        });
      });
    }
  }

  // setQuote is called when Form.js is submitted by "this.props.setQuote"
  setQuote(quote) {
    this.setState({ quote: quote });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Nav />
          <Form setQuote={this.setQuote} />
          <Quotes saved={this.state.saved} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
