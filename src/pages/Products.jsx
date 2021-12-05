import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import "../styles/products.css";
import productData from "../productsInfo.json";

function Products() {
  return (
    <div id="products">
      <Row className="my-3 d-flex text-center">
        <Col lg={12}>
          <Card border="white">
            <Card.Body>
              <Card.Header as="h2" className="bg-white border-0 ">
                Ürünlerimiz
              </Card.Header>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Container fluid>
        {productData.map((product, key) => {
          return (
            <Row className="m-md-2 mb-md-4 my-lg-5 justify-content-center">
              <Col xs={12} md={6} lg={6} className="">
                <Row className="m-auto h-100 w-100 ">
                  <Card border="light" bg="light">
                    <Col
                      md={12}
                      lg={12}
                      xl={9}
                      style={{ margin: "auto" }}
                    >
                      <Card.Body
                        className="d-flex flex-column justify-content-center text-center text-md-left"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <Card.Title className="productTitle">
                          <h4>{product.name}</h4>
                        </Card.Title>
                        <Card.Text className="productDescribe">
                          {product.text}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Card>
                </Row>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Row className="m-auto h-100 w-100">
                  <Card style={{ height: "100%", width: "100%" }}>
                    <Card.Img
                      src={product.imgUrl}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Card>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default Products;
