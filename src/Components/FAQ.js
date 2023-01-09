import React from "react";
import "./faq.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.title}</div>
      <div className="faq-answer">{faq.content}</div>
    </div>
  );
};

export default FAQ;
