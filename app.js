// --- 1. Ma'lumotlar va Holat Boshqaruvi ---
const defaultVideos = [
    {
        id: "v1",
        title: "Toza qonli Nemis Ovcharkasi kuchuklari sotiladi",
        ytId: "1pxgqtWGGWk",
        seller: "Bobur Itlari",
        sellerAvatar: "https://i.pravatar.cc/150?u=bobur",
        viewsNum: 15200,
        views: "15K",
        time: "2 soat oldin",
        duration: "0:45",
        category: "it",
        desc: "Juda aqlli va sog'lom nemis ovcharkasi. Barcha vaksinalari bor.",
        rating: 4.8,
        price: "2000000",
        location: "toshkent",
        phone: "+998901234567",
        isShort: false,
        comments: [
            { user: "Ali", text: "Juda chiroyli it ekan!", date: "1 soat oldin" }
        ]
    },
    {
        id: "v2",
        title: "Shotland mushukchasi (Skotish Fold) - o'yinqaroq",
        ytId: "qh7LWWV62TE",
        seller: "Elite Cats UZ",
        sellerAvatar: "https://i.pravatar.cc/150?u=elite",
        viewsNum: 8500,
        views: "8.5K",
        time: "5 soat oldin",
        duration: "1:20",
        category: "mushuk",
        desc: "Eng chiroyli mushukchalar to'plami. Bizda sotuvda mavjud.",
        rating: 4.5,
        price: "1500000",
        location: "samarqand",
        phone: "+998912345678",
        isShort: false,
        comments: []
    },
    {
        id: "v3",
        title: "Qorabayir zotli uloqchi ot sotiladi",
        ytId: "Qp4wV_lYj-M",
        seller: "Ot-Sariq Markazi",
        sellerAvatar: "https://i.pravatar.cc/150?u=ot",
        viewsNum: 2100,
        views: "2.1K",
        time: "5 soat oldin",
        duration: "1:10",
        category: "ot",
        desc: "Uloqqa tayyor, yoshi 4 da. Toshkent viloyati.",
        rating: 4.2,
        price: "25000000",
        location: "toshkent",
        phone: "+998931234567",
        isShort: false,
        comments: []
    },
    {
        id: "v4",
        title: "Rang-barang va chiroyli Qushlar dunyosi",
        ytId: "K8H-tUIsz9c",
        seller: "Bird Kingdom",
        sellerAvatar: "https://i.pravatar.cc/150?u=bird",
        viewsNum: 5400,
        views: "5.4K",
        time: "1 kun oldin",
        duration: "10:30",
        category: "qush",
        desc: "Eng chiroyli to'tiqushlar va ekzotik qushlar. Uy uchun eng yaxshi hamroh.",
        rating: 4.9,
        price: "150000",
        location: "andijon",
        phone: "+998941234567",
        isShort: false,
        comments: []
    },
    {
        id: "v5",
        title: "Sifatli chorva mollari uchun Yem mahsulotlari",
        ytId: "6n0e5i6uIEM",
        seller: "Agro Sifat UZ",
        sellerAvatar: "https://i.pravatar.cc/150?u=agro",
        viewsNum: 3200,
        views: "3.2K",
        time: "3 kun oldin",
        duration: "5:15",
        category: "yem",
        desc: "Sifatli ozuqa, makkajo'xori va arpa yemlari sotuvda.",
        rating: 4.6,
        price: "4500",
        location: "fargona",
        phone: "+998901112233",
        isShort: false,
        comments: []
    },
    {
        id: "v6",
        title: "Sut yo'nalishidagi aslzoda sigirlar",
        ytId: "rbCqd7zxW6E",
        seller: "Chorvador Uz",
        sellerAvatar: "https://i.pravatar.cc/150?u=cow",
        viewsNum: 10000,
        views: "10K",
        time: "1 hafta oldin",
        duration: "8:20",
        category: "mol",
        desc: "Golshtin zotli sigirlar, kunlik sut berimi yuqori.",
        rating: 4.7,
        price: "25000000",
        location: "namangan",
        phone: "+998971234567",
        isShort: false,
        comments: []
    },
    {
        id: "v7",
        title: "Ekzotik hayvonlar dunyosiga sayohat",
        ytId: "V_9uP4lYj-M",
        seller: "Exotic Zoo",
        sellerAvatar: "https://i.pravatar.cc/150?u=exotic",
        viewsNum: 1500,
        views: "1.5K",
        time: "4 kun oldin",
        duration: "12:00",
        category: "ekzotik",
        desc: "G'aroyib va rang-barang ekzotik hayvonlar.",
        rating: 4.4,
        price: "5000000",
        location: "toshkent",
        phone: "+998991234567",
        isShort: false,
        comments: []
    },
    // --- YANGI QO'SHILGAN VIDEOLAR (KATEGORIYALAR BO'YICHA) ---

    // ITLAR
    {
        id: "v8",
        title: "Alabay kuchuklari - Haqiqiy qo'riqchi",
        ytId: "7O1p5W_s-qA",
        seller: "Alabay Club",
        sellerAvatar: "https://i.pravatar.cc/150?u=alabay",
        viewsNum: 5600,
        views: "5.6K",
        time: "1 kun oldin",
        duration: "2:30",
        category: "it",
        desc: "Toza qonli O'rta Osiyo ovcharkasi (Alabay). 2 oylik kuchuklar.",
        rating: 4.9,
        price: "3000000",
        location: "surxandaryo",
        phone: "+998901112233",
        isShort: false,
        comments: []
    },
    {
        id: "v9",
        title: "Xaski (Husky) - Ko'zlari ko'k kuchuklar",
        ytId: "tVldx9d7h8E",
        seller: "Husky House",
        sellerAvatar: "https://i.pravatar.cc/150?u=husky",
        viewsNum: 8900,
        views: "8.9K",
        time: "3 soat oldin",
        duration: "1:45",
        category: "it",
        desc: "Sibir xaskisi, juda o'yinqaroq va chiroyli.",
        rating: 4.7,
        price: "1200000",
        location: "toshkent",
        phone: "+998909998877",
        isShort: false,
        comments: []
    },
    {
        id: "v10",
        title: "Doberman kuchuklari - Zotdor",
        ytId: "0c4i6-2i4j8",
        seller: "Elite Dogs",
        sellerAvatar: "https://i.pravatar.cc/150?u=doberman",
        viewsNum: 3400,
        views: "3.4K",
        time: "5 kun oldin",
        duration: "3:10",
        category: "it",
        desc: "Doberman pincher, quloqlari kesilgan, hujjatlari joyida.",
        rating: 4.8,
        price: "4000000",
        location: "samarqand",
        phone: "+998915554433",
        isShort: false,
        comments: []
    },

    // MUSHUKLAR
    {
        id: "v11",
        title: "Britan mushugi - Kulrang aslzoda",
        ytId: "5dsGWM5XGdg",
        seller: "Cat World",
        sellerAvatar: "https://i.pravatar.cc/150?u=catw",
        viewsNum: 4200,
        views: "4.2K",
        time: "2 kun oldin",
        duration: "2:15",
        category: "mushuk",
        desc: "British Shorthair, juda bosiq va aqlli mushuk.",
        rating: 4.6,
        price: "1800000",
        location: "buxoro",
        phone: "+998933332211",
        isShort: false,
        comments: []
    },
    {
        id: "v12",
        title: "Meyn Kun (Maine Coon) - Gigant mushuk",
        ytId: "tHq8t7_Z-yM",
        seller: "Big Cats UZ",
        sellerAvatar: "https://i.pravatar.cc/150?u=maine",
        viewsNum: 12000,
        views: "12K",
        time: "1 hafta oldin",
        duration: "4:00",
        category: "mushuk",
        desc: "Dunyodagi eng katta uy mushuklari zoti. Meyn Kun bolalari.",
        rating: 5.0,
        price: "5000000",
        location: "toshkent",
        phone: "+998977776655",
        isShort: false,
        comments: []
    },
    {
        id: "v13",
        title: "Sfenks - Tuksiz mushuk bolalari",
        ytId: "Xy8j8-9k0l1",
        seller: "Exotic Cats",
        sellerAvatar: "https://i.pravatar.cc/150?u=sphinx",
        viewsNum: 2100,
        views: "2.1K",
        time: "3 kun oldin",
        duration: "1:50",
        category: "mushuk",
        desc: "Kanada sfenksi, allergiya chaqirmaydi.",
        rating: 4.3,
        price: "2000000",
        location: "navoiy",
        phone: "+998911110099",
        isShort: false,
        comments: []
    },

    // OTLAR
    {
        id: "v14",
        title: "Ahalteke oti - Turkman zoti",
        ytId: "y6q9-8j7h6g",
        seller: "Arg'umoq",
        sellerAvatar: "https://i.pravatar.cc/150?u=ahal",
        viewsNum: 25000,
        views: "25K",
        time: "2 hafta oldin",
        duration: "5:20",
        category: "ot",
        desc: "Sof qonli Ahalteke oti, ko'rgazmalar g'olibi.",
        rating: 5.0,
        price: "100000000",
        location: "xorazm",
        phone: "+998998887766",
        isShort: false,
        comments: []
    },
    {
        id: "v15",
        title: "Ingliz zotli poyga oti",
        ytId: "i5u8-7y6t5r",
        seller: "Race Horses",
        sellerAvatar: "https://i.pravatar.cc/150?u=race",
        viewsNum: 15000,
        views: "15K",
        time: "1 oy oldin",
        duration: "3:45",
        category: "ot",
        desc: "Chopqir ot, poygalarda qatnashgan.",
        rating: 4.8,
        price: "50000000",
        location: "toshkent",
        phone: "+998901231234",
        isShort: false,
        comments: []
    },
    {
        id: "v16",
        title: "Yuvosh ot - Dehqonchilik va ulov uchun",
        ytId: "o9p0-1l2k3j",
        seller: "Dehqon Bobo",
        sellerAvatar: "https://i.pravatar.cc/150?u=dehqon",
        viewsNum: 3000,
        views: "3K",
        time: "4 kun oldin",
        duration: "2:00",
        category: "ot",
        desc: "Juda yuvosh, aravaga yuradi, ishga o'rgatilgan.",
        rating: 4.5,
        price: "8000000",
        location: "jizzax",
        phone: "+998933334455",
        isShort: false,
        comments: []
    },

    // QUSHLAR
    {
        id: "v17",
        title: "Kaptarlar - O'yinchi va chiroyli",
        ytId: "m4n5-6b7v8c",
        seller: "Pigeon Club",
        sellerAvatar: "https://i.pravatar.cc/150?u=pigeon",
        viewsNum: 6700,
        views: "6.7K",
        time: "12 soat oldin",
        duration: "5:00",
        category: "qush",
        desc: "Turli xil zotli kaptarlar, o'yinchi va bezak uchun.",
        rating: 4.7,
        price: "50000",
        location: "andijon",
        phone: "+998911112222",
        isShort: false,
        comments: []
    },
    {
        id: "v18",
        title: "Brahma tovuqlari - Yirik zot",
        ytId: "x1z2-3c4v5b",
        seller: "Eco Farm",
        sellerAvatar: "https://i.pravatar.cc/150?u=chicken",
        viewsNum: 9000,
        views: "9K",
        time: "1 hafta oldin",
        duration: "3:30",
        category: "qush",
        desc: "Brahma zotli tovuq va xo'rozlar, tuxum va go'sht yo'nalishida.",
        rating: 4.6,
        price: "250000",
        location: "fargona",
        phone: "+998905556677",
        isShort: false,
        comments: []
    },
    {
        id: "v19",
        title: "Kanareyka sayroqi qushlar",
        ytId: "q1w2-3e4r5t",
        seller: "Singing Birds",
        sellerAvatar: "https://i.pravatar.cc/150?u=canary",
        viewsNum: 1500,
        views: "1.5K",
        time: "2 kun oldin",
        duration: "1:15",
        category: "qush",
        desc: "Juda chiroyli sayraydigan kanareykalar.",
        rating: 4.9,
        price: "300000",
        location: "toshkent",
        phone: "+998971112233",
        isShort: false,
        comments: []
    },

    // MOL (Qoramol)
    {
        id: "v20",
        title: "Angus buqalari - Go'sht yo'nalishida",
        ytId: "a1s2-3d4f5g",
        seller: "Meat Farm",
        sellerAvatar: "https://i.pravatar.cc/150?u=angus",
        viewsNum: 11000,
        views: "11K",
        time: "3 kun oldin",
        duration: "4:10",
        category: "mol",
        desc: "Qora Angus buqalari, bo'rdoqiga boqish uchun ideal.",
        rating: 4.8,
        price: "15000000",
        location: "qashqadaryo",
        phone: "+998912223344",
        isShort: false,
        comments: []
    },
    {
        id: "v21",
        title: "Simental sigirlar - Sut va go'sht",
        ytId: "h1j2-3k4l5m",
        seller: "Milk & Meat",
        sellerAvatar: "https://i.pravatar.cc/150?u=simental",
        viewsNum: 7800,
        views: "7.8K",
        time: "5 kun oldin",
        duration: "3:50",
        category: "mol",
        desc: "Simental zotli sigirlar, sut berishi yuqori.",
        rating: 4.7,
        price: "22000000",
        location: "sirdaryo",
        phone: "+998934445566",
        isShort: false,
        comments: []
    },
    {
        id: "v22",
        title: "Buzoqchalar sotiladi - Arzon narxda",
        ytId: "z1x2-3c4v5b",
        seller: "Chorva Bozor",
        sellerAvatar: "https://i.pravatar.cc/150?u=calf",
        viewsNum: 5000,
        views: "5K",
        time: "1 kun oldin",
        duration: "1:30",
        category: "mol",
        desc: "3-4 oylik sog'lom buzoqchalar.",
        rating: 4.5,
        price: "3000000",
        location: "xorazm",
        phone: "+998991112233",
        isShort: false,
        comments: []
    },

    // YEM (Ozuqa)
    {
        id: "v23",
        title: "Presslangan beda - Qish uchun g'am",
        ytId: "p0o9-8i7u6y",
        seller: "Agro Yem",
        sellerAvatar: "https://i.pravatar.cc/150?u=beda",
        viewsNum: 2000,
        views: "2K",
        time: "1 hafta oldin",
        duration: "2:00",
        category: "yem",
        desc: "Sifatli, bargli presslangan beda.",
        rating: 4.9,
        price: "35000",
        location: "toshkent",
        phone: "+998901234567",
        isShort: false,
        comments: []
    },
    {
        id: "v24",
        title: "Kepak va Shulxa - Ulgurji narxda",
        ytId: "t5r4-3e2w1q",
        seller: "Un Zavod",
        sellerAvatar: "https://i.pravatar.cc/150?u=kepak",
        viewsNum: 1800,
        views: "1.8K",
        time: "2 kun oldin",
        duration: "1:10",
        category: "yem",
        desc: "Qoplab sotiladi, yetkazib berish xizmati bor.",
        rating: 4.6,
        price: "2500",
        location: "samarqand",
        phone: "+998912345678",
        isShort: false,
        comments: []
    },
    {
        id: "v25",
        title: "Hisor oti sotiladi - yosh, baquvvat, chopqir",
        ytId: "7oxi5kLC15g",
        seller: "Hisor Horse Farm",
        sellerAvatar: "https://i.pravatar.cc/150?u=hisorhorse",
        viewsNum: 6400,
        views: "6.4K",
        time: "3 soat oldin",
        duration: "2:25",
        category: "ot",
        desc: "3.5 yoshli Hisor oti. Sog'lom, emlashlari qilingan, minib yurishga va xo'jalik ishlariga mos. Narxi kelishiladi.",
        rating: 4.8,
        price: "32000000",
        location: "qashqadaryo",
        phone: "+998933556677",
        isShort: false,
        comments: []
    },
    {
        id: "v26",
        title: "Chorva uchun avtomatik suv berish uskunasi sotiladi",
        ytId: "JbSkbED7p8c",
        seller: "Agro Tech UZ",
        sellerAvatar: "https://i.pravatar.cc/150?u=agrotech",
        viewsNum: 2900,
        views: "2.9K",
        time: "5 soat oldin",
        duration: "1:40",
        category: "asbob",
        desc: "Ferma va xonadon uchun qulay avtomatik suv berish tizimi. O'rnatish bo'yicha yo'riqnoma bor.",
        rating: 4.7,
        price: "1850000",
        location: "toshkent",
        phone: "+998901998877",
        isShort: false,
        comments: []
    },

    // SHORTS (Qisqa videolar)
    {
        id: "s1",
        title: "Juda kulgili mushuk #shorts",
        ytId: "tHq8t7_Z-yM", // Placeholder ID
        seller: "Funny Cats",
        sellerAvatar: "https://i.pravatar.cc/150?u=funny",
        viewsNum: 50000,
        views: "50K",
        time: "1 soat oldin",
        duration: "0:15",
        category: "mushuk",
        desc: "Shorts video",
        rating: 5.0,
        price: "0",
        location: "toshkent",
        phone: "",
        isShort: true,
        comments: []
    },
    {
        id: "s2",
        title: "Otning sakrashi dahshat! #shorts",
        ytId: "y6q9-8j7h6g",
        seller: "Horse Lover",
        sellerAvatar: "https://i.pravatar.cc/150?u=hl",
        viewsNum: 120000,
        views: "120K",
        time: "2 soat oldin",
        duration: "0:20",
        category: "ot",
        desc: "Shorts video",
        rating: 4.9,
        price: "0",
        location: "toshkent",
        phone: "",
        isShort: true,
        comments: []
    },
    {
        id: "s3",
        title: "Kuchukcha ovqat yeyishi #shorts",
        ytId: "j6veW7X_T88",
        seller: "Dog Life",
        sellerAvatar: "https://i.pravatar.cc/150?u=dl",
        viewsNum: 85000,
        views: "85K",
        time: "5 soat oldin",
        duration: "0:30",
        category: "it",
        desc: "Shorts video",
        rating: 5.0,
        price: "0",
        location: "toshkent",
        phone: "",
        isShort: true,
        comments: []
    },
    {
        id: "s4",
        title: "To'tiqush gapirdi! #shorts",
        ytId: "K8H-tUIsz9c",
        seller: "Bird Man",
        sellerAvatar: "https://i.pravatar.cc/150?u=bm",
        viewsNum: 45000,
        views: "45K",
        time: "1 kun oldin",
        duration: "0:45",
        category: "qush",
        desc: "Shorts video",
        rating: 4.8,
        price: "0",
        location: "toshkent",
        phone: "",
        isShort: true,
        comments: []
    }
];

