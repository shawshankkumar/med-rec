"use client";
import { useState } from "react";
import { TableData } from "./Table";

export const InputArea = () => {
  const [medicine, setMedicine] = useState("");
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    fetch("/api?name=" + medicine).then((res) => {
      res.json().then((e) => {
        setSearch(e.data);
        setLoading(false);
      });
    });
  }

  return (
    <>
      <div className="flex flex-col space-y-6 mt-64">
        <input
          className="w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full text-black"
          placeholder="Medicine Name"
          onChange={(e) => setMedicine(e.target.value)}
        />
        {!loading && <button
          className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full text-black"
          onClick={handleSubmit}
        >
          Search Medicine
        </button>}
        {loading && <button
          className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full text-black"
        >
          Searching Medicine...
        </button>}
      </div>
      <TableData search={search} />
    </>
  );
};
