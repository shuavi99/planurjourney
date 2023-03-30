import { useMemo } from "react";
import "./PriceContainer.css";

const PriceContainer = ({ dimensionText, dimensionText2, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-group" style={frameDivStyle}>
      <div className="rectangle-parent10">
        <img className="frame-child25" alt="" src={dimensionText} />
        <div className="hrtc">HRTC</div>
        <div className="to-1020">20:00 to 10:20</div>
        <div className="see-details1">{`see details >>`}</div>
        <div className="div2">₹1580</div>
        <div className="himsuta-ac-seater">
          (Himsuta AC Seater Volvo/Scania 2+2)
        </div>
        <div className="manali-himanchal-pradesh">
          Manali, Himanchal Pradesh
        </div>
      </div>
      <img className="vector-icon13" alt="" src={dimensionText2} />
    </div>
  );
};

export default PriceContainer;
