const Header = () => `
<header class="sticky top-0 z-[60] w-full backdrop-blur-md bg-background-light/90 dark:bg-[#1a1a1a]/90 border-b border-[#d69e2e]/30 dark:border-[#5d4037] overflow-hidden">
    <!-- Oscilloscope Canvas Background -->
    <canvas id="header-oscilloscope" class="absolute inset-x-0 bottom-0 h-12 w-full opacity-20 pointer-events-none"></canvas>
    
    <div class="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto w-full relative z-10">
        <a href="index.html" class="flex items-center gap-3 group">
            <div class="size-10 md:size-12 overflow-hidden rounded-full border border-mustard/30 shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <img src="assets/logo.jpg" alt="DreamSequence Logo" class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col">
                <h2 class="text-lg md:text-xl font-bold tracking-widest uppercase text-tobacco dark:text-mustard leading-tight">Dream Sequence</h2>
                <span class="text-[8px] font-mono text-burnt-orange uppercase tracking-[0.3em] opacity-70 hidden md:block">Analog Monitoring Active</span>
            </div>
        </a>
        
        <nav class="hidden lg:flex items-center gap-8">
            <a class="nav-link" href="biography.html">Biography</a>
            <a class="nav-link" href="collection.html">Discography</a>
            <a class="nav-link" href="gallery.html">Gallery</a>
            <a class="nav-link" href="tours.html">Tours</a>
            <a class="nav-link" href="merch.html">Merch</a>
        </nav>

        <div class="flex items-center gap-3 md:gap-4">
            <button onclick="toggleCart()" class="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-sm h-9 px-3 md:px-4 bg-transparent border border-mustard/50 hover:bg-mustard hover:text-background-dark transition-all duration-300 text-mustard text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase">
                <span class="material-symbols-outlined text-lg">shopping_cart</span>
                <span id="cart-count">Cart (0)</span>
            </button>
            <button class="lg:hidden text-tobacco dark:text-accent p-1" onclick="toggleMobileMenu()">
                <span class="material-symbols-outlined text-3xl" id="menu-icon">menu</span>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 top-[60px] z-[55] hidden bg-background-dark/95 backdrop-blur-lg lg:hidden animate-in fade-in slide-in-from-top duration-300">
        <nav class="flex flex-col items-center justify-center h-full gap-8 p-6">
            <a class="text-2xl font-bold tracking-[0.2em] uppercase text-mustard hover:text-accent transition-colors" href="biography.html" onclick="toggleMobileMenu()">Biography</a>
            <a class="text-2xl font-bold tracking-[0.2em] uppercase text-mustard hover:text-accent transition-colors" href="collection.html" onclick="toggleMobileMenu()">Discography</a>
            <a class="text-2xl font-bold tracking-[0.2em] uppercase text-mustard hover:text-accent transition-colors" href="gallery.html" onclick="toggleMobileMenu()">Gallery</a>
            <a class="text-2xl font-bold tracking-[0.2em] uppercase text-mustard hover:text-accent transition-colors" href="tours.html" onclick="toggleMobileMenu()">Tours</a>
            <a class="text-2xl font-bold tracking-[0.2em] uppercase text-mustard hover:text-accent transition-colors" href="merch.html" onclick="toggleMobileMenu()">Merch</a>
            
            <div class="mt-12 flex gap-8">
                <a href="#" class="text-mustard/60 hover:text-mustard"><svg class="size-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
                <a href="https://dreamsequence3.bandcamp.com" target="_blank" class="text-mustard/60 hover:text-mustard"><svg class="size-8" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></path></svg></a>
            </div>
        </nav>
    </div>
</header>
`;

// Oscilloscope Generator
const initOscilloscope = () => {
    const canvas = document.getElementById('header-oscilloscope');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = 48;
    let offset = 0;
    let scrollIntensity = 0;
    let mouseX = 0;

    // Track scroll for intensity
    window.addEventListener('scroll', () => {
        scrollIntensity = window.scrollY * 0.001;
    });

    // Track mouse for frequency modulation
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
    });

    const draw = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#29B6B6';
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.stroke();
            return;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#29B6B6'; // Luminous Teal

        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
            // Interactive wave: reacts to mouse position and scroll
            const freq1 = 0.01 + (mouseX * 0.03);
            const freq2 = 0.04 + (scrollIntensity * 0.05);

            const amp1 = 10 + (scrollIntensity * 20);
            const amp2 = 5 + (mouseX * 15);

            const y = height / 2 +
                Math.sin(x * freq1 + offset) * amp1 +
                Math.sin(x * freq2 + offset * 1.5) * amp2;
            ctx.lineTo(x, y);
        }

        ctx.stroke();
        offset += 0.05 + (scrollIntensity * 0.1);
        requestAnimationFrame(draw);
    };

    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
    });

    draw();
};

