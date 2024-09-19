import React, { useRef, useState } from 'react';
import { boardList } from '../data/data';
import './board.css';
import { Link } from 'react-router-dom';

const BoardCreate = () => {

    // input value 받음
    const nextId = useRef(8);
    const today = new Date();

    const [inputs, setInpust] = useState({
        title : '',
        contents : '',
        writer : ''
    });

    const {title, contents, writer} = inputs;

    const onChange = (e) => {
        const {name,value} = e.target;
        setInpust({
            ...inputs,
            [name] : value
        });
    }

    // 이걸 boardlist로 옮겨야 하지 않을깜..
    const[posts, setPosts] = useState(boardList);

    const onCreate = () => {
        const post = {
            id : nextId.current,
            title : title,
            contents : contents,
            writer : writer,
            reg_date : today
        }

        setPosts((posts.concat(post)).sort(function(a, b){
            return b.id - a.id;
        })); // 얜 됨

        boardList.concat(post); // 얜 안됨 외않됌ㅡ.,ㅡ

        nextId.current += 1;

        setInpust({title:'', writer:'', contents:''});
        console.log(posts); // 되는놈
        console.log(boardList); // 안되는놈
    }

    return (
        <div className='boardCreate'>
            <h2>Board Create Page</h2>
            <div className='createBox'>
                <table>
                    <thead>
                        <tr className='title'>
                            <td className='txt1'>제목: <input type="text" placeholder='제목을 입력해주세요.' name='title' onChange={onChange} value={title}/></td>
                            <td className='txt2'>작성자: <input type="text" placeholder='작성자명' name='writer' onChange={onChange} value={writer}/></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='content'>
                            <td colSpan={2} className='txt3'><textarea placeholder='내용을 입력해주세요.' onChange={onChange} name='contents' value={contents}></textarea></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='btnBox'>
                <Link to={'/'} className='btn1'><button>목록</button></Link>
                {/* <Link to={'/'} className='btn1'><button onClick={onCreate}>저장</button></Link> */}
                <button onClick={onCreate}>저장</button>
            </div>
        </div>
    );
};

export default BoardCreate;