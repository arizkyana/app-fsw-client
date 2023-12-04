import { Box, TextField, Switch, Stack, Button, styled } from '@mui/material';
import CommonPage from '../../components/common-page/common-page';
import { FormEvent, useState } from 'react';
import { CloudUpload } from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')`
  display: none;
`;

export default function Create() {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('values > ', formValues);
  };

  return (
    <CommonPage
      withBack
      component={'form'}
      title="Create new Book"
      actionElement={
        <Button type="submit" variant="contained">
          Submit
        </Button>
      }
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          width: '50%',
        }}
      >
        <TextField
          name="title"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Title"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              title: e.target.value,
            })
          }
        />
        <TextField
          name="author"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Author"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              author: e.target.value,
            })
          }
        />
        <TextField
          name="isbn"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="ISBN"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              isbn: e.target.value,
            })
          }
        />
        <TextField
          name="published_year"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Published Year"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              published_year: e.target.value,
            })
          }
        />
        <TextField
          name="genre"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Genre"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              genre: e.target.value,
            })
          }
        />
        <TextField
          name="total_copies"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Total Copies"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              total_copies: e.target.value,
            })
          }
        />
        <TextField
          name="copies_available"
          size="small"
          sx={{ width: '100%', mb: 3 }}
          label="Copies Available"
          type="number"
          onChange={(e) =>
            setFormValues({
              ...formValues,
              copies_available: e.target.value,
            })
          }
        />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
        >
          Upload Book Cover
          <VisuallyHiddenInput type="file" accept=".png, .jpg, .jpeg" />
        </Button>
        <Box>
          <Stack direction={'row'} alignItems={'center'}>
            <div>Publish</div>
            <Switch
              name="published"
              title="Published"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  published: e.target.checked,
                })
              }
            />
          </Stack>
        </Box>
      </Box>
    </CommonPage>
  );
}
