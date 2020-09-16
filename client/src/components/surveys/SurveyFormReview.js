import React from 'react'

const SurveyFormReview = ({onCancel}) =>{
    return (
        <div>
            <h5>
                Please confirm your entries
                <button type="submit" className="yellow darken-3 btn-flat" onClick={onCancel}>
                    Back
                </button>
            </h5>
        </div>
    )
}

export default SurveyFormReview
