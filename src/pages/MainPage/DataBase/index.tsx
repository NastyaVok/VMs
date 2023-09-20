import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../../utils/hooks/useStore';
import { Title } from '../Title';
import { UIPagination } from '../../../components/UI/Pagination';
import { UIInput } from '../../../components/UI/Input';
import { UITable } from '../../../components/UI/Table';
import { Filter } from '../Filter';
import { getApiResource } from '../../../utils/network';
import { API_URL } from '../../../constants/api';

import { constructorArray } from './transformToArray';
import { titles } from './data';
import './style.css'; 

export const DataBase = observer(() => {
  const {
    rootStore: { endpointTypeStore, tagStore },
  } = useStore();

  const url = new URL(API_URL);
  const navigate = useNavigate();

  const location = useLocation();

  const [data, setData] = useState<{content: string[], id: string}[]>([]);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const getResourse = async (url:string) => {
    const res = await getApiResource(url);
    if(res) {
      if (res.data.length) {
        let newArr = constructorArray(res.data);
        if(tagStore.getTagStore || endpointTypeStore.getEndpointTypeStore) {
          newArr = newArr.filter((el) => {
            if(tagStore.getTagStore && endpointTypeStore.getEndpointTypeStore) {
              return el.content.includes(tagStore.getTagStore) && 
                        el.content.includes(endpointTypeStore.getEndpointTypeStore);
            } else if (tagStore.getTagStore || endpointTypeStore.getEndpointTypeStore) {
              return el.content.includes(tagStore.getTagStore || endpointTypeStore.getEndpointTypeStore);
            }
          });
        }
        setData(newArr);
        setLength(newArr.length);
        setCount(Math.ceil(newArr.length/8));
      } else {
        setData([]);
        setLength(0);
        setCount(0);
      }
    }
    return [];
  };

  const content = () => {
    const start = (page-1)*8;
    const end = start+8;
    if(page===count) {
      return data.slice(start);
    } else {
      return data.slice(start,end);
    }
  };

  useEffect(() => {
    const link = url;
    url.searchParams.append('name', input);
    getResourse(link.toString());
    const endpointType = endpointTypeStore.getEndpointTypeStore !== '' 
      ? '&endpoint_type='+endpointTypeStore.getEndpointTypeStore : '';
    const tags = tagStore.getTagStore !== '' 
      ? '&tag='+tagStore.getTagStore : '';
    const pages = '&page=' + page;
    navigate('/cmdb/endpoints?search_val='+input+endpointType+tags+pages);
  }, [endpointTypeStore.getEndpointTypeStore, tagStore.getTagStore, input, page]);

  useEffect(() => {
    if(location.search) {
      const search = location.search;
      const params = new URLSearchParams(search);
      const nameParams = params.get('search_val');
      const typeParams = params.get('endpoint_type');
      const tagsParams = params.get('tags');
      const pageParams = params.get('page');
      setInput(nameParams !== null ? nameParams : '');
      endpointTypeStore.setEndpointTypeStore(typeParams !== null ? typeParams : '');
      tagStore.setTagStore(tagsParams !== null ? tagsParams : '');
      setPage(pageParams !== null ? Number(pageParams) : 1);
      getResourse(API_URL);
    } else {
      getResourse(API_URL);
      navigate('/cmdb/endpoints?'+'page='+String(page));
    }
  },[]);

  return (
    <Container
      sx={{
        overflow: 'hidden',
      }}
    >
      <Box
      >
        <Title 
          length={length}
        />
        <div>
          <div className={'top'}>
            <UIInput
              value={input}
              setValue={setInput}
            />
            <div className={'filter'}>
              <Filter />
            </div>
          </div>
        </div>
        <UITable 
          titles={titles}
          contents={content()}
        />
        <UIPagination 
          page={page}
          setPage={setPage}
          count={count}
        />
      </Box>
    </Container>
  );
});