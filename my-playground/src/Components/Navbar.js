import styled from 'styled-components'

const Container = styled.div`
    height: 200px;
    width: 100vw;
    background: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Navbar() {
    return (
        <Container>
            <Button>
                Home
            </Button>
        </Container>
    )
}

export default Navbar