const Footer = () => `
<footer class="mt-auto border-t border-mustard/10 bg-background-dark py-20 px-6 mb-24 md:mb-0 reveal">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <!-- Newsletter Section -->
            <div class="flex flex-col gap-8 p-10 bg-[#1a1613]/40 border border-mustard/10 photo-frame-dark">
                <div>
                    <h3 class="text-3xl font-black uppercase text-mustard tracking-tight mb-2">Signal Bulletin</h3>
                    <p class="text-burnt-orange font-mono text-xs uppercase tracking-[0.2em]">Subscribe for archive updates</p>
                </div>
                <form class="flex flex-col sm:flex-row gap-4" onsubmit="event.preventDefault(); alert('Transmission Received. Welcome to the archives.'); this.reset();">
                    <input type="email" placeholder="ENCODED_ADDRESS@DOMAIN.SYS" required
                        class="flex-1 bg-background-dark/80 border border-mustard/20 p-4 focus:border-mustard outline-none text-mustard font-mono text-sm uppercase placeholder:text-mustard/20 transition-all">
                    <button type="submit"
                        class="bg-mustard text-background-dark px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-accent transition-all duration-300">
                        Subscribe
                    </button>
                </form>
                <div class="flex items-center gap-3">
                    <div class="size-2 bg-accent animate-pulse rounded-full"></div>
                    <span class="text-[10px] font-mono text-tobacco/50 uppercase tracking-widest">Frequency: Monthly Transmissions</span>
                </div>
            </div>

            <!-- Info & Links -->
            <div class="flex flex-col md:flex-row justify-between gap-12">
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <div class="size-12 overflow-hidden rounded-full border border-mustard/30 shadow-xl">
                            <img src="assets/logo.jpg" alt="DreamSequence Logo" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xl font-black tracking-tight text-mustard uppercase leading-none">DreamSequence</span>
                            <span class="text-[10px] text-burnt-orange font-mono mt-1 uppercase tracking-widest opacity-70">Trieste • Since 1972</span>
                        </div>
                    </div>
                    <p class="text-xs text-tobacco/60 leading-relaxed max-w-xs uppercase font-medium tracking-tight">
                        Dedicated to the preservation of analog transmissions and the exploration of cosmic frequencies via magnetic tape.
                    </p>
                </div>

                <div class="flex flex-col gap-6">
                    <span class="text-xs font-black text-mustard uppercase tracking-widest">Connect</span>
                    <div class="flex gap-6">
                        <a class="text-mustard/40 hover:text-mustard transition-colors" href="https://www.instagram.com/dreamsequence.italia/" target="_blank">
                            <span class="sr-only">Instagram</span>
                            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                        <a class="text-mustard/40 hover:text-mustard transition-colors" href="https://dreamsequence3.bandcamp.com" target="_blank">
                            <span class="sr-only">Bandcamp</span>
                            <svg class="size-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-t border-mustard/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-[10px] text-tobacco/40 uppercase tracking-[0.3em] font-mono">
                Terminal ID: DS-72-ARCHIVE-V1.4.2
            </p>
            <p class="text-[10px] text-tobacco/40 uppercase tracking-[0.3em] font-mono text-center md:text-right">
                © 2024 DreamSequence Archives • Frequency Matrix Authorized
            </p>
        </div>
    </div>
</footer>
`;

const Player = () => `<!-- Floating Player Removed -->`;

const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el, index) => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'will-change-transform');
        observer.observe(el);
    });
};

// Injection Logic
document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('main-header');
    if (headerEl) {
        headerEl.innerHTML = Header();
        initOscilloscope();
    }

    const footerEl = document.getElementById('main-footer');
    if (footerEl) footerEl.innerHTML = Footer();

    initScrollReveal();

    if (!document.getElementById('poster-modal')) {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = `
        <div id="poster-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
            <button onclick="closeModal()" class="absolute top-4 right-4 md:top-6 md:right-6 text-mustard hover:text-accent z-[110] transition-transform hover:scale-110 p-2">
                <span class="material-symbols-outlined text-3xl md:text-4xl">close</span>
            </button>
            <div class="h-full w-full max-w-5xl flex items-center justify-center relative">
                <img id="modal-img" src="" alt="Tour Poster" class="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-mustard/10 rounded-sm">
            </div>
        </div>`;
        document.body.appendChild(modalDiv);
    }

    updateCartCount();
});

// Modal Logic
window.showModal = (imgSrc) => {
    const modal = document.getElementById('poster-modal');
    const img = document.getElementById('modal-img');
    if (modal && img) {
        img.src = imgSrc;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = () => {
    const modal = document.getElementById('poster-modal');
    if (modal) {
        modal.classList.add('animate-out', 'fade-out', 'duration-300');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex', 'animate-out', 'fade-out');
            document.body.style.overflow = '';
        }, 300);
    }
};

// Bandcamp Redirect Logic
const ALBUM_LINKS = {
    'Nebbia': 'https://dreamsequence3.bandcamp.com/album/nebbia',
    'Sequence': 'https://dreamsequence3.bandcamp.com/album/sequence',
    'Ganymede': 'https://dreamsequence3.bandcamp.com/album/the-euclidean-sea',
    'The Euclidean Sea': 'https://dreamsequence3.bandcamp.com/album/the-euclidean-sea'
};

window.playAlbum = (title) => {
    const url = ALBUM_LINKS[title] || ALBUM_LINKS['Nebbia'];
    window.open(url, '_blank');
};

// Cart Logic
let cart = JSON.parse(localStorage.getItem('ds-cart')) || [];

window.addToCart = (name, price, img) => {
    cart.push({ name, price, img });
    localStorage.setItem('ds-cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} added to the archives`);
};

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('ds-cart', JSON.stringify(cart));
    updateCartCount();
    // Refresh page if on checkout
    if (window.location.pathname.includes('checkout.html')) {
        location.reload();
    }
};

window.updateCartCount = () => {
    const counts = document.querySelectorAll('#cart-count');
    counts.forEach(el => el.innerText = `Cart(${cart.length})`);
};

window.toggleCart = () => {
    window.location.href = 'checkout.html';
};

window.showToast = (msg) => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 right-6 bg-mustard text-background-dark px-6 py-3 rounded-sm shadow-2xl z-[100] font-bold uppercase text-xs tracking-widest border border-background-dark animate-in slide-in-from-right fade-in duration-300';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('animate-out', 'slide-out-to-right', 'fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

window.toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu && icon) {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            icon.innerText = 'close';
            document.body.style.overflow = 'hidden';
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            icon.innerText = 'menu';
            document.body.style.overflow = '';
        }
    }
};

// Protect Images from right-click
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);
