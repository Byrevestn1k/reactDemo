
const NavigationItem = (props) => {
   const { text, isUppercasetext, description, shoulRenderDescription } = props

   const descriptionSection = (<div className='description'>
      {description}
   </div>)

   return (
      <div className='commom'>
         <div className='text'>
            {isUppercasetext ? text.toUpperCase() : text}
         </div>
         {shoulRenderDescription && descriptionSection
         }
      </div>
   )
}

export default NavigationItem;