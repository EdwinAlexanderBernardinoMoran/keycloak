import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';

import Keycloak from 'keycloak-js';

const keycloakOptions = {
  url: 'http://localhost:8080',
  realm: 'AthenaBitcoin',
  clientId: 'athena-btc'
}

function App() {

  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    const initKeycloak = async() => {
      const keycloakInstance = new Keycloak(keycloakOptions);
      try {
        await keycloakInstance.init({ onLoad: 'login-required' });
        setKeycloak(keycloakInstance);
        if (keycloakInstance.authenticated) {
          // User is authenticated
          console.log(keycloakInstance);
          
        }
      } catch (error) {
        console.error('Error initializing Keycloak:', error);
      }
    };
    initKeycloak();
  }, [])

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  }

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {
                keycloak && keycloak.authenticated ? (
                  <li class="nav-item">
                    <button class="btn btn-primary" onClick={handleLogout}>Logout</button>
                  </li>
                ) : null
              }
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        { keycloak && keycloak.authenticated ? (
          <>
            <h2>Welcome {keycloak.tokenParsed?.preferred_username}</h2>
            <h2 className='text-center'>React Search</h2>
            <SearchComponent />
          </>
        ) : (
          <>
            <h2 className='text-center'>Please Log In</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
