const menuData = {
    artesanais: [
        {
            id: 1,
            name: "Artesanal",
            description: "Pão com gergelim, blende 120gr, queijo cheddar ou mussarela, catupiry ou mussarela empanada,molho da casa, cebola roxa e picles",
            price: 32.00,
            image: "",
            customizable: true
        }
    ],
    lanches: [
        {
            id: 2,
            name: "Hamburguer",
            description: "pão, milho, maionese, alface, tomate, batata, bife",
            price: 11.00,
            image: "",
            customizable: true
        },
        {
            id: 3,
            name: "Misto simples",
            description: "pão, milho, presunto, mussarela",
            price: 17.00,
            image: "",
            customizable: true
        },
        {
            id: 4,
            name: "X-Burguer",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife",
            price: 18.00,
            image: "",
            customizable: true
        },
        {
            id: 5,
            name: "X-Presunto",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife",
            price: 20.00,
            image: "",
            customizable: true
        },
        {
            id: 6,
            name: "Queijo-quente",
            description: "pão, maionese, mussarela",
            price: 15.00,
            image: "",
            customizable: true
        },
        {
            id: 7,
            name: "X-egg bacon",
            description: "pão, milho, maionese, alface, tomate, batata, ovo, mussarela, bacon, bife",
            price: 24.00,
            image: "",
            customizable: true
        },
        {
            id: 8,
            name: "X-Bacon",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, bacon",
            price: 24.00,
            image: "/image/x-bacon.jpg",
            customizable: true
        },
        {
            id: 9,
            name: "X-Calabresa",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, calabresa",
            price: 24.00,
            image: "",
            customizable: true
        },
        {
            id: 10,
            name: "X-Tudo",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, 2 ovos, bacon",
            price: 25.00,
            image: "",
            customizable: true
        },
        {
            id: 11,
            name: "X-Boca",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, 1 bife, 2 ovo",
            price: 28.00,
            image: "",
            customizable: true
        },
        {
            id: 12,
            name: "X-Bocão",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, 2 bife de boi, 1 filé de frango, bacon, 2 ovos.",
            price: 35.00,
            image: "/image/x-bocao.jpg",
            customizable: true
        },
        {
            id: 13,
            name: "X-Bacon Frango",
            description: "pão, milho, maionese, alface ,tomate ,batata ,bacon ,presunto ,mussarela ,filé de frango",
            price: 28.00,
            image: "",
            customizable: true
        },
        {
            id: 14,
            name: "X-Calabresa Frango",
            description: "pão, milho, maionese, alface, tomate, batata, calabresa, presunto, mussarela, filé de frango",
            price: 28.00,
            image: "/image/x-calabresacfrango.jpg",
            customizable: true
        },
        {
            id: 15,
            name: "X-Frango com filé de frango",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, filé de frango",
            price: 25.00,
            image: "",
            customizable: true
        },
        {
            id: 16,
            name: "X-Tudo c/file de frango",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, 2 ovos, filé de frango",
            price: 28.00,
            image: "../image/x-tudo_com_file.jpg",
            customizable: true
        },
        {
            id: 17,
            name: "X-Presunto c/frango desfiado",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, frango desfiado",
            price: 26.00,
            image: "",
            customizable: true
        },
        {
            id: 18,
            name: "X-Tudo c/frango desfiado",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, 2 ovos, bacon, frango desfiado",
            price: 30.00,
            image: "",
            customizable: true
        },
        {
            id: 19,
            name: "X-Bacon c/frango desfiado",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, bacon, frango desfiado",
            price: 28.00,
            image: "",
            customizable: true
        },
        {
            id: 20,
            name: "X-Frango c/frango desfiado",
            description: "pão, milho, maionese, alface, tomate, batata, presunto, mussarela, bife, frango desfiado",
            price: 24.00,
            image: "",
            customizable: true
        }
    ],
    sobremesas: [
        {
            id: 21,
            name: "Brownie",
            description: "Brownie de chocolate",
            price: 9.00,
            image: "/image/Brownie.jpg"
        },
        {
            id: 21,
            name: "Bolo de Pote",
            description: "Bolo de Pote",
            price: 14.00,
            image: "/image/bolo-de-pote.jpg"
        }
    ],
    porcoes: [
        {
            id: 22,
            name: "Fritas c/bacon,calabresa e aneis de cebola",
            description: "fritas, aneis de cebola, bacon, calabresa, cheddar",
            price: 45.00,
            image: "../image/fritas_aneis_de_cebola.jpg",
            customizable: true
        },
        {
            id: 22,
            name: "Fritas c/bacon,calabresa",
            description: "fritas, bacon, calabresa, cheddar",
            price: 40.00,
            image: "",
            customizable: true
        },
        {
            id: 23,
            name: "Porçao de peixes",
            description: "porção de tilapia",
            price: 48.00,
            image: "",
            customizable: true
        },
        {
            id: 23,
            name: "Fritas com peixe",
            description: "fritas, tilapia",
            price: 45.00,
            image: "../image/fritas_com_peixe.jpg",
            customizable: true
        }
    ],
    bebidas: [
        {
            id: 24,
            name: "Refrigerante Lata",
            description: "Coca-Cola, Guaraná, Fanta  - 350ml",
            price: 6.00,
            image: "../image/refri-lats.jpg"
        },
        {
            id: 25,
            name: "Refrigerante 1 litro",
            description: "Coca-Cola, Guaraná, Fanta",
            price: 10.00,
            image: "../image/refri-1.jpg"
        },
        {
            id: 26,
            name: "Refrigerante 2 litros",
            description: "Coca-Cola, Guaraná, Fanta Laranja",
            price: 14.00,
            image: "../image/refri-2.jpg"
        }
    ]
};

