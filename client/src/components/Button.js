import React from 'react';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import './Button.scss'


export default function customButton(props) {
    const buttonClass = classNames('button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger,
      'button--edit': props.edit,
    });

    return (
       <>
         <Button
           variant="filledTonal"
           className={buttonClass}
           onClick={props.onClick}
          
        //    disabled={props.disabled}
         >
           {props.children}
         </Button>
       </>
     );
}