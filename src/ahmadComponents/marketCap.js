import React from "react";
import axios from "axios";
import { Badge, Button } from "react-bootstrap";
import CoinsTable from "./coinsTable";
import RecommendationForm from "./recommendationForm";
import GetRecommendation from "./getRecommendation";
import Search from "./search";
import UsersRecommendation from "./usersRecommendation";
import './main.css';

class MarketCap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketCapData: [],
      top20Coins: [],
      recommendation: {},
      show: false,
      searchedCoin: {},
      tableFlag: true,
      showForm: false,
      usersRecommendation: [],
    };
  }
  componentDidMount = () => {
    const market_url = "https://funter.herokuapp.com/cryptoMarketCap";
    const coins_url = "https://funter.herokuapp.com/cryptoCoins";

    axios
      .get(market_url)
      .then((result) => {
        this.setState({
          marketCapData: result.data,
        });
        console.log(this.state.marketCapData);
      })
      .catch((err) => console.log("error"));
    axios
      .get(coins_url)
      .then((result) => {
        this.setState({
          top20Coins: result.data,
        });
      })
      .catch((err) => console.log("error"));
  };

  getRecommendation(event) {
    event.preventDefault();
    const coin = event.target.floatingInput.value;
    console.log("1", coin);

    console.log(this.state.recommendation);
    const url = `https://funter.herokuapp.com/cryptoRecommendation/${coin}`;
    axios
      .get(url)
      .then((result) => {
        console.log(this.state.recommendation);
        this.setState({
          recommendation: result.data,
        });
        console.log(this.state.recommendation);
      })
      .catch((err) => console.log("error" + err));
  }

  search = (event) => {
    event.preventDefault();
    const symbol = event.target.symbol.value;
    const url = `https://funter.herokuapp.com/cryptoSearch?symbol=${symbol}`;
    axios
      .get(url)
      .then((result) => {
        this.setState({
          searchedCoin: result.data.data,
          tableFlag: false,
        });
      })
      .catch((err) => console.log("error"));
  };
  addRecommendation = (event) => {
    event.preventDefault();
    const obj = {
      name: event.target.name.value,
      coin: event.target.coin.value,
      description: event.target.description.value,
    };
    axios
      .post(`https://funter.herokuapp.com/addRecommendation`, obj)
      .then((result) =>{
        this.setState({
          usersRecommendation: result.data,
        });
      console.log(this.state.usersRecommendation);
    })

      .catch((err) => console.log("error"));
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleFormShow = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <>
      <center>
      <div id='marketInfo'>
        <h3>
          Market cap in usd:{" "}
          <Badge bg="secondary">
            {this.state.marketCapData.market_cap_usd}$
          </Badge>
        </h3>
        <h3>
          {" "}
          Bitcoin dominance:{" "}
          <Badge bg="secondary">
            {this.state.marketCapData.bitcoin_dominance_percentage}%
          </Badge>
        </h3>
        <h3>
          {" "}
          cryptos:{" "}
          <Badge bg="secondary">
            {this.state.marketCapData.cryptocurrencies_number} coin
          </Badge>
        </h3>
        </div>
        </center>
        <Search search={this.search} />
        <GetRecommendation
          getRecommendation={this.getRecommendation.bind(this)}
          recommendation={this.state.recommendation}
          show={this.state.show}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
        />
        <h2 id='h2'>Top 20 Coins By Market Cap 📈</h2>
        <CoinsTable
          top20Coins={this.state.top20Coins}
          searchedCoin={this.state.searchedCoin}
          tableFlag={this.state.tableFlag}
        />
        <Button id='recommendation' onClick={this.handleFormShow}>Write your recommendation</Button>
        {this.state.showForm ? (
          <RecommendationForm addRecommendation={this.addRecommendation} />
        ) : null}
        <UsersRecommendation
          usersRecommendation={this.state.usersRecommendation}
        />
      </>
    );
  }
}

export default MarketCap;
