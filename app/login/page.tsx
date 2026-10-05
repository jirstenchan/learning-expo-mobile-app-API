import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto w-full max-w-lg px-6 py-12">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <p className="mt-2 text-neutral-600">
        Sign in to view your customer ledger, or create a client account.
      </p>
      <LoginForm />
    </main>
  );
}
