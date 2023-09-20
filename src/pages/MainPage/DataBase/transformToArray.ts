import { transformDate } from '../../../utils/getValidDate';
import { Data } from '../../../types/interfaces';

export const constructorArray = (data: Data[]) => {
  const array: {content: string[], id: string}[] = [];
  data.forEach(({
    status,
    name,
    endpoint_type,
    location,
    value,
    number,
    tags,
    creation_date,
    update_date,
    audit_date,
    id,
  }) => {
    const values = [
      status === true ? '🟢' : '🔴',
      name,
      endpoint_type,
      location,
      value,
      String(number),
      tags,
      transformDate(creation_date),
      transformDate(update_date),
      transformDate(audit_date),     
    ];
    array.push({content: values, id: id});
  });
  return array;
};