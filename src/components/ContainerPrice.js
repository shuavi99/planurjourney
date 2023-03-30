import HotelContainer from "./HotelContainer";
import "./ContainerPrice.css";

const ContainerPrice = () => {
  return (
    <div className="reviews-parent">
      <div className="reviews2">2482 reviews</div>
      <div className="per-night1">/ per night</div>
      <HotelContainer
        hotelId="/rectangle-625@2x.png"
        hotelName="Hotel Snow Bird"
        hotelPrice="₹1568"
      />
      <img className="vector-icon21" alt="" src="/vector17.svg" />
      <img className="vector-icon22" alt="" src="/vector18.svg" />
      <img className="vector-icon23" alt="" src="/vector19.svg" />
      <img className="vector-icon24" alt="" src="/vector20.svg" />
    </div>
  );
};

export default ContainerPrice;
