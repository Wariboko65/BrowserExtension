import "./toggle.css"

export default function ToggleTheme({ isChecked, handleChange, sun, moon }) {
    return (
        <div className="toggleContainer" tabIndex="0">
            <input 
              type="checkbox" 
              id="theme"
              checked={isChecked}
              onChange={handleChange}
            />
            <label className="label" htmlFor="theme">
                {
                    isChecked ? <img src={sun} alt="sunThemeIcon" /> : <img src={moon} alt="moonThemeIcon" />
                }
            </label>
        </div>
    );
}