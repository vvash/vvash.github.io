/*
jQuery Flying Popup, by Damian Szewczyk (netkevin)
damian.szewczyk@gmail.com
Version 1.3
Flying Popup plugin for jQuery. Allows to show floating HTML popups that follow page scroll/resize (also static HTML popups can be shown when desired). Popups can fly in from outside of the screen (from every direction)
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(t($){$.1U.1f=t(e,f){w g={1g:0,1h:0,11:\'1f\',13:\'T\',1u:\'1V\',T:B,1v:0.7,1w:J,G:J,4:1W,6:1X,1i:B,U:\'1f\',14:0,15:0,V:J,1x:1Y,W:12,1y:J,1z:\'4\',1j:B,1A:\'K\',1B:\'1C\',16:\'\',1k:B,1l:\'1Z 21 22 23 24 25?\'};3(e)$.26(g,e);w h;w i=0;w j;w k;w l;w m;w n;w o;w p=\'\';w q;w r=$(\'#\'+g.11);w s=$(\'#\'+g.13);X.27(t(){q=$(X);$(X).28()});3(g.1g==0){L(t(){1m(f)},29)}y{L(t(){1m(f)},(g.1g*1D))}N X;t 1m(b){I(J);p=q.2a();3(g.1i){O=1E(g.U);3(O!=""){3(g.15==0)N B;O=O-1;3(O<=0){17(g.U,g.15,g.14)}y{17(g.U,O,g.14);N B}}}3(g.T){$("1F").1G(\'<18 1H="\'+g.13+\'"></18>\');s=$(\'#\'+g.13);s.9({\'1I\':g.1v});3(g.1w){s.1J(t(){3(g.1k){3(1K(g.1l)){I()}}y{I()}})}1L=$.1M.2b&&!$.2c.1I;1N=1L&&$.1M.2d<7;3(1N){$(8).2e(\'1O 1P\',t(){s.9({D:$(8).D(),E:$(8).E(),4:$(8).Y(),6:$(8).2f()})}).2g(\'1P\')}}$("1F").1G(\'<18 1H="\'+g.11+\'">\'+p+\'</18>\');r=$(\'#\'+g.11);3(g.G){g.4=($(8).E()-r.F())/2;g.6=($(8).D()-r.u())/2}y{3(19(g.6)==\'1a\'){3(g.6.P(\'%\')!=-1){g.Z=g.6;3(g.Z==\'Q%\'){g.6=$(8).D()-r.u()}y{g.6=(1b(g.6)/Q)*$(8).D()}}}3(19(g.4)==\'1a\'){3(g.4.P(\'%\')!=-1){g.1n=g.4;g.4=(1b(g.4)/Q)*$(8).E()}}}g.4=z.A(g.4);g.6=z.A(g.6);w c=$(8).Y();3(g.1y&&g.V){1o(g.1z){x\'4-6\':r.9("4",(-r.F()+c)+"C");r.9("6",-r.u());v;x\'4-H\':r.9("4",(-r.F()+c)+"C");r.9("H",-r.u());v;x\'6\':r.9("4",(g.4+c)+"C");r.9("6",-r.u());v;x\'H\':r.9("4",(g.4+c)+"C");r.9("H",-r.u());v;x\'K\':r.9("4",($(8).E()+$(M).Y())+"C");r.9({\'6\':z.A(g.6)});v;x\'K-6\':r.9("4",($(8).E()+c)+"C");r.9("6",-r.u());v;x\'K-H\':r.9("4",($(8).E()+c)+"C");r.9("H",-r.u());v;1p:r.9("4",(-r.F()+c)+"C");r.9({\'6\':z.A(g.6)})}}y{r.9({\'6\':z.A(g.6)});r.9("4",(g.4+c)+"C")}$(\'#\'+g.1u).1J(t(){3(g.1k){3(1K(g.1l)){I()}}y{I()}N B});3(g.V){1Q()}1o(g.1B){x\'1R\':r.1R(g.16);v;x\'1S\':r.1S(g.16);v;1p:r.1C(g.16);v}$(8).1O(t(){3(g.G){g.4=($(8).E()-r.F())/2;g.6=($(8).D()-r.u())/2}y{3(g.Z!=1q){g.6=g.Z}3(g.1n!=1q){g.4=g.1n}3(19(g.6)==\'1a\'){3(g.6.P(\'%\')!=-1){3(g.Z==\'Q%\'){g.6=$(8).D()-r.u()}y{g.6=(1b(g.6)/Q)*$(8).D()}}}3(19(g.4)==\'1a\'){3(g.4.P(\'%\')!=-1){g.4=(1b(g.4)/Q)*$(8).E()}}}g.4=z.A(g.4);g.6=z.A(g.6);3(!g.V){w a=$(8).Y();r.9({\'4\':(g.4+a)});r.9({\'6\':g.6})}});3(g.1h!=0){L(I,(g.1h*1D))}3(g.1i){17(g.U,g.15,g.14)}3($.2h(b)){b.2i(X)}};t I(a){3(a!=1q||g.1j==B){r.1r();3(g.T){s.1r()}3(g.V){2j(h);2k(i)}}y 3(g.1j==J){3(g.T){s.1r()}1o(g.1A){x\'4-6\':g.4=-1.5*r.F();g.6=-1.5*r.u();g.G=B;v;x\'4-H\':g.4=-1.5*r.F();g.6=$(8).D()+r.u();g.G=B;v;x\'6\':g.6=-1.5*r.u();g.G=B;v;x\'H\':g.6=$(8).D()+r.u();g.G=B;v;x\'K\':g.4=$(8).E()+r.F();v;x\'K-6\':g.4=$(8).E()+r.F();g.6=-1.5*r.u();g.G=B;v;x\'K-H\':g.4=$(8).E()+r.F();g.6=$(8).D()+r.u();g.G=B;v;1p:g.4=-1.5*r.F()}L(t(){I(J)},2l)}}t 1Q(){L(1s,10);h=2m(1s,g.1x)}t 1s(){j=z.A($(8).Y()+g.4);3(g.G){k=z.A(($(8).D()-r.u())/2)}y{k=g.6}1c=r.1c();l=1c.4;m=1c.6;3((l!=j||m!=k)&&i==0)1d()}t 1d(){l=z.A((g.W*l+j)/(g.W+1));2n=m;m=z.A((g.W*m+k)/(g.W+1));3(l!=n||m!=o){r.9("4",z.A(l)+"C");r.9("6",z.A(m)+"C");i=L(1d,20);n=l;o=m}y 3(l!=j||m!=k){n=l;o=m;3(l>j){l=l-1}y 3(l<j){l=l+1}3(m>k){m=m-1}y 3(m<k){m=m+1}i=L(1d,20)}y{n=l=j;o=m=k;r.9("4",z.A(j)+"C");r.9("6",z.A(k)+"C");i=0}}t 17(a,b,c){w d=2o 2p();3(c==0)c=1T;d.2q(d.2r()+c);M.R=a+"="+2s(b)+((c==1T)?"":";2t="+d.2u())};t 1E(a){3(M.R.1t>0){S=M.R.P(a+"=");3(S!=-1){S=S+a.1t+1;1e=M.R.P(";",S);3(1e==-1)1e=M.R.1t;N 2v(M.R.2w(S,1e))}}N""}}})(2x);',62,158,'|||if|top||left||window|css||||||||||||||||||||function|outerWidth|break|var|case|else|Math|round|false|px|width|height|outerHeight|centered|right|hidePopup|true|bottom|setTimeout|document|return|cookieValue|indexOf|100|cookie|c_start|overlay|cookie_name|floating|floating_speed|this|scrollTop|left_percent||popup_div||overlay_div|cookie_timeout|cookie_views|popup_appear_time|setCookie|div|typeof|string|parseInt|offset|animatePopup|c_end|popup|starttime|selfclose|setcookie|fly_out|confirm_close|confirm_close_text|show_popup|top_percent|switch|default|undefined|remove|movePopup|length|close_id|opacity_level|overlay_cc|floating_reaction|fly_in|fly_from|fly_to|popup_appear|show|1000|getCookie|body|prepend|id|opacity|click|confirm|isIE|browser|isIE6|resize|scroll|setFloating|fadeIn|slideDown|null|fn|baner_close|130|200|700|Do||you|really|want|to|close|extend|each|hide|250|html|msie|support|version|bind|scrollLeft|trigger|isFunction|call|clearInterval|clearTimeout|3000|setInterval|previous_position_left|new|Date|setDate|getDate|escape|expires|toGMTString|unescape|substring|jQuery'.split('|'),0,{}))