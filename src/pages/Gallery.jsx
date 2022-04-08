import React from "react";
import "../styles/galery.css";
import { useHistory } from "react-router-dom";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'


import productData from "../productsInfo.json";

function Gallery({ setSelectedProduct }) {
  const history = useHistory();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 425px)' })


  const handleProduct = (id) => {
    console.log(id);
    setSelectedProduct(id);
    // href="/galerySlider"
    history.replace("/galerySlider");
  };

  return (
    <div className="photos__container">
      <Container fluid className="product__item">
        <h4 style={{textAlign:"center"}} >Hangi Ürünümüzü Incelemek Istersiniz?</h4>
        <Row>
          {productData.slice(0, -1).map((product, i) => {
            return (
              <Col xs={12} lg={6} xl={4} className="p-2">
                <Card
                  className={isSmallScreen? "mx-auto my-4" : "mx-auto"  } 
                  style={{ height: isSmallScreen? "40px" : "400px", maxWidth: "500px" }}
                >
                    <Button
                    onClick={() => handleProduct(product.id)}
                    variant="primary"
                    style={{ height: "40px" }}
                  >
                    {product.name}
                  </Button>
                { (!isSmallScreen && <Card.Img
                    variant="top"
                    src={product.imgUrl}
                    style={{ height: "90%" }}
                  />)}

                 
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
