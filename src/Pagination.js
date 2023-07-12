import { React, useEffect, useState } from 'react';
require('./Pagination.css');

export const pagination = (props) => {
    const currentPageSize = props.currentPageSize || 5;
    const paginationPages = props.totalRows.length / currentPageSize;
    const [paginationPageList, setPaginationPageList] = useState([]);
    const [paginatedRows, setPaginatedRows] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(currentPageSize);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getPaginatedRows(startIndex, endIndex);
        getPaginationPageList();
    }, [paginationPages]);

    useEffect(() => {
        if(currentPage > 1 && (currentPage <= paginationPageList.length))
        getPaginatedRows(null,null, currentPage);
    }, [currentPage]);

    const getPaginatedRows = (startIndex, endIndex, index, action) => {
        let selectedIndex = index || currentPage;
        if(index) {
            startIndex = (currentPageSize * (index-1));
            setCurrentPage(index);
        } else if(action === 'prev') {
            selectedIndex = selectedIndex-1 >=0 ? selectedIndex : 0;
            setCurrentPage(selectedIndex-1);
        } else if(action === 'next') {
            selectedIndex = selectedIndex+1 <=paginationPageList.length ? selectedIndex : paginationPageList.length;
            setCurrentPage(selectedIndex+1);
        }
        endIndex = endIndex || (startIndex + currentPageSize);
        let selectedRows = props.totalRows.slice(startIndex, endIndex);
        setPaginatedRows(selectedRows);
    };

    const getPaginationPageList = () => {
        let list = [];
        for (let i = 0; i < paginationPages; i++) {
            let index= i+1;
            list.push(<a href="#" key={i + 1} onClick={() => getPaginatedRows(null,null,index)}>{i + 1}</a>);
            setPaginationPageList(list)
        }
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                {paginatedRows.map((item, i) => (
                    <tr key={i+1}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </table>
            <div className="pagination">
                <a href="#" onClick={() => getPaginatedRows(null,null,null,'prev')}>&laquo;</a>
                {paginationPageList}
                <a href="#" onClick={() => getPaginatedRows(null,null,null,'next')}>&raquo;</a>
            </div>
        </div>
    )
}