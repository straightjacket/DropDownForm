import "./styles.css";
import Chip from '@mui/material/Chip';
import DropDownForm from "./DropDownForm.js";

export default function App() {
  return (
    <div className="App">
      <h1>Date Utility</h1>
      <Chip variant="outlined" label="Get Numeric Value for Day, Week or Month"></Chip>
      <DropDownForm />
    </div>
  );
}
