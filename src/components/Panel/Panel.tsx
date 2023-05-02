import Input from '../Input/Input';

type Props = {
  isActive: boolean;
};

export default function Panel ({isActive}: Props) {
  return isActive ? (
    <div className="panel">
      <form className="panel__form">
        <Input
          name="id"
          value=""
          onChange={() => {
            return;
          }}
        />
        <Input
          name="label"
          value=""
          onChange={() => {
            return;
          }}
        />
      </form>
    </div>
  ) : null;
}
