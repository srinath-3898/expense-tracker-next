"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpenseItem from "@/components/expenseItem/ExpenseItem";

export default function Home() {
  const items = Array.from({ length: 100 }, (_, index) => (
    <ExpenseItem key={index} expenseLocation={"Hyderabad"} />
  ));
  return <div>{items}</div>;
}
