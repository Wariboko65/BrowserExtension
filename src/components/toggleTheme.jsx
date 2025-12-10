import "./toggle.css"

export default function ToggleTheme({ isChecked, handleChange, sun, moon }) {
    return (
        <div className="toggleContainer">
            <input 
              type="checkbox" 
              id="theme"
              checked={isChecked}
              onChange={handleChange}
            />
            <label htmlFor="theme">
                <img src={isChecked ? sun : moon} alt="themeTogglerIcon" />
            </label>
        </div>
    );
}