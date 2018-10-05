

(function(){
     
    // cats model
    let model = {
        currentCat: null,
        cats: [
            new Cat("Stewie", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"),
            new Cat("Chewie", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"),
            new Cat("Phlem", "https://images.unsplash.com/photo-1511717004695-7862a87f4b3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6e1c6054d1ce17a77cf8e0c47b4d96b&auto=format&fit=crop&w=328&q=80"),
            new Cat("Stewie and Pim", "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"),
            new Cat("Groot", "https://images.unsplash.com/photo-1518064711538-4e27e702c706?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d27c0369f194434f87a058060024cf0d&auto=format&fit=crop&w=334&q=80")
        ]
    };
   
    let octopus = {
        init: function(){
            model.currentCat = model.cats[0];
            
            //render views
            CatView.init();
            CatListView.init();
        },
        
        getCurrentCat: function(){
            return model.currentCat;
        },
        
        setCurrentCat: function(cat){
            model.currentCat = cat;
        },
        
        getAllCats: function(){
            return model.cats;
        },
        
        incrementClicks: function(){
            model.currentCat.increaseNumberOfClicks();
            
            //render view
            CatView.render();
        }
    };
    
    
    let CatView = {
        init: function(){
            this.catName = $('#cat-name');
            this.catPicture = $('#cat-pic');
            this.catClicks = $('#cat-clicks');
            
            this.catPicture.addEventListener('click', function(){
                octopus.incrementClicks();
            });
            
            //render this view to update values
            this.render();
        },
        
        render: function(){
            let currentCat = octopus.getCurrentCat();
            this.catClicks.textContent = currentCat.getNumberOfClicks();
            this.catName.textContent = currentCat.getName();
            this.catPicture.src = currentCat.getImage();
        }
    };
    
    
    let CatListView = {
        init: function(){
            this.catList = $('#cat-list');
            
            this.render();
        },
        
        render: function(){
            let cats = octopus.getAllCats();
            
            this.catList.innerHTML = "";
            let item;
            
            for (let cat of cats){
                item = document.createElement('li');
                item.textContent = cat.getName();
                item.style.cursor = "pointer";
                
                item.addEventListener("click", (function(cat){
                    return function(){
                        octopus.setCurrentCat(cat);
                        CatView.render();
                    }
                })(cat), false);
                
                this.catList.appendChild(item);
            } 
            
             // Close menu drawer
             $("#drawer").addEventListener("click", function(){
                 $('aside').style.left = "-1000px";
             });

             // Open menu drawer
              $("#opener").addEventListener("click", function(){
                 $('aside').style.left = "";
             });
        }
    };
    
    octopus.init();
    
    //creates JQuery style DOM element selector
    function $(selector){
       return document.querySelector(selector); 
    }
 })();


