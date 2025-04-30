import React from 'react';

function Accessibility() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Keyboard Accessibility</h2>
      <p>
        This site is fully navigable using a keyboard. You can move between interactive elements using the <strong>Tab</strong> key, and activate buttons or links using the <strong>Enter</strong> or <strong>Spacebar</strong>.
      </p>
      <p>Keyboard support is especially focused on the following:</p>
      <ul>
        <li>Navigation bar buttons are reachable via Tab and can be activated with Enter.</li>
        <li>All action buttons (like “Shuffle” and “Alphabetize”) use native HTML elements with full keyboard support.</li>
        <li>The “Things to Read” section can be tabbed through for quick access.</li>
      </ul>
    </div>
  );
}

export default Accessibility;
