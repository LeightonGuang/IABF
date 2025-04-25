"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const CreateAnnouncementForm = () => {
  const formSchema = z.object({
    title: z.string().min(2).max(50),
    imageUrl: z.string().url(),
    announcement: z.string().min(2).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      announcement: "",
    },
  });

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
              name="imageUrl"
              render={() => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Image URL" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="announcement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Announcement</FormLabel>
                  <FormControl>
                    <Input
                      type="textarea"
                      placeholder="Announcement message"
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
        <Button className="hover:cursor-pointer">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAnnouncementForm;
