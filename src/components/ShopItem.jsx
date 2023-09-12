export default function ShopItem({ product }) {
  return (
    <li className="shop-item">
      <div className="img-wrap">
        <img src={product.img} alt={product.name} className="item-img" />
      </div>
      <div className="item-title-wrap">
        <h3 className="product-item-title">{product.name}</h3>
      </div>
      <div className="item-color-wrap">
        <span className="product-item-color">{product.color}</span>
      </div>
      <div className="product-price-wrap">
        <span className="product-item-price">${product.price}</span>
      </div>
      <div className="product-btn-wrap">
        <span className="product-item-btn">add to card</span>
      </div>
    </li>
  );
}
