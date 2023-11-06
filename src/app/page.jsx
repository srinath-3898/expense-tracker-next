"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ExpenseItem from "@/components/expenseItem/ExpenseItem";

export default function Home() {
  return <ExpenseItem />;
}
