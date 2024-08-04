import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../../models/PaginatedPageModel";
import styles from "./PaginationComponent.module.css";

interface IProps {
    next: null | PaginatedPageModel;
    prev: null | PaginatedPageModel;
    total_pages: number | null;
}

const PaginationComponent: FC<IProps> = ({next, prev, total_pages}) => {
    let [query, setQuery] = useSearchParams({page: '1'});
    let currentPage = Number(query.get('page')) || 1;
    const [arrPaginator, setArrPaginator] = useState<string[]>([]);

    useEffect(() => {
        createArrPages(currentPage, total_pages || 1);
    }, [currentPage, total_pages]);

    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...next});
                break;
            case 'prev':
                setQuery({...prev});
                break;
            default:
                break;
        }
    };

    const createArrPages = (currentPage: number, totalPage: number) => {
        let pages: string[] = [];

        if (totalPage < 8) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i.toString());
            }
        } else if (currentPage <= 3 && totalPage >= 8) {
            for (let i = 1; i <= 5; i++) {
                pages.push(i.toString());
            }
            pages.push("...");
            pages.push(totalPage.toString());
        } else if (currentPage > totalPage - 3 && totalPage >= 8) {
            for (let i = totalPage - 4; i <= totalPage; i++) {
                pages.push(i.toString());
            }
            pages.unshift("...");
            pages.unshift("1");
        } else if (currentPage > 3 && currentPage <= totalPage - 3 && totalPage >= 8) {
            pages.push("1");
            pages.push("...");
            pages.push((currentPage - 1).toString());
            pages.push(currentPage.toString());
            pages.push((currentPage + 1).toString());
            pages.push("...");
            pages.push(totalPage.toString());
        }

        setArrPaginator(pages);
    };

    return (
        <div className={styles.paginatorBox}>
            <button
                className={styles.allPage}
                disabled={!prev}
                onClick={() => changePage('prev')}
            >
                &lt;
            </button>

            {arrPaginator.map((page, index) => (
                <button
                    key={index}
                    className={currentPage.toString() === page ? styles.currentPage : styles.allPage}
                    onClick={() => setQuery({page})}
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}

            <button
                className={styles.allPage}
                disabled={!next}
                onClick={() => changePage('next')}
            >
                &gt;
            </button>
        </div>
    );
};

export default PaginationComponent;
