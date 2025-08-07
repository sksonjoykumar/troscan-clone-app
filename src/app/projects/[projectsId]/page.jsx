import ProjectDetailsPage from '@/src/components/projects-page/ProjectDetails';

export default function ProjectsDetails({ params }) {
  const { projectsId } = params;
  console.log(projectsId);
  return (
    <div>
     
      <ProjectDetailsPage />
    </div>
  );
}