// Holat boshqaruvi
let state = {
    videos: [],
    currentUser: null,
    currentVideo: null,
    currentCategory: 'all',
    currentRegion: 'all',
    currentNav: 'home',
    pendingAction: null,
    history: [],
    watchLater: [],
    likedVideos: [],
    users: [],
    notifications: [
        { id: 1, text: "Bobur Itlari yangi video yukladi", icon: "fa-video" },
        { id: 2, text: "Sizning e'loningizga 5 kishi qiziqish bildirdi", icon: "fa-heart" },
        { id: 3, text: "ZooTube: Haftalik sharh tayyor!", icon: "fa-star" }
    ],
    academyCourses: [
        {
            id: "c1",
            title: "Nemis ovcharkasini tarbiyalash sirlari",
            thumbnail: "https://img.youtube.com/vi/j6veW7X_T88/maxresdefault.jpg",
            ytId: "j6veW7X_T88",
            lessons: 12,
            duration: "4.5 soat",
            author: "Bobur Itlari",
            rating: 4.9,
            verified: true
        },
        {
            id: "c2",
            title: "Sigirlarni to'g'ri oziqlantirish kursi",
            thumbnail: "https://img.youtube.com/vi/rbCqd7zxW6E/maxresdefault.jpg",
            ytId: "rbCqd7zxW6E",
            lessons: 8,
            duration: "3 soat",
            author: "Chorvador Uz",
            rating: 4.7,
            verified: true
        },
        {
            id: "c3",
            title: "Otlar uchun egar tanlash va parvarish",
            thumbnail: "https://img.youtube.com/vi/Qp4wV_lYj-M/maxresdefault.jpg",
            ytId: "Qp4wV_lYj-M",
            lessons: 15,
            duration: "6 soat",
            author: "Ot-Sariq Markazi",
            rating: 4.8,
            verified: false
        }
    ],
    vets: [
        {
            id: "vt1",
            name: "Dr. Azizbek Olimov",
            specialty: "Umumiy jarroh",
            avatar: "https://i.pravatar.cc/150?u=aziz",
            experience: "12 yil",
            phone: "+998901234567",
            telegram: "azizvet",
            rating: 4.9,
            location: "Toshkent"
        },
        {
            id: "vt2",
            name: "Dr. Malika Saidova",
            specialty: "Parandalar mutaxassisi",
            avatar: "https://i.pravatar.cc/150?u=malika",
            experience: "8 yil",
            phone: "+998912345678",
            telegram: "malikavet",
            rating: 4.8,
            location: "Samarqand"
        },
        {
            id: "vt3",
            name: "Dr. Jasur Karimov",
            specialty: "Chorva mollari mutaxassisi",
            avatar: "https://i.pravatar.cc/150?u=jasur",
            experience: "15 yil",
            phone: "+998931234567",
            telegram: "jasurvet",
            rating: 4.7,
            location: "Farg'ona"
        }
    ],
    pharmacies: [
        {
            id: "ph1",
            name: "Ivermektin 1% Eritma",
            category: "Parazitga qarshi",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop",
            price: "45000",
            unit: "10 ml shisha",
            desc: "Keng spektrli antiparazitar preparat. Itlar, mushuklar, mol va parrandalarga mo'ljallangan.",
            stock: 42,
            rating: 4.9,
            telegram: "zoovet_shop"
        },
        {
            id: "ph2",
            name: "Amoksitsilin 15% Suspenziya",
            category: "Antibiotik",
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
            price: "78000",
            unit: "100 ml shisha",
            desc: "Keng ta'sir doirasiga ega antibiotik. Nafas yo'llari va teri kasalliklariga qarshi.",
            stock: 18,
            rating: 4.7,
            telegram: "zoovet_shop"
        },
        {
            id: "ph3",
            name: "VetBionik Vitamin Kompleksi",
            category: "Vitamin & Mineral",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop",
            price: "120000",
            unit: "30 tabletka",
            desc: "A, D3, E, B guruhi vitaminlari va minerallar. Chorva va uy hayvonlari uchun.",
            stock: 65,
            rating: 4.8,
            telegram: "zoovet_shop"
        },
        {
            id: "ph4",
            name: "Frontline Plus Burgaga qarshi",
            category: "Tashqi parazitlar",
            image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=400&auto=format&fit=crop",
            price: "95000",
            unit: "3 ta pipetka",
            desc: "Burga, kana va bitlarga qarshi kuchli vosita. 1 oydan ko'proq ta'sir qiladi.",
            stock: 30,
            rating: 5.0,
            telegram: "zoovet_shop"
        },
        {
            id: "ph5",
            name: "Novalgen (Analgin) Ineksiya",
            category: "Og'riq qoldiruvchi",
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop",
            price: "25000",
            unit: "10 ampoula",
            desc: "Og'riq va isitmani tez qoldiruvchi preparat. Chorva mollari uchun.",
            stock: 80,
            rating: 4.6,
            telegram: "zoovet_shop"
        },
        {
            id: "ph6",
            name: "Oksitetratsiklin Sprey",
            category: "Antiseptik",
            image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=400&auto=format&fit=crop",
            price: "55000",
            unit: "200 ml ballon",
            desc: "Yaralar, kesiklarni davolash uchun antiseptik sprey. Tez ta'sir qiladi.",
            stock: 25,
            rating: 4.8,
            telegram: "zoovet_shop"
        }
    ],
    dispatchers: [
        {
            id: "d1",
            type: "offer",
            vehicleType: "Yuk mashinasi",
            vehicleIcon: "fa-truck",
            title: "Kamaz 10 tonna — Toshkentdan barcha viloyatlarga",
            from: "Toshkent",
            to: "Barcha yo'nalishlar",
            capacity: "10 tonna",
            price: "500 000 so'm/kun",
            driver: "Jasur Normatov",
            phone: "+998901234567",
            telegram: "jasur_kamaz",
            rating: 4.8,
            available: true,
            desc: "Kamaz 5320 — gofrirovka va navlasiz yuk. Shoshilinch buyurtmalar ham qabul qilinadi. Haydovchi tajribali, hujjatlari joyida.",
            date: "bugun"
        },
        {
            id: "d2",
            type: "need",
            vehicleType: "Yengil yuk",
            vehicleIcon: "fa-box",
            title: "Samarqanddan Toshkentga — 2 tonna yuk kerak",
            from: "Samarqand",
            to: "Toshkent",
            capacity: "2 tonna",
            price: "Kelishiladi",
            driver: "Bobur Yusupov",
            phone: "+998911234567",
            telegram: "bobur_yuk",
            rating: 0,
            available: true,
            desc: "Samarqanddan Toshkentga chorva yemi (presslangan beda) tashish kerak. Ertaga erta soat 6 da yo'lga chiqish kerak.",
            date: "bugun"
        },
        {
            id: "d3",
            type: "offer",
            vehicleType: "Refrigerator",
            vehicleIcon: "fa-temperature-low",
            title: "Sovutgichli mashina — Go'sht va sut mahsulotlari",
            from: "Toshkent",
            to: "Namangan, Andijon, Farg'ona",
            capacity: "5 tonna",
            price: "700 000 so'm/kun",
            driver: "Dilshod Rahimov",
            phone: "+998931234567",
            telegram: "dilshod_ref",
            rating: 4.9,
            available: true,
            desc: "Sovutgichli Hino 300. Go'sht, sut mahsulotlari, ko'kat va mevalar uchun. Hafta davomida Farg'ona vodiysi marshruti.",
            date: "1 kun oldin"
        },
        {
            id: "d4",
            type: "offer",
            vehicleType: "Traktor + pritsep",
            vehicleIcon: "fa-tractor",
            title: "Traktor bilan yem-xashak tashish xizmati",
            from: "Surxondaryo",
            to: "Qashqadaryo, Surxondaryo",
            capacity: "3-5 tonna",
            price: "300 000 so'm/kun",
            driver: "Xurshid Toshmatov",
            phone: "+998971234567",
            telegram: "fermer_xurshid",
            rating: 4.6,
            available: true,
            desc: "Qishloq yo'llarida ham ishlaydi. Somon, beda, don, yem tashish. Qisqa masofali va uzoq masofali.",
            date: "2 kun oldin"
        },
        {
            id: "d5",
            type: "need",
            vehicleType: "Yuk mashinasi",
            vehicleIcon: "fa-truck",
            title: "Toshkentdan Buxoroga — Tirik chorva tashish",
            from: "Toshkent",
            to: "Buxoro",
            capacity: "5-8 ta qoramol",
            price: "Kelishilads",
            driver: "Alisher Qalandarov",
            phone: "+998901112233",
            telegram: "alisher_chorva",
            rating: 0,
            available: true,
            desc: "Toshkentdan Buxoroga 6 ta qoramol tashish kerak. Tirik hayvon tashishga mo'ljallangan yopiq mashina bo'lsa yaxshi.",
            date: "3 soat oldin"
        },
        {
            id: "d6",
            type: "offer",
            vehicleType: "GAZel",
            vehicleIcon: "fa-van-shuttle",
            title: "GAZel — Shahar ichida va viloyatlarga",
            from: "Toshkent",
            to: "Jizzax, Sirdaryo",
            capacity: "1.5 tonna",
            price: "200 000 so'm/kun",
            driver: "Mansur Ergashev",
            phone: "+998917774433",
            telegram: "mansur_gazel",
            rating: 4.7,
            available: false,
            desc: "GAZel Gazon Next. Kichik yuklar, asbob-uskunalar, oziq-ovqat mahsulotlari. Hozirda band, ertangi buyurtmalar qabul qilinadi.",
            date: "bugun"
        }
    ],
    pendingAction: null
};

