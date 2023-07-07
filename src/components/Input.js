import React from "react";

export default function Input({ type, id, name, placeholder }) {
  return (
    <input
      className="py-3 p-3 mb-2 rounded-lg"
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
    />
  );
}
