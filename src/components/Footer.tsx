
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#0047AB] rounded-full flex items-center justify-center">
                <img src="./src/assets/Logo.png" alt="WonderSri" className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0047AB] ml-2">WonderSri</h3>
            </div>
            <p className="text-gray-400">
              Your ultimate companion for exploring the wonders of Sri Lanka.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#preview" className="text-gray-400 hover:text-white">Preview</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: wondersriteam@gmail.com</li>
              <li>Phone: +94 76 157 4543</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/wonder-sri/posts/?feedView=all" className="text-gray-400 hover:text-white">Linkedin</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} WonderSri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;