import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Contatos from "./components/contacts";
import NewContact from "./components/newContact";
import { Provider } from "react-redux";
import { store } from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Contatos />
              </>
            }
          />

          <Route
            path="/novoContato"
            element={
              <>
                <Header />
                <NewContact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
