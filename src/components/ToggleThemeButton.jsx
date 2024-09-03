import { Button } from 'antd'
import {HiOutlineMoon , HiOutlineSun} from 'react-icons/hi'
// eslint-disable-next-line react/prop-types
const ToggleThemeButton = ({darkTheme , toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
        {
            darkTheme ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />
        }
        </Button>
    </div>
  )
}

export default ToggleThemeButton