// --- Initialization ---
try {
    const savedUsers = localStorage.getItem('zootube_users');
    state.users = savedUsers ? JSON.parse(savedUsers) : [];
} catch (e) {
    state.users = [];
}
try {
    const savedVideos = localStorage.getItem('zootube_videos');
    state.videos = savedVideos ? JSON.parse(savedVideos) : [...defaultVideos];
    if (savedVideos) {
        const existingIds = new Set((state.videos || []).map(function (v) { return String(v.id); }));
        defaultVideos.forEach(function (dv) {
            if (!existingIds.has(String(dv.id))) state.videos.push(dv);
        });
    }
} catch (e) {
    state.videos = [...defaultVideos];
}

try {
    const savedUser = localStorage.getItem('zootube_user');
    state.currentUser = savedUser ? JSON.parse(savedUser) : null;
} catch (e) {
    state.currentUser = null;
}

try {
    const savedHistory = localStorage.getItem('zootube_history');
    state.history = savedHistory ? JSON.parse(savedHistory) : [];
} catch (e) {
    state.history = [];
}

try {
    const savedLater = localStorage.getItem('zootube_watch_later');
    state.watchLater = savedLater ? JSON.parse(savedLater) : [];
} catch (e) {
    state.watchLater = [];
}

try {
    const savedLiked = localStorage.getItem('zootube_liked');
    state.likedVideos = savedLiked ? JSON.parse(savedLiked) : [];
} catch (e) {
    state.likedVideos = [];
}
try {
    const savedVets = localStorage.getItem('zootube_vets');
    state.vets = savedVets ? JSON.parse(savedVets) : state.vets;
} catch (e) {
    state.vets = state.vets;
}
try {
    const savedPharmacies = localStorage.getItem('zootube_pharmacies');
    state.pharmacies = savedPharmacies ? JSON.parse(savedPharmacies) : state.pharmacies;
} catch (e) {
    state.pharmacies = state.pharmacies;
}
try {
    const savedDispatchers = localStorage.getItem('zootube_dispatchers');
    state.dispatchers = savedDispatchers ? JSON.parse(savedDispatchers) : state.dispatchers;
} catch (e) {
    state.dispatchers = state.dispatchers;
}
try {
    const savedAcademyCourses = localStorage.getItem('zootube_academy_courses');
    state.academyCourses = savedAcademyCourses ? JSON.parse(savedAcademyCourses) : state.academyCourses;
} catch (e) {
    state.academyCourses = state.academyCourses;
}

// --- DOM Elementlari (Global Obyekt) ---
const DOM = {
    get videoGrid() { return document.getElementById('videoGrid'); },
    get searchInput() { return document.getElementById('searchInput'); },
    get categoryTabs() { return document.getElementById('categoryTabs'); },
    get regionFilter() { return document.getElementById('regionFilter'); },
    get menuBtn() { return document.querySelector('.menu-btn'); },
    get sidebarItems() { return document.querySelectorAll('#sidebar .nav-item'); },
    get videoModal() { return document.getElementById('videoModal'); },
    get uploadModal() { return document.getElementById('uploadModal'); },
    get authModal() { return document.getElementById('authModal'); },
    get authButtons() { return document.getElementById('authButtons'); },
    get userAvatarContainer() { return document.getElementById('userAvatarContainer'); },
    get headerAvatar() { return document.getElementById('headerAvatar'); },
    get dropdownUserName() { return document.getElementById('dropdownUserName'); },
    get commentsList() { return document.getElementById('commentsList'); },
    get commentInput() { return document.getElementById('commentInput'); },
    get sendCommentBtn() { return document.getElementById('sendCommentBtn'); },
    get commentCount() { return document.getElementById('commentCount'); },
    get currentRatingText() { return document.getElementById('currentRating'); },
    get starIcons() { return document.querySelectorAll('#interactiveStars i'); },
    get subscribeBtn() { return document.querySelector('.sub-btn'); },
    get mainYouTubePlayer() { return document.getElementById('mainYouTubePlayer'); },
    get profileView() { return document.getElementById('profileView'); },
    get profileNameLarge() { return document.getElementById('profileNameLarge'); },
    get profileAvatarLarge() { return document.getElementById('profileAvatarLarge'); },
    get profileSubsCount() { return document.getElementById('profileSubsCount'); },
    get profileVideosCount() { return document.getElementById('profileVideosCount'); },
    get profileVideosCount() { return document.getElementById('profileVideosCount'); },
    get profileVideoGrid() { return document.getElementById('profileVideoGrid'); },
    get shortsGrid() { return document.getElementById('shortsGrid'); },
    get toastContainer() { return document.getElementById('toastContainer'); },
    get likeBtn() { return document.getElementById('likeBtn'); },
    get laterBtn() { return document.getElementById('laterBtn'); },
    get adminView() { return document.getElementById('adminView'); },
    get adminSidebarLink() { return document.getElementById('adminSidebarLink'); },
    get adminDivider() { return document.getElementById('adminDivider'); },
    get adminTotalUsers() { return document.getElementById('adminTotalUsers'); },
    get adminTotalVideos() { return document.getElementById('adminTotalVideos'); },
    get adminTotalViews() { return document.getElementById('adminTotalViews'); },
    get adminVideosList() { return document.getElementById('adminVideosList'); },
    get adminUsersList() { return document.getElementById('adminUsersList'); },
    get uploadModalTitle() { return document.getElementById('uploadModalTitle'); },
    get editVideoId() { return document.getElementById('editVideoId'); },
    get shortsGrid() { return document.getElementById('shortsGrid'); },
    get notifBtn() { return document.getElementById('notifBtn'); },
    get notifDropdown() { return document.getElementById('notifDropdown'); },
    get notifList() { return document.getElementById('notifList'); },
    get relatedVideosList() { return document.getElementById('relatedVideosList'); },
    get academyView() { return document.getElementById('academyView'); },
    get vetView() { return document.getElementById('vetView'); },
    get pharmacyView() { return document.getElementById('pharmacyView'); },
    get dispatchView() { return document.getElementById('dispatchView'); },
    get profileBanner() { return document.getElementById('profileBanner'); },

    // New Modals and Forms
    get vetPostModal() { return document.getElementById('vetPostModal'); },
    get vetPostForm() { return document.getElementById('vetPostForm'); },
    get storePostModal() { return document.getElementById('storePostModal'); },
    get storePostForm() { return document.getElementById('storePostForm'); },
    get dispatchPostModal() { return document.getElementById('dispatchPostModal'); },
    get dispatchPostForm() { return document.getElementById('dispatchPostForm'); },
    get academyPostModal() { return document.getElementById('academyPostModal'); },
    get academyPostForm() { return document.getElementById('academyPostForm'); }
};

function showToast(message, type = 'success', duration = 3000) {
    const container = DOM.toastContainer;
    if (!container) return console.warn("Toast container not found");

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'info') icon = 'fa-info-circle';

    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <div class="toast-message">${message}</div>
        <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.5s ease-in forwards';
        setTimeout(() => toast.remove(), 500);
    }, duration);
}

// --- Funktsiyalar ---

