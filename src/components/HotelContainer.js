import "./HotelContainer.css";

const HotelContainer = ({ hotelId, hotelName, hotelPrice }) => {
  return (
    <div className="rectangle-parent13">
      <img className="frame-child28" alt="" src={hotelId} />
      <div className="hotel-snow-bird">{hotelName}</div>
      <div className="see-details4">{`see details >>`}</div>
      <b className="b5">{hotelPrice}</b>
      <div className="manali-himanchal-pradesh2">Manali, Himanchal Pradesh</div>
    </div>
  );
};

export default HotelContainer;
