var posts=["2025/04/13/hello-world/","2025/04/13/paixusuanfashijianfuzadu/","2025/04/13/Luogu-problem-SP10509-solution/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };