import styled from "styled-components"
import {categories} from '../Data'

const Container = styled.div`
    display: flex;  
    height: 100vh;
    width: 100wh;
`
const Container2 = styled.div`
    flex: 1;
`

const Image = styled.img`
    src: ${props => props.src};
    width: 100%;
`

const Info = styled.div`

`

const Title = styled.h1`

`

const Button = styled.button`

`

const Categories = () => {
    return (
        <Container>
            {
                categories.map((item)=>(
                    <Container2 key={item.id}>
                        <Image src={item.img}/>
                        <Info>
                            <Title>{item.title}</Title>
                            <Button>SHOP NOW</Button>
                        </Info>
                    </Container2>
                ))
            }
        </Container>
    )
}

export default Categories;