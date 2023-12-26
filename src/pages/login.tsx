import { LoginSchema } from "@/common/validation/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
const Signin = () => {
  const [login, setLogin] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const { mutateAsync, isLoading } = api.auth.signup.useMutation();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    if (login) {
      setSigningIn(true);
      const res = await signIn("credentials", {
        ...values,
        callbackUrl: "/",
        redirect: false,
      });
      if (res && res.status === 401) {
        setSigningIn(false);
        toast.error("Credentials error");
      } else {
        router.replace("/");
      }
    } else {
      await mutateAsync(values, {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    }
  };
  return (
    <main className="m-auto flex min-h-screen w-[22%] flex-col items-center justify-center gap-2">
      <p className="text-xl text-muted-foreground">
        {login ? "Log In" : "Sign Up"}
      </p>
      <Form {...form}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void form.handleSubmit(onSubmit)(event);
          }}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size={"lg"}>
            {isLoading || signingIn ? (
              <Loader className="animate-spin" size={18} />
            ) : (
              <>{login ? "Log In" : "Sign Up"}</>
            )}
          </Button>
        </form>
      </Form>
      <Button
        variant={"ghost"}
        className="w-full"
        size={"lg"}
        onClick={() => setLogin((v) => !v)}
      >
        {!login
          ? "Already have an account? Login"
          : "Don't have an account? Sign up"}
      </Button>
    </main>
  );
};

export default Signin;
