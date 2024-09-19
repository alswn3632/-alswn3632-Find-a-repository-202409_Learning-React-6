import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { boardList } from '../data/data';

const BoardEdit = () => {

    const { id } = useParams();

    const idx = boardList.findIndex(b => b.id === Number(id));

    const board = boardList[idx];

    const [editPost, setEditPost] = useState(boardList);

    const [inputs, setInputs] = useState({
        title : board.title,
        contents : board.contents
    })

    const {title, contents} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onEdit = () => {
        setEditPost(
            editPost.map(post => (
                post.id === Number(id)?
                {
                    ...post,
                    title : title,
                    contents : contents
                }
                : post
            ))
        );  
        console.log(editPost);
    }

    return (
        <div className='boardEdit'>
            <h2>Board Edit Page</h2>
            <div className='tableBox'>
                <table>
                    <thead>
                        <tr className='title'>
                            <td className='row1'>{board.id}</td>
                            <td className='row2'>제목: <input type="text" name='title' value={title} onChange={onChange}/></td>
                            <td>{board.writer}</td>
                            <td>{board.reg_date.substring(0,board.reg_date.indexOf('T'))}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='content'>
                            <td colSpan={4}><textarea name='contents' value={contents} onChange={onChange}></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='btnBox'>
                {/* <Link to={'/'} className='btn1' onClick={onEdit}><button>저장</button></Link> */}
                <button onClick={onEdit}>저장</button>
            </div>
        </div>
    );
};

export default BoardEdit;