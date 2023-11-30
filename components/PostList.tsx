import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { postType } from "@/types/types";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 grid-flow-row ">
      {data.map((post: postType) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
