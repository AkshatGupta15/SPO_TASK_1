import React, { useState } from "react";

const Collapsible = ({question, answer}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
    data-ripple-light="true"
  data-collapse-target="collapse"
      tabIndex={0}
      className="bg-white collapse collapse-arrow shadow-sm rounded-md cursor-pointer"
      onClick={handleToggle}
    >
      <div className="collapse-title lg:text-xl text-md font-bold">
        {question}
      </div>
      {!isCollapsed && (
        <div className="font-sans text-base font-light leading-relaxed text-inherit antialiased collapse-content transition-all duration-1000 ease-in-out">
          <p><span className="italic">Answer:  </span>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
