

type ProgressBarProp = {
    rate:number
}
export const ProgressBar = ({rate}:ProgressBarProp) => {

    // Math.round(rate)
    // const rateNumber = Math.round(rate)

    const colorChange = (rate:number) => {
        if(rate < 4 ){
            return "#4AA082"
        } else if(rate >= 4 ){
            return "#DF591D"
        }
    }

    return (
        <div className='pbar-container'>
            <div className='bar-fill-group'>
                <div className='progress-bar'>
                    <div className='progress-bar-fill' style={{ width: `${rate*10}%`, 
                        backgroundColor: colorChange(rate), transition: "width 0.5s ease-in-out"}}>
                    </div>
                </div>
                <p className='progress-rate'>{rate}%</p>
            </div>
        </div>
    )
}
