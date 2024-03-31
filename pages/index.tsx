import { RootState } from "@/lib/store";
import { decrement, increment } from "@/lib/store/slices/counterSlice";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const StoreProvider = dynamic(
  () => import("@/lib/store").then((m) => m.StoreProvider),
  { ssr: false }
);

function HomeComponent() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <Link href={"/count"}>count</Link>
    </div>
  );
}

export default function Home() {
  return (
    <StoreProvider key="home-page">
      <HomeComponent />
    </StoreProvider>
  );
}
