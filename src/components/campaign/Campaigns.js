import React from "react";
import "./Campaigns.css";

export default function Campaigns() {
  const campaignData = [
    {
      title: "Dine & Delight",
      description:
        "Order from a participating restaurant between December 26, 2020 – April 30, 2021 and receive a $20 Reward Card when you spend $50 or more!",
      imageURL:
        "https://www.ridgedalecenter.com/content/dam/b2c/other-campaigns/dine-and-delight/Dining-and-Delight2.0resized.jpg",
    },
    {
      title: "Safety Measures",
      description:
        "From additional hand sanitizer to increased cleaning and social distancing practices, we’re making it easier for you to feel comfortable. When you’re ready, welcome back and make yourself at home.",
      imageURL:
        "https://www.ridgedalecenter.com/content/dam/community/rd1/Together-LandingPageMod-767x575-Safety.jpg",
    },
    {
      title: "Create your home oasis",
      description:
        "Spending more time at home? Add pops of personality to your most-loved spaces with a room refresh.",
      imageURL:
        "https://www.ridgedalecenter.com/content/dam/b2c/other-campaigns/home-and-housewares/MULTI-HomeHouse-HomepageModule-767x575-2.jpg",
    },
    {
      title: "Curbside Pickup",
      description:
        "We've expanded its Curbside Pickup offerings with more participating stores and restaurants!",
      imageURL:
        "https://www.ridgedalecenter.com/content/dam/curbside/curbside-assets-4-29/CurbsidePickup-Wave1B-V2-PropertyHomepage-Module-767x575.jpg",
    },
  ];
  return (
    <div className="campaigns">
      <span className="campaigns-page-title">Campaigns & Announcements</span>
      {campaignData.map((item, index) => {
        return (
          <div className="campaigns-container">
            <img className="campaigns-image" src={item.imageURL}></img>
            <div className="campaigns-container-right">
              <span className="campaigns-big-title">{item.title}</span>
              <span className="campaigns-desc">{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
