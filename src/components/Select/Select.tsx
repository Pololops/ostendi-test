import {useLocation} from 'react-router-dom';

type Props = {
  type: 'back' | 'forward';
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

type StepState = {
  id: string;
  label: string;
  path: string;
};

export default function Select({type, onChange}: Props) {
  const location = useLocation();

  return (
    <select
      name={type}
      title={type}
      className="select"
      onChange={onChange}
    >
      <option value="">{type}</option>
      {type === 'back' &&
        location.state &&
        location.state.map(({id, label, path}: StepState, index: number) => (
          <option key={`${id}-${index}`} value={path}>
            Navigation vers {label}
          </option>
        ))}
    </select>
  );
}
