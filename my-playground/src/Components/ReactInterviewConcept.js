import styled from "styled-components";

const name = "GeeksforGeeks";
const Element = <h2>Welcome to , {name}</h2>;

const Container = styled.div`
    
`

const ReactInterviewConcept = () => {
    return (
        <Container>
            <Element />
        </Container>
    )
}

export default ReactInterviewConcept;