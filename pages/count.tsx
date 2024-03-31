import { RootState } from "@/lib/store";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelector } from "react-redux";

const StoreProvider = dynamic(
  () => import("@/lib/store").then((m) => m.StoreProvider),
  { ssr: false }
);

function CountComponent() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div>{count}</div>
      <Link href={"/"}>home</Link>
    </div>
  );
}

export default function Count() {
  return (
    <StoreProvider key="count-page">
      <CountComponent />
    </StoreProvider>
  );
}
