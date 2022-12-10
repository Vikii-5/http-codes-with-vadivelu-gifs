let container = document.querySelector('.container');

let content = document.createElement('div');
content.className = 'content d-flex flex-column justify-content-center align-items-center';
container.appendChild(content);

let heading = document.createElement('h3');
heading.className = 'heading text-center';
heading.innerHTML = "HTTP Status Codes with Vadivelu JPG's"
content.appendChild(heading);

let subHeading = document.createElement('h5');
subHeading.innerText = "Save JPG's and use it your Projects"
content.appendChild(subHeading);

let selectCode = document.createElement('select');
selectCode.className = 'form-select';
content.appendChild(selectCode);

let statusCodes = ['100 - Continue', '101 - Switching Protocols', '200 - OK', '201 - Accepted', '206 - Partial Content', '301 - Moved Permanently', '302 - Found', '307 - Temporary Redirect', '400 - Bad Request', '401 - Unauthorized', '402 - Payment Required', '403 - Forbidden', '404 - Not Found', '405 - Method Not Allowed', '406 - Not Acceptable', '408 - Request Timeout', '409 - Conflict', '410 - Gone', '411 - Length Required', '412 - Precondition Failed', '417 - Expectation Failed', '422 - Unprocessable Entity', '423 - Locked', '500 - Internal Server Error', '502 - Bad Gateway'];

statusCodes.forEach((code) => {
    let option = document.createElement('option');
    option.value = code.slice(0, 3);
    option.innerText = code;
    selectCode.appendChild(option);
})

let button = document.createElement('button');
button.type = 'submit';
button.innerText = 'Get Thalaivan JPG'
button.className = 'btn btn-outline-light';
content.appendChild(button);

let jpg = document.createElement('img');
content.appendChild(jpg);

button.addEventListener('click', () => {

    if(true){
        jpg.classList.add('hidden');
    }

    let url = `https://vadivelu.anoram.com/jpg/${selectCode.value}`;
    jpg.classList.remove('hidden');
    jpg.src = url;
})
