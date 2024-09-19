import React from 'react';
import { Link } from 'react-router-dom';
import { boardList } from '../data/data';
import './board.css'

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
                        boardList.map(b =>(
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td><Link to={`/detail/${b.id}`}>{b.title}</Link></td>
                                <td>{b.writer}</td>
                                <td>{b.reg_date.substring(0,b.reg_date.indexOf('T'))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='btnBox'>
                <Link to={'/create'} className='btn1'><button>작성</button></Link>
            </div>
        </div>
    );
};

export default BoardList;