if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/urbanosrojos/sw.js', { scope: '/urbanosrojos/' })})}