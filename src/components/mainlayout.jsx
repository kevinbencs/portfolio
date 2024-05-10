import React from 'react'



export default function Mainlayout(props, { Children }) {
    return (
        <main>
            <div className='scene'>
                <div className={`${props.mainClass} main`}>
                    <div className={`${props.currentClass} current`} >
                        {Children}
                    </div>
                </div>
            </div>
            {props.isPageChange &&
                <div className={`${props.sceneClass} scene-move`}>
                    <div className='main-move'>
                        <div className='loader'>{props.page}</div>
                    </div>
                </div>
            }

        </main>
    )
}
