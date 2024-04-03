import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({
  items,
  onDelteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItmes;

  if (sortBy === "input") sortedItmes = items;

  if (sortBy === "description")
    sortedItmes = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItmes = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItmes.map((item) => (
          <Item
            item={item}
            key={item.key}
            onDelteItems={onDelteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list </button>
      </div>
    </div>
  );
}
