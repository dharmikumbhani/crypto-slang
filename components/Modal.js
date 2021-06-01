// import React from "react";
// import styled from 'styled-components'
// import {useSpring, animated, config} from 'react-spring'
// import slangs from '../data';

// export default function Modal ({slangIndex, isOpen, setIsOpen}) {

//     const animation = useSpring({
//         opacity: isOpen ? 1 : 0,
//         transform: isOpen ? `translateY(0)` : `translateY(-20%)`,
//     })
//     return(
//         <animated.div style={animation}>
//             <ModalContainer >
//                 <TitleSlang>{slangs[slangIndex].slang}</TitleSlang>
//                 <FullForm>{slangs[slangIndex].fullForm}</FullForm>
//                 <SlangInfo>{slangs[slangIndex].description}</SlangInfo>
//             </ModalContainer>
//         </animated.div>
//     )
// }

// const ModalContainer = styled.div`
//     width: 400px;
//     height: 250px;
//     color: #fff;
//     background: #6929c4;
//     padding: 40px;
//     /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
//     position: absolute;
//     z-index: 90;
//     top: 50%;
//     left: 50%;
//     transform: translateY(-50%);
//     /* top: calc(50% - 145px);
//     left: calc(50% - 220px); */
//     display: flex;
//     flex-direction: column;
// `;

// const CloseButton = styled.button`
//     padding: 16px;
//     background-color: #fff;
//     color: #6929c4;
//     font-size: 1em;
//     border: none;
//     margin-top: 16px;
//     width: 90%;
//     align-self: center;
//     cursor: pointer;
//     transition: background-color 0.1s linear;
// `;
// const TitleSlang = styled.h3`
//   display: inline-block;
//   color:  ${props => props.theme.foregroundCell};
//   text-align: center;
//   font-size: var(--font-size-modal-title);
//   /* margin-bottom: var(--gutter-slang-tabs); */
//   margin-bottom: 12px;
//   border-bottom: 1px solid ${props => props.theme.secondary1};
// `;

// const FullForm = styled.p`
//   color:  ${props => props.theme.foregroundCell};
//   text-align: center;
//   font-size: var(--font-size-heading2);
//   margin-bottom: 12px;
//   /* margin-bottom: var(--gutter-slang-tabs); */
//   /* border-bottom: 1px solid ${props => props.theme.secondary1}; */
// `;

// const SlangInfo = styled.p`
//   color:  ${props => props.theme.foregroundCell};
//   text-align: center;
//   font-size: var(--font-size-heading2);
//   margin-bottom: var(--gutter-slang-tabs);
// `;


//Resources
// https://blog.logrocket.com/animations-with-react-spring/