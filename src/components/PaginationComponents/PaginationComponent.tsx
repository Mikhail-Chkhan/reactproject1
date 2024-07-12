import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    let [URLSearchParams, setURLSearchParams] = useSearchParams({page: "0"})
    return (
        <div>

            <button onClick={() => {
                let page = +(URLSearchParams.get('page') || '1');
                if (page >= 2) {
                    let prevPage = (page - 1).toString();
                    setURLSearchParams({page: prevPage})
                } else {
                    let prevPage = "1";
                    setURLSearchParams({page: prevPage})
                }

            }}>prev
            </button>


            <button onClick={() => {

                let page = +(URLSearchParams.get('page') || '1');
                let nextPage = (page + 1).toString();
                setURLSearchParams({page: nextPage});
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;