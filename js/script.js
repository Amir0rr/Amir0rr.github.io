const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelectorAll(".dropdown-link");

const dialog = document.querySelector("#project-dialog");
const openDialog = document.querySelectorAll(".details-btn");
const closeDialog = document.querySelector("#dialog-close");
const dialogImg = document.querySelector("#dialog-img");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDesc = document.querySelector("#dialog-desc");
const dialogFeatures = document.querySelector("#dialog-features");
const dialogTags = document.querySelector("#dialog-tags");
const dialogDemo = document.querySelector("#dialog-demo");
const dialogGithub = document.querySelector("#dialog-github");

const filterBtns = document.querySelectorAll(".filter-btn");
const cardFilter = document.querySelectorAll(".card");

const projects = {
  todo: {
    title: "To-Do App",
    img: "Images/projects/to-do-app.webp",
    description:
      "اپلیکیشن مدیریت کار‌های روزانه با افزودن، ویرایش، حذف و فیلتر (همه/فعال/انجام شده) که داده‌ها توی مرورگر ذخیره می‌شن.",
    features: [
      "افزودن کار جدید با دکمه یا Enter",
      "حذف کار ها",
      "ویرایش کار ها",
      "فیلتر کار ها(همه/فعال/انجام شده)",
      "ذخیره داده ها در مرورگر",
    ],
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    demo: "https://amir0rr.github.io/To-Do-App/",
    github: "https://github.com/Amir0rr/To-Do-App",
  },
  weather: {
    title: "Weather App",
    img: "Images/projects/weather-app.webp",
    description:
      "اپ هواشناسی ساده که با نام شهر جستجو می‌کنه و اطلاعات هوای همون لحظه رو از یک API عمومی می‌گیره.",
    features: [
      "جستجوی شهر و دریافت مختصات با API",
      "نمایش دما، سرعت باد و وضعیت هوا",
      "پیام بارگذاری و پیام «شهر پیدا نشد»",
      "مدیریت خطا و بررسی ورودی خالی",
      "طراحی ریسپانسیو با تم تاریک",
    ],
    tags: ["HTML", "CSS", "JavaScript", "REST API", "async/await"],
    demo: "https://amir0rr.github.io/Weather-app/",
    github: "https://github.com/Amir0rr/Weather-app",
  },
  tasklyft: {
    title: "Tasklyft",
    img: "Images/projects/tasklyft.webp",
    description:
      "لندینگ پیج یه ابزار مدیریت پروژه‌ی فرضی، با ساختاری متفاوت از پروژه‌های قبلی من.",
    features: [
      "داشبورد نمونه‌ی ساخته‌شده فقط با CSS و شمارنده‌ی درصد با JS",
      "نوار لوگوهای متحرک بی‌نهایت فقط با CSS",
      "جدول قیمت با پلن وسط برجسته",
      "سوالات متداول به‌صورت آکاردئون",
      "مودال ثبت‌نام با اعتبارسنجی فرم",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    demo: "https://amir0rr.github.io/Tasklyft/",
    github: "https://github.com/Amir0rr/Tasklyft",
  },
  deepfocus: {
    title: "DeepFocus",
    img: "Images/projects/deepfocus.webp",
    description: "لندینگ پیج یه اپ تمرکز فرضی با تم تاریک و آرام.",
    features: [
      "چیدمان با CSS Grid",
      "انیمیشن ظاهر شدن کارت‌ها هنگام اسکرول با IntersectionObserver",
      "اسکرول نرم به بخش‌های صفحه",
      "فرم تماس با اعتبارسنجی",
      "بخش نظرات و پلن‌های اشتراک",
    ],
    tags: ["HTML", "CSS Grid", "JavaScript", "Responsive"],
    demo: "https://amir0rr.github.io/DeepFocus/",
    github: "https://github.com/Amir0rr/DeepFocus",
  },
  goodcoffee: {
    title: "GoodCoffee",
    img: "Images/projects/goodcoffee.webp",
    description: "لندینگ پیج یه برند قهوه‌ی فرضی با پالت گرم و روشن.",
    features: [
      "بخش‌های معرفی، محصولات، چرا ما و نظرات مشتریان",
      "فرم عضویت خبرنامه",
      "تصاویر هم‌اندازه با aspect-ratio",
      "طراحی کاملاً ریسپانسیو",
    ],
    tags: ["HTML", "CSS", "Responsive", "JavaScript"],
    demo: "https://amir0rr.github.io/GoodCoffee/",
    github: "https://github.com/Amir0rr/GoodCoffee",
  },
};

const closeMenu = () => {
  dropdown.classList.remove("open");
  dropdownBtn.setAttribute("aria-expanded", "false");
};

dropdownBtn.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  dropdownBtn.setAttribute("aria-expanded", isOpen);
});

dropdownLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && dropdown.classList.contains("open")) {
    closeMenu();
    dropdownBtn.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && dropdown.classList.contains("open")) {
    closeMenu();
  }
});

//Dialog modal

openDialog.forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = projects[btn.dataset.project];
    if (!project) return;

    dialogImg.src = project.img;
    dialogImg.alt = project.title;
    dialogTitle.textContent = project.title;
    dialogDesc.textContent = project.description;
    dialogDemo.href = project.demo;
    dialogGithub.href = project.github;

    dialogFeatures.innerHTML = "";
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      dialogFeatures.appendChild(li);
    });

    dialogTags.innerHTML = "";
    project.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      dialogTags.appendChild(li);
    });

    dialog.showModal();
  });
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});

// Filter projects

// Filter projects

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnCategory = btn.dataset.filter;

    filterBtns.forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");

    cardFilter.forEach((card) => {
      const matches =
        btnCategory === "all" || card.dataset.category === btnCategory;

      if (matches) {
        card.classList.remove("is-hidden");
        card.offsetWidth;
        card.classList.remove("is-hiding");
      } else {
        card.classList.add("is-hiding");
        setTimeout(() => {
          if (card.classList.contains("is-hiding")) {
            card.classList.add("is-hidden");
          }
        }, 300);
      }
    });
  });
});
