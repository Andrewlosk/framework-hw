'use strict';

//task 1

import { defaultModules, error, success, info } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

// const score = document.getElementById('score');
const key = document.getElementById('key');
const message = document.getElementById('message');
let currentKeyIndex = 0;
const restartBtn = document.getElementById('restart')
const keys = ['q','w','e','r','t','y','u','i','o','p']


const newKeyFn = () => {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    key.textContent = keys[currentKeyIndex];
    message.textContent = '';
}


document.addEventListener('keydown', e => {
    if (e.key === keys[currentKeyIndex]) {
        newKeyFn()
        message.textContent = 'вгадав'
        const successNotice = success({
            text: 'success!'
        })
    } else {
        message.textContent = 'не вгадав'
        const myError = error({
            text: 'not correct!'
        })
        console.log('not correct');
    }
})

document.addEventListener('keypress', (e) => {
    e.preventDefault()
})


restartBtn.addEventListener('click', () => {
    newKeyFn()
    const infoNotice = info({
        text: 'new game!'
    })
})

newKeyFn()