import { useState } from 'react'
import { Sidebar } from './presentation/components/sidebar'
import { TaskScreen } from './presentation/screens/tasks/TaskScreen';
import { ListScreen } from './presentation/screens/list/ListScreen';
import { Topbar } from './presentation/components/topbar';

export const App = () => {

  const [idActive, setIdActive] = useState(0);

  return (
    <div className='flex flex-col md:flex-row' data-testid='sidebar'>

      <div className='hidden md:flex'>
        <Sidebar
          idActive={idActive}
          setIdActive={setIdActive}
        />
      </div>

      <div className='md:hidden'>
        <Topbar
          idActive={idActive}
          setIdActive={setIdActive}
        />
      </div>

      {
        idActive === 0
          ? <TaskScreen />
          : <ListScreen />
      }
    </div>
  )
}
