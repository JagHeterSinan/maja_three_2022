<script lang="ts">
  import type { LayoutServerData } from "./$types";
  export let data: LayoutServerData;
</script>

<body>
  <div class="banner">
    <div class="navbar">
      <img src="../Mr.Blue.png" alt="logo" class="logo">
      <ul class="navbar">
        <li><a class="active" href="/">Home</a></li>
        <li><a href="settings">Settings</a></li>
        <li><a href="info">Info</a></li>
        <li><a href="support">Support</a></li>
        <div class="dropdown">
            <button class="dropbtn">Games</button>
            <div class="dropdown-content">
            <a href="RPS+">RPS+</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
          </div>
      </ul>
    </div>
  </div>

  <slot />
</body>

<style>
  body {
    background-color: #2c3e50;
    font-family: "Helvetica";
    color: white;
    margin: 0;
    padding: 0;
  }

  .banner{
    width: 100%;
    height: 100vh;
    background-image: linear-gradien(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(Mr.Blue.png);
    background-size: cover;
    background-position: center;
  }

  .navbar{
    width: 85%;
    margin:auto;
    padding: 35px 0;
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

  .logo{
    width: 120px;
    cursor: pointer;
  }
  .navbar ul li{
    list-style:none;
    display:inline-block;
    margin: 0 20px;
  }
  .navbar ul li a{
    text-decoration: none;
    color: #fff;;
    text-transform: uppercase;
  }
  .navbar ul li::after{
    content: '';
    height: 3px;
    width: 100%;
    background: #009688;
    position: absolute;
  }

  .dropbtn {
  background-color: #333;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #2b2b2b;
}
</style>
