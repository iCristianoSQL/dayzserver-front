import { AdvantagesOfBmg, CityContents } from "../../components";
import withLayout from "../../hocs";

function HomePage() {
  return (
    <>
      <AdvantagesOfBmg />
      <CityContents />
    </>
  );
}

export default withLayout(HomePage);
