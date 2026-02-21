document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('episode-list');
  
  // Episodes 1-5
  for(let i=1;i<=5;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }
  
  // 番外篇01 (原5.5)
  const sp1Li = document.createElement('li');
  const sp1A = document.createElement('a');
  sp1A.textContent = '番外篇01';
  sp1A.href = `./episode_viewer.html?ep=5.5`;
  sp1Li.appendChild(sp1A);
  container.appendChild(sp1Li);

  // Episodes 6-10
  for(let i=6;i<=10;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }

  // 番外篇02 (原10.5)
  const sp10_5Li = document.createElement('li');
  const sp10_5A = document.createElement('a');
  sp10_5A.textContent = '番外篇02';
  sp10_5A.href = `./episode_viewer.html?ep=10.5`;
  sp10_5Li.appendChild(sp10_5A);
  container.appendChild(sp10_5Li);

  // Episodes 11-15
  for(let i=11;i<=15;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }

  // 番外篇03 (原15.5)
  const sp15_5Li = document.createElement('li');
  const sp15_5A = document.createElement('a');
  sp15_5A.textContent = '番外篇03';
  sp15_5A.href = `./episode_viewer.html?ep=15.5`;
  sp15_5Li.appendChild(sp15_5A);
  container.appendChild(sp15_5Li);

  // Episodes 16-20
  for(let i=16;i<=20;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }

  // 番外篇04 (原20.5)
  const sp20_5Li = document.createElement('li');
  const sp20_5A = document.createElement('a');
  sp20_5A.textContent = '番外篇04';
  sp20_5A.href = `./episode_viewer.html?ep=20.5`;
  sp20_5Li.appendChild(sp20_5A);
  container.appendChild(sp20_5Li);

  // Episodes 21-25
  for(let i=21;i<=25;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }

  // 番外篇05 (原25.5)
  const sp25_5Li = document.createElement('li');
  const sp25_5A = document.createElement('a');
  sp25_5A.textContent = '番外篇05';
  sp25_5A.href = `./episode_viewer.html?ep=25.5`;
  sp25_5Li.appendChild(sp25_5A);
  container.appendChild(sp25_5Li);

  // Episodes 26-32
  for(let i=26;i<=32;i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const num = String(i).padStart(2,'0');
    a.textContent = `第${num}话`;
    a.href = `./episode_viewer.html?ep=${i}`;
    li.appendChild(a);
    container.appendChild(li);
  }

  // 番外篇06 (原32.5)
  const sp32_5Li = document.createElement('li');
  const sp32_5A = document.createElement('a');
  sp32_5A.textContent = '番外篇06';
  sp32_5A.href = `./episode_viewer.html?ep=32.5`;
  sp32_5Li.appendChild(sp32_5A);
  container.appendChild(sp32_5Li);

  // 后传 (Special)
  const spLi = document.createElement('li');
  const spA = document.createElement('a');
  spA.textContent = '后传';
  spA.href = `./episode_viewer.html?ep=33`;
  spLi.appendChild(spA);
  container.appendChild(spLi);

  // 与你轻唱泡沫恋语
  const qingLi = document.createElement('li');
  const qingA = document.createElement('a');
  qingA.textContent = '与你轻唱泡沫恋语';
  qingA.href = `./episode_viewer.html?ep=34`;
  qingLi.appendChild(qingA);
  container.appendChild(qingLi);
});