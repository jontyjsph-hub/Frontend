const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const validator = require('validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Rate limiting - prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again later.'
  }
});

// Email configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
};

// Validate form data
const validateContactForm = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!data.email || !validator.isEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  return errors;
};

// Contact form submission route
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    console.log('📨 Contact form submission received:', req.body);
    
    const { name, email, phone, subject, message, company } = req.body;
    
    // Validate form data
    const validationErrors = validateContactForm(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Sanitize data
    const cleanData = {
      name: validator.escape(name.trim()),
      email: validator.normalizeEmail(email),
      phone: phone ? validator.escape(phone.trim()) : 'Not provided',
      subject: validator.escape(subject.trim()),
      message: validator.escape(message.trim()),
      company: company ? validator.escape(company.trim()) : 'Not provided'
    };

    const transporter = createEmailTransporter();

    // Email content to send to you
    const emailToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `🔥 New Contact Form: ${cleanData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { background: white; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; }
            .field-label { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
            .field-value { color: #374151; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border: 2px solid #dc2626; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <p>Someone is interested in your services!</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Full Name</div>
                <div class="field-value">${cleanData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email Address</div>
                <div class="field-value">${cleanData.email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📱 Phone Number</div>
                <div class="field-value">${cleanData.phone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">🏢 Company</div>
                <div class="field-value">${cleanData.company}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📋 Subject</div>
                <div class="field-value">${cleanData.subject}</div>
              </div>
              
              <div class="message-box">
                <div class="field-label">💬 Message</div>
                <div class="field-value">${cleanData.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="field" style="background: #fee2e2; border-left-color: #dc2626;">
                <div class="field-label">⚡ Quick Action</div>
                <div class="field-value">
                  <a href="mailto:${cleanData.email}?subject=Re: ${cleanData.subject}" 
                     style="background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                    Reply Now
                  </a>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your website contact form</p>
              <p>Received on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email to you
    await transporter.sendMail(emailToOwner);
    console.log('✅ Email sent successfully to owner');

    // Optional: Send auto-reply to user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: cleanData.email,
      subject: `Thank you for contacting us - ${cleanData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You! 🙏</h1>
            </div>
            <div class="content">
              <p>Hi ${cleanData.name},</p>
              <p>Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.</p>
              <p><strong>Your message:</strong> ${cleanData.subject}</p>
              <p>Best regards,<br>Digital Marketing Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(autoReply);
    console.log('✅ Auto-reply sent to user');

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Backend server is running!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? '✅ Yes' : '❌ No'}`);
});
