const Header = () => `
<header class="fixed top-0 left-0 z-[100] w-full border-b border-transparent transition-all duration-500" id="main-header-nav">
    <!-- Oscilloscope Canvas Background (Hidden on scroll) -->
    <canvas id="header-oscilloscope" class="absolute inset-x-0 bottom-0 h-10 w-full opacity-20 pointer-events-none transition-opacity duration-500"></canvas>
    
    <!-- Background Layer (Controlled by Scroll) -->
    <div id="nav-bg" class="absolute inset-0 bg-background-light/0 dark:bg-[#1a1a1a]/0 backdrop-blur-0 transition-all duration-500 pointer-events-none"></div>

    <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full relative z-[110] transition-all duration-500" id="nav-content">
        <a href="index.html" class="flex items-center gap-3 group">
            <div class="size-10 md:size-12 overflow-hidden rounded-full border border-mustard/30 shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <img src="assets/logo.jpg" alt="DreamSequence Logo" class="w-full h-full object-cover" width="597" height="571">
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
        </nav>

        <div class="flex items-center gap-3 md:gap-4">
            <button class="lg:hidden text-tobacco dark:text-accent p-1 transition-transform active:scale-95" onclick="toggleMobileMenu()">
                <span class="material-symbols-outlined text-4xl" id="menu-icon">menu</span>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu Overlay (Wolf Alice inspired) -->
    <div id="mobile-menu" class="fixed inset-0 z-[80] hidden bg-cosmic-black lg:hidden animate-in fade-in duration-500 overflow-hidden">
        <!-- Noise Texture Layers -->
        <div class="absolute inset-0 pointer-events-none opacity-40 bg-noise mix-blend-overlay"></div>
        <div class="absolute inset-0 pointer-events-none opacity-20 crt-overlay"></div>
        
        <div class="relative h-full flex flex-col px-10 pt-48 pb-16 safe-area-inset overflow-y-auto">
            <nav class="flex flex-col gap-8 md:gap-12">
                <a class="text-5xl md:text-7xl font-bold uppercase tracking-tight text-mustard hover:text-accent transition-all hover:pl-4 focus:pl-4" href="biography.html" onclick="toggleMobileMenu()">Biography</a>
                <a class="text-5xl md:text-7xl font-bold uppercase tracking-tight text-mustard hover:text-accent transition-all hover:pl-4 focus:pl-4" href="collection.html" onclick="toggleMobileMenu()">Discography</a>
                <a class="text-5xl md:text-7xl font-bold uppercase tracking-tight text-mustard hover:text-accent transition-all hover:pl-4 focus:pl-4" href="gallery.html" onclick="toggleMobileMenu()">Gallery</a>
                <a class="text-5xl md:text-7xl font-bold uppercase tracking-tight text-mustard hover:text-accent transition-all hover:pl-4 focus:pl-4" href="tours.html" onclick="toggleMobileMenu()">Tours</a>
            </nav>
            
            <div class="mt-auto pt-20 flex flex-col gap-8">
                <div class="h-px w-24 bg-burnt-orange/30"></div>
                <div class="flex gap-10">
                    <a href="https://www.instagram.com/dreamsequence.italia/" target="_blank" class="text-mustard/60 hover:text-mustard transition-colors transform hover:scale-110">
                        <svg class="size-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </a>
                    <a href="https://dreamsequence3.bandcamp.com" target="_blank" class="text-mustard/60 hover:text-mustard transition-colors transform hover:scale-110">
                        <svg class="size-8" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></path></svg>
                    </a>
                </div>
                <p class="text-[10px] uppercase font-mono tracking-[0.4em] text-mustard/40">Trieste Archive Terminal DS-72</p>
            </div>
        </div>
    </div>
</header>
`;

