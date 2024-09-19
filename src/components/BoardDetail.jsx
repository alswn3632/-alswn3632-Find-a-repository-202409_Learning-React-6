import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { boardList } from '../data/data';

const BoardDetail = () => {

    const { id } = useParams();

    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(i=>i.id === Number(id))

    // params는 String으로 값을 가져옴 ==> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유 : id의 값과 index(boardList의 index)가 맞지 않기 때문
    const idx = boardList.findIndex(b => b.id === Number(id));
    // console.log(idx);

    const board = boardList[idx];
    // console.log(board);

    return (
        <div className='boardDetail'>
            <h2>Board Detail Page</h2>
            <div className='tableBox'>
                <table>
                    <thead>
                        <tr className='title'>
                            <td>{board.id}</td>
                            <td>{board.title}</td>
                            <td>{board.writer}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='date'>
                            <td colSpan={3}>{board.reg_date.substring(0,board.reg_date.indexOf('T'))}</td>
                        </tr>
                        <tr className='content'>
                            <td colSpan={3}>{board.contents}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='btnBox'>
                <Link to={'/'} className='btn1'><button>이전</button></Link>
                <Link to={`/edit/${board.id}`} className='btn1'><button>수정</button></Link>
                <button>삭제</button>
            </div>
        </div>
    );
};

export default BoardDetail;