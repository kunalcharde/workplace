import React from "react";
import user from "../../assets/user.png";

const feedbackarr = [
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
  {
    imgurl: user,
    companyName: "Microsoft",
    category: "freelancer",
    position: "Senior UI Designr",
    role: "Fulltime",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
    salary: "$2500/month",
  },
];
const FeedbackCard = () => {
  return (
    <div className="feedback-card-container">
      {feedbackarr.map((item) => {
        return (
          <>
            <div className="feedback-card">
              <div className="feeback-card-header">
                <img src={item.imgurl} alt="user" />
                <div className="title">
                  <h3>{item.companyName}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
              <div className="feeback-card-desc-container">
                <h2 className="feeback-card-position">{item.position}</h2>
                <p className="feeback-card-role">{item.role}</p>
                <p className="feeback-card-desc">{item.desc}</p>
              </div>
              <div className="feeback-card-footer">
                <div>{item.salary}</div>
                <div>
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FeedbackCard;
