"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpenseItem from "@/components/expenseItem/ExpenseItem";
import { useEffect, useState } from "react";
import ExpenseForm from "@/components/expenseForm/ExpenseForm";

export default function Home() {
  const [items, setItems] = useState([]);
  const handleDelete = (index) => {
    console.log(items);
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };
  useEffect(() => {
    setItems(Array.from({ length: 100 }, (_, index) => index));
  }, []);

  return (
    <div>
      <ExpenseForm />
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
