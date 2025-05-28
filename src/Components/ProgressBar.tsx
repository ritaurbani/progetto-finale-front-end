import React from 'react'


type ProgressBarProp = {
    rate:number
}
export const ProgressBar = ({rate}:ProgressBarProp) => {
    return (
        <div className='pbar-container'>
            <div className='bar-number-group'>
                <div className='progress-bar'>
                    <div className='progress-bar-fill'>
                        progress bar
                    </div>
                </div>
                <div className='progress-rate'>{rate}</div>
            </div>
        </div>
    )
}
