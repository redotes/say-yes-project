import React from 'react';

interface HeaderProps {
    TitleName : string;
    buttonName : string[];
}

const Header : React.FC<HeaderProps> = ({TitleName , buttonName }) => {
    const handleonClick = () => {

    }
    return (
        <div>
            <h1>{TitleName}</h1>
            <button onClick={handleonClick}>{buttonName[0]}</button>
            <button onClick={handleonClick}>{buttonName[1]}</button>
            <button onClick={handleonClick}>{buttonName[2]}</button>
        </div>
    );
};

export default Header;