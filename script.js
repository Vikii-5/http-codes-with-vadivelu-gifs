let container = document.querySelector('.container');

let content = document.createElement('div');
content.className = 'content d-flex flex-column justify-content-center align-items-center';
container.appendChild(content);

let heading = document.createElement('h3');
heading.className = 'heading text-center';
heading.innerHTML = "HTTP Status Codes with Vadivelu Gif's"
content.appendChild(heading);

let subHeading = document.createElement('h5');
subHeading.innerText = "Save Gif's and use it your Projects"
content.appendChild(subHeading);

let selectCode = document.createElement('select');
selectCode.className = 'form-select';
content.appendChild(selectCode);

let statusCodes = ['100 - Continue', '101 - Switching Protocols', '200 - OK', '201 - Accepted', '206 - Partial Content', '301 - Moved Permanently', '302 - Found', '307 - Temporary Redirect', '400 - Bad Request', '401 - Unauthorized', '402 - Payment Required', '403 - Forbidden', '404 - Not Found', '405 - Method Not Allowed', '406 - Not Acceptable', '408 - Request Timeout', '409 - Conflict', '410 - Gone', '411 - Length Required', '412 - Precondition Failed', '417 - Expectation Failed', '421 - Misdirect Request', '422 - Unprocessable Entity', '423 - Locked', '424 - Failed Dependency', '499 - Client Closed Request', '500 - Internal Server Error', '502 - Bad Gateway', '506 - Variant also Negotiates', '508 - Loop Detected'];

statusCodes.forEach((code) => {
    let option = document.createElement('option');
    option.value = code.slice(0, 3);
    option.innerText = code;
    selectCode.appendChild(option);
})

let button = document.createElement('button');
button.type = 'submit';
button.innerText = 'Get Thalaivan Gif'
button.className = 'btn btn-outline-light';
content.appendChild(button);

let gif = document.createElement('img');
content.appendChild(gif);

button.addEventListener('click', () => {

    if(true){
        gif.classList.add('hidden');
    }

    let url = `https://vadivelu.anoram.com/gif/${selectCode.value}`;
    gif.classList.remove('hidden');
    gif.src = url;
})
