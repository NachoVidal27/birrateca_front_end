import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="mt-12">
      <h1
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Home?
      </h1>
      <h2 className="font-bold">
        En este momento, el tema que tenemos es: {theme}
      </h2>
    </div>
  );
}

export default Home;
