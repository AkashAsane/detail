import "./deatilpage.css";
import logo from "./assest/Comp-Logo.png";
import { CiCircleInfo } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuFacebook } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoCameraOutline } from "react-icons/io5";
import image from "./assest/screenshot.png"


export default function Detailpage() {
  return (
    <div className="Wrapper">
      <div className="title-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="description">
          <p className="title">Netflix</p>
          <div className="description1">
            <div className="detail1">
              <p>
                <CiCircleInfo />
                Description
              </p>
              <p>
                Watch Netflix movies & TV shows online or stream right to your
                smart TV, game console, PC, Mac, mobile, tablet and more.
              </p>
            </div>
            <div className="detail2">
                <p><LuPhoneCall/>Phone</p>
                <p>(573)-456-4644</p>
                <p><MdOutlineMail/>Email</p>
                <p>contact@netflix.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="companydiv">
        <div className="company-details">
            <p className="company-title">Company Details</p>
             
            <div className="company-detailsinfo">
                <p className="info"><HiOutlineGlobe />Website</p>
                <span>netflix.com</span>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><CiCircleInfo/>Description</p>
                <p className="descriptioninfo">Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.</p>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><HiOutlineLocationMarker />Email</p>
                <span>contact@netflix.com</span>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><LuFacebook />Facebook</p>
                <a href="">https://www.facebook.com/netflix</a>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><CiInstagram />Instagram</p>
                <a href="">https://www.instagram.com/netflix</a>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><CiTwitter />Twitter</p>
                <a href="">https://twitter.com/netflix</a>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><SlSocialLinkedin />Linkedin</p>
                <a href="">https://www.linkedin.com/company/netflix</a>
            </div>
            <div className="company-detailsinfo">
                <p className="info"><CiCircleInfo/>Address</p>
                <span>San Francisco, United States</span>
            </div>

            
        </div>


        <div className="company-screenshot">
            <div className="screenshot">
            <p><IoCameraOutline />Screenshot of Webpage</p>
            <img className="sreenshotimage" src={image} alt=""/>
            </div>
            
        </div>

      </div>
    </div>
  );
}
