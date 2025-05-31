import React, { useState } from "react";

function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailtoLink = `mailto:kratikpaliwal1@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    window.open("https://www.linkedin.com/in/kratikpaliwal/", "_blank");

  };

  return (
    <>
      <div className="flex justify-center mt-10 text-2xl font-bold mb-10">
        Let's Connect
      </div>

      <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full max-w-md">
          <label className="font-black text-2xl mb-2">Name</label>
          <input
            type="text"
            className="bg-white text-black p-2 rounded border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col w-full max-w-md">
          <label className="font-black text-2xl mb-2">Email Id</label>
          <input
            type="email"
            className="bg-white text-black p-2 rounded border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col w-full max-w-md">
          <label className="font-black text-2xl mb-2">Message</label>
          <textarea
            className="bg-white text-black p-2 rounded border"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Submit</button>
      </form>
    </>
  );
}

export default Connect;
