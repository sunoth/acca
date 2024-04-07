import './App.css';
import ACCAEligibility from './components/ACCAEligibility';
import BecomeACCAin18Months from './components/BecomeACCAin18Months';
import Header from './components/Header';
import KickOffACCAPrep from './components/KickOffACCAPrep';
import PlacementAssistance from './components/PlacementAssistance';
import WhatWillYouLearnInACCA from './components/WhatWillYouLearnInACCA';

import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <Header />
      <BecomeACCAin18Months />
      <WhyChooseUs />
      <ACCAEligibility />
      <WhatWillYouLearnInACCA />
      <PlacementAssistance />
      <KickOffACCAPrep />
    </div>
  );
}




export default App;
