

  
function shareOrCopy(action) {

    const ogImage = document.querySelector('meta[property="og:image"]').content
    const ogTitle = document.querySelector('meta[property="og:title"]').content
    const postURL = window.location.href; // Automatically grab the current page's URL
    switch (action) {
        
        case 'linkedin':
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postURL)}&title=${encodeURIComponent(ogTitle)}&imgsrc=${encodeURIComponent(ogImage)}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(postURL)}`, '_blank');
            break;
        case 'copy':
            const button = document.querySelector('[data-action="copy"]');
            // Replace the SVG with the new SVG temporarily
            const initialSVG = button.innerHTML;
            const newSVG = `
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00004 16.4199L0.790039 10.2099L3.62004 7.37988L7.00004 10.7699L16.88 0.879883L19.71 3.70988L7.00004 16.4199Z" fill="#1C1C1E"/>
            </svg>
            `;
            button.innerHTML = newSVG;
            setTimeout(() => {
                // Revert back to the initial SVG after 1 second (1000 milliseconds)
                button.innerHTML = initialSVG;
            }, 1000);
            // Copy the post URL
            const textArea = document.createElement('textarea');
            textArea.value = postURL;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            break;
        default:
            break;
    }
}

// Attach click event listeners to all buttons with the 'share' class
const shareButtons = document.querySelectorAll('.share');
shareButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        shareOrCopy(action);
    });
});


