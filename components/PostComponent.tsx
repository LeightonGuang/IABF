import PostType from "@/_types/PostType";
import Image from "next/image";
import React from "react";

const PostComponent = ({ post }: { post: PostType }) => (
  <div>
    <h1>{post.title}</h1>

    <Image
      className="w-96 object-cover"
      unoptimized
      src={post.img_url}
      alt={post.title}
      width={0}
      height={0}
    />

    <p>{post.content}</p>
  </div>
);

export default PostComponent;
