import React from "react";
import { animated } from "react-spring";
import styled from 'styled-components'

const Modal = ({ style, setOpen }) => (
//   <animated.div style={style} className="modal">
    <ModalContainer>
        <h3>Modal title</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores
        molestias praesentium impedit. Facere, perferendis voluptate at, amet
        excepturi ratione mollitia nemo ipsum odit impedit doloremque rerum.
        Quisquam, dolorum at?
        </p>
        <CloseButton onClick={setOpen(false)}>
        Close
        </CloseButton>
    </ModalContainer>
//   </animated.div>
);

export default Modal;

const ModalContainer = styled.div`
    width: 400px;
    height: 250px;
    color: #fff;
    background: #6929c4;
    padding: 40px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    position: absolute;
    z-index: 90;
    top: calc(50% - 145px);
    left: calc(50% - 220px);
    display: flex;
    flex-direction: column;
`;

const CloseButton = styled.button`
    padding: 16px;
    background-color: #fff;
    color: #6929c4;
    font-size: 1em;
    border: none;
    margin-top: 16px;
    width: 90%;
    align-self: center;
    cursor: pointer;
    transition: background-color 0.1s linear;
`;