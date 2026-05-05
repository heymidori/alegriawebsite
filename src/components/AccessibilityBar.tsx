import { useState } from 'react';

export default function AccessibilityBar() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleLargeText = () => {
    const next = !largeText;
    setLargeText(next);
    document.body.classList.toggle('large-text', next);
  };

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.body.classList.toggle('high-contrast', next);
  };

  return (
    <div className="a11y-bar" role="toolbar" aria-label="Opciones de accesibilidad">
      <button className="a11y-btn" onClick={toggleLargeText} aria-label="Texto grande" aria-pressed={largeText}>
        🔤 Texto Grande
      </button>
      <button className="a11y-btn" onClick={toggleHighContrast} aria-label="Alto contraste" aria-pressed={highContrast}>
        ◑ Contraste
      </button>
    </div>
  );
}
