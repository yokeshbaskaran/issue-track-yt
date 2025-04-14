import Navbar from "@/Navbar";

type UserData = {
  name: string;
  age?: number;
};

export default function Home() {
  const user: UserData = {
    name: "Yoki",
    age: 20,
  };

  console.log("user", user);

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}
