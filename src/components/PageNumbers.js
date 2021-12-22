import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import './PageNumbers.css'

export default function PageNumbers(props) {

    const totalPages = [];
    const params = useParams();
    const currentPage = +params.mypage;
    const history = useHistory();

    function goToNextPage() {
        history.push(`/${currentPage + 1}`);
    }

    function goToPreviousPage() {
        history.push(`/${currentPage - 1}`);
    }

    function changePage(event) {
        history.push(`/${event.target.textContent}`);
    }

    for (let i = 1; i <= props.totalPages; i++) {
        totalPages.push(i);
    }

    return (
        <div className='pagination'>
            <button
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >prev
            </button>
            {
                totalPages.map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))
            }
            <button
                onClick={goToNextPage}
                className={`next ${currentPage === props.totalPages ? 'disabled' : ''}`}
            >  next
            </button>
        </div>
    )
}
