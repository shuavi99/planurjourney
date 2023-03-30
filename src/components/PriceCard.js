import HotelContainer from "./HotelContainer";
import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div className="per-night-parent">
      <div className="per-night2">/ per night</div>
      <HotelContainer
        hotelId="/rectangle-627@2x.png"
        hotelName="The Royal Regency"
        hotelPrice="₹1180"
      />
      <img className="vector-icon29" alt="" src="/vector24.svg" />
      <img className="vector-icon30" alt="" src="/vector25.svg" />
      <img className="vector-icon31" alt="" src="/vector26.svg" />
      <img className="vector-icon32" alt="" src="/vector27.svg" />
    </div>
  );
};

export default PriceCard;
