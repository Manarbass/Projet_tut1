$(document).ready(function(){
    /*présentation*/
    $(".capté").click(function(){
        $(".présentation").hide();
        $(".mmitinéraire").hide();
    })

    /*rail1*/
        $(".rail1").hover(function(){
       $(".rail1").css({
        "z-index": "3",
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
         "transform":"scale(1.03)",
        "transition": "ease, transform 1s",
        });

        $(".bouton1").css({
            "transform":"translate(0px,-5px)",
        "transition": "ease, transform 1s", 
       })});

         $(".rail1").mouseout(function(){
        $(".rail1").css({
            "z-index": "2",
         "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
         "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
        "transition": "ease, transform 1s",
        });

        $(".bouton1").css({
            "z-index":"4",
            "filter" : "saturate(200%)",
            "transform":"translate(0px,0px)",
        "transition": "ease, transform 1s", 
        })});

        /*bouton1*/
         $(".bouton1").mouseover(function(){
        $(".rail1").css({
        "z-index": "3",
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1.03)",
        "transition": "ease, transform 1s",
        });
        $(".bouton1").css({
        "transform":"translate(0px,-5px) scale(1.2)",
        "transition": "ease, transform 0.5s", 
         })});
        
        $(".bouton1").click(function(){
        $(".rer0").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s"
        });
        
        $(".rer1").css({
        "transform": "translate(-15%)",
        "transition": "ease, transform 1.5s"
        })
        $(".rail12").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
        })
        $(".rail1").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
             "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "transform":"scale(1)",
            "transition": "ease, transform 0.5s",
        })}); 

   /*rail2*/
   $(".rail2").hover(function(){
    $(".rail2").css({
     "z-index": "2",
     "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
     "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
      "transform":"scale(1.03)",
     "transition": "ease, transform 1s",
     });

     $(".bouton2").css({
         "transform":"translate(0px,-5px)",
     "transition": "ease, transform 1s", 
    })
    $(".rail12").css({
        "-webkit-filter" : "saturate(100%) drop-shadow(0px 0px 0px #666666)",
    "filter" : "saturate(100%) drop-shadow(0px 0px 0px #666666)",

    })});

      $(".rail2").mouseout(function(){
     $(".rail2").css({
         "z-index": "2",
      "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
      "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
     "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
     "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
     "transform":"scale(1)",
     "transition": "ease, transform 1s",
     });

     $(".bouton2").css({
         "z-index":"4",
         "filter" : "saturate(200%)",
         "transform":"translate(0px,0px)",
     "transition": "ease, transform 1s", 
     })});  

    
    /*bouton2*/
    $(".bouton2").mouseover(function(){
    $(".rail2").css({
    "z-index": "3",
    "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    "transform":"scale(1.03)",
    "transition": "ease, transform 1s",
    });
    $(".bouton2").css({
    "transform":"translate(0px,-5px) scale(1.2)",
    "transition": "ease, transform 0.5s", 
     })});
    
    $(".bouton2").click(function(){
    $(".rer0").css({
        "transform": "translate(-100%)",
        "transition": "ease, transform 1.5s"
    });
    $(".rail2").css({
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
         "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
        "transition": "ease, transform 1s",
    });
    $(".rer2").css({
        "transform": "translate(0%)",
        "transition": "ease, transform 1.5s"
        });  
    $(".rail2").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
    $(".rail22").css({
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    })});   
  
    
    /*Retour1*/
    $(".retour1").click(function(){
        $(".rer0").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })  
        $(".rer1").css({
            "transform": "translate(-115%)",
            "transition": "ease, transform 1.5s",
        })
        $(".rail12").css({
            "-webkit-filter" : "saturate(100%) drop-shadow((-5x 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(-5px 5px 5px #666666)",
        })
        $(".rail1").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
   });

   /*Retour2*/
   $(".retour2").click(function(){
    $(".rer0").css({
        "transform": "translate(0%)",
        "transition": "ease, transform 1.5s",
    })  
    $(".rer2").css({
        "transform": "translate(100%)",
        "transition": "ease, transform 1.5s",
    });

    $(".rail22").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
    $(".rail2").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
    }); 
    /*Rail1 2*/
    $(".rail12").hover(function(){
        $(".rail1").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
             "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "transform":"scale(1)",
            "transition": "ease, transform 0.5s",
        })
    })

    /*Rail2 2*/
    $(".rail22").hover(function(){
        $(".rail2").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
             "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "transform":"scale(1)",
            "transition": "ease, transform 0.5s",
        })
    });
    /*nom2*/
    $(".réseaux").hover(function(){
        $(".réseaux").css({
             "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "text-decoration":"underline cyan",
        })
        $(".pointn").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".réseaux").mouseout(function(){
        $(".réseaux").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".algo").hover(function(){
        $(".algo").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline cyan",
       })
        $(".pointn2").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".algo").mouseout(function(){
        $(".algo").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn2").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".base").hover(function(){
        $(".base").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline cyan",
       })
        $(".pointn3").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".base").mouseout(function(){
        $(".base").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn3").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".intégration").hover(function(){
        $(".intégration").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline cyan",
       })
        $(".pointn4").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".intégration").mouseout(function(){
        $(".intégration").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn4").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".sound").hover(function(){
        $(".sound").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline cyan",
       })
        $(".pointn5").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".sound").mouseout(function(){
        $(".sound").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn5").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    
    /*points2*/
    $(".pointn").hover(function(){
        $(".pointn").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".réseaux").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline cyan",
        })});
    $(".pointn2").hover(function(){
        $(".pointn2").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".algo").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline cyan",
        })});
    $(".pointn2").mouseout(function(){
        $(".pointn2").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".algo").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
$(".pointn3").hover(function(){
        $(".pointn3").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".base").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline cyan",
        })});
    $(".pointn3").mouseout(function(){
        $(".pointn3").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".base").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
    $(".pointn4").hover(function(){
        $(".pointn4").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".intégration").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline cyan",
        })});
    $(".pointn4").mouseout(function(){
        $(".pointn4").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".intégration").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
        $(".pointn5").hover(function(){
        $(".pointn5").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".sound").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline cyan",
        })});
    $(".pointn5").mouseout(function(){
        $(".pointn5").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".sound").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
    /*points1*/
    $(".pointn1").mouseover(function(){
        $(".pointn1").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
            "z-index":"15",
        });
        $(".marketing").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline darkorange",
        })
  });
    $(".pointn1").mouseout(function(){
        $(".pointn1").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
            "z-index":"15",
        });
        $(".marketing").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
     $(".pointn21").hover(function(){
         $(".pointn21").css({
             "background-color": "rgb(255, 255, 255)",
             "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
         $(".gestion").css({
             "transform": "scale(1.1) rotate(-70deg)",
             "transition": "ease, transform 0.2s",
             "cursor": "pointer",
             "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
             "filter": "drop-shadow(3px 3px 2px #000000)",
             "text-decoration":"underline darkorange",
         })});
     $(".pointn21").mouseout(function(){
         $(".pointn21").css({
             "background-color": "rgb(233, 233, 233)",
             "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
         });
         $(".gestion").css({
             "transform": "scale(1) rotate(-70deg)",
             "transition": "ease, transform 0.2s",
             "cursor": "pointer",
             "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
             "filter": "drop-shadow(2px 3px 2px #000000)",
             "text-decoration":"none",
       })});
$(".pointn31").hover(function(){
        $(".pointn31").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".communication").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline darkorange",
        })});
    $(".pointn31").mouseout(function(){
        $(".pointn31").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".communication").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
    $(".pointn41").hover(function(){
        $(".pointn41").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".audiovisuel").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline darkorange",
        })});
    $(".pointn41").mouseout(function(){
        $(".pointn41").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".audiovisuel").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
        $(".pointn51").hover(function(){
        $(".pointn51").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".infographie").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline darkorange",
        })});
    $(".pointn51").mouseout(function(){
        $(".pointn51").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".infographie").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
    $(".pointn61").hover(function(){
        $(".pointn61").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        });
        $(".graphisme").css({
            "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(3px 3px 2px #000000)",
            "filter": "drop-shadow(3px 3px 2px #000000)",
            "text-decoration":"underline darkorange",
        })});
    $(".pointn61").mouseout(function(){
        $(".pointn61").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        });
        $(".graphisme").css({
            "transform": "scale(1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "-webkit-filter": "drop-shadow(2px 3px 2px #000000)",
            "filter": "drop-shadow(2px 3px 2px #000000)",
            "text-decoration":"none",
        })});
/*nom1*/
    $(".marketing").hover(function(){
        $(".marketing").css({
             "transform": "scale(1.1) rotate(-70deg)",
            "transition": "ease, transform 0.2s",
            "cursor": "pointer",
            "text-decoration":"underline darkorange",
        })
        $(".pointn1").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".marketing").mouseout(function(){
        $(".marketing").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn1").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".gestion").hover(function(){
        $(".gestion").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline darkorange",
       })
        $(".pointn21").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".gestion").mouseout(function(){
        $(".gestion").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn21").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".communication").hover(function(){
        $(".communication").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline darkorange",
       })
        $(".pointn31").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".communication").mouseout(function(){
        $(".communication").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn31").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".audiovisuel").hover(function(){
        $(".audiovisuel").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline darkorange",
       })
        $(".pointn41").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".audiovisuel").mouseout(function(){
        $(".audiovisuel").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn41").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".infographie").hover(function(){
        $(".infographie").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline darkorange",
       })
        $(".pointn51").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".infographie").mouseout(function(){
        $(".infographie").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn51").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});
    $(".graphisme").hover(function(){
        $(".graphisme").css({
            "transform": "scale(1.1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"underline darkorange",
       })
        $(".pointn61").css({
            "background-color": "rgb(255, 255, 255)",
            "box-shadow": "0px 0px 15px 5px rgb(255, 255, 255)",
        })});
    $(".graphisme").mouseout(function(){
        $(".graphisme").css({
            "transform": "scale(1) rotate(-70deg)",
           "transition": "ease, transform 0.2s",
           "cursor": "pointer",
           "text-decoration":"none",
       })
        $(".pointn61").css({
            "background-color": "rgb(233, 233, 233)",
            "box-shadow": "0px 0px 0px 0px rgb(255, 255, 255)",
        })});

    $(".t").click(function(){
        $(".rer1").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer3").css({
            "transform": "translate(-10%)",
            "transition": "ease, transform 1.5s"
        })
    });
    $(".t2").click(function(){
        $(".rer2").css({
            "transform": "translate(-107.2%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer4").css({
            "transform": "translate(-1%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rail2222").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
    });
    // retour 3
    $(".retour3").click(function(){
        $(".rer3").css({
            "transform": "translate(-125%)",
            "transition": "ease, transform 1.5s"
        });
        $(".rer1").css({
            "transform": "translate(-15%)",
            "transition": "ease, transform 1.5s",
        })
        $(".rail132, .rail131").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
     "transition": "ease, transform 1s",
        })

    })
    // retour 4
    $(".retour4").click(function(){
        $(".rer4").css({
            "transform": "translate(107%)",
            "transition": "ease, transform 1.5s"
        });
        $(".rer2").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })
        $(".rail2222 .rail222").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
     "transition": "ease, transform 1s",
        })
    })

    //rail 6
    $(".rail222").hover(function(){
        $(".rail222").css({
            "z-index":"3",
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
        $(".rail2222").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
    })
    $(".rail222").mouseout(function(){
        $(this).css({
            "z-index":"1",
        })
    })
    $(".rail2222").hover(function(){
        $(this).css({
            "z-index":"3",
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
        $(".rail222").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
    })
    $(".rail2222").mouseout(function(){
        $(this).css({
            "z-index":"2",
        })
    })

    // rail 5
    $(".rail131").hover(function(){
        $(".rail131").css({
            "z-index":"3",

            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1.03)",
     "transition": "ease, transform 1s",
        })
        $(".rail132").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
     "transition": "ease, transform 1s",
        })
        
        $(".bouton4").css({
            "transform":"translate(0px,-5px)",
        "transition": "ease, transform 1s", 
       })
    })
    $(".rail131").mouseout(function(){
        $(this).css({
            "z-index":"1",
        })
        $(".bouton4").css({
            "z-index":"4",
            "transform":"translate(0px,0px)",
        "transition": "ease, transform 1s", 
        });
    })
    $(".rail132").hover(function(){
        $(this).css({
            "z-index":"3",
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1.03)",
     "transition": "ease, transform 1s",
        })
        $(".rail131").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "transform":"scale(1)",
     "transition": "ease, transform 1s",
        })
        $(".bouton3").css({
            "transform":"translate(0px,-5px)",
        "transition": "ease, transform 1s", 
       })
    })
    $(".rail132").mouseout(function(){
        $(this).css({
            "z-index":"2",
        })
        $(".bouton3").css({
            "z-index":"4",
    
            "transform":"translate(0px,0px)",
        "transition": "ease, transform 1s", 
        });
    })

    
    $(".mmi").hover(function(){
        $(".mmi").css({
            "background-color":"blue",
            "transition-property": "background-color",
            "transition-duration": "1s",
        })
    })
})       
  