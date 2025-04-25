import CardList from "@/components/cardList/cardList";
import CategoryList from "@/components/categoryList/categoryList";
import Featured from "@/components/featured/featured";
import Menu from "@/components/menu/menu";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </main>
  );
}