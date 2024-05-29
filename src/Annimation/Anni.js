import React from "react";
import './ani.css'
function Anni() {
  return (
    <div >
      <section className="flex flex-wrap ">
        {Array.from({ length: 200 }).map((_, index) => (
          <span key={index} ></span>
        ))}
      </section>
    </div>
  );
}

export default Anni;
