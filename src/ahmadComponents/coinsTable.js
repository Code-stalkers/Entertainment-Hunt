import React from "react";
import { Table } from "react-bootstrap";
class CoinsTable extends React.Component {
  render() {
    return (
      <>
        <Table responsive>
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
            {this.props.top20Coins.map(item => {
                return (<tr>
                    {console.log(item)}
                    <td>{item.rank}</td>
                    <td>{item.name} {item.symbol}</td>
                    <td>{item.quotes.USD.price} $</td>
                    <td>{item.quotes.USD.percent_change_24h} %</td>
                    <td>{item.quotes.USD.percent_change_7d} %</td>
                    <td>{item.quotes.USD.market_cap} $</td>
                    <td>{item.quotes.USD.volume_24h} $</td>
                    <td>{item.circulating_supply} {item.symbol}</td>
                </tr>
                )
            })}
          </tbody>
        </Table>
      </>
    );
  }
}

export default CoinsTable;
