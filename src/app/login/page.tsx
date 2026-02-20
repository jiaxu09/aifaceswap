import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Log In | AI Face Swap Studio",
  description: "Sign in to your AI Face Swap Studio account to use credits and process media.",
};

export default function LoginPage() {
  return <LoginClient />;
}
