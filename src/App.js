import "./styles.css";
import DropDownForm from "./DropDownForm.js";

function weekNumber(date = new Date()) {
  var firstJanuary = new Date(date.getFullYear(), 0, 1);
  var dayNr = Math.ceil((date - firstJanuary) / (24 * 60 * 60 * 1000));
  var weekNr = Math.ceil((dayNr + firstJanuary.getDay()) / 7);
  return weekNr;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {weekNumber()}
      <DropDownForm />
    </div>
  );
}
