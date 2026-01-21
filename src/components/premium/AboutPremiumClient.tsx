'use client';

import Link from 'next/link';

interface AboutPremiumClientProps {
  ctaButton: string;
  aboutPath: string;
}

const AboutPremiumClient = ({ ctaButton, aboutPath }: AboutPremiumClientProps) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Link href={aboutPath}>
        <button
          className="premium-about-cta"
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            color: '#ffffff',
            padding: '16px 40px',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(8, 145, 178, 0.3)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(8, 145, 178, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(8, 145, 178, 0.3)';
          }}
        >
          <span>{ctaButton}</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default AboutPremiumClient;
