var installPrompt;

var butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt event fired:', event);
    installPrompt = event;
});

butInstall.addEventListener('click', async () => {
    console.log('install button clicked');
    installPrompt.prompt();
    const promptResponse = await installPrompt.userChoice;
    if (promptResponse.outcome === 'accepted') {
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('App Installed;', event);
});
