"use server";

import PostType from "@/_types/PostType";
import { createClient } from "@/utils/supabase/server";

const insertPost = async (
  post: PostType,
): Promise<{ data: PostType[] | null; error: string | null }> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.from("post").insert(post);

    if (data) return { data, error: null };
    if (error) return { data: null, error: error.message };
    if (!data) return { data: null, error: "No response from supabase" };
  } catch (error) {
    console.error(error);
  }
  return { data: null, error: "Error with insert post function" };
};

export default insertPost;
