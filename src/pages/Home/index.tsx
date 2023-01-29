import {
  AdvantagesOfBmg,
  CityContents,
  StoreHightLights,
} from "../../components";
import withLayout from "../../hocs";

function HomePage() {
  return (
    <>
      <AdvantagesOfBmg />
      <CityContents />
      <StoreHightLights />
    </>
  );
}

export default withLayout(HomePage);
