import PropTypes from 'prop-types';

ProjectsCard.PropTypes={
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  live: PropTypes.string,
  github: PropTypes.string,
}



export default function ProjectsCard({
  title,
  description,
  image,
  tech,
  live,
  github
}) {
  return (
    <div className="max-w-sm border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-1">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Tech */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">Tech Used:</p>
        <div className="flex gap-2 mt-1 flex-wrap">
          {tech.map((item, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="w-full text-center py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          className="w-full text-center py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
