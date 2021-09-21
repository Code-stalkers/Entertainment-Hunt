import React from "react";
import { Table } from "react-bootstrap";
class CoinsTable extends React.Component {
  render() {
    return (
      <>
        <Table responsive id='table'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tableFlag ? (
              this.props.top20Coins.map((item) => {
                return (
                  <tr>
                    <td>{item.rank}</td>
                    <td>
                     <h5>{item.name}</h5> {item.symbol}
                    </td>
                    <td>{item.quotes.USD.price} $</td>
                    <td>{item.quotes.USD.percent_change_24h} %</td>
                    <td>{item.quotes.USD.percent_change_7d} %</td>
                    <td>{item.quotes.USD.market_cap} $</td>
                    <td>{item.quotes.USD.volume_24h} $</td>
                    <td>
                      {item.circulating_supply} {item.symbol}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>{this.props.searchedCoin[0].market_cap_rank}</td>
                <td>
                  <h5>{this.props.searchedCoin[0].name}</h5> {this.props.searchedCoin[0].symbol}
                </td>
                <td>{this.props.searchedCoin[0].price} $</td>
                <td>{this.props.searchedCoin[0].percent_change_24h} %</td>
                <td>{this.props.searchedCoin[0].percent_change_7d} %</td>
                <td>{this.props.searchedCoin[0].market_cap} $</td>
                <td>{this.props.searchedCoin[0].volume_24h} $</td>
                <td>
                  {this.props.searchedCoin[0].max_supply} {this.props.searchedCoin[0].symbol}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    );
  }
}

export default CoinsTable;