// Customization options
const customizationOptions = {
    meatPoint: [
        { id: 'mal-passado', name: 'Mal Passado', price: 0 },
        { id: 'ao-ponto', name: 'Ao Ponto', price: 0 },
        { id: 'bem-passado', name: 'Bem Passado', price: 0 }
    ],
    extras: [
        { id: 'bacon', name: 'Bacon Extra', price: 6.00 },
        { id: 'queijo', name: 'Queijo Extra', price: 6.00 },
        { id: 'ovo', name: 'Ovo', price: 2.00 },
        { id: 'bife-artesanal', name: 'Bife Extra', price: 3.00 },
        { id: 'catupiry', name: 'Catupiry', price: 5.00 },
        { id: 'cebola', name: 'Cebola Extra', price: 2.00 },
        { id: 'frango', name: 'Frango Desfiado', price: 6.00 },
        { id: 'calabresa', name: 'Calabresa Extra', price: 6.00 },
        { id: 'bife-120', name: 'Bife Artesanal 120 gramas', price: 9.00 },
        { id: 'bife-200', name: 'Bife Artesanal 200 gramas', price: 14.00 },
        { id: 'presunto', name: 'Presunto Extra', price: 5.00 }

    ]
};

// Cart functionality
let cart = [];
let currentCategory = 'all';

