<script lang="ts">
	import type { ActionData, PageServerData } from "./$types";

	export let form: ActionData;
	export let data: PageServerData;
</script>

<div class="grid-container">
	<form method="POST" action="?/authenticate">
		<div class="title-container">
			<p class="title">Multi-factor</p> <p>{"mfa: " + data?.mfa}</p>
		</div>    
		<input type="text" action="?/authenticate" name="mfa" autocomplete="off" required/>
		
		<input type="submit" value="Authenticate">	  

	</form>
</div>
<div class="invalidtxt">
  {#if form?.message}
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
		grid-template-columns: auto ;
		margin: auto;
		margin-top: 170px;
		width: 350px;
		height: 230px;
		background:white;
		border: 3px solid;
  	padding-left: 30px;
    padding-right: 30px;
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
  .title-container {
  display: grid;
  grid-template-columns: auto auto;
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
  
</style>
</body>	