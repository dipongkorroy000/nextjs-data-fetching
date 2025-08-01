"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search, pathname, router]);

  return (
    <div className="w-fit mx-auto">
      <input
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-600 p-3 rounded-lg"
        placeholder="Search your meal"
      ></input>
    </div>
  );
}
