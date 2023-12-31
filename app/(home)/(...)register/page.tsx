import {
  Dialog,
  DialogContent,
  InterceptedDialogContent,
} from "@/components/ui/dialog";
import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";
import { Icons } from "@/components/icons";

export default function Test() {
  return (
    <div className="transition-all">
      <Dialog open>
        <InterceptedDialogContent>
          <div className="lg:p-8 mx-auto">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <Icons.logo className="mx-auto h-6 w-6" />
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm />

              <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                  href="/login"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Already have an account? Sign in
                </Link>
              </p>

              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/register"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/register"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </InterceptedDialogContent>
      </Dialog>
    </div>
  );
}
