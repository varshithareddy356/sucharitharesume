
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>My Portfolio</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" >
	<link rel="stylesheet" href="style.css">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600&display=swap');


:root{
  --yellow:#f3c600de;
}


*{
  font-family: 'Nunito', sans-serif;
  margin:0; 
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border:none;
  transition: all .2s linear;
}

*::selection{
  background: var(--yellow);
  color:#333;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

html::-webkit-scrollbar{
  width:1.4rem;
}

html::-webkit-scrollbar-track{
  background: #222;
}

html::-webkit-scrollbar-thumb{
  background: var(--yellow);
}

body{
  background:#36454F;
  overflow-x: hidden;
  padding-left: 35rem;
}

header{
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  height:100%;
  width:33rem;
  background: #333;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-flow:column;
  text-align:center;
  padding-top: 20px;
}

header .user img{
  height:17rem;
  width:17rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: .7rem solid var(--yellow);
}

header .user .name{
  font-size: 3rem;
  color:#fff;
}

header .navbar{
  width:100%;
}

header .navbar ul{
  list-style:none;
  padding:1rem 4rem;

}

header .navbar ul li a{
  display: block;
  padding: 1rem;
  margin:1rem .5rem;
  background: #36454F;
  color:#fff;
  font-size:2rem;
  border-radius: 5rem;
}

header .navbar ul li a:hover{
  background: var(--yellow);
}

#menu{
  position: fixed;
  top:2rem;
  right:2rem;
  background: #555;
  color:#fff;
  cursor:pointer;
  font-size:2.5rem;
  padding: 1rem 1.5rem;
  z-index:1000 ;
  display:none;
}

.home{
  display:flex;
  justify-content:center;
  flex-flow:column;
  padding:0 15rem;
}

section{
  min-height: 100vh;
  padding:1rem;
}

.home h3{
  font-size: 2.5rem;
  padding:2rem;
  color:#fff;
}

.home h1{
  font-size:5rem;
  color:#fff;
}

.home h1 span{
  color: var(--yellow);
}

.btn{
  padding: .7rem 3rem;
  font-size: 2rem;
  border-radius: 5rem;
  margin-top: 1rem;
  background: #333;
  color:#fff;
  cursor: pointer;
}

.btn i{
  padding: 0 .5rem;
  font-size: 1.8rem;
}

.btn:hover{
  background: var(--yellow);
}

.heading{
  text-align: center;
  margin: 1 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: .2rem solid #fff4;
  color:#fff;
}

.heading span{
  color:var(--yellow);
}

.about .row{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1rem 0;
}

.about .row .info{
  flex:1 1 48rem;
  padding: 2rem 1rem;
  padding-left: 6rem;
}

.about .row .info h3{
  font-size: 2rem;
  color:var(--yellow);
  padding: 1rem 0;
  font-weight: normal;
}

.about .row .info h3 span{
  color: #eee;
  padding: 0 .5rem;
}

.education .box-container{
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:1rem 0;
  padding-left:3rem;
}

.education .box-container .box{
  width:27rem;
  margin:4rem 1rem;
  padding-left: 4rem;
  border-left:.2rem solid #fff;
  position: relative;
}

.education .box-container .box span{
  font-size: 1.5rem;
  background: #222;
  color:#fff;
  border-radius: 5rem;
  padding: .5rem 2.5rem;
}

.education .box-container .box h3{
  font-size:2rem;
  color:#fff;
  padding-top:2.5rem;
}

.education .box-container .box h5{
  font-size:1.7rem;
  color:#eee;
  padding-top:1.5rem ;
}

.education .box-container .box p{
  font-size:1.4rem;
  color:#eee;
  padding:1rem 0;
}

.education .box-container .box i{
  position: absolute;
  top:-1.5rem;
  left:-2.5rem;
  height:5rem;
  width:5rem;
  border-radius: 50%;
  line-height: 5rem;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  background: var(--yellow);
}

.portfolio .box-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 8rem;
  padding: 2rem 0;
}

.portfolio .box-container .box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20rem;
  width: 32rem;
  border-radius: 2rem;
  margin: 1rem;
  background: #333;
  transition: 0.5s;
/*  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);*/
}

.portfolio .box-container .box .img {
  position: absolute;
  width: 40rem;
  height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  transition: opacity 0.5s ease;
}

.portfolio .box-container .box:hover .img{
  opacity: 0;
}

.portfolio .box-container .box .img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio .box-container .box .information {
  position: absolute;
  top: 16rem;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  transition: 0.5s;
}

