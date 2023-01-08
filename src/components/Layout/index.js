import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
         <dev className="App">
           <Sidebar/> 
          <dev className="page">
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet/>
            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br/>
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>  
          </dev>
        </dev>
    )
}

export default Layout;