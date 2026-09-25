import { Suspense } from "react";
import Banner from "./components/Banner";
import Library from "./components/Library/Library";
import Loading from "./components/shared/Loading";

export default function Home() {
  return (
    <div className="w-full max-w-300 mx-auto px-5 min-h-screen">
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <Library></Library>
      </Suspense>
    </div>
  );
}
