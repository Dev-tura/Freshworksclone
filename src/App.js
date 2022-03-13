import React from "react";
import Body2 from "./Components/BODY2/BODY2";
import Header from "./Components/Header/Header";
import Herobody from "./Components/Herobody/Herobody";
import BODY2 from "./Components/BODY2/BODY2";
import Body3 from "./Components/Body3/Body3";
import Logopart from "./Components/Logopart/Logopart"
import Slides from "./Components/Slides/Slides";
import Waaterstons from "./Components/Waaterstons/Waaterstons";
import Fourcards from "./Components/Fourcards/Fourcards";


function App () {
  return (
    <div>
      < Header />
      < Herobody />
      <BODY2 />
      <Body3 />
     <Logopart />
     {/* <Waaterstons /> */}
     <Slides />
     <Fourcards />
    </div>
  )
}


export default App