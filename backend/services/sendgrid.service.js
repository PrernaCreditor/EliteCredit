const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendContactEmail(data) {
  const {
    firstName,
    lastName,
    email,
    companyName,
    timeSlot,
    videoDemo,
    message,
  } = data;

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "New Contact Form Submission – Elite Credit Solutions",
    html: `
      <h2>New Contact Request</h2>
      <hr />
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${companyName || "N/A"}</p>
      <p><strong>Preferred Time Slot:</strong> ${timeSlot}</p>
      <p><strong>Video Demo:</strong> ${videoDemo}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided"}</p>
      <hr />
      <p><em>This message was sent from the website contact form.</em></p>
    `,
  };

  await sgMail.send(msg);
}

module.exports = { sendContactEmail };
