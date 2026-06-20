/* ============================================================
   1. CONFIGURATION DES IMAGES DE CATÉGORIES
   ============================================================ */
const categoryImages = {
  "Plats du Jour": "plats-du-jours.jpg",
  "Viandes": "viande1.jpg",
  "Pâtes": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=80",
  "Fruits de Mers": "https://images.unsplash.com/photo-1615141982883-c7da0e698800?w=1200&q=80",
  "Salades": "salades.jpg",
  "Jus": "jus.jpg",
  "Jus Naturels": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80",
  "Cocktails": "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&q=80",
  "Cafés": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&q=80",
  "Déjeuners": "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80",
  "Pizzas": "pizza.jpg",
  "Fast Food": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
  "Poissons": "poisson.jpg",
  "Poulets": "poulets.jpg"
};

/* ============================================================
   2. DONNÉES DU MENU
   ============================================================ */
const menuData = [
  { cat:"Plats du Jour", emoji:"🍛", name:"Lundi", desc:"Riz Gras Viande", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🥣", name:"Mardi", desc:"Soupe Viande", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🍲", name:"Mercredi", desc:"Feuille de Patate", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🥘", name:"Jeudi", desc:"Maganyi", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🥣", name:"Vendredi", desc:"Soupe Boulette", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🍛", name:"Samedi", desc:"Riz Gras", price:"Du jour" },
  { cat:"Plats du Jour", emoji:"🥜", name:"Dimanche", desc:"Sauce D'arachide", price:"Du jour" },
  { cat:"Viandes", emoji:"🥩", name:"Émincé de Bœuf", desc:"", price:"100 000 GNF" },
  { cat:"Viandes", emoji:"🍢", name:"Brochette de Viande", desc:"", price:"100 000 GNF" },
  { cat:"Viandes", emoji:"🥩", name:"Filet de Bœuf", desc:"", price:"100 000 GNF" },
  { cat:"Viandes", emoji:"🥘", name:"Émincé de Bœuf à la Crème", desc:"", price:"120 000 GNF" },
  { cat:"Pâtes", emoji:"🍝", name:"Spaghetti Sauce Crème", desc:"", price:"70 000 GNF" },
  { cat:"Pâtes", emoji:"🍝", name:"Spaghetti Bolognaise", desc:"", price:"60 000 GNF" },
  { cat:"Pâtes", emoji:"🍝", name:"Spaghetti Sauce Tomate", desc:"", price:"50 000 GNF" },
  { cat:"Fruits de Mers", emoji:"🦐", name:"Gambas", desc:"", price:"150 000 GNF" },
  { cat:"Fruits de Mers", emoji:"🦑", name:"Calamars", desc:"", price:"150 000 GNF" },
  { cat:"Fruits de Mers", emoji:"🍢", name:"Brochette de Crevettes", desc:"", price:"120 000 GNF" },
  { cat:"Boulettes", emoji:"🧆", name:"Boulette", desc:"", price:"50 000 GNF" },
  { cat:"Boulettes", emoji:"🥣", name:"Bouillon", desc:"", price:"50 000 GNF" },
  { cat:"Salades", emoji:"🥗", name:"Salade Niçoise", desc:"", price:"50 000 GNF" },
  { cat:"Salades", emoji:"🥗", name:"Salade Composée", desc:"", price:"60 000 GNF" },
  { cat:"Salades", emoji:"🥬", name:"Salade Verte", desc:"", price:"30 000 GNF" },
  { cat:"Salades", emoji:"🥗", name:"Salade de Choux", desc:"", price:"50 000 GNF" },
  { cat:"Assiettes", emoji:"🍌", name:"Assiette d'Aloco", desc:"Portion seule", price:"35 000 GNF" },
  { cat:"Assiettes", emoji:"🍟", name:"Assiette de Frites", desc:"Portion seule", price:"30 000 GNF" },
  { cat:"Garnitures", emoji:"🍟", name:"Frites", desc:"Accompagnement", price:"Inclus" },
  { cat:"Garnitures", emoji:"🍚", name:"Athiékié", desc:"Accompagnement", price:"Inclus" },
  { cat:"Garnitures", emoji:"🥗", name:"Salade", desc:"Accompagnement", price:"Inclus" },
  { cat:"Garnitures", emoji:"🍌", name:"Aloco", desc:"Accompagnement", price:"Inclus" },
  { cat:"Garnitures", emoji:"🫛", name:"Petit Poids", desc:"Accompagnement", price:"Inclus" },
  { cat:"Garnitures", emoji:"🥦", name:"Légume Sauté", desc:"Accompagnement", price:"Inclus" },
  { cat:"Jus", emoji:"🥤", name:"Xxl", desc:"", price:"20 000 GNF" },
  { cat:"Jus", emoji:"🥤", name:"Coca", desc:"", price:"15 000 GNF" },
  { cat:"Jus", emoji:"🥤", name:"Fanta", desc:"", price:"15 000 GNF" },
  { cat:"Jus", emoji:"🧃", name:"Jus de fruit", desc:"", price:"15 000 GNF" },
  { cat:"Jus", emoji:"⚡", name:"Red Bull", desc:"", price:"30 000 GNF" },
  { cat:"Jus", emoji:"🥤", name:"Coca Lite", desc:"", price:"20 000 GNF" },
  { cat:"Jus Naturels", emoji:"🌺", name:"Bissap", desc:"Verre", price:"10 000 GNF" },
  { cat:"Jus Naturels", emoji:"🌺", name:"Bissap Grande Bouteille", desc:"", price:"60 000 GNF" },
  { cat:"Jus Naturels", emoji:"🧄", name:"Gingembre", desc:"Verre", price:"10 000 GNF" },
  { cat:"Jus Naturels", emoji:"🧄", name:"Gingembre Grande Bouteille", desc:"", price:"60 000 GNF" },
  { cat:"Jus Naturels", emoji:"🧄", name:"Gingembre Sans Sucre", desc:"", price:"15 000 GNF" },
  { cat:"Cocktails", emoji:"🍹", name:"Virgin mojito", desc:"", price:"50 000 GNF" },
  { cat:"Cocktails", emoji:"🍹", name:"Cocktail Africain", desc:"", price:"50 000 GNF" },
  { cat:"Cocktails", emoji:"🍹", name:"Cocktail AMB", desc:"", price:"50 000 GNF" },
  { cat:"Cocktails", emoji:"🍹", name:"Cocktail Tropical", desc:"", price:"50 000 GNF" },
  { cat:"Cocktails", emoji:"🍹", name:"Cocktail Smothy", desc:"", price:"50 000 GNF" },
  { cat:"Cocktails", emoji:"🥛", name:"Menthe au lait", desc:"", price:"30 000 GNF" },
  { cat:"Eaux", emoji:"💧", name:"Petite Bouteille", desc:"", price:"5 000 GNF" },
  { cat:"Eaux", emoji:"💧", name:"Grande Bouteille", desc:"10 000 GNF" },
  { cat:"Cafés", emoji:"☕", name:"Café au lait", desc:"", price:"15 000 GNF" },
  { cat:"Cafés", emoji:"🍵", name:"Lipton", desc:"", price:"10 000 GNF" },
  { cat:"Cafés", emoji:"☕", name:"Expresso", desc:"", price:"15 000 GNF" },
  { cat:"Cafés", emoji:"☕", name:"Cappucino", desc:"", price:"20 000 GNF" },
  /* ---- Déjeuners ---- */
  { cat:"Déjeuners", emoji:"🍳", name:"Omelette Simple", desc:"", price:"35 000 GNF" },
  { cat:"Déjeuners", emoji:"🍳", name:"Omelette Saucisse", desc:"", price:"40 000 GNF" },
  { cat:"Déjeuners", emoji:"🍳", name:"Omelette Corne Boeuf", desc:"", price:"45 000 GNF" },
  { cat:"Déjeuners", emoji:"🍲", name:"Lafidi", desc:"", price:"25 000 GNF" },
  /* ---- Pizzas ---- */
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Spécial AMB", desc:"Notre signature maison", price:"150 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Royal", desc:"", price:"120 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Americain", desc:"", price:"100 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza au Thon", desc:"", price:"100 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Saucisse", desc:"", price:"100 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Poulet", desc:"", price:"90 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Végétarien", desc:"", price:"90 000 GNF" },
  { cat:"Pizzas", emoji:"🍕", name:"Pizza Marguerita", desc:"", price:"80 000 GNF" },
  /* ---- Fast Food ---- */
  { cat:"Fast Food", emoji:"🥙", name:"Assiette de Chawarma", desc:"", price:"50 000 GNF" },
  { cat:"Fast Food", emoji:"🥙", name:"Chawarma Viande", desc:"", price:"35 000 GNF" },
  { cat:"Fast Food", emoji:"🥙", name:"Chawarma Poulet", desc:"", price:"35 000 GNF" },
  { cat:"Fast Food", emoji:"🍔", name:"Burger Viande", desc:"", price:"50 000 GNF" },
  { cat:"Fast Food", emoji:"🍔", name:"Burger Poulet", desc:"", price:"50 000 GNF" },
  { cat:"Fast Food", emoji:"🍔", name:"Double Burger", desc:"", price:"80 000 GNF" },
  { cat:"Fast Food", emoji:"🍔", name:"Burger à Cheval", desc:"", price:"60 000 GNF" },
  { cat:"Fast Food", emoji:"🍔", name:"Burger Spécial AMB", desc:"Notre burger signature", price:"100 000 GNF" },
  { cat:"Fast Food", emoji:"🥪", name:"Sandwich Poulet", desc:"", price:"25 000 GNF" },
  { cat:"Fast Food", emoji:"🥪", name:"Sandwich Viande", desc:"", price:"25 000 GNF" },
  { cat:"Fast Food", emoji:"🌭", name:"Sandwich Hot Dog", desc:"", price:"35 000 GNF" },
  { cat:"Fast Food", emoji:"🥪", name:"Sandwich Philadelphia", desc:"", price:"45 000 GNF" },
  { cat:"Fast Food", emoji:"🥪", name:"Sandwich Végétarien", desc:"", price:"25 000 GNF" },
  /* ---- Poissons ---- */
  { cat:"Poissons", emoji:"🐟", name:"Poisson Braisé Moin", desc:"", price:"80 000 GNF" },
  { cat:"Poissons", emoji:"🐟", name:"Poisson Braisé Grand", desc:"", price:"120 000 GNF" },
  { cat:"Poissons", emoji:"🐠", name:"Poisson Grillé Moin", desc:"", price:"80 000 GNF" },
  { cat:"Poissons", emoji:"🐠", name:"Poisson Grillé Grand", desc:"", price:"120 000 GNF" },
  { cat:"Poissons", emoji:"🍲", name:"Poisson Sauté (Sauce Crème)", desc:"", price:"150 000 GNF" },
  { cat:"Poissons", emoji:"🐡", name:"Filet de Poisson", desc:"", price:"120 000 GNF" },
  { cat:"Poissons", emoji:"🍢", name:"Brochette de Poisson", desc:"", price:"120 000 GNF" },
  /* ---- Poulets ---- */
  { cat:"Poulets", emoji:"🍗", name:"Poulet Entier", desc:"", price:"120 000 GNF" },
  { cat:"Poulets", emoji:"🍗", name:"Demi Poulet", desc:"", price:"70 000 GNF" },
  { cat:"Poulets", emoji:"🍗", name:"Cuisse Poulet", desc:"", price:"60 000 GNF" },
  { cat:"Poulets", emoji:"🍢", name:"Brochette de Poulet", desc:"", price:"80 000 GNF" },
  { cat:"Poulets", emoji:"🍗", name:"Filet de Poulet", desc:"", price:"80 000 GNF" },
  { cat:"Poulets", emoji:"🍗", name:"Pilon Pané", desc:"", price:"60 000 GNF" },
  { cat:"Poulets", emoji:"🍗", name:"Émincé Poulet", desc:"", price:"80 000 GNF" }
];

let currentCat = 'Plats du Jour';

function renderTabs() {
  const tabsContainer = document.getElementById('menu-tabs');
  const cats = ['all', ...new Set(menuData.map(i => i.cat))];
  tabsContainer.innerHTML = cats.map(c => 
    `<button class="tab-btn ${c === currentCat ? 'active' : ''}" onclick="switchTab('${c}')" role="tab" aria-selected="${c === currentCat ? 'true' : 'false'}">${c === 'all' ? 'Tout le Menu' : c}</button>`
  ).join('');
}

function switchTab(cat) {
  currentCat = cat;
  renderTabs();
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const banner = document.getElementById('category-banner');
  const filteredData = currentCat === 'all' ? menuData : menuData.filter(i => i.cat === currentCat);
  
  if (currentCat !== 'all' && categoryImages[currentCat]) {
    banner.innerHTML = `<img src="${categoryImages[currentCat]}" alt="${currentCat}" loading="lazy"><h3>${currentCat}</h3>`;
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }

  grid.innerHTML = filteredData.map(item => {
    const priceClass = (item.price === 'Inclus' || item.price === 'Du jour') ? 'price-badge no-price' : 'price-badge';
    return `
      <div class="menu-card" role="listitem">
        <div class="card-top-line"></div>
        <span class="${priceClass}">${item.price}</span>
        <div class="card-body">
          <span class="card-emoji" aria-hidden="true">${item.emoji}</span>
          <span class="card-cat-tag">${item.cat}</span>
          <h3 class="card-name">${item.name}</h3>
          ${item.desc ? `<p class="card-desc">${item.desc}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================
   3. ANIMATIONS, CAROUSEL DES AVIS & NAVIGATION
   ============================================================ */
// Carousel des Avis
let currentAvis = 0;
const avisCards = document.getElementsByClassName('avis-card');

function initAvis() {
  const dotsContainer = document.getElementById('avis-dots');
  dotsContainer.innerHTML = Array.from({length: avisCards.length}).map((_, i) => 
    `<span class="avis-dot ${i === 0 ? 'active' : ''}" onclick="setAvis(${i})" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}"></span>`
  ).join('');
}

function setAvis(index) {
  for(let card of avisCards) card.classList.remove('active');
  const dots = document.getElementsByClassName('avis-dot');
  for(let dot of dots) dot.classList.remove('active');
  
  currentAvis = index;
  avisCards[currentAvis].classList.add('active');
  if(dots[currentAvis]) dots[currentAvis].classList.add('active');
}

// Auto scroll des avis toutes les 6 secondes
setInterval(() => {
  let next = (currentAvis + 1) % avisCards.length;
  setAvis(next);
}, 6000);

// Bandeau défilant (Ribbon)
const ribbonItems = ['Viandes', 'Pâtes', 'Fruits de Mers', 'Jus Naturels', 'Cocktails', 'Pizzas', 'Fast Food', 'Poissons', 'Poulets', 'Déjeuners'];
const track = document.getElementById('ribbon-track');
track.innerHTML = [...ribbonItems,...ribbonItems,...ribbonItems].map(t=>`<span class="ribbon-item">${t}<span class="ribbon-dot"></span></span>`).join('');

// Particules d'ambiance
const canvas=document.getElementById('particles-canvas'), ctx=canvas.getContext('2d');
function resizeCanvas() { canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
resizeCanvas(); window.addEventListener('resize',resizeCanvas);
class Particle{constructor(){this.reset()} reset(){this.x=Math.random()*canvas.width; this.y=Math.random()*canvas.height; this.size=Math.random()*2+0.3; this.speedX=(Math.random()-0.5)*0.3; this.speedY=-Math.random()*0.6-0.1; this.life=0; this.maxLife=Math.random()*300+200;} update(){this.x+=this.speedX; this.y+=this.speedY; this.life++; const t=this.life/this.maxLife; this.opacity=t<0.1?t/0.1*0.6:t>0.8?(1-t)/0.2*0.6:0.6; if(this.life>this.maxLife)this.reset();} draw(){ctx.save(); ctx.globalAlpha=this.opacity; ctx.fillStyle='#C9A84C'; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); ctx.restore();}}
const particles=Array.from({length:70},()=>new Particle());
function animateParticles(){ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animateParticles);}
animateParticles();

// Navbar Scrolled Effect
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);});

// Effet d'apparition au défilement (Scroll Reveal)
function observeReveal(){
  const obs=new IntersectionObserver((e)=>e.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible'); obs.unobserve(entry.target);}
  }),{threshold:0.1}); 
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

// Menu Mobile
function openMobileNav(){document.getElementById('mobile-nav').classList.add('open');}
function closeMobileNav(){document.getElementById('mobile-nav').classList.remove('open');}

// Lancement au chargement de la page
initAvis();
renderTabs(); 
renderMenu(); 
observeReveal();
