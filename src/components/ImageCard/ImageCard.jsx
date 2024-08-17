import React from "react"
import css from './ImageCard.module.css'
export default function ImageCard({image, openModal}){
    return(
<div>
<img className={css.card}
src={image.urls.thumb}
alt={image.description} 
onClick={()=> openModal(image.urls.full)}/>
</div>
    )
}