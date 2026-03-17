export function errorPage(){
    const errorPage = `
     <div class="containerError">
        <div class="error-container">
            <div class="error-code">404</div>
            <div class="error-message">Page Not Found</div>
            <div class="error-description">
                Sorry, the page you are looking for does not exist.
            </div>
            <a href="/" class="error-button">Go Home</a>
        </div>
    </div>
    `
    document.body.innerHTML= errorPage
}