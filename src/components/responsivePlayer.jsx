import React from "react";
import { Button } from "reactstrap";
import "../styles/responsivePlayer.css";

function ResponsivePlayer() {
  return (
    <div className="mainDiv">
      <video autoPlay loop muted>
        <source src="./videos/cotton-candy.mp4" type="video/mp4" />
      </video>
      <div className="mainText">
        <h1>Nostalji Şekerleme</h1>
        <p>Organizasyonunuzu tatlandırmak için hizmetinizdeyiz..</p>
        <Button color="dark" href="/about">
          Daha Fazla Bilgi
        </Button>
        <Button color="info" className="ml-2">
          Bize Ulaşın
        </Button>
      </div>
    </div>
  );
}

export default ResponsivePlayer;
