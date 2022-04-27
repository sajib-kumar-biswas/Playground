import styled from "styled-components"
import axios from 'axios'

const Container = styled.div`

`
const Text = styled.h2`

`

function Home() {
    const url = "https://catfact.ninja/fact";
    axios.get(url)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    return (
        <Container>
            <Text>
                Home Page
            </Text>
        </Container>
    )
}

export default Home