import React from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import './Skills.css'

function Skills() {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0, // Percentage of div that needs to be visible to trigger animation
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden'); // Reset to hidden when out of view
        }
    }, [controls, inView]);

    const divVariants = {
        hidden: { opacity: 1, y: 50,rotate: 0, transition: { duration: 0.8 } },
        visible: { opacity: 1, y: 50,x: 100, rotate:360, transition: { duration: 0.8 } },
    };

  return (
    <>
    <div className='skill-header'>
        <h1>Skills</h1>
        <h1 id='skill-h1'>Skills</h1>
    </div>
    <div className='skill-container'>
        <motion.div className='skill-list'
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={divVariants}>
            <h4>Front End</h4>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>React</span>
                        <span className='w-85'>85%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-85'></div>
                </div>
            </div>

            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>Angular</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>

            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>HTML</span>
                        <span className='w-90'>90%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-90'></div>
                </div>
            </div>

            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>CSS</span>
                        <span className='w-90 '>90%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-90'></div>
                </div>
            </div>

            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>Java Script</span>
                        <span className='w-80'>80%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-80'></div>
                </div>
            </div>
        </motion.div>
        <motion.div className='skill-list'
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={divVariants}>
            <h4>Api</h4>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>.Net</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>Express Js</span>
                        <span className='w-50'>50%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-50'></div>
                </div>
            </div>
        </motion.div>



        <motion.div className='skill-list'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={divVariants}>
            
            <h4>Back End</h4>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>SQl</span>
                        <span className='w-80'>80%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-80'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>PostgreSQL</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>MongoDB</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>
        </motion.div>
        <motion.div className='skill-list'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={divVariants}>
            <h4>Programing Languages</h4>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>Python</span>
                        <span className='w-85'>85%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-85'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>java</span>
                        <span className='w-70'>70%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-70'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>c</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>
            <div className='row'>
                <div className='row-item'>
                    <div className='item-text'>
                        <span>C++</span>
                        <span className='w-75'>75%</span>
                    </div>
                </div>
                <div className='progress'>
                    <div className='progress-bar w-75'></div>
                </div>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Skills