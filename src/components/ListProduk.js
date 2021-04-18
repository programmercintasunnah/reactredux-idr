import React, { Component } from "react";
import { connect } from "react-redux";
import { ambilData, pilihProduk } from "../action";

export class ListProduk extends Component {
  componentDidMount() {
    this.props.ambilData();
  }
  renderList() {
    return this.props.listProduk.map((produk) => {
      return (
        <div key={produk.id}>
          <p
            onClick={() => {
              this.props.pilihProduk(produk);
            }}
          >
            {produk.namaproduk}
          </p>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const stateToProps = (state) => {
  return { listProduk: state.listProduk };
};
export default connect(stateToProps, { ambilData, pilihProduk })(ListProduk);
