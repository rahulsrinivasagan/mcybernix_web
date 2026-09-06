"use client";

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="info-card info-email">
        <div className="info-icon">✉</div>
        <h4>Email us</h4>
        <p>Email us for scheduling</p>
        <a href="mailto:hello@mcybernix.com">hello@mcybernix.com</a>
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
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.070 7.052.012 8.331 0 8.756 0 12c0 3.244.011 3.668.07 4.948.207 4.474 2.567 6.878 7.052 7.091 1.278.058 1.704.07 4.948.07 3.243 0 3.668-.012 4.947-.07 4.487-.204 6.979-2.631 7.193-7.091.058-1.28.07-1.704.07-4.948 0-3.244-.011-3.668-.07-4.948-.216-4.463-2.628-6.979-7.092-7.092C15.668.012 15.243 0 12 0z" />
              <circle cx="12" cy="12" r="3.6" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 002.856-3.515v-.34c0-.955-.59-1.87-1.88-2.223.93.604 1.61 1.738 1.904 2.884-.856-.649-2.477-1.268-3.88-1.272-1.378.072-2.224.922-2.224.922.892-1.633-2.782-2.51-4.955-2.42-2.172.09-3.707 1.345-3.707 1.345-1.417-1.345-5.402-.966-5.893.112-.168.374-.032.787.521 1.388C2.602 4.402 2.694 5.454 3.965 5.812c-.235.033-.893.066-1.678.066.029 1.14.773 2.025 2.568 2.21-.326 1.666-2.423 2.982-6.02 3.272 3.798 6.189 9.753 9.118 15.997 9.118 4.784 0 7.373-2.136 8.322-4.248.945-2.111.778-4.067.778-4.067z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="info-card info-phone">
        <div className="info-icon">☎</div>
        <h4>Contact us</h4>
        <p>Call us for scheduling</p>
        <a href="tel:+919560442819">+91-9560442819</a>
      </div>
    </div>
  );
}