.portfolio .box-container .box .information h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--yellow);
  padding-top:1rem ;
  padding-bottom: 3rem;
  padding-left: 2rem;
}

.portfolio .box-container .box .information td {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  padding-left: 2rem;
}

.portfolio .box-container .box:hover .information {
  top: 1rem;
  height: 30rem;
}

.portfolio .box-container .box:hover {
  height: 25rem;
  width:38rem;
  cursor: pointer;
}
.portfolio .box-container .boxes:hover {
  height: 30rem;
  width:38rem;
  cursor: pointer;
}

.portfolio .box-container .box .information a{
  color: var(--yellow);
}

.contact .row{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.contact .row .content{
  flex:1 1 30rem;
  padding: 4rem;
  padding-bottom: 0;
}

.contact .row form{
  flex:1 1 45rem;
  padding: 2rem;
  margin: 2rem;
  margin-bottom: 4rem;
}

.contact .row form .box{
  padding: 1.5rem;
  margin:1rem 0;
  background:#333333c1;
  color:#fff;
  text-transform: none;
  font-size: 1.7rem;
  width:100%;
}

.contact .row form .message{
  height:10rem;
  resize: none;
}

.contact .row .content .title{
  color:#fff;
  font-size: 3rem;
  padding-bottom: 2rem;
}

.contact .row .content .info h3{
  display: flex;
  align-items: center;
  font-size: 2rem;
  color:#eee;
  padding: 1rem 0;
  font-weight: normal;
}

.contact .row .content .info i{
  padding-right: 1rem;
  color: var(--yellow);
}

.contact .row .content .info a{
  color:#eee;
}

.top{
  position: fixed;
  bottom: 1rem;
  right:2rem;
  z-index:100;
  display:none;
}

@media(max-width:1200px){
  html{
    font-size:55%;
  }
  .home{
    padding: 1rem 4rem;
  }
}

@media(max-width:991px){
  header{
    left:-120%;
  }
  #menu{
    display: block;
  } 
  header.toggle{
    left:0%;
  }
  body{
    padding: 0;
  }
}

@media(max-width:768px){
  html{
    font-size:50%;
  }
}

