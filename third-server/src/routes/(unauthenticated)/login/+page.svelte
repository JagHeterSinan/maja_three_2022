<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="grid-container">
	<form method="POST" action="?/login">
		<div class="title">
			Login
		</div>
		<input type="text" id="username" name="username" placeholder="username" autocomplete="off" required/>

		<input type="text" id="password" name="password" placeholder="password" autocomplete="off" required/>
		
		<input type="submit" value="Log in">
		or <a class="link1" href="/register">register</a>
	</form>
</div>

<div class="invalidtxt">
	{#if form?.message }
	<p>{form?.message}</p>
	{/if}
</div>


<body>
<style>
	body{
		background-color: #2c3e50;	
		font-family: 'Helvetica';
	}
	.grid-container{
		margin: auto;
		margin-top: 170px;
		width: 350px;
		height: 220px;
		background:white;
		border: 3px solid;
  		padding: 30px;
		border-radius:10px;
	}
	input[type=text], select {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	}

	input[type=submit] {
	width: 100%;
	background-color: rgb(4, 174, 231);
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	} 
	input[type=submit]:hover {
	background-color: rgb(0,204,255);
	}
	.title{
		font-weight: bold;
		font-size:30px
	}
	.invalidtxt{
		margin: auto;
		margin-top: 10px;
		width: 275px;
		height: 50px;
		color:white;
		border: 3px solid;
		border-color:transparent;
  		padding: 10px;
		border-radius:10px;
	}
	.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.link1{
		text-decoration: none;
	}
</style>
</body>	