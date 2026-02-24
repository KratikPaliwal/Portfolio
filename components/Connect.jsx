import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiUser, FiMapPin, FiClock } from "react-icons/fi";

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
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col mb-12 space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Let's Start a <span className="text-gradient">Conversation</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-base md:text-lg">
          Whether you have a specific project in mind or just want to
          explore possibilities, I'm always open to new connections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] flex items-center gap-4 sm:gap-6 group">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
              <FiMail fontSize={22} />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-base sm:text-xl text-white">Email</h4>
              <p className="text-gray-400 text-sm truncate">kratikpaliwal1@gmail.com</p>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] flex items-center gap-4 sm:gap-6 group">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
              <FiMapPin fontSize={22} />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-xl text-white">Location</h4>
              <p className="text-gray-400 text-sm">Madhya Pradesh, India 🇮🇳</p>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem] flex items-center gap-4 sm:gap-6 group">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform shrink-0">
              <FiClock fontSize={22} />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-xl text-white">Working Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Fri, 9AM - 6PM IST</p>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-5 bg-white/[0.02] p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/5"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
              <input
                type="text"
                className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">Your Message</label>
            <textarea
              className="w-full bg-black/40 border border-white/10 p-5 rounded-3xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all resize-none placeholder:text-gray-600"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your vision..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-white text-black font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shadow-2xl shadow-white/5 text-lg"
          >
            Send Message <FiSend fontSize={20} />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Connect;
