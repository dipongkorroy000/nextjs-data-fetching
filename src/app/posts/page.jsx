import Link from "next/link";
import React from "react";
import style from "./post.module.css";

export const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  return data;
};

export const metadata = {
  title: "All Posts",
  description: "Loading JSON placeholder posts using server components in Next.js",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="gap-4 grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 w-5/6 mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-xl">
          <h2 className={`text-lg font-bold ${style["post-title"]}`}>{post.title}</h2>
          <p className="text-sm mb-2 testing-purpose-css-class ">{post.body}</p>
          <Link href={`/posts/${post.id}`} className="px-3 py-1 rounded-xl border ">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
