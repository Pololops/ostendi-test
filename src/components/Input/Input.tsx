import './Input.css';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({value, onChange}: Props) {
  return <input type="text" value={value} onChange={onChange} />;
}
