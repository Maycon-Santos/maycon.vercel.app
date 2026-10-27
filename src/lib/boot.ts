export const THEME_KEY = "theme";

/** Script curto para o <head>: aplica o tema salvo antes da primeira pintura e marca que há JavaScript. */
export const bootScript = `(function(){var r=document.documentElement;r.classList.add('js');try{var t=localStorage.getItem('${THEME_KEY}');if(t==='light'||t==='dark')r.dataset.theme=t}catch(e){}})();`;
