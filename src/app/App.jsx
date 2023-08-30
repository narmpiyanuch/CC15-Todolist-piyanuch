import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Header from '../component/Header.jsx';
import '../component/Header.scss';
import ListItem from '../component/Listitem';
import Lists from '../component/Lists'
import TodoHeader from '../component/Todo/TodoHeader';
import TodoCreate from '../component/Todo/TodoCreate';
import TodoLists from '../component/Todo/TodoLists';

function App() {

  const generaLists = [
    { id: 1, text: 'Inbox', active: true, icon: <FaInbox /> },
    { id: 2, text: 'Today', active: false, icon: <FaCalendar /> },
    { id: 3, text: 'Next 7 days', active: false, icon: <FaCalendarAlt /> },
  ];
  // ObjectDetail => <ListItem ...ObjectDetail />

  const projectLists = [
    { id: 4, text: 'Project-A', icon: <FaInbox />, active: true },
    { id: 5, text: 'Project-B', icon: <FaInbox />, active: false },
  ];


  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <Lists data={generaLists} />
          </section>
          <section className='sidebar__category'>
            <div className='accordion'>
              {/*Toggle */}
              <div className='accordion__toggle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon accordion__item__active' />
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className='todo__container'>
          {/* Header */}
          <TodoHeader />
          {/* CreateTodo */}
          <TodoCreate />
          {/* TodoList */}
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;

/* Challenge : Refactor
- ให้ 2 secton render UI ที่...
  - Option A (2/5) : render UI ต่างกัน <List /> กับ <Accordion />
  - Option B (4/5) : render UI เดียวกัน เช่น <List />
  - Option C (5/5) : render UI <List /> ภายใต้ <Accordion> <List /> <Accordion/>
*/


{/*List generaLists */ }
{/* <ul className='list'>
      {generaLists.map((obj) => (<ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />))} */}

{/* <li className='list__item'>
            <FaInbox className='list__item__icon' />
            <p className='list__item__text'> Inbox</p>
          </li>
          <li className='list__item'>
            <FaCalendar className='list__item__icon' />
            <p className='list__item__text'> Today</p>
          </li>
          <li className='list__item'>
            <FaCalendarAlt className='list__item__icon' />
            <p className='list__item__text'> Next 7 days</p>
          </li> */}
{/* <ListItem
            text='Inbox'
            icon={<FaInbox className='list__item__icon' />}
            active={true}
            />
          <ListItem
            text='Today'
            icon={<FaCalendar className='list__item__icon' />}
            active={false}
            />
          <ListItem
              text='Next 7 days'
              icon={<FaCalendarAlt className='list__item__icon' />}
              active={false}
            /> */}
{/* </ul> */ }



{/*List ProjectList */ }
{/* <ul className='list'> */ }
{/* // #1 */ }
{/* {projectLists.map((obj) => (<ListItem key={obj.key} text={obj.text} icon={obj.icon} active={obj.active} />))} */ }

{/* // #2 */ }
{/* {projectLists.map((obj) => (<ListItem key={obj.key} {...obj} />))} */ }
{/* // #3 */ }
{/* {projectLists.map((obj) => {
            obj.key = obj.id;
            delete obj.id;
            return <ListItem {...obj}/>
            })} */}
{/* <ListItem
              text='Project-A'
              icon={<FaInbox className='list__item__icon' />}
              active={true}
            />
            <ListItem
              text='Project-B'
              icon={<FaInbox className='list__item__icon' />}
               active={false}
            /> */}
{/* </ul> */ }