import React from "react";

function NavBar(props) {
  return (
    <nav>
      <h1 style={props.mode ? { color: "white" } : { color: "#354259" }}>
        Word<span className="le" style={props.mode ? { color: "#efe255" } : { color: "#FF5D5D" }}>le</span>
      </h1>
      <div className="toggle" onClick={props.ToggleMode} style={props.mode ? { background:"#1B2430" } : { background: "#FFE6E6" , color:"#121212"}}>
        <span class="material-symbols-sharp">{props.modeLogo}</span>
      </div>
      <button className="help" onClick={props.ToggleRules} style={props.mode ? { background:"#1B2430" } : { background: "#FFE6E6" , color:"#121212"}}>
        <span class="material-symbols-sharp">help</span>
      </button>
    </nav>
  );
}

export default NavBar;
