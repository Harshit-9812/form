const wrapper = document.querySelector(".form-wrap")
const inputs = document.getElementsByTagName("input")
Array.from(inputs).forEach((e)=>{
    e.addEventListener("focus",()=>{
        console.log("hello")
        document.documentElement.style.setProperty("--myColor1", "green");
        
        wrapper.style.backgroundSize = "cover"
    })
})