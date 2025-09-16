"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { loginSchema } from "@/app/lib/zodSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ButtonLoading } from "@/components/Application/ButtonLoading";
import z from "zod";
import { useState } from "react";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const formSchema = loginSchema
    .pick({
      email: true,
    })
    .extend({ password: z.string().min("3", "Password field is required") });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitLoginSubmit = (values) => {
    console.log("form submitted", values);
  };
  return (
    <Card className="w-full max-w-[450px]">
      <div className="flex items-center justify-center">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="max-w-[150px]"
        />
      </div>
      <CardHeader>
        <CardTitle className={"font-bold text-2xl"}>
          Login to your account
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitLoginSubmit)}
            className="space-y-8"
          >
            <div className="mb-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type={"email"}
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type={"password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-8">
              <ButtonLoading
                className="w-full cursor-pointer"
                type={"submit"}
                text={"Login"}
                loading={loading}
              />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
