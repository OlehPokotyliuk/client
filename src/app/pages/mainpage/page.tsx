"use client";
import { useGetProductByNameQuery } from "@/store/slice/api";
import { UserData } from "@/app/types";
import MainPage from "./pages/mainpage/page";

export default function Home() {
  const { data } = useGetProductByNameQuery("");
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <MainPage/>
    </main>
  );
}
