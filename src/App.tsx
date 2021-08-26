import Layout from "./Components/Layout";
import Theme from "./Providers/Theme";
import theme from "./shared/theme";

const App = () => {
  return (
    <Theme>
      <Layout />
    </Theme>
  );
};

export default App;
