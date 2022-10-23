import BookList from '../../../components/BookList';
import Search from '../../../components/Search';

import { HomeStyled } from './Home.styles';

const Home = () => {
  return (
    <HomeStyled>
      <Search />
      <BookList />
    </HomeStyled>
  );
};

export default Home;
