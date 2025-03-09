"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contents } from "@/data/contents";

const Login = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const keys = Object.keys(contents);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="my-4 text-xl">Welcome Detective</h1>

      <div className="flex w-11/12 flex-col gap-4">
        <Input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="placeholder:text-[#F0E8D9]"
        />
        <Input
          type="text"
          placeholder="Enter Detective Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="placeholder:text-[#F0E8D9]"
        />
      </div>

      <Button
        variant="outline"
        className="mt-4 border-none bg-[#F0E8D9] text-black"
        disabled={!keys.includes(code) || name === ""}
      >
        <Link href={`/${code}`}>Open File</Link>
      </Button>
    </div>
  );
};

export default Login;
