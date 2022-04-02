import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

export default function WhoIAm({ name, surname, link }) {
  const [years, setYears] = useState(26);

  return (
    <>
      <button onClick={() => setYears(years + 1)}>Add</button>
      <h1>
        My name is {name}, surname - {surname}, years = {years}
      </h1>
      <a href={link}>My profile</a>
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <WhoIAm name="Ben" surname="Cubin" link="https://instagram.com" />
      <WhoIAm name="Aered" surname="Cin" link="https://instagram.com" />
      <WhoIAm name="Snake" surname="Gekko" link="https://instagram.com" />
    </>
  </React.StrictMode>
);
