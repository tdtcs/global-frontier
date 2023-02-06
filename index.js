var input = document.getElementById("input");
var prompt = document.getElementById("prompt");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var command = input.value.toLowerCase();
        input.value = "";
        var pre = document.createElement("pre");
        pre.appendChild(document.createTextNode(command))
        output.appendChild(pre);

        if (command === "help") {
            pre = document.createElement("pre");
            pre.appendChild(document.createTextNode(" Available commands: about, help, clear, ping"))
            output.appendChild(pre);
        } else if (command === "clear") {
            output.innerHTML = "";
        } else if (command === "ping") {
            pre = document.createElement("pre");
            pre.appendChild(document.createTextNode(" Pong!"))
            output.appendChild(pre);
        } else if (command === "about") {
            pre = document.createElement("pre");
            pre.appendChild(document.createTextNode(" Redirecting you..."))
            output.appendChild(pre);
            window.location.href = "https://google.com/about"; // TODO
        } 

        else {
            pre = document.createElement("pre");
            pre.appendChild(document.createTextNode(" Unknown command: " + command))
            output.appendChild(pre);
        }
    }
});
