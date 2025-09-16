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
import { loginSchema } from "@/lib/zodSchema";
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
import { Icons } from "@/app/helpers/iconprovider";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
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
        <div className="flex items-center justify-center flex-col">
          <CardTitle className={"font-bold text-2xl"}>
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </div>
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
                    <FormLabel className={"text-base"}>Email</FormLabel>
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
                    <FormLabel className={"text-base"}>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className={"text-base"}
                          type={isTypePassword ? "password" : "text"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <div
                          onClick={() => {
                            setIsTypePassword(!isTypePassword);
                            console.log("ok");
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                        >
                          {isTypePassword ? (
                            <Icons.FaRegEyeSlash />
                          ) : (
                            <Icons.FaRegEye />
                          )}
                        </div>
                      </div>
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
        <div className="mt-4 text-center text-base text-gray-600">
          Don't have an account?{" "}
          <Button
            variant="link"
            className="p-0"
            onClick={() => console.log("Redirect to Sign Up page")}
          >
            Sign Up
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
