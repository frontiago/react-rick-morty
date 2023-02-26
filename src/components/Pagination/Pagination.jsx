import ReactPaginate from 'react-paginate'
import {useState, useEffect} from 'react'

import styles from '../../styles/Pagination.module.scss'

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    let [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
    }, [width])

    return (
        <>
            <style jsx="true">
                {`
                    @media(max-width: 768px){
                        .prev, .next {
                            display: none;
                        }
                        .pagination {
                            font-size: 15px;                    
                        }
                    }
                `}
            </style>
            
            <ReactPaginate 
                className="pagination justify-content-center gap-4 mt-5"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                previousLabel="Prev"
                previousClassName={`${styles.textWhite} btn btn-primary prev`}
                nextLabel="Next"
                nextClassName="btn btn-primary next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                activeClassName="active"
                onPageChange={(data) => setPageNumber(data.selected + 1)}
                pageCount={info?.pages} 
            />
        </>
    )
}

export default Pagination