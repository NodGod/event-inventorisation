import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { WithNav, WithoutNav } from "./components/";

import OrganiserListView from "./views/Organiser/OrganiserListView";
import HomeView from "./views/Home/HomeView";
import EventListView from "./views/Event/EventListView";
import ItemListView from "./views/Item/ItemListView";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/organisers" element={<OrganiserListView />} />
            <Route path="/events" element={<EventListView />} />
            <Route path="/items" element={<ItemListView />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;