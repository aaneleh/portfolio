import TechCard from "../TechCard"
import { SiJavascript, SiReact, SiPhp, SiMongodb, SiCss3, SiTailwindcss} from "react-icons/si";
import { DiNodejs, DiSass} from "react-icons/di";
import styled from 'styled-components'

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2em;
    max-width: 40em;
    min-width: 16em;
`

function Tech() {

    return (
        <section className="tech" id="tech">
            <h2>Tech</h2>
            <CardsWrapper>
                <TechCard name="Javascript" icon={ <SiJavascript/> } />
                <TechCard name="React" icon={ <SiReact/> } />
                <TechCard name="NodeJs" icon={ <DiNodejs/> } />
                <TechCard name="PHP" icon={ <SiPhp/> } />
                <TechCard name="MongoDB" icon={ <SiMongodb/> } />
                <TechCard name="CSS" icon={ <SiCss3/> } />
                <TechCard name="Sass" icon={ <DiSass/> } />
                <TechCard name="Tailwind" icon={ <SiTailwindcss/> } />
            </CardsWrapper>
        </section>
    )
}

export default Tech