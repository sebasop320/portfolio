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

  import { emailValidator, requiredValidator } from './validators.js'
  import { createFieldValidator } from './validation.js'

  const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator())
	
	let email = null



</script>
<title>Let's have a talk</title>

<h1>Let's have a talk
<style>
  h1{
    color: #f25416;
    font-family: 'Bold'
    font-weight: 'bold';
    font-size: 4em;
  }
  </style>
  </h1>

<form on:submit|preventDefault={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name">
  <label>Email</label>
  <input type="email" name="user_email">
  <label>Message</label>
  <textarea name="message"></textarea>
  <input type="submit" value="Send">
<style>



/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  
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




</form>


