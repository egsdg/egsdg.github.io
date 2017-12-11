---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#layout: home
#layout: compress
layout: compress
---

<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ site.title }}</title>
    <meta name="description" content="{{ site.description }}"/>
    <meta name="keywords" content="{{ site.keywords }}"/>
    <meta name="author" content="{{ site.author }}"/>
    <link rel="shortcut icon" href="{{site.baseurl }}/img/favicon.ico">
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/fonts/font-awesome/css/font-awesome.css"/>
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/body.css"/>
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/card.css"/>
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/css/pattern.css"/>
    <!--[if IE]>
    <script type="text/javascript" src="js/vendors/html5.min.js"></script>
    <![endif]-->
    
   
    <script>
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            var root = document.getElementsByTagName('html')[0];
            root.setAttribute('class', 'ff');
        }
    </script>
</head>
<body class="demo-1">
<div class="container">
    <header class="codrops-header">
      <h1>Sustainable Development  <span>التنميه المستدامه</span></h1>
      
<nav>
            <h1><a href="{{ site.baseurl }}/">Home</a></h1>
          <h1>  <a href="{{ site.baseurl }}/about">About</a></h1>
           <h1>  <a href="{{ site.baseurl }}/blog">Blog</a></h1>
</nav>


 </header>
    <div class="content">
        <!-- trianglify pattern container -->
        <div class="pattern pattern--hidden"></div>
        <!-- cards -->
        <div class="wrapper">
            {% for post in site.posts %}
            <div class="card" data-id="{{ post.id }}">
                <div class="card__container card__container--closed">
                    <svg class="card__image" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1200"
                         preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <clipPath id="{{ post.id }}-clip-path">
                                <polygon class="clip" points="0,1200 0,0 1920,0 1920,1200"></polygon>
                            </clipPath>
                        </defs>
                        <image clip-path="url(#{{ post.id }}-clip-path)" width="1920" height="1200"
                               xlink:href="{{ post.image }}"></image>
                    </svg>
                    <div class="card__content">
                        <i class="card__btn-close fa fa-times"></i>
                        <div class="card__caption">
                            <h2 class="card__title">{{ post.title }}</h2>
                            <p class="card__subtitle">{{ post.subtitle }}</p>
                        </div>
                        <div class="card__copy">
                            <div class="meta">
                                <img class="meta__avatar" src="{{ post.avatar }}"/>
                                <span class="meta__author">{{ post.author }}</span>
                                <span class="meta__date">{{ post.date | date: "%Y-%m-%d" }}</span>
                               
                            </div>
                            {{ post.content }}
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
            <!-- /cards -->
            
            
        </div>
    </div>
    <!-- /container -->
</div>




<!-- JS -->
<script src="{{ site.baseurl }}/js/vendors/trianglify.min.js"></script>
<script src="{{ site.baseurl }}/js/vendors/TweenMax.min.js"></script>
<script src="{{ site.baseurl }}/js/vendors/ScrollToPlugin.min.js"></script>
<script src="{{ site.baseurl }}/js/vendors/cash.min.js"></script>
<script src="{{ site.baseurl }}/js/Card-circle.js"></script>
<script src="{{ site.baseurl }}/js/modern-blog.js"></script>
<script src="app.js" ></script>

</body>
</html>