// DOM elements
const menuItemsContainer = document.getElementById('menu-items');
const categoryButtons = document.querySelectorAll('[data-category]');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const whatsappBtn = document.getElementById('whatsapp-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    setupEventListeners();
    updateCartDisplay();
});

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            currentCategory = this.dataset.category;
            renderMenuItems();
        });
    });

    // WhatsApp button
    whatsappBtn.addEventListener('click', sendToWhatsApp);

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render menu items
function renderMenuItems() {
    let itemsToShow = [];
    
    if (currentCategory === 'all') {
        itemsToShow = Object.values(menuData).flat();
    } else {
        itemsToShow = menuData[currentCategory] || [];
    }

    menuItemsContainer.innerHTML = itemsToShow.map(item => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="menu-card fade-in-up">
                <img src="${item.image}" alt="${item.name}" class="menu-card-img">
                <div class="menu-card-body">
                    <h5 class="menu-card-title">${item.name}</h5>
                    <p class="menu-card-description">${item.description}</p>
                    <div class="menu-card-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    <button class="btn add-to-cart-btn" onclick="${item.customizable ? `openCustomizationModal(${item.id})` : `addToCart(${item.id})`}">
                        <i class="fas fa-plus me-2"></i>Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open customization modal
function openCustomizationModal(itemId) {
    const item = findItemById(itemId);
    if (!item) return;

    document.getElementById('customization-item-name').textContent = item.name;
    document.getElementById('customization-item-price').textContent = item.price.toFixed(2).replace('.', ',');
    document.getElementById('customization-item-id').value = itemId;
    
    // Show/hide meat point section based on item type
    const meatPointSection = document.getElementById('meat-point-section');
    const isLanche = Object.values(menuData.lanches).concat(Object.values(menuData.artesanais)).some(lanche => lanche.id === itemId);
    
    if (isLanche) {
        meatPointSection.style.display = 'block';
    } else {
        meatPointSection.style.display = 'none';
    }
    
    // Reset form
    document.getElementById('customization-form').reset();
    updateCustomizationTotal();
    
    const modal = new bootstrap.Modal(document.getElementById('customizationModal'));
    modal.show();
}

// Update customization total
function updateCustomizationTotal() {
    const itemId = document.getElementById('customization-item-id').value;
    const item = findItemById(parseInt(itemId));
    let total = item.price;
    
    // Add extras cost
    const selectedExtras = document.querySelectorAll('input[name="extras"]:checked');
    selectedExtras.forEach(extra => {
        const extraOption = customizationOptions.extras.find(e => e.id === extra.value);
        if (extraOption) total += extraOption.price;
    });
    
    document.getElementById('customization-total').textContent = total.toFixed(2).replace('.', ',');
}

// Add customized item to cart
function addCustomizedToCart() {
    const itemId = parseInt(document.getElementById('customization-item-id').value);
    const item = findItemById(itemId);
    if (!item) return;

    const meatPoint = document.querySelector('input[name="meat-point"]:checked')?.value || 'ao-ponto';
    const selectedExtras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(e => e.value);
    const observations = document.getElementById('observations').value.trim();
    
    let customizedItem = { ...item };
    let extraCost = 0;
    let customizationText = [];
    
    // Add meat point
    const meatPointOption = customizationOptions.meatPoint.find(m => m.id === meatPoint);
    if (meatPointOption) {
        customizationText.push(`Ponto: ${meatPointOption.name}`);
    }
    
    // Add extras
    selectedExtras.forEach(extraId => {
        const extra = customizationOptions.extras.find(e => e.id === extraId);
        if (extra) {
            extraCost += extra.price;
            customizationText.push(`+ ${extra.name}`);
        }
    });
    
    // Add observations
    if (observations) {
        customizationText.push(`Obs: ${observations}`);
    }
    
    // Update item details
    customizedItem.price += extraCost;
    customizedItem.customization = customizationText.join(' | ');
    customizedItem.id = Date.now(); // Unique ID for customized items
    
    // Add to cart
    cart.push({
        ...customizedItem,
        quantity: 1
    });
    
    updateCartDisplay();
    showAddToCartAnimation();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('customizationModal'));
    modal.hide();
}

// Add item to cart
function addToCart(itemId) {
    const item = findItemById(itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    updateCartDisplay();
    showAddToCartAnimation();
}

// Find item by ID
function findItemById(id) {
    for (const category of Object.values(menuData)) {
        const item = category.find(item => item.id === id);
        if (item) return item;
    }
    return null;
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-muted">Seu carrinho está vazio</p>';
        whatsappBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-7">
                        <h6 class="mb-1">${item.name}</h6>
                        ${item.customization ? `<small class="text-info d-block">${item.customization}</small>` : ''}
                        <small class="text-muted">R$ ${item.price.toFixed(2).replace('.', ',')}</small>
                    </div>
                    <div class="col-5">
                        <div class="cart-item-controls justify-content-end">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="remove-item-btn ms-2" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        whatsappBtn.disabled = false;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartDisplay();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

// Send order to WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) return;

    let message = "🍔 *Novo Pedido - Bocas´s Burguer*\n\n";
    
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
        message += `• ${item.name}\n`;
        if (item.customization) {
            message += `  ${item.customization}\n`;
        }
        message += `  Qtd: ${item.quantity} | Valor: R$ ${itemTotal}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💰 *Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += "📍 Endereço de entrega: _Por favor, informe seu endereço , e a forma de pagamento ..\n \n";
    message += "Valor da taxa de entrega R$ 2,00";

    const phoneNumber = "5532998080747"; // Substitua pelo número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Show add to cart animation
function showAddToCartAnimation() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.classList.add('success-animation');
    
    setTimeout(() => {
        cartBtn.classList.remove('success-animation');
    }, 600);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-card, .hero-title, .hero-subtitle');
    animatedElements.forEach(el => observer.observe(el));
});