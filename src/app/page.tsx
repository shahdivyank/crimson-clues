import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-[#F0E8D9]">
      <div className="w-5/6 text-center">
        <h1 className="text-2xl font-semibold">Crimson Clues</h1>
        <br />
        <p>
          Three months ago, Katie’s life was stolen from her, and the truth of
          her death remains shrouded in darkness. The cause of her demise is a
          mystery, her murderer still at large, and the weapon that ended her
          life has vanished without a trace. Despite relentless efforts, the
          detectives have come up empty, left with nothing but a string of
          cryptic, anonymous tips that lead to dead ends—until now.
        </p>
        <br />
        <p>
          A chilling new tip has just surfaced: the killer is preparing to flee
          the country in the next 45 minutes. Time is running out. If the truth
          isn't uncovered before they slip away into the shadows, Katie’s death
          will forever go unanswered. The higher-ups are pushing for the case to
          be closed, citing a lack of solid evidence, but the detectives know
          something sinister is at play. Can you unravel the tangled web of lies
          and uncover the murderer’s identity before they disappear forever?
        </p>

        <Button
          variant="outline"
          className="mt-4 border-none bg-[#F0E8D9] text-black"
        >
          <Link href="/login">Accept the Case</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
