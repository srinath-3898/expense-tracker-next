"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpenseItem from "@/components/expenseItem/ExpenseItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const handleDelete = (index) => {
    console.log(items);
    const updatedItems = items.filter((item) => item !== index);
    setItems(updatedItems);
  };
  useEffect(() => {
    setItems(Array.from({ length: 100 }, (_, index) => index));
  }, []);

  return (
    <div>
      {items.map((item, i) => (
        <ExpenseItem
          key={item}
          index={i}
          expenseLocation={"Hyderabad"}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
