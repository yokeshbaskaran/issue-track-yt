import Issue from "@/components/Issue";
import Navbar from "@/Navbar";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Theme>
        <Navbar />
        <Issue />
      </Theme>
    </>
  );
}
