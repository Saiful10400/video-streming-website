import log from "./img/logo.png"

const Header = () => {
    return (
        <div className="w-full flex justify-center py-3 bg-black sticky top-0">
            
            <img className="w-[15%]" src={log} alt="this is logo" />
            
        </div>
    );
};

export default Header;