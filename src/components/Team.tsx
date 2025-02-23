// File: src/components/Team.tsx
import { Github, Linkedin } from "lucide-react"; // Import Lucide icons

const team = [
  {
    name: "Aaron Emmanuel",
    role: "Backbone Architect",
    image: "./src/assets/Aaron.png",
    github: "https://github.com/AaronJE45",
    linkedin: "https://www.linkedin.com/in/aaronemmanuel",
  },
  {
    name: "Iksura Wickramathunga",
    role: "Server Sultan",
    image: "./src/assets/Inura.png",
    github: "https://github.com/iksurainura",
    linkedin: "https://www.linkedin.com/in/iksura",
  },
  {
    name: "Chamath Matharage",
    role: "Code Crafter",
    image: "./src/assets/Chamath.png",
    github: "https://github.com/chamathjay",
    linkedin: "https://www.linkedin.com/in/chamathjm",
  },
  {
    name: "Sadaru Hansaka",
    role: "Interface Captain",
    image: "./src/assets/Sadaru.png",
    github: "https://github.com/sadaru-hansaka",
    linkedin: "https://www.linkedin.com/in/sadaru-hansaka-8a7600293",
  },
  {
    name: "Minasha Katugampala",
    role: "Interface Architect",
    image: "./src/assets/Minasha.png",
    github: "https://github.com/MinashaKatugampala",
    linkedin: "https://www.linkedin.com/in/minasha-katugampala-8661b827a",
  },
  {
    name: "Kalpa Perera",
    role: "System Strategist",
    image: "./src/assets/Kalpa.png",
    github: "https://github.com/klperera",
    linkedin: "https://www.linkedin.com/in/kalpa-profile",
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
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Passionate individuals working together to make your Sri Lankan
            experience unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center relative transition-transform duration-300 transform hover:scale-105"
            >
              <div className="w-52 h-52 rounded-full mx-auto mb-4 shadow-lg overflow-hidden bg-blue-200 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 flex space-x-2 bg-gray-300 p-2 rounded-full">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0047AB]"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0047AB]"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#0047AB] bg-blue-100 p-2 rounded">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
