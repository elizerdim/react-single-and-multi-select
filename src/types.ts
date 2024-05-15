export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};