function extractYTId(url) {
    if (!url) return null;
    var value = String(url).trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

    try {
        var parsed = new URL(value);
        var host = parsed.hostname.replace(/^www\./, '');
        var pathParts = parsed.pathname.split('/').filter(Boolean);

        if (host === 'youtu.be' && pathParts[0]) {
            return /^[a-zA-Z0-9_-]{11}$/.test(pathParts[0]) ? pathParts[0] : null;
        }

        if (host === 'youtube.com' || host === 'm.youtube.com') {
            var vParam = parsed.searchParams.get('v');
            if (vParam && /^[a-zA-Z0-9_-]{11}$/.test(vParam)) return vParam;

            if ((pathParts[0] === 'shorts' || pathParts[0] === 'embed' || pathParts[0] === 'live') && pathParts[1]) {
                return /^[a-zA-Z0-9_-]{11}$/.test(pathParts[1]) ? pathParts[1] : null;
            }
        }
    } catch (e) {
        // Fallback regex parsing for non-URL strings.
    }

    var match = value.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|[?&]v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

function getYTThumbnail(ytId) {
    if (!ytId) return "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80";
    return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
}

function getInitialAvatar(name) {
    var label = (name || "U").trim();
    var initial = (label[0] || "U").toUpperCase();
    var bg = "#2b3a67";
    var fg = "#ffffff";
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">' +
        '<rect width="100%" height="100%" fill="' + bg + '"/>' +
        '<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="' + fg + '" font-size="72" font-family="Arial, sans-serif" font-weight="700">' + initial + '</text>' +
        '</svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function sanitizeLegacyPersonImages() {
    var videosTouched = false;
    var vetsTouched = false;

    (state.videos || []).forEach(function (v) {
        if (v && v.sellerAvatar) {
            v.sellerAvatar = "";
            videosTouched = true;
        }
    });

    (state.vets || []).forEach(function (v) {
        if (v && v.avatar) {
            v.avatar = "";
            vetsTouched = true;
        }
    });

    if (videosTouched) saveVideos();
    if (vetsTouched) saveSectionData();
}

function normalizeYouTubeFields(item) {
    if (!item) return;
    var candidate = item.ytId || item.ytUrl || item.youtubeUrl || item.url || "";
    var parsedId = extractYTId(candidate);
    if (parsedId) {
        item.ytId = parsedId;
        if (!item.ytUrl) item.ytUrl = "https://www.youtube.com/watch?v=" + parsedId;
    }
}

function normalizeAllYouTubeData() {
    (state.videos || []).forEach(normalizeYouTubeFields);
    (state.academyCourses || []).forEach(normalizeYouTubeFields);
}

function formatPrice(price) {
    if (!price) return "0 so'm";
    return Number(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

function readFileAsDataURL(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (ev) { resolve(ev.target.result); };
        reader.onerror = function () { reject(new Error("Faylni o'qib bo'lmadi")); };
        reader.readAsDataURL(file);
    });
}

function getRegionName(val) {
    const regions = {
        'toshkent': 'Toshkent', 'samarqand': 'Samarqand', 'fargona': 'Farg\'ona',
        'andijon': 'Andijon', 'namangan': 'Namangan', 'buhoro': 'Buxoro',
        'navoiy': 'Navoiy', 'qashqadaryo': 'Qashqadaryo', 'surxandaryo': 'Surxondaryo',
        'jizzax': 'Jizzax', 'sirdaryo': 'Sirdaryo', 'xorazm': 'Xorazm',
        'qoraqalpogiston': 'Qoraqalpog\'iston'
    };
    return regions[val] || val;
}

function updateAuthStateUI() {
    const authBtns = DOM.authButtons;
    const userContainer = DOM.userAvatarContainer;
    if (!authBtns || !userContainer) return;

    if (state.currentUser) {
        authBtns.style.display = 'none';
        userContainer.style.display = 'block';

        const name = state.currentUser.name || "Foydalanuvchi";
        const hAvatar = DOM.headerAvatar;
        const dName = DOM.dropdownUserName;
        if (hAvatar) hAvatar.textContent = name[0].toUpperCase();
        if (dName) dName.textContent = name;
        if (!state.currentUser.subscriptions) state.currentUser.subscriptions = [];
    } else {
        authBtns.style.display = 'block';
        userContainer.style.display = 'none';
    }
}

function closeAllModals() {
    [
        DOM.videoModal,
        DOM.uploadModal,
        DOM.authModal,
        DOM.vetPostModal,
        DOM.storePostModal,
        DOM.dispatchPostModal,
        DOM.academyPostModal
    ].forEach(m => m?.classList.remove('active'));
    document.body.style.overflow = 'auto';
    if (DOM.mainYouTubePlayer) DOM.mainYouTubePlayer.src = "";
}
window.closeAllModals = closeAllModals;

function openAuthModal(type = 'login') {
    console.log("Opening Auth Modal type:", type);
    const modal = DOM.authModal;
    if (!modal) return console.error("authModal not found");

    modal.classList.add('active');
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    const targetTab = Array.from(tabs).find(t => t.dataset.type === type);
    const targetForm = document.getElementById(type === 'login' ? 'loginForm' : 'signupForm');

    if (targetTab) {
        targetTab.classList.add('active');
    }
    if (targetForm) {
        targetForm.classList.add('active');
    }
}

function processPendingAction() {
    if (state.pendingAction === 'upload') {
        console.log("Executing pending action: upload");
        state.pendingAction = null;

        // Ensure UI has settled
        setTimeout(() => {
            const uModal = DOM.uploadModal;
            if (uModal) {
                console.log("Auto-opening upload modal");
                uModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                showToast("E'lon berish oynasi ochildi", "info", 2000);
            } else {
                console.error("uploadModal not found during pending action");
            }
        }, 600); // Slightly longer delay for safety
    }
}
window.openAuthModal = openAuthModal;

function saveVideos() {
    localStorage.setItem('zootube_videos', JSON.stringify(state.videos));
}

function saveSectionData() {
    localStorage.setItem('zootube_vets', JSON.stringify(state.vets || []));
    localStorage.setItem('zootube_pharmacies', JSON.stringify(state.pharmacies || []));
    localStorage.setItem('zootube_dispatchers', JSON.stringify(state.dispatchers || []));
    localStorage.setItem('zootube_academy_courses', JSON.stringify(state.academyCourses || []));
}

function renderVideos() {
    const vGrid = DOM.videoGrid;
    const pView = DOM.profileView;
    const aView = DOM.adminView;
    if (!vGrid) return;
    if (!vGrid || !pView) return;

    vGrid.style.display = 'grid';
    if (pView) pView.style.display = 'none';
    if (aView) aView.style.display = 'none';
    if (DOM.academyView) DOM.academyView.style.display = 'none';
    if (DOM.vetView) DOM.vetView.style.display = 'none';
    if (DOM.pharmacyView) DOM.pharmacyView.style.display = 'none';
    if (DOM.dispatchView) DOM.dispatchView.style.display = 'none';

    if (state.currentNav === 'admin') {
        vGrid.style.display = 'none';
        if (aView) aView.style.display = 'block';
        renderAdminView();
        return;
    }

    if (state.currentNav === 'profile') {
        const catContainer = document.querySelector('.categories-container');
        if (catContainer) catContainer.style.display = 'none';
        vGrid.style.display = 'none';
        pView.style.display = 'block';
        renderProfile();
        return;
    } else {
        const catContainer = document.querySelector('.categories-container');
        if (catContainer) catContainer.style.display = 'block';
        // vGrid.style.display = 'grid'; // Already set above
        // pView.style.display = 'none'; // Already set above
        vGrid.style.display = 'grid';
        pView.style.display = 'none';
    }

    if (state.currentNav === 'academy') {
        vGrid.style.display = 'none';
        if (DOM.academyView) DOM.academyView.style.display = 'grid';
        renderAcademy();
        return;
    }

    if (state.currentNav === 'vets') {
        vGrid.style.display = 'none';
        if (DOM.vetView) DOM.vetView.style.display = 'grid';
        renderVets();
        return;
    }

    if (state.currentNav === 'pharmacies') {
        vGrid.style.display = 'none';
        if (DOM.pharmacyView) DOM.pharmacyView.style.display = 'grid';
        renderPharmacies();
        return;
    }

    if (state.currentNav === 'dispatch') {
        vGrid.style.display = 'none';
        if (DOM.dispatchView) DOM.dispatchView.style.display = 'block';
        renderDispatcher();
        return;
    }

    if (state.currentNav === 'tools') {
        state.currentCategory = 'asbob';
    } else if (state.currentNav === 'feed') {
        state.currentCategory = 'yem';
    }

    if (state.currentNav === 'shorts') {
        vGrid.style.display = 'none';
        if (DOM.shortsGrid) DOM.shortsGrid.style.display = 'grid';
        renderShorts();
        return;
    } else {
        if (DOM.shortsGrid) DOM.shortsGrid.style.display = 'none';
    }

    let list = [...state.videos];

    // Nav
    if (state.currentNav === 'trending') {
        list = list.sort((a, b) => (b.viewsNum || 0) - (a.viewsNum || 0));
    } else if (state.currentNav === 'history') {
        list = state.history;
    } else if (state.currentNav === 'later') {
        list = state.watchLater;
    } else if (state.currentNav === 'liked') {
        list = state.likedVideos;
    } else if (state.currentNav === 'subs') {
        if (!state.currentUser) return vGrid.innerHTML = '<div class="empty-state">Obunalarni ko\'rish uchun tizimga kiring</div>';
        list = list.filter(v => state.currentUser.subscriptions?.includes(v.seller));
    }

    // Filter
    // Asosiy gridda Shorts ko'rsatilmasin (ular alohida tabda)
    list = list.filter(v => {
        const catMatch = state.currentCategory === 'all' || v.category === state.currentCategory;
        const regionMatch = state.currentRegion === 'all' || v.location === state.currentRegion;
        const searchVal = DOM.searchInput?.value || '';
        const searchMatch = !searchVal || v.title.toLowerCase().includes(searchVal.toLowerCase());
        return catMatch && regionMatch && searchMatch && !v.isShort;
    });

    vGrid.innerHTML = '';
    if (list.length === 0) {
        if (state.currentNav === 'tools') {
            vGrid.innerHTML = `
                <div class="empty-state">
                    Asbob-uskunalar bo'limida hozircha e'lon yo'q.
                    <div style="margin-top:12px;">
                        <button onclick="openUploadModal()" class="dispatch-post-btn" style="border:none; cursor:pointer;">
                            <i class="fas fa-plus"></i> E'lon berish
                        </button>
                    </div>
                </div>
            `;
        } else {
            vGrid.innerHTML = '<div class="empty-state">Hech narsa topilmadi.</div>';
        }
        return;
    }

    list.forEach(v => {
        const isVerified = state.academyCourses.some(c => c.author === v.seller && c.verified) || v.verified;
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${v.thumbnail || getYTThumbnail(v.ytId)}" alt="${v.title}" loading="lazy">
                <div class="duration">${v.duration || '0:00'}</div>
                <div class="price-badge">${formatPrice(v.price)}</div>
            </div>
            <div class="video-info">
                <div class="seller-avatar">
                    <img src="${getInitialAvatar(v.seller)}" alt="${v.seller}">
                </div>
                <div class="details">
                    <h3>${v.title}</h3>
                    <div class="seller-name">
                        ${v.seller} ${isVerified ? '<i class="fas fa-check-circle verified-badge" title="Tasdiqlangan"></i>' : ''}
                    </div>
                    <div class="location-tag"><i class="fas fa-map-marker-alt"></i> ${getRegionName(v.location)}</div>
                    <div class="video-stats">${v.views || 0} marta вЂў ${v.time || 'hozir'}</div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openVideoPlayer(v));
        vGrid.appendChild(card);
    });
}

function renderShorts() {
    const sGrid = DOM.shortsGrid;
    if (!sGrid) return;
    sGrid.innerHTML = '';

    // Use existing videos but filter or show as shorts
    const shortsList = state.videos.filter(v => v.isShort === true);

    shortsList.forEach(v => {
        const card = document.createElement('div');
        card.className = 'short-card';
        card.innerHTML = `
            <img src="${v.thumbnail || getYTThumbnail(v.ytId)}" alt="${v.title}">
            <div class="short-info">
                <h4>${v.title}</h4>
                <div class="short-views">${v.views || 0} marta ko'rilgan</div>
            </div>
        `;
        card.addEventListener('click', () => openVideoPlayer(v));
        sGrid.appendChild(card);
    });
}

function renderRelatedVideos(currentVideo) {
    const rvList = DOM.relatedVideosList;
    if (!rvList) return;
    rvList.innerHTML = '';

    // Aqlli tavsiya: Avval ayni kategoriyadagi videolarni olamiz
    let related = state.videos.filter(v => v.id !== currentVideo.id && v.category === currentVideo.category && !v.isShort);

    // Agar kam bo'lsa, boshqa kategoriyalardan qo'shamiz
    if (related.length < 6) {
        const others = state.videos.filter(v => v.id !== currentVideo.id && v.category !== currentVideo.category && !v.isShort);
        related = related.concat(others);
    }
    related = related.slice(0, 10); // 10 tagacha ko'rsatish

    related.forEach(v => {
        const item = document.createElement('div');
        item.className = 'related-video-item';
        item.innerHTML = `
            <div class="rv-thumb">
                <img src="${v.thumbnail || getYTThumbnail(v.ytId)}" alt="${v.title}">
            </div>
            <div class="rv-info">
                <h4>${v.title}</h4>
                <p>${v.seller}</p>
                <p>${v.views || 0} marta вЂў ${v.time || 'hozir'}</p>
            </div>
        `;
        item.addEventListener('click', () => {
            closeAllModals();
            setTimeout(() => openVideoPlayer(v), 300);
        });
        rvList.appendChild(item);
    });
}

