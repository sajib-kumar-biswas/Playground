import styled from "styled-components";

const Container2 = styled.div`
    width: 33.333333333%;
`

const Image = styled.img`
    src: ${props => props.src};
    width: 100%;
    height: auto;
`

const Info = styled.div`

`

const Title = styled.h1`

`

const Button = styled.button`

`

const Category = ({item}) => {
    return (
        <Container2>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container2>
    )
}

export default Category;