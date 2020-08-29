import React from 'react'


function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
           {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
           <div class="divider"/>
           {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}

export default Pagination;