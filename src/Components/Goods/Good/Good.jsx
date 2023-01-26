import "./Good.scss";

const Good = ({
    name,
    description,
    oldPrice,
    newPrice,
    characteristics1,
    characteristics1Desc,
    characteristics2,
    characteristics2Desc,
    image
}) => {
    return <div className="good">
        <div className="good__info">
            <div className="info-image">
                <img src={image} alt={image} />
            </div>
            <div className="info-desc">
                <h4>
                    {name}
                </h4>
                <p className="desc">
                    {description}
                </p>
                <p className="old-price">
                    {oldPrice}
                </p>
                <p className="new-price">
                    {newPrice}
                </p>
                <div className="characters one">
                    <p>
                        {characteristics1}
                    </p>
                    <span>
                        {characteristics1Desc}
                    </span>
                </div>
                <div className="characters two">
                    <p>
                        {characteristics2}
                    </p>
                    <span>
                        {characteristics2Desc}
                    </span>
                </div>
            </div>
        </div>

        <div className="good__buttons">
            <button>Подробнее</button>
            <button>Заказать</button>
        </div>
    </div>
}

export default Good;