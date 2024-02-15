// Get the install button element
const butInstall = document.getElementById('buttonInstall');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event for later use
    window.deferredPrompt = event;
    // Show the install button
    butInstall.classList.toggle('hidden', false);
});

// Listen for the install button click event
butInstall.addEventListener('click', async () => {
    // Get the stored prompt event
    const promptEvent = window.deferredPrompt;
    // If there is no prompt event, return
    if (!promptEvent) {
        return;
    }
    // Prompt the user to install the app
    promptEvent.prompt();
    // Clear the stored prompt event
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle('hidden', true);
});

// Listen for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    // Clear the stored prompt event
    window.deferredPrompt = null;
});
