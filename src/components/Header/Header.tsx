import Input from '../Input/Input';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <form className='header__form'>
        <Input />
      </form>
    </header>
  );
}
