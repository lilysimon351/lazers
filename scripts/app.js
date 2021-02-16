window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll >= document.body.offsetHeight - window.innerHeight) {
        var loadMore = document.getElementsByClassName('load-more')[0]
        if(loadMore) {
            loadMore.style.display = 'flex'
            setTimeout(output, 2100);
        }
    }
    function output() {
        var layout = document.getElementsByClassName('devices__list')[0].innerHTML;
        if( layout ) {
            document.getElementsByClassName('bottom_devices')[0].innerHTML += layout
            document.getElementsByClassName('load-more')[0].style.display = 'none'
        }
    }
});


window.onload = function() {
    var rateKeeper = document.getElementsByClassName('rate-keeper')[0];
    if(rateKeeper) {
        rateKeeper.onclick = function() {
            rateKeeper.getElementsByClassName('hidden')[0].classList.toggle('d-hide')
            rateKeeper.getElementsByClassName('showen')[0].classList.toggle('d-hide')
        }
    }
    var comments = document.getElementsByClassName('comments')[0]
    if(comments) {
        comments.onclick = function(e) {
            if( e.target.classList.contains('replies-amount') )  {
                    e.preventDefault()
                    e.target.nextSibling.nextSibling.style.display = 'block'
                    e.target.style.display = 'none'
            }
            if(e.target.classList.contains('comment-reply-link')){
                    e.preventDefault()
                    e.target.style.display = 'none'
                    e.target.parentNode.append(document.getElementsByClassName('comment-form')[0].cloneNode(true))
            } 
        }
    }
    var article = document.getElementsByClassName('article-entry')[0]
    if(article) {
        var h2 = article.getElementsByTagName('h2');
        var container = document.getElementsByClassName('article__content')[0];
        var ul = document.createElement('ul');
        for(var i = 0, length = h2.length; i < length; i++) {
            ul.innerHTML += '<li><a href="#si-'+i+1+'">'+h2[i].innerHTML+'</a></li>';
            h2[i].innerHTML += '<span id="si-'+i+1+'" class="additional-padding"></span>';
        }
        container.append(ul);
    }
    var tables = document.querySelectorAll('table');
    if(tables){
        for (var node of tables) {
            var div = document.createElement('div');
            div.className = "t-w";
            node.before(div);
            div.append(node);
        }
    }
}