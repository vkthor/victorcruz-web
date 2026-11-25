"""Genera el logotipo definitivo de Víctor Cruz (vectorial, texto en curvas).
Uso: python -P generar_logo.py <carpeta_salida>
Geometría: calco vectorizado del diseño n.º 7 elegido por Víctor (simbolo.json, arco-y-puntos.json).
Texto: Spectral Light Italic (OFL), del paquete @fontsource/spectral."""
import json, math, os, re, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
HERE=os.path.dirname(os.path.abspath(__file__))
ROOT=os.path.dirname(os.path.dirname(HERE))
FONT=os.path.join(ROOT,'node_modules','@fontsource','spectral','files','spectral-latin-300-italic.woff2')
SYM=json.load(open(os.path.join(HERE,'simbolo.json')))['d']
G=json.load(open(os.path.join(HERE,'arco-y-puntos.json')))
DOTS=[(166.3,620.0,32.0),(166.3,730.0,32.0)]
COLORES={'vino':'#4a1020','marfil':'#f1e3c8','tinta':'#1d1718','blanco':'#ffffff'}
font=TTFont(FONT); gs=font.getGlyphSet(); cmap=font.getBestCmap(); upm=font['head'].unitsPerEm; hmtx=font['hmtx']
def text_path(s,x,y,size,target):
    sc=size/upm; names=[cmap[ord(ch)] for ch in s]
    adv=[hmtx[n][0]*sc for n in names]; extra=(target-sum(adv))/max(1,len(names)-1)   # como lengthAdjust="spacing": el sobrante se reparte entre los huecos
    d=''; bx=[]; cx=x
    for n,a in zip(names,adv):
        pen=SVGPathPen(gs); gs[n].draw(TransformPen(pen,(sc,0,0,-sc,cx,y))); d+=pen.getCommands()
        bp=BoundsPen(gs); gs[n].draw(TransformPen(bp,(sc,0,0,-sc,cx,y)))
        if bp.bounds: bx.append(bp.bounds)
        cx+=a+extra
    return d,(min(b[0] for b in bx),min(b[1] for b in bx),max(b[2] for b in bx),max(b[3] for b in bx))
def arc_shape(cx,cy,r,w,a0,span):
    ro,ri=r+w/2,r-w/2; a1=a0+span; P=lambda rad,a:(cx+rad*math.cos(math.radians(a)),cy+rad*math.sin(math.radians(a)))
    o0,o1,i1,i0=P(ro,a0),P(ro,a1),P(ri,a1),P(ri,a0); big=1 if span>180 else 0; c=w/2
    f=lambda p:f'{p[0]:.2f},{p[1]:.2f}'
    return (f'M{f(o0)} A{ro:.2f},{ro:.2f} 0 {big},1 {f(o1)} A{c:.2f},{c:.2f} 0 0,1 {f(i1)} '
            f'A{ri:.2f},{ri:.2f} 0 {big},0 {f(i0)} A{c:.2f},{c:.2f} 0 0,1 {f(o0)}Z')
cx,cy,r,w,a0,span=G['ring']
ARC=arc_shape(cx,cy,r,w,a0,span)
T1,b1=text_path('íctor',573,711,240,460); T2,b2=text_path('ruz',508,878,240,342)
def circ(x,y,r): return f'M{x-r:.2f},{y:.2f} a{r:.2f},{r:.2f} 0 1,0 {2*r:.2f},0 a{r:.2f},{r:.2f} 0 1,0 {-2*r:.2f},0Z'
DOTP=''.join(circ(*d) for d in DOTS)
def pts_bbox(d):
    nums=[float(v) for v in re.findall(r'-?\d+\.?\d*',d)]
    xs=nums[0::2]; ys=nums[1::2]; return min(xs),min(ys),max(xs),max(ys)
sb=pts_bbox(SYM)
ARC_PTS=[(cx+(r+w/2)*math.cos(math.radians(a0+span*k/200)),cy+(r+w/2)*math.sin(math.radians(a0+span*k/200))) for k in range(201)]
def union(*bs): return min(b[0] for b in bs),min(b[1] for b in bs),max(b[2] for b in bs),max(b[3] for b in bs)
ab=(min(p[0] for p in ARC_PTS),min(p[1] for p in ARC_PTS),max(p[0] for p in ARC_PTS),max(p[1] for p in ARC_PTS))
db=(DOTS[0][0]-32,DOTS[0][1]-32,DOTS[0][0]+32,DOTS[1][1]+32)
PIEZAS={
 'logo':     (SYM+DOTP+ARC+T1+T2, union(sb,ab,db,b1,b2)),
 'logo-sin-arco':(SYM+DOTP+T1+T2, union(sb,db,b1,b2)),
 'simbolo':  (SYM+DOTP, union(sb,db)),
 'simbolo-arco':(SYM+DOTP+ARC, union(sb,ab,db)),
}
def svg(d,bb,fill,margin=0.04,bg=None,square=False,title='Víctor Cruz, barítono'):
    x0,y0,x1,y1=bb; W,H=x1-x0,y1-y0; m=max(W,H)*margin
    if square:
        side=max(W,H)+2*m; x0-= (side-W)/2-m; y0-=(side-H)/2-m; W=H=side-2*m
    vb=f'{x0-m:.1f} {y0-m:.1f} {W+2*m:.1f} {H+2*m:.1f}'
    rect=f'<rect x="{x0-m:.1f}" y="{y0-m:.1f}" width="{W+2*m:.1f}" height="{H+2*m:.1f}" fill="{bg}"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="{title}"><title>{title}</title>'
            f'{rect}<path fill="{fill}" fill-rule="nonzero" d="{d}"/></svg>')
if __name__=='__main__':
    out=sys.argv[1]; os.makedirs(out,exist_ok=True)
    for pieza,(d,bb) in PIEZAS.items():
        for nombre,col in COLORES.items():
            open(os.path.join(out,f'{pieza}-{nombre}.svg'),'w',encoding='utf8').write(svg(d,bb,col))
    json.dump({k:v[1] for k,v in PIEZAS.items()},open(os.path.join(out,'_cajas.json'),'w'))
    print('ok', {k:[round(x) for x in v[1]] for k,v in PIEZAS.items()})
