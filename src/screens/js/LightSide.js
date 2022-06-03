import React from "react";
import CruisersProfiles from "../../components/js/CruisersProfiles";
import Banner from "../../components/js/Banner"

function LightSide() {
  return (
    <>
    <Banner type = 'dark'/>

    <div className="CroisiereLove">
      <CruisersProfiles version="Resistance" />
    </div>
    </>
  );
}

export default LightSide;
