import React from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';

export default function customButton(props) {
    const buttonClass = classNames('button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger,
      'button--edit': props.edit,
    });

    return (
       <>
         <Button
           className={buttonClass}
           onClick={props.onClick}
        //    disabled={props.disabled}
         >
           {props.children}
         </Button>
       </>
     );
}