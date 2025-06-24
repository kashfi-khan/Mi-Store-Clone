import "./App.css";
import PreNavbar from "./Component/preNavbar";
import Navbar from "./Component/navbar";
import Slider from "./Component/Slider";
import { Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import Offers from "./Component/offers";
import Heading from "./Component/heading";
import StarProduct from "./Component/starProducts";
import HotAccessoriesMenu from "./Component/hotAccessoriesMenu";
import HotAccessories from "./Component/hotAccessories";
import ProductReviews from "./Component/productReviews";
import Videos from "./Component/videos";
import Banner from "./Component/banner";
import Footer from "./Component/footer";

function app() {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifeStyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />

      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner}  />

      <Footer footer={data.footer} />



    </>
  );
}

export default app;
