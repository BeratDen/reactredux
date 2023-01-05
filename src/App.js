import { AuthProvider, SiteProvider } from "./context";

import Home from "./Home/Home";

function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
