import Layout from "./Components/layout";
import ModalProvider from "./Providers/ModalProvider";
import Theme from "./Providers/Theme";

const App = () => {
  return (
    <Theme>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </Theme>
  );
};

export default App;
