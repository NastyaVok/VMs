import {useState, MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import { Box } from '@mui/material';
import { observer } from 'mobx-react';

import { useStore } from '../../../utils/hooks/useStore';
import { UIButton } from '../../../components/UI/Button';
import { UISelect } from '../../../components/UI/Select';
import { Tags, EndpointType } from '../../../types/interfaces';

export const Filter = observer(() => {
  const {
    rootStore: { endpointTypeStore, tagStore },
  } = useStore();
  const [tag, setTag] = useState<string | null>(tagStore.getTagStore === '' ? null : tagStore.getTagStore );
  const [endpointType, setEndpointType] = useState<string | null>(
    endpointTypeStore.getEndpointTypeStore === '' ? null : endpointTypeStore.getEndpointTypeStore);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    endpointTypeStore.setEndpointTypeStore(endpointType ? endpointType : '');
    tagStore.setTagStore(tag ? tag : '');
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const acceptClicked = () => {
    endpointTypeStore.setEndpointTypeStore(endpointType ? endpointType : '');
    tagStore.setTagStore(tag ? tag : '');
  };

  return (
    <>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        <FilterAltSharpIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Container sx={{ p: 2 }}>
          <Grid 
            container
            sx={{ p: 2 }}
          >
            <Grid item xs={8}>
              <Typography>Фильтры</Typography>
            </Grid>
            <Grid item xs={2}>
              <UIButton
                text={'close'}
                onClick={()=>handleClose()}
              />
            </Grid>
          </Grid>
          <Typography sx={{ p: 2 }}>Тип ПК</Typography>
          <UISelect
            value={endpointType}
            setValue={setEndpointType}
            initial={''}
            options={Object.values(EndpointType).map((status)=>{
              return status;
            })}
          />
          <Typography sx={{ p: 2 }}>Теги</Typography>
          <UISelect
            value={tag}
            setValue={setTag}
            initial={''}
            options={Object.values(Tags).map((status)=>{
              return status;
            })}
          />
          <Box 
            sx={{ mt: 2 }}
          >
            <UIButton 
              text={'Применить'}
              onClick={() => acceptClicked()}
            />
          </Box>
        </Container>
      </Popover>
    </>
  );
});

