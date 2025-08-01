import Login from "@/components/Login";
import Logout from "@/components/Logout";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/library/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section className="">

      <p className="font-bold text-xl">FROM CLIENT COMPONENTS</p>
      {session?.user ? (
        <div className="my-5 ">
          <UserInfo></UserInfo>
          <Logout></Logout>
        </div>
      ) : (
        <Login></Login>
      )}

      <p className="font-bold text-xl">FROM SERVER COMPONENTS</p>
      {JSON.stringify(session)}
    </section>
  );
}
