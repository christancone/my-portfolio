import Image from 'next/image';

const projects = [
    {
        title: "TinyToes - Childcare Management System",
        description: "A comprehensive web app designed to revolutionize childcare management.",
        technologies: ["React", "Vite", "Material UI", "Tailwind CSS"],
        role: "Developed key features: employee management, real-time updates, secure communication.",
        outcome: "Improved daycare management with real-time child status updates, efficient billing, and secure communication.",
        demoLink: "https://www.youtube.com/watch?v=hWbEa2_tLuM",
        image: "/images/Project Screenshots/tinytos.png" // Update with your actual image path
    },
    {
        title: "BestBid Auction Site",
        description: "A real-time online auction platform where auction hosts can create listings and users place bids live.",
        technologies: ["Django", "React", "Tailwind CSS", "PostgreSQL"],
        role: "Full-stack development (Frontend & Backend). Implemented real-time bidding, user authentication, auction management.",
        outcome: "Delivered a fully functional, real-time auction platform ensuring transparency and fairness.",
        demoLink: "https://www.youtube.com/watch?v=pCmhMT8fOmU",
        image: "/images/Project Screenshots/bestbid.png" // Update with your actual image path
    },
    // Add other projects similarly...
];

const Projects = () => {
    return (
        <div>
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.title}</h2>
                    <Image src={project.image} alt={project.title} width={500} height={300} />
                    <p>{project.description}</p>
                    <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
                    <p><strong>Role:</strong> {project.role}</p>
                    <p><strong>Outcome:</strong> {project.outcome}</p>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Watch Demo</a>
                </div>
            ))}
        </div>
    );
};

export default Projects; 