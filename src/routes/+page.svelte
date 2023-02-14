<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import user from '$lib/images/user.svg';
</script>

<svelte:head>
	<title>Sebasop320 --- Sebastian Ocampo</title>
	<meta title="Sebasopdev --- Sebastian Ocampo"/>
	<meta name="description" content="Hi i'm Sebasop320 an enthusiast developer, i`m verry passionate about tech and airplanes" />
  	<meta name="keywords" content="portfolio, sebasop320, sebastian ocampo">
  	<meta name="author" content="Sebastian Ocampo">
</svelte:head>


	<h1>
	<img src={user} alt="user icon"/>
	Hi i'm Sebasop320 an enthusiast developer 
		<style>
		h1{
			color: #f25416;
			font-family: 'Bold'
			font-weight: 'bold';
			font-size: 4em;
		}
		</style>
	</h1>

<section>
		
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
				
			</picture>
		</span>
		

		
	

	<h2>
		
	</h2>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
