import styled from "styled-components";

const Box = styled.div`
    font-size: 30px;
`
const Price = ({price}) => {
    return (
        <Box>
            {price}
        </Box>
    )   
}

export default Price;