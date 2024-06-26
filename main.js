document.getElementById("Details").addEventListener("click",()=>{

    document.getElementById("h1").style.display = "block"

    let product = new XMLHttpRequest();

    product.open("GET","https://fakestoreapi.com/products",true);
    
    product.onload = function(){
        if(product.status == 200){
            let parseproduct = JSON.parse(this.response);
            console.log(parseproduct);


            // for(let i = 0; i<parseproduct.length; i++){
            //     document.getElementById("container").innerHTML += ` <div class="card">
            //     <img src="${parseproduct[i].image}" height="150px" width="auto" alt="">
            //     <h5>${parseproduct[i].title}</h5>
            //     <p>${parseproduct[i].description}</p>
            //     <button>View More</button>
            // </div>`
            // }
            parseproduct.forEach(element => {
                document.getElementById("container").innerHTML += ` <div class="card">
               <img src="${element.image}" height="150px" width="auto" alt="">
                  <h5>${element.title}</h5>
                   <p>${element.description}</p>
             <button>View More</button>
              </div>`
            });
        }
        else{
            console.log("no");
        }
    }


    product.send();
})
