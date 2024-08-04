import {PaginatedPageModel} from "./PaginatedPageModel";

export interface CarsResponse {
    "total_items": number|null,
    "total_pages": number|null,
    prev: null | PaginatedPageModel;
    next: null | PaginatedPageModel;
    "items": []
}