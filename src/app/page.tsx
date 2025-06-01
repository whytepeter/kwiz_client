import SiteNav from "@/components/Layout/SiteNav";
import AllQuizzes from "@/components/Quiz/AllQuizzes";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto ">
      <SiteNav />
      <main className="px-4 py-6 container mx-auto">
        <AllQuizzes />
      </main>
    </div>
  );
}
