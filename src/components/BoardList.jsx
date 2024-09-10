import React from 'react';
import { boardList } from '../data/data';
import './board.css'
import { Link } from 'react-router-dom';

const BoardList = () => {

    return (
        <div className='boardList'>
            <h2>Board List Page</h2>
            <table>
                <thead>
                    <tr>
                        <th className='row1'>번호</th>
                        <th className='row2'>제목</th>
                        <th className='row3'>작성자</th>
                        <th className='row4'>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map(i =>(
                            <tr>
                                <td>{i.id}</td>
                                <td><Link>{i.title}</Link></td>
                                <td>{i.writer}</td>
                                <td>{i.reg_date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BoardList;