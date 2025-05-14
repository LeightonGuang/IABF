"use client";

import { useEffect, useState } from "react";
import getAllPosts from "@/app/actions/getAllPosts";
import PostComponent from "@/components/PostComponent";

import PostType from "@/_types/PostType";

const PostPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    try {
      const { data, error } = await getAllPosts();

      if (data) {
        setPosts(data);
      }

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post, i) => (
        <PostComponent key={i} post={post} />
      ))}
    </>
  );
};

export default PostPage;
