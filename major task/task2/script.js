const accesskey='2XtDLOyckBqHFw4F5tRJuVGhcQpQki4j0kK-yLyY4W0'
// 2XtDLOyckBqHFw4F5tRJuVGhcQpQki4j0kK-yLyY4W0
const searchForm=document.querySelector('form');
const searchInput=document.querySelector('.search-input')
const imagesContainer=document.querySelector('.images-container');

const fetchImages= async (query)=>{

    

    const url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=30&client_id=${accesskey}`;

    const response= await fetch(url);
    const data = await response.json();
   

     data.results.forEach(photo => {
         const imageElement=document.createElement('div');
         imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`;
         imagesContainer.appendChild(imageElement);
     });
    
}  
 
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText=searchInput.value.trim();
    if(inputText!==''){
        fetchImages(inputText);
    }
    else{
        imagesContainer.innerHTML=`<h2>please enter a search query.</h2>`
    }
});