const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll("[data-category]");
const storeSearch = document.querySelector("[data-store-search]");
const stores = document.querySelectorAll("[data-area]");
const emptyStore = document.querySelector("[data-empty-store]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const orderForm = document.querySelector("[data-order-form]");
const drinkSelect = document.querySelector("[data-drink-select]");
const quantityInput = orderForm?.querySelector('input[name="quantity"]');
const orderTitle = document.querySelector("[data-order-title]");
const pricePreview = document.querySelector("[data-price-preview]");
const cartList = document.querySelector("[data-cart-list]");
const cartTotal = document.querySelector("[data-cart-total]");
const whatsappOrder = document.querySelector("[data-whatsapp-order]");
const clearCart = document.querySelector("[data-clear-cart]");
const counters = document.querySelectorAll("[data-count-to]");
const countdown = document.querySelector("[data-countdown]");
const testimonialText = document.querySelector("[data-testimonial-text]");
const testimonialName = document.querySelector("[data-testimonial-name]");
const testimonialMeta = document.querySelector("[data-testimonial-meta]");
const testimonialPrev = document.querySelector("[data-testimonial-prev]");
const testimonialNext = document.querySelector("[data-testimonial-next]");

const drinkPrices = {
  "Pearl Milk Tea": 24000,
  "Brown Sugar Milk Tea": 29000,
  "Mango Green Tea": 26000,
  "Lemon Black Tea": 23000,
  "Coffee Milk Tea": 28000,
  "Matcha Smoothie": 31000,
  "Hazelnut Chocolate": 29000,
  "Thai Tea Crunch": 30000,
  "Milky Taro": 27000
};

const toppingPrices = {
  Pearl: 4000,
  Pudding: 5000,
  "Grass Jelly": 5000,
  "Coffee Jelly": 5000
};

const sizePrices = {
  Regular: 0,
  Large: 5000
};

const cart = [];

const testimonials = [
  {
    text: "Pearl Milk Tea selalu jadi comfort drink. Manisnya bisa diatur, pearl-nya pas.",
    name: "Alya",
    meta: "Mahasiswa, Jakarta"
  },
  {
    text: "Kalau lagi butuh yang segar, Mango Green Tea gampang banget jadi pilihan aman.",
    name: "Rafi",
    meta: "Creative worker, Bandung"
  },
  {
    text: "Order builder-nya membantu. Tinggal pilih gula, es, topping, lalu kirim ringkasan.",
    name: "Nadine",
    meta: "Pelanggan rutin, Surabaya"
  }
];

let activeTestimonial = 0;

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });

const calculateItem = (formData) => {
  const drink = formData.get("drink");
  const size = formData.get("size") || "Regular";
  const quantity = Number(formData.get("quantity") || 1);
  const toppings = formData.getAll("topping");
  const toppingTotal = toppings.reduce((total, topping) => total + (toppingPrices[topping] || 0), 0);
  const unitPrice = (drinkPrices[drink] || 0) + (sizePrices[size] || 0) + toppingTotal;

  return {
    drink,
    size,
    quantity,
    sugar: formData.get("sugar") || "Normal Sugar",
    ice: formData.get("ice") || "Normal Ice",
    note: formData.get("note") || "-",
    toppings,
    toppingText: toppings.length ? toppings.join(", ") : "Tanpa topping tambahan",
    unitPrice,
    subtotal: unitPrice * quantity
  };
};

const updateItemPreview = () => {
  if (!orderForm || !pricePreview) return;

  const formData = new FormData(orderForm);
  const item = calculateItem(formData);
  pricePreview.textContent = `Estimasi total item: ${formatRupiah(item.subtotal)}`;
};

const updateCart = () => {
  if (!orderTitle || !cartTotal || !cartList || !whatsappOrder || !clearCart) return;

  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  orderTitle.textContent = cart.length ? `${cart.length} item di keranjang` : "Belum ada pesanan";
  cartTotal.textContent = formatRupiah(total);

  if (!cart.length) {
    cartList.innerHTML = "<p>Pilih menu dan tambah ke keranjang.</p>";
    whatsappOrder.href = "#";
    whatsappOrder.classList.add("disabled");
    whatsappOrder.setAttribute("aria-disabled", "true");
    clearCart.disabled = true;
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item, index) => `
        <article class="cart-item">
          <div class="cart-item-head">
            <strong>${item.quantity}x ${escapeHTML(item.drink)}</strong>
            <button class="remove-item" type="button" data-remove-item="${index}">Hapus</button>
          </div>
          <small>
            ${escapeHTML(item.size)} | ${escapeHTML(item.sugar)} | ${escapeHTML(item.ice)}<br>
            Topping: ${escapeHTML(item.toppingText)}<br>
            Catatan: ${escapeHTML(item.note)}<br>
            ${formatRupiah(item.unitPrice)} / item - Subtotal ${formatRupiah(item.subtotal)}
          </small>
        </article>
      `
    )
    .join("");

  const message = [
    "Halo Chatime, saya mau pesan:",
    ...cart.map(
      (item, index) =>
        `${index + 1}. ${item.quantity}x ${item.drink} (${item.size})\n` +
        `   Gula: ${item.sugar}\n` +
        `   Es: ${item.ice}\n` +
        `   Topping: ${item.toppingText}\n` +
        `   Catatan: ${item.note}\n` +
        `   Subtotal: ${formatRupiah(item.subtotal)}`
    ),
    `Total estimasi: ${formatRupiah(total)}`
  ].join("\n\n");

  whatsappOrder.href = `https://wa.me/6282324726190?text=${encodeURIComponent(message)}`;
  whatsappOrder.classList.remove("disabled");
  whatsappOrder.removeAttribute("aria-disabled");
  clearCart.disabled = false;
};

