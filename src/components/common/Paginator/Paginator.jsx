import React, {useState} from 'react';
import s from './Paginator.module.css'


let Paginator = ({totalItemsCount, portionSize, currentPage, onPageChanged}) => {
  let portionCount = Math.ceil(totalItemsCount / portionSize);

  let pages = [];
  for (let i = 1; i <= portionCount; i++) {
    pages.push(i);
  }

  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div>
      {portionNumber > 1 && <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>}
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p, id) => {
          return <span
            className={(currentPage === p && s.selectedPage) + ' ' + s.numPage}
            onClick={(e) => {
              onPageChanged(p)
            }}
            key={id}>{p}</span>
        })}
      {portionCount > portionNumber*portionSize && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
  )

}
export default Paginator