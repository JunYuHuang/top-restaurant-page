const renderHome = function (rootElement) {
  const content = `
    <section
      data-tab-id="home"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Burger Shop</h1>
      <p class="mb-4">The number one top ranked burger place in Canada.</p>
      <div class="mb-4">
        <h2 class="text-2xl mb-2">Hours</h2>
        <p class="">Sunday: 8am - 8pm</p>
        <p class="">Monday: 6am - 6pm</p>
        <p class="">Tuesday: 6am - 6pm</p>
        <p class="">Wednesday: 6am - 6pm</p>
        <p class="">Thursday: 6am - 10pm</p>
        <p class="">Friday: 6am - 10pm</p>
        <p class="">Saturday: 8am - 10pm</p>
      </div>
      <div class="">
        <h2 class="text-2xl mb-2">Location</h2>
        <p class="">1 Burger Place 123 ABC, Vancouver BC</p>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};

const renderMenu = function (rootElement) {
  const content = `
    <section
      data-tab-id="menu"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Menu</h1>
      <div class="flex flex-col gap-y-10">
        <article class="">
          <img src="./assets/beef-burger.jpg" alt="beef burger" class="" />
          <div class="">
            <h2 class="text-2xl mb-2">Beef Burger</h2>
            <p class="">
              The classic beef hamburger sourced from the finest grass-fed
              Canadian cows.
            </p>
            <p class="">$20</p>
          </div>
        </article>
        <article class="">
          <img
            src="./assets/chicken-burger.jpg"
            alt="chicken burger"
            class=""
          />
          <div class="">
            <h2 class="text-2xl mb-2">Chicken Burger</h2>
            <p class="">
              The classic chicken hamburger sourced from the finest free-range
              Canadian chickens.
            </p>
            <p class="">$15</p>
          </div>
        </article>
        <article class="">
          <img
            src="./assets/pulled-pork-burger.jpg"
            alt="pulled pork burger"
            class=""
          />
          <div class="">
            <h2 class="text-2xl mb-2">Pulled Pork Burger</h2>
            <p class="">
              The contemporary pulled pork hamburger sourced from the finest
              local, non-GMO Canadian pigs.
            </p>
            <p class="">$15</p>
          </div>
        </article>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};

const renderContact = function (rootElement) {
  const content = `
    <section
      data-tab-id="contact"
      class="tab max-w-screen-sm mx-auto mb-8"
    >
      <h1 class="text-3xl mb-2">Come Say Hello!</h1>
      <div class="">
        <p class="">Burger Shop Support</p>
        <p class="">012-234-5678</p>
        <p class="">support@burgershop.ca</p>
      </div>
    </section>
  `;
  rootElement.insertAdjacentHTML("beforeend", content);
};

export { renderHome, renderMenu, renderContact };
