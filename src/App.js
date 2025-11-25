import React, { useState } from 'react';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    price: 125,
    image: '/image-product-1-thumbnail.jpg'
  };

  const images = [
    { id: 1, src: '/image-product-1.jpg', thumbnail: '/image-product-1-thumbnail.jpg', alt: 'Main view of sneaker' },
    { id: 2, src: '/image-product-2.jpg', thumbnail: '/image-product-2-thumbnail.jpg', alt: 'Sneaker thumbnail 1' },
    { id: 3, src: '/image-product-3.jpg', thumbnail: '/image-product-3-thumbnail.jpg', alt: 'Sneaker thumbnail 2' },
    { id: 4, src: '/image-product-4.jpg', thumbnail: '/image-product-4-thumbnail.jpg', alt: 'Sneaker thumbnail 3' },
  ];
  const [activeImageId, setActiveImageId] = useState(images[0].id);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Top Navigation Bar --- */}
      <header className="flex items-center justify-between px-8 py-4 border-b relative max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 md:space-x-12">
          <h1 className="text-3xl font-bold">sneakers</h1>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-500 hover:text-black"
            aria-label="Open menu"
          >
            <img src="/icon-menu.svg" alt="Menu" className="w-6 h-6" />
          </button>
          <nav className="hidden md:flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-black">Collections</a>
            <a href="#" className="hover:text-black">Men</a>
            <a href="#" className="hover:text-black">Women</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6 relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Shopping Cart"
            className="text-gray-500 hover:text-black relative"
          >
            {/* Replace with an actual SVG/icon for cart */}
            🛒
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>
          <img src="/image-avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500" />
        </div>
      </header>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-8 top-16 w-80 bg-white rounded-lg shadow-xl border z-40">
          <div className="p-4 border-b">
            <h3 className="font-bold">Cart</h3>
          </div>
          <div className="p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 mb-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                    <div className="flex-1">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price} x {item.quantity} <span className="font-bold text-black">${item.price * item.quantity}</span></p>
                    </div>
                    <button
                      onClick={() => setCart(prev => prev.filter(cartItem => cartItem.id !== item.id))}
                      className="text-gray-400 hover:text-black"
                    >
                      <img src="/icon-delete.svg" alt="Delete" className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
            <div className="flex items-center justify-between p-8 border-b">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-black"
                aria-label="Close menu"
              >
                <img src="/icon-close.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 p-8 text-gray-500">
              <a href="#" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Collections</a>
              <a href="#" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Men</a>
              <a href="#" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Women</a>
              <a href="#" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      )}

      {/* --- Main Product Content --- */}
      <main className="max-w-6xl mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* === Left: Image Gallery === */}
        <div className="space-y-6">
          {/* Main Product Image (Placeholder for Image with Orange Background) */}
          {/* Note: The specific background gradient/color on the image requires styling the image container or using a background image/SVG */}
          <div className="relative rounded-xl overflow-hidden shadow-xl" style={{ backgroundColor: '#f9a825', height: '450px' }}>
            {/* The image in the design has a complex background. For a simple implementation, we'll use a placeholder or assume the image asset includes this background. */}
            <img
              src={images.find(img => img.id === activeImageId)?.src}
              alt={images.find(img => img.id === activeImageId)?.alt}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="flex justify-between space-x-6">
            {images.map((img) => (
              <div 
                key={img.id}
                className={`relative w-1/4 cursor-pointer rounded-xl overflow-hidden transition-all duration-200 
                  ${activeImageId === img.id ? 'border-2 border-orange-500' : ''}`}
                onClick={() => setActiveImageId(img.id)}
              >
                <img
                  src={img.thumbnail}
                  alt={img.alt}
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-200
                    ${activeImageId === img.id ? 'opacity-30' : 'hover:opacity-60'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* === Right: Product Details === */}
        <div className="space-y-6 lg:pl-12">
          <p className="text-sm font-bold tracking-widest uppercase text-orange-500">
            SNEAKER COMPANY
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Fall Limited Edition Sneakers
          </h2>

          <p className="text-gray-500 pt-2">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>

          <div className="flex flex-col space-y-2 pt-4">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">
                $125.00
              </span>
              <span className="text-sm font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-md">
                50%
              </span>
            </div>
            <span className="text-gray-400 line-through">
              $250.00
            </span>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            
            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3 sm:w-1/3">
              <button 
                onClick={handleDecrement} 
                className="text-orange-500 font-bold text-2xl hover:opacity-75"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="font-bold">{quantity}</span>
              <button 
                onClick={handleIncrement} 
                className="text-orange-500 font-bold text-2xl hover:opacity-75"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex items-center justify-center space-x-3 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-xl shadow-orange-200 transition-all duration-200 hover:bg-orange-600 sm:w-2/3"
              onClick={() => {
                if (quantity > 0) {
                  setCart(prev => {
                    const existing = prev.find(item => item.id === product.id);
                    if (existing) {
                      return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
                    } else {
                      return [...prev, {...product, quantity}];
                    }
                  });
                  setQuantity(0);
                }
              }}
            >
              {/* Replace with an actual SVG/icon for cart */}
              🛒 
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;