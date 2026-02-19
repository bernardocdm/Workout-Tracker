import { useEffect, useState } from "react";
import { getItems } from "../services/api";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => {
      setItems(data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Items</h1>

      {items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
