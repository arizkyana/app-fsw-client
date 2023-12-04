import { BookCreateContainer } from '../../containers/books';
import Dashboard from '../../layouts/Dashboard';
import PrivateProvider from '../../providers/PrivateProvider';

export default function Create() {
  return (
    <PrivateProvider>
      <Dashboard>
        <BookCreateContainer />
      </Dashboard>
    </PrivateProvider>
  );
}
