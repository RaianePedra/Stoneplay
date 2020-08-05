import React from 'react';

function ButtonLink(props) {
<<<<<<< HEAD
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
=======
    //props => {className: "O que alguem passar", href:"/"}
    console.log(props);
    return (
        <a href={props.href}  className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;  
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb
