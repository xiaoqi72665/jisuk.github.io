var posts=["posts/3871669916.html","posts/1382213214.html","posts/3871668616.html","posts/138221321.html","posts/1382213294.html","posts/1382213212.html","posts/abc12444789.html","posts/1382213215.html","posts/abc123456789.html","posts/2760345257.html","posts/tqzj123123.html","posts/3960737265.html","posts/3960789265.html","posts/3960555265.html","posts/399648358.html","posts/1382213213.html","posts/344235523.html","posts/396177265.html","posts/ce319d5b.html","posts/2239963555.html","posts/806305061.html","posts/2239963484.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };