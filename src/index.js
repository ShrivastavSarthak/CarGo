import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./component/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-tu3snr8c6ar8y7lj.us.auth0.com"
    clientId="xN62eCqzUrdcAZJBXNiYHqEgvODNWCNP"
    redirectUri={window.location.origin}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
