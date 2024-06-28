let yy,mm,dd,y1,y2;


function getdate(){
    const dob = document.getElementById("bday").value;
    const datelist = dob.split('-');
    yy = datelist[0];
    mm = datelist[1];
    dd = datelist[2];
    // console.log(y);
    // console.log(m);
    // console.log(d);
    // console.log(datelist);
    y1 = yy.slice(0, 2);
    y2 = yy.slice(2, 4);
    // console.log(y1,y2);
    magic_square();
}

function magic_square()
{
    const a = document.getElementById("item1");
    const b = document.getElementById("item2");
    const c = document.getElementById("item3");
    const d = document.getElementById("item4");
    const e = document.getElementById("item5");
    const f = document.getElementById("item6");
    const g = document.getElementById("item7");
    const h = document.getElementById("item8");
    const i = document.getElementById("item9");
    const j = document.getElementById("item10");
    const k = document.getElementById("item11");
    const l = document.getElementById("item12");
    const m = document.getElementById("item13");
    const n = document.getElementById("item14");
    const o = document.getElementById("item15");
    const p = document.getElementById("item16");

    a.innerHTML=dd;
    b.innerHTML=mm;
    c.innerHTML=y1;
    d.innerHTML=y2;
    e.innerHTML=Number(y2)+1;
    f.innerHTML=Number(y1)-1;
    g.innerHTML=Number(mm)-3;
    h.innerHTML=Number(dd)+3;
    i.innerHTML=Number(mm)-2;
    j.innerHTML=Number(dd)+2;
    k.innerHTML=Number(y2)+2;
    l.innerHTML=Number(y1)-2;
    m.innerHTML=Number(y1)+1;
    n.innerHTML=Number(y2)-1;
    o.innerHTML=Number(dd)+1;
    p.innerHTML=Number(mm)-1;
}