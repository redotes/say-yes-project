import React from 'react';
import Header from '../components/Header';

const Main = () => {

    return (
        <div>
            <Header TitleName='say YES' buttonName={['menu1' , 'menu2' ,'menu3']}   />
            <h1>Main page</h1>
        </div>
    );
};

export default Main;