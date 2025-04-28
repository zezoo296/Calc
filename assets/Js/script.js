'use strict';

const calcBody = document.querySelector('.calcBody');
const preview = document.querySelector('.preview');
const equalBtn = document.querySelector('#equal');
const deleteBtn = document.querySelector('#del');
let flag = false;
const themes = {
    1: {
      '--main-color': '#3b4664',
      '--text-color': 'white',
      '--theme-btn-color': '#d63c32',
      '--preview-color': '#181f32',
      '--calc-body-color': '#252d44',
      '--btn-back-color': '#eae3db',
      '--btn-shadow-color': '#b5a396',
      '--btn-text-color': '#414a5b',
      '--del-reset-text-color': 'white',
      '--del-reset-back-color': '#647299',
      '--equal-btn-text-color': 'white',
      '--equal-btn-back-color': '#d13f30'
    },
    2: {
      '--main-color': '#e6e6e6',
      '--text-color': '#333333',
      '--theme-btn-color': '#d63c32',
      '--preview-color': '#eeeeee',
      '--calc-body-color': '#d3cdcd',
      '--btn-back-color': '#e5e4e0',
      '--btn-shadow-color': '#a79e91',
      '--btn-text-color': '#35352c',
      '--del-reset-text-color': 'white',
      '--del-reset-back-color': '#388187',
      '--equal-btn-text-color': 'white',
      '--equal-btn-back-color': '#c85401'
    },
    3: {
      '--main-color': '#17062a',
      '--text-color': '#ffe53d',
      '--theme-btn-color': '#00ded0',
      '--preview-color': '#1e0836',
      '--calc-body-color': '#1e0836',
      '--btn-back-color': '#331b4d',
      '--btn-shadow-color': '#851c9c',
      '--btn-text-color': '#ffe53d',
      '--del-reset-text-color': 'white',
      '--del-reset-back-color': '#56077c',
      '--equal-btn-text-color': 'black',
      '--equal-btn-back-color': '#00decf'
    }
  };
  
  const radioButtons = document.querySelectorAll('input[name="theme"]');
  
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      const selectedTheme = radio.value;
      const themeColors = themes[selectedTheme];
  
      for (const [property, value] of Object.entries(themeColors)) {
        document.documentElement.style.setProperty(property, value);
      }
    });
  });
  
calcBody.addEventListener('click', function(e){
    if(e.target.nodeName === 'BUTTON'){ 
        if(flag){
            preview.textContent = '';
            flag = false;
        }
            

        if(e.target.id === 'del')
            preview.textContent = preview.textContent.slice(0, -1);
        else if (e.target.id === 'reset')
            preview.textContent = '';
        else if (e.target.id === 'equal')
        {
            try {
                preview.textContent = preview.textContent.replace("x", " * ");
                preview.textContent = eval(preview.textContent);
                flag = true;
            } catch (error) {
                preview.textContent = 'Error';
                flag = true;
            }
        }
            
        else
            preview.textContent += e.target.textContent;
    }
})

document.addEventListener('keydown', function(e){
    e.preventDefault();
    
    if(e.key === 'Enter') 
        equalBtn.click();

    else if(e.key === 'Backspace')
        deleteBtn.click();
    
});