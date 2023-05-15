
import GuessGame from "./components/guessGame/GuessGame";
import ToDoBasic from "./components/todoBasic/ToDoBasic";
import Khichuri from "./components/khichuri/Khichuri";
import ToDoFirebaseRealTime from "./components/todoFirebaseRealTime/ToDoFirebaseRealTime";

function App() {

  return (
    <>
      <ToDoBasic />
      <ToDoFirebaseRealTime />
      <Khichuri />
      <GuessGame />
    </>
  );
}

export default App;
