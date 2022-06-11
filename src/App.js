import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Сырная" price={950} />
            <PizzaBlock title="Итальянская" price={1250} />
            <PizzaBlock title="Грибная" price={700} />
            <PizzaBlock title="4 Сыра" price={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
