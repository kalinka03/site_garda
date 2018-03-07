$(function () {
    rew_plagin();
});


function rew_plagin(){
        var d = document, s = d.createElement('script');
        s.src = 'https://garda-com-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
}
