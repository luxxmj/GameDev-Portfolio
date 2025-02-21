import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="mb-20 pb-4 lg:mb-35">
      <div className="flex flex-col items-center">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl mb-2 text-center text-neutral-100">Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-500 w-full md:w-5/6 p-4">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="flex flex-col items-center p-4 bg-slate-600 rounded-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <p className='text-neutral-100 mt-2'>{project.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;