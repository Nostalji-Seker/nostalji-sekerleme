import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

import "../styles/events.css";

function Events() {
  const events = [
    {
      imgUrl:
        "https://yugesk.files.wordpress.com/2019/10/img_20191005_0419171573987058.jpg",
      name: "İznik Panayırı",
      date: "09.10.2021 - 13:00",
      place: "İznik Meydan",
    },

    {
      imgUrl:
        "https://www.kitabimukaddes.com/images/blog/1/tuyapkitapfuari2015.jpg?t=1620839118://yugesk.files.wordpress.com/2019/10/img_20191005_0419171573987058.jpg",
      name: "Kitap Fuarı",
      date: "15.04.2022 - 09:00",
      place: "Tüyap Fuar Alanı",
    },
  ];

  return (
    <Container id="events">
      <Row>
        <Col>
          <Card border="white" className="d-flex text-center">
            <Card.Body>
              <Card.Header as="h2" className="mb-2 border-0 bg-white">
                Yaklaşan Etkinlikler
              </Card.Header>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {events.map((value) => {
          return (
            <Col>
              <Card className="cardStyle my-1 mx-auto text-center">
                <Card.Img variant="top" src={value.imgUrl} height="300px" />
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Text>{value.date}</Card.Text>
                  <Card.Text>{value.place}</Card.Text>
                  <Button variant="primary">Ayrıntılı Bilgi</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Events;
