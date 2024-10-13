function submission() {
  let pw = document.forms["myForm"]["password"].value;
  let correctPassword = "frankbutt";
  if (pw === correctPassword) {
    document.getElementById('transcriptContent').style.display = 'block';
    return false;
  } else {
    alert('Incorrect password');
    return false;
  }
}
