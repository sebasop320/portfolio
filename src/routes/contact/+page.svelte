<script>
  import emailjs from '@emailjs/browser';

  function sendEmail(e) {
    emailjs.sendForm('service_4bzrx0a', 'template_94gqytg', e.target, 'kYZTkMFOPTOCbLSAC')
      .then((result) => {
          alert('SUCCESS!', result.text);
      }, (error) => {
          alert('FAILED...', error.text);
      });
  }
</script>

<form on:submit|preventDefault={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name">
  <label>Email</label>
  <input type="email" name="user_email">
  <label>Message</label>
  <textarea name="message"></textarea>
  <input type="submit" value="Send">
</form>



<style>
	input[type=email], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>