import { MainImage } from "../../components";
import { Test } from "../../components/MainImage/styles";

export function Home() {
  return (
    <main>
      {/* <MainImage /> */}
      <Test
        initial={{ x: "-100%", opacity: 0.2 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
      />
    </main>
  );
}
