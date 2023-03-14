import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// views
import {Onboarding} from "./views/onBoarding/Onboarding";
import {SuccessfulRegistration} from "./views/onBoarding/SuccessfulRegistration";
import {GamePrep} from "./views/Game/GamePrep";
import {ContactPage} from "./views/contact/ContactPage";
import {Profile} from "./views/profile/Profile";
import {EndGame} from "./views/Game/EndGame";
import {History} from "./views/History/History";
import {Game} from "./views/Game/Game";

// hooks
import {usePoints} from "./business-logic/Game/points";
import {useGameInfo} from "./business-logic/Game/GameSettings";

export function App() {
  const getInfo = useGameInfo();
  const points = usePoints();

  return (
    <BrowserRouter>
      <Routes>
        {/* onboarding */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/successful" element={<SuccessfulRegistration />} />
        {/* game prep */}
        <Route path="/prep" element={<GamePrep />} />
        {/* side menu routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        {/* in game route */}
        <Route path="/game" element={<Game points={points} getInfo={getInfo} />} />
        <Route path="/end" element={<EndGame points={points} getInfo={getInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}
