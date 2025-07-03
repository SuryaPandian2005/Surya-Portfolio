import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const choices = ["rock", "paper", "scissors"];

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🎮 Game logic
  const play = (choice) => {
    if (gameOver) return;

    const comp = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("It's a draw!");
    } else if (
      (choice === "rock" && comp === "scissors") ||
      (choice === "paper" && comp === "rock") ||
      (choice === "scissors" && comp === "paper")
    ) {
      setResult("You win!");
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setResult("You lose!");
      if (newLives <= 0) setGameOver(true);
    }
  };

  // 🔄 Reset game
  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setLives(3);
    setGameOver(false);
  };

  // 🔊 Game over sound
  useEffect(() => {
    if (gameOver) {
      const sound = new Audio("projects/Scary.mp3"); // Correct path (from public/)
      sound.loop = true;

      setTimeout(() => {
        sound.play().catch((e) => {
          console.warn("Audio play failed:", e);
        });
      }, 100);

      return () => {
        sound.pause();
        sound.currentTime = 0;
      };
    }
  }, [gameOver]);

  // 🌓 Dark/light theme toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-black text-foreground dark:text-white flex flex-col items-center justify-center px-4 animate-fade-in relative">
      {/* 🌗 Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md transition duration-300"
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 🧠 Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-glow text-primary">
        Rock Paper Scissors
      </h1>

      {/* ❤️ Life Display */}
      <div className="mb-6 text-xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className="mx-1">
            {i < lives ? "❤️" : "🖤"}
          </span>
        ))}
      </div>

      {/* 🎮 Game Buttons */}
      {!gameOver ? (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => play(choice)}
              className="cosmic-button capitalize"
            >
              {choice}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center mb-8">
          <p className="text-2xl text-glow mb-4">💀 Game Over</p>
          <button onClick={resetGame} className="cosmic-button">
            🔄 Restart
          </button>
        </div>
      )}

      {/* 🧾 Game Result */}
      <div className="bg-card dark:bg-zinc-800 p-6 rounded-lg shadow card-hover w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2 text-glow">Game Result</h2>
        <p className="mb-1">
          You chose: <strong>{userChoice || "—"}</strong>
        </p>
        <p className="mb-1">
          Computer chose: <strong>{computerChoice || "—"}</strong>
        </p>
        <p className="mt-3 text-lg">{result}</p>
      </div>

      {/* ⬅️ Home Link */}
      <Link to="/" className="cosmic-button mt-8">
        ← Go Back Home
      </Link>

      {/* 💀 Demon Overlay */}
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center animate-flash">
          <img
            src="projects/demon.gif"
            alt="Demon"
            className="w-72 md:w-96 h-auto mb-6 animate-fade-in"
          />
          <p className="text-blood mb-6">THE DEMON GOT YOU!</p>
          <button onClick={resetGame} className="button-glow">
            🔄 Restart Game
          </button>
        </div>
      )}
    </div>
  );
}
