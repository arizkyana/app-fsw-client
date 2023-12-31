import { BookDetailContainer } from '../../containers/books';
import { Dashboard } from '../../layouts';
import PrivateProvider from '../../providers/PrivateProvider';

export default function Detail() {
  return (
    <PrivateProvider>
      <Dashboard>
        <BookDetailContainer />
      </Dashboard>
    </PrivateProvider>
  );
}
