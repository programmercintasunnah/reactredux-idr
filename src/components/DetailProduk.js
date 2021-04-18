import React from "react";
import { connect } from "react-redux";

function DetailProduk({ produk }) {
  if (!produk) {
    return <div>Pilih Produk . . . . .</div>;
  }
  const { id, namaproduk, harga, stok } = produk;
  return (
    <div>
      <p>Nama Produk : {namaproduk}</p>
      <p>ID :{id}</p>
      <p>harga : Rp.{harga}</p>
      <p>stok : {stok}</p>
    </div>
  );
}

const stateToProps = (state) => {
  return { produk: state.pilihan };
};
export default connect(stateToProps)(DetailProduk);
