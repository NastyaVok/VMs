import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
    titles: string[]
    contents: {content: string[], id: string}[]
}

export const UITable = ({titles, contents}: Props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titles.map((name) => {
              return(
                <TableCell key={name} align="right">{name}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {contents.map(({content, id}) => {
            return(
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {content.map((el) => {
                  return(
                    <TableCell 
                      key={id+el}
                      align="right"
                    >
                      {el}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};