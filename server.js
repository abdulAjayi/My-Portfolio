import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please complete every field before sending your message.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      success: false,
      message:
        "Email delivery is not configured yet. Add RESEND_API_KEY to continue.",
    });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const payload = {
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: ["abdussomad8720@gmail.com"],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    const { data, error } = await resend.emails.send(payload);

    if (error || !data) {
      console.error("Resend email failed:", error);
      return res.status(500).json({
        success: false,
        message: "The message could not be sent. Please try again in a moment.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Your message was sent successfully. I’ll reply as soon as possible.",
    });
  } catch (error) {
    console.error("Contact route failure:", error);
    return res.status(500).json({
      success: false,
      message: "The message could not be sent. Please try again in a moment.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening at http://localhost:${port}`);
});
