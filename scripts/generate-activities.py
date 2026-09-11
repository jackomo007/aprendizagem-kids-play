# -*- coding: utf-8 -*-
from pathlib import Path
root=Path(__file__).resolve().parents[1]
def esc(s): return s.replace('\\','\\\\').replace('(','\\(').replace(')','\\)')
def text(s,x,y,size=13): return f'BT /F1 {size} Tf {x} {y} Td ({esc(s)}) Tj ET\n'
def line(x,y,xx,yy): return f'{x} {y} m {xx} {yy} l S\n'
def pdf(path,title,subtitle,body):
 c='0.12 0.17 0.29 rg 0.12 0.17 0.29 RG\n'+text('APRENDIZAGEM KIDS PLAY',48,790,11)+text(title,48,749,25)+text(subtitle,48,720,12)+line(48,700,547,700)+body+line(48,75,547,75)+text('Aprender, brincar e descobrir! | Material gratuito de exemplo',48,53,10)
 stream=c.encode('cp1252')
 objs=[b'<< /Type /Catalog /Pages 2 0 R >>',b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',b'<< /Length '+str(len(stream)).encode()+b' >>\nstream\n'+stream+b'endstream']
 out=bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n');offsets=[0]
 for i,obj in enumerate(objs,1): offsets.append(len(out));out.extend(f'{i} 0 obj\n'.encode()+obj+b'\nendobj\n')
 start=len(out);out.extend(f'xref\n0 {len(objs)+1}\n0000000000 65535 f \n'.encode())
 for pos in offsets[1:]:out.extend(f'{pos:010d} 00000 n \n'.encode())
 out.extend(f'trailer\n<< /Size {len(objs)+1} /Root 1 0 R >>\nstartxref\n{start}\n%%EOF\n'.encode())
 p=root/'public/atividades'/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(out)
b=text('1. Pinte o círculo de azul, o quadrado de amarelo',48,667)+text('e o triângulo de verde.',48,646)
b+='2 w\n'
x,y,r=125,550,43;k=r*.5522848
b+=f'{x+r} {y} m {x+r} {y+k} {x+k} {y+r} {x} {y+r} c {x-k} {y+r} {x-r} {y+k} {x-r} {y} c {x-r} {y-k} {x-k} {y-r} {x} {y-r} c {x+k} {y-r} {x+r} {y-k} {x+r} {y} c S\n'
b+='258 507 86 86 re S\n421 507 m 469 593 l 517 507 l h S\n'
b+=text('CÍRCULO',98,476,11)+text('QUADRADO',270,476,11)+text('TRIÂNGULO',438,476,11)
b+=text('2. Procure uma dessas formas ao seu redor. Desenhe o objeto!',48,409)
b+='48 177 499 207 re S\n'+text('Converse: qual forma você encontrou? Onde ela estava?',48,130,12)
pdf('infantil/formas-para-descobrir.pdf','Formas para descobrir','Educação Infantil | Formas e cores | 1 página',b)
b=text('1. Resolva as adições. Você pode desenhar para contar.',48,661)
for row,(a,c) in enumerate([(1,2),(2,2),(3,2),(4,1)]):
 yy=600-row*78;b+=text(f'{a} + {c} = ______',65,yy,24)+line(300,yy-4,520,yy-4)
b+=text('2. Invente uma adição e desenhe as quantidades abaixo.',48,268)+'48 140 499 102 re S\n'+text('Para conferir com um adulto: 3, 4, 5, 5.',48,103,10)
pdf('matematica/somando-descobertas.pdf','Somando descobertas','Matemática | 1º ano | 1 página',b)
b=text('1. Complete com as vogais que faltam: A, E, I, O ou U.',48,661)
for i,s in enumerate(['B _ L A     (brinquedo redondo)','G _ T O     (animal que mia)','L _ V R O   (tem páginas e histórias)','S _ P O     (animal que pula)']):b+=text(s,64,600-i*72,18)
b+=text('2. Escolha uma palavra acima e escreva uma frase.',48,278)
for yy in [235,190,145]:b+=line(48,yy,547,yy)
b+=text('Para conferir com um adulto: BOLA, GATO, LIVRO, SAPO.',48,104,10)
pdf('portugues/primeiras-palavras.pdf','Primeiras palavras','Português | 1º e 2º ano | 1 página',b)
print('3 PDFs A4 generated')
