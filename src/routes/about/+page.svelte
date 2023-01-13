<script>
import location from '$lib/images/location.svg';
import user from '$lib/images/user.svg';
import pc from '$lib/images/mac-svgrepo-com.svg';
import dev from '$lib/images/braces.svg';
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1> 
		<img src={user} alt="user icon"/>
		Hi i'm Sebasop320 an amateur developer 
	</h1>

	<p>
		<img src={location} alt="location Icon" /> Based on <b>Panama City</b>
	</p>
	<p>
		<img src={pc} alt="PC icon" /> Mac Os & Ubuntu Server
	</p>

	<p>
		<img src={dev} alt="PC icon" /> HTML, REACT, JS & SVELTE
	</p>


	<h1>
		Projects
	</h1>
	
	
<ul>
	<li>
		Auto watering plant sistem for arduino <a href="https://github.com/sebasop320/auto_riego">Github Project</a>
	</li>
	<li>
		Weather desktop app using tauri <a href="https://github.com/sebasop320/weather-app">Github Project</a> (the Project was discarded so is not longer maintaind by me)
	</li>
	<li>
		Old react portfolio <a href="https://github.com/sebasop320/react-portfolio">Github Project</a>
	</li>
</ul>

</div>
