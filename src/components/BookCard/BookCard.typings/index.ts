
export interface IBookProps {
    title: string,
    authors: string[],
    publishedDate: string,
    description: string,
    imageLinks?: { thumbnail: string },
    show?: () => void,
    publisher?: string,
    printType?: string,
    pageCount?: number,
    language?: string,
}
