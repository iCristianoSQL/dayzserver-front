import { DescriptiveComponent, SectionForPage } from "../../components";
import withLayout from "../../hocs";

function HomePage() {
  return (
    <SectionForPage>
      <DescriptiveComponent />
    </SectionForPage>
  );
}

export default withLayout(HomePage);
