import React from 'react'


function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            <h2>
           {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
           {/* <div class="divider"/> */} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           {gotoNextPage && <button onClick={gotoNextPage} style={{width : '70px'}}>Next</button>}
           </h2>
        </div>
    )
}

export default Pagination;