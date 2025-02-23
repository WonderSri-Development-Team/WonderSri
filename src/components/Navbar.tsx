const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 bg-white shadow-sm fixed w-full z-10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#0047AB] rounded-full flex items-center justify-center">
              <img
                src="./src/assets/Logo.png"
                alt="WonderSri"
                className="h-8 w-8"
              />
            </div>
            <span className="text-2xl font-bold text-[#0047AB]">WonderSri</span>
            {/* Coming Soon Badge */}
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a
                href="#features"
                className="px-4 py-2 text-gray-700 hover:text-[#0047AB] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#preview"
                className="px-4 py-2 text-gray-700 hover:text-[#0047AB] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Preview
              </a>
              <a
                href="#team"
                className="px-4 py-2 text-gray-700 hover:text-[#0047AB] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