// Scroll Effect logic
const initScrollListener = () => {
    window.addEventListener('scroll', () => {
        const navBg = document.getElementById('nav-bg');
        const navContent = document.getElementById('nav-content');
        const navOsc = document.getElementById('header-oscilloscope');
        const nav = document.getElementById('main-header-nav');

        if (window.scrollY > 50) {
            navBg?.classList.remove('bg-background-light/0', 'dark:bg-[#1a1a1a]/0', 'backdrop-blur-0');
            navBg?.classList.add('bg-background-light/95', 'dark:bg-[#1a1a1a]/95', 'backdrop-blur-md');
            navContent?.classList.remove('py-4');
            navContent?.classList.add('py-2');
            navOsc?.classList.add('opacity-0');
            nav?.classList.add('border-mustard/20');
        } else {
            navBg?.classList.add('bg-background-light/0', 'dark:bg-[#1a1a1a]/0', 'backdrop-blur-0');
            navBg?.classList.remove('bg-background-light/95', 'dark:bg-[#1a1a1a]/95', 'backdrop-blur-md');
            navContent?.classList.add('py-4');
            navContent?.classList.remove('py-2');
            navOsc?.classList.remove('opacity-0');
            nav?.classList.remove('border-mustard/20');
        }
    });
};;

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

    let spike = 0;
    window.addEventListener('mousedown', () => {
        spike = 40;
    });

    // Track mouse for frequency modulation
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
    });

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    observer.observe(canvas);

    const draw = () => {
        if (!isVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            requestAnimationFrame(draw);
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

            const amp1 = 10 + (scrollIntensity * 20) + spike;
            const amp2 = 5 + (mouseX * 15) + (spike / 2);

            const y = height / 2 +
                Math.sin(x * freq1 + offset) * amp1 +
                Math.sin(x * freq2 + offset * 1.5) * amp2;
            ctx.lineTo(x, y);
        }

        ctx.stroke();
        offset += 0.05 + (scrollIntensity * 0.1);
        if (spike > 0) spike *= 0.9;
        requestAnimationFrame(draw);
    };

    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
    });

    draw();
};


const Footer = () => `
<footer class="mt-auto border-t border-mustard/10 bg-background-dark py-8 px-6 mb-24 md:mb-0 reveal relative">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col md:flex-row items-center gap-6">
            <a href="index.html" class="flex items-center gap-4 group">
                <div class="size-10 overflow-hidden rounded-full border border-mustard/30 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="assets/logo.jpg" alt="DreamSequence Logo" class="w-full h-full object-cover" width="597" height="571" loading="lazy">
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-black tracking-tight text-mustard uppercase leading-none">DreamSequence</span>
                    <span class="text-[8px] text-burnt-orange font-mono mt-1 uppercase tracking-widest opacity-70">Trieste • Since 1972</span>
                </div>
            </a>
            
            <!-- Partner Logos -->
            <div class="flex items-center gap-2 ml-4">
                <img src="./assets/logos/suoni_rari_color.png" alt="Suoni Rari" class="h-8 md:h-12 w-auto transition-all" width="237" height="237" loading="lazy">
                <div class="flex items-center -translate-y-2 mix-blend-screen">
                    <img src="./assets/logos/anima_nera.png" alt="Anima Nera" class="h-24 md:h-32 w-auto opacity-80" width="1024" height="1024" loading="lazy">
                </div>
            </div>
        </div>

        <!-- Rights & Terminal -->
        <div class="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
            <p class="text-[9px] text-tobacco/40 uppercase tracking-[0.3em] font-mono whitespace-nowrap">
                © 2024 DreamSequence Archives • Terminal DS-72
            </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-6">
            <a class="text-mustard/60 hover:text-mustard transition-colors" href="https://www.instagram.com/dreamsequence.italia/" target="_blank">
                <span class="sr-only">Instagram</span>
                <svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a class="text-mustard/60 hover:text-mustard transition-colors" href="https://dreamsequence3.bandcamp.com" target="_blank">
                <span class="sr-only">Bandcamp</span>
                <svg class="size-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"></path></svg>
            </a>
        </div>
    </div>
</footer>
`;

const Player = () => `<!-- Floating Player Removed -->`;

const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('reveal-visible');
                    entry.target.classList.remove('reveal-hidden');
                }, delay);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
};

