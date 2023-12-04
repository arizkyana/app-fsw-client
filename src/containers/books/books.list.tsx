import styled from '@emotion/styled';
import {
  Button,
  CircularProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import useAction from './books.hooks';
import { IBooks } from './books.types';
import { ChangeEvent } from 'react';

import CommonPage from '../../components/common-page/common-page';
import { Link } from 'react-router-dom';

const HeaderElementStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export default function List() {
  // const handleSignOut = () => {
  //   localStorage.removeItem('token');
  //   window.location.reload();
  // };

  const { books, loading, setParams, params, meta } = useAction();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setParams({
      ...params,
      search: value,
    });
  };
  const renderLoading = () => {
    return (
      <TableCell colSpan={5}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 0',
          }}
        >
          <CircularProgress />
        </div>
      </TableCell>
    );
  };
  const renderContent = () => {
    if (loading) {
      return renderLoading();
    }
    return books?.map((record: IBooks) => (
      <TableRow
        key={record.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th">{record.title}</TableCell>
        <TableCell>{record.author}</TableCell>
        <TableCell>{record.genre}</TableCell>
        <TableCell>{record.published_year}</TableCell>
        <TableCell align="right">{record.total_copies}</TableCell>
      </TableRow>
    ));
  };

  return (
    <CommonPage
      title="Books"
      actionElement={
        <HeaderElementStyled>
          <TextField
            name="search"
            placeholder="Search books title or author"
            onChange={handleSearch}
            size="small"
          />
          <Link to={'/create'}>
            <Button type="button" variant="contained">
              Create new
            </Button>
          </Link>
        </HeaderElementStyled>
      }
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Published Year</TableCell>
              <TableCell align="right">Available</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>{renderContent()}</TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ mt: 3 }}
        count={meta?.totalPages}
        variant="outlined"
        shape="rounded"
        onChange={(_, page: number) => {
          setParams({
            ...params,
            page,
          });
        }}
      />
    </CommonPage>
  );
}
