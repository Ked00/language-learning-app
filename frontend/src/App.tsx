import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// views
import {Login} from "./views/onBoarding/Login";
import {SuccessfulRegistration} from "./views/onBoarding/SuccessfulRegistration";
import {GamePrep} from "./views/Game/GamePrep";
import {ContactUsPage} from "./views/contact/ContactUsPage";
import {Profile} from "./views/profile/Profile";
import {GameResults} from "./views/Game/GameResults";
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
        <Route path="/" element={<Login />} />
        <Route path="/successful" element={<SuccessfulRegistration />} />
        {/* game prep */}
        <Route path="/prep" element={<GamePrep />} />
        {/* side menu routes */}
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        {/* in game route */}
        <Route path="/game" element={<Game points={points} getInfo={getInfo} />} />
        <Route path="/end" element={<GameResults points={points} />} />
      </Routes>
    </BrowserRouter>
  );
}
