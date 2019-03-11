export function makeHeaderHtml() {
    const html = `
    <header>
        <img src="assets/alchemy-logo.png">
        <h1 class="header-title">Book Finder</h1>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeUserHtml(user){
    const html = /*html*/ `
    <div class="user-profile">
        <img src="${user.photoURL}" alt="">
        <span>${user.displayName}</span>
        <button id="sign-out-button">Sign Out</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}