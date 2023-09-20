export const transformDate = (value: string | Date) => {
  const addNull = (value: string) => {
    if (value.length < 2) {
      return '0' + value;
    }
    return value;
  };

  if (typeof value === 'string') {
    value = new Date(value);
  }

  const year = String(value.getFullYear());
  const month = String(value.getMonth() + 1);
  const day = String(value.getDate());
  const hours = String(value.getHours());
  const minutes = String(value.getMinutes());
  const seconds = String(value.getSeconds());
    
  const data = `${year}-${addNull(month)}-${addNull(day)} ${addNull(hours)}:${addNull(minutes)}:${addNull(seconds)}`;
  
  return String(data);
};