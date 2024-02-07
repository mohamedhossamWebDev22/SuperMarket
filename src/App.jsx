import "./style.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Carousel, Card } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

import CardD from "./components/CardD";
import Product from "./components/product";
import NavBar from "./components/navBar";
import Footr from "./components/footer"

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";

function App() {
  return (
    <>
      <NavBar/>

      <div className="container mt-5 pt-5">
        <p id="0" className="text-center mb-1">
          The Best
          <a className="text-shadow text-decoration-none text-danger fs-1 fw-bold">
            {" "}
            Super Market{" "}
          </a>{" "}
          ever.
        </p>

        <Carousel className="text-shadow shadow rounded-1 m-3">
          <Carousel.Item>
            <img
              className="w-100 h-5 rounded-2"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kEDM50bKtmVOaQFpvgY9FwHaFj%26pid%3DApi&f=1&ipt=ddaa5494e100d80ed22404396a6852bcbce77f5294f2c0a51ade3002b75827ac&ipo=images"
            />
            <Carousel.Caption>
              <h3>Fresh vegetables</h3>
              <p>
                Indulge in the freshness of nature with our selection of
                premium, hand-picked vegetables. From farm to table, savor the
                crispness and flavor of our freshly harvested produce.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-5 rounded-2"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kfstspeyz4RkvTsDttwgVAHaE7%26pid%3DApi&f=1&ipt=3d47b6a4d55d32aad6cb02d19021bee0203b8d18c677f1ac8b4a5bcce12fe20f&ipo=images"
            />
            <Carousel.Caption>
              <h3>You Will Find It</h3>
              <p>
                Discover the solution you've been seeking! Whatever he's
                searching for, our comprehensive selection ensures he'll find
                exactly what he needs, right here.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 h-5 rounded-2"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9NrTn9OlVZRpLwINxPpFEgHaEK%26pid%3DApi&f=1&ipt=1e30d4640a1e32297e08a52e6cb5312089b30618d8db2699a830d9e7a0b62d88&ipo=images"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Unlock unbeatable savings today! Enjoy exclusive discounts on a
                wide range of products, making your shopping experience even
                more rewarding.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="text-center w-100">
          <a className="text-center mx-5 text-dark" href="#1">
            <i className="bi bi-arrow-down fs-1"></i>
          </a>
        </div>

        <hr className="my-2" />

        <div id="1" className="features text-center my-4 py-4">
          <h1 className="fs-2 mt-5">
            Our{" "}
            <a className="bg-success p-1 text-decoration-none text-light">
              Features
            </a>
          </h1>
          <div className="row mt-1 p-5">
            <div className="col-6 col-sm-3">
              <CardD
                img={img1}
                title="Fastest Delivery"
                txt="speed delivery always on time!"
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img={img3}
                title="Best Prices"
                txt="get the best deals in town!"
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img={img2}
                title="Good Quality"
                txt="Experience unparalleled quality."
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img={img4}
                title="Near From You"
                txt="discover our services just around the corner!"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center my-4 py-4" id="2">
          <h1 className="fs-2 mt-5">
            See Our{" "}
            <a className="bg-success p-1 text-decoration-none text-light">
              Products
            </a>
          </h1>

          <div className="row mt-1 p-2">
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WPL87E8AkRTq9W-EHCn8JAHaHa%26pid%3DApi&f=1&ipt=88c8b89301312bb2f22fe5dd9c5117fc789526feb66b7f5b5940c853c8f4d6b6&ipo=images"
                title="Cow Beef 1KG"
                txt="300"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.U9g-r3TwUatgGpU4jADM5AHaHa%26pid%3DApi&f=1&ipt=798bf7de2c5ddd6b23dc4879307bf5f90924b2b23e8c30e1e5d93283118dedcf&ipo=images"
                title="Sheep Meat 1KG"
                txt="180"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.99wvZLqdlgK8fX9wPkANdgAAAA%26pid%3DApi&f=1&ipt=22609a927112ace681b83942c64ea99beb8ea674eda0d2e4eefeb257e840f356&ipo=images"
                title="Fish"
                txt="100"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OBmf_nW3xWcxFKTeLX66aAHaHT%26pid%3DApi&f=1&ipt=3393bfcde8ee5a19d3f97dc3b6e6f821a8bc598b4a5fb0215e692ac1880b1fff&ipo=images"
                title="Apple 1KG"
                txt="60"
              />
            </div>
          </div>
          <div className="row mb-1 p-2">
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y3s3p2sMLP4ZVffgtaRYvwHaHa%26pid%3DApi&f=1&ipt=67b7e2c1f664ea37c95ee30058a9fc4595ce1a014dcd586bb3216baf77f91a59&ipo=images"
                title="Banana 1KG"
                txt="20"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jltuFngRsBzn-FC_lV_31gHaGS%26pid%3DApi&f=1&ipt=97d2cea11042805d103c1bb5669a5cea64760284e3a4a010d475deb3ac1b3b19&ipo=images"
                title="Orange 1KG"
                txt="60"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iGokQrJhotEC2EYs8eVv5gHaHY%26pid%3DApi&f=1&ipt=760bbc0797368bb367a37afc90689aa453c2f0cfa1d39f40f54cbae63b7c6a51&ipo=images"
                title="Onion 1KG"
                txt="80"
              />
            </div>
            <div className="col-6 col-sm-3">
              <Product
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.puBXd3sDln2WLvetnjvxUgHaHa%26pid%3DApi&f=1&ipt=21e4399ed521faee9d330e2e05453bdc9e0b7368c4652832615fe47c8bed0848&ipo=images"
                title="Salt"
                txt="5"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center my-4 py-4" id="3">
          <h1 className="fs-2 mt-5">
            <a className="bg-success p-1 text-decoration-none text-light">
              Categories
            </a>
          </h1>
          <div className="row mt-1 p-2">
            <div className="col-6 col-sm-3">
              <CardD
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.j-F8QAtHYvv3QUCZ5oRGzAHaGn%26pid%3DApi&f=1&ipt=afa62592ff10218c0f6ebc77d7f24ff67370ccfcdca2fc19e4f6c74be067da47&ipo=images"
                title="Games"
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LkVy-5t-E1hZG4apFRK33QHaHa%26pid%3DApi&f=1&ipt=0b692609b178ea7ecc9c6a14f67b5ff4061552dc65150cd821792bafdf7aaf66&ipo=images"
                title="Vegatables"
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LiYTJAVrXkT-m41dYyNmWQHaHP%26pid%3DApi&f=1&ipt=e8b167a77be471505918f9e03a02446733e9322bfa7b3d1673a7fcbaba4336c3&ipo=images"
                title="Fruits"
              />
            </div>
            <div className="col-6 col-sm-3">
              <CardD
                img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3D2FiAZmxEpPTZS2pZrDXwHaHZ%26pid%3DApi&f=1&ipt=00a32e5f4b8f7e2a62345fc4c24b79a3296239c927f67de10946e171901c7815&ipo=images"
                title="Toys"
              />
            </div>
          </div>
        </div>
      </div>

      <Footr/>
    </>
  );
}

export default App;
