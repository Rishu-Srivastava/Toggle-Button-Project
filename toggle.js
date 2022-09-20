const text = document.querySelector(".text");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

function funcOuter(){
    if(text.textContent == "OFF" && outer.style.backgroundColor == "black" && inner.style.left == "20px")
        {
            text.textContent = "ON";
            outer.style.backgroundColor = "blue";
            inner.style.left = "70px";
        }

    else
    {
        text.textContent = "OFF";
        outer.style.backgroundColor = "black";
        inner.style.left = "20px"
    }
}