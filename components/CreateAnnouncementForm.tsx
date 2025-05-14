"use client";

import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import insertPost from "@/app/actions/insertPost";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";

const CreateAnnouncementForm = () => {
  const formSchema = z.object({
    title: z
      .string()
      .min(2)
      .max(50)
      .refine((val) => val.length > 0, { message: "Title is required" }),
    img_url: z
      .string()
      .url()
      .refine((val) => val.startsWith("http"), {
        message: "Invalid URL format",
      }),
    content: z
      .string()
      .min(2)
      .max(500)
      .refine((val) => val.length > 0, { message: "Content is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      img_url: "",
      content: "",
    },
  });

  const onSubmit = async () => {
    const { data, error } = await insertPost({
      title: form.getValues("title"),
      img_url: form.getValues("img_url"),
      content: form.getValues("content"),
    });

    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <Card className="h-max w-max p-6">
      <CardContent className="p-0">
        <Form {...form}>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="img_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Image URL" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Announcement</FormLabel>
                  <FormControl>
                    <Input
                      type="textarea"
                      placeholder="Announcement content"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>

      <CardFooter className="p-0">
        <Button className="hover:cursor-pointer" onClick={onSubmit}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAnnouncementForm;
