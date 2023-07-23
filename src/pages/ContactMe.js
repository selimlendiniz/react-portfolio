import React from "react";
import AboutCard from "../components/AboutCard";
import ContactMeSvg from "../assets/storyset/ContactMe.svg";
import { contacts } from "../variables/contacts";
import ContactContainer from "../components/ContactContainer";
import FormContact from "../components/FormContact";

export default function ContactMe() {
  document.title = "Contact Me";

  return (
    <main className="grid grid-cols-12 pb-5">
      <div className="col-start-2 col-end-12 flex flex-col justify-center items-center">
        <AboutCard header={"Contact Me"} svg={ContactMeSvg} />
        <div className="flex flex-wrap justify-center items-center">
          <ContactContainer contacts={contacts} className="mr-5" />
          <FormContact />
        </div>
      </div>
    </main>
  );
}
