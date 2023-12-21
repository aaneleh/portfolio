import ProjectsCard from "../ProjectsCard"
import styled from 'styled-components'

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    .projects-card {
        width: 100%;
    }
    column-gap: 2.5em;
    row-gap: 2.5em;
`

function Projects() {

    return (
        <section className="projects" id="projetos">
            <h2>Projetos</h2>
            <ProjectsWrapper>
                <ProjectsCard 
                    github="" youtube="" website=""
                    image={""}
                    name="Nome" description="Repellendus iusto libero architecto voluptatem eius officiis facere rem culpa recusandae" 
                    chips={['react', 'tailwind', 'mongodb']}
                />
                <ProjectsCard 
                    github="" youtube="" website=""
                    image={""}
                    name="Nome" description="Repellendus iusto libero architecto voluptatem eius officiis facere rem culpa recusandae" 
                    chips={['react', 'tailwind', 'mongodb']}
                />
                <ProjectsCard 
                    github="" youtube="" website=""
                    image={""}
                    name="Nome" description="Repellendus iusto libero architecto voluptatem eius officiis facere rem culpa recusandae" 
                    chips={['react', 'tailwind', 'mongodb']}
                />
                <ProjectsCard 
                    github="" youtube="" website=""
                    image={""}
                    name="Nome" description="Repellendus iusto libero architecto voluptatem eius officiis facere rem culpa recusandae" 
                    chips={['react', 'tailwind', 'mongodb']}
                />
            </ProjectsWrapper>
        </section>
    )
}

export default Projects