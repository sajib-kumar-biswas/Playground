import { useState } from "react"
import styled from "styled-components"
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'

import first from '../images/image1.jpg'
import second from '../images/image2.jpg'
import third from '../images/image3.jpg'
import fourth from '../images/image4.jpg'
import fifth from '../images/image5.jpg'

const images = [first,second,third,fourth,fifth];
const total = images.length;

const StyledCarouselContainer = styled.div`
    width: 90%;
    height: 90vh;
    border: 2px solid black;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledImageContainer = styled.div`
    width: 80%;
    height: 90%;
   margin: auto;
    
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`

const StyledArrowContainer = styled.div`
    font-size: 35px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    :hover{
        background: #a3a3a3;
    }
`
const CarouselComponent = () => {  {/*main component */}
    const[imageIndex,setImageIndex] = useState(0);  {/* states */}

    const handleLeft = ()=>{
        setImageIndex(prevImageIndex => Math.max(prevImageIndex - 1,0));
    }
    const handleRight = ()=> {
        setImageIndex(prevImageIndex => Math.min(prevImageIndex+1,total-1));
    }


    return (
        <StyledCarouselContainer>
            {
                (imageIndex > 0) && (
                    <StyledArrowContainer onClick={handleLeft}>
                        <MdKeyboardArrowLeft />
                    </StyledArrowContainer>
                )
            }
            <StyledImageContainer>
                <StyledImage src={images[imageIndex]} />
            </StyledImageContainer>
            {
                (imageIndex < total - 1) && (
                    <StyledArrowContainer onClick={handleRight}>
                        <MdKeyboardArrowRight />
                    </StyledArrowContainer>
                )
            }
        </StyledCarouselContainer>    
    )
}

export default CarouselComponent;