import React from "react";
import { Images } from "../constant";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col gap-5 items-center px-10 py-15 bg-[#f9f9f9] ">
      <div className="flex justify-center items-center gap-5 w-[100%] border-b-1 border-[#e0e0e0] px-5 py-15">
        <div className="flex flex-col items-start gap-2 w-[50%]">
          <img src={Images.Logo} />
          <p className="w-[70%]">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 w-[20%]">
          <h1 className="font-bold ">Tastebite</h1>
          <a className="text-[grey] hover:text-[orange] " href="">
            About us
          </a>
          <a className="text-[grey] hover:text-[orange] " href="">
            Careers
          </a>
          <a className="text-[grey] hover:text-[orange] " href="">
            Contact us
          </a>
          <a className="text-[grey] hover:text-[orange] " href="">
            Feedback
          </a>
        </div>
        <div className="flex flex-col items-start gap-3 w-[20%]">
          <h1 className="font-bold">Legal</h1>
          <a className="text-[grey] hover:text-[orange]" href="">
            Terms
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Conditions
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Cookies
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Copyright
          </a>
        </div>
        <div className="flex flex-col items-start gap-3 w-[20%]">
          <h1 className="font-bold">Follow</h1>
          <a className="text-[grey] hover:text-[orange]" href="">
            Facebook
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Twitter
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Instagram
          </a>
          <a className="text-[grey] hover:text-[orange]" href="">
            Youtube
          </a>
        </div>
      </div>

      <div className=" flex justify-centre gap-[50rem] items-center">
        <div className=" flex items-center justify-center   text-gray-4 hover:text-[orange]00 text-sm">
          © {new Date().getFullYear()} Tastebite-All rights reserved.
        </div>

        <div className="flex items-center justify-center gap-5">
          <FiFacebook className="size-[1.5rem] hover:text-[orange]" />
          <FaInstagram className="size-[1.5rem] hover:text-[orange]" />
          <FiYoutube className="size-[1.5rem] hover:text-[orange]" />
          <FaXTwitter className="size-[1.5rem] hover:text-[orange]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
