"use client";
import { useGetProductByNameQuery } from "@/store/slice/api";
import { UserData } from "@/app/types";
import MainPage from "./pages/mainpage/page";
import MyLoader from "./loader";

export default function Home() {
  const { data } = useGetProductByNameQuery("");
  if (!data) {
    return <div><MyLoader/></div>;
  }
  return (
    <main>
      <MainPage/>
    </main>
  );
}
