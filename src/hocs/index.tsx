import { Footer, InitialInfos } from "../components";

const withLayout =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    return (
      <>
        <InitialInfos />
        <Component {...props} />
        <Footer />
      </>
    );
  };

export default withLayout;
