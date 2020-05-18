import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ( {onInputChange, onSubmit} ) => {
    return (
        <div>
            <p className="fa3">
                {'Tbis intellligrnt brain is gonna detect face in the picture. Try it!'}
            </p>           
            <div className="center">
                <div className="pa4 br3 shadow-5 center form center">
                    <input className="f4 pa2 w-70 center" type="text" onChange={ onInputChange }/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={ onSubmit }>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;