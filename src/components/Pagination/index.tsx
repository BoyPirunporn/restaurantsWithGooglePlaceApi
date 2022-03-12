import { Pagination, styled, Theme } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    itemPerPage: number;
    totalPage: number;
    changePage?: (pageNumber: number) => void;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationComponent: React.FC<Props> = ({ totalPage, itemPerPage, setCurrentPage }) => {
    const pageNumber = []
    for (let i = 0; i < Math.ceil(totalPage / itemPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>
            <Pagination variant={'outlined'} size={'large'}  count={pageNumber.length} onChange={(event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value)}></Pagination>
        </>
    )
}

export default PaginationComponent