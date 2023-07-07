//select the home link
const homelink = document.getElementById("homelink");
//add an event listener to the home link
homelink.addEventListener('click',loadHomeContent);
//function to load the home content
function loadHomeContent(event){
    event.preventDefault();
    const contentContainer = document.getElementById("content-container");

    fetch('index.html')
    .then(response => response.text())
    .then(content => {
contentContainer.innerHTML = content;
    })
    .catch(error =>{
        console.error('Error loading home content:', error);
    })
}


//select the about link
const aboutLink = document.getElementById('aboutlink');
aboutLink.addEventListener('click', loadAboutContent);
//function to load about content
function loadAboutContent(event){
    event.preventDefault();
    const contentContainer = document.getElementById("content-container")

contentContainer.innerHTML = `
<div class= "heading1">
            <h2>ART<span>&I</span></h2>
            </div >
            <div id="aboutcontent">
            <div id="firstpart">
            <p>Welcome to <span class="brand">ART&I</span>, a captivating online art gallery that showcases artwork from around the world. We are passionate about connecting art enthusiasts, collectors, and artists on a global platform,providing a space where creativity knows no boundaries.</p>
           </div>
           <div id="imgdiv">
            <img id ="aboutimg"src="about.jpeg">
            <h2><span>Ignite</span><br> Your Inner Masterpiece</h2>
            </div>
            <p>At <span class="brand">ART&amp;I</span>, we believe that art is a universal language that transcends borders and cultures. Our mission is to showcase the extraordinary talent of artists from diverse backgrounds, bringing their unique visions to a worldwide audience. We curate a stunning collection of artwork that encompasses various styles, genres, and mediums, providing a visual feast for art lovers everywhere.</p>
            <p>We pride ourselves on being a hub for both established and emerging artists, giving them a platform to share their stories and express their artistic journeys. Through our carefully selected artworks, we aim to evoke emotions, provoke thoughts, and inspire meaningful connections between the art and its viewers.</p>
            <p>What sets <span class="brand">ART&amp;I</span> apart is our commitment to fostering a sense of community. We encourage interaction and dialogue, allowing art enthusiasts to engage with artists, share their perspectives, and gain insights into the creative process. Our blog features thought-provoking articles, artist interviews, and behind-the-scenes glimpses into the art world, enriching your art experience beyond the confines of the gallery walls.</p>
            <p>Whether you are a seasoned collector or a passionate admirer of art, <span class="brand">ART&amp;I</span> invites you to embark on a visual journey that celebrates the richness and diversity of artistic expression. Join us in exploring the vibrant tapestry of creativity that exists in every corner of the globe.</p>
            <p>Discover art that resonates with you. Connect with artists who inspire you. Welcome to <span class="brand">ART&amp;I</span>, where art comes alive.</p>
          </div>
    
`;
}


//select the 'the Classics' link
const classicsLink = document.getElementById('classicslink');
// // add event listener
classicsLink.addEventListener('click', loadClassicsContent);

function loadClassicsContent(event) {
    event.preventDefault();
  
    fetch('http://localhost:4000/classics')
      .then(response => response.json())
      .then(classics => {
        const contentContainer = document.getElementById("content-container");
        contentContainer.innerHTML = ""; // Clear existing content
        
        classics.forEach(artist => show(artist, contentContainer));
      });
  }
  
  function show(artist, container) {
    const classicContent = `
      <h3>${artist.name}</h3>
      <h1>${artist.famousArtwork}</h1>
      <img src="${artist.image}">
      <p>${artist.description}</p>
      <p><em>${artist.about}</em></p>
    `;
  
    container.innerHTML += classicContent;
  
    console.log(container);
  }
  


//get link for "mordern age"
  const mordernlink = document.getElementById('mordernlink');
  //add event listener
  mordernlink.addEventListener('click' , loadMordernContent);

  function loadMordernContent(event) {
    event.preventDefault();
  
    fetch('http://localhost:4000/mordern')
      .then(response => response.json())
      .then(mordern=> {
        const contentContainer = document.getElementById("content-container");
        contentContainer.innerHTML = ""; // Clear existing content
        
        mordern.forEach(artist => show(artist, contentContainer));
      });
  }
  
  function show(artist, container) {
    const mordernContent = `
      <h3>${artist.name}</h3>
      <h1>${artist.famousArtwork}</h1>
      <img src="${artist.image}">
      <p>${artist.description}</p>
      <p><em>${artist.about}</em></p>
    `;
  
    container.innerHTML += mordernContent;
  
    console.log(container);
  }




  //get link for "contemporary "
  const contemporarylink = document.getElementById('contemporarylink');
  //add event listener
  contemporarylink.addEventListener('click' , loadContemporaryContent);

  function loadContemporaryContent(event) {
    event.preventDefault();
  
    fetch('http://localhost:4000/contemporary')
      .then(response => response.json())
      .then(contemporary=> {
        const contentContainer = document.getElementById("content-container");
        contentContainer.innerHTML = ""; // Clear existing content
        
        contemporary.forEach(artist => show(artist, contentContainer));
      });
  }
  
  function show(artist, container) {
    const contemporaryContent = `
      <h3>${artist.name}</h3>
      <h1>${artist.famousArtwork}</h1>
      <img src="${artist.image}">
      <p>${artist.description}</p>
      <p><em>${artist.about}</em></p>
    `;
  
    container.innerHTML += contemporaryContent;
  
    console.log(container);
  }




  