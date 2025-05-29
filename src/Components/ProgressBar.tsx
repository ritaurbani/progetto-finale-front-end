

type ProgressBarProp = {
    rate:number
}
export const ProgressBar = ({rate}:ProgressBarProp) => {

    // Math.round(rate)
    const rateNumber = Math.round(rate)

    return (
        <div className='pbar-container'>
            <div className='bar-fill-group'>
                <div className='progress-bar'
                role="progressbar"
                aria-valuenow={rate}
                aria-valuemin={0}
                aria-valuemax={10}>
                    <div className='progress-bar-fill' style={{ width: `${rateNumber}%`, 
                    backgroundColor: "#55394D", transition: "width 0.5s ease-in-out"}}>
                    </div>
                </div>
                <p className='progress-rate'>{rate}%</p>
            </div>
        </div>
    )
}
