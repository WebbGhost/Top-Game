import Logo from '../Logo/Logo';
import logo from '../assets/logo.webp';
// import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = () => {
    return (
        <div className="p-10">
            <Logo />
            {/* <SearchInput onSearch={onSearch} /> */}
            {/* <ColorModeSwitch /> */}
        </div>
    );
};

export default NavBar;
