import { v4 as uuidv4 } from 'uuid';
import PersonalImg from '../images/personalweb.png';
import SortingImg from '../images/sorting.png';
import KeeperImg from '../images/keeper.png';
import MusicImg from '../images/music.png';
import ExpenseImg from '../images/expense.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Sorting Visual',
    desc:
      'An application to give explanation for all the famous Sorting Algorithm.',
    img: SortingImg,
  },
  {
    id: uuidv4(),
    name: 'Keeper App',
    desc:
      'An app to help people to get an overview of how they store their to do List. It made using React JS',
    img: KeeperImg,
  },
  {
    id: uuidv4(),
    name: 'Music Player',
    desc:
      'Using this you can play the music repeat the song ,play the song , pause the song choose the song. It made using HTML ,CSS , JavaScript',
    img: MusicImg,
  },
  {
    id: uuidv4(),
    name: 'Expense Tracker',
    desc:
      'An web app make for Add up all the expense in the different feild like Education, Helath, Shooping and Food.Having option of Add and Delete Option made using React JS and Redux.',
    img: ExpenseImg,
  },
  {
    id: uuidv4(),
    name: 'Personal Website',
    desc: 'A portfolio for Avnish Kumar , myself. This is made using React JS',
    img: PersonalImg,
  },
];

export default projects;
