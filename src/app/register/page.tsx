import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Sign Up | AI Face Swap Space",
  description: "Create an account to get your free trial credits for AI Face Swap Space.",
};

export default function RegisterPage() {
  return <RegisterClient />;
}
