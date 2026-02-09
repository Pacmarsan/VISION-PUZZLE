import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-[#221c10]" />

      {/* Parchment Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/black-scales.png')`,
          backgroundSize: '200px'
        }}
      />

      {/* Main Mystic Gradient Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-soft-light"
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuAhXFNT74qtMXmaHcshEmEHb-b-rrWz_BVpwnSdONhy4AWhXajN3B4kVj49xh7f63uiuZ-4RMkFnrVtNjmQXknWrkN1LW7AuktiDmlVnddfzxEeweegSMnuskaPOPE8JQMINQZXkoW6SNGsU6kqPCnvPLD_LRM4vX5jKyBIJgZqbahbmpu_YfrzpRtIH81fHRbWvcNQNsFptowxN1uMuNZh2ULY-WZcGEUy2rFDff43z5UdPFi7PF61KoqHZpOJe_8vVgdyfnXqyVs)`
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      
      {/* Radial Glow Center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(244,175,37,0.08)_0%,transparent_60%)]" />
      
      {/* Bottom Landscape Silhouette */}
      <div className="absolute bottom-0 w-full z-0 h-64 md:h-96 opacity-80 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full text-[#18140c] fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
           <path d="M0,320L1440,320L1440,280C1300,310, 1100,250, 900,290C700,320, 500,270, 300,310C100,320, 0,320, 0,320Z" fill="#221c10"></path>
        </svg>
      </div>
    </div>
  );
};