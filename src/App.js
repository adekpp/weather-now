import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBinoculars,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Input from "./components/Input";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { Loader } from "./components/Loader";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";

library.add(fas, fab, faGithub, faLinkedin, faBinoculars, faWater, faWind);

function App() {
  const { data, isLoading, error } = useSelector((state) => state.data);

  return (
    <div className="app">
      <div className="w-full">
        <Header />
        <Input key="input" />
        <AnimatePresence>
          {isLoading && <Loader />}
          {error && <Error />}
          {data && <Weather key="weather" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
