import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const x = "sss";

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransfor: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pissas = pizzaData;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {/*pissas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )*/}
      {/* condtion rendering using ternary operator
       */}
      {pissas.length > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine . 6 creative dishes tochoose from.All from
            our stone oven, all organic, all dishes.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we're still working on our menu please came back later :)</p>
      )}

      {/*<Pizza
        name="Pizza spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />*/}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // console.log(props);
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>pizzaObj.price + 3</span>
        )}
        {/*        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
         */}{" "}
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 15;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen && "ds");
  //si fisr value True passe to the second value
  // if (hour >= openHour && closeHour <= 22) alert("we'are curren,tly open!");
  // else alert("Sorry we are closed");
  if (!isOpen)
    return (
      <p>we're open until {closeHour}:00.come visit us or order online. </p>
    );
  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour} />}
      {/*

      {new Date().toLocaleTimeString()}.we are currently open
      */}
    </footer>
  );
  //return React.createElement("footer", null, "we are currently open ");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        we're open until {props.closeHour}:00.Come visit us or order online.
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

//const Test = () =>

//React Before 18
//React.render(<App />);
