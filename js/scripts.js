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

$(function() {
  $("h1").click(obj.h1Click);
  $("img").click(obj.imgClick);
  $("p").click(obj.pClick);
})
