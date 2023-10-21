"use client";
import { useGetProductByNameQuery } from "@/store/slice/api";
import MainPage from "./pages/mainpage/page";
import MyLoader from "./loader";


export default function Home() {
  const { data } = useGetProductByNameQuery("");
  if (!data) {
    return <div className="container" style={{ display: "flex", justifyContent:"center"}}><MyLoader/></div>;
  }
  return (
    <main>
      <MainPage/>
    </main>
  );
}
