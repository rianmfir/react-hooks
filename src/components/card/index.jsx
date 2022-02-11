import './card.css'

const Card = ({ data }) => {

    return (
        <>
            {
                data.map((event, key) =>
                (
                    <div className="col-md-4 mb-5" key={key}>
                        <div className="card" >
                            <img src={event.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fs-5 fw-bolder">{event.title}</h5>
                                <p className="fs-6 fw-normal">{event.author} - {event.publishedAt}</p>
                                <p className="card-text">
                                    {event.content}
                                </p>
                                <a href={event.url} className="btn btn-dark">Read more..</a>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}

export default Card