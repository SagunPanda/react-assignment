import React from "react";
import ContentMarketing from "../Assets/content-marketing-icon.png";
import FinancialAdvisor from "../Assets/financial-advisor.png";
import FinancialConsulting from "../Assets/financial-consulting.png";

const Work = () => {
  const workInfoData = [
    {
      image: ContentMarketing,
      title: "Content-Marketing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: FinancialAdvisor,
      title: "Finance-Advice",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: FinancialConsulting,
      title: "Financial-Consulting",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1>Our Services</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="work-section-top">
        <button className="secondary-button">
          All Services
        </button>
      </div>
    </div>
  );
};

export default Work;
