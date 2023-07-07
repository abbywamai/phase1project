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
    const contentContainer = document.getElementById("content-container");

contentContainer.innerHTML = `
<div class= "heading1">
            <h2>ART<span>&I</span></h2>
            </div >
            <div id="aboutcontent">
            <p>Welcome to <span class="brand">ART&I</span>, a captivating online art gallery that showcases artwork from around the world. We are passionate about connecting art enthusiasts, collectors, and artists on a global platform,providing a space where creativity knows no boundaries.</p>
            <p>At <span class="brand">ART&amp;I</span>, we believe that art is a universal language that transcends borders and cultures. Our mission is to showcase the extraordinary talent of artists from diverse backgrounds, bringing their unique visions to a worldwide audience. We curate a stunning collection of artwork that encompasses various styles, genres, and mediums, providing a visual feast for art lovers everywhere.</p>
            <p>We pride ourselves on being a hub for both established and emerging artists, giving them a platform to share their stories and express their artistic journeys. Through our carefully selected artworks, we aim to evoke emotions, provoke thoughts, and inspire meaningful connections between the art and its viewers.</p>
            <p>What sets <span class="brand">ART&amp;I</span> apart is our commitment to fostering a sense of community. We encourage interaction and dialogue, allowing art enthusiasts to engage with artists, share their perspectives, and gain insights into the creative process. Our blog features thought-provoking articles, artist interviews, and behind-the-scenes glimpses into the art world, enriching your art experience beyond the confines of the gallery walls.</p>
            <p>Whether you are a seasoned collector or a passionate admirer of art, <span class="brand">ART&amp;I</span> invites you to embark on a visual journey that celebrates the richness and diversity of artistic expression. Join us in exploring the vibrant tapestry of creativity that exists in every corner of the globe.</p>
            <p>Discover art that resonates with you. Connect with artists who inspire you. Welcome to <span class="brand">ART&amp;I</span>, where art comes alive.</p>
          </div>
    
`;
}


// //select the 'the Classics' link
// const classicsLink = document.getElementById('classicslink');
// //add event listener
// classicsLink.addEventListener('click',loadClassicsContent);
// //function for loading the content
// function loadClassicsContent(event){
//     event.preventDefault();
// //fetch the data
//     fetch('http://localhost:4000/classics')
//     .then(response => response.json())
//     .then(data => {
//               const classicsData = data.classics
//               const contentContainer = document.getElementById("content-container");
// //create html elements for each content of the artwork
//               classicsData.forEach(classics => {
                
//                 const classicDiv = document.createElement('div');
//                 classicDiv.classList.add('classics');

//                 const heading = document.createElement('h3');
//                 heading.textContent = classics.name

//                 const art = document.createElement('h2');
//                 art.textContent = `Art : ${classics.famousArtwork}`;

//                 const image = document.createElement('img');
//                 image.src =classics.image;
//                 image.alt = classics.name;

//                 const description = document.createElement('p');
//                 description.textContent = `${classics.description}`

//                 const aboutArtist = document.createElement('p');
//                 aboutArtist.textContent = `About ${classics.name}:${classics.about}`
// //appending elements to container
//                 classicDiv.appendChild(heading);
//                 classicDiv.appendChild(art);
//                 classicDiv.appendChild(image);
//                 classicDiv.appendChild(description);
//                 classicDiv.appendChild(aboutArtist);
//                 contentContainer.appendChild(classicDiv);

//               });

//     })
//     .catch(error =>{
//         console.log(error)
//     });
        
// }

// select the 'the Classics' link
const classicsLink = document.getElementById('classicslink');
// add event listener
classicsLink.addEventListener('click', loadClassicsContent);

// function for loading the content
function loadClassicsContent(event) {
  event.preventDefault();

  // fetch the data
  fetch('http://localhost:4000/classics')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch classics data');
      }
      return response.json();
    })
    .then(data => {
      if (!data.classics || !Array.isArray(data.classics)) {
        throw new Error('Invalid response structure');
      }

      const classicsData = data.classics;

      const contentContainer = document.getElementById('content-container');

      classicsData.forEach(classics => {
        const classicDiv = document.createElement('div');
        classicDiv.classList.add('classics');

        const heading = document.createElement('h3');
        heading.textContent = classics.name;

        const art = document.createElement('h2');
        art.textContent = `Art: ${classics.famousArtwork}`;

        const image = document.createElement('img');
        image.src = classics.image;
        image.alt = classics.name;

        const description = document.createElement('p');
        description.textContent = classics.description;

        const aboutArtist = document.createElement('p');
        aboutArtist.textContent = `About ${classics.name}: ${classics.about}`;

        classicDiv.appendChild(heading);
        classicDiv.appendChild(art);
        classicDiv.appendChild(image);
        classicDiv.appendChild(description);
        classicDiv.appendChild(aboutArtist);
        contentContainer.appendChild(classicDiv);
      });
    })
    .catch(error => {
      console.error('Error loading classics:', error);
    });
}