function renderProfile() {
    const pVGrid = DOM.profileVideoGrid;
    if (!state.currentUser || !pVGrid) return;

    // Get current active tab
    const activeTab = document.querySelector('.profile-tab.active')?.dataset.tab || 'videos';
    const titleEl = document.getElementById('profileSectionTitle');

    let videos = [];
    if (activeTab === 'videos') {
        videos = state.videos.filter(v =>
            ((v.ownerEmail && v.ownerEmail === state.currentUser.email) || v.seller === state.currentUser.name) && !v.isShort
        );
        if (titleEl) titleEl.textContent = "Mening videolarim";
    } else if (activeTab === 'shorts') {
        videos = state.videos.filter(v =>
            ((v.ownerEmail && v.ownerEmail === state.currentUser.email) || v.seller === state.currentUser.name) && v.isShort
        );
        if (titleEl) titleEl.textContent = "Mening Shorts";
    } else if (activeTab === 'liked') {
        videos = state.likedVideos;
        if (titleEl) titleEl.textContent = "Yoqtirilgan videolar";
    }

    const pName = DOM.profileNameLarge;
    const pAvatar = DOM.profileAvatarLarge;
    const pSubs = DOM.profileSubsCount;
    const pVids = DOM.profileVideosCount;

    if (pName) pName.textContent = state.currentUser.name;
    if (pAvatar) pAvatar.textContent = state.currentUser.name[0].toUpperCase();
    const subCount = state.users.filter(u => u.subscriptions?.includes(state.currentUser.name)).length;
    if (pSubs) pSubs.textContent = `${subCount} obunachilar`;
    if (pVids) pVids.textContent = `${videos.length} videolar`;

    updateProfileBanner(state.currentUser.name);

    pVGrid.innerHTML = '';
    if (videos.length === 0) {
        pVGrid.innerHTML = '<div class="profile-empty-state"><h3>Hozircha video yo\'q</h3></div>';
        return;
    }

    videos.forEach(v => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${v.thumbnail || getYTThumbnail(v.ytId)}" alt="${v.title}">
                <div class="duration">${v.duration || '0:00'}</div>
                <div class="price-badge">${formatPrice(v.price)}</div>
            </div>
            <div class="video-info">
                <div class="details">
                    <h3>${v.title}</h3>
                    <div class="video-stats">${v.views || 0} marta вЂў ${v.time || 'hozir'}</div>
                </div>
            </div>
            <div class="video-actions-owner">
                <button class="edit-btn" onclick="event.stopPropagation(); editOwnVideo('${v.id}')"><i class="fas fa-edit"></i> O'zgartirish</button>
                <button class="delete-btn" onclick="event.stopPropagation(); deleteOwnVideo('${v.id}')"><i class="fas fa-trash"></i></button>
            </div>
        `;
        card.addEventListener('click', () => openVideoPlayer(v));
        pVGrid.appendChild(card);
    });
}

function openVideoPlayer(video) {
    state.currentVideo = video;

    // Fill details
    const elements = {
        title: document.getElementById('modalVideoTitle'),
        views: document.getElementById('modalVideoViews'),
        time: document.getElementById('modalVideoTime'),
        price: document.getElementById('modalVideoPrice'),
        location: document.getElementById('modalVideoLocation'),
        seller: document.getElementById('modalSellerName'),
        avatar: document.getElementById('modalSellerAvatar'),
        desc: document.getElementById('modalVideoDesc')
    };

    if (elements.title) elements.title.textContent = video.title;
    if (elements.views) elements.views.textContent = video.views || 0;
    if (elements.time) elements.time.textContent = video.time || 'hozir';
    if (elements.price) elements.price.textContent = formatPrice(video.price);
    if (elements.location) elements.location.textContent = getRegionName(video.location);
    if (elements.seller) elements.seller.textContent = video.seller;
    if (elements.avatar) elements.avatar.src = getInitialAvatar(video.seller);
    if (elements.desc) elements.desc.textContent = video.desc || '';

    // Sub state
    const sBtn = DOM.subscribeBtn;
    if (state.currentUser && state.currentUser.subscriptions?.includes(video.seller)) {
        sBtn?.classList.add('subscribed');
        if (sBtn) sBtn.textContent = "Obunadasiz";
    } else {
        sBtn?.classList.remove('subscribed');
        if (sBtn) sBtn.textContent = "Obuna bo'lish";
    }

    // Contacts
    const phone = (video.phone || "998901234567").replace(/\D/g, '');
    const tgBtn = document.getElementById('tgContactBtn');
    const waBtn = document.getElementById('waContactBtn');
    if (tgBtn) tgBtn.href = `https://t.me/+${phone}`;
    if (waBtn) waBtn.href = `https://wa.me/${phone}`;

    // Player
    const player = DOM.mainYouTubePlayer;
    if (player) {
        player.src = `https://www.youtube.com/embed/${video.ytId}?autoplay=1`;
    }

    // Related Videos
    renderRelatedVideos(video);

    // Add to History
    if (!state.history.find(item => item.id === video.id)) {
        state.history.unshift(video);
        if (state.history.length > 50) state.history.pop();
        localStorage.setItem('zootube_history', JSON.stringify(state.history));
    }

    renderComments();
    updateRatingUI();
    updateModalActionStates();
    const vModal = DOM.videoModal;
    if (vModal) vModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderNotifications() {
    const nList = DOM.notifList;
    if (!nList) return;
    nList.innerHTML = '';

    state.notifications.forEach(n => {
        const item = document.createElement('div');
        item.className = 'notif-item';
        item.innerHTML = `
            <i class="fas ${n.icon}"></i>
            <div>${n.text}</div>
        `;
        nList.appendChild(item);
    });

    const count = DOM.notifCount;
    if (count) count.textContent = state.notifications.length;
}

function renderComments() {
    const cList = DOM.commentsList;
    if (!cList || !state.currentVideo) return;
    cList.innerHTML = '';
    const comments = state.currentVideo.comments || [];
    const cCount = DOM.commentCount;
    if (cCount) cCount.textContent = comments.length;
    comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `
            <div class="user-avatar-sm">${(c.user || 'U')[0].toUpperCase()}</div>
            <div class="comment-details">
                <h4>${c.user} вЂў ${c.date || 'hozir'}</h4>
                <p>${c.text}</p>
            </div>
        `;
        cList.appendChild(div);
    });
}

function updateModalActionStates() {
    if (!state.currentVideo) return;

    const lBtn = DOM.likeBtn;
    const latBtn = DOM.laterBtn;

    const isLiked = state.likedVideos.find(v => v.id === state.currentVideo.id);
    const isLater = state.watchLater.find(v => v.id === state.currentVideo.id);

    if (lBtn) {
        lBtn.classList.toggle('active', !!isLiked);
        lBtn.querySelector('i').className = isLiked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up';
    }

    if (latBtn) {
        latBtn.classList.toggle('active', !!isLater);
    }
}

function updateRatingUI() {
    const rText = DOM.currentRatingText;
    if (!rText || !state.currentVideo) return;
    const val = state.currentVideo.rating || 0;
    rText.textContent = val;
    DOM.starIcons.forEach(s => {
        const v = parseInt(s.dataset.value);
        s.classList.toggle('fas', v <= val);
        s.classList.toggle('far', v > val);
    });
}

// Admin Chart Instances
let adminChartInstances = { views: null, cats: null };

// --- Admin Panel Functions ---
function renderAdminView() {
    if (!DOM.adminView) return;

    // Stats
    const totalViews = state.videos.reduce((sum, v) => sum + (v.viewsNum || 0), 0);
    if (DOM.adminTotalUsers) DOM.adminTotalUsers.textContent = state.users.length;
    if (DOM.adminTotalVideos) DOM.adminTotalVideos.textContent = state.videos.length;
    if (DOM.adminTotalViews) DOM.adminTotalViews.textContent = formatNumber(totalViews);

    renderAdminCharts();

    // Videos Table
    const vList = DOM.adminVideosList;
    if (vList) {
        vList.innerHTML = '';
        state.videos.forEach(v => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="https://img.youtube.com/vi/${v.ytId}/default.jpg" width="40" style="border-radius:4px;">
                        <span style="font-size:13px; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${v.title}</span>
                    </div>
                </td>
                <td>${v.seller}</td>
                <td>${v.category}</td>
                <td>${v.views}</td>
                <td><button class="admin-btn-delete" onclick="adminDeleteVideo('${v.id}')"><i class="fas fa-trash"></i></button></td>
            `;
            vList.appendChild(tr);
        });
    }

    // Users Table
    const uList = DOM.adminUsersList;
    if (uList) {
        uList.innerHTML = '';
        state.users.forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="user-avatar-sm">${u.name[0]}</div>
                        <span>${u.name}</span>
                    </div>
                </td>
                <td>${u.email}</td>
                <td>${u.subscriptions?.length || 0}</td>
                <td><button class="admin-btn-delete" onclick="adminDeleteUser('${u.email}')"><i class="fas fa-user-minus"></i></button></td>
            `;
            uList.appendChild(tr);
        });
    }
}

function renderAdminCharts() {
    const ctxViews = document.getElementById('viewsChart');
    const ctxCats = document.getElementById('categoriesChart');

    if (!ctxViews || !ctxCats) return;

    // Destroy old instances if they exist
    if (adminChartInstances.views) adminChartInstances.views.destroy();
    if (adminChartInstances.cats) adminChartInstances.cats.destroy();

    // 1. Category Distribution Data
    const catCounts = {};
    state.videos.forEach(v => {
        const catName = v.category.charAt(0).toUpperCase() + v.category.slice(1);
        catCounts[catName] = (catCounts[catName] || 0) + 1;
    });

    // 2. Views Growth Data (Mock)
    const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
    const viewsData = [1200, 1900, 1500, 3200, 2800, 4500, 6000];

    // Chart Global Defaults
    Chart.defaults.color = '#aaaaaa';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    // Render Views Chart (Line)
    adminChartInstances.views = new Chart(ctxViews, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Haftalik Ko\'rishlar',
                data: viewsData,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Haftalik Statistika' }
            }
        }
    });

    // Render Categories Chart (Doughnut)
    adminChartInstances.cats = new Chart(ctxCats, {
        type: 'doughnut',
        data: {
            labels: Object.keys(catCounts),
            datasets: [{
                data: Object.values(catCounts),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right' },
                title: { display: true, text: 'Kategoriyalar Bo\'yicha' }
            }
        }
    });
}

window.adminDeleteVideo = function (id) {
    if (!confirm("Haqiqatan ham ushbu videoni o'chirmoqchimisiz?")) return;
    state.videos = state.videos.filter(v => v.id !== id);
    localStorage.setItem('zootube_videos', JSON.stringify(state.videos));
    renderAdminView();
    showToast("Video o'chirildi", "info");
};

