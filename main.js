let data=[{id:1,
              image:"images/image1.jpg",
              title:"Watch",
              content:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions."  
            },
            {id:2,
                image:"images/image2.jpg",
                title:"Tablet",
                content:"A tablet computer, commonly shortened to tablet, is a mobile device, typically with a mobile operating system and touchscreen display processing circuitry."  
              },
              {id:3,
                image:"images/image3.jpg",
                title:"Laptop",
                content:"Laptops combine all of the input and output capabilities and components of a desktop computer, including its display screen, keyboard, speakers, data storage, disc."  
              },
              {id:4,
                image:"images/image4.jpg",
                title:"Camera",
                content:"A camera is an optical instrument used to capture and store images or videos, either digitally via an electronic image sensor, or chemically via a light-sensitive."  
              },
              {id:5,
                image:"images/image5.jpg",
                title:"Sunglasses",
                content:"Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright."  
              },
              {id:6,
                image:"images/image6.jpg",
                title:"Car",
                content:"A car or an automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people."  
              }
            ]



var cardSection=document.getElementById("card-section");
 var container=document.createElement("div");
 container.classList.add("container");
 cardSection.appendChild(container);


//  row
 var row=document.createElement("div");
 row.classList.add("card-row");
 container.appendChild(row);



data.forEach(function(e){

    //  col
var col=document.createElement("div");
 col.classList.add("card-col");
 row.appendChild(col);

 var card=document.createElement("div");
 card.classList.add("card-card");
 col.appendChild(card);

 var picture=document.createElement("img");
 card.appendChild(picture);
 picture.setAttribute("src",e.image);
  
 var heading=document.createElement("h1");
 card.appendChild(heading);
 heading.innerHTML=e.title;

 var para=document.createElement("p");
 card.appendChild(para);
 para.innerHTML=e.content;


})



