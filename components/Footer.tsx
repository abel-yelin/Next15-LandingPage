import {
  Facebook,
  Instagram,
  MessageCircleHeart,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container px-4 sm:px-8">
        <div className="social-container flex flex-row  mx-auto text-white gap-4 justify-center">
          <Facebook className="bg-black px-2 py-1.5 w-8 h-8 rounded-full hover:scale-125 cursor-pointer duration-300" />
          <Twitter className="bg-black px-2 py-1.5 w-8 h-8 rounded-full hover:scale-125 cursor-pointer duration-300" />
          <MessageCircleHeart className="bg-black px-2 py-1.5 w-8 h-8 rounded-full hover:scale-125 cursor-pointer duration-300" />
          <Instagram className="bg-black px-2 py-1.5 w-8 h-8 rounded-full hover:scale-125 cursor-pointer duration-300" />
          <Youtube className="bg-black px-2 py-1.5 w-8 h-8 rounded-full hover:scale-125 cursor-pointer duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
