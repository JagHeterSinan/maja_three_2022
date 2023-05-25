<script lang="ts">

    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
	export let form: ActionData;

</script>

<div class="grid-container">
	<form method="POST" action="?/register">
		<div class="title">
			Register
		</div>
		<input type="text" id="username" name="username" placeholder="username" autocomplete="off" required/>

		<input type="text" id="password" name="password" placeholder="password" autocomplete="off" required/>

		<p class="gender">Gender</p>
		<div class="gender-details">
			<input type="radio" name="gender" id="male" value="male"> Male
			<input type="radio" name="gender" value="female"> Female
			<input type="radio" name="gender" value="unknown" checked> Prefer not to say
		</div>
		
		<input type="submit" value="register">
		or <a class="link1" href="/login">log in</a>
		<div class="invalidtxt">
			{#if form?.message}
			<p>{form?.message}</p>
			{/if}
		</div>
	</form>
</div>

<body>
	<style>
	body{
		background-color: #2c3e50;	
		font-family: 'Helvetica';
	}
		.grid-container{
			grid-template-columns: auto ;
			margin: auto;
			margin-top: 170px;
			width: 350px;
			height: 300px;
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
		form .gender-details .gender-title{
			font-size: 15px;
			font-weight: 500;
		}
		.gender{
			font-weight: bold;
			font-size: 20px;
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
	.link1{
		text-decoration: none;
	}


	</style>
	</body>	