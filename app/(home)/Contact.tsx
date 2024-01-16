"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { z } from "zod";

import { sendMail } from "@/actions/sendMail";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(1).max(20),
  email: z.string().email(),
  subject: z.string().min(8, "Subject should be at least 8 characters").max(50),
  message: z
    .string()
    .min(50, "Message should be at least 50 characters")
    .max(4096),
});
type FormInput = z.infer<typeof FormSchema>;

const Contact: React.FC<{ className?: string }> = ({ className }) => {
  const { toast } = useToast();

  const [mailSendState, setMailSendState] = useState<"sending" | "sent" | null>(
    null
  );

  const form = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(formData: FormInput) {
    try {
      setMailSendState("sending");
      await sendMail(formData);
      toast({
        title: "Email sent",
        description: "I will get back to you as soon as possible.",
        duration: 5000,
      });
      setMailSendState("sent");
    } catch (e) {
      toast({
        title: "Failed to send email",
        description:
          "Contact me directly on LinkedIn or Instagram if you want to get in touch with me.",
        duration: 5000,
        variant: "destructive",
      });
      setMailSendState(null);
    }
  }

  return (
    <Card id="contact" className={cn("", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              A question? A project? A partnership? Feel free to contact me!
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Subject</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Message</FormLabel>

                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter>
            <Button disabled={mailSendState !== null}>
              {mailSendState === null && "Send"}
              {mailSendState === "sending" && (
                <>
                  Sending
                  <ImSpinner2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              )}
              {mailSendState === "sent" && "Sent"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default Contact;
