import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import viewList from "./images/view_list_black_24dp.svg";
import viewModule from "./images/view_module_black_24dp.svg";
import "./css/store.css";
import ListView from "./ListView";

export default function Store() {
  const icons = [viewList, viewModule];
  const [state, setState] = useState(0);
  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  return (
    <div className="store">
      <div className="store-wrap">
        <div className="store-header">
          <IconSwitch props={{ icons, icon: state, onSwitch: setState }} />
        </div>
        <div className="store-main">
          {state === 0 ? (
            <ListView products={products} />
          ) : (
            <CardsView products={products} />
          )}
        </div>
      </div>
    </div>
  );
}
