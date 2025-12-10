const { sendContactEmail } = require("../services/sendgrid.service");

async function handleContactForm(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      timeSlot,
      videoDemo,
    } = req.body;

    if (!firstName || !lastName || !email || !timeSlot || !videoDemo) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    await sendContactEmail(req.body);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
}

module.exports = { handleContactForm };
