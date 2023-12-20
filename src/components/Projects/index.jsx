import ProjectsCard from "../ProjectsCard"

import ScrollReveal from "scrollreveal"

function Projects() {

/*     ScrollReveal({ reset: true });
    ScrollReveal().reveal('.projects', { delay: 1000 }); */

    return (
        <section className="projects" id="projetos">
            <h2>Projetos</h2>
            <ProjectsCard 
                github="" youtube="" website=""
                image={""}
                name="Nome" description="Repellendus iusto libero architecto voluptatem eius officiis facere rem culpa recusandae" 
                chips={['react', 'tailwind', 'mongodb']}
            />
        </section>
    )
}

export default Projects