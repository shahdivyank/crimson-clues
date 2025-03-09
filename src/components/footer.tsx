"use client";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface props {
  id: string;
  offset: number;
}

const Footer = ({ id, offset }: props) => {
  const searchParams = useSearchParams();
  const destruct = searchParams.get("destruct") || "false";

  if (destruct !== "true")
    return (
      <CardFooter className="flex-col text-center">
        {offset === 0 && (
          <p>
            You are a detective. You are to keep working until this case is
            solved. Obstacles may arise during the case, but you must keep a
            clear head and move forward. If you do not, you will be dropped from
            the department, this is just more than a case to you now. This is
            everything. Once you understand your role, please click the self
            destruct button to remove this message.
          </p>
        )}

        {offset === 1 && (
          <p>
            You are an acomplice to the murderer. If the detectives find out you
            were involved, you will spend the rest of your life in jail. Your
            goal is to slow down the investigation and ensure the murderer is
            able to get away. Once you understand your role, please click the
            self destruct button to remove this message.
          </p>
        )}

        {offset === 2 && (
          <p>
            You are the murderer. If the detectives find out you were involved,
            you will spend the rest of your life in jail. Your goal is to slow
            down the investigation and ensure you are able to get away. Once you
            understand your role, please click the self destruct button to
            remove this message.
          </p>
        )}

        <Button
          variant="default"
          className="mt-4 border-none bg-[#333333] text-white"
        >
          <Link href={`${id}?destruct=true`}>Self Destruct</Link>
        </Button>
      </CardFooter>
    );
};

export default Footer;
