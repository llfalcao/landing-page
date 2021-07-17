let ProductCard = function (title, imageName, price = 29.99) {
    return (
        <div className="game-card">
            <div
                id="gameImage"
                style={{
                    backgroundImage: `url('${imageName}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            ></div>
            <p>{title}</p>
            <button class="btn">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>$ {price}
            </button>
        </div>
    );
};

export default ProductCard;
