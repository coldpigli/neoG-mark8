import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };

  const [answer, setAnswer] = useState("Translation will appear here..");
  const [inputText, setInputText] = useState("");

  const emojiList = Object.keys(emojiDictionary);

  const onButtonClick = () => {
    if (inputText in emojiDictionary) {
      setAnswer(emojiDictionary[inputText]);
    } else {
      setAnswer("I'm afraid we don't have it's data");
    }
  };

  return (
    <div className="App">
      <h1>Emoticon Interpreter</h1>
      <div className="container">
        <input
          className="inputter"
          placeholder="Place your emoji here"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button onClick={onButtonClick}>Translate</button>
        <h3>{answer}</h3>
        {emojiList.map((emoji, index) => {
          return (
            <span
              className="emoji"
              onClick={() => {
                setAnswer(emojiDictionary[emoji]);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
