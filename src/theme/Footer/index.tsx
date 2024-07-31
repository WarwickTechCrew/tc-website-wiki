import React from 'react';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="p-4 max-w-screen-2xl mx-auto text-center">
        Warwick Tech Crew &copy; {year}
      </div>
    </footer>
  );
}

export default React.memo(Footer);
