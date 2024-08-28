import { useState } from 'react'
import { Sidebar } from './presentation/components/sidebar'
import { TaskScreen } from './presentation/screens/tasks/TaskScreen';
import { ListScreen } from './presentation/screens/list/ListScreen';
import { Topbar } from './presentation/components/topbar';

export const App = () => {

  const [idActive, setIdActive] = useState(0);

  return (
    <div>

      <ListScreen />
      
    </div>
  )
}
