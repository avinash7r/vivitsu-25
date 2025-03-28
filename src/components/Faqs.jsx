import "./Faqs.css";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen((prev) => !prev);

  return (
    <div className={`faq ${isOpen ? "expanded" : ""}`} onClick={toggleFaq}>
      <div className="flex justify-between items-center cursor-pointer">
        <h1>What is Hackathon?</h1>
        <span className="text-2xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sequi.
        </p>
      )}
    </div>
  );
};

function Faqs() {
  const list = [];
  for (let i = 0; i < 10; i++) list.push(<Faq key={i} />);

  return (
    <div className="faqs-container">
      
      {list}
    </div>
  );
}

export default Faqs;
