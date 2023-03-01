import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// views
import {Onboarding} from "./views/onBoarding/Onboarding";
import {SuccessfulRegistration} from "./views/onBoarding/SuccessfulRegistration";
import {GamePrep} from "./views/GamePrep/GamePrep";
import {ContactUs} from "./views/contact/ContactUs";
import {SubScription} from "./views/Subsciption/Subscription";
import {SuccessfulPurchase} from "./views/Subsciption/SuccessfulPurchase";
import {Profile} from "./views/profile/Profile";
import {EndGame} from "./views/Game/EndGame";
import { DashBoard } from "./views/DashBoard/DashBoard";
import { Game } from "./views/Game/Game";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* onboarding */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/successful" element={<SuccessfulRegistration />} />
        {/* game prep */}
        <Route path="/prep" element={<GamePrep />} />
        {/* side menu routes */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        {/* subscription routes */}
        <Route path="/subscription" element={<SubScription />} />
        <Route path="/purchase" element={<SuccessfulPurchase />} />
        {/* in game route */}
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<EndGame />} />
      </Routes>
    </BrowserRouter>
  );
}
