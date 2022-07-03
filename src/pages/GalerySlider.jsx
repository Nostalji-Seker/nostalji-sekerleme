import productsInfo from "../productsInfo.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function GalerySlider({ selectedProduct, setSelectedProduct }) {
  const productData = [...productsInfo];
  productData.pop();

  const images = [
    {
      original: productData[selectedProduct].photos[0],
    },
    {
      original: productData[selectedProduct].photos[1],
    },
    {
      original: productData[selectedProduct].photos[2],
    },
    {
      original: productData[selectedProduct].photos[3],
    },
  ];

  //oklar ayarlanacak. arrayden mevcut ürün ve arrayin en sonundaki filtrelenecek

  return (
    <div className="galerySlider">
      <h2> {productData[selectedProduct].name} </h2>
      <div className="imgSlider">
        <Carousel autoPlay infiniteLoop>
          {images.map((value, i) => {
            return (
              <div>
                <img src={value.original} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <section className="products__arrows">
        <div
          onClick={() =>
            setSelectedProduct(
              selectedProduct === 0
                ? productData.slice(-1)[0].id
                : productData[selectedProduct - 1].id
            )
          }
        >
          <img
            src="https://icon-library.com/images/left-arrow-icon/left-arrow-icon-5.jpg"
            alt=""
          />
          <p>
            {selectedProduct === 0
              ? productData.slice(-1)[0].name
              : productData[selectedProduct - 1].name}
          </p>
        </div>

        <div
          onClick={() =>
            setSelectedProduct(
              selectedProduct === 5
                ? productData[0].id
                : productData[selectedProduct + 1].id
            )
          }
        >
          <img
            src="https://icon-library.com/images/right-arrow-icon/right-arrow-icon-2.jpg"
            alt=""
          />
          <p>
            {selectedProduct === 5
              ? productData[0].name
              : productData[selectedProduct + 1].name}
          </p>
        </div>
      </section>
    </div>
  );
}

export default GalerySlider;
