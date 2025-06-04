'use client';
import { useState } from "react";
import "@/app/globals.css";

export default function IngredientsBox({ ingredients }) {
  const [persons, setPersons] = useState(4);

  const increase = () => setPersons(p => p + 1);
  const decrease = () => setPersons(p => (p > 1 ? p - 1 : 1));

  return (
    <div className="ingredients-box">
      <div className="ingredients-header">
        <h2>Ingredients</h2>
        <div className="person-counter">
          <button onClick={decrease}>−</button>
          <span>{persons} pers</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <ul>
        {ingredients.map((item, i) => {
          const total = Math.round(item.amountPerPerson * persons * 10) / 10;
          return (
            <li key={i}>
              {total > 0 ? `${total}${item.unit ? ` ${item.unit}` : ''} ` : ''}
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
