import { Test } from "../../components/InitialInfos/styles";
import { InitialInfos } from "../../components";

export function Home() {
  return (
    <main>
      <InitialInfos />
      <Test
        initial={{ x: "-100%", opacity: 0.2 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
      />
    </main>
  );
}
