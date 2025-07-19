import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: false, message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({ submitting: false, success: true, error: false, message: "✅ Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true, message: "❌ Failed to send message." });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
        Get in Touch
      </motion.h2>

      <motion.form className="contact-form" onSubmit={handleSubmit}>
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleInputChange}
        />
        <motion.button type="submit" disabled={formStatus.submitting}>
          {formStatus.submitting ? "Sending..." : "Send Message"}
        </motion.button>
        {formStatus.message && (
          <p style={{ color: formStatus.success ? "lightgreen" : "red", marginTop: "10px" }}>
            {formStatus.message}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
};
