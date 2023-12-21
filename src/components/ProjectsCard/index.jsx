import { BsGithub, BsYoutube, BsArrowUpRight } from "react-icons/bs";
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid white;
    max-width: 32em;

`
const Cover = styled.div`
    background-color: var(--light-bg); //@todo aqui vai um bg image
    height: 12em;

    display: grid;
    align-content: end;
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1em 0.5em;
    a {
        font-size: 1.75em;
    }
`
const Flex = styled.div`
    display: inline-flex;
    gap: 1em;
`
const Description = styled.div`
    max-width: 32em;
    padding: 0 1em 1em;
    & * {
        padding-top: 1em;
    }
`
const Chip = styled.p`
    background: var(--light-bg);
    padding: 0.25em 0.5em;
    border-radius: 1em;
`


function ProjectsCard({github, youtube, website, image, name, description, chips}) {

    return (
        <Wrapper className="projects-card">
            <Cover>
                <Links>
                    <Flex>
                        <a href={github} target="_blank">
                            <BsGithub />
                        </a>
                        <a href={youtube} target="_blank">
                            <BsYoutube />
                        </a>
                    </Flex>
                    <div>
                        <a href={website} target="_blank">
                            <BsArrowUpRight />
                        </a>
                    </div>
                </Links>
            </Cover>
            <Description>
                <h4>{name}</h4>
                <p>{description}</p>
                <Flex>
                    {
                        chips.map(( (el, key) => {
                            return <Chip key={key}>{el}</Chip>
                        }))
                    }
                </Flex>
            </Description>
        </Wrapper>
    )
}

export default ProjectsCard