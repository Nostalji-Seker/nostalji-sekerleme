import React from "react";
import { Card, Container } from "react-bootstrap";
import "../styles/about.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <Container fluid="lg" className="about py-1">
      <Card border="white" className="d-flex text-center">
        <Card.Body>
          <Card.Header as="h2" className="mb-1 border-0 bg-white ">
            Hikayemiz
          </Card.Header>
          <Card.Text className="text-justify border-0">
            2000'li yıllarından başında "Krokan Helva" üretmeye başlayarak
            girdiğimiz sektörde ürün yelpazemize "Osmanlı Macununu" katarak
            Bursa ili çevresinde gerçekleşen Ertuğrul Gazi'yi Anma ve Söğüt
            Şenlikleri ve "İznik Panayırı" başta olmak üzere birçok etkinlikte
            yer aldık.
            <br />
            <br />
            2005 yılı itibari ile klasik Pamuk Şeker anlayışını yıkarak kendi
            ürettiğimiz makineler ile "Pamuk Şeker" satışına başladık. Evlilik
            ve sünnet düğünlerinde misafirlerine ürünlerimizi ikram etmek
            isteyen müşterilerimiz bizlere ulaşmaya başladı. Müşteri memnuniyeti
            artınca kendimizi geliştirmeye yönelik Ar-ge çalışmaları yürüttük ve
            kadromuza "Patlamış Mısır", "Salep", "Elma Şekeri" kattık. Artık
            Bursa çapında düzenlenen birçok festivalde görev almaya başladık.
            <br />
            <br />
            2010 yılında Osmanlı Mutfağının şifalı içeceklerinden "Osmanlı
            Şerbetini" orijinal tarifiyle ürettik ve yazın sıcağında
            müşterilerimizin ferahlamasına vesile olduk. Nostalji Şekerleme
            olarak amacımız insanlara sağlıklı, olabildiğince doğal ve kaliteli
            yeni ürünler sunabilmek ve organizasyonlara tat katmaktır.
            <br />
            <br />
            Sizi Nostalji Şekerleme deneyimini bizzat yaşamaya davet ediyoruz.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="./images/seker.webp"
          className="my-3 d-block mx-auto"
        />
      </Card>
    </Container>
  );
}

export default About;
