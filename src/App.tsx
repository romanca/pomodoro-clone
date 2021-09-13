import Layout from "./Components/layout";
import ModalProvider from "./Providers/ModalProvider";
import Theme from "./Providers/Theme";

const App = () => {
  return (
    <ModalProvider>
      <Theme>
        <Layout />
      </Theme>
    </ModalProvider>
  );
};

export default App;
