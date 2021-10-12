import { useContext } from 'react'

import PaginationContext from '../contexts/Pagination'

export default function Pagination() {
    const context = useContext(PaginationContext)

    const { page, count, changePage } = context

    if (count === 0) return <div />

    const pages = Math.ceil(count / 20)

    const items = Array(pages).fill(0).map((_, index) => {
        let active = ''
        let pageNum = index + 1

        if (pageNum == page) {
            active = 'active'
        }

        return <li key={index} className={active} onClick={() => { changePage(pageNum) }}><a href="#">{pageNum}</a></li>
    })

    return (
        <ul className="pagination center">
            {items}
        </ul>
    )
}
