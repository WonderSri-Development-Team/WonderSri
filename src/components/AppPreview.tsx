const AppPreview = () => {
  return (
    <div id="preview" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">App Preview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the intuitive interface and powerful features of
            WonderSri
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <img
              src="./src/assets/location.png"
              alt="Location Guide"
              className="rounded-lg shadow-xl mx-auto"
            />
            <p className="text-center text-gray-600">Smart Navigation</p>
          </div>
          <div className="space-y-4">
            <img
              src="./src/assets/Home.png"
              alt="Quick Bookings"
              className="rounded-lg shadow-xl mx-auto"
            />
            <p className="text-center text-gray-600">
              Quick Bookings & Popular Destinations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;
