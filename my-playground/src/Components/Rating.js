
const Rating = ({rating, reviews}) => {
    return (
        <div className="d-flex">
            <div>
                <i className={
                    rating>=1 ? 'fa-solid fa-star' : rating>=0.5 ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'
                }></i>
                <i className={
                    rating>=2 ? 'fa-solid fa-star' : rating>=1.5 ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'
                }></i>
                <i className={
                    rating>=3 ? 'fa-solid fa-star' : rating>=2.5 ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'
                }></i>
                <i className={
                    rating>=4 ? 'fa-solid fa-star' : rating>=3.5 ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'
                }></i>
                <i className={
                    rating>=5 ? 'fa-solid fa-star' : rating>=4.5 ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'
                }></i>
            </div>
            <span>
                {reviews} reviews
            </span>
        </div>
    )
}

export default Rating;