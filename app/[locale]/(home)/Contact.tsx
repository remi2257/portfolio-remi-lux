"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
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

const Contact: React.FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations("home.contact");

  const { toast } = useToast();

  const FormSchema = z.object({
    name: z.string().min(1, t("name.error")).max(20),
    email: z.string().email(t("email.error")),
    subject: z.string().min(8, t("subject.error")).max(50),
    message: z.string().min(50, t("message.error")).max(4096),
  });
  type FormInput = z.infer<typeof FormSchema>;

  const form = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [mailSendState, setMailSendState] = useState<"sending" | "sent" | null>(
    null
  );

  async function onSubmit(formData: FormInput) {
    try {
      setMailSendState("sending");

      await sendMail(formData);
      toast({
        title: t("emailSentToast.title"),
        description: t("emailSentToast.description"),
        duration: 5000,
      });
      setMailSendState("sent");
    } catch (e) {
      toast({
        title: t("emailFailedToast.title"),
        description: t("emailFailedToast.title"),
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
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>

          <CardContent className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name.label")}</FormLabel>

                  <FormControl>
                    <Input placeholder={t("name.placeholder")} {...field} />
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
                  <FormLabel>{t("email.label")}</FormLabel>

                  <FormControl>
                    <Input placeholder={t("email.placeholder")} {...field} />
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
                  <FormLabel>{t("subject.label")}</FormLabel>

                  <FormControl>
                    <Input
                      placeholder={t("subject.placeholder")}
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
                  <FormLabel>{t("message.label")}</FormLabel>

                  <FormControl>
                    <Textarea
                      placeholder={t("message.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter>
            <Button disabled={mailSendState !== null}>
              {mailSendState === null && t("button.send")}
              {mailSendState === "sending" && (
                <>
                  {t("button.sending")}
                  <ImSpinner2 className="ml-2 size-4 animate-spin" />
                </>
              )}
              {mailSendState === "sent" && t("button.sent")}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default Contact;
