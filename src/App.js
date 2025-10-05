import "./App.css";
import Board from "./components/Board";
import { boardDefault, generateWordSet } from "./Words";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import Rules from "./components/Rules";
import NavBar from "./components/NavBar";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordset, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const [rulesDisplay, setRulesDisplay] = useState(false);
  const [mode, setMode] = useState(true);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordset);
      setCorrectWord(words.todaysWord.toUpperCase());
      // console.log(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordset.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  const ToggleRules = () => {
    setRulesDisplay((rulesDisplay) => !rulesDisplay);
  };

  var rulesStyle = {};
  if (rulesDisplay) {
    rulesStyle.display = "none";
  }

  const ToggleMode = () => {
    setMode((mode) => !mode);
  };

  var modeLogo = {};
  if (mode) {
    modeLogo = "light_mode";
  } else {
    modeLogo = "dark_mode";
  }

  return (
    <>
      <div
        className="App"
        style={mode ? { background: "#1B2430" } : { background: "#FFE6E6" }}
      >
        <NavBar
          style={rulesStyle}
          ToggleRules={ToggleRules}
          ToggleMode={ToggleMode}
          modeLogo={modeLogo}
          mode={mode}
        />
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onSelectLetter,
            onDelete,
            onEnter,
            correctWord,
            disabledLetters,
            setDisabledLetters,
            setGameOver,
            gameOver,
            mode,
          }}
        >
          <div className="game">
            <Board mode={mode} />

            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </AppContext.Provider>
      </div>
      <div className="rules" style={rulesStyle}>
        <Rules ToggleRules={ToggleRules} mode={mode} />
      </div>
    </>
  );
}

export default App;
