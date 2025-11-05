import React from "react";

// 👇 Add this before the component to avoid TypeScript error
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function App() {
  const handleClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Download App",
      });
      console.log("GA event sent ✅");
    } else {
      console.warn("gtag not ready ⚠️");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Hello from Masala Mitra!</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#f97316",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Download App
      </button>
    </div>
  );
}

export default App;
