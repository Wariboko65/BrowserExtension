import { motion, AnimatePresence } from "framer-motion";
import "./toggle.css"

export default function ToggleTheme({ isChecked, toggleTheme, sun, moon }) {
    return (
        <div className="toggleContainer" tabIndex="0">
            <input 
              type="checkbox" 
              id="theme"
              checked={isChecked}
              onChange={toggleTheme}
            />
            <label className="label" htmlFor="theme">
                <AnimatePresence>
                {
                    isChecked   ? <motion.img 
                                   src={sun} 
                                   alt="sunThemeIcon"
                                   key="sun"
                                   initial={{ y: -60, opacity: 0 }}
                                   layout
                                   animate={{ y: 0, opacity: 1 }}
                                   exit={{ y: 60, opacity: 0, transition: { duration: 0.55 } }}
                                   transition={{ layout: {
                                    type: "spring",
                                    bounce: 0.6,
                                    duration: 0.55
                                    },
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 14
                                    }}
                                 /> : <motion.img 
                                        src={moon} 
                                        alt="moonThemeIcon"
                                        key="moon"
                                        layout
                                        initial={{ y: -60, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 60, opacity: 0, transition: { duration: 0.55 }}}
                                        transition={{ layout: {
                                            type: "spring",
                                            bounce: 0.6,
                                            duration: 0.55
                                        },
                                         type: "spring",
                                         stiffness: 120,
                                         damping: 20
                                        }}
                                      />
                }
                </AnimatePresence>
            </label>
        </div>
    );
}