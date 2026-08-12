import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaPhone } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      toast.error("The contact form is not configured yet.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        { publicKey: emailPublicKey },
      );
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } catch {
      toast.error("Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <span>Let&apos;s Work Together</span>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <a href="mailto:mandalsumitraj8@gmail.com">mandalsumitraj8@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <FaPhone aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+9779827688393">+977 982 768 8393</a>
              </div>
            </div>

            <div className="info-card">
              <FaLinkedin aria-hidden="true" />
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sumit-mandal-a61793320" target="_blank" rel="noreferrer">
                  Visit Profile
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" aria-label="Your name" autoComplete="name" required />
            <input type="email" name="user_email" placeholder="Your Email" aria-label="Your email address" autoComplete="email" required />
            <input type="text" name="subject" placeholder="Subject" aria-label="Message subject" required />
            <textarea name="message" rows="6" placeholder="Write your message..." aria-label="Your message" required />
            <button type="submit" disabled={isSubmitting}>
              <FaPaperPlane aria-hidden="true" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </>
  );
}

export default Contact;
