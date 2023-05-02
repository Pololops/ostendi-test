import './Input.css';

type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({name, value, onChange}: Props) {
  return <input type="text" title="path" name={name} value={value} onChange={onChange} />;
}
