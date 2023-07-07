import React from "react";
import SkillCard from "./SkillCard";
import UsedTechCard from "./UsedTechCard";
import ContactCard from "./ContactCard";

export default function ContactContainer({ contacts, className }) {
  return (
    <div className={className}>
      <ul>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            className={"mb-4"}
            title={contact.title}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </ul>
    </div>
  );
}
