import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BoardList from './BoardList';
import './board.css'

const BoardHome = () => {
    return (
        <div className='boardHome'>
            <h1>My First React Board Project</h1>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BoardList/>}/>
                    <Route path='/list' element={<BoardList/>}/>
                    <Route/>
                    <Route/>
                </Routes>
            </BrowserRouter>
            <button>글쓰기</button>
        </div>
    );
};

export default BoardHome;