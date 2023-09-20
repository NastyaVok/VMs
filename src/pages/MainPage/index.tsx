import { Navbar } from './Navbar';
import { DataBase } from './DataBase';
import './style.css';

export const MainPage = () => {
  return (
    <div className={'container'}>
      <Navbar />
      <DataBase />
    </div>
  );
};