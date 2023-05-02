type Props = {
  type: 'back' | 'forward';
  state: State;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function Select({type, state, onChange}: Props) {
  return (
    <select name={type} title={type} className="select" onChange={onChange}>
      <option value="">{type}</option>
      {state.map((link, index: number) => (
        <option key={`${link.id}-${index}`} value={link.key}>
          Navigation vers {link.label}
        </option>
      ))}
    </select>
  );
}
