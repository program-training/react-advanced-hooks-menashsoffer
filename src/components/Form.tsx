import { useLocalStorage } from "../hooks/FormHook";
import { Button, TextField } from "@mui/material";

const Form = () => {
  const [storedValue, setValue, deleteValue] = useLocalStorage("name", "");

  const handleSave = () => {
    setValue("John");
  };

  const handleDelete = () => {
    deleteValue();
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Full name"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSave}>Save Name</Button>
      <Button onClick={handleDelete}>Remove Name</Button>
    </form>
  );
};

export default Form;
