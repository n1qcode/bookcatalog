import { FC } from 'react';

import {IBookProps} from './BookCard.typings';
import {BookCardStyled, BookInfoStyled} from './BookCard.styles';

const BookCard: FC<IBookProps> = ({title, authors, publishedDate, description, icon,
  show, language, pageCount, publisher, printType}) => {

  return (
    <BookCardStyled onClick={show}>
      <div><img src={icon} alt="Book Icon" /></div>
      <BookInfoStyled>
        {title && <h3>{title}</h3>}
        {authors && <h4>Authors: {authors?.map((elem, index) => ((index + 1 === authors.length) ? elem : `${elem}, `))}</h4>}
        {publishedDate && <h4>Published Date: {publishedDate}</h4>}
        {publisher && <h4>Publisher: {publisher}</h4>}
        {printType && <h4>Print type: {printType}</h4>}
        {pageCount && <h4>Page Count: {pageCount}</h4>}
        {language && <h4>Language: {language}</h4>}
        {description && <h5>Description: {description}</h5>}
      </BookInfoStyled>
    </BookCardStyled>
  );
};

export default BookCard;
