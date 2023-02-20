import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

const Pagination = ({ info, pageNumber, setPageNumber}) => {

    return (
        <ReactPaginate 
            className="pagination justify-content-center gap-4 mt-5"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousLabel="Prev"
            previousClassName={`${styles.textWhite} btn btn-primary`}
            nextLabel="Next"
            nextClassName="btn btn-primary"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data) => setPageNumber(data.selected + 1)}
            pageCount={info?.pages} 
        />
    )
}

export default Pagination