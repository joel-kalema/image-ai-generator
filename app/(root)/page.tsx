import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
