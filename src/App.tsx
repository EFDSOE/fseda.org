import AppProvidersWrapper from "./components/wrappers/AppProvidersWrapper";
import AppRoutes from "./routes";
import "@/assets/css/style.css";

const App = () => {
  return (
    <AppProvidersWrapper>
      <AppRoutes />
    </AppProvidersWrapper>
  );
};

export default App;