// Injection Logic
document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('main-header');
    if (headerEl) {
        headerEl.innerHTML = Header();
        initOscilloscope();
        initScrollListener();
    }

    const footerEl = document.getElementById('main-footer');
    if (footerEl) footerEl.innerHTML = Footer();

    initScrollReveal();

    if (!document.getElementById('imageModal')) {
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = `
        <div id="imageModal" class="fixed inset-0 z-[200] hidden items-center justify-center bg-black/98 opacity-0 pointer-events-none transition-all duration-500 backdrop-blur-xl">
            <button onclick="closeModal()" class="absolute top-8 right-8 md:top-12 md:right-12 text-mustard hover:text-white transition-colors z-[210] p-2">
                <span class="material-symbols-outlined text-4xl md:text-5xl font-light">close</span>
            </button>
            <div class="max-w-[95vw] max-h-[90vh] relative p-1 bg-white/5 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500">
                <img id="modalImage" src="" class="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <div class="absolute -bottom-12 left-0 w-full text-center">
                    <span id="modalCaption" class="tech-mono text-[10px] text-cyan-tech uppercase tracking-[0.4em]"></span>
                </div>
            </div>
        </div>`;
        document.body.appendChild(modalDiv);
    }

    updateCartCount();
});

// Modal Logic
window.showModal = (src) => {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    if (modal && img) {
        img.src = src;
        if (caption) {
            const filename = src.split('/').pop().split('.')[0].replace(/-/g, '_');
            caption.textContent = `DATA_REF: ${filename.toUpperCase()}`;
        }
        
        modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
        modal.classList.add('flex', 'opacity-100');
        document.body.style.overflow = 'hidden';
        
        // Visual "glitch" effect on load
        const overlay = document.querySelector('.crt-overlay');
        if (overlay) {
            overlay.style.animationDuration = '0.05s';
            setTimeout(() => overlay.style.animationDuration = '0.15s', 300);
        }
    }
};

window.closeModal = () => {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('flex', 'opacity-100');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 500);
    }
};

// Bandcamp Redirect Logic
const ALBUM_LINKS = {
    'Nebbia': 'https://dreamsequence3.bandcamp.com/album/nebbia',
    'Sequence': 'https://dreamsequence3.bandcamp.com/album/sequence',
    'The Euclidean Sea': 'https://dreamsequence3.bandcamp.com/album/the-euclidean-sea',
    'Bellas Artes': 'https://dreamsequence3.bandcamp.com/album/auditorio-c-rculo-de-bellas-artes-madrid',
    'Massana': 'https://dreamsequence3.bandcamp.com/album/escola-massana-barcelona',
    'Live Paris': 'https://dreamsequence3.bandcamp.com/album/en-concert-au-th-tre-de-la-commune',
    'Triestina': 'https://dreamsequence3.bandcamp.com/album/cosmonautica-triestina',
    'ICA London': 'https://dreamsequence3.bandcamp.com/album/live-at-the-ica',
    'KS Session': 'https://dreamsequence3.bandcamp.com/album/ks-session',
    'Rozzol Pulse': 'https://dreamsequence3.bandcamp.com/album/rozzol-pulse',
    'Kyoto': 'https://dreamsequence3.bandcamp.com/album/kyoto-1980'
};

window.playAlbum = (title) => {
    const url = ALBUM_LINKS[title];
    if (url) {
        // Visual feedback for "tape load"
        const overlay = document.querySelector('.crt-overlay');
        if (overlay) {
            overlay.style.animationDuration = '0.05s';
            setTimeout(() => overlay.style.animationDuration = '0.15s', 500);
        }
        showToast(`TRANSMISSION_START: ${title.toUpperCase()}...`);
        setTimeout(() => window.open(url, '_blank'), 600);
    } else {
        showToast(`'${title}' is not available yet`);
    }
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
    const headerNav = document.getElementById('main-header-nav');

    if (menu && icon && headerNav) {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            icon.innerText = 'close';
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';

            // Add animation to links
            const links = menu.querySelectorAll('nav a');
            links.forEach((link, i) => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, 100 + (i * 100));
            });
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            icon.innerText = 'menu';
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    }
};

