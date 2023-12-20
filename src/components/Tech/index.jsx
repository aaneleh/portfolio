import TechCard from "../TechCard"
import { SiJavascript, SiReact, SiPhp, SiMongodb, SiCss3, SiTailwindcss} from "react-icons/si";
import { DiNodejs, DiSass} from "react-icons/di";
import styled from 'styled-components'

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`

function Tech() {

    return (
        <section className="tech" id="tech">
            <h2>Tech</h2>
            <CardsWrapper>
                <TechCard name="Javascript" icon={ <SiJavascript/> } />
                <TechCard name="Javascript" icon={ <SiReact/> } />
                <TechCard name="Javascript" icon={ <DiNodejs/> } />
                <TechCard name="Javascript" icon={ <SiPhp/> } />
                <TechCard name="Javascript" icon={ <SiMongodb/> } />
                <TechCard name="Javascript" icon={ <SiCss3/> } />
                <TechCard name="Javascript" icon={ <DiSass/> } />
                <TechCard name="Javascript" icon={ <SiTailwindcss/> } />
            </CardsWrapper>
        </section>
    )
}

export default Tech