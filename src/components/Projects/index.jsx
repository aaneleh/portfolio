import ProjectsCard from "../ProjectsCard"
import styled from 'styled-components'

import CasaVerde from '../../assets/casa.png'
import Games from '../../assets/games.png'
import Burger from '../../assets/burger.png'
import Hades from '../../assets/hades.png'
import Fish from '../../assets/fish.png'

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
                    github="https://github.com/aaneleh/twitterlike" youtube="https://m.youtube.com/watch?v=AOk1_-1RqCc" website=""
                    image={""}
                    name="Twitterlike" description="Rede social inesperada no X." 
                    chips={['React', 'Tailwind', 'MongoDB']}
                />
                <ProjectsCard 
                    github="https://github.com/aaneleh/casa-verde" youtube="https://m.youtube.com/watch?v=w_lJSfirqUo" website="casa-verde-wine.vercel.app"
                    image={CasaVerde}
                    name="Casa Verde" description="Website de uma floricultura baseado no design do 7DaysOfCode Alura." 
                    chips={['React', 'SCSS', 'Styled-components']}
                />
                <ProjectsCard 
                    github="https://github.com/aaneleh/react-minigames" youtube="https://m.youtube.com/watch?v=3GWXBo5eqM4" website="react-minigames.vercel.app/"
                    image={Games}
                    name="Minigames" description="Implementação do jogo da forca, termo, combine 3 e jogo da velha" 
                    chips={['React', 'Tailwind']}
                />
                <ProjectsCard 
                    github="https://github.com/aaneleh/build-burger" youtube="https://www.youtube.com/watch?v=1cWSbtxtYPs" website="build-burger.vercel.app/"
                    image={Burger}
                    name="Build a Burger" description="Restaurante em que se pode montar o próprio hamburger em 3d lowpoly" 
                    chips={['NodeJS', 'ThreeJS', 'SCSS']}
                />
                <ProjectsCard 
                    github="https://github.com/aaneleh/hades-progress-tracker" youtube="https://m.youtube.com/watch?v=Ex44DhXTmIE" website="hades-progress-tracker.vercel.app"
                    image={Hades}
                    name="Hades Progress Tracker" description="Single page app para registrar e monitorar seu progresso pessoal no jogo Hades" 
                    chips={['React', 'CSS']}
                />
                <ProjectsCard 
                    github="https://github.com/aaneleh/california-fish-market" youtube="https://m.youtube.com/watch?v=NhuQW2-B4gk" website="aaneleh.github.io/california-fish-market/"
                    image={Fish}
                    name="Fish Market" description="Website de uma pescaria baseada em uma prompt do site FakeClients" 
                    chips={['Javascript', 'CSS']}
                />
            </ProjectsWrapper>
        </section>
    )
}

export default Projects