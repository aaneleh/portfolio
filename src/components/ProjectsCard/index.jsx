import { BsGithub, BsYoutube, BsArrowUpRight } from "react-icons/bs";
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid white;
    max-width: 32em;
    transition: transform 150ms ease-in-out;
    transform: scale(1);

    &:hover {
        transform: scale(1.05);
    }
`
const Cover = styled.div`
    height: 18em;
    position: relative;
    overflow: hidden;
    display: grid;
    align-content: end;
    svg {
        overflow: visible;
        path {
            filter: drop-shadow(0px 0px 1px var(--bg));
        }
    }
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1em 0.5em;
    a {
        font-size: 1.75em;
        stroke: 1px solid red;
        fill: blue;
    }
`
const CoverImage = styled.img`
    position: absolute;
    top:0;
    left:0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--light-bg); 

`
const Flex = styled.div`
    display: inline-flex;
    gap: 1em;
`
const Description = styled.div`
    max-width: 32em;
    padding: 0 1em 1em;
    p, a {
        font-size: 16px;
    }
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
                <CoverImage src={image}/>
                <Links>
                    <Flex>
                        <a href={github} target="_blank">
                            <BsGithub/>
                        </a>
                        <a href={youtube} target="_blank">
                            <BsYoutube />
                        </a>
                    </Flex>
                    <div>
                        {
                            website == '' ? 
                                <></>
                            :
                                <a href={website} target="_blank">
                                    <BsArrowUpRight />
                                </a>
                        }
                    </div>
                </Links>
            </Cover>
            <Description>
                <h4>
                    <a href={website == '' ? youtube : website}>
                        {name}
                    </a>
                </h4>
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