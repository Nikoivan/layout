import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  const { sortType, products } = cards;

  return (
    <ul className="card-list">
      {products.map((el, id) => (
        <ShopCard key={id} props={el} />
      ))}
    </ul>
  );
}