window.adminDeleteUser = function (email) {
    if (email === 'admin@zootube.uz') return showToast("Adminni o'chirib bo'lmaydi!", "error");
    if (!confirm("Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?")) return;
    state.users = state.users.filter(u => u.email !== email);
    localStorage.setItem('zootube_users', JSON.stringify(state.users));
    renderAdminView();
    showToast("Foydalanuvchi o'chirildi", "info");
};

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function renderAcademy() {
    const aGrid = DOM.academyView;
    if (!aGrid) return;
    aGrid.innerHTML = `
        <div class="dispatch-post-cta" style="grid-column:1/-1; margin-bottom: 20px;">
            <div>
                <i class="fas fa-graduation-cap fa-2x" style="color:#FF9800;margin-bottom:8px;"></i>
                <h3 style="margin:0 0 4px;">Akademiya kursini qo'shish</h3>
                <p style="color:var(--text-secondary);margin:0;font-size:13px;">Foydali video kurslaringizni tizimga joylashtiring</p>
            </div>
            <button onclick="openUploadModal()" class="dispatch-post-btn" style="background:#FF9800; color:white; border:none; cursor:pointer;">
                <i class="fas fa-plus"></i> Kurs yaratish
            </button>
        </div>
    `;

    state.academyCourses.forEach(c => {
        const lessonsVal = c.lessons == null ? 0 : c.lessons;
        const lessonsText = (typeof lessonsVal === 'string' && lessonsVal.toLowerCase().includes('dars'))
            ? lessonsVal
            : `${lessonsVal} dars`;
        const courseThumb = c.thumbnail || c.thumb || "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80";
        const courseRating = c.rating != null ? c.rating : "-";
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-thumb">
                <img src="${courseThumb}" alt="${c.title}">
                <div class="course-duration">${c.duration}</div>
            </div>
            <div class="course-info">
                <h3>${c.title}</h3>
                <div class="course-author">
                    ${c.author} ${c.verified ? '<i class="fas fa-check-circle verified-badge" title="Tasdiqlangan"></i>' : ''}
                </div>
                <div class="course-meta">
                    <span><i class="fas fa-book-open"></i> ${lessonsText}</span>
                    <span><i class="fas fa-star" style="color:gold"></i> ${courseRating}</span>
                </div>
                <button class="course-btn" onclick="openVideoPlayer({ytId:'${c.ytId}', title:'${c.title}', seller:'${c.author}', views:'Academy', time:'Educational', desc:'${c.title}'})">Kursni boshlash</button>
            </div>
        `;
        aGrid.appendChild(card);
    });
}

function updateProfileBanner(userName) {
    const banner = DOM.profileBanner;
    if (!banner) return;

    // Simple deterministic gradient/color for now
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    ];
    const index = userName.length % colors.length;
    banner.style.background = colors[index];
}

function renderVets() {
    const vGrid = DOM.vetView;
    if (!vGrid) return;
    vGrid.innerHTML = `
        <div class="dispatch-post-cta" style="grid-column:1/-1; margin-bottom: 20px; background: linear-gradient(135deg, rgba(62,166,255,0.1), rgba(0,0,0,0.2)); border-color: rgba(62,166,255,0.2);">
            <div>
                <i class="fas fa-user-md fa-2x" style="color:#3ea6ff;margin-bottom:8px;"></i>
                <h3 style="margin:0 0 4px;">Veterinar bo'lib qo'shilish</h3>
                <p style="color:var(--text-secondary);margin:0;font-size:13px;">O'z xizmatlaringizni taklif qiling va mijozlar toping</p>
            </div>
            <button onclick="openUploadModal()" class="dispatch-post-btn" style="border:none; cursor:pointer;">
                <i class="fas fa-stethoscope"></i> Ro'yxatdan o'tish
            </button>
        </div>
    `;

    state.vets.forEach(v => {
        var cleanPhone = (v.phone || "").replace(/\D/g, '');
        var services = Array.isArray(v.services) ? v.services : [];
        var serviceTags = services.slice(0, 3).map(function (s) {
            return '<span style="background:rgba(62,166,255,0.14); color:#78c6ff; padding:4px 8px; border-radius:999px; font-size:11px;">' + s + '</span>';
        }).join(' ');
        var diplomaHref = (v.diploma && (v.diploma.url || v.diploma.fileData)) ? (v.diploma.url || v.diploma.fileData) : '';
        var diplomaBtn = diplomaHref
            ? '<a href="' + diplomaHref + '" target="_blank" class="vet-btn-tg" style="background:#ffd54f; color:#111;"><i class="fas fa-file-medical"></i> Diplom</a>'
            : '';
        const card = document.createElement('div');
        card.className = 'vet-card';
        card.innerHTML = `
            <div class="vet-top">
                <img src="${getInitialAvatar(v.name)}" alt="${v.name}" class="vet-avatar-img">
                <div class="vet-badge"><i class="fas fa-shield-halved"></i> ${v.verified ? "Diplom tasdiqlangan" : "Mutaxassis"}</div>
            </div>
            <div class="vet-details">
                <h3>${v.name}</h3>
                <p class="vet-specialty">${v.specialty}</p>
                ${v.clinic ? `<div style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;"><i class="fas fa-hospital"></i> ${v.clinic}</div>` : ''}
                <div class="vet-stats-mini">
                    <span><i class="fas fa-briefcase"></i> ${v.experience} tajriba</span>
                    <span><i class="fas fa-star" style="color:gold"></i> ${v.rating}</span>
                </div>
                ${v.workTime ? `<div style="font-size:12px; color:var(--text-secondary); margin-top:8px;"><i class="fas fa-clock"></i> ${v.workTime}</div>` : ''}
                <div class="vet-location"><i class="fas fa-location-dot"></i> ${v.location}</div>
                ${(v.homeVisit || v.emergency) ? `<div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
                    ${v.homeVisit ? '<span style="background:rgba(76,175,80,0.18); color:#9be7a1; padding:4px 8px; border-radius:999px; font-size:11px;"><i class="fas fa-house"></i> Uyga chiqadi</span>' : ''}
                    ${v.emergency ? '<span style="background:rgba(255,82,82,0.18); color:#ff9a9a; padding:4px 8px; border-radius:999px; font-size:11px;"><i class="fas fa-bolt"></i> 24/7 Shoshilinch</span>' : ''}
                </div>` : ''}
                ${serviceTags ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">${serviceTags}</div>` : ''}
                ${v.bio ? `<p style="font-size:12px; color:var(--text-secondary); margin-top:10px;">${v.bio}</p>` : ''}
                <div class="vet-actions">
                    <a href="tel:${cleanPhone}" class="vet-btn-call"><i class="fas fa-phone"></i> Bog'lanish</a>
                    <a href="https://t.me/${v.telegram}" target="_blank" class="vet-btn-tg"><i class="fab fa-telegram"></i> Telegram</a>
                    ${diplomaBtn}
                </div>
            </div>
        `;
        vGrid.appendChild(card);
    });
}

function renderPharmacies() {
    const pGrid = DOM.pharmacyView;
    if (!pGrid) return;
    pGrid.innerHTML = `
        <div class="shop-header" style="grid-column:1/-1; margin-bottom:8px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h2 style="margin:0; font-size:20px;"><i class="fas fa-pills" style="color:#4CAF50;"></i> Veterinariya Onlayn Do'koni</h2>
                    <p style="color:var(--text-secondary); margin:4px 0 0;">Sertifikatlangan dorilar, tez yetkazib berish bilan</p>
                </div>
                <button onclick="openUploadModal()" style="background:#4CAF50; color:white; border:none; padding:10px 16px; border-radius:8px; font-weight:600; cursor:pointer;">
                    <i class="fas fa-plus"></i> Mahsulot qo'shish
                </button>
            </div>
        </div>
    `;

    state.pharmacies.forEach(p => {
        const rating = Number(p.rating || 0);
        const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
        const stock = Number(p.stock || 0);
        const stockColor = stock > 20 ? '#4CAF50' : stock > 5 ? '#FF9800' : '#f44336';
        const stockText = stock > 20 ? 'Mavjud' : stock > 5 ? `${stock} ta qoldi` : 'Kam qoldi';

        const card = document.createElement('div');
        card.className = 'pharmacy-card';
        card.innerHTML = `
            <div class="pharmacy-thumb" style="position:relative;">
                <img src="${p.image}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;border-radius:10px 10px 0 0;">
                <div class="pharmacy-cat-badge" style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.7);color:#4CAF50;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:600;">
                    <i class="fas fa-tag"></i> ${p.category}
                </div>
                <div style="position:absolute;top:10px;right:10px;background:#1a1a2e;color:gold;padding:4px 8px;border-radius:20px;font-size:12px;">
                    ${stars}
                </div>
            </div>
            <div class="pharmacy-info" style="padding:14px;">
                <h3 style="margin:0 0 6px;font-size:15px;line-height:1.3;">${p.name}</h3>
                <p style="color:var(--text-secondary);font-size:12px;margin:0 0 10px;line-height:1.4;">${p.desc}</p>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="font-size:20px;font-weight:700;color:#4CAF50;">${formatPrice(p.price)}</div>
                    <div style="font-size:11px;color:var(--text-secondary);">${p.unit}</div>
                </div>
                <div style="font-size:12px;color:${stockColor};margin-bottom:12px;font-weight:600;">
                    <i class="fas fa-circle" style="font-size:8px;"></i> ${stockText}
                </div>
                <a href="https://t.me/${p.telegram}?text=Salom!%20${encodeURIComponent(p.name)}%20buyurtma%20qilmoqchiman"
                   target="_blank"
                   class="pharmacy-btn-buy"
                   style="display:block;text-align:center;background:#4CAF50;color:black;font-weight:700;padding:10px;border-radius:8px;text-decoration:none;font-size:14px;transition:all 0.2s;">
                    <i class="fas fa-shopping-cart"></i> Buyurtma berish
                </a>
            </div>
        `;
        pGrid.appendChild(card);
    });
}

function renderDispatcher(filter) {
    const dView = DOM.dispatchView;
    if (!dView) return;
    filter = filter || 'all';

    dView.innerHTML = `
        <div class="dispatch-header">
            <div>
                <h2 style="margin:0 0 4px;font-size:22px;"><i class="fas fa-truck" style="color:#3ea6ff;"></i> Dispetcher Markazi</h2>
                <p style="color:var(--text-secondary);margin:0;font-size:13px;">Yuk tashuvchi va yuk egalar uchun birlashtiruvchi platforma</p>
            </div>
            <div class="dispatch-filter-tabs">
                <button class="dispatch-tab ${filter === 'all' ? 'active' : ''}" onclick="renderDispatcher('all')">Hammasi</button>
                <button class="dispatch-tab ${filter === 'offer' ? 'active' : ''}" onclick="renderDispatcher('offer')"><i class="fas fa-truck"></i> Mashina bor</button>
                <button class="dispatch-tab ${filter === 'need' ? 'active' : ''}" onclick="renderDispatcher('need')"><i class="fas fa-box"></i> Mashina kerak</button>
            </div>
        </div>

        <div class="dispatch-stats">
            <div class="d-stat"><i class="fas fa-truck"></i> <strong>${state.dispatchers.filter(d => d.type === 'offer').length}</strong> Mashina bor</div>
            <div class="d-stat"><i class="fas fa-box-open"></i> <strong>${state.dispatchers.filter(d => d.type === 'need').length}</strong> Mashina kerak</div>
            <div class="d-stat"><i class="fas fa-check-circle" style="color:#4CAF50;"></i> <strong>${state.dispatchers.filter(d => d.available).length}</strong> Faol e'lon</div>
        </div>

        <div id="dispatchCards" class="dispatch-grid"></div>

        <div class="dispatch-post-cta">
            <div>
                <i class="fas fa-plus-circle fa-2x" style="color:#3ea6ff;margin-bottom:8px;"></i>
                <h3 style="margin:0 0 4px;">O'z e'loningizni joylashtiring</h3>
                <p style="color:var(--text-secondary);margin:0;font-size:13px;">Mashingiz bormi yoki yuk tashish kerakmi? Bepul e'lon bering!</p>
            </div>
            <button onclick="openUploadModal()" class="dispatch-post-btn" style="border:none; cursor:pointer;">
                <i class="fas fa-plus"></i> E'lon berish
            </button>
        </div>
    `;

    const grid = document.getElementById('dispatchCards');
    if (!grid) return;

    const list = filter === 'all' ? state.dispatchers : state.dispatchers.filter(d => d.type === filter);

    list.forEach(d => {
        const isOffer = d.type === 'offer';
        const typeColor = isOffer ? '#3ea6ff' : '#FF9800';
        const typeLabel = isOffer ? 'Mashina bor' : 'Mashina kerak';
        const typeIcon = isOffer ? 'fa-truck' : 'fa-box-open';
        const availColor = d.available ? '#4CAF50' : '#888';
        const availText = d.available ? 'Faol' : 'Band';
        const stars = d.rating > 0 ? ('★'.repeat(Math.round(d.rating)) + '☆'.repeat(5 - Math.round(d.rating))) : '';
        const phone = (d.phone || '').replace(/\D/g, '');
        const dispatchTitle = d.title || `${d.from || 'Noma’lum'}dan ${d.to || 'Noma’lum'}ga yuk tashish e'loni`;
        const driverName = d.driver || 'Haydovchi';

        const card = document.createElement('div');
        card.className = 'dispatch-card';
        card.innerHTML = `
            <div class="dispatch-card-header" style="border-top:3px solid ${typeColor};">
                <div class="dispatch-type-badge" style="background:${typeColor}22;color:${typeColor};">
                    <i class="fas ${typeIcon}"></i> ${typeLabel}
                </div>
                <div class="dispatch-avail" style="color:${availColor};">
                    <i class="fas fa-circle" style="font-size:8px;"></i> ${availText}
                </div>
            </div>

            <div class="dispatch-card-body">
                <h3 class="dispatch-title">${dispatchTitle}</h3>

                <div class="dispatch-route">
                    <div class="route-point">
                        <i class="fas fa-map-marker-alt" style="color:#3ea6ff;"></i>
                        <span><strong>Qaerdan:</strong> ${d.from}</span>
                    </div>
                    <div class="route-arrow"><i class="fas fa-arrow-right"></i></div>
                    <div class="route-point">
                        <i class="fas fa-flag-checkered" style="color:#4CAF50;"></i>
                        <span><strong>Qaerga:</strong> ${d.to}</span>
                    </div>
                </div>

                <div class="dispatch-meta">
                    <span><i class="fas fa-weight-hanging"></i> ${d.capacity}</span>
                    <span><i class="fas fa-${isOffer ? 'truck' : 'box'}"></i> ${d.vehicleType}</span>
                    <span><i class="fas fa-clock"></i> ${d.date}</span>
                </div>

                <p class="dispatch-desc">${d.desc}</p>

                <div class="dispatch-price">
                    <i class="fas fa-tag"></i> ${d.price}
                </div>

                <div class="dispatch-driver">
                    <div class="driver-avatar">${driverName[0]}</div>
                    <div class="driver-info">
                        <div class="driver-name">${driverName}</div>
                        ${stars ? `<div class="driver-stars" style="color:gold;font-size:12px;">${stars} ${d.rating}</div>` : '<div style="font-size:11px;color:var(--text-secondary);">Yangi haydovchi</div>'}
                    </div>
                </div>

                <div class="dispatch-actions">
                    <a href="tel:${phone}" class="dispatch-btn-call">
                        <i class="fas fa-phone"></i> Qo'ng'iroq
                    </a>
                    <a href="https://t.me/${d.telegram}" target="_blank" class="dispatch-btn-tg">
                        <i class="fab fa-telegram"></i> Telegram
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    if (list.length === 0) {
        grid.innerHTML = '<div class="empty-state">Bu bo\'limda hozircha e\'lon yo\'q.</div>';
    }
}
window.renderDispatcher = renderDispatcher;


// --- Personal Ad Management Functions ---
window.editOwnVideo = function (id) {
    const video = state.videos.find(v => v.id == id);
    if (!video) return;

    // Switch modal to Edit mode
    if (DOM.uploadModalTitle) DOM.uploadModalTitle.textContent = "E'lonni tahrirlash";
    if (DOM.uploadSubmitBtn) DOM.uploadSubmitBtn.textContent = "O'zgarishlarni saqlash";
    if (DOM.editVideoId) DOM.editVideoId.value = id;

    // Fill form
    document.getElementById('uploadTitle').value = video.title;
    document.getElementById('uploadYouTubeUrl').value = `https://youtu.be/${video.ytId}`;
    document.getElementById('uploadCategory').value = video.category;
    document.getElementById('uploadPrice').value = video.price;
    document.getElementById('uploadLocation').value = video.location;
    document.getElementById('uploadPhone').value = video.phone;
    document.getElementById('uploadDesc').value = video.desc;
    document.getElementById('uploadDuration').value = video.duration;

    DOM.uploadModal?.classList.add('active');
};

window.deleteOwnVideo = function (id) {
    if (!confirm("Haqiqatan ham ushbu e'lonni o'chirmoqchimisiz?")) return;
    state.videos = state.videos.filter(v => v.id != id);
    saveVideos();
    renderVideos();
    showToast("E'lon o'chirildi", "info");
};


// --- Auth Handlers ---

function handleLogin(e) {
    if (e) e.preventDefault();
    var emailInput = document.getElementById('loginEmail');
    if (!emailInput) return;

    var email = emailInput.value.trim();
    var password = document.getElementById('loginPass') && document.getElementById('loginPass').value.trim();

    if (!email || !password) return showToast("Email va parolni kiriting!", "error");

    var submitBtn = document.querySelector('#loginForm .submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Kirilmoqda...";
    }

    setTimeout(function () {
        var user = state.users.find(function (u) { return u.email === email && u.password === password; });

        if (!user && email !== 'demo@zootube.uz') {
            showToast("Email yoki parol noto'g'ri!", "error");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "Kirish";
            }
            return;
        }

        if (user) {
            state.currentUser = Object.assign({}, user);
        } else {
            var name = email === 'demo@zootube.uz' ? "Demo Foydalanuvchi" : email.split('@')[0];
            state.currentUser = { name: name, email: email, avatar: "", subscriptions: [] };
        }
        localStorage.setItem('zootube_user', JSON.stringify(state.currentUser));
        if (state.currentUser.email === 'demo@zootube.uz') {
            var touched = false;
            state.videos.forEach(function (v) {
                if (!v.ownerEmail && (v.seller === 'Demo Foydalanuvchi' || v.seller === 'demo')) {
                    v.ownerEmail = 'demo@zootube.uz';
                    touched = true;
                }
            });
            if (touched) saveVideos();
        }
        updateAuthStateUI();
        closeAllModals();
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Kirish";
        }
        renderVideos();
        showToast("Xush kelibsiz, " + state.currentUser.name + "!");
        processPendingAction();
    }, 800);
}

