import { Card } from "react-bootstrap"
import Rating from "./Rating";
import Price from './Price'

const BootCard = ({product}) => {
    return (
        <Card>
            <Card.Img src={product.image} />
            <Card.Body>
                <Card.Title>
                    {product.name}
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Rating rating={product.rating} reviews={product.numReviews} />
                <Price price={product.price} />
            </Card.Body>
        </Card>
    )
}

export default BootCard;