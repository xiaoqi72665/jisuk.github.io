var posts=["posts/1382213214.html","posts/1382213294.html","posts/138221321.html","posts/3871669916.html","posts/3871668616.html","posts/1382213215.html","posts/1382213212.html","posts/2760345257.html","posts/3960789267.html","posts/3960789265.html","posts/1382213213.html","posts/399648358.html","posts/2990873055.html","posts/5ce8d743.html","posts/2881663155.html","posts/1631857023.html","posts/30e64502.html","posts/b00ca5ce.html","posts/ce319d5b.html","posts/806305061.html","posts/6fcbe4c1.html","posts/eeeda2be.html","posts/ca7c15dc.html","posts/4fa0f604.html","posts/2239963555.html","posts/2239963484.html","posts/aa965a38.html","posts/952548742.html","posts/29013034.html","posts/1415024682.html","posts/e2ed9b13.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };