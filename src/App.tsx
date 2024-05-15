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
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);

  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      <Select
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select
        multiple
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </>
  );
}
