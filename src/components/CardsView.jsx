import ShopCard from "./ShopCard";

export default function CardsView({ products }) {
  return (
    <ul className="card-list">
      {products.map((el, id) => (
        <ShopCard key={id} props={el} />
      ))}
    </ul>
  );
}
