import React, { useEffect, useState } from "react";

const upPrice = "#00d9a1";
const downPrice = "#f3102c";

const baseStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  color: "white",
  zIndex: 2,
  display: "flex",
  background: `linear-gradient(178deg,${upPrice}, ${downPrice})`,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};
const Splash = () => {
  const [ethPrice, setEthPrice] = useState();
  const [gasPrice, setGasPrice] = useState();
  const amount = 10;
  const gTransaction = 21000;

  useEffect(() => {
    fetch("https://api.cryptonator.com/api/ticker/eth-usd")
      .then((res) => res.json())
      .then(({ ticker: { price } }) => {
        setEthPrice(price);
      });
  });
  useEffect(() => {
    fetch(` https://ethgasstation.info/
api/ethgasAPI.json?api-key=${process.env.GAS_API_KEY}`)
      .then((res) => res.json())
      .then(({ average }) => {
        const gwei = average / 10;
        setGasPrice((gwei * gTransaction * 1e-9 * ethPrice).toFixed(2));
      });
  }, [ethPrice]);

  return (
    <div
      style={{
        ...baseStyles,
      }}
    >
      <h1>
         A ${amount} transaction in ETH <br/> currently costs $ 
        {!isNaN(gasPrice) ? `${gasPrice}` : <i>gas price</i>}
      </h1>
    </div>
  );
};

export default Splash;
