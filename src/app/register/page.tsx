import type { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Sign Up | AI Face Swap Studio",
  description: "Create an account to get your free trial credits for AI Face Swap Studio.",
};

export default function RegisterPage() {
  return <RegisterClient />;
}