@media(max-width:400px){
  header{
    width:100vw;
  }
  .heading{
    margin: 0 3rem;
  }
  .education .box-container .box{
    width:100%;
  }
  .portfolio .box-container .box{
    width:100%;
  }
  .contact .row form{
    margin:3rem 0;
  }
  
}
</style>
</head>
<body>

	<header>
		<div class="user">
			<img src="https://m.media-amazon.com/images/I/31o-VWlOtKL._AC_UF1000,1000_QL80_.jpg" alt="">
			<h5 class="name">SUCHARITHA YELLAMLA</h5>
		</div>

		<nav class="navbar">
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#contact">Contact me</a></li>
			</ul>
		</nav>
	</header>

	<div id="menu" class="fas fa-bars"></div>

	<section class="home" id="home">
		<h3>Hi  There ..!</h3>
		<h1>I'm <span>SUCHARITHA YELLAMLA</span></h1>
		<a href="#about"><button class="btn">About Me <i class="fas fa-user"></i></button></a>
		
	</section>

	<section class="about" id="about">
		<h1 class="heading"><span>About</span> Me </h1>
		<div class="row">
			<div class="info">
				<h3> <span> Name :</span> Sucharitha Yellamla</h3>
				<h3> <span> Date of Birth : </span> 27-10-1999</h3>
				<h3> <span> Qualification :</span> MCA (Pursuing)</h3>
				<h3><span>Language : </span> Telugu, English, Hindi</h3>
				<a href="./sucharitha.pdf" download><button class="btn"> Download Resume <i class="fa fa-download"></i></button></a>
			</div>
	</section>

	<section class="education" id="education">
		<h1 class="heading">My <span> Education</span></h1>
		<div class="box-container">
			<div class="box">
				<i class="fas fa-graduation-cap"></i>
				<span>2023-2025</span>
				<h3>Master of Computer Applications</h3>
				<h5>Osmania University,Hyderabad</h5>

			</div>
            <div class="box">
				<i class="fas fa-graduation-cap"></i>
				<span>2019-2022</span>
				<h3>B.Sc Computer Science</h3>
				<h5>Osmania University,Hyderabad</h5>
				<p>CGPA : 8.88</p>
			</div>
			<div class="box">
				<i class="fas fa-graduation-cap"></i>
				<span>2017-2019</span>
				<h3>Intermediate(MPC)</h3>
				<h5>Sri Sai Vignyan Bharati junior College,Hyderabad</h5>
				<p>CGPA : 8.0</p>
			</div>
			<div class="box">
				<i class="fas fa-graduation-cap"></i>
				<span>2016-2017</span>
				<h3>SSC</h3>
				<h5>GHS.Bansilalpet,Hyderabad</h5>
				<p>CGPA : 8.8</p>
			</div>
	</section>

	<section class="portfolio" id="portfolio">
		<h1 class="heading">My <span>portfolio</span></h1>
		<div class="box-container">
			<div class="box">
				<div class="img">
					<img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="">
				</div>
				<div class="information">
					<h2>Technical Skills</h2>
					<table cellspacing="6">
						<tr>
							<td>Programming Languages</td>
                            <td>:</td>
							<td>C#,ADO.Net,ASP.Net</td>
						   
					    </tr>
					    <tr>
						    <td>Database Languages</td>
						    <td>:</td>
						    <td>MySQL,MONGODB</td>
					    </tr>
					    <tr>
						    <td>Front-End Design Languages</td>
						    <td>:</td>
						    <td >HTML,CSS,<br>JavaScript,<br>Bootstrap.</td>
					    </tr>
				    </table>
			    </div>
			</div>
			
			
			<div class="box boxes">
				<div class="img">
					<img src="https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/blog-sheet-5--11-.png" alt="">
				</div>
				<div class="information">
					<h2>Project</h2>
					<table cellspacing="6">
						<tr>
							<td>Developed  a web application that allows students to register for a course.</td>
							<td>-</td>
							<td><a >Online Course Management</a></td>
						</tr>
						<tr>
							<td>Devoloped a reliable platform for the medical website's operation.
              </td>
							<td>-</td>
							<td href="https://medicare-73348.web.app/"><a >Medical Website</a></td>
						</tr>
						<!-- <tr>
						    <td>Developed a web application to prioritize resumes submitted for job applications. 
                </td>
						    <td>-</td>
						    <td>Based on VLSI</td>
					    </tr> -->
				    </table>
			    </div>
		    </div>

            <div class="box">
				<div class="img">
					<img src="https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg" alt="">
				</div>
				<div class="information">
					<h2>Experience</h2>
				    <table>
					    <tr><td><li>Coresonant Systems pvt.ltd </li></td></tr>
                        <tr><td><li>Role: Junior Associate Software Developer </li></td></tr>
                        <tr><td><li>Duration: (12-06-2023)-Present</li></td></tr>

					    
				    </table>
			    </div>
			</div>
		    <div class="box">
				<div class="img">
					<img src="https://icsblog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/11/30144635/soft-skills-scaled-1.jpeg" alt="">
				</div>
				<div class="information">
					<h2>Personal Skills</h2>
				    <table>
					    <tr><td><li>Team Collaboration</li></td></tr>
					    <tr><td><li>Good Communication</li></td></tr>
					    <tr><td><li>Adaptability</li></td></tr>
                        <tr><td><li>Punctuality.</li></td></tr>
					    
					    
				    </table>
			    </div>
			</div>
		</div>
		
    </section>

    <section class="contact" id="contact">
    	<h1 class="heading"><span>Contact </span>Me</h1>
    	<div class="row">
    		<div class="content">
    			<h3 class="title">Contact Info</h3>
    		<div class="info">
    			<h3><i class="fas fa-envelope"></i><a href="mailto:sucharithayellamla@gmail.com">sucharithayellamla@gmail.com</a></h3>
    			<h3><i class="fas fa-phone"></i><a href="tel:+917386070853">7386070853</a></h3>
    			<h3><i class="fas fa-map-marker-alt"></i>Hyderabad,<br>Telangana,India</h3>
    		</div>
    	</div>

    	<form action="mailto:sucharithayellamla@gmail.com" method="post" enctype="text/plain">
    		<input type="text" placeholder="Name" class="box" value="" name="Name">
    		<input type="email" placeholder="Email" class="box" value="" name="Mail">
    		<input type="text" placeholder="Project" class="box" value="" name="Project"> 
    		<textarea name="Details" id="" cols="30" rows="10" class="box message" placeholder="Message" value="" ></textarea>
    		<button type="submit" class="btn">Send <i class="fas fa-paper-plane"></i></button>
    	</form>
    </div>
    	
    </section>

    <a href="#home" class="top">
    	<img src="images/rocket.png" alt="">
    </a>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
	<script  src="script.js"></script>


</body>
</html>