function handleDemoLogin() {
    var demoBtn = document.getElementById('demoLoginBtn');
    if (demoBtn) {
        demoBtn.disabled = true;
        demoBtn.textContent = "Tayyorlanmoqda...";
    }

    setTimeout(function () {
        state.currentUser = {
            name: "Demo Foydalanuvchi",
            email: "demo@zootube.uz",
            avatar: "",
            subscriptions: ["Bobur Itlari", "Elite Cats UZ", "Exotic Zoo"]
        };
        localStorage.setItem('zootube_user', JSON.stringify(state.currentUser));
        var touched = false;
        state.videos.forEach(function (v) {
            if (!v.ownerEmail && (v.seller === 'Demo Foydalanuvchi' || v.seller === 'demo')) {
                v.ownerEmail = 'demo@zootube.uz';
                touched = true;
            }
        });
        if (touched) saveVideos();
        updateAuthStateUI();
        closeAllModals();
        if (demoBtn) {
            demoBtn.disabled = false;
            demoBtn.textContent = "Demo orqali kirish";
        }
        renderVideos();
        showToast("Demo rejimida muvaffaqiyatli kirildi!");
        processPendingAction();
    }, 600);
}
window.handleDemoLogin = handleDemoLogin;

function handleDemoSignup() {
    var demoBtn = document.getElementById('demoSignupBtn');
    if (demoBtn) {
        demoBtn.disabled = true;
        demoBtn.textContent = "Yaratilmoqda...";
    }

    setTimeout(function () {
        var demoUser = {
            name: "Demo Foydalanuvchi",
            email: "demo@zootube.uz",
            password: "demo123",
            avatar: "",
            subscriptions: ["Bobur Itlari", "Elite Cats UZ", "Exotic Zoo"]
        };

        var existingIdx = state.users.findIndex(function (u) { return u.email === demoUser.email; });
        if (existingIdx > -1) {
            state.users[existingIdx] = Object.assign({}, state.users[existingIdx], demoUser);
        } else {
            state.users.push(demoUser);
        }

        localStorage.setItem('zootube_users', JSON.stringify(state.users));
        state.currentUser = {
            name: demoUser.name,
            email: demoUser.email,
            avatar: demoUser.avatar,
            subscriptions: demoUser.subscriptions
        };
        localStorage.setItem('zootube_user', JSON.stringify(state.currentUser));

        updateAuthStateUI();
        closeAllModals();
        if (demoBtn) {
            demoBtn.disabled = false;
            demoBtn.textContent = "Demo ro'yxatdan o'tish";
        }
        renderVideos();
        showToast("Demo ro'yxatdan o'tish muvaffaqiyatli!");
        processPendingAction();
    }, 600);
}
window.handleDemoSignup = handleDemoSignup;

