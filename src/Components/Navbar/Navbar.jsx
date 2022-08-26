import React from "react";
 

const Navbar = () => {
  return (
    <div className="mt-4 flex flex-row bg-black justify-end">
      <div>{/* Logo */}</div>
      <div className="text-slate-200 text-xl">
        <a href="/Home">Home</a>
        <a href="/Home">Skills</a>
        <a href="/Home">Projects</a>
      </div>
      <div>
        {/* social Media Icon */}
        
        
      </div>
      <div className="mr-10">{/* lets Connect  */}
          <button className="text-slate-200 text-xl border-2 border-slate-100 p-5">Let's Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