const animateCounter = (counter) => {
  const target = Number(counter.dataset.countTo || 0);
  const duration = target > 1000 ? 1200 : 900;
  const start = performance.now();

  const tick = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    counter.textContent = String(Math.round(target * progress));

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const setupCounters = () => {
  if (!counters.length) return;

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

const updateCountdown = () => {
  if (!countdown) return;

  const now = new Date();
  const target = new Date(now);
  target.setDate(now.getDate() + ((7 - now.getDay() + 7) % 7 || 7));
  target.setHours(21, 59, 59, 999);

  const distance = Math.max(target - now, 0);
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  const pad = (value) => String(value).padStart(2, "0");
  const daysElement = countdown.querySelector("[data-days]");
  const hoursElement = countdown.querySelector("[data-hours]");
  const minutesElement = countdown.querySelector("[data-minutes]");
  const secondsElement = countdown.querySelector("[data-seconds]");

  if (daysElement) daysElement.textContent = pad(days);
  if (hoursElement) hoursElement.textContent = pad(hours);
  if (minutesElement) minutesElement.textContent = pad(minutes);
  if (secondsElement) secondsElement.textContent = pad(seconds);
};

const renderTestimonial = () => {
  if (!testimonialText || !testimonialName || !testimonialMeta) return;

  const testimonial = testimonials[activeTestimonial];
  testimonialText.textContent = testimonial.text;
  testimonialName.textContent = testimonial.name;
  testimonialMeta.textContent = testimonial.meta;
};

const moveTestimonial = (direction) => {
  activeTestimonial = (activeTestimonial + direction + testimonials.length) % testimonials.length;
  renderTestimonial();
};

const setHeaderState = () => {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 16);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  if (!nav) return;

  const isOpen = nav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    nav.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    products.forEach((product) => {
      const shouldShow = filter === "all" || product.dataset.category === filter;
      product.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const selectProduct = (product) => {
  const productName = product.dataset.productName;

  if (!productName) return;

  if (drinkSelect) drinkSelect.value = productName;
  updateItemPreview();
  document.querySelector("#pesan")?.scrollIntoView({ behavior: "smooth" });
};

products.forEach((product) => {
  product.addEventListener("click", () => {
    selectProduct(product);
  });

  product.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    selectProduct(product);
  });
});

storeSearch?.addEventListener("input", () => {
  const query = storeSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  stores.forEach((store) => {
    const searchableText = `${store.dataset.area} ${store.textContent}`.toLowerCase();
    const shouldShow = searchableText.includes(query);
    store.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  if (emptyStore) emptyStore.hidden = visibleCount > 0;
});

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!orderForm.checkValidity()) {
    orderForm.reportValidity();
    return;
  }

  const item = calculateItem(new FormData(orderForm));
  cart.push(item);
  updateCart();
  orderForm.reset();
  if (quantityInput) quantityInput.value = 1;
  updateItemPreview();
});

orderForm?.addEventListener("input", updateItemPreview);
orderForm?.addEventListener("change", updateItemPreview);

cartList?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-item]");

  if (!removeButton) return;

  cart.splice(Number(removeButton.dataset.removeItem), 1);
  updateCart();
});

clearCart?.addEventListener("click", () => {
  cart.length = 0;
  updateCart();
});

updateItemPreview();
updateCart();
setupCounters();
updateCountdown();
setInterval(updateCountdown, 1000);
renderTestimonial();
testimonialPrev?.addEventListener("click", () => moveTestimonial(-1));
testimonialNext?.addEventListener("click", () => moveTestimonial(1));
setInterval(() => moveTestimonial(1), 7000);

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name");

  if (formStatus) {
    formStatus.textContent = `Terima kasih, ${name}. Pesan kamu siap dikirim ke tim Chatime.`;
  }
  contactForm.reset();
});
