import React from "react";
import "./landingpage.css";
import InfoCard from "../Common/InfoCard";
import {
  ProjectManagement,
  CustomerService,
  BusinessConsulting,
  GovermentJob,
  FinanceManagement,
  HrDevelopment,
  DesignDevelopment,
  Marketing,
} from "../../assets";

function ManySolutoinSection() {
  const list = [
    {
      title: "Marketing & Communication",
      subtitle: "237 Jobs Available",
      icon: Marketing,
    },
    {
      title: "Design & Creative",
      subtitle: "237 Jobs Available",
      icon: DesignDevelopment,
    },
    {
      title: "Human Research & Development",
      subtitle: "237 Jobs Available",
      icon: HrDevelopment,
    },
    {
      title: "Finance Management",
      subtitle: "237 Jobs Available",
      icon: FinanceManagement,
    },
    {
      title: "Government Jobs",
      subtitle: "237 Jobs Available",
      icon: GovermentJob,
    },
    {
      title: "Business & Consulting",
      subtitle: "237 Jobs Available",
      icon: BusinessConsulting,
    },
    {
      title: "Customer Support Care",
      subtitle: "237 Jobs Available",
      icon: CustomerService,
    },
    {
      title: "Project Management",
      subtitle: "237 Jobs Available",
      icon: ProjectManagement,
    },
  ];
  return (
    <div className="many-solution-container">
      <h2>
        One Platform Many <span>Solutions</span>
      </h2>
      <div className="many-solution-list-container">
        {list.map((item, index) => {
          return (
            <InfoCard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ManySolutoinSection;
