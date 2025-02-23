const team = [
  {
    name: "Aaron",
    role: "Backbone Architect",
    image: "./src/assets/Aaron.png",
  },
  {
    name: "Iksura",
    role: "Server Sultan ",
    image: "./src/assets/Inura.png",
  },
  {
    name: "Chamath",
    role: "Code Crafter",
    image: "./src/assets/Chamath.png",
  },
  {
    name: "Sadaru",
    role: "Interface Captain",
    image: "./src/assets/Sadaru.png",
  },
  {
    name: "Minasha",
    role: "Interface Architect",
    image: "./src/assets/Minasha.png",
  },
  {
    name: "Kalpa",
    role: "System Strategist",
    image: "./src/assets/Kalpa.png",
  },
];

const Team = () => {
  return (
    <div id="team" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate individuals working together to make your Sri Lankan
            experience unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              {/* Adjusted image container */}
              <div className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0047AB]">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;