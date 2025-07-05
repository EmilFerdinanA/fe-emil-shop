"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/app/login/service";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  password: string;
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      router.replace("dashboard");
      console.log("Login successful:", data);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Username</Label>
          <Input
            id="email"
            type="text"
            placeholder="m@example.com"
            {...register("username")}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