// --- Event Listeners Setup ---
function setupListeners() {
    DOM.menuBtn && DOM.menuBtn.addEventListener('click', function () { document.body.classList.toggle('sidebar-collapsed'); });
    DOM.searchInput && DOM.searchInput.addEventListener('input', renderVideos);
    DOM.regionFilter && DOM.regionFilter.addEventListener('change', function (e) {
        state.currentRegion = e.target.value;
        renderVideos();
    });

    DOM.sidebarItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (item.dataset.nav === 'profile' && !state.currentUser) {
                openAuthModal('signup');
                return;
            }

            DOM.sidebarItems.forEach(function (si) { si.classList.remove('active'); });
            item.classList.add('active');

            if (item.dataset.nav) {
                state.currentNav = item.dataset.nav;
                var targetCat = 'all';
                if (item.dataset.nav === 'vets') targetCat = 'vets';
                if (item.dataset.nav === 'pharmacies') targetCat = 'pharmacies';
                if (item.dataset.nav === 'academy') targetCat = 'akademiya';

                state.currentCategory = targetCat;
                document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
                var catBtn = document.querySelector('.cat-btn[data-category="' + targetCat + '"]');
                if (catBtn) catBtn.classList.add('active');
            } else if (item.dataset.category) {
                state.currentNav = 'home';
                state.currentCategory = item.dataset.category;
                document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
                var targetBtn = document.querySelector('.cat-btn[data-category="' + item.dataset.category + '"]');
                if (targetBtn) targetBtn.classList.add('active');
            }
            renderVideos();
        });
    });

    DOM.categoryTabs && DOM.categoryTabs.addEventListener('click', function (e) {
        if (e.target.classList.contains('cat-btn')) {
            document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
            e.target.classList.add('active');
            state.currentCategory = e.target.dataset.category;
            state.currentNav = 'home';

            DOM.sidebarItems.forEach(function (si) { si.classList.remove('active'); });
            var homeItem = document.querySelector('#sidebar .nav-item[data-nav="home"]');
            if (homeItem) homeItem.classList.add('active');
            renderVideos();
        }
    });

    var showLoginBtn = document.getElementById('showLoginBtn');
    if (showLoginBtn) showLoginBtn.addEventListener('click', function () { DOM.authModal && DOM.authModal.classList.add('active'); });

    var logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', function () {
        state.currentUser = null;
        localStorage.removeItem('zootube_user');
        updateAuthStateUI();
        renderVideos();
    });

    var myProfileBtn = document.getElementById('myProfileBtn');
    if (myProfileBtn) myProfileBtn.addEventListener('click', function (e) {
        e.preventDefault();
        state.currentNav = 'profile';
        DOM.sidebarItems.forEach(function (si) { si.classList.remove('active'); });
        renderVideos();
    });

    document.querySelectorAll('.profile-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.profile-tab').forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            renderProfile();
        });
    });

    DOM.notifBtn && DOM.notifBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        DOM.notifDropdown && DOM.notifDropdown.classList.toggle('active');
        renderNotifications();
    });

    document.addEventListener('click', function () {
        DOM.notifDropdown && DOM.notifDropdown.classList.remove('active');
    });

    var loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    var demoLoginBtn = document.getElementById('demoLoginBtn');
    if (demoLoginBtn) demoLoginBtn.addEventListener('click', handleDemoLogin);

    var signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('signupName') ? document.getElementById('signupName').value.trim() : '';
        var email = document.getElementById('signupEmail') ? document.getElementById('signupEmail').value.trim() : '';
        var password = document.getElementById('signupPass') ? document.getElementById('signupPass').value.trim() : '';

        if (!name || !email || !password) return showToast("Barcha maydonlarni to'ldiring!", "error");

        if (state.users.find(function (u) { return u.email === email; })) {
            return showToast("Bu email allaqachon ro'yxatdan o'tgan!", "error");
        }

        var sBtn = e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Yuklanmoqda..."; }

        setTimeout(function () {
            var newUser = { name: name, email: email, password: password, avatar: "", subscriptions: [] };
            state.users.push(newUser);
            localStorage.setItem('zootube_users', JSON.stringify(state.users));
            state.currentUser = { name: name, email: email, avatar: "", subscriptions: [] };
            localStorage.setItem('zootube_user', JSON.stringify(state.currentUser));
            updateAuthStateUI();
            closeAllModals();
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Ro'yxatdan o'tish"; }
            renderVideos();
            showToast("Ro'yxatdan o'tish muvaffaqiyatli! Xush kelibsiz, " + name + "!");
            processPendingAction();
        }, 1000);
    });

    document.querySelectorAll('.auth-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.auth-tab').forEach(function (t) { t.classList.remove('active'); });
            document.querySelectorAll('.auth-form').forEach(function (f) { f.classList.remove('active'); });
            tab.classList.add('active');
            var formId = tab.dataset.type === 'login' ? 'loginForm' : 'signupForm';
            var targetForm = document.getElementById(formId);
            if (targetForm) targetForm.classList.add('active');
        });
    });

    DOM.sendCommentBtn && DOM.sendCommentBtn.addEventListener('click', function () {
        if (!state.currentUser) return showToast("Izoh qoldirish uchun tizimga kiring!", "info");
        var input = DOM.commentInput;
        var text = input ? input.value.trim() : '';
        if (!text) return;
        state.currentVideo.comments.push({ user: state.currentUser.name, text: text, date: "hozir" });
        saveVideos();
        renderComments();
        if (input) input.value = '';
    });

    DOM.starIcons.forEach(function (s) {
        s.addEventListener('click', function () {
            if (!state.currentUser) return showToast("Reyting berish uchun tizimga kiring!", "info");
            state.currentVideo.rating = parseInt(s.dataset.value);
            saveVideos();
            updateRatingUI();
        });
    });

    DOM.subscribeBtn && DOM.subscribeBtn.addEventListener('click', function () {
        if (!state.currentUser) return DOM.authModal && DOM.authModal.classList.add('active');
        var seller = state.currentVideo.seller;
        var subs = state.currentUser.subscriptions || [];
        var idx = subs.indexOf(seller);
        if (idx > -1) {
            subs.splice(idx, 1);
            DOM.subscribeBtn.textContent = "Obuna bo'lish";
            DOM.subscribeBtn.classList.remove('subscribed');
        } else {
            subs.push(seller);
            DOM.subscribeBtn.textContent = "Obunadasiz";
            DOM.subscribeBtn.classList.add('subscribed');
        }
        state.currentUser.subscriptions = subs;
        localStorage.setItem('zootube_user', JSON.stringify(state.currentUser));
    });

    DOM.likeBtn && DOM.likeBtn.addEventListener('click', function () {
        if (!state.currentUser) return openAuthModal('login');
        var v = state.currentVideo;
        var idx = state.likedVideos.findIndex(function (item) { return item.id === v.id; });
        if (idx > -1) {
            state.likedVideos.splice(idx, 1);
            showToast("Yoqqan videolar ro'yxatidan olindi", "info");
        } else {
            state.likedVideos.unshift(v);
            showToast("Yoqqan videolar ro'yxatiga qo'shildi");
        }
        localStorage.setItem('zootube_liked', JSON.stringify(state.likedVideos));
        updateModalActionStates();
    });

    DOM.laterBtn && DOM.laterBtn.addEventListener('click', function () {
        if (!state.currentUser) return openAuthModal('login');
        var v = state.currentVideo;
        var idx = state.watchLater.findIndex(function (item) { return item.id === v.id; });
        if (idx > -1) {
            state.watchLater.splice(idx, 1);
            showToast("Keyin ko'rish ro'yxatidan olindi", "info");
        } else {
            state.watchLater.unshift(v);
            showToast("Keyin ko'rish ro'yxatiga qo'shildi");
        }
        localStorage.setItem('zootube_watch_later', JSON.stringify(state.watchLater));
        updateModalActionStates();
    });

    var uploadForm = document.getElementById('uploadForm');
    if (uploadForm) uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var ytUrl = document.getElementById('uploadYouTubeUrl') ? document.getElementById('uploadYouTubeUrl').value : '';
        var ytId = extractYTId(ytUrl || '');
        if (!ytId) return showToast("Noto'g'ri YouTube link!", "error");

        var sBtn = DOM.uploadSubmitBtn || e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Yuklanmoqda..."; }

        setTimeout(function () {
            var editId = DOM.editVideoId ? DOM.editVideoId.value : '';
            state.currentNav = 'home';
            state.currentCategory = 'all';
            state.currentRegion = 'all';

            if (editId) {
                var idx = state.videos.findIndex(function (v) { return v.id == editId; });
                if (idx > -1) {
                    var old = state.videos[idx];
                    state.videos[idx] = Object.assign({}, old, {
                        title: document.getElementById('uploadTitle').value,
                        category: document.getElementById('uploadCategory').value,
                        desc: document.getElementById('uploadDesc').value,
                        ytId: ytId,
                        price: document.getElementById('uploadPrice').value,
                        location: document.getElementById('uploadLocation').value,
                        phone: document.getElementById('uploadPhone').value,
                        ownerEmail: old.ownerEmail || (state.currentUser ? state.currentUser.email : ""),
                        duration: document.getElementById('uploadDuration').value || "0:00",
                        isShort: document.getElementById('uploadIsShort') ? document.getElementById('uploadIsShort').checked : false
                    });
                    showToast("O'zgarishlar saqlandi!");
                }
            } else {
                var newV = {
                    id: Date.now(),
                    title: document.getElementById('uploadTitle').value,
                    category: document.getElementById('uploadCategory').value,
                    desc: document.getElementById('uploadDesc').value,
                    ytId: ytId,
                    price: document.getElementById('uploadPrice').value,
                    location: document.getElementById('uploadLocation').value,
                    phone: document.getElementById('uploadPhone').value,
                    ownerEmail: state.currentUser.email,
                    seller: state.currentUser.name,
                    sellerAvatar: state.currentUser.avatar || "https://i.pravatar.cc/150?u=" + state.currentUser.name,
                    views: "0", viewsNum: 0, time: "hozir",
                    duration: document.getElementById('uploadDuration').value || "0:00",
                    isShort: document.getElementById('uploadIsShort') ? document.getElementById('uploadIsShort').checked : false,
                    comments: []
                };
                state.videos.unshift(newV);
                showToast("Muvaffaqiyatli yuklandi!");
            }

            if (DOM.regionFilter) DOM.regionFilter.value = 'all';
            document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('active'); });
            var allCatBtn = document.querySelector('.cat-btn[data-category="all"]');
            if (allCatBtn) allCatBtn.classList.add('active');
            DOM.sidebarItems.forEach(function (si) { si.classList.remove('active'); });
            var homeNavItem = document.querySelector('#sidebar .nav-item[data-nav="home"]');
            if (homeNavItem) homeNavItem.classList.add('active');

            saveVideos();
            renderVideos();
            closeAllModals();
            e.target.reset();
            if (DOM.editVideoId) DOM.editVideoId.value = '';
            if (DOM.uploadModalTitle) DOM.uploadModalTitle.textContent = "E'lon berish";
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "E'lonni joylashtirish"; }
        }, 800);
    });

    // --- New Section Modals Handlers ---

    // Vet Post
    var vetPostForm = DOM.vetPostForm;
    if (vetPostForm) vetPostForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        var sBtn = e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Saqlanmoqda..."; }
        try {
            var diplomaUrl = (document.getElementById('vetDiplomaUrl').value || '').trim();
            var diplomaFileInput = document.getElementById('vetDiplomaFile');
            var diplomaFile = diplomaFileInput && diplomaFileInput.files && diplomaFileInput.files[0] ? diplomaFileInput.files[0] : null;

            if (!diplomaUrl && !diplomaFile) {
                if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Ro'yxatdan o'tish"; }
                return showToast("Diplom URL yoki fayl yuklang!", "error");
            }

            var diplomaFileData = "";
            if (diplomaFile) {
                if (diplomaFile.size > 2 * 1024 * 1024) {
                    if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Ro'yxatdan o'tish"; }
                    return showToast("Diplom fayli 2MB dan kichik bo'lishi kerak!", "error");
                }
                diplomaFileData = await readFileAsDataURL(diplomaFile);
            }

            var servicesRaw = (document.getElementById('vetServices').value || '').trim();
            var services = servicesRaw
                ? servicesRaw.split(',').map(function (s) { return s.trim(); }).filter(Boolean)
                : [];

            var expYears = document.getElementById('vetExperience').value;
            var newVet = {
                id: "v_" + Date.now(),
                ownerName: state.currentUser ? state.currentUser.name : "",
                ownerEmail: state.currentUser ? state.currentUser.email : "",
                name: document.getElementById('vetName').value.trim(),
                specialty: document.getElementById('vetSpecialty').value.trim(),
                clinic: (document.getElementById('vetClinic').value || '').trim(),
                experience: expYears + " yil",
                phone: document.getElementById('vetPhone').value.trim(),
                telegram: document.getElementById('vetTelegram').value.replace('@', '').trim(),
                avatar: document.getElementById('vetImage').value || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
                location: getRegionName(document.getElementById('vetLocation').value),
                workTime: (document.getElementById('vetWorkTime').value || '').trim(),
                services: services,
                bio: (document.getElementById('vetBio').value || '').trim(),
                emergency: document.getElementById('vetEmergency').checked,
                homeVisit: document.getElementById('vetHomeVisit').checked,
                diploma: {
                    number: (document.getElementById('vetDiplomaNumber').value || '').trim(),
                    url: diplomaUrl,
                    fileName: diplomaFile ? diplomaFile.name : '',
                    fileData: diplomaFileData
                },
                verified: !!(diplomaUrl || diplomaFileData),
                patients: 0,
                rating: 5.0
            };

            state.vets.unshift(newVet);
            saveSectionData();
            showToast("Veterinar e'loni muvaffaqiyatli qo'shildi!");
            renderVets();
            closeAllModals();
            e.target.reset();
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Ro'yxatdan o'tish"; }
        } catch (err) {
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Ro'yxatdan o'tish"; }
            showToast("Xatolik yuz berdi. Qayta urinib ko'ring.", "error");
        }
    });

    // Store Post
    var storePostForm = DOM.storePostForm;
    if (storePostForm) storePostForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var sBtn = e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Qo'shilmoqda..."; }
        setTimeout(function () {
            var newProd = {
                id: "p_" + Date.now(),
                ownerName: state.currentUser ? state.currentUser.name : "",
                ownerEmail: state.currentUser ? state.currentUser.email : "",
                name: document.getElementById('storeProductName').value,
                category: document.getElementById('storeCategory').value,
                price: document.getElementById('storePrice').value,
                unit: document.getElementById('storeUnit').value,
                stock: parseInt(document.getElementById('storeStock').value || "0"),
                desc: document.getElementById('storeDesc').value,
                image: document.getElementById('storeImage').value || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
                rating: 5.0, telegram: "zoovet_shop" // default seller
            };
            state.pharmacies.unshift(newProd);
            saveSectionData();
            showToast("Mahsulot do'konga qo'shildi!");
            renderPharmacies();
            closeAllModals();
            e.target.reset();
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Qo'shish"; }
        }, 800);
    });

    // Dispatcher Post
    var dispatchPostForm = DOM.dispatchPostForm;
    if (dispatchPostForm) dispatchPostForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var sBtn = e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Yuklanmoqda..."; }
        setTimeout(function () {
            var newAd = {
                id: "d_" + Date.now(),
                ownerName: state.currentUser ? state.currentUser.name : "",
                ownerEmail: state.currentUser ? state.currentUser.email : "",
                type: document.getElementById('dispatchType').value,
                vehicleType: document.getElementById('dispatchVehicle').value,
                title: (document.getElementById('dispatchFrom').value + "dan " + document.getElementById('dispatchTo').value + "ga yuk tashish e'loni"),
                from: document.getElementById('dispatchFrom').value,
                to: document.getElementById('dispatchTo').value,
                capacity: document.getElementById('dispatchCapacity').value,
                price: document.getElementById('dispatchPrice').value,
                phone: document.getElementById('dispatchPhone').value,
                telegram: document.getElementById('dispatchTelegram').value.replace('@', ''),
                desc: document.getElementById('dispatchDesc').value,
                driver: state.currentUser.name,
                rating: 0, available: true, date: "hozir"
            };
            state.dispatchers.unshift(newAd);
            saveSectionData();
            showToast("Transport e'loningiz qo'shildi!");
            renderDispatcher();
            closeAllModals();
            e.target.reset();
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "E'lonni joylashtirish"; }
        }, 800);
    });

    // Academy Post
    var academyPostForm = DOM.academyPostForm;
    if (academyPostForm) academyPostForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var sBtn = e.target.querySelector('.submit-btn');
        if (sBtn) { sBtn.disabled = true; sBtn.textContent = "Yaratilmoqda..."; }
        setTimeout(function () {
            var ytUrl = document.getElementById('academyYTUrl').value;
            var ytId = extractYTId(ytUrl);
            var newCourse = {
                id: "c_" + Date.now(),
                ownerName: state.currentUser ? state.currentUser.name : "",
                ownerEmail: state.currentUser ? state.currentUser.email : "",
                title: document.getElementById('academyTitle').value,
                author: state.currentUser.name,
                lessons: parseInt(document.getElementById('academyLessons').value || "0", 10),
                duration: document.getElementById('academyDuration').value,
                ytId: ytId || "",
                thumbnail: ytId ? "https://img.youtube.com/vi/" + ytId + "/mqdefault.jpg" : "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80",
                rating: 5.0,
                verified: false
            };
            if (!state.academyCourses) state.academyCourses = [];
            state.academyCourses.unshift(newCourse);
            saveSectionData();
            showToast("Yangi kurs qo'shildi!");
            renderAcademy();
            closeAllModals();
            e.target.reset();
            if (sBtn) { sBtn.disabled = false; sBtn.textContent = "Kursni yaratish"; }
        }, 800);
    });

    // --- End of New Section Handlers ---

    document.querySelectorAll('.admin-content-tabs button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.admin-content-tabs button').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            if (typeof switchAdminTab === 'function') {
                switchAdminTab(btn.dataset.adminTab === 'videos' ? 'videos' : 'users');
            }
        });
    });

    document.querySelectorAll('.close-modal, .modal-overlay').forEach(function (el) {
        el.addEventListener('click', closeAllModals);
    });
}

// --- Start ---
function init() {
    console.log("ZooTube initialization...");
    normalizeAllYouTubeData();
    sanitizeLegacyPersonImages();
    updateAuthStateUI();
    renderVideos();
    setupListeners();
    console.log("ZooTube initialized.");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
