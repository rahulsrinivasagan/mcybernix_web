"use client";

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="info-card info-email">
        <div className="info-icon">✉</div>
        <h4>Email us</h4>
        <p>Email us for scheduling</p>
        <a href="mailto:mcybernixsolutions@gmail.com">mcybernixsolutions@gmail.com</a>
      </div>

      <div className="info-card info-social">
        <div className="info-icon">👥</div>
        <h4>Follow us on</h4>
        <p>Stay updated with our latest news</p>
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.759h3.554v1.381c.43-.664 1.202-1.609 2.927-1.609 2.144 0 3.752 1.399 3.752 4.402v5.585zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.959-1.715 1.188 0 1.915.76 1.932 1.715 0 .953-.744 1.715-1.976 1.715zm1.946 11.597H3.392V9.693h3.891v10.759zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="info-card info-phone">
        <div className="info-icon">☎</div>
        <h4>Contact us</h4>
        <p>Call us for scheduling</p>
        <a href="tel:8667234066">8667234066</a>
      </div>
    </div>
  );
}
