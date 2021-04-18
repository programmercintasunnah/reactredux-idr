//action creator
export const ambilData = () => {
  const data = [
    {
      id: 1,
      namaproduk: "kipas angin",
      harga: "20000",
      stok: 40,
    },
    {
      id: 2,
      namaproduk: "meja belajar",
      harga: "300000",
      stok: 60,
    },
    {
      id: 3,
      namaproduk: "lampu tidur",
      harga: "50000",
      stok: 100,
    },
    {
      id: 4,
      namaproduk: "vas bunga",
      harga: "15000",
      stok: 1000,
    },
    {
      id: 5,
      namaproduk: "jam dinding",
      harga: "55000",
      stok: 10,
    },
  ];

  //action
  return {
    type: "AMBIL_DATA",
    data: data,
  };
};

export const pilihProduk = (produk) => {
  return { type: "PILIH_PRODUK", data: produk };
};
