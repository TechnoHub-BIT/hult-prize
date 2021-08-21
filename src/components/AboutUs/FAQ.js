import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <h3 className="faqQuestion">{faq.question}</h3>
      <div
        className="faqAnswer"
        dangerouslySetInnerHTML={{
          __html: faq.answer,
        }}
      ></div>
    </div>
  );
};

export default FAQ;