// Gallery Rendering Engine
window.loadGallery = async (dataUrl) => {
    try {
        let data;
        // Fallback for local file access (bypass CORS)
        if (window.GALLERY_DATA) {
            data = window.GALLERY_DATA;
        } else {
            const response = await fetch(dataUrl);
            data = await response.json();
        }
        
        renderCarousel('laboratory-carousel', data.laboratory, 'lab');
        renderCarousel('carousel-live', data.live, 'live');
        renderCarousel('carousel-cities', data.city, 'city');
        renderCarousel('carousel-archive', data.archive || [], 'arch');
        
        // Re-init buttons after rendering
        setTimeout(initCarousels, 150);
    } catch (err) {
        console.error('Archive Data Load Error:', err);
    }
};

function renderCarousel(id, items, type) {
    const container = document.getElementById(id);
    if (!container || !items.length) return;
    
    container.innerHTML = items.map(item => {
        if (type === 'city') {
            return `
                <div class="carousel-item w-96 group cursor-pointer" onclick="showModal('${item.src}')">
                    <div class="img-container aspect-video mb-6 overflow-hidden">
                        <img loading="lazy" src="${item.src}" class="w-full h-full object-cover" width="${item.w}" height="${item.h}">
                    </div>
                    <div>
                        <span class="tech-mono text-[9px] text-white/40 uppercase mb-2 block">CAPTURE: ${item.alt.toUpperCase()}</span>
                        <p class="text-[11px] text-white/50 leading-relaxed max-w-xs">${item.desc || item.alt}</p>
                    </div>
                </div>`;
        }
        
        const cardClass = type === 'lab' ? 'w-80' : 'w-64';
        const innerContent = type === 'lab' ? `
            <div class="flex justify-between items-end">
                <div class="tech-mono">
                    <h3 class="text-mustard text-xs font-bold uppercase mb-1">${item.alt}</h3>
                    <p class="text-[9px] text-white/30 uppercase tracking-widest">DS_STUDIO_REF_${item.alt.split(' ').pop()}</p>
                </div>
                <button class="btn-tech">VIEW</button>
            </div>` : `
            <div class="flex justify-between items-center tech-mono text-[9px]">
                <span class="text-mustard">${item.alt.toUpperCase()}</span>
                <span class="material-symbols-outlined text-[10px] text-cyan-tech">sensors</span>
            </div>`;

        return `
            <div class="carousel-item ${cardClass} archive-card p-2" onclick="showModal('${item.src}')">
                <div class="img-container aspect-square mb-3">
                    <img loading="lazy" src="${item.src}" width="${item.w}" height="${item.h}">
                </div>
                ${innerContent}
            </div>`;
    }).join('');
}

// Global UI Logic for Carousel Controls
window.scrollCarousel = (id, distance) => {
    const container = document.getElementById(id);
    if (container) container.scrollBy({ left: distance, behavior: 'smooth' });
};

window.updateButtons = (id) => {
    const container = document.getElementById(id);
    if (!container) return;
    const wrapper = container.closest('.carousel-wrapper');
    if (!wrapper) return;
    const btnLeft = wrapper.querySelector('.btn-left');
    const btnRight = wrapper.querySelector('.btn-right');
    const scrollLeft = Math.ceil(container.scrollLeft);
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    if (btnLeft) scrollLeft > 5 ? btnLeft.classList.add('is-active') : btnLeft.classList.remove('is-active');
    if (btnRight) scrollWidth > (clientWidth + scrollLeft + 5) ? btnRight.classList.add('is-active') : btnRight.classList.remove('is-active');
};

window.initCarousels = () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(container => {
        container.addEventListener('scroll', () => window.updateButtons(container.id), { passive: true });
        window.updateButtons(container.id);
    });
};

window.addEventListener('resize', () => {
    document.querySelectorAll('.carousel-container').forEach(c => window.updateButtons(c.id));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeModal();
});


// Protect Images from right-click
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);
