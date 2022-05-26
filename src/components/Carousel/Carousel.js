import React from 'react'

function Carousel() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/smiling-surfer-using-smartphone-picture-id642333286?k=20&m=642333286&s=612x612&w=0&h=SGgCQWqYkcH8w-FWbj4tz313yIoqIQ3rqmsr7KTdgWY=" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2016/08/22/10/04/traveler-1611614__480.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/08/18/02/57/skate-2653611__340.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel