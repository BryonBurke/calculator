var obj = {
  h1Click: function(){
    alert("this is a header");
  },
  imgClick: function(){
    alert("this is a image");
  },
  pClick: function(){
    alert("this is a paragraph");
  }
};


jQuery("h1").click(obj.h1Click);
jQuery("img").click(obj.imgClick);
jQuery("p").click(obj.pClick);
