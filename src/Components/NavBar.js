import {Link} from 'react-router-dom'
export default function NavBar(){

function navTog(){
    const navbar = document.getElementsByClassName('navbar_custom')[0]
    console.log(navbar)
    navbar.classList.toggle('collapsed')
}

window.addEventListener('scroll',(e)=>{
    const navbar = document.getElementsByClassName('navbar_custom')[0]
    let windowY = window.scrollY
    // let windowY = window.pageYOffset
    
    let navbarHeight = navbar.offsetHeight
    
    if(windowY>navbarHeight) navbar.classList.add('sticky')
    else navbar.classList.remove('sticky')
    
})

    return (
<nav>
<div className="navbar_custom">
	
<div className="logo">
    <h2>E-library</h2>
</div>

<ul className="links">
    <Link to="/" className="nav_links"><li>Home</li></Link>
    <Link to="pbooks" className="nav_links"><li>Programming Books</li></Link>
    <Link to="semesters" className="nav_links"><li>Semester Books</li></Link>
</ul>

<div className="toggle" onClick={navTog}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>
</div>
</nav>
)}
// document.body.appendChild(footer)