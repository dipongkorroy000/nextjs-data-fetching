import React from "react";

export async function getSinglePost(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
  return data;
}

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // optionally access and extend (rather than replace) parent metadata
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export default async function SinglePost({ params }) {
  const { id } = await params;
  const post = await getSinglePost(id);

  console.log("SinglePost", post);

  return (
    <div className="w-4/6 my-10 border border-gray-600 p-4 rounded-xl  flex flex-col mx-auto">
      SinglePost : {id}
      <h2>Title : {post.title}</h2>
      <p>Body : {post.body}</p>
    </div>
  );
}
