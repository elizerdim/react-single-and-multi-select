import { useState } from "react";
import { SelectOption } from "./types";
import Select from "./Select";

const options: SelectOption[] = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

export default function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <Select
      options={options}
      value={value}
      onChange={(o: SelectOption | undefined) => setValue(o)}
    />
  );
}
