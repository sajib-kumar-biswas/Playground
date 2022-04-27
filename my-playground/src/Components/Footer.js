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

const Text = styled.span`

`

function Footer() {
    return (
        <Container>
            <Text>
                All rights reserved.
            </Text>
        </Container>
    )
}

export default Footer