import React from "react";

export default function AboutCard({ svg, alt, header, text }) {
  return (
    <section className="flex flex-col justify-center items-center col-start-2 col-end-12">
      <div className="flex justify-center items-center mb-10">
        <h3 className="text-xl">{header}</h3>
        <img src={svg} alt={alt} className="w-96" />
      </div>
      <div className="w-3/5 leading-6">
        {text.map((item) => (
          <p className="text-paragraph text-center">{item}</p>
        ))}
      </div>
    </section>
  );
}
