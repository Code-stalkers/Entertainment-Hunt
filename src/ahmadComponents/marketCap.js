import React from 'react';
import axios from 'axios';
import { Badge } from 'react-bootstrap';
import CoinsTable from './coinsTable';
import RecommendationForm from './recommendationForm';
import GetRecommendation from './getRecommendation';


class MarketCap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            marketCapData: [],
            top20Coins:[]  ,
            recommendation:{} ,
            show:false    
        }
    }
    componentDidMount = () =>{
        const market_url = 'http://localhost:3001/cryptoMarketCap';
        const coins_url = 'http://localhost:3001/cryptoCoins';

        axios
        .get(market_url)
        .then(result => {
            this.setState({
                marketCapData:result.data
            })
            console.log(this.state.marketCapData);
        })
        .catch(err => console.log('error'))
        axios
        .get(coins_url)
        .then(result =>{
            this.setState({
                top20Coins:result.data
            })
            console.log(this.state.top20Coins);
        })
        .catch(err => console.log('error'))
    };

    getRecommendation(event){
        event.preventDefault();
        const coin = event.target.floatingInput.value;
        const url = `http://localhost:3001/cryptoRecommendation/${coin}`;
        axios
        .get(url)
        .then(result => {
            this.setState({
                recommendation:result.data
            })
            // console.log(this.state.recommendation.description);
        })
        .catch(err => console.log('error'))
    }

    handleClose =()=>{
        this.setState({
            show:false
        })
    };
    
    handleShow= () =>{
        this.setState({
            show:true
        })
    };
    
    render() { 
        return <>
            <h3>Market cap in usd: <Badge bg="secondary">{this.state.marketCapData.market_cap_usd}$</Badge></h3>
            <h3> Bitcoin dominance: <Badge bg="secondary">{this.state.marketCapData.bitcoin_dominance_percentage}%</Badge></h3>
            <h3> cryptos: <Badge bg="secondary">{this.state.marketCapData.cryptocurrencies_number} coin</Badge></h3>
            <GetRecommendation 
            getRecommendation={this.getRecommendation}
            recommendation = {this.state.recommendation}
            show={this.state.show}
            handleShow = {this.handleShow}
            handleClose={this.handleClose}
            />
            <CoinsTable top20Coins = {this.state.top20Coins}/>
            <RecommendationForm/>
        </>;
    }
}
 
export default MarketCap;