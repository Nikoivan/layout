export default function ShopCard({ props }) {
  console.log(props);
  return (
    <li className="card" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="card-header">
        <h3 className="product-title">{props.name}</h3>
        <span className="card-color">{props.color}</span>
      </div>
      <div className="card-footer">
        <span className="card-price">${props.price}</span>
        <a href="#" className="add-btn">
          add to card
        </a>
      </div>
    </li>
  );
}

/* 
<div className="img-cont">
        <img src={props.img} alt={props.name} className="card-img" />
      </div>*/
