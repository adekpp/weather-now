import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex flex-row justify-end w-full bg-sky-500 py-2" >

      <div className="text-md text-white drop-shadow-lg hover:text-sky-800 hover:scale-125 md:text-lg">
        <a href="https://github.com/adekpp" target="blank">
          <FontAwesomeIcon className="mr-2" icon={["fab", "github"]} />
        </a>
      </div>

      <div className="text-md text-white drop-shadow-lg hover:text-sky-800 hover:scale-125 md:text-lg">
        <a href="https://www.linkedin.com/in/adrian-pietryga" target="blank">
          <FontAwesomeIcon className="mr-2" icon={["fab", "linkedin"]} />
        </a>
      </div>

      <div className="text-md text-white drop-shadow-lg hover:text-sky-800 active:scale-95  md:text-lg mr-6">
        <a href="https://www.linkedin.com/in/adrian-pietryga" target="blank"><p>Adrian Pietryga</p> </a>
        
      </div>
    </div>
  );
};

export default Header;
