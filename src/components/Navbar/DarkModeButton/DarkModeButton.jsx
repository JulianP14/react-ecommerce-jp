import './darkModeButton.css'

import { useDarkModeContext } from '../../../context/DarkModeContext';

export const DarkModeButton = () => {
    const { toggleDarkMode } = useDarkModeContext()
    
    return (

        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onInput={() => toggleDarkMode()} />
                <div className="slider round" />
            </label>
        </div>

    );
}