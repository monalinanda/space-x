import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSpacex } from "../../actions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class SpaceXHistory extends Component {
  state = {
    data: [],
    filter: "",
  };
  componentDidMount() {
    this.props.fetchSpacex();
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  rendrList() {
    const { filter } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = this.props.spacex.filter((item) => {
      return Object.keys(item).some((key) =>
        item.title.toLowerCase().includes(lowercasedFilter)
      );
    });
    return filteredData.map((item) => {
      return (
        <Card className="card-deck" key={item.id} bg="light">
          <Card.Body className="card-body">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.details}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.event_date_utc}</ListGroupItem>
            <ListGroupItem>{item.event_date_unix}</ListGroupItem>
            <ListGroupItem>{item.flight_number}</ListGroupItem>
          </ListGroup>
          <Card.Body className="card-footer">
            <Card.Link href={item.links.article}>Article</Card.Link>
            <Card.Link href={item.links.wikipedia}>About</Card.Link>
          </Card.Body>
        </Card>
      );
    });
  }
  render() {
    console.log(this.props.spacex);
    return (
      <div className="card-container">
        <div className="search-container">
          <input
            value={this.state.filter}
            onChange={this.handleChange}
            placeholder="search...."
            className="search-input"
          />
        </div>
        <div className="card-wrapper">{this.rendrList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { spacex: Object.values(state.spacex) };
};
export default connect(mapStateToProps, { fetchSpacex })(SpaceXHistory);
