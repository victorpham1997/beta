var root = document.querySelector('body');

window.onload = function() {
  // Your JavaScript code here
  root.style.setProperty('background-color', 'white');
  // root.style.setProperty('margin', '50%');
};

// let darkTheme = localStorage.getItem("dark_theme");
// if (darkTheme==null){
//     darkTheme = true;
//     localStorage.setItem("dark_theme", darkTheme);
// }else{
//     darkTheme = (darkTheme == 'true');
// }
// let theme;
// if(darkTheme){
//   theme = 'dark'
// }else{
//   theme = 'light'
// }
// window.onload = function() {
//   // Your JavaScript code here
//   root.style.setProperty('--border-color', style.getPropertyValue(`--border-color-${theme}`));
//   root.style.setProperty('--font-color', style.getPropertyValue(`--font-color-${theme}`));
//   root.style.setProperty('--background-color', style.getPropertyValue(`--background-color-${theme}`));
//   root.style.setProperty('--theme-button-background', style.getPropertyValue(`--theme-button-background-${theme}`));
// };




// const setVariables = vars => Object.entries(vars).forEach(v => gsapTrigger(2, v[0],v[1]));

// document.getElementById("theme_dark").onclick = function switchTheme() {
//   var darkThemeBtn = document.getElementById('theme_dark');
//   var darkTheme = darkThemeBtn.classList.contains('is-active');
//   var themeVar; 

//   if (darkTheme){
//     // change to white light
//     applyTheme(darkTheme);
//     gsap.to(":root", { 
//       duration: getComputedStyle(root).getPropertyValue('--animation_duration'),
//       '--border-color': getComputedStyle(root).getPropertyValue('--border-color-light'),
//       '--font-color': getComputedStyle(root).getPropertyValue('--font-color-light'),
//       '--font-background-color': getComputedStyle(root).getPropertyValue('--font-background-color-light'),
//       '--background-color': getComputedStyle(root).getPropertyValue('--background-color-light'),
//       '--theme-button-background': getComputedStyle(root).getPropertyValue('--theme-button-background-light'),    
//     });

//     darkThemeBtn.classList.remove("is-active");

//   }else{
//     // change to dark theme
//     applyTheme(darkTheme);
//     gsap.to(":root", { 
//       duration: getComputedStyle(root).getPropertyValue('--animation_duration'),
//       '--border-color': getComputedStyle(root).getPropertyValue('--border-color-dark'),
//       '--font-color': getComputedStyle(root).getPropertyValue('--font-color-dark'),
//       '--font-background-color': getComputedStyle(root).getPropertyValue('--font-background-color-dark'),
//       '--background-color': getComputedStyle(root).getPropertyValue('--background-color-dark'),
//       '--theme-button-background': getComputedStyle(root).getPropertyValue('--theme-button-background-dark'),
//     });

//     darkThemeBtn.classList.add("is-active");

//   }
//   // setVariables(themeVar);
// };