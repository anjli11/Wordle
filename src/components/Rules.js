import React from "react";

function Rules(props) {
  return (
    <div className="rules-container" style={props.mode ? { background:"#3C415C" } : { background: "#FFDEB4" , color:"#121212"}}>
      <div className="rules-top">
        <h3>HOW TO PLAY</h3>
        <button className="close" onClick={props.ToggleRules} style={props.mode ? { background:"#3C415C" } : { background: "#FFDEB4" , color:"#121212"}}>
          <span class="material-symbols-sharp" >close</span>
        </button>
      </div>
      <div className="rules-body">
        <div className="rules-body-intro">
          <h4>
            Guess the <b>WORDLE</b> in six tries.
          </h4>
          <h4>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </h4>
          <h4>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </h4>
        </div>
        <div className="rules-body-examples">
          <h4>
            <b>Examples</b>
          </h4>
          <div className="r-b-example">
            <div className="word">
              <span id="correct" className="letter">
                W
              </span>
              <span className="letter">O</span>
              <span className="letter">R</span>
              <span className="letter">L</span>
              <span className="letter">D</span>
            </div>
            <h4>
              The letter <b>W</b> is in the word and in the correct spot.
            </h4>
          </div>
          <div className="r-b-example">
            <div className="word">
              <span className="letter">T</span>
              <span id="almost" className="letter">
                R
              </span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">K</span>
            </div>
            <h4>
              The letter <b>R</b> is in the word but in the wrong spot.
            </h4>
          </div>
          <div className="r-b-example">
            <div className="word">
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">G</span>
              <span id="error" className="letter">
                U
              </span>
              <span className="letter">E</span>
            </div>
            <h4>
              The letter <b>U</b> is not in the word in any spot.
            </h4>
          </div>
        </div>
        <h4>
          <b>A new WORDLE will be available each reload!</b>
        </h4>
      </div>
    </div>
  );
}

export default Rules;
