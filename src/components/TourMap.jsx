import { useRef, useEffect, useState } from "react";
import cssStyle from "../css/Tour.module.css";
export default function TourMap({ dpData }) {
  const newdpData = dpData.reduce((acc, cur) => {
    if (!acc.find((item) => item.dpLocal === cur.dpLocal)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  const mapRef = useRef(null);
  let [coord, setCoord] = useState([37.56143, 126.8309]);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(coord[0], coord[1]),
        level: 3,
      };
      // 지도 생성
      const map = new window.kakao.maps.Map(mapRef.current, options);
      // 지도 마크
      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map);

      window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        const message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        message += "경도는 " + latlng.getLng() + " 입니다";
        const resultDiv = document.getElementById("clickLatlng");
        resultDiv.innerHTML = message;
      });
    }
  }, [mapRef, coord]);

  return (
    <div className={cssStyle.TourMap}>
      <h2>Find location</h2>
      <div>
        <div ref={mapRef} className={cssStyle.map}>
          전시지도
        </div>
        <div id="clickLatlng"></div>
        <div className={cssStyle.tourBtn}>
          {newdpData.map((dpLocal) => {
            return (
              <button
                onClick={() => {
                  setCoord([`${dpLocal.dpLatitude}`, `${dpLocal.dpLongitude}`]);
                }}
                key={dpLocal._id}
              >
                {dpLocal.dpLocal}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
