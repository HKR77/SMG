import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { handleWhatsAppClick } from "../utility/commonUtils";

const SocialNetworks = React.memo(() => {
  return (
    <div className="flex gap-2 *:cursor-pointer">
      <div className="p-2 bg-black/30 hover:bg-black/40 hover:scale-105  text-lg rounded-full w-fit text-white transition-all duration-300" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </div>
      <div className="p-2 bg-black/30  hover:bg-black/40 hover:scale-105   text-lg rounded-full w-fit text-white">
        <FaLinkedin />
      </div>
      <div className="p-2 bg-black/30 hover:bg-black/40 hover:scale-105   text-lg rounded-full w-fit text-white">
        <FaFacebookF />
      </div>
      <div className="p-2 bg-black/30 hover:bg-black/40 hover:scale-105   text-lg rounded-full w-fit text-white">
        <FaInstagram />
      </div>
      <div className="p-2 bg-black/30 hover:bg-black/40 hover:scale-105   text-lg rounded-full w-fit text-white">
        <FaYoutube />
      </div>
    </div>
  );
});

export default SocialNetworks;
