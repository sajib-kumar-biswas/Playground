import { Col, Row } from "react-bootstrap";
import BootCard from '../Components/BootCard'
import {products} from './data.js'

const BootCardPage = () => {
    return (
        <Row>
            {
                products.map((item) => (
                    <Col key={item.id} sm={6} md={4} lg={3}>
                        <BootCard product={item} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default BootCardPage;