"""Exporta PNG (fondo transparente), PDF vectoriales e iconos a partir de marca/svg. Uso: python -P exportar.py"""
import json, os, re, subprocess, tempfile
from pathlib import Path
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__)); M=os.path.dirname(HERE)
CHROME=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
SVG=os.path.join(M,'svg'); PNG=os.path.join(M,'png'); PDF=os.path.join(M,'pdf'); ICO=os.path.join(M,'iconos')
for d in (PNG,PDF,ICO): os.makedirs(d,exist_ok=True)
TMP=tempfile.mkdtemp()
def chrome(args): subprocess.run([CHROME,'--headless=new','--disable-gpu','--hide-scrollbars']+args,capture_output=True)
def aspect(svgfile):
    vb=re.search(r'viewBox="([^"]+)"',open(svgfile,encoding='utf8').read()).group(1).split(); return float(vb[2])/float(vb[3])
def shot(html,w,h,out,transparent=True):
    f=os.path.join(TMP,'p.html'); open(f,'w',encoding='utf8').write(html)
    chrome((['--default-background-color=00000000'] if transparent else [])+[f'--window-size={w},{h}',f'--screenshot={out}',Path(f).as_uri()])
def inline(svgfile,w,h): return open(svgfile,encoding='utf8').read().replace('<svg ',f'<svg width="{w}" height="{h}" style="display:block" ',1)
# 1) PNG transparentes
for name in sorted(os.listdir(SVG)):
    if not name.endswith('.svg'): continue
    a=aspect(os.path.join(SVG,name)); base=name[:-4]
    for w in (3000,1200,600):
        h=round(w/a); shot(f'<body style="margin:0;background:transparent">{inline(os.path.join(SVG,name),w,h)}</body>',w,h,os.path.join(PNG,f'{base}-{w}.png'))
# 2) PDF vectoriales (logotipo y símbolo), 100 mm de ancho
for base in ('logo-vino','logo-tinta','logo-marfil','logo-blanco','simbolo-vino','simbolo-tinta'):
    f=os.path.join(SVG,base+'.svg'); a=aspect(f); wmm=100; hmm=wmm/a
    html=(f'<style>@page{{size:{wmm}mm {hmm:.2f}mm;margin:0}}html,body{{margin:0}}</style>'
          + open(f,encoding='utf8').read().replace('<svg ',f'<svg style="width:{wmm}mm;height:{hmm:.2f}mm;display:block" ',1))
    p=os.path.join(TMP,'p.html'); open(p,'w',encoding='utf8').write(html)
    chrome(['--no-pdf-header-footer',f'--print-to-pdf={os.path.join(PDF,base+".pdf")}',Path(p).as_uri()])
# 3) Iconos: símbolo marfil sobre vino
VINO='#4a1020'; MARFIL='#f1e3c8'
sym=open(os.path.join(SVG,'simbolo-marfil.svg'),encoding='utf8').read()
vb=[float(v) for v in re.search(r'viewBox="([^"]+)"',sym).group(1).split()]
d=re.search(r' d="([^"]+)"',sym).group(1)
def icon_svg(scale,radius,bold=0):
    x,y,w,h=vb; side=max(w,h)/scale; cx,cy=x+w/2,y+h/2; X,Y=cx-side/2,cy-side/2
    r=f' rx="{side*radius:.1f}"' if radius else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{X:.1f} {Y:.1f} {side:.1f} {side:.1f}"><rect x="{X:.1f}" y="{Y:.1f}" width="{side:.1f}" height="{side:.1f}"{r} fill="{VINO}"/>'
            f'<path fill="{MARFIL}"'+(f' stroke="{MARFIL}" stroke-width="{bold}" stroke-linejoin="round"' if bold else '')+f' d="{d}"/></svg>')   # engrosado óptico para tamaños mínimos
open(os.path.join(ICO,'favicon.svg'),'w',encoding='utf8').write(icon_svg(0.92,0.18,30))
for name,scale,radius,size in (('apple-touch-icon',0.78,0,180),('icon-192',0.84,0,192),('icon-512',0.84,0,512),('icon-maskable-512',0.60,0,512),('avatar-redes-1080',0.70,0,1080)):
    s=icon_svg(scale,radius); f=os.path.join(ICO,name+'.svg'); open(f,'w',encoding='utf8').write(s)
    shot(f'<body style="margin:0">{s.replace("<svg ",f"<svg width=\"{size}\" height=\"{size}\" style=\"display:block\" ",1)}</body>',size,size,os.path.join(ICO,name+'.png'),transparent=False)
big=os.path.join(TMP,'fav256.png'); s=icon_svg(0.92,0.18,30)
shot(f'<body style="margin:0;background:transparent">{s.replace("<svg ","<svg width=\"256\" height=\"256\" style=\"display:block\" ",1)}</body>',256,256,big)
im=Image.open(big).convert('RGBA'); im.save(os.path.join(ICO,'favicon.ico'),sizes=[(16,16),(32,32),(48,48)])
for sz in (16,32,48): im.resize((sz,sz),Image.LANCZOS).save(os.path.join(ICO,f'favicon-{sz}.png'))
json.dump({"name":"Víctor Cruz, barítono","short_name":"Víctor Cruz","icons":[{"src":"/icon-192.png","sizes":"192x192","type":"image/png"},{"src":"/icon-512.png","sizes":"512x512","type":"image/png"},{"src":"/icon-maskable-512.png","sizes":"512x512","type":"image/png","purpose":"maskable"}],"theme_color":VINO,"background_color":"#f7f3ec","display":"browser"},open(os.path.join(ICO,'site.webmanifest'),'w',encoding='utf8'),ensure_ascii=False,indent=2)
print('ok')
