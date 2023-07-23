import React, { useState } from "react";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function FormContact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    form.current[3].innerHTML = "Message sending";

    emailjs
      .sendForm(
        "service_p0bcj6k",
        "template_207n6z2",
        form.current,
        "nISHHDijyP6gFwoP7"
      )
      .then(
        (result) => {
          setIsSending(false);
          form.current[3].innerHTML = "Message Sent!";
        },
        (error) => {
          setIsSending(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
        <label className="mb-2" htmlFor="name">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="user_name"
          placeholder={"Enter Your Name"}
        />
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="user_email"
          placeholder={"Enter Your Email"}
        />
        <label className="mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="mb-2 py-3 p-3 rounded-lg"
          id="message"
          name="message"
          placeholder={"Enter Your Message"}
        />
        <button
          className={"mb-2 py-4 bg-blueSoft rounded-lg "}
          disabled={isSending}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
