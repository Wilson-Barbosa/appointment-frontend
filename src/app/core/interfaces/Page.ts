export interface Page<T> {

    // Content can have something within it or be empty
    content: T[] | null;
    numberOfElements: number;
}