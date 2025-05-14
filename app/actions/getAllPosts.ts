"use server";

import PostType from "@/_types/PostType";
import { createClient } from "@/utils/supabase/server";

const getAllPosts = async (): Promise<{
  data: PostType[] | null;
  error: string;
}> => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase.from("post").select("*");

    if (data) return { data, error: "" };
    if (error) return { data: null, error: error.message };
    if (!data) return { data: null, error: "No posts found" };
  } catch (error) {
    console.error(error);
  }
  return { data: [], error: "Error" };
};

export default getAllPosts;
