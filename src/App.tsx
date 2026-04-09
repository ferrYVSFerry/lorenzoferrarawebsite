/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CreazioneSitiWeb from './pages/CreazioneSitiWeb';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servizi/creazione-siti-web" element={<CreazioneSitiWeb />} />
          <Route path="servizi/:serviceId" element={<ServicePage />} />
          <Route path="contatti" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
