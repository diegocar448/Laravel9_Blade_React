import React from 'react';
import LoadingMod from './Loading.module.css';


const Loading = () => {
  return (
    <div className={ LoadingMod.center }>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
        <div className={ LoadingMod.wave }></div>
    </div>
  )
}

export default Loading
