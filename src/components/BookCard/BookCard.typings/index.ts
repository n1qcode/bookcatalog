
export interface IBookProps {
  title: string,
  authors: string[],
  publishedDate: string,
  description: string,
  icon: string,
  show?: () => void,
  publisher?: string,
  printType?: string,
  pageCount?: number,
  language?: string,
}
