document.getElementById("resumeForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const fileInput =
document.getElementById("resume");

const formData = new FormData();

formData.append(
"resume",
fileInput.files[0]
);

const response = await fetch(
"http://localhost:5000/upload",
{
method:"POST",
body:formData
}
);

const data = await response.json();

document.getElementById("result").innerHTML=
`
<h3>Resume Score: ${data.score}</h3>
<p>${data.message}</p>
`;

});