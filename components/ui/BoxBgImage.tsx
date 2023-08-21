import React from 'react';

const BoxBgImage = ({ children, source }) => {
    return (
    <div className="rounded-md bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)"}}>
      <div className="rounded-md p-20 h-80 top-0 left-0 w-100 h-100 -z-10 bg-black bg-opacity-10">
      {children}
      </div>
    </div>
    );
  };

export default BoxBgImage;