import ShopItem from "./ShopItem";

export default function ListView({ products }) {
  console.log(products);
  return (
    <ul className="view-list">
      {products.map((el, id) => (
        <ShopItem key={id} product={el} />
      ))}
    </ul>
  );
}
