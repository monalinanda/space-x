import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAddress } from "../../actions";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../Pagination";

class SpaceXPayloads extends Component {
  state = {
    data: [],
    displayData: [],
  };

  componentDidMount() {
    this.props.fetchAddress();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && this.props.spacexAddress !== nextProps.spacexAddress)
      this.setState(
        {
          data: nextProps.spacexAddress,
        },
        () => {
          this.setViewableData(1);
        }
      );
  }
  setViewableData = (pageNum) => {
    this.setState({
      displayData: this.paginate(this.state.data, 10, pageNum),
    });
  };

  paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  handlePageChange = (page) => {
    this.setViewableData(page);
  };

  render() {
    const { displayData } = this.state;
    return (
      <div>
        {displayData.length ? (
          <div>
            <div style={{ height: "calc(100vh - 120px)", overflow: "hidden" }}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Payload-id</th>
                    <th>Manufacturer</th>
                    <th>Orbit</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td>{item.payload_id}</td>
                        <td>{item.manufacturer}</td>
                        <td>{item.orbit}</td>
                        <td>{item.orbit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Pagination
                pageCount={Math.ceil(this.props.spacexAddress.length / 10)}
                change={this.handlePageChange}
              />
            </div>
          </div>
        ) : (
          <Spinner animation="border" className="loader" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { spacexAddress: state.spacexAddress };
};
export default connect(mapStateToProps, { fetchAddress })(SpaceXPayloads);
