import React from "react";
import CruisersProfiles from "../../components/js/CruisersProfiles";
import Banner from "../../components/js/Banner"

function DarkSide() {
  return (
    <>
    <Banner type = 'dark'/>

    <div className="CroisiereLove">
      <CruisersProfiles version="Galactic Empire" />
    </div>
    </>
  );
}

export default DarkSide;
