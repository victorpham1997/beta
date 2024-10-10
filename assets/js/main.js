var root = document.querySelector(':root');


// const setVariables = vars => Object.entries(vars).forEach(v => gsapTrigger(2, v[0],v[1]));



document.getElementById("theme_dark").onclick = function switchTheme() {
  var darkThemeBtn = document.getElementById('theme_dark');
  var darkTheme = darkThemeBtn.classList.contains('is-active');
  var themeVar; 

  if (darkTheme){
    // change to white light
    applyTheme(darkTheme);
    gsap.to(":root", { 
      duration: getComputedStyle(root).getPropertyValue('--animation_duration'),
      '--border-color': getComputedStyle(root).getPropertyValue('--border-color-light'),
      '--font-color': getComputedStyle(root).getPropertyValue('--font-color-light'),
      '--font-background-color': getComputedStyle(root).getPropertyValue('--font-background-color-light'),
      '--background-color': getComputedStyle(root).getPropertyValue('--background-color-light'),
      '--theme-button-background': getComputedStyle(root).getPropertyValue('--theme-button-background-light'),    
    });

    darkThemeBtn.classList.remove("is-active");

  }else{
    // change to dark theme
    applyTheme(darkTheme);
    gsap.to(":root", { 
      duration: getComputedStyle(root).getPropertyValue('--animation_duration'),
      '--border-color': getComputedStyle(root).getPropertyValue('--border-color-dark'),
      '--font-color': getComputedStyle(root).getPropertyValue('--font-color-dark'),
      '--font-background-color': getComputedStyle(root).getPropertyValue('--font-background-color-dark'),
      '--background-color': getComputedStyle(root).getPropertyValue('--background-color-dark'),
      '--theme-button-background': getComputedStyle(root).getPropertyValue('--theme-button-background-dark'),
    });

    darkThemeBtn.classList.add("is-active");

  }
  // setVariables(themeVar);
};