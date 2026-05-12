import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronRight,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Apex Runner G1",
    category: "Performance",
    price: 189,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    color: "Crimson Red"
  },
  {
    id: 2,
    name: "Urban Nomad L3",
    category: "Lifestyle",
    price: 145,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    color: "Bone White"
  },
  {
    id: 3,
    name: "Zenith Knit v4",
    category: "Casual",
    price: 120,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    color: "Electric Green"
  },
  {
    id: 4,
    name: "Monolith Boots",
    category: "Outdoor",
    price: 210,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    color: "Matte Black"
  }
];

const Badge = ({ children }) => (
  <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full absolute -top-1 -right-1">
    {children}
  </span>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 text-center md:text-left">
    <h3 className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{title}</h2>
  </div>
);

const Navbar = ({ cartCount, toggleCart, toggleMenu, isMenuOpen }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter text-zinc-900">VELOCITY.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {['New Arrivals', 'Men', 'Women', 'Collections', 'Editorial'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="text-zinc-600 hover:text-zinc-900">
              <Search size={20} />
            </button>
            <button onClick={toggleCart} className="text-zinc-600 hover:text-zinc-900 relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && <Badge>{cartCount}</Badge>}
            </button>
            <button 
              className="md:hidden text-zinc-600 hover:text-zinc-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 border-b border-zinc-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['New Arrivals', 'Men', 'Women', 'Collections'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block px-3 py-4 text-base font-medium text-zinc-900 border-b border-zinc-100 last:border-0"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-100 -z-10 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full">
            Summer Collection 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-tight">
            ENGINEERED <br /> 
            <span className="text-indigo-600 italic uppercase">TO MOVE.</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-md">
            Experience the pinnacle of footwear technology. Minimalist design meets uncompromising performance for the modern athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-zinc-900 text-slate-50 px-8 py-4 font-bold flex items-center justify-center space-x-2 hover:bg-zinc-800 transition-all transform hover:-translate-y-1">
              <span>SHOP COLLECTION</span>
              <ArrowRight size={18} />
            </button>
            <button className="border-2 border-zinc-900 text-zinc-900 px-8 py-4 font-bold hover:bg-zinc-900 hover:text-slate-50 transition-all">
              VIEW EDITORIAL
            </button>
          </div>
        </div>

        {/* Hero Image / Glassmorphism Overlay */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200" 
               alt="Hero Product" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/30 border border-white/40 p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">New Drop</p>
                      <h4 className="text-xl font-bold text-white">Apex Runner Red</h4>
                   </div>
                   <p className="text-2xl font-black text-white">$189</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative flex flex-col h-full">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <button 
             onClick={() => onAddToCart(product)}
             className="bg-white text-zinc-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95"
           >
             <Plus size={24} />
           </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
              <a href="#">{product.name}</a>
            </h3>
          </div>
          <p className="text-lg font-black text-zinc-900">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

const TrustSection = () => {
  const items = [
    { icon: <Truck size={32} />, title: "Free Shipping", desc: "On all orders over $150" },
    { icon: <ShieldCheck size={32} />, title: "Secure Payment", desc: "100% encrypted checkout" },
    { icon: <RefreshCw size={32} />, title: "Free Returns", desc: "30-day hassle free policy" },
  ];

  return (
    <section className="bg-white py-16 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="text-indigo-600 bg-indigo-50 p-4 rounded-2xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-zinc-900 text-lg">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-zinc-900 py-24 px-4 overflow-hidden relative">
      {/* Visual background noise/shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-50 mb-6">BE PART OF THE FUTURE.</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Subscribe to get early access to drops, exclusive events, and the Velocity journal.
        </p>

        {subscribed ? (
          <div className="bg-indigo-600 text-white p-6 rounded-2xl animate-in zoom-in-95 duration-300">
            <p className="text-xl font-bold flex items-center justify-center gap-2">
               <ShieldCheck /> YOU'RE ON THE LIST!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              required
              placeholder="Email address"
              className="flex-grow bg-zinc-800 border-zinc-700 text-slate-50 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              SUBSCRIBE <ChevronRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const CartOverlay = ({ isOpen, items, onClose, onUpdateQty, onRemove }) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="text-2xl font-black text-zinc-900">YOUR CART</h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="mx-auto text-zinc-200 mb-4" size={64} />
              <p className="text-zinc-500 font-medium">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-24 bg-zinc-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-zinc-900">{item.name}</h4>
                    <p className="font-black">${item.price}</p>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-zinc-200 rounded-lg">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="p-1 px-2 hover:bg-zinc-50 text-zinc-500"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 font-bold text-sm text-zinc-900">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQty(item.id, 1)}
                         className="p-1 px-2 hover:bg-zinc-50 text-zinc-500"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-zinc-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-zinc-100 bg-zinc-50">
          <div className="flex justify-between mb-4">
            <span className="text-zinc-500">Subtotal</span>
            <span className="text-xl font-black text-zinc-900">${total}</span>
          </div>
          <p className="text-xs text-zinc-400 mb-6">Shipping and taxes calculated at checkout.</p>
          <button 
            disabled={items.length === 0}
            className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl disabled:bg-zinc-300 disabled:cursor-not-allowed hover:bg-zinc-800 transition-all shadow-lg"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cart Handlers
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <Navbar 
        cartCount={cartCount} 
        toggleCart={() => setIsCartOpen(true)} 
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Trust Signals */}
      <TrustSection />

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading title="TRENDING DROPS" subtitle="The Performance Collection" />
          <div className="hidden md:flex space-x-2">
            {['All', 'Performance', 'Lifestyle', 'Casual'].map(cat => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                  cat === 'All' ? 'bg-zinc-900 border-zinc-900 text-white' : 'border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-zinc-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <span className="text-3xl font-black tracking-tighter text-zinc-900">VELOCITY.</span>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Elevating human potential through meticulous design and groundbreaking innovation. We build for those who never stand still.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-zinc-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="p-2 bg-zinc-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="p-2 bg-zinc-100 rounded-full hover:bg-indigo-600 hover:text-white transition-all"><Facebook size={18} /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 col-span-1 md:col-span-3 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-zinc-900 mb-6">SHOP</h4>
                <ul className="space-y-4 text-zinc-500 text-sm">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">All Products</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Performance</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Lifestyle</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Accessories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-6">SUPPORT</h4>
                <ul className="space-y-4 text-zinc-500 text-sm">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Order Status</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-zinc-900 mb-6">STORES</h4>
                <ul className="space-y-4 text-zinc-500 text-sm">
                  <li><p>Velocity NY, 5th Ave</p></li>
                  <li><p>Velocity LDN, Regent St</p></li>
                  <li><p>Velocity TYO, Shibuya</p></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200">
            <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-0">
              © 2024 VELOCITY FOOTWEAR CO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              <a href="#" className="hover:text-zinc-900">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartOverlay 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQty={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
