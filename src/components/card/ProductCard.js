let ProductCard = function (title) {
    return (
        <div className="game-card">
            <div>
                <img src="" alt={`${title} cover`}></img>
            </div>
            <p>{title}</p>
            <p>
                <i class="fa fa-cart-plus" aria-hidden="true"></i>$ 0.99
            </p>
        </div>
    );
};

export default ProductCard;
