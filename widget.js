(function(){
  if(document.getElementById('sb-widget-btn'))return;
  var s=document.createElement('style');
  s.textContent=
    '#sb-widget-btn{position:fixed;bottom:24px;right:24px;z-index:9999;'+
    'background:linear-gradient(135deg,#f5c518,#ff6b00);color:#000;'+
    'border:none;border-radius:50px;padding:14px 22px;font-family:sans-serif;'+
    'font-weight:800;font-size:15px;cursor:pointer;'+
    'box-shadow:0 4px 20px rgba(245,197,24,.45);'+
    'display:flex;align-items:center;gap:8px;'+
    'animation:sb-slide-up .4s ease;'+
    'transition:transform .2s,box-shadow .2s;text-decoration:none;}'+
    '#sb-widget-btn:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(245,197,24,.6);}'+
    '@keyframes sb-slide-up{from{transform:translateY(80px);opacity:0}to{transform:translateY(0);opacity:1}}';
  document.head.appendChild(s);
  var a=document.createElement('a');
  a.id='sb-widget-btn';
  a.href='https://speedboymotoboy.github.io/SpeedBoy-APP/pedido.html';
  a.target='_blank';
  a.rel='noopener';
  a.innerHTML='&#x1F6F5; Fazer Pedido';
  a.title='Solicitar entrega SPEEDBOY';
  (document.body||document.documentElement).appendChild(a);
})();
