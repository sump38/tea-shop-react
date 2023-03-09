import './pagination.css';

const Pagination = ({numberOfPages = 10, currentPage = 3}) => {

  const pagesBlockArray = [];
  for (let i=0;i<numberOfPages;i++) {
    if(i+1 === currentPage) {
      pagesBlockArray.push(<div className="pagination-item selected">{i+1}</div>)
    } else {
      pagesBlockArray.push(<div className="pagination-item">{i+1}</div>)
    }
  }


  return (
  <div className="pagination-container">
  {
    pagesBlockArray
  }
  </div>)
}

export default Pagination;